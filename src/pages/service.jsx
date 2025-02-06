import { useParams } from "react-router-dom";
import { MainLayouts } from "../components/layouts/MainLayouts";
import { ServiceDetail } from "../features/service/ServiceDetail";
import { useSelector } from "react-redux";

export const Service = () => {
  const { serviceCode } = useParams();
  console.log(serviceCode);
  const services = useSelector((state) => state.service.services);

  const macthdata = services.find(
    (service) => service.service_code === serviceCode
  );
  console.log(macthdata);
  return (
    <MainLayouts>
      <ServiceDetail serviceData={macthdata} />
    </MainLayouts>
  );
};
