// components/map/GoogleMapsEmbed.jsx
'use client';

export default function GoogleMapsEmbed({ nombre, direccion, lat, lng }) {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzAnMjMuNyJOIDc1wrA0NCc0MS4zIlc!5e0!3m2!1ses!2sco!4v1`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      {/* AQUÍ ESTABA EL ERROR - SUBELO A 500px o 600px */}
      <div className="relative w-full h-[500px] md:h-[600px]  bg-[#121212]">
        <iframe
          width="100%"
          height="100%"
          style={{ 
            border: 0,
            filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title={`Mapa de ${nombre}`}
        ></iframe>
      </div>
      
      <div className="p-4 bg-zinc-900 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white">{nombre}</span>
          <span className="text-xs text-zinc-400">{direccion}</span>
        </div>
        <a 
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-zinc-200 transition shrink-0 ml-4"
        >
          Abrir en Maps →
        </a>
      </div>
    </div>
  );
}

<GoogleMapsEmbed 
  nombre="SERVITEA ANTIOQUIA"
  direccion="La variante, Sopetrán, Antioquia"
  lat={6.50657}
  lng={-75.744813}
/>