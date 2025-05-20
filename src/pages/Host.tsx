
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Host = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    title: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [] as string[],
    photos: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => {
      if (prev.amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: prev.amenities.filter(a => a !== amenity)
        };
      } else {
        return {
          ...prev,
          amenities: [...prev.amenities, amenity]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Propriedade enviada!",
      description: "Sua propriedade será analisada em breve.",
    });
    navigate("/");
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-semibold text-center mb-8">Anuncie seu espaço no Airbnb</h1>
            
            <div className="mb-8">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-airbnb-primary h-2 rounded-full transition-all"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-500 text-center">Etapa {step} de 4</div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Conte-nos sobre seu espaço</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="propertyType">Tipo de propriedade</Label>
                      <Select 
                        value={formData.propertyType} 
                        onValueChange={(value) => handleSelectChange("propertyType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de propriedade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">Casa</SelectItem>
                          <SelectItem value="apartment">Apartamento</SelectItem>
                          <SelectItem value="guesthouse">Casa de hóspedes</SelectItem>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="cabin">Cabana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <Input 
                        id="location" 
                        name="location"
                        placeholder="Endereço da propriedade" 
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="bedrooms">Quartos</Label>
                      <Select 
                        value={formData.bedrooms} 
                        onValueChange={(value) => handleSelectChange("bedrooms", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Número de quartos" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bathrooms">Banheiros</Label>
                      <Select 
                        value={formData.bathrooms} 
                        onValueChange={(value) => handleSelectChange("bathrooms", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Número de banheiros" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-airbnb-primary hover:bg-airbnb-primary/90"
                    >
                      Próximo
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Adicione detalhes e descrição</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Título do anúncio</Label>
                      <Input 
                        id="title" 
                        name="title"
                        placeholder="Ex: Apartamento aconchegante com vista para o mar" 
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea 
                        id="description" 
                        name="description"
                        placeholder="Descreva seu espaço, destaque características especiais, localização, etc." 
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                      />
                    </div>

                    <div>
                      <Label htmlFor="price">Preço por noite (R$)</Label>
                      <Input 
                        id="price" 
                        name="price"
                        type="number"
                        placeholder="Ex: 250" 
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      variant="outline"
                    >
                      Voltar
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-airbnb-primary hover:bg-airbnb-primary/90"
                    >
                      Próximo
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Quais comodidades você oferece?</h2>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Wi-Fi", "TV", "Cozinha", "Ar-condicionado", 
                      "Churrasqueira", "Piscina", "Estacionamento", "Lavadora",
                      "Secadora", "Aquecimento", "Espaço de trabalho", "Jacuzzi"
                    ].map((amenity) => (
                      <div 
                        key={amenity}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.amenities.includes(amenity) 
                            ? "border-airbnb-primary bg-red-50" 
                            : "hover:border-gray-400"
                        }`}
                        onClick={() => handleAmenityToggle(amenity)}
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      variant="outline"
                    >
                      Voltar
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-airbnb-primary hover:bg-airbnb-primary/90"
                    >
                      Próximo
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Adicione fotos do seu espaço</h2>

                  <div className="space-y-4">
                    <p className="text-gray-600">Adicione pelo menos 5 fotos para mostrar aos hóspedes como é o seu espaço.</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors"
                        >
                          <div className="text-center p-4">
                            <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            <span className="mt-2 text-sm text-gray-500">Adicionar foto</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      onClick={prevStep}
                      variant="outline"
                    >
                      Voltar
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-airbnb-primary hover:bg-airbnb-primary/90"
                    >
                      Publicar anúncio
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Host;
