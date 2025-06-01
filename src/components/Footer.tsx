
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-airbnb-primary" />
              <span className="text-lg font-medium ml-1">hospedabem</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Descubra os melhores lugares para se hospedar no Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Explore</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-foreground hover:underline">
                  São Paulo
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Rio de Janeiro
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Minas Gerais
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Bahia
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Hospedeiros</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Anuncie seu espaço
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Central de recursos
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Fórum de suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Sobre</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Nossa história
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:underline">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-foreground">&copy; 2025 HospedaBem, Inc.</span>
              <span className="text-foreground">&middot;</span>
              <a href="#" className="text-foreground hover:underline">Privacidade</a>
              <span className="text-foreground">&middot;</span>
              <a href="#" className="text-foreground hover:underline">Termos</a>
              <span className="text-foreground">&middot;</span>
              <a href="#" className="text-foreground hover:underline">Mapa do site</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-foreground" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <a href="#" className="text-foreground hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
