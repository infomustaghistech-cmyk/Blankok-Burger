/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { DeliverySection } from './components/DeliverySection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <DeliverySection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
