import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
class LeafletMap extends Component {
  render() {
    return (
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="leaflet-map-container"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    );
  }
}

export default LeafletMap;
