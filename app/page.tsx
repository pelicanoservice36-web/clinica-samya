import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import NeedsGrid from "@/components/home/NeedsGrid";
import TreatmentsGrid from "@/components/home/TreatmentsGrid";
import PilatesSection from "@/components/home/PilatesSection";
import HomeCareSection from "@/components/home/HomeCareSection";
import TeamSection from "@/components/home/TeamSection";
import DifferentiatorsGrid from "@/components/home/DifferentiatorsGrid";
import GallerySection from "@/components/home/GallerySection";
import InstagramSection from "@/components/home/InstagramSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import LocationSection from "@/components/home/LocationSection";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Fisioterapia, Pilates Clínico e Reabilitação em Santo André",
  description:
    "Clínica multidisciplinar de saúde em Santo André - SP. Fisioterapia, Pilates clínico, acupuntura, quiropraxia, reabilitação vestibular e atendimento domiciliar. Agende sua avaliação.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <NeedsGrid />
      <TreatmentsGrid />
      <PilatesSection />
      <HomeCareSection />
      <TeamSection />
      <DifferentiatorsGrid />
      <GallerySection />
      <InstagramSection />
      <ReviewsSection />
      <HomeFaqSection />
      <LocationSection />
      <FinalCta />
    </>
  );
}
