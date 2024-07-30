import BenefitsPage from "@/components/BenefitsPage";
import ExploreArea from "@/components/ExploreArea";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UserAndJourney from "@/components/UsersAndJourney";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Featured />
     
      <UserAndJourney/>

      <BenefitsPage/>
      <HowItWorks/>
      <ExploreArea/>
    
    
    </main>
  );
}
