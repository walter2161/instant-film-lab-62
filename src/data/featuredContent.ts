import { Movie, Series } from "@/types/movie";
import terrorEspacialPoster from "@/assets/terror-espacial-poster-916.jpg";
import romanceParisPoster from "@/assets/romance-paris-poster-916.jpg";
import aventuraNinjaPoster from "@/assets/aventura-ninja-poster.jpg";
import sherlockPoster from "@/assets/sherlock-poster-916.jpg";
import robotsPoster from "@/assets/robots-poster.jpg";

// Novos cartazes 9:16
import despertarDragoesPoster from "@/assets/despertar-dragoes-poster.jpg";
import misteriosSpPoster from "@/assets/misterios-sp-poster.jpg";
import amazoniaPerdidaPoster from "@/assets/amazonia-perdida-poster.jpg";
import codigoQuantumPoster from "@/assets/codigo-quantum-poster.jpg";
import coracaoIpanemaPoster from "@/assets/coracao-ipanema-poster.jpg";
import guardiaoesGalaxiaPoster from "@/assets/guardioes-galaxia-poster-916.jpg";
import segredosPantanalPoster from "@/assets/segredos-pantanal-poster-916.jpg";
import legendaCangaceiroPoster from "@/assets/lenda-cangaceiro-poster.jpg";
import fantasmaOperaPoster from "@/assets/fantasma-opera-poster.jpg";
import cacadoresOuroPoster from "@/assets/cacadores-ouro-poster.jpg";

