'use client'

import Navigation from '../components/Navigation'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import Demo from '../components/sections/Demo'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}