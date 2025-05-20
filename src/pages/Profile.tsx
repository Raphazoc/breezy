
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Home, CreditCard, Bell, Shield, Settings } from "lucide-react";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <h1 className="text-3xl font-semibold mb-6">Conta</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-1">
              <Button 
                variant={selectedTab === "profile" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("profile")}
              >
                <User className="mr-2 h-4 w-4" />
                Perfil
              </Button>
              <Button 
                variant={selectedTab === "listings" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("listings")}
              >
                <Home className="mr-2 h-4 w-4" />
                Anúncios
              </Button>
              <Button 
                variant={selectedTab === "payments" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("payments")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pagamentos
              </Button>
              <Button 
                variant={selectedTab === "notifications" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("notifications")}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notificações
              </Button>
              <Button 
                variant={selectedTab === "privacy" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("privacy")}
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacidade
              </Button>
              <Button 
                variant={selectedTab === "settings" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setSelectedTab("settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white rounded-lg p-6 border">
            {selectedTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Informações pessoais</h2>
                  <p className="text-gray-600 mb-6">
                    Informações básicas que você compartilha com outros usuários da plataforma.
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mr-6">
                    <User className="h-12 w-12 text-gray-400" />
                  </div>
                  <div>
                    <Button variant="outline" className="mb-2">Alterar foto</Button>
                    <p className="text-gray-500 text-sm">
                      JPEG ou PNG. Tamanho máximo de 5MB.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nome</Label>
                      <Input id="firstName" placeholder="Nome" defaultValue="João" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input id="lastName" placeholder="Sobrenome" defaultValue="Silva" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" defaultValue="joao.silva@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="Telefone" defaultValue="(11) 98765-4321" />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" placeholder="Endereço" defaultValue="Av. Paulista, 1000" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" placeholder="Cidade" defaultValue="São Paulo" />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" placeholder="Estado" defaultValue="SP" />
                    </div>
                    <div>
                      <Label htmlFor="zip">CEP</Label>
                      <Input id="zip" placeholder="CEP" defaultValue="01311-000" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Sobre você</Label>
                    <textarea
                      id="bio"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Conte um pouco sobre você..."
                      defaultValue="Amo viajar e conhecer lugares novos. Trabalho com tecnologia e sou apaixonado por fotografia."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
                      Salvar alterações
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {selectedTab === "listings" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Seus anúncios</h2>
                  <p className="text-gray-600 mb-6">
                    Gerencie as propriedades que você anunciou no Airbnb.
                  </p>
                </div>
                
                <div className="text-center py-10">
                  <h3 className="font-medium text-lg mb-2">Você ainda não tem anúncios</h3>
                  <p className="text-gray-600 mb-6">
                    Comece a ganhar dinheiro anunciando seu espaço no Airbnb.
                  </p>
                  <Link to="/host">
                    <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
                      Criar anúncio
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            
            {(selectedTab === "payments" || selectedTab === "notifications" || 
              selectedTab === "privacy" || selectedTab === "settings") && (
              <div className="py-10 text-center">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedTab === "payments" && "Métodos de pagamento"}
                  {selectedTab === "notifications" && "Preferências de notificação"}
                  {selectedTab === "privacy" && "Privacidade e segurança"}
                  {selectedTab === "settings" && "Configurações da conta"}
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Esta seção está em desenvolvimento. Em breve você poderá gerenciar suas 
                  {selectedTab === "payments" && " informações de pagamento"}
                  {selectedTab === "notifications" && " preferências de notificação"}
                  {selectedTab === "privacy" && " configurações de privacidade"}
                  {selectedTab === "settings" && " configurações da conta"}
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
