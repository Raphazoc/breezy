
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Share, 
  Heart, 
  Star, 
  User, 
  Calendar, 
  Home,
  MapPin, 
  X
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { PropertyProps } from "@/components/PropertyCard";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate loading property data
    setTimeout(() => {
      const foundProperty = properties.find(p => p.id === id) || null;
      setProperty(foundProperty);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading property details...</div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Property not found</h2>
            <Link to="/" className="text-airbnb-primary hover:underline">
              Return to home page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container-custom py-6">
        <h1 className="text-2xl font-semibold mb-2">{property.title}</h1>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-black" />
              <span className="ml-1 font-medium">{property.rating}</span>
              {property.reviewCount && (
                <span className="text-gray-500 ml-1">({property.reviewCount} reviews)</span>
              )}
            </div>
            <span className="text-gray-500">·</span>
            <span className="font-medium underline">{property.location}</span>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 hover:underline">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </button>
            
            <button 
              className="flex items-center space-x-1 hover:underline"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-airbnb-primary text-airbnb-primary' : ''}`} />
              <span>Save</span>
            </button>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow-hidden">
            <div className="md:col-span-2 md:row-span-2">
              <AspectRatio ratio={1/1} className="w-full h-full">
                <img 
                  src={property.images[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index}>
                <AspectRatio ratio={1/1} className="w-full h-full">
                  <img 
                    src={image} 
                    alt={`${property.title} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg border shadow-sm font-medium text-sm flex items-center space-x-2"
            onClick={() => setShowAllPhotos(true)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M13 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Show all photos</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {/* Property Info */}
            <div className="flex justify-between items-center pb-6 border-b">
              <div>
                <h2 className="text-xl font-semibold">
                  {property.host}
                </h2>
                <p className="text-gray-600">
                  4 guests · 2 bedrooms · 3 beds · 2 baths
                </p>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" 
                  alt="Host" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Features */}
            <div className="py-6 border-b space-y-6">
              <div className="flex items-start space-x-4">
                <Home className="w-8 h-8 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Entire home</h3>
                  <p className="text-gray-600">You'll have the property to yourself.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Great location</h3>
                  <p className="text-gray-600">94% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Calendar className="w-8 h-8 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Free cancellation for 48 hours</h3>
                  <p className="text-gray-600">Cancel before check-in on Nov 22 for a partial refund.</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="py-6 border-b">
              <p className="text-gray-700 leading-relaxed">
                Experience the perfect coastal getaway in this stunning luxury home with breathtaking ocean views. This modern retreat features spacious living areas, high-end finishes, and direct access to a pristine beach.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The property includes a gourmet kitchen, outdoor dining area, and a private pool overlooking the ocean. Wake up to the sound of waves and watch spectacular sunsets from your private terrace.
              </p>
              <button className="mt-4 font-semibold underline">Show more</button>
            </div>
            
            {/* Amenities */}
            <div className="py-6 border-b">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Kitchen", "Wifi", "Dedicated workspace", "Free parking",
                  "Pool", "Hot tub", "TV", "Washer", "Air conditioning", "BBQ grill"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-6 h-6 mr-4" viewBox="0 0 32 32" fill="none">
                      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"/>
                      <path d="M20 14L14.5 19.5L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 border border-gray-900 rounded-lg px-5 py-2 font-medium">
                Show all 38 amenities
              </button>
            </div>
          </div>
          
          {/* Booking Card */}
          <div className="md:col-span-1">
            <Card className="sticky top-24 border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xl font-semibold">${property.price}</span>
                  <span className="text-gray-500"> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-black" />
                  <span className="ml-1">{property.rating}</span>
                  {property.reviewCount && (
                    <span className="text-gray-500 ml-1">({property.reviewCount})</span>
                  )}
                </div>
              </div>
              
              <div className="border rounded-t-lg">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-3">
                    <div className="text-xs font-semibold">CHECK-IN</div>
                    <div>11/22/2025</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-semibold">CHECKOUT</div>
                    <div>11/27/2025</div>
                  </div>
                </div>
                <div className="border-t p-3">
                  <div className="text-xs font-semibold">GUESTS</div>
                  <div className="flex justify-between">
                    <div>2 guests</div>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-4 h-12 bg-airbnb-primary hover:bg-airbnb-primary/90 text-white font-medium">
                Reserve
              </Button>
              
              <div className="text-center mt-2 text-sm">You won't be charged yet</div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${property.price} x 5 nights</span>
                  <span>${property.price * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$85</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$125</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-semibold">
                <span>Total before taxes</span>
                <span>${property.price * 5 + 85 + 125}</span>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center mb-6">
            <Star className="h-5 w-5 fill-current text-black" />
            <span className="ml-2 text-xl font-semibold">{property.rating} · {property.reviewCount} reviews</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index}>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={`https://i.pravatar.cc/150?img=${20 + index}`} 
                      alt="Reviewer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-gray-500 text-sm">October 2025</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Beautiful place with an amazing view. The host was very responsive and accommodating. Would definitely stay here again when we come back to the area!
                </p>
              </div>
            ))}
          </div>
          
          <button className="mt-8 border border-gray-900 rounded-lg px-5 py-2 font-medium">
            Show all {property.reviewCount} reviews
          </button>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 pt-6 border-t">
          <h2 className="text-xl font-semibold mb-4">Where you'll be</h2>
          <div className="rounded-xl overflow-hidden h-96 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000" 
              alt="Map" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">{property.location}</h3>
            <p className="text-gray-700">
              The neighborhood is peaceful and located just minutes from downtown. You'll be close to restaurants, shopping, and local attractions.
            </p>
            <button className="mt-4 font-semibold underline">Show more</button>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Photo Gallery Modal */}
      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogContent className="max-w-7xl w-full p-0">
          <div className="sticky top-0 z-10 bg-white p-4 flex justify-between items-center">
            <button 
              className="rounded-full p-2 hover:bg-gray-100"
              onClick={() => setShowAllPhotos(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 hover:underline">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button 
                className="flex items-center space-x-1 hover:underline"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-airbnb-primary text-airbnb-primary' : ''}`} />
                <span>Save</span>
              </button>
            </div>
          </div>
          
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {property.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${property.title} ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyDetail;
