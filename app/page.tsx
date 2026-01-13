import CategorySidebar from '@/components/layout/header/category-sidebar';
import NavigationMenu from '@/components/layout/header/navigation-menu';
import HeroSlider from '@/components/home/top-slider';
import SideBanners from '@/components/home/right-banners';
import CategorySection from '@/components/home/category-section';
import ProductSection from '@/components/home/product-section';
import DealSection from '@/components/home/deal-section';
import InstagramFeed from '@/components/home/instagram-demo';
export default function HomePage() {
  return (
    <>
     <section className="py-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-[260px_1fr] gap-4">
      <CategorySidebar />
      <div className="flex flex-col gap-4 pl-4">
        <NavigationMenu />
        <div className="grid grid-cols-[1fr_240px] gap-6 items-stretch min-h-[420px]">
          <HeroSlider />
          <SideBanners />
        </div>
      </div>
    </div>
  </div>
</section>
      <CategorySection />
      <ProductSection />
      <DealSection />
      <InstagramFeed />
    </>
  );
}