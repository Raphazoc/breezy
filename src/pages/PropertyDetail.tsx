
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { properties } from "@/data/properties";
import { Star, Wifi, Bath, BedDouble, Home, User, Check } from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
  categoryName?: string;
  guests: number;
  rooms: number;
  description?: string;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Convert the id parameter to number for comparison
  const propertyId = parseInt(id || "0", 10);
  const property = properties.find((p) => p.id === propertyId) as Property | undefined;

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Propriedade não encontrada</h2>
            <p className="mt-2">A propriedade que você está procurando não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="ml-1 text-lg font-medium">4.8</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground underline">32 avaliações</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{property.location}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img 
              src={property.imageUrl} 
              alt={property.name} 
              className="w-full h-full object-cover rounded-lg aspect-[4/3]"
            />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img 
                    src={`https://source.unsplash.com/random/300x200?house&sig=${property.id + index + 1}`} 
                    alt={`${property.name} interior ${index + 1}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border-b pb-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {property.categoryName || "Propriedade"} em {property.location}
                    </h2>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <span>Até {property.guests} hóspedes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble className="h-5 w-5 text-muted-foreground" />
                        <span>{property.rooms || 1} camas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home className="h-5 w-5 text-muted-foreground" />
                        <span>{property.rooms || 1} quartos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-muted-foreground" />
                        <span>{property.rooms || 1} banheiros</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src="https://source.unsplash.com/random/100x100?person" 
                      alt="Host Avatar" 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-6 mb-6">
                <p className="text-lg leading-relaxed">
                  {property.description || `Aconchegante ${property.categoryName || "propriedade"} localizada em ${property.location}. Esta acomodação oferece uma experiência incrível com ${property.rooms || 1} quartos, ${property.rooms || 1} banheiros, e espaço para até ${property.rooms || 1} camas. Perfeita para grupos de até ${property.guests} pessoas.`}
                </p>
              </div>
              
              <div className="border-b pb-6 mb-6">
                <h3 className="text-xl font-bold mb-4">O que este lugar oferece</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-6 w-6 text-muted-foreground" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-muted-foreground" />
                    <span>TV com Netflix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-muted-foreground" />
                    <span>Estacionamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-muted-foreground" />
                    <span>Ar-condicionado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-muted-foreground" />
                    <span>Cozinha completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-muted-foreground" />
                    <span>Piscina</span>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Localização</h3>
                <div className="bg-gray-100 dark:bg-gray-800 h-72 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-center">
                    Localizado em {property.location}, a propriedade está próxima a pontos turísticos, restaurantes e transporte público.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 border rounded-xl shadow-sm">
                <div className="flex items-baseline justify-between mb-4">
                  <div className="text-2xl font-bold">R$ {property.price}</div>
                  <div className="text-sm text-muted-foreground">noite</div>
                </div>
                
                <div className="border rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2">
                    <div className="p-3 border-r border-b">
                      <div className="text-xs font-medium">CHECK-IN</div>
                      <div>11/06/2025</div>
                    </div>
                    <div className="p-3 border-b">
                      <div className="text-xs font-medium">CHECKOUT</div>
                      <div>16/06/2025</div>
                    </div>
                    <div className="p-3 col-span-2">
                      <div className="text-xs font-medium mb-1">HÓSPEDES</div>
                      <div>2 hóspedes</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 mb-4">
                  Reservar
                </Button>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>R$ {property.price} x 5 noites</div>
                    <div>R$ {property.price * 5}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Taxa de limpeza</div>
                    <div>R$ 150</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Taxa de serviço</div>
                    <div>R$ 120</div>
                  </div>
                  <div className="border-t pt-4 flex items-center justify-between font-bold">
                    <div>Total</div>
                    <div>R$ {property.price * 5 + 150 + 120}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
