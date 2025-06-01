
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import PropertyFilters from "@/components/PropertyFilters";
import { properties } from "@/data/properties";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
  categoryName?: string;
}

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [localSearchTerm, setLocalSearchTerm] = useState(query);

  // Filter properties based on search query
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const searchTerms = query.toLowerCase().split(" ");
      const propertyText = `${(property as any).name} ${property.location} ${(property as any).categoryName || ""}`.toLowerCase();
      
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
          const propertyText = `${(property as any).name} ${property.location} ${(property as any).categoryName || ""}`.toLowerCase();
          
          return searchTerms.every(term => propertyText.includes(term));
        })
      );
    } else {
      // Apply the new filter
      setActiveFilter(filter);
      setFilteredProperties(
        properties.filter((property) => {
          const searchTerms = query.toLowerCase().split(" ");
          const propertyText = `${(property as any).name} ${property.location} ${(property as any).categoryName || ""}`.toLowerCase();
          
          const matchesSearch = searchTerms.every(term => propertyText.includes(term));
          const matchesFilter = (property as any).categoryName?.toLowerCase() === filter.toLowerCase();
          
          return matchesSearch && matchesFilter;
        })
      );
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearchTerm.trim()) {
      setSearchParams({ q: localSearchTerm.trim() });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters activeFilter={activeFilter} onFilterChange={applyFilter} />
      
      {/* Mobile Search Bar */}
      <div className="md:hidden bg-background border-b px-4 py-3">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Busque destinos, propriedades..."
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-airbnb-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-airbnb-primary text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
