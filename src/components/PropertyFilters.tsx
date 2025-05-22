
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, BedDouble, Bath, Wifi, Utensils, Car, Tv, Pool, Fan } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

// Amenities for advanced filtering
const amenities = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "kitchen", label: "Cozinha completa", icon: Utensils },
  { id: "parking", label: "Estacionamento", icon: Car },
  { id: "tv", label: "TV / Netflix", icon: Tv },
  { id: "pool", label: "Piscina", icon: Pool },
  { id: "ac", label: "Ar-condicionado", icon: Fan },
];

interface PropertyFiltersProps {
  activeFilter: string | null;
  onFilterChange: (filter: string) => void;
}

const PropertyFilters = ({ activeFilter, onFilterChange }: PropertyFiltersProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || activeFilter || "vistas-incriveis");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [bedsCount, setBedsCount] = useState<string>("any");
  const [bathroomsCount, setBathroomsCount] = useState<string>("any");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    setSelectedAmenities(prev => {
      if (checked) {
        return [...prev, amenityId];
      } else {
        return prev.filter(id => id !== amenityId);
      }
    });
  };

  const handleApplyFilters = () => {
    // In a real app this would apply the filters to the properties
    setIsFilterApplied(true);
    // Close the dropdown menu (would be handled by state in a real implementation)
  };

  const handleClearFilters = () => {
    setPriceRange([0, 1000]);
    setBedsCount("any");
    setBathroomsCount("any");
    setSelectedAmenities([]);
    setIsFilterApplied(false);
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
                    <span className="text-center text-foreground mt-1 text-xs">
                      {category.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="ml-4 relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border rounded-lg flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                  {isFilterApplied && (
                    <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                      {selectedAmenities.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[320px] p-6 bg-background">
                <div>
                  <h3 className="font-medium text-lg mb-4">Faixa de preço</h3>
                  <div className="mb-6">
                    <Slider
                      defaultValue={[0, 1000]}
                      max={1000}
                      step={10}
                      className="mb-6"
                      value={[priceRange[0], priceRange[1]]}
                      onValueChange={(value: number[]) =>
                        setPriceRange([value[0], value[1]])
                      }
                    />
                    <div className="flex items-center justify-between">
                      <div className="border rounded-lg p-2 w-[145px]">
                        <div className="text-xs text-gray-500">preço mínimo</div>
                        <div className="text-foreground">R$ {priceRange[0]}</div>
                      </div>
                      <span className="w-4 h-[1px] bg-gray-300"></span>
                      <div className="border rounded-lg p-2 w-[145px]">
                        <div className="text-xs text-gray-500">preço máximo</div>
                        <div className="text-foreground">R$ {priceRange[1]}</div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <h3 className="font-medium text-lg mb-4">Quartos e camas</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <BedDouble className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-medium">Camas</h4>
                      </div>
                      <RadioGroup defaultValue="any" value={bedsCount} onValueChange={setBedsCount} className="flex gap-3">
                        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                          <RadioGroupItem value="any" id="any-bed" />
                          <Label htmlFor="any-bed" className="cursor-pointer">Qualquer</Label>
                        </div>
                        {[1, 2, 3, 4, "5+"].map((num) => (
                          <div key={num} className="flex items-center gap-2 border rounded-lg px-3 py-2">
                            <RadioGroupItem value={num.toString()} id={`bed-${num}`} />
                            <Label htmlFor={`bed-${num}`} className="cursor-pointer">{num}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <h4 className="text-sm font-medium">Banheiros</h4>
                      </div>
                      <RadioGroup defaultValue="any" value={bathroomsCount} onValueChange={setBathroomsCount} className="flex gap-3">
                        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                          <RadioGroupItem value="any" id="any-bath" />
                          <Label htmlFor="any-bath" className="cursor-pointer">Qualquer</Label>
                        </div>
                        {[1, 2, 3, "4+"].map((num) => (
                          <div key={num} className="flex items-center gap-2 border rounded-lg px-3 py-2">
                            <RadioGroupItem value={num.toString()} id={`bath-${num}`} />
                            <Label htmlFor={`bath-${num}`} className="cursor-pointer">{num}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <Separator className="my-4" />

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
                        <div className="font-medium text-foreground">{type}</div>
                      </button>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <h3 className="font-medium text-lg mb-4">Comodidades</h3>
                  <div className="grid grid-cols-2 gap-y-4 mb-6">
                    {amenities.map((amenity) => (
                      <div key={amenity.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={amenity.id} 
                          checked={selectedAmenities.includes(amenity.id)}
                          onCheckedChange={(checked) => 
                            handleAmenityChange(amenity.id, checked as boolean)
                          }
                        />
                        <Label htmlFor={amenity.id} className="flex items-center gap-2 cursor-pointer">
                          <amenity.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{amenity.label}</span>
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleClearFilters} className="text-foreground">
                      Limpar tudo
                    </Button>
                    <Button 
                      className="bg-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 text-white"
                      onClick={handleApplyFilters}
                    >
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
