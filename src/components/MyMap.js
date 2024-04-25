import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import '../Styles/MyMap.css';

function LocationMarker(props) {
  const [position, setPosition] = useState(null)
  const markerRef = useRef(null);


  const eventHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker) {
        const newPosition = marker.getLatLng()
        setPosition([newPosition.lat, newPosition.lng]);
        props.onPositionChange([newPosition.lat, newPosition.lng])
      }
    },
  }), []);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng]
      setPosition(newPosition)
      props.onPositionChange(newPosition)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position} draggable={true} ref={markerRef} eventHandlers={eventHandlers} icon={DefaultIcon}>
            <Popup>
              <p>Latitude: {position[0]}</p>
              <p>Longitude: {position[1]}</p>
            </Popup>
    </Marker>
  )
}

const MyApp = (props) => {
  const handlePosition = (data) => {
    props.onAdressChange([data[0], data[1]])
  }
  
  return (
    <MapContainer
      center={[33.7931605, 9.5607653]}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onPositionChange={handlePosition}/>
    </MapContainer>
  )
}
  

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [15, 30],
});

export default MyApp