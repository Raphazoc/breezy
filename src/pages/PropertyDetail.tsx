
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { properties } from "@/data/properties";

// Define property type to match the properties array structure
interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
  categoryName?: string;
  guests?: number;
  rooms?: number;
  description?: string;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    // Find the property by ID (converting param string to number)
    const foundProperty = properties.find((p) => p.id === Number(id));
    
    if (foundProperty) {
      setProperty(foundProperty);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-6">
          <div className="container-custom text-center">
            <p className="text-lg">Propriedade não encontrada</p>
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
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">{property.location}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="rounded-xl overflow-hidden mb-6 aspect-video">
                <img 
                  src={property.imageUrl} 
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-background border rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">R$ {property.price}/noite</h2>
                    <p className="text-muted-foreground">{property.categoryName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{property.guests} hóspedes</p>
                    <p className="text-muted-foreground">{property.rooms} quartos</p>
                  </div>
                </div>
                
                <button className="w-full bg-airbnb-primary hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors">
                  Reservar agora
                </button>
              </div>
              
              <div className="bg-background border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Descrição</h3>
                <p className="text-foreground">{property.description}</p>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-full rounded-xl overflow-hidden">
              <Map location={property.location} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