// Filmes brasileiros com narrativas cinematográficas únicas estilo Netflix
export const FEATURED_MOVIES: Movie[] = [
  {
    id: "featured-1",
    title: "A Última Expedição",
    genre: "Aventura",
    style: "Épico Brasileiro",
    duration: "2 minutos",
    synopsis: "Em 1889, um grupo de exploradores brasileiros parte para a Amazônia em busca de uma cidade perdida mencionada em antigos mapas jesuítas, descobrindo que os maiores tesouros não são de ouro.",
    characters: [
      { name: "Capitão Eduardo Santos", description: "Explorador experiente e líder corajoso da expedição", voice: "alloy" },
      { name: "Isabel Moreira", description: "Arqueóloga brilhante especialista em culturas indígenas", voice: "nova" },
      { name: "Joaquim", description: "Guia indígena sábio que conhece os segredos ancestrais da floresta", voice: "echo" }
    ],
    scenes: [
      {
        id: "exp-1",
        prompt: "Manaus harbor 1889",
        imageUrl: "https://pollinations.ai/p/manaus%20harbor%201889%20historical%20brazil%20expedition%20preparation?width=1280&height=720&seed=5001",
        audioUrl: "",
        duration: 4,
        text: "Manaus, 1889. O porto fervilha de atividade. Vapores chegam carregados de borracha enquanto o Capitão Eduardo Santos verifica os últimos suprimentos para a expedição mais perigosa de sua vida.",
        visualDescription: "Historic Manaus harbor in 1889, wooden boats, colonial architecture, misty Amazon river atmosphere"
      },
      {
        id: "exp-2",
        prompt: "Isabel examining ancient map",
        imageUrl: "https://pollinations.ai/p/female%20archaeologist%20examining%20ancient%20jesuit%20map%201889%20brazil?width=1280&height=720&seed=5002",
        audioUrl: "",
        duration: 4,
        text: "Isabel Moreira: 'Este mapa jesuíta de 1750 indica uma cidade dourada três dias rio acima. Os símbolos sugerem uma civilização avançada.'",
        visualDescription: "Young female archaeologist in period clothing studying an ancient map by candlelight, mysterious symbols visible"
      },
      {
        id: "exp-3",
        prompt: "Indigenous guide Joaquim",
        imageUrl: "https://pollinations.ai/p/indigenous%20brazilian%20guide%20warrior%20amazon%20forest%201889?width=1280&height=720&seed=5003",
        audioUrl: "",
        duration: 4,
        text: "Joaquim: 'Meu povo conta histórias dessa cidade há gerações. Mas também falam dos guardiões que a protegem.'",
        visualDescription: "Wise indigenous Brazilian guide in traditional attire, standing by the Amazon river, confident and mysterious"
      },
      {
        id: "exp-4",
        prompt: "Expedition team departing",
        imageUrl: "https://pollinations.ai/p/brazilian%20expedition%20team%20departing%20amazon%20boats%201889%20adventure?width=1280&height=720&seed=5004",
        audioUrl: "",
        duration: 4,
        text: "Com três canoas carregadas de suprimentos, a expedição parte em direção ao desconhecido, seguindo pistas centenárias.",
        visualDescription: "Expedition boats departing into the Amazon river, multiple canoes with supplies, team members rowing"
      },
      {
        id: "exp-5",
        prompt: "Amazon river navigation",
        imageUrl: "https://pollinations.ai/p/amazon%20river%20navigation%20expedition%20boats%20jungle%20canopy?width=1280&height=720&seed=5005",
        audioUrl: "",
        duration: 4,
        text: "Navegando pelos meandros do rio, a equipe adentra territórios inexplorados onde a selva guarda seus maiores segredos.",
        visualDescription: "Boats navigating through winding Amazon river, dense jungle canopy overhead, mysterious atmosphere"
      },
      {
        id: "exp-6",
        prompt: "Strange indigenous markings",
        imageUrl: "https://pollinations.ai/p/ancient%20indigenous%20stone%20markings%20symbols%20amazon%20jungle%20mystery?width=1280&height=720&seed=5006",
        audioUrl: "",
        duration: 4,
        text: "Capitão Santos: 'Essas marcações nas pedras... Joaquim, você já viu algo assim antes?'",
        visualDescription: "Ancient stone carvings with mysterious indigenous symbols in the Amazon jungle, expedition members examining"
      },
      {
        id: "exp-7",
        prompt: "Joaquim reading signs",
        imageUrl: "https://pollinations.ai/p/indigenous%20guide%20reading%20forest%20signs%20amazon%20tracking?width=1280&height=720&seed=5007",
        audioUrl: "",
        duration: 4,
        text: "Joaquim: 'A floresta nos observa. Estes sinais indicam que estamos próximos, mas também em perigo.'",
        visualDescription: "Indigenous guide examining forest signs, broken branches and markings indicating presence of others"
      },
      {
        id: "exp-8",
        prompt: "Night camp setup",
        imageUrl: "https://pollinations.ai/p/expedition%20camp%20amazon%20jungle%20night%20campfire%201889?width=1280&height=720&seed=5008",
        audioUrl: "",
        duration: 4,
        text: "Ao acampar, sons misteriosos ecoam pela floresta. Isabel estuda o mapa à luz da fogueira, procurando mais pistas.",
        visualDescription: "Night camp in the Amazon, campfire illuminating tents, mysterious sounds in the dark jungle"
      },
      {
        id: "exp-9",
        prompt: "Isabel discovers clue",
        imageUrl: "https://pollinations.ai/p/archaeologist%20discovering%20clue%20ancient%20artifact%20amazon%20expedition?width=1280&height=720&seed=5009",
        audioUrl: "",
        duration: 4,
        text: "Isabel: 'Encontrei algo! Este amuleto de ouro tem os mesmos símbolos do mapa. Estamos no caminho certo!'",
        visualDescription: "Archaeologist holding golden amulet with matching symbols from the map, excitement in expedition camp"
      },
      {
        id: "exp-10",
        prompt: "Guardian warnings",
        imageUrl: "https://pollinations.ai/p/mysterious%20guardian%20warnings%20amazon%20jungle%20shadows%20watchers?width=1280&height=720&seed=5010",
        audioUrl: "",
        duration: 4,
        text: "Joaquim: 'Os guardiões nos deram um aviso. Se continuarmos, teremos que provar que somos dignos.'",
        visualDescription: "Shadowy figures watching the expedition from the jungle, mysterious guardians observing from distance"
      },
      // Cenas 11-20: Desafios na selva
      {
        id: "exp-11",
        prompt: "Dangerous river rapids",
        imageUrl: "https://pollinations.ai/p/dangerous%20amazon%20river%20rapids%20expedition%20boats%20struggle?width=1280&height=720&seed=5011",
        audioUrl: "",
        duration: 4,
        text: "As corredeiras furiosas testam a habilidade da equipe. Uma canoa quase vira, perdendo suprimentos valiosos.",
        visualDescription: "Treacherous river rapids with expedition boats struggling against powerful currents"
      },
      {
        id: "exp-12",
        prompt: "Jaguar encounter",
        imageUrl: "https://pollinations.ai/p/jaguar%20encounter%20amazon%20jungle%20expedition%20dangerous%20wildlife?width=1280&height=720&seed=5012",
        audioUrl: "",
        duration: 4,
        text: "Um jaguar magnífico bloqueia o caminho. Joaquim sussurra: 'Ele é o guardião desta parte da floresta.'",
        visualDescription: "Majestic jaguar blocking the path in dense Amazon jungle, expedition team frozen in respect and fear"
      },
      {
        id: "exp-13",
        prompt: "Ancient temple entrance",
        imageUrl: "https://pollinations.ai/p/ancient%20temple%20entrance%20amazon%20jungle%20stone%20carvings%20overgrown?width=1280&height=720&seed=5013",
        audioUrl: "",
        duration: 4,
        text: "Entre as vinhas e musgos, surge a entrada de um templo antigo coberto por séculos de vegetação.",
        visualDescription: "Ancient stone temple entrance covered in vines and moss, intricate carvings barely visible"
      },
      {
        id: "exp-14",
        prompt: "Isabel deciphering symbols",
        imageUrl: "https://pollinations.ai/p/archaeologist%20deciphering%20ancient%20symbols%20temple%20wall%20amazon?width=1280&height=720&seed=5014",
        audioUrl: "",
        duration: 4,
        text: "Isabel: 'Estes símbolos contam uma história... uma civilização que desapareceu antes da chegada dos europeus.'",
        visualDescription: "Archaeologist studying complex ancient symbols carved into temple walls, torchlight illuminating hieroglyphs"
      },
      {
        id: "exp-15",
        prompt: "Temple guardian statue",
        imageUrl: "https://pollinations.ai/p/ancient%20guardian%20statue%20temple%20amazon%20stone%20warrior%20intimidating?width=1280&height=720&seed=5015",
        audioUrl: "",
        duration: 4,
        text: "Uma imponente estátua de pedra de um guerreiro indígena guarda a entrada, seus olhos parecendo seguir os intrusos.",
        visualDescription: "Imposing stone statue of indigenous warrior guardian, elaborate headdress and weapons, menacing expression"
      },
      {
        id: "exp-16",
        prompt: "Puzzle mechanism",
        imageUrl: "https://pollinations.ai/p/ancient%20puzzle%20mechanism%20temple%20door%20gears%20symbols?width=1280&height=720&seed=5016",
        audioUrl: "",
        duration: 4,
        text: "Capitão Santos: 'É um mecanismo complexo. Isabel, você consegue decifrar como abrir esta porta?'",
        visualDescription: "Complex ancient puzzle mechanism with rotating stone gears and symbol combinations on temple door"
      },
      {
        id: "exp-17",
        prompt: "Door opening revelation",
        imageUrl: "https://pollinations.ai/p/temple%20door%20opening%20light%20streaming%20revelation%20amazon%20discovery?width=1280&height=720&seed=5017",
        audioUrl: "",
        duration: 4,
        text: "Com um ruído ancestral, a porta se abre revelando uma luz dourada que emana do interior do templo.",
        visualDescription: "Massive temple door slowly opening, golden light streaming from within, dust particles dancing in sunbeams"
      },
      {
        id: "exp-18",
        prompt: "Golden chamber interior",
        imageUrl: "https://pollinations.ai/p/golden%20chamber%20ancient%20temple%20interior%20treasures%20amazon%20civilization?width=1280&height=720&seed=5018",
        audioUrl: "",
        duration: 4,
        text: "O interior revela uma câmara dourada com artefatos de uma civilização perdida, mais avançada que qualquer coisa conhecida.",
        visualDescription: "Magnificent golden chamber filled with ancient artifacts, advanced astronomical instruments, glittering treasures"
      },
      {
        id: "exp-19",
        prompt: "Ancient library scrolls",
        imageUrl: "https://pollinations.ai/p/ancient%20library%20scrolls%20knowledge%20temple%20amazon%20civilization%20wisdom?width=1280&height=720&seed=5019",
        audioUrl: "",
        duration: 4,
        text: "Isabel: 'Uma biblioteca... estes pergaminhos contêm conhecimentos astronômicos e matemáticos extraordinários!'",
        visualDescription: "Ancient library with preserved scrolls and stone tablets, complex mathematical and astronomical diagrams"
      },
      {
        id: "exp-20",
        prompt: "Guardian spirit appears",
        imageUrl: "https://pollinations.ai/p/guardian%20spirit%20appears%20temple%20ethereal%20indigenous%20wisdom%20amazon?width=1280&height=720&seed=5020",
        audioUrl: "",
        duration: 4,
        text: "Uma figura etérea surge - o espírito guardião da cidade perdida, testando se os exploradores são dignos do conhecimento.",
        visualDescription: "Ethereal guardian spirit materializing in the temple, wise indigenous figure glowing with spiritual energy"
      },
      // Cenas 21-30: Revelação e retorno
      {
        id: "exp-21",
        prompt: "Spirit test wisdom",
        imageUrl: "https://pollinations.ai/p/spirit%20guardian%20testing%20wisdom%20explorers%20temple%20challenge%20amazon?width=1280&height=720&seed=5021",
        audioUrl: "",
        duration: 4,
        text: "Guardião: 'Vocês buscam ouro ou conhecimento? Apenas aqueles com coração puro podem levar nossa sabedoria.'",
        visualDescription: "Guardian spirit conducting wisdom test, expedition members kneeling in respect, ethereal energy surrounding"
      },
      {
        id: "exp-22",
        prompt: "Team proves worthy",
        imageUrl: "https://pollinations.ai/p/expedition%20team%20proves%20worthy%20guardian%20approval%20temple%20blessing?width=1280&height=720&seed=5022",
        audioUrl: "",
        duration: 4,
        text: "Joaquim fala em sua língua ancestral. O guardião sorri: 'Vocês vieram não para roubar, mas para aprender.'",
        visualDescription: "Guardian spirit showing approval, blessing the expedition team, ancestral language communication"
      },
      {
        id: "exp-23",
        prompt: "Knowledge granted",
        imageUrl: "https://pollinations.ai/p/ancient%20knowledge%20granted%20scrolls%20wisdom%20temple%20gift%20amazon?width=1280&height=720&seed=5023",
        audioUrl: "",
        duration: 4,
        text: "Isabel recebe pergaminhos com conhecimentos médicos e astronômicos que poderão beneficiar toda a humanidade.",
        visualDescription: "Guardian granting precious scrolls with medical and astronomical knowledge to the archaeologist"
      },
      {
        id: "exp-24",
        prompt: "Sacred artifact gift",
        imageUrl: "https://pollinations.ai/p/sacred%20artifact%20gift%20golden%20amulet%20protection%20temple%20guardian?width=1280&height=720&seed=5024",
        audioUrl: "",
        duration: 4,
        text: "Capitão Santos: 'Este amuleto... é para proteção da floresta, não é?' Guardião: 'Protegerá quem protege a natureza.'",
        visualDescription: "Guardian presenting sacred golden amulet to expedition leader, mystical protective properties visible"
      },
      {
        id: "exp-25",
        prompt: "Temple closure",
        imageUrl: "https://pollinations.ai/p/temple%20closing%20forever%20ancient%20doors%20sealing%20mist%20mystery?width=1280&height=720&seed=5025",
        audioUrl: "",
        duration: 4,
        text: "As portas se fecham para sempre. O templo desaparece gradualmente, como se nunca tivesse existido.",
        visualDescription: "Temple doors closing permanently, structure fading into mist, becoming invisible again"
      },
      {
        id: "exp-26",
        prompt: "Return journey begins",
        imageUrl: "https://pollinations.ai/p/return%20journey%20amazon%20river%20expedition%20boats%20sunset%20peaceful?width=1280&height=720&seed=5026",
        audioUrl: "",
        duration: 4,
        text: "A viagem de volta é serena. A floresta parece abençoar a jornada de quem respeitou seus segredos.",
        visualDescription: "Peaceful return journey on Amazon river at sunset, boats moving smoothly, blessed by forest spirits"
      },
      {
        id: "exp-27",
        prompt: "Joaquim goodbye",
        imageUrl: "https://pollinations.ai/p/indigenous%20guide%20farewell%20amazon%20river%20blessing%20ceremony%20respect?width=1280&height=720&seed=5027",
        audioUrl: "",
        duration: 4,
        text: "Joaquim: 'Vocês levam mais que conhecimento. Levam a responsabilidade de proteger o que aprenderam.'",
        visualDescription: "Indigenous guide performing farewell blessing ceremony, deep respect and wisdom in his eyes"
      },
      {
        id: "exp-28",
        prompt: "Manaus return",
        imageUrl: "https://pollinations.ai/p/manaus%20return%201889%20expedition%20success%20harbor%20celebration%20relief?width=1280&height=720&seed=5028",
        audioUrl: "",
        duration: 4,
        text: "De volta a Manaus, a expedição traz não ouro, mas algo muito mais valioso: sabedoria ancestral.",
        visualDescription: "Triumphant return to Manaus harbor, expedition members carrying scrolls instead of gold, wisdom over wealth"
      },
      {
        id: "exp-29",
        prompt: "Isabel studying scrolls",
        imageUrl: "https://pollinations.ai/p/archaeologist%20studying%20ancient%20scrolls%20candlelight%20knowledge%20preservation?width=1280&height=720&seed=5029",
        audioUrl: "",
        duration: 4,
        text: "Isabel: 'Estes conhecimentos médicos poderão salvar vidas. A sabedoria indígena é um tesouro para toda humanidade.'",
        visualDescription: "Archaeologist carefully studying ancient medical scrolls by candlelight, preserving precious knowledge"
      },
      {
        id: "exp-30",
        prompt: "Legacy preserved",
        imageUrl: "https://pollinations.ai/p/legacy%20preserved%20brazil%20indigenous%20wisdom%20books%20future%20generations?width=1280&height=720&seed=5030",
        audioUrl: "",
        duration: 4,
        text: "A expedição provou que os maiores tesouros não são de ouro, mas de conhecimento e respeito entre culturas.",
        visualDescription: "Final scene showing preserved indigenous knowledge being documented for future generations, cultural bridge"
      }
    ],
    createdAt: "2024-01-01",
    thumbnail: amazoniaPerdidaPoster,
    aspectRatio: "16:9",
    type: "movie"
  },
  {
    id: "featured-2", 
    title: "Os Segredos do Pantanal",
    genre: "Mistério",
    style: "Thriller Ambiental",
    duration: "2 minutos",
    synopsis: "Uma bióloga descobre sinais de uma espécie considerada extinta no Pantanal, mas forças obscuras querem impedir sua descoberta a qualquer custo.",
    characters: [
      { name: "Dra. Marina Silva", description: "Bióloga corajosa dedicada à conservação da fauna brasileira", voice: "nova" },
      { name: "Carlos Mendoza", description: "Guia experiente que conhece os segredos ocultos do Pantanal", voice: "echo" },
      { name: "Roberto Vasquez", description: "Empresário inescrupuloso com interesses ambientais duvidosos", voice: "alloy" }
    ],
    scenes: [
      {
        id: "pantanal-1",
        prompt: "Research station Pantanal Brazil dawn",
        imageUrl: "https://pollinations.ai/p/research%20station%20pantanal%20brazil%20dawn%20biological%20expedition?width=1280&height=720&seed=6001",
        audioUrl: "",
        duration: 4,
        text: "Dra. Marina Silva chega à estação de pesquisa no coração do Pantanal ao amanhecer. Suas pegadas deixam marcas na terra úmida enquanto examina equipamentos de monitoramento.",
        visualDescription: "Remote biological research station in Pantanal wetlands at dawn, scientific equipment scattered around wooden buildings"
      },
      {
        id: "pantanal-2",
        prompt: "Strange animal tracks discovery",
        imageUrl: "https://pollinations.ai/p/strange%20animal%20tracks%20pantanal%20extinct%20species%20discovery?width=1280&height=720&seed=6002",
        audioUrl: "",
        duration: 4,
        text: "Marina: 'Estas pegadas... não são de nenhuma espécie conhecida. Podem ser de um animal que consideramos extinto há décadas!'",
        visualDescription: "Mysterious large animal tracks in muddy Pantanal ground, biologist examining with scientific instruments"
      },
      {
        id: "pantanal-3",
        prompt: "Carlos Mendoza guide introduction",
        imageUrl: "https://pollinations.ai/p/experienced%20pantanal%20guide%20boat%20wetlands%20local%20knowledge?width=1280&height=720&seed=6003",
        audioUrl: "",
        duration: 4,
        text: "Carlos: 'Doutora, eu conheço estas terras há 40 anos. Nunca vi pegadas assim, mas os antigos falam de criaturas que sumiram.'",
        visualDescription: "Experienced Pantanal guide on traditional boat, weathered face showing deep knowledge of the wetlands"
      },
      {
        id: "pantanal-4",
        prompt: "Corporate helicopter arrival",
        imageUrl: "https://pollinations.ai/p/corporate%20helicopter%20landing%20pantanal%20environmental%20threat?width=1280&height=720&seed=6004",
        audioUrl: "",
        duration: 4,
        text: "O barulho de helicópteros interrompe a pesquisa. Roberto Vasquez emerge com um sorriso falso e óculos espelhados.",
        visualDescription: "Corporate helicopter landing in pristine Pantanal, disturbing wildlife and creating environmental tension"
      },
      {
        id: "pantanal-5",
        prompt: "Night sounds mysterious creature",
        imageUrl: "https://pollinations.ai/p/pantanal%20night%20mysterious%20creature%20sounds%20camping%20fear?width=1280&height=720&seed=6005",
        audioUrl: "",
        duration: 4,
        text: "Durante a noite, sons estranhos ecoam pelo pântano. Marina grava tudo enquanto Carlos sussurra: 'Ela está próxima.'",
        visualDescription: "Tense night scene in Pantanal with mysterious creature sounds, research camp illuminated by lanterns"
      },
      {
        id: "pantanal-6",
        prompt: "Hidden camera footage extinct species",
        imageUrl: "https://pollinations.ai/p/hidden%20camera%20footage%20extinct%20pantanal%20species%20discovery?width=1280&height=720&seed=6006",
        audioUrl: "",
        duration: 4,
        text: "Marina: 'Não acredito! A câmera capturou uma onça-pintada de pelo dourado. Esta subespécie foi declarada extinta em 1950!'",
        visualDescription: "Blurry but clear hidden camera footage showing rare golden jaguar, scientific breakthrough moment"
      },
      {
        id: "pantanal-7",
        prompt: "Roberto threats environmental destruction",
        imageUrl: "https://pollinations.ai/p/corporate%20villain%20threatening%20pantanal%20environmental%20destruction?width=1280&height=720&seed=6007",
        audioUrl: "",
        duration: 4,
        text: "Roberto: 'Doutora, esta área será um resort de luxo. Suas 'descobertas' não podem interferir em nossos planos.'",
        visualDescription: "Corporate executive with development plans threatening pristine Pantanal environment"
      },
      {
        id: "pantanal-8",
        prompt: "Chase through wetlands",
        imageUrl: "https://pollinations.ai/p/chase%20scene%20pantanal%20wetlands%20boats%20escape%20action?width=1280&height=720&seed=6008",
        audioUrl: "",
        duration: 4,
        text: "Carlos acelera o barco pelos canais sinuosos enquanto homens de Roberto os perseguem. 'Eles não podem destruir este santuário!'",
        visualDescription: "Intense boat chase through winding Pantanal waterways, environmental defenders escaping corporate thugs"
      },
      {
        id: "pantanal-9",
        prompt: "Sacred indigenous territory discovery",
        imageUrl: "https://pollinations.ai/p/sacred%20indigenous%20territory%20pantanal%20ancient%20protection%20spirits?width=1280&height=720&seed=6009",
        audioUrl: "",
        duration: 4,
        text: "Em uma ilha secreta, totens indígenas protegem o território sagrado onde as onças douradas vivem há séculos.",
        visualDescription: "Hidden indigenous sacred site in Pantanal with ancient totems protecting golden jaguar territory"
      },
      {
        id: "pantanal-10",
        prompt: "Elder indigenous wisdom",
        imageUrl: "https://pollinations.ai/p/indigenous%20elder%20pantanal%20wisdom%20environmental%20protection%20ceremony?width=1280&height=720&seed=6010",
        audioUrl: "",
        duration: 4,
        text: "O pajé local: 'As onças douradas são os guardiões da nossa terra. Quem as protege, protege a alma do Pantanal.'",
        visualDescription: "Wise indigenous elder performing protection ceremony for golden jaguars in traditional setting"
      },
      {
        id: "pantanal-11",
        prompt: "Golden jaguar family revealed",
        imageUrl: "https://pollinations.ai/p/golden%20jaguar%20family%20cubs%20pantanal%20extinct%20species%20alive?width=1280&height=720&seed=6011",
        audioUrl: "",
        duration: 4,
        text: "Marina testemunha o impossível: uma família inteira de onças douradas com filhotes, provando que a espécie sobreviveu.",
        visualDescription: "Magnificent golden jaguar family with cubs in natural Pantanal habitat, proving species survival"
      },
      {
        id: "pantanal-12",
        prompt: "Environmental lawyers arrival",
        imageUrl: "https://pollinations.ai/p/environmental%20lawyers%20arriving%20pantanal%20legal%20protection%20victory?width=1280&height=720&seed=6012",
        audioUrl: "",
        duration: 4,
        text: "A documentação de Marina atrai advogados ambientais internacionais. Roberto recua diante da pressão legal.",
        visualDescription: "International environmental lawyers arriving to protect Pantanal, corporate retreat in face of legal pressure"
      },
      {
        id: "pantanal-13",
        prompt: "Conservation victory celebration",
        imageUrl: "https://pollinations.ai/p/conservation%20victory%20pantanal%20protected%20area%20celebration%20indigenous?width=1280&height=720&seed=6013",
        audioUrl: "",
        duration: 4,
        text: "A área torna-se uma reserva permanente. Marina, Carlos e a comunidade indígena celebram a vitória da natureza.",
        visualDescription: "Joyful celebration of conservation victory, diverse group celebrating protected Pantanal wilderness"
      },
      {
        id: "pantanal-14",
        prompt: "Research station expansion scientific base",
        imageUrl: "https://pollinations.ai/p/expanded%20research%20station%20pantanal%20scientific%20base%20conservation?width=1280&height=720&seed=6014",
        audioUrl: "",
        duration: 4,
        text: "A estação de pesquisa se expande para um centro de conservação mundial, estudando e protegendo espécies únicas.",
        visualDescription: "Expanded research facility in Pantanal becoming world-class conservation center"
      },
      {
        id: "pantanal-15",
        prompt: "Golden jaguars thriving future",
        imageUrl: "https://pollinations.ai/p/golden%20jaguars%20thriving%20pantanal%20future%20conservation%20success?width=1280&height=720&seed=6015",
        audioUrl: "",
        duration: 4,
        text: "Anos depois, as onças douradas prosperam em seu habitat protegido, símbolo de que a conservação pode vencer a ganância.",
        visualDescription: "Golden jaguars thriving in protected Pantanal habitat, symbol of successful conservation efforts"
      }
    ],
    createdAt: "2024-01-01",
    thumbnail: segredosPantanalPoster,
    aspectRatio: "16:9",
    type: "movie"
  },
  {
    id: "featured-3",
    title: "A Lenda do Cangaceiro Digital",
    genre: "Ficção Científica",
    style: "Cyberpunk Nordestino",
    duration: "2 minutos",
    synopsis: "No futuro próximo, um hacker nordestino luta contra corporações que exploram dados pessoais do povo brasileiro, inspirado nas antigas lendas do cangaço e na resistência popular.",
    characters: [
      { name: "Lampião.exe", description: "Hacker rebelde e carismático inspirado no lendário cangaceiro histórico", voice: "echo" },
      { name: "Maria Bonita Bot", description: "IA companheira avançada com personalidade nordestina autêntica", voice: "nova" },
      { name: "Virgulino Santos", description: "Mentor experiente que ensina ética hacker e preservação cultural", voice: "alloy" }
    ],
    scenes: [
      {
        id: "cangaceiro-1", 
        prompt: "Cyberpunk Recife favela neon lights",
        imageUrl: "https://pollinations.ai/p/cyberpunk%20recife%20favela%20neon%20lights%20digital%20rebellion?width=1280&height=720&seed=7001",
        audioUrl: "",
        duration: 4,
        text: "Recife, 2089. Nas favelas digitais, Lampião.exe acorda cercado por telas holográficas. Hoje é o dia da maior operação contra a DataCorp.",
        visualDescription: "Futuristic favela in Recife with neon lights, holographic screens, cyberpunk atmosphere mixing Brazilian northeast culture"
      },
      {
        id: "cangaceiro-2",
        prompt: "DataCorp invasion planning",
        imageUrl: "https://pollinations.ai/p/hacker%20planning%20datacorp%20invasion%20cyberpunk%20northeast%20brazil?width=1280&height=720&seed=7002",
        audioUrl: "",
        duration: 4,
        text: "Maria Bonita Bot: 'Lampião, a DataCorp está sugando os dados de todo o nordeste. É hora de mostrar que o cangaço digital não morreu!'",
        visualDescription: "AI companion hologram helping cyberpunk hacker plan digital invasion of corporate data center"
      },
      {
        id: "cangaceiro-3",
        prompt: "Virtual reality northeast culture",
        imageUrl: "https://pollinations.ai/p/virtual%20reality%20northeast%20brazilian%20culture%20cyberpunk%20preservation?width=1280&height=720&seed=7003",
        audioUrl: "",
        duration: 4,
        text: "Virgulino: 'Rapaz, a cultura nordestina não pode virar mercadoria digital. Nossos ancestrais lutaram contra coronéis, agora lutamos contra algoritmos.'",
        visualDescription: "Virtual reality interface showing northeastern Brazilian culture being preserved against digital corporate exploitation"
      },
      {
        id: "cangaceiro-4",
        prompt: "Digital favela underground network",
        imageUrl: "https://pollinations.ai/p/digital%20favela%20underground%20hacker%20network%20cyberpunk%20northeast?width=1280&height=720&seed=7004",
        audioUrl: "",
        duration: 4,
        text: "A rede clandestina de hackers nordestinos se conecta. Cada terminal é uma arma contra a DataCorp que quer monopolizar suas tradições.",
        visualDescription: "Underground network of cyberpunk hackers in digital favela, traditional northeastern decorations mixed with high tech"
      },
      {
        id: "cangaceiro-5",
        prompt: "DataCorp CEO villain reveal",
        imageUrl: "https://pollinations.ai/p/datacorp%20ceo%20villain%20corporate%20tower%20recife%20cyberpunk?width=1280&height=720&seed=7005",
        audioUrl: "",
        duration: 4,
        text: "No topo da Torre DataCorp, o CEO sorri friamente: 'O nordeste será nosso maior produto cultural. Monetizaremos até o último verso de cordel.'",
        visualDescription: "Evil corporate CEO in futuristic tower overlooking cyberpunk Recife, cold smile as he plans cultural exploitation"
      },
      {
        id: "cangaceiro-6", 
        prompt: "Lampião digital infiltration",
        imageUrl: "https://pollinations.ai/p/lampiao%20digital%20infiltration%20datacorp%20servers%20cyberpunk%20hacking?width=1280&height=720&seed=7006",
        audioUrl: "",
        duration: 4,
        text: "Lampião.exe infiltra os servidores. 'Oxente, eles estão vendendo nossa música, nossa poesia, nossos causos como produtos baratos!'",
        visualDescription: "Cyberpunk hacker infiltrating corporate data servers, northeastern cultural elements being commodified and stolen"
      },
      {
        id: "cangaceiro-7",
        prompt: "Maria Bonita Bot virus creation",
        imageUrl: "https://pollinations.ai/p/maria%20bonita%20bot%20virus%20creation%20cyberpunk%20ai%20rebellion?width=1280&height=720&seed=7007",
        audioUrl: "",
        duration: 4,
        text: "Maria Bonita Bot: 'Criei um vírus especial, meu rei. Ele vai devolver a cultura pro povo e quebrar os lucros deles!'",
        visualDescription: "AI companion creating liberation virus with northeastern cultural patterns, digital rebellion against corporate theft"
      },
      {
        id: "cangaceiro-8",
        prompt: "Corporate security chase scene",
        imageUrl: "https://pollinations.ai/p/corporate%20security%20chase%20cyberpunk%20recife%20digital%20pursuit?width=1280&height=720&seed=7008",
        audioUrl: "",
        duration: 4,
        text: "Agentes da DataCorp perseguem Lampião pelos becos cibernéticos de Recife. Drones de segurança cortam o ar neon da madrugada.",
        visualDescription: "High-speed chase through cyberpunk Recife streets, corporate security drones pursuing digital cangaceiro rebel"
      },
      {
        id: "cangaceiro-9",
        prompt: "Underground cangaceiro base reveal",
        imageUrl: "https://pollinations.ai/p/underground%20cangaceiro%20base%20cyberpunk%20northeast%20resistance%20hideout?width=1280&height=720&seed=7009",
        audioUrl: "",
        duration: 4,
        text: "O quartel-general secreto mistura hologramas de Luiz Gonzaga com sistemas de alta tecnologia. Tradição e rebelião em harmonia.",
        visualDescription: "Secret underground base mixing traditional northeastern elements with high-tech cyberpunk equipment"
      },
      {
        id: "cangaceiro-10",
        prompt: "Cultural data liberation virus",
        imageUrl: "https://pollinations.ai/p/cultural%20data%20liberation%20virus%20spreading%20cyberpunk%20northeast?width=1280&height=720&seed=7010",
        audioUrl: "",
        duration: 4,
        text: "O vírus se espalha pela rede. Repentes, forrós e cordéis retornam ao domínio público, livres da prisão corporativa.",
        visualDescription: "Liberation virus spreading through networks, northeastern cultural elements flowing freely back to the people"
      },
      {
        id: "cangaceiro-11",
        prompt: "DataCorp system collapse",
        imageUrl: "https://pollinations.ai/p/datacorp%20system%20collapse%20cyberpunk%20corporate%20defeat%20recife?width=1280&height=720&seed=7011",
        audioUrl: "",
        duration: 4,
        text: "Os servidores da DataCorp entram em colapso. Lucros despencam enquanto a cultura nordestina se liberta dos algoritmos de controle.",
        visualDescription: "Corporate data center collapsing as cultural liberation spreads, traditional northeastern imagery overtaking sterile tech"
      },
      {
        id: "cangaceiro-12",
        prompt: "Victory celebration digital favela",
        imageUrl: "https://pollinations.ai/p/victory%20celebration%20digital%20favela%20cyberpunk%20northeast%20community?width=1280&height=720&seed=7012",
        audioUrl: "",
        duration: 4,
        text: "Nas favelas digitais, a festa estoura. Hologramas de sanfoneiros tocam enquanto hackers celebram a vitória cultural.",
        visualDescription: "Joyful celebration in digital favela with holographic musicians and cyberpunk community celebrating cultural victory"
      },
      {
        id: "cangaceiro-13",
        prompt: "New digital cordel network",
        imageUrl: "https://pollinations.ai/p/new%20digital%20cordel%20network%20cyberpunk%20cultural%20preservation?width=1280&height=720&seed=7013",
        audioUrl: "",
        duration: 4,
        text: "Lampião.exe e Maria Bonita Bot criam uma rede livre de cordel digital, onde a cultura nordestina prospera sem exploração.",
        visualDescription: "New digital network preserving and sharing northeastern culture freely, cyberpunk infrastructure serving community"
      },
      {
        id: "cangaceiro-14",
        prompt: "Corporate CEO defeat",
        imageUrl: "https://pollinations.ai/p/corporate%20ceo%20defeat%20datacorp%20bankruptcy%20cyberpunk?width=1280&height=720&seed=7014",
        audioUrl: "",
        duration: 4,
        text: "O CEO da DataCorp observa sua torre sendo evacuada. 'Eles transformaram nossa ganância em sua liberdade', murmura derrotado.",
        visualDescription: "Defeated corporate CEO watching his empire crumble as cultural liberation spreads throughout the cyberpunk city"
      },
      {
        id: "cangaceiro-15",
        prompt: "Future Northeast digital culture",
        imageUrl: "https://pollinations.ai/p/future%20northeast%20digital%20culture%20cyberpunk%20harmony%20tradition?width=1280&height=720&seed=7015",
        audioUrl: "",
        duration: 4,
        text: "O nordeste digital floresce. Tecnologia e tradição dançam juntas, provando que o futuro pode honrar o passado sem vendê-lo.",
        visualDescription: "Harmonious future where cyberpunk technology and traditional northeastern culture coexist in perfect balance"
      }
    ],
    createdAt: "2024-01-02",
    thumbnail: legendaCangaceiroPoster,
    aspectRatio: "16:9",
    type: "movie"
  },
  {
    id: "featured-4",
    title: "O Código Quantum de Brasília",
    genre: "Ficção Científica",
    style: "Thriller Tecnológico",
    duration: "2 minutos",
    synopsis: "Um físico brasileiro descobre como usar a arquitetura única de Brasília para criar o primeiro computador quântico do mundo, mas agentes internacionais querem roubar sua descoberta.",
    characters: [
      { name: "Dr. Antônio Ferreira", description: "Físico quântico visionário obcecado pela geometria de Brasília", voice: "echo" },
      { name: "Professora Ana Ribeiro", description: "Arquiteta especialista que decifra os códigos geométricos da capital", voice: "nova" },
      { name: "Agent Smith Silva", description: "Espião infiltrado determinado a roubar os segredos quânticos", voice: "alloy" }
    ],
    scenes: [
      {
        id: "quantum-1",
        prompt: "Brasilia Palacio Planalto quantum calculations",
        imageUrl: "https://pollinations.ai/p/brasilia%20palacio%20planalto%20quantum%20calculations%20physicist?width=1280&height=720&seed=8001",
        audioUrl: "",
        duration: 4,
        text: "Dr. Antônio Ferreira observa o Palácio do Planalto ao amanhecer. 'Ana, você vê? A geometria de Niemeyer é a chave para a computação quântica!'",
        visualDescription: "Brasília's Palácio do Planalto at dawn with physicist making quantum calculations, geometric patterns highlighted"
      },
      {
        id: "quantum-2",
        prompt: "Ana Ribeiro architecture quantum discovery",
        imageUrl: "https://pollinations.ai/p/female%20architect%20brasilia%20cathedral%20quantum%20geometry%20discovery?width=1280&height=720&seed=8002",
        audioUrl: "",
        duration: 4,
        text: "Ana: 'As curvas da Catedral não são apenas estéticas. Elas criam campos de energia que podem manipular partículas subatômicas!'",
        visualDescription: "Female architect analyzing Cathedral of Brasília's curves with quantum energy field visualizations"
      },
      {
        id: "quantum-3",
        prompt: "Agent Smith Silva infiltration",
        imageUrl: "https://pollinations.ai/p/spy%20agent%20infiltrating%20brasilia%20government%20quantum%20secrets?width=1280&height=720&seed=8003",
        audioUrl: "",
        duration: 4,
        text: "Agent Smith Silva se aproxima disfarçado de diplomata. Seus olhos calculistas buscam qualquer pista sobre o projeto quântico secreto.",
        visualDescription: "International spy infiltrating Brasília government circles, seeking quantum computing secrets"
      },
      {
        id: "quantum-4",
        prompt: "Secret quantum laboratory underground",
        imageUrl: "https://pollinations.ai/p/secret%20quantum%20laboratory%20underground%20brasilia%20high%20tech?width=1280&height=720&seed=8004",
        audioUrl: "",
        duration: 4,
        text: "No subsolo da UnB, Dr. Ferreira revela seu laboratório secreto onde a geometria de Brasília é traduzida em equações quânticas.",
        visualDescription: "Hidden underground quantum laboratory beneath University of Brasília, geometric patterns controlling quantum computers"
      },
      {
        id: "quantum-5",
        prompt: "Quantum field demonstration",
        imageUrl: "https://pollinations.ai/p/quantum%20field%20demonstration%20brasilia%20cathedral%20energy%20patterns?width=1280&height=720&seed=8005",
        audioUrl: "",
        duration: 4,
        text: "Ana demonstra como os pilares da Catedral canalizam energia quântica. Partículas se materializam seguindo a arquitetura de Niemeyer.",
        visualDescription: "Quantum energy demonstration using Cathedral's architecture, particles forming patterns matching Niemeyer's design"
      },
      {
        id: "quantum-6",
        prompt: "International espionage revealed",
        imageUrl: "https://pollinations.ai/p/international%20espionage%20brasilia%20quantum%20technology%20theft?width=1280&height=720&seed=8006",
        audioUrl: "",
        duration: 4,
        text: "Dr. Ferreira descobre que Smith não é diplomata: 'Você trabalha para quem? CIA? China? A tecnologia quântica brasileira não está à venda!'",
        visualDescription: "Physicist confronting international spy in Brasília, protecting Brazilian quantum technology from theft"
      },
      {
        id: "quantum-7",
        prompt: "Chase sequence Brasilia landmarks",
        imageUrl: "https://pollinations.ai/p/chase%20sequence%20brasilia%20landmarks%20quantum%20secrets%20pursuit?width=1280&height=720&seed=8007",
        audioUrl: "",
        duration: 4,
        text: "Perseguição épica pelos monumentos de Brasília. Ana e Antônio fogem pelos eixos da capital enquanto agentes estrangeiros os perseguem.",
        visualDescription: "High-speed chase through Brasília's iconic landmarks, protecting quantum secrets from foreign agents"
      },
      {
        id: "quantum-8",
        prompt: "Quantum computer activation",
        imageUrl: "https://pollinations.ai/p/quantum%20computer%20activation%20brasilia%20architecture%20energy%20surge?width=1280&height=720&seed=8008",
        audioUrl: "",
        duration: 4,
        text: "O computador quântico é ativado usando toda a geometria de Brasília como antena. A cidade inteira vibra em frequência quântica.",
        visualDescription: "Massive quantum computer activation using entire Brasília as antenna, city architecture glowing with quantum energy"
      },
      {
        id: "quantum-9",
        prompt: "Reality distortion effects",
        imageUrl: "https://pollinations.ai/p/reality%20distortion%20brasilia%20quantum%20effects%20space%20time?width=1280&height=720&seed=8009",
        audioUrl: "",
        duration: 4,
        text: "A realidade se distorce ao redor de Brasília. O espaço-tempo dobra seguindo as curvas arquitetônicas da capital futurista.",
        visualDescription: "Reality warping around Brasília as quantum effects activate, space-time bending along architectural lines"
      },
      {
        id: "quantum-10",
        prompt: "Brazilian quantum breakthrough",
        imageUrl: "https://pollinations.ai/p/brazilian%20quantum%20breakthrough%20scientific%20achievement%20brasilia?width=1280&height=720&seed=8010",
        audioUrl: "",
        duration: 4,
        text: "Dr. Ferreira: 'Conseguimos! O Brasil criou o primeiro computador quântico verdadeiramente funcional do mundo!'",
        visualDescription: "Brazilian scientists celebrating quantum computing breakthrough in Brasília, national pride and scientific achievement"
      },
      {
        id: "quantum-11",
        prompt: "International recognition scientific",
        imageUrl: "https://pollinations.ai/p/international%20recognition%20brazilian%20quantum%20science%20achievement?width=1280&height=720&seed=8011",
        audioUrl: "",
        duration: 4,
        text: "Cientistas do mundo inteiro chegam a Brasília. A capital brasileira torna-se o centro mundial da pesquisa quântica.",
        visualDescription: "International scientists arriving in Brasília, Brazilian capital becoming world center for quantum research"
      },
      {
        id: "quantum-12",
        prompt: "Smith capture and confession",
        imageUrl: "https://pollinations.ai/p/spy%20capture%20confession%20brasilia%20quantum%20espionage%20defeat?width=1280&height=720&seed=8012",
        audioUrl: "",
        duration: 4,
        text: "Smith é capturado pela Polícia Federal. 'Vocês não sabem o que têm nas mãos', murmura derrotado.",
        visualDescription: "International spy being arrested by Brazilian Federal Police, defeated after failing to steal quantum secrets"
      },
      {
        id: "quantum-13",
        prompt: "Quantum peace initiative",
        imageUrl: "https://pollinations.ai/p/quantum%20peace%20initiative%20brasilia%20technology%20humanity?width=1280&height=720&seed=8013",
        audioUrl: "",
        duration: 4,
        text: "Ana propõe usar a tecnologia quântica para a paz mundial: 'A geometria de Niemeyer nos ensinou que beleza e ciência podem se unir.'",
        visualDescription: "Architect proposing quantum technology for world peace, Niemeyer's geometry inspiring harmony between science and beauty"
      },
      {
        id: "quantum-14",
        prompt: "Quantum university establishment",
        imageUrl: "https://pollinations.ai/p/quantum%20university%20brasilia%20education%20future%20technology?width=1280&height=720&seed=8014",
        audioUrl: "",
        duration: 4,
        text: "Brasília se torna sede da primeira Universidade Quântica do mundo, atraindo mentes brilhantes de todo o planeta.",
        visualDescription: "Establishment of world's first Quantum University in Brasília, attracting brilliant minds from around the globe"
      },
      {
        id: "quantum-15",
        prompt: "Future Brasilia quantum city",
        imageUrl: "https://pollinations.ai/p/future%20brasilia%20quantum%20city%20technology%20harmony%20architecture?width=1280&height=720&seed=8015",
        audioUrl: "",
        duration: 4,
        text: "A visão de Niemeyer se completa: Brasília se torna a primeira cidade quântica, onde arquitetura e física dançam em harmonia perfeita.",
        visualDescription: "Futuristic Brasília as quantum city, Niemeyer's vision fulfilled with architecture and physics in perfect harmony"
      }
    ],
    createdAt: "2024-01-03",
    thumbnail: codigoQuantumPoster,
    aspectRatio: "16:9",
    type: "movie"
  },
  {
    id: "featured-5",
    title: "Coração de Ipanema",
    genre: "Romance",
    style: "Musical Brasileiro",
    duration: "2 minutos",
    synopsis: "Uma musicista carioca desiludida com a vida redescobre a paixão pela música brasileira ao encontrar um violonista de rua em Ipanema, criando uma nova bossa nova que toca corações.",
    characters: [
      { name: "Bela Mendonça", description: "Cantora e compositora carioca com o coração machucado pela indústria musical", voice: "nova" },
      { name: "João Batista", description: "Músico de rua virtuoso apaixonado por bossa nova e pela vida simples", voice: "echo" },
      { name: "Maestro Roberto", description: "Mentor musical experiente que vê potencial no novo som", voice: "alloy" }
    ],
    scenes: [
      {
        id: "ipanema-1",
        prompt: "Ipanema beach sunset melancholy singer",
        imageUrl: "https://pollinations.ai/p/ipanema%20beach%20sunset%20melancholy%20female%20singer%20rio?width=1280&height=720&seed=9001",
        audioUrl: "",
        duration: 4,
        text: "Bela caminha pela areia de Ipanema ao pôr do sol, fugindo dos holofotes. Sua carreira pop a deixou vazia, longe da música que realmente ama.",
        visualDescription: "Melancholy female singer walking alone on Ipanema beach at sunset, escaping from fame and seeking authenticity"
      },
      {
        id: "ipanema-2", 
        prompt: "Street musician bossa nova guitar Ipanema",
        imageUrl: "https://pollinations.ai/p/handsome%20street%20musician%20bossa%20nova%20guitar%20ipanema%20talented?width=1280&height=720&seed=9002",
        audioUrl: "",
        duration: 4,
        text: "João toca uma bossa nova suave quando Bela se aproxima. 'Garota de Ipanema', sussurra ela. 'Mas desta vez, com o coração verdadeiro.'",
        visualDescription: "Talented street musician playing bossa nova guitar on Ipanema, creating authentic Brazilian music with passion"
      },
      {
        id: "ipanema-3",
        prompt: "Maestro Roberto discovery",
        imageUrl: "https://pollinations.ai/p/elderly%20maestro%20discovering%20new%20musical%20talent%20ipanema%20rio?width=1280&height=720&seed=9003",
        audioUrl: "",
        duration: 4,
        text: "Maestro Roberto para ao ouvir a harmonia única. 'Essa mistura... nunca ouvi nada igual. Vocês estão criando uma nova bossa nova!'",
        visualDescription: "Elderly musical maestro discovering unique new sound created by street musician and famous singer collaboration"
      },
      {
        id: "ipanema-4",
        prompt: "Recording studio first song",
        imageUrl: "https://pollinations.ai/p/recording%20studio%20ipanema%20new%20bossa%20nova%20song%20creation?width=1280&height=720&seed=9004",
        audioUrl: "",
        duration: 4,
        text: "No estúdio, Bela e João gravam sua primeira música juntos. 'Ipanema Verdadeira' nasce das ondas e do amor sincero.",
        visualDescription: "Intimate recording studio session with singers creating authentic new bossa nova song, ocean waves visible through window"
      },
      {
        id: "ipanema-5",
        prompt: "Music industry pressure",
        imageUrl: "https://pollinations.ai/p/music%20industry%20executives%20pressure%20commercial%20success%20rio?width=1280&height=720&seed=9005",
        audioUrl: "",
        duration: 4,
        text: "Executivos da gravadora pressionam Bela: 'Esse som não vende! Volte para o pop comercial que dava lucro!'",
        visualDescription: "Music industry executives pressuring singer to abandon authentic music for commercial pop success"
      },
      {
        id: "ipanema-6",
        prompt: "Street performance rebellion",
        imageUrl: "https://pollinations.ai/p/street%20performance%20ipanema%20musical%20rebellion%20authentic%20art?width=1280&height=720&seed=9006",
        audioUrl: "",
        duration: 4,
        text: "Bela rompe com a gravadora. Na areia de Ipanema, ela e João tocam para o povo, redescobindo a verdadeira essência da música.",
        visualDescription: "Singer and musician performing on Ipanema beach for common people, rebelling against commercial music industry"
      },
      {
        id: "ipanema-7",
        prompt: "Social media viral success",
        imageUrl: "https://pollinations.ai/p/social%20media%20viral%20ipanema%20music%20authentic%20success?width=1280&height=720&seed=9007",
        audioUrl: "",
        duration: 4,
        text: "Um vídeo da apresentação na praia viraliza. #IpanemVerdadeira torna-se movimento mundial de música autêntica.",
        visualDescription: "Phone screens showing viral video of beach performance, social media spreading authentic music movement globally"
      },
      {
        id: "ipanema-8",
        prompt: "International music festival invitation",
        imageUrl: "https://pollinations.ai/p/international%20music%20festival%20invitation%20brazilian%20bossa%20nova?width=1280&height=720&seed=9008",
        audioUrl: "",
        duration: 4,
        text: "Convites chegam do mundo inteiro. Festivais querem o novo som brasileiro que mistura tradição com inovação genuína.",
        visualDescription: "International music festival invitations arriving, world recognizing new authentic Brazilian sound"
      },
      {
        id: "ipanema-9",
        prompt: "Copacabana concert preparation",
        imageUrl: "https://pollinations.ai/p/copacabana%20concert%20preparation%20massive%20stage%20rio%20sunset?width=1280&height=720&seed=9009",
        audioUrl: "",
        duration: 4,
        text: "Preparam um show gratuito em Copacabana. 'A música do povo deve ser para o povo', decide Bela com determinação.",
        visualDescription: "Massive concert stage being prepared on Copacabana beach for free public performance at sunset"
      },
      {
        id: "ipanema-10",
        prompt: "Love confession moonlight",
        imageUrl: "https://pollinations.ai/p/love%20confession%20ipanema%20beach%20moonlight%20romantic%20music?width=1280&height=720&seed=9010",
        audioUrl: "",
        duration: 4,
        text: "Sob o luar, João confessa: 'Bela, você me ensinou que música não é só arte, é coragem de ser verdadeiro.'",
        visualDescription: "Romantic love confession under moonlight on Ipanema beach, guitars and ocean waves creating perfect atmosphere"
      },
      {
        id: "ipanema-11",
        prompt: "Copacabana concert night",
        imageUrl: "https://pollinations.ai/p/copacabana%20concert%20night%20massive%20crowd%20brazilian%20music%20celebration?width=1280&height=720&seed=9011",
        audioUrl: "",
        duration: 4,
        text: "Dois milhões de pessoas cantam junto em Copacabana. A nova bossa nova ecoa pela Baía de Guanabara.",
        visualDescription: "Massive crowd of two million people singing together at Copacabana beach concert, new bossa nova echoing across bay"
      },
      {
        id: "ipanema-12",
        prompt: "Music school establishment",
        imageUrl: "https://pollinations.ai/p/music%20school%20establishment%20ipanema%20teaching%20authentic%20brazilian%20sound?width=1280&height=720&seed=9012",
        audioUrl: "",
        duration: 4,
        text: "Bela e João abrem uma escola de música em Ipanema, ensinando jovens que música verdadeira vem do coração.",
        visualDescription: "Music school opening in Ipanema, teaching young musicians that authentic music comes from the heart"
      },
      {
        id: "ipanema-13",
        prompt: "Grammy recognition authentic music",
        imageUrl: "https://pollinations.ai/p/grammy%20recognition%20brazilian%20authentic%20music%20international%20success?width=1280&height=720&seed=9013",
        audioUrl: "",
        duration: 4,
        text: "O Grammy cria categoria especial para 'Música Autêntica'. Brasil lidera movimento mundial de volta às raízes.",
        visualDescription: "Grammy Awards ceremony recognizing authentic music category, Brazil leading worldwide movement back to musical roots"
      },
      {
        id: "ipanema-14",
        prompt: "Wedding ceremony Ipanema beach",
        imageUrl: "https://pollinations.ai/p/wedding%20ceremony%20ipanema%20beach%20musicians%20love%20music%20union?width=1280&height=720&seed=9014",
        audioUrl: "",
        duration: 4,
        text: "O casamento acontece na praia onde tudo começou. Amigos músicos tocam enquanto Bela e João se unem para sempre.",
        visualDescription: "Beautiful beach wedding ceremony on Ipanema where love story began, musician friends playing for the couple"
      },
      {
        id: "ipanema-15",
        prompt: "New generation musicians inspiration",
        imageUrl: "https://pollinations.ai/p/new%20generation%20musicians%20inspiration%20ipanema%20authentic%20music%20legacy?width=1280&height=720&seed=9015",
        audioUrl: "",
        duration: 4,
        text: "Uma nova geração de músicos cresce inspirada por sua história. Ipanema torna-se símbolo mundial de música verdadeira.",
        visualDescription: "New generation of young musicians inspired by their story, Ipanema becoming worldwide symbol of authentic music"
      }
    ],
    createdAt: "2024-01-04",
    thumbnail: coracaoIpanemaPoster,
    aspectRatio: "16:9",
    type: "movie"
  }
];

