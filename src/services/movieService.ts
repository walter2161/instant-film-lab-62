import { Movie, CreateMovieRequest, MovieScene } from "@/types/movie";
import { CharacterPersona } from "@/types/character";

const MISTRAL_API_KEY = "aynCSftAcQBOlxmtmpJqVzco8K4aaTDQ";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";

export class MovieService {
  static async createMovie(request: CreateMovieRequest): Promise<Movie> {
    try {
      // 1. Gerar roteiro com Mistral
      const script = await this.generateScript(request);
      
      // 2. Gerar cenas com imagens e áudio
      const scenes = await this.generateScenes(script.scenes);
      
      // 3. Criar objeto do filme
      const movie: Movie = {
        id: crypto.randomUUID(),
        title: script.title,
        genre: request.genre,
        style: request.style,
        duration: request.duration,
        synopsis: script.synopsis,
        characters: script.characters,
        scenes,
        createdAt: new Date().toISOString(),
        thumbnail: scenes[0]?.imageUrl,
        aspectRatio: request.aspectRatio,
        type: 'movie'
      };
      
      return movie;
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      throw new Error("Falha ao criar filme. Tente novamente.");
    }
  }
  
  private static async generateScript(request: CreateMovieRequest) {
    // Calcular número de cenas - mínimo 30 para filmes
    const durationInSeconds = this.parseDurationToSeconds(request.duration);
    const numberOfScenes = Math.max(30, Math.floor(durationInSeconds / 2)); // Mínimo 30 cenas, 2 segundos por cena
    
    const prompt = `Você é um roteirista especialista da Netflix. Crie um roteiro cinematográfico de alta qualidade para um ${request.genre} no estilo ${request.style} com duração de ${request.duration}.
    ${request.customPrompt ? `Tema específico: ${request.customPrompt}` : ''}
    
    CRITÉRIOS DE QUALIDADE NETFLIX:
    - Narrativa envolvente com arcos dramáticos bem definidos
    - Diálogos naturais e cativantes entre personagens
    - Progressão clara da história com tensão crescente
    - Personagens complexos e bem desenvolvidos
    - Cada cena deve avançar a trama de forma significativa
    
    Retorne um JSON com:
    {
      "title": "Título cinematográfico impactante",
      "synopsis": "Sinopse envolvente em 3-4 frases que captura a essência da história",
      "characters": [
        {
          "name": "Nome único e memorável",
          "description": "Personalidade complexa com motivações claras",
          "voice": "alloy",
          "persona": {
            "name": "Nome",
            "description": "Background detalhado, objetivos, conflitos internos",
            "voice": "alloy",
            "appearance": {
              "face": "Traços faciais únicos e expressivos",
              "body": "Físico que reflete a personalidade",
              "clothing": "Vestuário que conta a história do personagem",
              "age": "Idade específica",
              "ethnicity": "Origem étnica diversificada",
              "hair": "Cabelo que define o visual",
              "eyes": "Olhos expressivos e únicos",
              "build": "Estrutura física detalhada"
            },
            "visualPrompt": "Descrição visual cinematográfica completa para manter absoluta consistência visual em todas as cenas"
          }
        }
      ],
      "scenes": [
        {
          "text": "Diálogo natural e envolvente OU narração cinematográfica que avança a história (cada cena deve ser ÚNICA e específica)",
          "visualDescription": "Composição visual cinematográfica detalhada - ângulo de câmera, iluminação, atmosfera, cenário específico, ações dos personagens (SEM repetições)",
          "duration": 2,
          "characters": ["personagens específicos na cena"]
        }
      ]
    }
    
    EXIGÊNCIAS CRÍTICAS:
    - Gere EXATAMENTE ${numberOfScenes} cenas ÚNICAS e específicas
    - CADA cena deve ter texto e visual COMPLETAMENTE diferentes
    - Crie uma progressão narrativa clara do início ao fim
    - Inclua diálogos realistas entre personagens quando apropriado
    - Varie tipos de cena: diálogo, ação, suspense, revelação, clímax
    - Use os visualPrompts dos personagens nas descrições visuais
    - NUNCA repita textos ou descrições visuais
    - Foque na qualidade cinematográfica de cada momento
    - Português brasileiro autêntico e natural`;

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
      throw new Error("Falha ao gerar roteiro");
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
        // Gerar imagem usando a descrição visual detalhada
        const visualPrompt = scriptScene.visualDescription || scriptScene.prompt;
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(visualPrompt + " cinematic, high quality, detailed")}?model=flux&width=1024&height=1024`;
        
        // Não usar áudio externo - usar Web Speech API no cliente
        scenes.push({
          id: crypto.randomUUID(),
          prompt: visualPrompt,
          imageUrl,
          audioUrl: "", // Vazio para usar narração sintética
          duration: scriptScene.duration || 2,
          text: scriptScene.text,
          visualDescription: scriptScene.visualDescription || scriptScene.prompt
        });
        
        // Pequena pausa para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`Erro ao gerar cena ${i + 1}:`, error);
        // Continuar com placeholder se uma cena falhar
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
  
  static saveMovie(movie: Movie) {
    const savedMovies = this.getSavedMovies();
    savedMovies.push(movie);
    localStorage.setItem("ledtv_movies", JSON.stringify(savedMovies));
  }
  
  static getSavedMovies(): Movie[] {
    const saved = localStorage.getItem("ledtv_movies");
    return saved ? JSON.parse(saved) : [];
  }

  static getAllMovies(): Movie[] {
    // Combina filmes salvos com filmes em destaque
    const savedMovies = this.getSavedMovies();
    const { FEATURED_MOVIES } = require("@/data/featuredContent");
    
    // Remove duplicatas baseado no ID
    const allMovies = [...FEATURED_MOVIES, ...savedMovies];
    const uniqueMovies = allMovies.filter((movie, index, array) => 
      array.findIndex(m => m.id === movie.id) === index
    );
    
    return uniqueMovies;
  }
  
  static deleteMovie(movieId: string) {
    const savedMovies = this.getSavedMovies();
    const filtered = savedMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem("ledtv_movies", JSON.stringify(filtered));
  }

  private static parseDurationToSeconds(duration: string): number {
    // Converter duração como "1 minuto", "30 segundos", "2 minutos" para segundos
    const minutes = duration.match(/(\d+)\s*minuto/i);
    const seconds = duration.match(/(\d+)\s*segundo/i);
    
    let totalSeconds = 0;
    if (minutes) totalSeconds += parseInt(minutes[1]) * 60;
    if (seconds) totalSeconds += parseInt(seconds[1]);
    
    // Se não conseguir parsear, usar 30 segundos como padrão
    return totalSeconds || 30;
  }
}