import { Movie } from "@/types/movie";
import { MovieService } from "./movieService";

// Lista de filmes ganhadores do Oscar com seus detalhes
const OSCAR_WINNERS = [
  {
    title: "Parasita: Reflexos",
    originalTitle: "Parasite",
    genre: "Thriller Psicológico",
    style: "Drama Social Brasileiro",
    theme: "Uma família de classe baixa em São Paulo se infiltra na vida de uma família rica através de empregos domésticos, revelando desigualdades sociais profundas.",
    year: 2019
  },
  {
    title: "Moonlight: Sob a Lua Carioca",
    originalTitle: "Moonlight", 
    genre: "Drama",
    style: "Coming-of-age Brasileiro",
    theme: "Um jovem negro do Rio de Janeiro luta para encontrar sua identidade e sexualidade em três fases de sua vida nas favelas cariocas.",
    year: 2016
  },
  {
    title: "O Artista de Rua",
    originalTitle: "The Artist",
    genre: "Drama Musical",
    style: "Período Brasileiro",
    theme: "Um artista de rua em São Paulo dos anos 60 luta para se adaptar às mudanças culturais enquanto busca reconhecimento artístico.",
    year: 2011
  },
  {
    title: "Cidade Sem Lei",
    originalTitle: "No Country for Old Men",
    genre: "Thriller",
    style: "Neo-Western Brasileiro",
    theme: "No sertão nordestino, um homem encontra uma mala cheia de dinheiro e desencadeia uma perseguição mortal com um assassino implacável.",
    year: 2007
  },
  {
    title: "Crash: Vidas Cruzadas",
    originalTitle: "Crash",
    genre: "Drama",
    style: "Drama Social",
    theme: "Histórias entrelaçadas de pessoas de diferentes classes e etnias em São Paulo, revelando preconceitos e conexões humanas inesperadas.",
    year: 2004
  },
  {
    title: "O Senhor dos Anéis: A Sociedade Dourada",
    originalTitle: "The Lord of the Rings",
    genre: "Fantasia Épica",
    style: "Aventura Fantástica Brasileira",
    theme: "Uma jornada épica pelo Brasil místico para destruir um artefato dourado que ameaça escravizar todas as tribos indígenas.",
    year: 2003
  },
  {
    title: "Uma Mente Brilhante do Sertão",
    originalTitle: "A Beautiful Mind",
    genre: "Drama Biográfico",
    style: "Drama Psicológico",
    theme: "A história de um matemático genial do interior que luta contra a esquizofrenia enquanto desenvolve teorias revolucionárias.",
    year: 2001
  },
  {
    title: "Gladiador do Cangaço",
    originalTitle: "Gladiator",
    genre: "Épico Histórico",
    style: "Western Nordestino",
    theme: "Um cangaceiro traído busca vingança contra o coronel que matou sua família, tornando-se uma lenda no sertão.",
    year: 2000
  },
  {
    title: "Beleza Paulistana",
    originalTitle: "American Beauty",
    genre: "Drama",
    style: "Drama Suburbano",
    theme: "Um publicitário de meia-idade em São Paulo questiona sua vida superficial e se apaixona pela melhor amiga de sua filha adolescente.",
    year: 1999
  },
  {
    title: "Shakespeare Apaixonado na Bahia",
    originalTitle: "Shakespeare in Love",
    genre: "Romance Histórico",
    style: "Comédia Romântica Barroca",
    theme: "Um dramaturgo português no Brasil colonial se apaixona por uma atriz disfarçada de homem durante os primeiros teatros baianos.",
    year: 1998
  },
  {
    title: "Titanic do Rio",
    originalTitle: "Titanic",
    genre: "Romance Épico",
    style: "Drama Romântico",
    theme: "Romance impossível entre uma socialite carioca e um artista pobre durante a tragédia do naufrágio de um navio de luxo na costa brasileira.",
    year: 1997
  },
  {
    title: "O Paciente Inglês do Nordeste",
    originalTitle: "The English Patient",
    genre: "Drama de Guerra",
    style: "Drama Histórico",
    theme: "Durante a Segunda Guerra, um piloto ferido em hospital no Recife relembra seu amor proibido por uma mulher casada no Norte da África.",
    year: 1996
  },
  {
    title: "Coração Valente Cangaceiro",
    originalTitle: "Braveheart",
    genre: "Épico Histórico",
    style: "Drama de Guerra Nordestino",
    theme: "A luta épica de um líder cangaceiro pela liberdade do seu povo contra a opressão dos coronéis no sertão brasileiro.",
    year: 1995
  },
  {
    title: "Forrest Gump: O Brasileiro",
    originalTitle: "Forrest Gump",
    genre: "Drama Comédia",
    style: "Fábula Brasileira",
    theme: "Um homem simples do interior atravessa décadas da história brasileira, presenciando momentos cruciais do país por acaso.",
    year: 1994
  },
  {
    title: "A Lista de Schindler do Brasil",
    originalTitle: "Schindler's List",
    genre: "Drama Histórico",
    style: "Drama de Guerra",
    theme: "Durante a ditadura militar, um empresário brasileiro arriscas sua vida para salvar intelectuais e artistas perseguidos pelo regime.",
    year: 1993
  },
  {
    title: "Os Imperdoáveis do Sertão",
    originalTitle: "Unforgiven",
    genre: "Western",
    style: "Western Nordestino",
    theme: "Um ex-cangaceiro aposentado volta à vida de violência para uma última missão de vingança no sertão árido.",
    year: 1992
  },
  {
    title: "O Silêncio dos Inocentes da Amazônia",
    originalTitle: "The Silence of the Lambs",
    genre: "Thriller Psicológico",
    style: "Terror Psicológico",
    theme: "Uma agente federal novata deve consultar um psicopata genial para capturar um serial killer na Amazônia brasileira.",
    year: 1991
  },
  {
    title: "Dança com Lobos-Guará",
    originalTitle: "Dances with Wolves",
    genre: "Drama Épico",
    style: "Western Brasileiro",
    theme: "Um soldado brasileiro do século XIX desenvolve profundo respeito pela cultura indígena durante sua missão no Pantanal.",
    year: 1990
  },
  {
    title: "Rain Man Brasileiro",
    originalTitle: "Rain Man",
    genre: "Drama",
    style: "Road Movie Nacional",
    theme: "Dois irmãos fazem uma jornada de carro pelo Brasil, descobrindo que um deles tem autismo e habilidades extraordinárias.",
    year: 1988
  },
  {
    title: "O Último Imperador de Petrópolis",
    originalTitle: "The Last Emperor",
    genre: "Drama Histórico",
    style: "Épico Histórico Brasileiro",
    theme: "A vida do último imperador do Brasil, Dom Pedro II, desde sua coroação até o exílio, retratando o fim do império brasileiro.",
    year: 1987
  }
];

