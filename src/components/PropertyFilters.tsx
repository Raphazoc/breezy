
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const PropertyFilters = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "vistas-incriveis");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  return (
    <div className="bg-background py-2 border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-x-auto hide-scrollbar scroll-smooth">
            <Tabs value={selectedCategory} onValueChange={handleCategoryChange}>
              <TabsList className="w-max space-x-4 bg-transparent h-16 px-2">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex flex-col items-center justify-center pt-2 pb-1 px-3 text-xs border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white rounded-none flex-shrink-0 h-16"
                  >
                    <span className="text-xl mb-1">{category.icon}</span>
                    <span className="text-center text-gray-700 dark:text-white mt-1 text-xs">
                      {category.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border rounded-lg flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[280px] p-6 bg-background">
                <div>
                  <h3 className="font-medium text-lg mb-4">Faixa de preço</h3>
                  <div className="mb-6">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      className="mb-6"
                      onValueChange={(value: number[]) =>
                        setPriceRange([value[0], value[1]])
                      }
                    />
                    <div className="flex items-center justify-between">
                      <div className="border rounded-lg p-2 w-[120px]">
                        <div className="text-xs text-gray-500">preço mínimo</div>
                        <div>R$ {priceRange[0]}</div>
                      </div>
                      <span className="w-4 h-[1px] bg-gray-300"></span>
                      <div className="border rounded-lg p-2 w-[120px]">
                        <div className="text-xs text-gray-500">preço máximo</div>
                        <div>R$ {priceRange[1]}</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-medium text-lg mb-4">Tipo de propriedade</h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {["Casa", "Apartamento", "Pousada", "Hotel"].map((type) => (
                      <button
                        key={type}
                        className="border rounded-xl p-4 text-left hover:border-black dark:hover:border-white transition-colors"
                      >
                        <div className="h-6 w-6 mb-6 text-lg">
                          {type === "Casa"
                            ? "🏠"
                            : type === "Apartamento"
                            ? "🏢"
                            : type === "Pousada"
                            ? "🏡"
                            : "🏨"}
                        </div>
                        <div className="font-medium">{type}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="underline">
                      Limpar tudo
                    </Button>
                    <Button className="bg-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 text-white">
                      Mostrar lugares
                    </Button>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
