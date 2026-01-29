import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useProperties } from "../context/PropertiesContext";
import { Link } from "react-router-dom";

export default function MapView() {
  const { properties } = useProperties();

  return (
    <div className="h-[600px] rounded-xl overflow-hidden">
      <MapContainer
        center={[-34.6037, -58.3816]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {properties.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]}>
            <Popup>
              <div className="text-sm">
                <strong>{p.title}</strong>
                <p>${p.price} / mes</p>

                <Link
                  to={`/property/${p.id}`}
                  className="text-blue-600 underline"
                >
                  Ver detalle
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
