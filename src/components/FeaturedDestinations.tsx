
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Destination {
  id: string;
  name: string;
  image: string;
  distance: string;
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000",
    distance: "4.5 hour drive"
  },
  {
    id: "2",
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1000",
    distance: "5 hour drive"
  },
  {
    id: "3",
    name: "Miami",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1000",
    distance: "3 hour drive"
  },
  {
    id: "4",
    name: "Chicago",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000",
    distance: "4 hour drive"
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Inspiration for your next trip</h2>
          <Button variant="link" className="text-airbnb-primary font-medium">
            See all
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <Link 
              key={destination.id} 
              to={`/s?location=${destination.name}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg">
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
