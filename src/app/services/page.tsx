// app/services/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import Service from "@/components/Service";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Terralogica Africa Limited",
  description: "Explore our range of Services tailored to meet your needs.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="Explore our range of Services tailored to meet your needs."
      />

      <Service />
    </>
  );
};

export default ServicesPage;