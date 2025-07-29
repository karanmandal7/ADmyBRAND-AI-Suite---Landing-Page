import './globals.css'

export const metadata = {
  title: 'ADmyBRAND AI Suite - Supercharge Your Marketing with AI',
  description: 'Transform your marketing strategy with our AI-powered suite. Boost engagement, automate campaigns, and drive results with cutting-edge artificial intelligence.',
  keywords: 'AI marketing, marketing automation, artificial intelligence, digital marketing, brand management',
  authors: [{ name: 'ADmyBRAND AI Suite' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}