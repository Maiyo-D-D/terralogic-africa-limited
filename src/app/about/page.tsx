import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Terralogic Africa",
  description: "This is About Us for Startup TAL",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Terralogic Africa Limited is a privately owned IT Solutions & Services company
founded in 2023.
Innovation is at the center of our business. We try to think differently, move fast
and constantly challenge ourselves to come up with better ways of doing
things and provide solutions to our clients.
"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
