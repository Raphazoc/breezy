
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-airbnb-primary mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
          <p className="text-gray-600 mb-8">
            We can't seem to find the page you're looking for. The page might have been removed or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
