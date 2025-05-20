
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Define categorias de filtros
const filterCategories = [
  { value: "vistas-incriveis", label: "Vistas incríveis", icon: "🏞️" },
  { value: "beira-mar", label: "Beira-mar", icon: "🏖️" },
  { value: "cabanas", label: "Cabanas", icon: "🏡" },
  { value: "design", label: "Design", icon: "🎨" },
  { value: "campo", label: "Campo", icon: "🌄" },
  { value: "mansoes", label: "Mansões", icon: "🏰" },
  { value: "tropical", label: "Tropical", icon: "🌴" },
  { value: "cidades-iconicas", label: "Cidades icônicas", icon: "🏙️" },
  { value: "em-alta", label: "Em alta", icon: "🔥" },
  { value: "luxo", label: "Luxo", icon: "✨" },
  { value: "historico", label: "Histórico", icon: "🏛️" },
  { value: "camping", label: "Camping", icon: "⛺" },
];

const PropertyFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("vistas-incriveis");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  
  return (
    <div className="sticky top-[80px] z-40 bg-background py-8 border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-x-auto hide-scrollbar">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="w-max space-x-6 bg-transparent">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="flex flex-col items-center pt-3 pb-2 px-6 text-sm border-b-2 border-transparent data-[state=active]:border-black dark:data-[state=active]:border-white rounded-none"
                  >
                    <span className="text-2xl mb-2">{category.icon}</span>
                    <span className="whitespace-nowrap">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border rounded-lg flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[280px] p-6">
                <div>
                  <h3 className="font-medium text-lg mb-4">Faixa de preço</h3>
                  <div className="mb-6">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      className="mb-6"
                      onValueChange={(value: number[]) => setPriceRange([value[0], value[1]])}
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
                          {type === "Casa" ? "🏠" : type === "Apartamento" ? "🏢" : type === "Pousada" ? "🏡" : "🏨"}
                        </div>
                        <div className="font-medium">{type}</div>
                      </button>
                    ))}
                  </div>
                  
                  <h3 className="font-medium text-lg mb-4">Quartos e camas</h3>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <span className="flex-1">Quartos</span>
                      <div className="flex space-x-2">
                        {["Qualquer", "1", "2", "3", "4", "5+"].map((num) => (
                          <button 
                            key={num} 
                            className="w-8 h-8 rounded-full border hover:border-black dark:hover:border-white flex items-center justify-center text-sm"
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="flex-1">Camas</span>
                      <div className="flex space-x-2">
                        {["Qualquer", "1", "2", "3", "4", "5+"].map((num) => (
                          <button 
                            key={num} 
                            className="w-8 h-8 rounded-full border hover:border-black dark:hover:border-white flex items-center justify-center text-sm"
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" className="underline">Limpar tudo</Button>
                    <Button className="bg-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 text-white">Mostrar lugares</Button>
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
