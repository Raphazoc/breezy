
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Utensils, Star } from "lucide-react";

interface Attraction {
  id: string;
  name: string;
  description: string;
  type: "tourist" | "food" | "activity";
}

interface DestinationDetail {
  id: string;
  name: string;
  image: string;
  description: string;
  distance: string;
  attractions: Attraction[];
}

// COMO ALTERAR IMAGENS DAS PÁGINAS DE DESTINOS:
// Para alterar as imagens principais (hero) de cada destino, substitua as URLs na propriedade 'image' 
// do objeto correspondente no 'destinationsData' abaixo
// Recomenda-se usar imagens panorâmicas de alta qualidade (1920px de largura ou mais)
const destinationsData: Record<string, DestinationDetail> = {
  "new-york": {
    id: "new-york",
    name: "New York",
    // IMAGEM PRINCIPAL DE NEW YORK: substitua esta URL pela imagem de hero de Nova York
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000",
    description: "A cidade que nunca dorme, com arranha-céus icônicos e cultura vibrante.",
    distance: "4.5 hour drive",
    attractions: [
      { id: "1", name: "Estátua da Liberdade", description: "Símbolo icônico da liberdade e democracia", type: "tourist" },
      { id: "2", name: "Times Square", description: "O coração pulsante de Manhattan", type: "tourist" },
      { id: "3", name: "Central Park", description: "Oásis verde no centro da cidade", type: "activity" },
      { id: "4", name: "Empire State Building", description: "Arranha-céu art déco famoso mundialmente", type: "tourist" },
      { id: "5", name: "Pizza autêntica", description: "Experimente a famosa pizza de Nova York", type: "food" },
      { id: "6", name: "Broadway Shows", description: "Assista aos melhores musicais do mundo", type: "activity" }
    ]
  },
  "los-angeles": {
    id: "los-angeles",
    name: "Los Angeles",
    // IMAGEM PRINCIPAL DE LOS ANGELES: substitua esta URL pela imagem de hero de Los Angeles
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1000",
    description: "Cidade dos anjos, lar de Hollywood e praias deslumbrantes.",
    distance: "5 hour drive",
    attractions: [
      { id: "1", name: "Hollywood Sign", description: "O icônico letreiro de Hollywood", type: "tourist" },
      { id: "2", name: "Venice Beach", description: "Praia famosa com calçadão vibrante", type: "activity" },
      { id: "3", name: "Griffith Observatory", description: "Observatório com vista panorâmica da cidade", type: "tourist" },
      { id: "4", name: "Santa Monica Pier", description: "Pier histórico com parque de diversões", type: "activity" },
      { id: "5", name: "In-N-Out Burger", description: "Hambúrguer californiano autêntico", type: "food" },
      { id: "6", name: "Universal Studios", description: "Parque temático dos filmes", type: "activity" }
    ]
  },
  "miami": {
    id: "miami",
    name: "Miami",
    // IMAGEM PRINCIPAL DE MIAMI: substitua esta URL pela imagem de hero de Miami
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1000",
    description: "Praias tropicais, vida noturna agitada e arquitetura art déco.",
    distance: "3 hour drive",
    attractions: [
      { id: "1", name: "South Beach", description: "Praia famosa com arquitetura art déco", type: "activity" },
      { id: "2", name: "Art Deco District", description: "Distrito histórico com arquitetura única", type: "tourist" },
      { id: "3", name: "Little Havana", description: "Bairro cubano autêntico", type: "tourist" },
      { id: "4", name: "Wynwood Walls", description: "Galeria de arte urbana ao ar livre", type: "tourist" },
      { id: "5", name: "Culinária cubana", description: "Sabores autênticos de Cuba", type: "food" },
      { id: "6", name: "Vida noturna", description: "Clubes e bares famosos mundialmente", type: "activity" }
    ]
  },
  "chicago": {
    id: "chicago",
    name: "Chicago",
    // IMAGEM PRINCIPAL DE CHICAGO: substitua esta URL pela imagem de hero de Chicago
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000",
    description: "Arquitetura impressionante e culinária de classe mundial.",
    distance: "4 hour drive",
    attractions: [
      { id: "1", name: "Millennium Park", description: "Parque urbano com a famosa Bean", type: "tourist" },
      { id: "2", name: "Navy Pier", description: "Pier com entretenimento e restaurantes", type: "activity" },
      { id: "3", name: "Art Institute", description: "Museu de arte mundialmente famoso", type: "tourist" },
      { id: "4", name: "Deep Dish Pizza", description: "Pizza estilo Chicago autêntica", type: "food" },
      { id: "5", name: "Architecture Tour", description: "Tour pela arquitetura icônica da cidade", type: "activity" },
      { id: "6", name: "Wrigley Field", description: "Estádio histórico do baseball", type: "tourist" }
    ]
  },
  "san-francisco": {
    id: "san-francisco",
    name: "San Francisco",
    // IMAGEM PRINCIPAL DE SAN FRANCISCO: substitua esta URL pela imagem de hero de San Francisco
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    description: "Colinas famosas, Golden Gate Bridge e cultura tecnológica.",
    distance: "6 hour drive",
    attractions: [
      { id: "1", name: "Golden Gate Bridge", description: "Ponte icônica e símbolo da cidade", type: "tourist" },
      { id: "2", name: "Alcatraz Island", description: "Antiga prisão federal em ilha", type: "tourist" },
      { id: "3", name: "Fisherman's Wharf", description: "Cais com restaurantes e entretenimento", type: "activity" },
      { id: "4", name: "Lombard Street", description: "A rua mais sinuosa do mundo", type: "tourist" },
      { id: "5", name: "Sourdough Bread", description: "Pão tradicional de San Francisco", type: "food" },
      { id: "6", name: "Cable Car Ride", description: "Passeio no bondinho histórico", type: "activity" }
    ]
  },
  "las-vegas": {
    id: "las-vegas",
    name: "Las Vegas",
    // IMAGEM PRINCIPAL DE LAS VEGAS: substitua esta URL pela imagem de hero de Las Vegas
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000",
    description: "Cassinos, shows espetaculares e entretenimento 24 horas.",
    distance: "4 hour drive",
    attractions: [
      { id: "1", name: "The Strip", description: "Avenida principal com cassinos famosos", type: "tourist" },
      { id: "2", name: "Bellagio Fountains", description: "Show de águas dançantes", type: "tourist" },
      { id: "3", name: "Shows de Las Vegas", description: "Espetáculos de classe mundial", type: "activity" },
      { id: "4", name: "Fremont Street", description: "Centro histórico de Las Vegas", type: "tourist" },
      { id: "5", name: "Buffets famosos", description: "Buffets de alta qualidade", type: "food" },
      { id: "6", name: "Grand Canyon", description: "Excursão ao Grand Canyon", type: "activity" }
    ]
  },
  "seattle": {
    id: "seattle",
    name: "Seattle",
    // IMAGEM PRINCIPAL DE SEATTLE: substitua esta URL pela imagem de hero de Seattle
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
    description: "Café artesanal, música grunge e paisagens naturais deslumbrantes.",
    distance: "7 hour drive",
    attractions: [
      { id: "1", name: "Space Needle", description: "Torre icônica com vista panorâmica", type: "tourist" },
      { id: "2", name: "Pike Place Market", description: "Mercado histórico famoso", type: "tourist" },
      { id: "3", name: "Starbucks Original", description: "A primeira loja Starbucks do mundo", type: "food" },
      { id: "4", name: "Kerry Park", description: "Melhor vista da cidade", type: "tourist" },
      { id: "5", name: "Café culture", description: "Cultura do café artesanal", type: "food" },
      { id: "6", name: "Music Scene", description: "Berço do grunge e cena musical", type: "activity" }
    ]
  },
  "boston": {
    id: "boston",
    name: "Boston",
    // IMAGEM PRINCIPAL DE BOSTON: substitua esta URL pela imagem de hero de Boston
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
    description: "História americana, universidades prestigiosas e charme colonial.",
    distance: "5 hour drive",
    attractions: [
      { id: "1", name: "Freedom Trail", description: "Trilha histórica da independência", type: "tourist" },
      { id: "2", name: "Harvard University", description: "Universidade mais antiga dos EUA", type: "tourist" },
      { id: "3", name: "Boston Tea Party", description: "Local histórico famoso", type: "tourist" },
      { id: "4", name: "Fenway Park", description: "Estádio histórico do baseball", type: "tourist" },
      { id: "5", name: "New England Clam Chowder", description: "Sopa tradicional da região", type: "food" },
      { id: "6", name: "MIT Campus", description: "Instituto de Tecnologia famoso", type: "tourist" }
    ]
  },
  "rio-de-janeiro": {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    // IMAGEM PRINCIPAL DO RIO DE JANEIRO: substitua esta URL pela imagem de hero do Rio
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000",
    description: "Cidade maravilhosa com praias famosas e Cristo Redentor.",
    distance: "2 hour flight",
    attractions: [
      { id: "1", name: "Cristo Redentor", description: "Uma das 7 maravilhas do mundo moderno", type: "tourist" },
      { id: "2", name: "Pão de Açúcar", description: "Morro icônico com bondinho", type: "tourist" },
      { id: "3", name: "Copacabana", description: "Praia mundialmente famosa", type: "activity" },
      { id: "4", name: "Ipanema", description: "Praia sofisticada e cultural", type: "activity" },
      { id: "5", name: "Feijoada", description: "Prato tradicional brasileiro", type: "food" },
      { id: "6", name: "Carnaval", description: "A maior festa do mundo", type: "activity" }
    ]
  },
  "sao-paulo": {
    id: "sao-paulo",
    name: "São Paulo",
    // IMAGEM PRINCIPAL DE SÃO PAULO: substitua esta URL pela imagem de hero de São Paulo
    image: "https://images.unsplash.com/photo-1541372709072-8be11c6a4e0c?q=80&w=1000",
    description: "Metrópole vibrante com gastronomia diversificada e vida cultural intensa.",
    distance: "1 hour flight",
    attractions: [
      { id: "1", name: "MASP", description: "Museu de Arte de São Paulo", type: "tourist" },
      { id: "2", name: "Mercado Municipal", description: "Mercado tradicional com gastronomia", type: "food" },
      { id: "3", name: "Vila Madalena", description: "Bairro boêmio com arte urbana", type: "activity" },
      { id: "4", name: "Pinacoteca", description: "Museu de arte brasileira", type: "tourist" },
      { id: "5", name: "Gastronomia diversa", description: "Culinária de todos os cantos do mundo", type: "food" },
      { id: "6", name: "Vida noturna", description: "Bares e casas noturnas famosas", type: "activity" }
    ]
  }
};

