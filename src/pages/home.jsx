import { MainLayouts } from "../components/layouts/MainLayouts";
import { BannerCarousel } from "../components/organisms/BannerCarousel";
import { ServiceList } from "../features/service/ServiceList";

export const Home = () => {
  return (
    <MainLayouts>
      <ServiceList />
      <BannerCarousel />
    </MainLayouts>
  );
};
