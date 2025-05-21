
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import PropertyFilters from "@/components/PropertyFilters";
import { properties } from "@/data/properties";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter properties based on search query
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const searchTerms = query.toLowerCase().split(" ");
      const propertyText = `${property.name} ${property.location} ${property.categoryName || ""}`.toLowerCase();
      
      return searchTerms.every(term => propertyText.includes(term));
    });
    
    setFilteredProperties(filtered);
  }, [query]);

  // Apply additional category filter if selected
  const applyFilter = (filter: string) => {
    if (activeFilter === filter) {
      // If clicking the active filter, remove it
      setActiveFilter(null);
      setFilteredProperties(
        properties.filter((property) => {
          const searchTerms = query.toLowerCase().split(" ");
          const propertyText = `${property.name} ${property.location} ${property.categoryName || ""}`.toLowerCase();
          
          return searchTerms.every(term => propertyText.includes(term));
        })
      );
    } else {
      // Apply the new filter
      setActiveFilter(filter);
      setFilteredProperties(
        properties.filter((property) => {
          const searchTerms = query.toLowerCase().split(" ");
          const propertyText = `${property.name} ${property.location} ${property.categoryName || ""}`.toLowerCase();
          
          const matchesSearch = searchTerms.every(term => propertyText.includes(term));
          const matchesFilter = property.categoryName?.toLowerCase() === filter.toLowerCase();
          
          return matchesSearch && matchesFilter;
        })
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters activeFilter={activeFilter} onFilterChange={applyFilter} />
      
      <main className="flex-grow py-6">
        <div className="container-custom">
          <h1 className="text-2xl font-bold mb-4">
            {query ? `Resultados para "${query}"` : "Todas as propriedades"}
            {activeFilter && ` em ${activeFilter}`}
          </h1>
          
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">Nenhuma propriedade encontrada</h2>
              <p className="text-muted-foreground">
                Tente ajustar sua busca ou explorar outras categorias.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
