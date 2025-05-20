
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota não existente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-airbnb-primary mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            Não conseguimos encontrar a página que você está procurando. A página pode ter sido removida ou está temporariamente indisponível.
          </p>
          <Link to="/">
            <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white">
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