export class OscarMovieGenerator {
  static async generateOscarBasedMovies(): Promise<Movie[]> {
    const movies: Movie[] = [];
    
    for (let i = 0; i < OSCAR_WINNERS.length; i++) {
      const oscarMovie = OSCAR_WINNERS[i];
      
      try {
        console.log(`Gerando filme ${i + 1}/20: ${oscarMovie.title}`);
        
        // Gerar cartaz 9:16 usando a API interna
        const posterPrompt = `Movie poster for "${oscarMovie.title}", ${oscarMovie.genre}, ${oscarMovie.style}, cinematic poster design, professional movie poster, brazilian cinema aesthetic, dramatic lighting, compelling composition, 9:16 aspect ratio`;
        
        let thumbnailUrl = "/placeholder.svg";
        try {
          const posterResponse = await fetch('/api/generate-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: posterPrompt,
              width: 768,
              height: 1366, // 9:16 aspect ratio
              model: 'flux.schnell'
            }),
          });

          if (posterResponse.ok) {
            const posterData = await posterResponse.json();
            thumbnailUrl = posterData.imageUrl || "/placeholder.svg";
          }
        } catch (posterError) {
          console.error(`Erro ao gerar cartaz para ${oscarMovie.title}:`, posterError);
        }
        
        // Criar request para o filme
        const movieRequest = {
          genre: oscarMovie.genre,
          style: oscarMovie.style,
          duration: "2 minutos",
          customPrompt: oscarMovie.theme,
          aspectRatio: "16:9" as const
        };
        
        // Gerar o filme completo
        const movie = await MovieService.createMovie(movieRequest);
        
        // Atualizar com informações específicas do Oscar
        const updatedMovie: Movie = {
          ...movie,
          id: `oscar-${i + 1}`,
          title: oscarMovie.title,
          synopsis: `Adaptação brasileira inspirada em "${oscarMovie.originalTitle}" (${oscarMovie.year}). ${oscarMovie.theme}`,
          thumbnail: thumbnailUrl,
          aspectRatio: "9:16" // Cartaz em 9:16 mas filme em 16:9
        };
        
        movies.push(updatedMovie);
        
        // Pausa para não sobrecarregar as APIs
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.error(`Erro ao gerar filme ${oscarMovie.title}:`, error);
        
        // Criar filme básico mesmo se houver erro
        const fallbackMovie: Movie = {
          id: `oscar-${i + 1}`,
          title: oscarMovie.title,
          genre: oscarMovie.genre,
          style: oscarMovie.style,
          duration: "2 minutos",
          synopsis: `Adaptação brasileira inspirada em "${oscarMovie.originalTitle}" (${oscarMovie.year}). ${oscarMovie.theme}`,
          characters: [],
          scenes: [],
          createdAt: new Date().toISOString(),
          thumbnail: "/placeholder.svg",
          aspectRatio: "9:16",
          type: "movie"
        };
        
        movies.push(fallbackMovie);
      }
    }
    
    return movies;
  }
}