import { Movie, Series, CreateSeriesRequest, MovieScene } from "@/types/movie";
import { CharacterPersona } from "@/types/character";

const MISTRAL_API_KEY = "aynCSftAcQBOlxmtmpJqVzco8K4aaTDQ";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

export class SeriesService {
  static async createSeries(request: CreateSeriesRequest): Promise<Series> {
    try {
      // 1. Gerar episódios
      const episodes: Movie[] = [];
      
      for (let season = 1; season <= request.numberOfSeasons; season++) {
        for (let episode = 1; episode <= request.numberOfEpisodes; episode++) {
          const episodeScript = await this.generateEpisodeScript(request, season, episode);
          const scenes = await this.generateScenes(episodeScript.scenes);
          
          const episodeMovie: Movie = {
            id: crypto.randomUUID(),
            title: episodeScript.title,
            genre: request.genre,
            style: request.style,
            duration: request.episodeDuration,
            synopsis: episodeScript.synopsis,
            characters: episodeScript.characters,
            scenes,
            createdAt: new Date().toISOString(),
            thumbnail: scenes[0]?.imageUrl,
            aspectRatio: request.aspectRatio,
            type: 'series',
            seasonNumber: season,
            episodeNumber: episode,
            totalEpisodes: request.numberOfEpisodes
          };
          
          episodes.push(episodeMovie);
        }
      }
      
      // 2. Criar objeto da série
      const series: Series = {
        id: crypto.randomUUID(),
        title: episodes[0].title.replace(/EP\d+/, '').trim(),
        genre: request.genre,
        style: request.style,
        synopsis: episodes[0].synopsis,
        episodes,
        createdAt: new Date().toISOString(),
        thumbnail: episodes[0].thumbnail,
        aspectRatio: request.aspectRatio,
        totalSeasons: request.numberOfSeasons
      };
      
      return series;
    } catch (error) {
      console.error("Erro ao criar série:", error);
      throw new Error("Falha ao criar série. Tente novamente.");
    }
  }
  
  private static async generateEpisodeScript(request: CreateSeriesRequest, season: number, episode: number) {
    // Calcular número de cenas - mínimo 15 para episódios
    const durationInSeconds = this.parseDurationToSeconds(request.episodeDuration);
    const numberOfScenes = Math.max(15, Math.floor(durationInSeconds / 2)); // Mínimo 15 cenas, 2 segundos por cena
    
    const prompt = `Você é um roteirista especialista da Netflix criando episódios de séries premium. Crie um roteiro de episódio ${request.genre} no estilo ${request.style} com duração de ${request.episodeDuration}.
    
    EPISÓDIO: Temporada ${season}, Episódio ${episode}
    ${request.customPrompt ? `Universo da série: ${request.customPrompt}` : ''}
    
    ESTRUTURA OBRIGATÓRIA DE 3 ATOS POR EPISÓDIO:
    - ATO 1 (Abertura - primeiros 25% das cenas): Gancho inicial, relembrança necessária, estabelecimento do conflito do episódio
    - ATO 2 (Desenvolvimento - 50% das cenas): Progressão do conflito, desenvolvimento de personagens, obstáculos crescentes
    - ATO 3 (Resolução - últimos 25% das cenas): Clímax do episódio, resolução e gancho para próximos episódios
    
    PADRÃO NETFLIX DE EXCELÊNCIA:
    - Cada episódio deve ter um arco narrativo completo seguindo os 3 atos
    - Desenvolver personagens de forma consistente entre episódios
    - Criar tensão e cliffhangers quando apropriado
    - Diálogos autênticos e envolventes
    - Ritmo cinematográfico profissional
    - Continuidade narrativa entre episódios
    - ZERO repetição de situações, cenários ou diálogos
    - Cada episódio deve ter identidade única dentro da série
    
    Retorne um JSON com:
    {
      "title": "Nome Épico da Série - T${season}E${episode}: Título do Episódio",
      "synopsis": "Sinopse específica deste episódio que avança a trama geral da série",
      "characters": [
        {
          "name": "Nome distintivo e memorável",
          "description": "Personalidade rica com desenvolvimento ao longo da série",
          "voice": "alloy",
          "persona": {
            "name": "Nome",
            "description": "História pessoal, objetivos na série, relacionamentos",
            "voice": "alloy",
            "appearance": {
              "face": "Características faciais únicas e expressivas",
              "body": "Físico que reflete a jornada do personagem",
              "clothing": "Guarda-roupa consistente com o mundo da série",
              "age": "Idade precisa",
              "ethnicity": "Diversidade étnica autêntica",
              "hair": "Estilo de cabelo icônico",
              "eyes": "Olhos que transmitem emoção",
              "build": "Estrutura física bem definida"
            },
            "visualPrompt": "Descrição visual cinematográfica ultra-detalhada para manter consistência absoluta em todos os episódios"
          }
        }
      ],
      "scenes": [
        {
          "text": "Diálogo específico entre personagens OU narração que revela informações cruciais (cada cena deve ser TOTALMENTE única)",
          "visualDescription": "Direção cinematográfica detalhada - enquadramento, movimento de câmera, iluminação dramática, cenário específico, emoções dos personagens (SEM repetições)",
          "duration": 2,
          "characters": ["personagens específicos presentes"]
        }
      ]
    }
    
    MANDATÓRIOS PARA ESTRUTURA DE 3 ATOS:
    - Gere EXATAMENTE ${numberOfScenes} cenas divididas em 3 atos:
      * ATO 1: ${Math.floor(numberOfScenes * 0.25)} cenas (abertura e estabelecimento do conflito)
      * ATO 2: ${Math.floor(numberOfScenes * 0.5)} cenas (desenvolvimento e confrontos)
      * ATO 3: ${numberOfScenes - Math.floor(numberOfScenes * 0.25) - Math.floor(numberOfScenes * 0.5)} cenas (clímax e resolução)
    - ZERO repetição de texto, situações ou descrições visuais
    - Construa uma narrativa episódica coerente seguindo os 3 atos
    - Varie tipos de cena: revelações, conflitos, desenvolvimento, ação, suspense, resolução
    - Mantenha a consistência visual dos personagens usando visualPrompts
    - Inclua diálogos naturais e específicos da situação
    - Cada cena deve contribuir para o arco do episódio
    - Português brasileiro fluente e autêntico
    - Crie momentos cinematográficos memoráveis
    - Cada ato deve ter ritmo e intensidade apropriados`;

    const response = await fetch(MISTRAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages: [{
          role: "user",
          content: prompt
        }],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error("Falha ao gerar roteiro do episódio");
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Extrair JSON do response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Formato de resposta inválido");
    }
    
    return JSON.parse(jsonMatch[0]);
  }
  
