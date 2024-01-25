import { SERVICES } from "../../common/constants";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section className="padding padding-x py-10 max-container flex justify-center flex-wrap gap-9">
      {SERVICES.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
