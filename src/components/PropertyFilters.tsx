
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const filterCategories = [
  { value: "vistas-incriveis", label: "Vistas incríveis", icon: "🏞️", path: "/category/vistas-incriveis" },
  { value: "beira-mar", label: "Beira-mar", icon: "🏖️", path: "/beira-mar" },
  { value: "cabanas", label: "Cabanas", icon: "🏡", path: "/cabanas" },
  { value: "campo", label: "Campo", icon: "🌄", path: "/campo" },
  { value: "tropical", label: "Tropical", icon: "🌴", path: "/category/tropical" },
  { value: "cidades-iconicas", label: "Cidades icônicas", icon: "🏙️", path: "/category/cidades-iconicas" },
  { value: "em-alta", label: "Em alta", icon: "🔥", path: "/category/em-alta" },
  { value: "luxo", label: "Luxo", icon: "✨", path: "/category/luxo" },
];

interface PropertyFiltersProps {
  activeFilter?: string | null;
  onFilterChange?: (filter: string) => void;
}

const PropertyFilters = ({ activeFilter, onFilterChange }: PropertyFiltersProps) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilter || "vistas-incriveis");
  const activeFiltersCount = 0;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange?.(category);
    
    // Navegar para a página específica da categoria
    const categoryData = filterCategories.find(cat => cat.value === category);
    if (categoryData) {
      navigate(categoryData.path);
    }
  };

  const handleAdvancedFilters = () => {
    navigate("/filters");
  };

  return (
    <div className="bg-background border-b sticky top-[60px] md:top-[53px] z-30 shadow-sm">
      <div className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Categories com scroll horizontal otimizado para mobile */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
              <TabsList className="w-max bg-transparent h-auto p-0 flex space-x-3 md:space-x-6 min-w-max">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex flex-col items-center justify-center px-2 md:px-3 py-2 text-xs border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white rounded-none whitespace-nowrap min-w-[60px] md:min-w-[80px]"
                  >
                    <span className="text-lg md:text-2xl mb-1">{category.icon}</span>
                    <span className="text-center text-foreground font-medium text-[10px] md:text-xs leading-tight">
                      {category.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Botão de filtros com tamanho responsivo */}
          <Button
            variant="outline"
            onClick={handleAdvancedFilters}
            className="flex items-center gap-1 md:gap-2 min-w-[80px] md:min-w-[96px] px-3 md:px-4 py-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow shrink-0 text-xs md:text-sm"
          >
            <Filter className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-foreground font-medium hidden sm:inline">Filtros</span>
            <span className="text-foreground font-medium sm:hidden">•••</span>
            {activeFiltersCount > 0 && (
              <Badge
                variant="secondary"
                className="ml-1 h-4 w-4 md:h-5 md:w-5 p-0 flex items-center justify-center rounded-full text-[10px]"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
