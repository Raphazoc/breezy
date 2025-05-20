
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
}

const Map = ({ className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-46.633, -23.55], // São Paulo
      zoom: 10
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(new mapboxgl.FullscreenControl());

    const marker = new mapboxgl.Marker({ color: '#FF5A5F' })
      .setLngLat([-46.633, -23.55])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>HospedaBem</h3><p>Encontre as melhores hospedagens aqui!</p>'))
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="flex flex-col gap-4">
      {!mapboxToken && (
        <div className="mb-4">
          <label htmlFor="mapbox-token" className="block text-sm font-medium mb-2">
            Token do Mapbox
          </label>
          <div className="flex gap-2">
            <input
              id="mapbox-token"
              type="text"
              placeholder="Cole seu token público do Mapbox aqui"
              className="flex-1 p-2 border rounded-md"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Para ver o mapa, obtenha um token público gratuito em <a href="https://mapbox.com" className="underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className={`${className} h-[500px] rounded-xl`} />
    </div>
  );
};

export default Map;
