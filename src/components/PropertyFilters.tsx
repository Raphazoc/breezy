
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

// Define categorias de filtros
const filterCategories = [
  { value: "vistas-incriveis", label: "Vistas incríveis", icon: "🏞️" },
  { value: "beira-mar", label: "Beira-mar", icon: "🏖️" },
  { value: "cabanas", label: "Cabanas", icon: "🏡" },
  { value: "campo", label: "Campo", icon: "🌄" },
  { value: "tropical", label: "Tropical", icon: "🌴" },
  { value: "cidades-iconicas", label: "Cidades icônicas", icon: "🏙️" },
  { value: "em-alta", label: "Em alta", icon: "🔥" },
  { value: "luxo", label: "Luxo", icon: "✨" },
];

interface PropertyFiltersProps {
  activeFilter?: string | null;
  onFilterChange?: (filter: string) => void;
}

const PropertyFilters = ({ activeFilter, onFilterChange }: PropertyFiltersProps) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilter || "vistas-incriveis");
  
  // Optional: track number of filters applied (could be from URL parameters)
  const activeFiltersCount = 0; 

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (onFilterChange) {
      onFilterChange(category);
    }
  };

  const handleAdvancedFilters = () => {
    navigate("/filters");
  };

  return (
    <div className="bg-background py-4 border-b sticky top-[53px] z-10 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
              <TabsList className="w-max bg-transparent h-auto px-1 flex space-x-6">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex flex-col items-center justify-center px-1 py-2 text-xs border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white rounded-none"
                  >
                    <span className="text-2xl mb-1">{category.icon}</span>
                    <span className="text-center text-foreground font-medium mt-1 whitespace-nowrap">
                      {category.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            onClick={handleAdvancedFilters}
            className="flex items-center gap-2 min-w-24 px-4 py-2 border-gray-300 shadow-sm hover:shadow-md transition-shadow"
          >
            <Filter className="h-4 w-4" />
            <span className="text-foreground font-medium">Filtros</span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
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
