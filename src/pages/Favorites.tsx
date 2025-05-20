
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Favorites = () => {
  const [selectedTab, setSelectedTab] = useState("stays");
  
  // Simulando propriedades favoritas (primeiros 3 itens da lista)
  const favoriteProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <h1 className="text-3xl font-semibold mb-6">Favoritos</h1>
        
        <Tabs defaultValue="stays" className="mb-10">
          <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger 
              value="stays" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-2 pt-0 px-3 text-base font-normal"
            >
              Estadias
            </TabsTrigger>
            <TabsTrigger 
              value="experiences" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-2 pt-0 px-3 text-base font-normal"
            >
              Experiências
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="stays" className="pt-6">
            {favoriteProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium mb-2">Sem favoritos ainda</h2>
                <p className="text-gray-600 mb-6">
                  Quando você encontrar lugares que ama, salve-os aqui ao clicar no ícone de coração.
                </p>
                <Link to="/">
                  <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
                    Começar a explorar
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="experiences" className="pt-6">
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">Ainda sem experiências favoritas</h2>
              <p className="text-gray-600 mb-6">
                Quando você encontrar experiências que ama, salve-as aqui ao clicar no ícone de coração.
              </p>
              <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90">
                Explorar experiências
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
