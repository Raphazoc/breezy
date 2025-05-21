
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
import { Check, Upload, X } from "lucide-react";

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
  
  // Estados para simulação de upload
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

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

  const simulateFileUpload = () => {
    if (uploading) return;
    
    setUploading(true);
    
    // Cria 3 arquivos simulados
    const fileIndexes = [uploadedFiles.length, uploadedFiles.length + 1, uploadedFiles.length + 2];
    const newProgress = { ...uploadProgress };
    
    fileIndexes.forEach(index => {
      newProgress[index] = 0;
    });
    
    setUploadProgress(newProgress);
    
    // Simula progresso de upload
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const updated = { ...prev };
        let allComplete = true;
        
        fileIndexes.forEach(index => {
          if (updated[index] < 100) {
            updated[index] = Math.min(updated[index] + Math.random() * 20, 100);
          }
          if (updated[index] < 100) allComplete = false;
        });
        
        if (allComplete) {
          clearInterval(interval);
          
          // Após completar, adiciona arquivos simulados
          setTimeout(() => {
            setUploadedFiles(prev => [
              ...prev,
              `https://source.unsplash.com/random/800x600?house,${Date.now()}`,
              `https://source.unsplash.com/random/800x600?interior,${Date.now() + 1}`,
              `https://source.unsplash.com/random/800x600?apartment,${Date.now() + 2}`
            ]);
            setUploading(false);
          }, 500);
        }
        
        return updated;
      });
    }, 200);
  };

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (step === 4) {
      if (uploadedFiles.length < 3) {
        toast({
          title: "Fotos insuficientes",
          description: "Por favor, adicione pelo menos 3 fotos do seu imóvel.",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (step < 4) {
      nextStep();
    } else {
      // Submissão final do formulário
      toast({
        title: "Propriedade enviada com sucesso!",
        description: "Sua propriedade será analisada em breve pela nossa equipe.",
      });
      setFormData({
        propertyType: "",
        location: "",
        title: "",
        description: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        amenities: [],
        photos: []
      });
      setUploadedFiles([]);
      navigate("/");
    }
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      return formData.propertyType && formData.location && formData.bedrooms && formData.bathrooms;
    } else if (step === 2) {
      return formData.title && formData.description && formData.price;
    } else if (step === 3) {
      return formData.amenities.length > 0;
    }
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(prev => prev + 1);
    } else {
      toast({
        title: "Informações incompletas",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
    }
  };
  
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <div className="bg-background p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-semibold text-center mb-8">Anuncie seu espaço no HospedaBem</h1>
            
            <div className="mb-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div 
                  className="bg-airbnb-primary h-2 rounded-full transition-all"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">Etapa {step} de 4</div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Conte-nos sobre seu espaço</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="propertyType">Tipo de propriedade <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.propertyType} 
                        onValueChange={(value) => handleSelectChange("propertyType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de propriedade" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          <SelectItem value="house">Casa</SelectItem>
                          <SelectItem value="apartment">Apartamento</SelectItem>
                          <SelectItem value="guesthouse">Casa de hóspedes</SelectItem>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="cabin">Cabana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Localização <span className="text-red-500">*</span></Label>
                      <Input 
                        id="location" 
                        name="location"
                        placeholder="Endereço da propriedade" 
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="bedrooms">Quartos <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.bedrooms} 
                        onValueChange={(value) => handleSelectChange("bedrooms", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Número de quartos" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bathrooms">Banheiros <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.bathrooms} 
                        onValueChange={(value) => handleSelectChange("bathrooms", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Número de banheiros" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
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
                      <Label htmlFor="title">Título do anúncio <span className="text-red-500">*</span></Label>
                      <Input 
                        id="title" 
                        name="title"
                        placeholder="Ex: Apartamento aconchegante com vista para o mar" 
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Descrição <span className="text-red-500">*</span></Label>
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
                      <Label htmlFor="price">Preço por noite (R$) <span className="text-red-500">*</span></Label>
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
                  <p className="text-sm text-muted-foreground">
                    Selecione pelo menos uma comodidade disponível em seu espaço
                  </p>

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
                            ? "border-airbnb-primary bg-red-50 dark:bg-red-900/10" 
                            : "hover:border-gray-400"
                        }`}
                        onClick={() => handleAmenityToggle(amenity)}
                      >
                        <div className="flex items-center">
                          {formData.amenities.includes(amenity) && (
                            <Check className="w-4 h-4 text-airbnb-primary mr-2" />
                          )}
                          <span>{amenity}</span>
                        </div>
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
                    <p className="text-gray-600 dark:text-gray-300">
                      Adicione pelo menos 3 fotos para mostrar aos hóspedes como é o seu espaço.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {/* Arquivos já carregados */}
                      {uploadedFiles.map((fileUrl, index) => (
                        <div 
                          key={fileUrl} 
                          className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg relative overflow-hidden group"
                        >
                          <img 
                            src={fileUrl} 
                            alt={`Foto do imóvel ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeUploadedFile(index)}
                            className="absolute top-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      
                      {/* Arquivos em upload */}
                      {Object.entries(uploadProgress).map(([key, progress]) => {
                        if (progress < 100) {
                          return (
                            <div 
                              key={`progress-${key}`} 
                              className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300"
                            >
                              <div className="text-center p-4">
                                <div className="w-12 h-12 mx-auto mb-2 relative">
                                  <svg viewBox="0 0 36 36" className="text-gray-300 dark:text-gray-600 w-12 h-12">
                                    <path
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeDasharray="100"
                                      strokeDashoffset={100 - progress}
                                      className="stroke-airbnb-primary"
                                    />
                                  </svg>
                                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                                    {Math.round(progress)}%
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Carregando...</span>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                      
                      {/* Botão de upload */}
                      {uploadedFiles.length < 8 && !uploading && (
                        <div 
                          onClick={simulateFileUpload}
                          className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors"
                        >
                          <div className="text-center p-4">
                            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">Adicionar fotos</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-2">
                      {uploadedFiles.length} de 8 fotos adicionadas (mínimo: 3)
                    </p>
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
                      disabled={uploadedFiles.length < 3 || uploading}
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
