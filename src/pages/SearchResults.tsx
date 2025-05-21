
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type FilterOptions = {
  priceMin: number;
  priceMax: number;
  propertyType: string | null;
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [filters, setFilters] = useState<FilterOptions>({
    priceMin: 0,
    priceMax: 1000,
    propertyType: null,
  });
  
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Filtragem baseada na consulta e nos filtros 
    const result = properties.filter((property) => {
      const searchTerm = query.toLowerCase();
      const matchesSearch = (
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm)
      );
      
      const matchesPrice = property.price >= filters.priceMin && property.price <= filters.priceMax;
      
      const matchesType = !filters.propertyType || property.category === filters.propertyType;
      
      return matchesSearch && matchesPrice && matchesType;
    });
    
    setFilteredProperties(result);
  }, [query, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters />
      
      <main className="flex-grow">
        <section className="py-6">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Resultados para "{query}"
                </h1>
                <p className="text-muted-foreground">
                  {filteredProperties.length} propriedades encontradas
                </p>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                {showFilters ? "Ocultar filtros" : "Mais filtros"}
              </Button>
            </div>
            
            {showFilters && (
              <div className="bg-muted p-4 rounded-lg mb-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Faixa de preço</h3>
                    <Slider
                      defaultValue={[filters.priceMin, filters.priceMax]}
                      max={1000}
                      step={10}
                      className="mb-2"
                      onValueChange={(value: number[]) => 
                        setFilters(prev => ({
                          ...prev, 
                          priceMin: value[0], 
                          priceMax: value[1]
                        }))
                      }
                    />
                    <div className="flex justify-between text-sm">
                      <span>R${filters.priceMin}</span>
                      <span>R${filters.priceMax}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Tipo de propriedade</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Casa", "Apartamento", "Pousada", "Hotel"].map((type) => (
                        <button
                          key={type}
                          className={`border px-4 py-2 rounded-md text-center transition-colors ${
                            filters.propertyType === type.toLowerCase() 
                              ? "bg-airbnb-primary text-white" 
                              : "hover:bg-muted-foreground/10"
                          }`}
                          onClick={() => setFilters(prev => ({
                            ...prev,
                            propertyType: prev.propertyType === type.toLowerCase() ? null : type.toLowerCase()
                          }))}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-end">
                    <Button 
                      variant="outline" 
                      className="mr-2"
                      onClick={() => setFilters({
                        priceMin: 0,
                        priceMax: 1000,
                        propertyType: null
                      })}
                    >
                      Limpar filtros
                    </Button>
                    <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
                      Aplicar filtros
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl">Nenhuma propriedade encontrada para "{query}".</p>
                <p className="text-muted-foreground mt-2">Tente termos diferentes ou explore nossas categorias.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
