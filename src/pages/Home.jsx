import HeroSearch from "../components/HeroSearch";
// import FeaturedProperties from "../components/FeaturedProperties";
import HowItWorks from "../components/HowItWorks";
// import FiltersBar from "../components/FiltersBar";
// import PropertyCard from "../components/PropertyCard";
// import MapView from "../components/MapView";
// import { useProperties } from "../context/PropertiesContext";
// import TopCategories from "../components/TopCategories";
import Services from "../components/Services";
import FinalCTA from "../components/FinalCTA";
import Values from "../components/Values";

export default function Home() {
  // const { properties } = useProperties();

  return (
    <>
      <HeroSearch />
      {/* <TopCategories /> */}
      <Values />
      <HowItWorks />
      <Services />
      {/* <FeaturedProperties /> */}
      <FinalCTA />
      {/* <div className="max-w-7xl mx-auto px-6 py-24">
        <FiltersBar />

        <div className="flex flex-col gap-8 mt-8">
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          <MapView />
        </div>
      </div> */}
    </>
  );
}
