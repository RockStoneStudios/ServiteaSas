import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SERVITEA ANTIOQUIA | Refrigeración y Línea Blanca en Sopetrán',
  description: 'Especialistas en instalación, mantenimiento y reparación de aires acondicionados, neveras, lavadoras y línea blanca en Sopetrán, Antioquia. Servicio en La Variante. Llámanos: 313 720 6362',
  keywords: ['refrigeración Sopetrán', 'línea blanca Sopetrán', 'técnico neveras Sopetrán', 'aire acondicionado Sopetrán', 'SERVITEA', 'reparación lavadoras Antioquia', 'La Variante Sopetrán'],
  authors: [{ name: 'SERVITEA ANTIOQUIA' }],
  creator: 'SERVITEA ANTIOQUIA',
  
  // FAVICON AQUÍ
  icons: {
    icon: '/servitea.png',
    shortcut: '/servitea.png',
    apple: '/servitea.png',
  },

  openGraph: {
    title: 'SERVITEA ANTIOQUIA - Climatización y Línea Blanca',
    description: 'Tu solución confiable en instalación, mantenimiento y reparación de equipos de climatización y línea blanca en Sopetrán. Atención en La Variante.',
    url: 'https://servitea.vercel.app/',
    siteName: 'SERVITEA ANTIOQUIA',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/servitea.png',
        width: 512,
        height: 512,
        alt: 'SERVITEA ANTIOQUIA',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ooasys.com/sopetran/servitea-antioquia'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}