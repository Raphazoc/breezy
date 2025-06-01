
import { useState } from "react";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { cabanasProperties } from "@/data/categoryProperties";
import { useTranslation } from "@/hooks/useTranslation";

const CabanasPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>("cabanas");
  const { t } = useTranslation();
  
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
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('pages.cabanasTitle')}</h1>
              <p className="text-muted-foreground text-sm md:text-base">
                {t('pages.cabanasDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {cabanasProperties.map((property) => (
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

export default CabanasPage;
