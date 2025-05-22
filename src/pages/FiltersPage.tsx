
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Wifi, Utensils, Car, Tv, Fan, Droplets } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Amenities for advanced filtering
const amenities = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "kitchen", label: "Cozinha completa", icon: Utensils },
  { id: "parking", label: "Estacionamento", icon: Car },
  { id: "tv", label: "TV / Netflix", icon: Tv },
  { id: "pool", label: "Piscina", icon: Droplets },
  { id: "ac", label: "Ar-condicionado", icon: Fan },
];

const FiltersPage = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [bedsCount, setBedsCount] = useState<string>("any");
  const [bathroomsCount, setBathroomsCount] = useState<string>("any");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string | null>(null);

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
    // In a real app, we would apply these filters to a query string
    toast.success("Filtros aplicados com sucesso!");
    navigate(-1);
  };

  const handleClearFilters = () => {
    setPriceRange([0, 1000]);
    setBedsCount("any");
    setBathroomsCount("any");
    setSelectedAmenities([]);
    setSelectedPropertyType(null);
    toast.info("Filtros limpos");
  };

  const propertyTypes = [
    { id: "casa", label: "Casa", icon: "🏠" },
    { id: "apartamento", label: "Apartamento", icon: "🏢" },
    { id: "pousada", label: "Pousada", icon: "🏡" },
    { id: "hotel", label: "Hotel", icon: "🏨" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-foreground">Filtros</h1>
              <Button variant="outline" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            </div>
            
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div>
                <h3 className="font-medium text-lg mb-4 text-foreground">Faixa de preço</h3>
                <div className="mb-8">
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
                    <div className="border rounded-lg p-3 w-[145px]">
                      <div className="text-xs text-gray-500">Preço mínimo</div>
                      <div className="text-foreground font-medium">R$ {priceRange[0]}</div>
                    </div>
                    <span className="w-4 h-[1px] bg-gray-300"></span>
                    <div className="border rounded-lg p-3 w-[145px]">
                      <div className="text-xs text-gray-500">Preço máximo</div>
                      <div className="text-foreground font-medium">R$ {priceRange[1]}</div>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <h3 className="font-medium text-lg mb-5 text-foreground">Quartos e camas</h3>
                <div className="space-y-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BedDouble className="h-5 w-5 text-foreground" />
                      <h4 className="text-base font-medium text-foreground">Camas</h4>
                    </div>
                    <RadioGroup defaultValue="any" value={bedsCount} onValueChange={setBedsCount} className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      <div className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2">
                        <RadioGroupItem value="any" id="any-bed" />
                        <Label htmlFor="any-bed" className="cursor-pointer text-foreground">Qualquer</Label>
                      </div>
                      {[1, 2, 3, 4, "5+"].map((num) => (
                        <div key={num} className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2">
                          <RadioGroupItem value={num.toString()} id={`bed-${num}`} />
                          <Label htmlFor={`bed-${num}`} className="cursor-pointer text-foreground">{num}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Bath className="h-5 w-5 text-foreground" />
                      <h4 className="text-base font-medium text-foreground">Banheiros</h4>
                    </div>
                    <RadioGroup defaultValue="any" value={bathroomsCount} onValueChange={setBathroomsCount} className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      <div className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2">
                        <RadioGroupItem value="any" id="any-bath" />
                        <Label htmlFor="any-bath" className="cursor-pointer text-foreground">Qualquer</Label>
                      </div>
                      {[1, 2, 3, "4+"].map((num) => (
                        <div key={num} className="flex items-center justify-center gap-2 border rounded-lg px-3 py-2">
                          <RadioGroupItem value={num.toString()} id={`bath-${num}`} />
                          <Label htmlFor={`bath-${num}`} className="cursor-pointer text-foreground">{num}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <Separator className="my-8" />

                <h3 className="font-medium text-lg mb-5 text-foreground">Tipo de propriedade</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedPropertyType(type.id === selectedPropertyType ? null : type.id)}
                      className={`border rounded-xl p-4 text-left hover:border-black dark:hover:border-white transition-colors ${
                        selectedPropertyType === type.id ? 'border-black dark:border-white ring-2 ring-offset-2 ring-black dark:ring-white' : ''
                      }`}
                    >
                      <div className="h-8 w-8 mb-6 text-2xl">
                        {type.icon}
                      </div>
                      <div className="font-medium text-foreground">{type.label}</div>
                    </button>
                  ))}
                </div>

                <Separator className="my-8" />

                <h3 className="font-medium text-lg mb-5 text-foreground">Comodidades</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8">
                  {amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-3">
                      <Checkbox 
                        id={amenity.id} 
                        checked={selectedAmenities.includes(amenity.id)}
                        onCheckedChange={(checked) => 
                          handleAmenityChange(amenity.id, checked as boolean)
                        }
                        className="h-5 w-5"
                      />
                      <Label htmlFor={amenity.id} className="flex items-center gap-2 cursor-pointer">
                        <amenity.icon className="h-5 w-5 text-foreground" />
                        <span className="text-foreground text-base">{amenity.label}</span>
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-10">
                  <Button variant="outline" onClick={handleClearFilters} className="text-foreground">
                    Limpar tudo
                  </Button>
                  <Button 
                    className="bg-airbnb-primary hover:bg-red-600 text-white"
                    onClick={handleApplyFilters}
                  >
                    Aplicar filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiltersPage;
