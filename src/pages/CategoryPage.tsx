
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const categoryTitles: Record<string, string> = {
  "vistas-incriveis": "Vistas Incríveis",
  "beira-mar": "Beira-mar",
  "cabanas": "Cabanas",
  "campo": "Campo",
  "tropical": "Tropical",
  "cidades-iconicas": "Cidades Icônicas",
  "em-alta": "Em Alta",
  "luxo": "Luxo",
  "historico": "Histórico",
  "camping": "Camping",
};

const categoryDescriptions: Record<string, string> = {
  "vistas-incriveis": "Propriedades com vistas deslumbrantes para montanhas, oceanos e paisagens espetaculares.",
  "beira-mar": "Acomodações à beira-mar com fácil acesso às praias mais bonitas.",
  "cabanas": "Cabanas aconchegantes perfeitas para uma experiência rústica e confortável.",
  "campo": "Propriedades rurais com tranquilidade e contato direto com a natureza.",
  "tropical": "Ambientes tropicais com clima quente, praias paradisíacas e vegetação exuberante.",
  "cidades-iconicas": "Hospedagens em cidades famosas com acesso fácil a pontos turísticos.",
  "em-alta": "Destinos populares que estão sendo muito procurados no momento.",
  "luxo": "Propriedades de alto padrão com amenidades exclusivas e serviços premium.",
  "historico": "Locais com valor histórico e arquitetura tradicional preservada.",
  "camping": "Experiências de acampamento com contato direto com a natureza.",
};

// Filtra propriedades para cada categoria (simulado aqui)
const getCategoryProperties = (categoryId: string) => {
  // Em um aplicativo real, você faria uma requisição ao backend para filtrar
  // Aqui estamos simulando com um filtro aleatório baseado no id da categoria
  return properties.filter((_, index) => {
    // Usa o index e o categoryId para criar uma filtragem consistente mas variada
    const hash = categoryId.charCodeAt(0) + categoryId.length;
    return index % 10 < (hash % 5) + 3; // Retorna entre 3 e 7 itens
  });
};

const CategoryPage = () => {
  const { categoryId = "vistas-incriveis" } = useParams<{ categoryId: string }>();
  const title = categoryTitles[categoryId] || "Categoria";
  const description = categoryDescriptions[categoryId] || "Explore nossas propriedades nesta categoria.";
  
  const categoryProperties = getCategoryProperties(categoryId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertyFilters />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground mb-8">{description}</p>
            
            {categoryProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl">Nenhuma propriedade encontrada nesta categoria.</p>
                <p className="text-muted-foreground mt-2">Tente refinar seus filtros ou explorar outras categorias.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