const getIconForType = (type: string) => {
  switch (type) {
    case "tourist":
      return <Camera className="h-5 w-5" />;
    case "food":
      return <Utensils className="h-5 w-5" />;
    case "activity":
      return <Star className="h-5 w-5" />;
    default:
      return <MapPin className="h-5 w-5" />;
  }
};

const DestinationDetailPage = () => {
  const { destinationId } = useParams<{ destinationId: string }>();
  
  if (!destinationId || !destinationsData[destinationId]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Destino não encontrado</h1>
            <Button asChild>
              <Link to="/destinations">Voltar para Destinos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const destination = destinationsData[destinationId];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* SEÇÃO HERO: Esta é onde a imagem principal do destino é exibida */}
        <section className="relative h-96 overflow-hidden">
          {/* IMAGEM HERO: A imagem de fundo principal da página do destino */}
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
              <p className="text-xl mb-2">{destination.description}</p>
              <p className="text-lg opacity-90">{destination.distance}</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE ATRAÇÕES: Cards com informações sobre pontos turísticos */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button variant="outline" asChild className="mb-6">
                <Link to="/destinations">← Voltar para Destinos</Link>
              </Button>
              
              <h2 className="text-3xl font-bold mb-4">O que fazer em {destination.name}</h2>
              <p className="text-muted-foreground">
                Descubra os melhores pontos turísticos, atividades e experiências gastronômicas
              </p>
            </div>
            
            {/* GRID DE ATRAÇÕES: Lista de pontos turísticos, comidas e atividades */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.attractions.map((attraction) => (
                <Card key={attraction.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {getIconForType(attraction.type)}
                      <span className="text-sm text-muted-foreground capitalize">
                        {attraction.type === "tourist" ? "Ponto Turístico" : 
                         attraction.type === "food" ? "Gastronomia" : "Atividade"}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {attraction.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetailPage;
