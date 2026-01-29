import HeroSearch from "../components/HeroSearch";
import FeaturedProperties from "../components/FeaturedProperties";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import FiltersBar from "../components/FiltersBar";
import PropertyCard from "../components/PropertyCard";
import MapView from "../components/MapView";
import { useProperties } from "../context/PropertiesContext";
import TopCategories from "../components/TopCategories";

export default function Home() {
  const { properties } = useProperties();

  return (
    <>
      <HeroSearch />
      <TopCategories />
      <HowItWorks />
      <FeaturedProperties />
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
      <Footer />
    </>
  );
}
