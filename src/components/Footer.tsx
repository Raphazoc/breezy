
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, Phone, MapPin, Shield, Globe, HelpCircle, Home, Smartphone } from "lucide-react";

const footerLinks = {
  suporte: [
    { label: "Central de Ajuda", url: "/help", icon: HelpCircle },
    { label: "AirCover para hóspedes", url: "/aircover", icon: Shield },
    { label: "Opções de cancelamento", url: "/cancellation", icon: ExternalLink },
    { label: "Apoio à deficiência", url: "/accessibility", icon: HelpCircle },
    { label: "Reporte problema", url: "/report", icon: ExternalLink },
  ],
  comunidade: [
    { label: "Resposta à emergências", url: "/emergency", icon: Phone },
    { label: "Contra discriminação", url: "/non-discrimination", icon: Shield },
    { label: "Programa de referência", url: "/referrals", icon: ExternalLink },
    { label: "HospedaBem.org", url: "/nonprofit", icon: Home },
  ],
  hospedagem: [
    { label: "Anuncie seu espaço", url: "/host", icon: Home },
    { label: "Proteção para anfitriões", url: "/host-protection", icon: Shield },
    { label: "Recursos para anfitriões", url: "/host-resources", icon: ExternalLink },
    { label: "Fórum da comunidade", url: "/community-forum", icon: ExternalLink },
    { label: "Hospedagem responsável", url: "/responsible-hosting", icon: Shield },
  ],
  hospedabem: [
    { label: "Novidades", url: "/news", icon: ExternalLink },
    { label: "Novos recursos", url: "/features", icon: ExternalLink },
    { label: "Carreiras", url: "/careers", icon: ExternalLink },
    { label: "Investidores", url: "/investors", icon: ExternalLink },
    { label: "Cartão presente", url: "/gift-cards", icon: ExternalLink },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "Twitter", icon: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" },
  { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "YouTube", icon: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-auto w-full">
      <div className="container-custom py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Suporte Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.url} 
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-2"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Comunidade Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Comunidade</h3>
            <ul className="space-y-3">
              {footerLinks.comunidade.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.url} 
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-2"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Hospedagem Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Hospedagem</h3>
            <ul className="space-y-3">
              {footerLinks.hospedagem.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.url} 
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-2"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* HospedaBem Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">HospedaBem</h3>
            <ul className="space-y-3">
              {footerLinks.hospedabem.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.url} 
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline flex items-center gap-2"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">© 2025 HospedaBem, Inc.</p>
            <div className="hidden md:flex gap-2">
              <span className="text-sm text-gray-400">·</span>
              <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Privacidade</Link>
              <span className="text-sm text-gray-400">·</span>
              <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Termos</Link>
              <span className="text-sm text-gray-400">·</span>
              <Link to="/sitemap" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Mapa do site</Link>
              <span className="text-sm text-gray-400">·</span>
              <Link to="/company-details" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Detalhes da empresa</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={`https://${social.name.toLowerCase()}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-airbnb-primary transition-colors"
                  aria-label={social.name}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <select 
                  className="bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer"
                  defaultValue="pt-BR"
                >
                  <option value="en-US">English (US)</option>
                  <option value="pt-BR">Português (BR)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile links */}
        <div className="md:hidden flex flex-col gap-2 mt-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:underline px-2">Privacidade</Link>
            <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:underline px-2">Termos</Link>
            <Link to="/sitemap" className="text-sm text-gray-600 dark:text-gray-300 hover:underline px-2">Mapa do site</Link>
            <Link to="/company-details" className="text-sm text-gray-600 dark:text-gray-300 hover:underline px-2">Detalhes da empresa</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
