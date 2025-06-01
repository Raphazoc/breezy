
import { useState } from "react";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const CampoPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>("campo");
  
  // Filtra propriedades relacionadas ao campo
  const campoProperties = properties.filter((_, index) => index % 3 === 2);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      
      <main className="flex-grow">
        <section className="py-6 md:py-12">
          <div className="container-custom">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">🌄 Propriedades no Campo</h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Propriedades rurais com tranquilidade e contato direto com a natureza
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {campoProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampoPage;
