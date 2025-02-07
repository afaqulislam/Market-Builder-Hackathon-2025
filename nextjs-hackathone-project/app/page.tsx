'use client';

import HeroSection from "./components/HeroSection";
import { PopularCarPage } from "./cars/PopularCar";
import { RecomendationCar } from "./cars/RecomendationCar";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularCarPage />
      <RecomendationCar />
    </main>
  );
}
