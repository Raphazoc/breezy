
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-10">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Central de Ajuda</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">AirCover</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Informações de segurança</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Apoio a pessoas com deficiência</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Opções de cancelamento</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Comunicar problema no bairro</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Comunidade</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Acomodações para situações de emergência</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Combate à discriminação</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Airbnb.org: ajuda em desastres</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Hospedagem</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Anuncie seu imóvel</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">AirCover para Anfitriões</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Recursos para anfitriões</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Fórum da comunidade</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Hospedagem responsável</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Sala de imprensa</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Novos recursos</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Carreiras</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Investidores</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Cartões de presente</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">© 2025 Airbnb, Inc.</p>
            <div className="hidden md:flex gap-2">
              <span className="text-sm text-gray-400">·</span>
              <Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Privacidade</Link>
              <span className="text-sm text-gray-400">·</span>
              <Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Termos</Link>
              <span className="text-sm text-gray-400">·</span>
              <Link to="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Mapa do site</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <Link to="#" className="text-sm font-medium hover:underline">GitHub</Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
              <Link to="#" className="text-sm font-medium hover:underline">Twitter</Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
              </svg>
              <Link to="#" className="text-sm font-medium hover:underline">Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
