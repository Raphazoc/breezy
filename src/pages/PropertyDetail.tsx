
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Heart, Share, Star, ArrowLeft } from "lucide-react";
import { properties } from "@/data/properties";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const { toast } = useToast();
  const [favorited, setFavorited] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(1);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Imóvel não encontrado</h2>
            <Link to="/">
              <Button>Voltar para a página inicial</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleFavorite = () => {
    setFavorited(!favorited);
    toast({
      title: favorited ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: favorited 
        ? "Este imóvel foi removido da sua lista de favoritos." 
        : "Este imóvel foi adicionado à sua lista de favoritos."
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copiado",
      description: "O link deste imóvel foi copiado para sua área de transferência."
    });
  };

  const handleBooking = () => {
    toast({
      title: "Reserva iniciada",
      description: "Sua solicitação de reserva foi iniciada. Acompanhe pelo seu perfil."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container-custom">
          <div className="mb-6 flex items-center">
            <Link to="/" className="flex items-center text-sm hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" /> Voltar para resultados
            </Link>
          </div>
          
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 fill-current text-amber-500 mr-1" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="mx-1">·</span>
                  <span className="text-muted-foreground underline">{property.reviews} avaliações</span>
                </div>
                <span className="text-muted-foreground">
                  {property.location}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="flex items-center" onClick={handleShare}>
                  <Share className="h-4 w-4 mr-2" />
                  <span>Compartilhar</span>
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex items-center" 
                  onClick={handleFavorite}
                >
                  <Heart 
                    className={`h-4 w-4 mr-2 ${favorited ? 'fill-red-500 text-red-500' : ''}`} 
                  />
                  <span>Salvar</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>
            
            <div className="bg-background shadow-lg border rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xl font-bold">R$ {property.price}</span>
                  <span className="text-muted-foreground"> / noite</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-amber-500 mr-1" />
                  <span className="font-medium">{property.rating}</span>
                </div>
              </div>
              
              <Tabs defaultValue="dates" className="w-full mb-6">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="dates">Datas</TabsTrigger>
                  <TabsTrigger value="month">Mês</TabsTrigger>
                </TabsList>
                <TabsContent value="dates" className="py-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full border rounded-md mb-4"
                  />
                </TabsContent>
                <TabsContent value="month" className="py-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["Mai", "Jun", "Jul", "Ago", "Set", "Out"].map((month) => (
                      <Button 
                        key={month} 
                        variant="outline" 
                        className="w-full justify-between text-left py-4 h-auto"
                      >
                        <span className="text-base font-normal">{month}</span>
                        <span className="text-sm text-muted-foreground">R$ {property.price}</span>
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mb-6">
                <Label htmlFor="guests">Hóspedes</Label>
                <Input 
                  id="guests" 
                  type="number" 
                  min={1} 
                  max={property.maxGuests} 
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="mt-2"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Máximo: {property.maxGuests} hóspedes
                </p>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-airbnb-primary to-red-600 hover:from-red-600 hover:to-airbnb-primary text-white"
                onClick={handleBooking}
              >
                Reservar agora
              </Button>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Você ainda não será cobrado
              </div>
              
              <div className="border-t mt-6 pt-6 space-y-4">
                <div className="flex justify-between">
                  <span>R$ {property.price} x 1 noite</span>
                  <span>R$ {property.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de serviço</span>
                  <span>R$ {Math.round(property.price * 0.12)}</span>
                </div>
                <div className="flex justify-between font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>R$ {property.price + Math.round(property.price * 0.12)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Sobre este espaço</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    {property.description || 
                      "Este lindo imóvel oferece uma estadia confortável e luxuosa. Desfrute de amenidades modernas e uma excelente localização, perfeita tanto para turistas quanto para viajantes a negócios."}
                  </p>
                  <p>
                    Os hóspedes têm acesso a todas as comodidades, incluindo Wi-Fi de alta velocidade, 
                    cozinha totalmente equipada, área de lavanderia e uma piscina compartilhada.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">O que este lugar oferece</h3>
                  <div className="grid grid-cols-2 gap-y-4">
                    {["Wi-Fi", "Estacionamento", "Cozinha", "TV", "Ar condicionado", "Piscina"].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center mr-4">✓</div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Informações do anfitrião</h3>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-muted mr-4 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
                        alt="Host"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Ana Silva</h4>
                      <p className="text-sm text-muted-foreground">Anfitrião desde 2021</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-3 w-3 fill-current text-amber-500 mr-1" />
                        <span className="text-sm">4.97 · 153 avaliações</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm">
                    <p className="mb-4">
                      Adoro receber pessoas do mundo todo e compartilhar dicas 
                      sobre a minha cidade. Sou apaixonada por viagens e gastronomia.
                    </p>
                    <Button variant="outline" className="w-full">Entrar em contato</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Localização</h2>
            <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=-23.5505,-46.6333&zoom=12&size=600x400&key=YOUR_API_KEY&style=feature:all|element:labels|visibility:off"
                alt="Localização do imóvel"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg">{property.location}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Avaliações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-b pb-6 mb-6 last:border-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted mr-4 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/100?img=${i+20}`}
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{["Mariana", "Pedro", "Camila", "Rafael"][i-1]}</h4>
                      <p className="text-sm text-muted-foreground">Abril de 2023</p>
                    </div>
                  </div>
                  <p>
                    {[
                      "Localização perfeita e apartamento muito bem equipado! A comunicação foi excelente e tudo estava conforme descrito.",
                      "Ficamos muito satisfeitos com nossa estadia. O lugar é lindo, limpo e muito confortável. Recomendo fortemente!",
                      "Experiência incrível! O imóvel é ainda mais bonito pessoalmente e o anfitrião foi super atencioso.",
                      "Ótima opção para quem busca conforto e privacidade. A vizinhança é tranquila e tem tudo por perto."
                    ][i-1]}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4">
              Mostrar todas as {property.reviews} avaliações
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
