import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EverydayFriction from '@/components/EverydayFriction';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import WhyChooseUs from '@/components/WhyChooseUs';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import { SAMPLE_PROJECTS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="bg-[#FBF8F2] text-[#1A1710] font-inter overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <EverydayFriction />
        <About />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Projects projects={SAMPLE_PROJECTS} />
        <Reviews showComingSoon={true} />
        <Process />
        <FAQ />
        <OrderForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}