export const FEATURED_SERIES: Series[] = [
  {
    id: "series-1",
    title: "Caçadores de Ouro: Nova Fronteira",
    genre: "Aventura",
    style: "Western Brasileiro",
    synopsis: "Uma família de garimpeiros brasileiros enfrenta desafios morais e perigos na busca por ouro em Minas Gerais do século XIX.",
    episodes: [
      {
        id: "gold-s1e1",
        title: "O Primeiro Filão",
        genre: "Aventura",
        style: "Western Brasileiro",
        duration: "8 minutos",
        synopsis: "A família Oliveira descobre uma nova jazida, mas precisa enfrentar bandidos e dilemas éticos.",
        characters: [
          { name: "José Oliveira", description: "Patriarca experiente garimpeiro", voice: "echo" },
          { name: "Maria da Luz", description: "Matriarca sábia e corajosa", voice: "nova" },
          { name: "Pedro Oliveira", description: "Filho jovem e idealista", voice: "alloy" }
        ],
        scenes: Array(15).fill(null).map((_, index) => ({
          id: `gold-1-${index + 1}`,
          prompt: "Minas Gerais gold mining Brazilian western",
          imageUrl: `https://pollinations.ai/p/minas%20gerais%20gold%20mining%20brazilian%20western%20${index + 1}?width=1280&height=720&seed=${11001 + index}`,
          audioUrl: "",
          duration: 32,
          text: `Nas montanhas de Minas Gerais, o ouro revela tanto riqueza quanto perigo.`,
          visualDescription: "Brazilian western scenes in Minas Gerais with gold mining, family drama and moral challenges"
        })),
        createdAt: "2024-01-05",
        thumbnail: cacadoresOuroPoster,
        aspectRatio: "16:9",
        type: "series",
        episodeNumber: 1,
        seasonNumber: 1,
        totalEpisodes: 8
      }
    ],
    createdAt: "2024-01-05",
    thumbnail: cacadoresOuroPoster,
    aspectRatio: "16:9",
    totalSeasons: 3
  },
  {
    id: "series-2",
    title: "O Fantasma da Ópera Brasileira",
    genre: "Drama",
    style: "Musical Gótico",
    synopsis: "No Teatro Amazonas, mistérios sobrenaturais envolvem uma companhia de ópera brasileira no início do século XX.",
    episodes: [
      {
        id: "opera-s1e1",
        title: "A Prima Donna Desaparecida",
        genre: "Drama",
        style: "Musical Gótico",
        duration: "8 minutos",
        synopsis: "A estrela da ópera desaparece misteriosamente durante uma apresentação no Teatro Amazonas.",
        characters: [
          { name: "Madalena Santos", description: "Prima donna com segredos sombrios", voice: "nova" },
          { name: "Maestro Giuseppe", description: "Diretor musical italiano no Brasil", voice: "echo" },
          { name: "O Fantasma", description: "Presença misteriosa que assombra o teatro", voice: "alloy" }
        ],
        scenes: Array(15).fill(null).map((_, index) => ({
          id: `opera-1-${index + 1}`,
          prompt: "Teatro Amazonas opera Brazilian gothic mystery",
          imageUrl: `https://pollinations.ai/p/teatro%20amazonas%20opera%20brazilian%20gothic%20mystery%20${index + 1}?width=1280&height=720&seed=${12001 + index}`,
          audioUrl: "",
          duration: 32,
          text: `No majestoso Teatro Amazonas, mistérios operísticos ganham vida própria.`,
          visualDescription: "Magnificent Teatro Amazonas with gothic opera mystery, supernatural elements and Brazilian cultural richness"
        })),
        createdAt: "2024-01-06",
        thumbnail: fantasmaOperaPoster,
        aspectRatio: "16:9",
        type: "series",
        episodeNumber: 1,
        seasonNumber: 1,
        totalEpisodes: 6
      }
    ],
    createdAt: "2024-01-06",
    thumbnail: fantasmaOperaPoster,
    aspectRatio: "16:9",
    totalSeasons: 2
  }
];