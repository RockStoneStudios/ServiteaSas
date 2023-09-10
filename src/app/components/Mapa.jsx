// "use client"

// import { useEffect } from 'react';
// import L from 'leaflet';

// function MapComponent() {
//   useEffect(() => {
//     const map = L.map('map').setView([51.505, -0.09], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

   
//     return () => {
//       map.remove(); // Limpia el mapa al desmontar el componente
//     };
//   }, []);

//   return (
//     <div id="map" style={{ height: '400px', width: '500px'}}></div>
//   );
// }

// export default MapComponent;
