import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px", // Ви можете змінити висоту відповідно до ваших потреб
};

const center = {
  lat: 50.40604278471033, // Широта
  lng: 30.338538563364825, // Довгота
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBajJsy6w9BWWPyygqK94Yu8HvhXWZWjDU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20} // Вищий рівень зближення
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
