
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  distance?: string;
  dates?: string;
  price: number;
  rating: number;
  reviewCount?: number;
  images: string[];
  host: string;
}

const PropertyCard = ({
  id,
  title,
  location,
  distance,
  dates,
  price,
  rating,
  reviewCount,
  images,
  host
}: PropertyProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/property/${id}`} className="group">
      <div className="relative">
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-xl overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
          />
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full bg-white/60",
                      currentImageIndex === index && "bg-white"
                    )}
                  />
                ))}
              </div>
            </>
          )}
          
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 z-10"
          >
            <Heart 
              className={cn(
                "h-6 w-6 transition-colors",
                isFavorite ? "fill-airbnb-primary text-airbnb-primary" : "text-white stroke-[1.5]"
              )} 
            />
          </button>
        </AspectRatio>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between">
          <h3 className="font-medium text-base">{title}</h3>
          {rating > 0 && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.5 9.978h-6.764L12.5 3.978l-2.236 6h-6.764l5.5 4-2.118 6.5 5.618-3.78 5.618 3.78-2.118-6.5 5.5-4z" />
              </svg>
              <span className="ml-1 text-sm">{rating}</span>
              {reviewCount && (
                <span className="text-gray-500 ml-1 text-sm">({reviewCount})</span>
              )}
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm">{host}</p>
        <p className="text-gray-500 text-sm">{location}</p>
        {distance && <p className="text-gray-500 text-sm">{distance}</p>}
        {dates && <p className="text-gray-500 text-sm">{dates}</p>}
        <p className="mt-1">
          <span className="font-semibold">R$ {price}</span>
          <span className="text-gray-500"> noite</span>
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
