
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // Filtragem básica de propriedades com base na consulta
  const filteredProperties = properties.filter((property) => {
    const searchTerm = query.toLowerCase();
    return (
      property.title.toLowerCase().includes(searchTerm) ||
      property.location.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters />
      
      <main className="flex-grow">
        <section className="py-8">
          <div className="container-custom">
            <h1 className="text-2xl font-bold mb-2">
              Resultados para "{query}"
            </h1>
            <p className="text-muted-foreground mb-8">
              {filteredProperties.length} propriedades encontradas
            </p>
            
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
