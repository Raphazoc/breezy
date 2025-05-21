
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, Bed, Bath, User, Home, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id || "0"));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Propriedade não encontrada</h1>
            <p>Desculpe, a propriedade que você está procurando não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-semibold mr-1">{property.rating}</span>
              <span className="text-muted-foreground">({property.reviewCount} avaliações)</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">{property.location}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, i) => (
                <div key={i} className="rounded-xl overflow-hidden h-[192px]">
                  <img
                    src={image}
                    alt={`${property.title} ${i + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:flex gap-12">
            <div className="md:w-8/12 mb-8 md:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {property.type} em {property.location}
                  </h2>
                  <div className="flex gap-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{property.beds} hóspedes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms} quartos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} banheiros</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Host"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Hospedado por Carlos</p>
                    <p className="text-sm text-muted-foreground">Desde 2019</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Sobre este espaço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description || `Este incrível ${property.type.toLowerCase()} em ${property.location} oferece uma experiência única de hospedagem. Com ${property.bedrooms} quartos confortáveis e ${property.bathrooms} banheiros, é perfeito para grupos de até ${property.beds} pessoas. A propriedade tem uma localização privilegiada, próxima a atrações turísticas, restaurantes e comércio. Desfrute de uma estadia memorável neste espaço aconchegante e bem localizado.`}
                </p>
              </div>

              <Tabs defaultValue="amenities">
                <TabsList className="mb-6">
                  <TabsTrigger value="amenities">Comodidades</TabsTrigger>
                  <TabsTrigger value="location">Localização</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                </TabsList>
                <TabsContent value="amenities" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Wi-Fi de alta velocidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Cozinha completa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Ar condicionado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>TV com Netflix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Estacionamento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span>Lavadora/Secadora</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location">
                  <p className="text-muted-foreground mb-4">
                    O {property.type.toLowerCase()} está localizado em {property.location}, próximo a diversas atrações turísticas e áreas de interesse. A região é conhecida por sua ótima infraestrutura, segurança e facilidade de acesso ao transporte público.
                  </p>
                  <div className="bg-muted h-[300px] rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Mapa não disponível</p>
                  </div>
                </TabsContent>
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 pb-6 border-b">
                      <img
                        src="https://i.pravatar.cc/150?img=1"
                        className="w-12 h-12 rounded-full"
                        alt="Reviewer"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">Ana</p>
                          <p className="text-xs text-muted-foreground">Março 2024</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ótima localização e espaço bem confortável. A comunicação com o anfitrião foi excelente e ele foi muito prestativo. Recomendo!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src="https://i.pravatar.cc/150?img=2"
                        className="w-12 h-12 rounded-full"
                        alt="Reviewer"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium">Roberto</p>
                          <p className="text-xs text-muted-foreground">Fevereiro 2024</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Lugar incrível! Superou todas as minhas expectativas. Bem limpo, organizado e com uma vista incrível. Voltarei com certeza!
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:w-4/12">
              <div className="border rounded-xl p-6 shadow-sm sticky top-24">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-2xl font-bold">R$ {property.price}</span>
                    <span className="text-muted-foreground ml-1">/ noite</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold mr-1">{property.rating}</span>
                    <span className="text-muted-foreground text-sm">({property.reviewCount})</span>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden mb-6">
                  <div className="grid grid-cols-2">
                    <div className="p-4 border-r border-b">
                      <p className="text-xs font-medium mb-1">CHECK-IN</p>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>22/05/2025</span>
                      </div>
                    </div>
                    <div className="p-4 border-b">
                      <p className="text-xs font-medium mb-1">CHECKOUT</p>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>27/05/2025</span>
                      </div>
                    </div>
                    <div className="p-4 border-r col-span-2">
                      <p className="text-xs font-medium mb-1">HÓSPEDES</p>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>2 hóspedes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white py-3 rounded-lg font-medium mb-4">
                  Reservar
                </button>

                <div className="text-center text-sm text-muted-foreground mb-6">
                  Você ainda não será cobrado
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">R$ {property.price} x 5 noites</span>
                    <span>R$ {property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Taxa de limpeza</span>
                    <span>R$ 250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Taxa de serviço</span>
                    <span>R$ 180</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {property.price * 5 + 250 + 180}</span>
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

export default PropertyDetail;
