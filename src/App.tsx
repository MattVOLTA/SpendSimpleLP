import React, { useState } from 'react';
import { Camera, PieChart, DollarSign, ArrowRight } from 'lucide-react';
import { FeatureCard } from './components/FeatureCard';
import { ListItem } from './components/ListItem';
import { PhoneDemo } from './components/PhoneDemo';
import { Footer } from './components/Footer';

// Get webhook URL from environment variable
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/images/sslogo.png" 
                alt="Spend Simple Logo" 
                className="h-11 w-11"
              />
              <span className="text-[1.65rem] font-bold text-gray-900">Spend Simple</span>
            </div>
          </div>
        </div>
      </nav>

      <header className="px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
                Simplify Your Spending
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Stay on top of your budget,
                <span className="block text-blue-600">one text at a time</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Track your expenses effortlessly through text messages. No complex apps, no hassle.
                Just simple, effective budget management.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://app.spendsimple.co" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <p className="text-sm text-gray-500">No credit card required • 30-day free trial</p>
              </div>
            </div>
            <div className="hidden md:flex justify-center lg:justify-end">
              <PhoneDemo />
            </div>
          </div>
        </div>
      </header>

      <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Track Your Variable Spending With Every Text
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="w-6 h-6 text-blue-600" />}
              title="Send a Text or Photo"
              description="Snap a picture of your receipt or send a text"
            />
            <FeatureCard
              icon={<PieChart className="w-6 h-6 text-blue-600" />}
              title="Smart Categorization"
              description="We organize your expense into the right category."
            />
            <FeatureCard
              icon={<DollarSign className="w-6 h-6 text-blue-600" />}
              title="Instant Budget Updates"
              description="Get real-time updates on your spending and remaining budget."
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to simplify your spending?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of others who have taken control of their finances with Spend Simple.
          </p>
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <a 
                href="https://app.spendsimple.co" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <ul className="flex flex-col sm:flex-row justify-center gap-4 text-gray-600">
                <ListItem text="30-day free trial" />
                <ListItem text="No credit card required" />
                <ListItem text="Cancel anytime" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;