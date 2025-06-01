
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { properties } from "@/data/properties";
import { PropertyProps } from "@/components/PropertyCard";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyProps | null>(null);

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    
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
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{property.location}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8">
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-background border rounded-xl p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold">R$ {property.price}/noite</h2>
                    <p className="text-muted-foreground">{property.dates}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-medium">★ {property.rating}</p>
                    <p className="text-muted-foreground">({property.reviewCount} avaliações)</p>
                  </div>
                </div>
                
                <button className="w-full bg-airbnb-primary hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors">
                  Reservar agora
                </button>
              </div>
              
              <div className="bg-background border rounded-xl p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-4">Sobre este local</h3>
                <p className="text-foreground leading-relaxed">
                  {property.host}. Esta propriedade oferece uma experiência única com localização privilegiada em {property.location}. 
                  Perfeita para relaxar e desfrutar de momentos especiais com conforto e comodidade.
                </p>
              </div>
            </div>
            
            <div className="h-[300px] md:h-[400px] lg:h-full rounded-xl overflow-hidden">
              <Map />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
