
import { useState } from "react";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // In a real application, this would filter the properties based on the selected category
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      
      <main className="flex-grow">
        <section className="py-6">
          <div className="container-custom">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Propriedades em destaque</h2>
              <p className="text-muted-foreground">
                Explore as melhores opções de hospedagem do Brasil
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedDestinations />
        
        <section className="py-8 bg-airbnb-light dark:bg-gray-800">
          <div className="container-custom">
            <div className="bg-background shadow-xl rounded-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000" 
                    alt="Anuncie seu imóvel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Anuncie seu imóvel no HospedaBem</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Você poderia ganhar até R$5.000/mês compartilhando seu espaço em São Paulo.
                  </p>
                  <button className="bg-gradient-to-r from-pink-500 to-airbnb-primary text-white font-medium py-3 px-6 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all w-max">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
