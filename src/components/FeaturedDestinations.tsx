
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Destination {
  id: string;
  name: string;
  image: string;
  distance: string;
}

// COMO ALTERAR IMAGENS DOS DESTINOS EM DESTAQUE:
// Para alterar as imagens desta seção, substitua as URLs no array 'destinations' abaixo
// Esta seção aparece na página inicial como "Inspiration for your next trip"
// Use imagens de boa qualidade (800px de largura ou mais)
const destinations: Destination[] = [
  {
    id: "1",
    name: "New York",
    // IMAGEM DE NEW YORK (seção destaque): substitua esta URL
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000",
    distance: "4.5 hour drive"
  },
  {
    id: "2",
    name: "Los Angeles",
    // IMAGEM DE LOS ANGELES (seção destaque): substitua esta URL
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1000",
    distance: "5 hour drive"
  },
  {
    id: "3",
    name: "Miami",
    // IMAGEM DE MIAMI (seção destaque): substitua esta URL
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1000",
    distance: "3 hour drive"
  },
  {
    id: "4",
    name: "Chicago",
    // IMAGEM DE CHICAGO (seção destaque): substitua esta URL
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000",
    distance: "4 hour drive"
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Inspiration for your next trip</h2>
          <Button variant="link" className="text-airbnb-primary font-medium" asChild>
            <Link to="/destinations">See all</Link>
          </Button>
        </div>
        
        {/* GRID DE DESTINOS EM DESTAQUE: Exibe 4 destinos principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <Link 
              key={destination.id} 
              to={`/destination/${destination.name.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg">
                {/* IMAGEM DO CARD DE DESTAQUE: Esta é onde cada imagem é exibida */}
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-36 md:h-60 object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-medium">{destination.name}</h3>
                <p className="text-gray-600 text-sm">{destination.distance}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