  private static async generateScenes(scriptScenes: any[]): Promise<MovieScene[]> {
    const scenes: MovieScene[] = [];
    
    for (let i = 0; i < scriptScenes.length; i++) {
      const scriptScene = scriptScenes[i];
      
      try {
        // Gerar imagem usando API interna sem marca d'água
        const visualPrompt = scriptScene.visualDescription || scriptScene.prompt;
        const enhancedPrompt = `${visualPrompt}, cinematic composition, high quality, detailed, professional cinematography, episode scene`;
        
        // Usar API de geração integrada
        const response = await fetch('/api/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: enhancedPrompt,
            width: 1024,
            height: 1024,
            model: 'flux.schnell'
          }),
        });

        let imageUrl = "/placeholder.svg";
        if (response.ok) {
          const data = await response.json();
          imageUrl = data.imageUrl || "/placeholder.svg";
        }
        
        scenes.push({
          id: crypto.randomUUID(),
          prompt: visualPrompt,
          imageUrl,
          audioUrl: "",
          duration: scriptScene.duration || 2,
          text: scriptScene.text,
          visualDescription: scriptScene.visualDescription || scriptScene.prompt
        });
        
        // Pequena pausa para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Erro ao gerar cena ${i + 1}:`, error);
        scenes.push({
          id: crypto.randomUUID(),
          prompt: scriptScene.visualDescription || scriptScene.prompt,
          imageUrl: "/placeholder.svg",
          audioUrl: "",
          duration: scriptScene.duration || 2,
          text: scriptScene.text,
          visualDescription: scriptScene.visualDescription || scriptScene.prompt
        });
      }
    }
    
    return scenes;
  }
  
  static saveSeries(series: Series) {
    const savedSeries = this.getSavedSeries();
    savedSeries.push(series);
    localStorage.setItem("ledtv_series", JSON.stringify(savedSeries));
  }
  
  static getSavedSeries(): Series[] {
    const saved = localStorage.getItem("ledtv_series");
    return saved ? JSON.parse(saved) : [];
  }

  static getAllSeries(): Series[] {
    const savedSeries = this.getSavedSeries();
    const { FEATURED_SERIES } = require("@/data/featuredContent");
    
    const allSeries = [...FEATURED_SERIES, ...savedSeries];
    const uniqueSeries = allSeries.filter((series, index, array) => 
      array.findIndex(s => s.id === series.id) === index
    );
    
    return uniqueSeries;
  }
  
  static deleteSeries(seriesId: string) {
    const savedSeries = this.getSavedSeries();
    const filtered = savedSeries.filter(series => series.id !== seriesId);
    localStorage.setItem("ledtv_series", JSON.stringify(filtered));
  }

  private static parseDurationToSeconds(duration: string): number {
    const minutes = duration.match(/(\d+)\s*minuto/i);
    const seconds = duration.match(/(\d+)\s*segundo/i);
    
    let totalSeconds = 0;
    if (minutes) totalSeconds += parseInt(minutes[1]) * 60;
    if (seconds) totalSeconds += parseInt(seconds[1]);
    
    return totalSeconds || 30;
  }
}