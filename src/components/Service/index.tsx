"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import ServiceBox from "./ServiceBox";

interface ServiceProps {
  price?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({ price, subtitle, children }) => {
  const [isSoftware, setisSoftware] = useState(true);

  return (
    <section id="service" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Services"
          paragraph="Get advanced security and tech solutions, tailored for growth, affordability, and long-term success."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setisSoftware(true)}
              className={`${
                isSoftware
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Software
            </span>
            <div
              onClick={() => setisSoftware(!isSoftware)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isSoftware ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setisSoftware(false)}
              className={`${
                isSoftware
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Hardware
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <ServiceBox
            Service={isSoftware ? "IT Consulting Services" : "Physical Security Solutions"}
            subtitle={isSoftware ? "Expert guidance to optimize your business technology." : "Advanced security systems to protect critical infrastructure and premises."}
          >
            <OfferList text={isSoftware ? "Digital Transformation" : "CCTV & Surveillance Systems"} status="active" />
            <OfferList text={isSoftware ? "Technology Strategy" : "24/7 Monitoring Solutions"} status="active" />
            <OfferList text={isSoftware ? "IT Infrastructure Optimization" : "Biometric Access Control"} status="active" />
            <OfferList text={isSoftware ? "Email Support" : "Keycard Entry Systems"} status="active" />
            <OfferList text={isSoftware ? "Cloud Integration" : "Intrusion Detection"} status="inactive" />
            <OfferList text={isSoftware ? "Cybersecurity Solutions" : "Advanced Security Protocols"} status="inactive" />
          </ServiceBox>
          <ServiceBox
            Service={isSoftware ? "Software Development" : " Risk & Vulnerability Assessment"}
            subtitle={isSoftware ? "Custom software solutions tailored to your business needs." : "Identify and mitigate potential risks to safeguard your IT infrastructure."}
          >
            <OfferList text={isSoftware ? "Maintenance & Support" : "Penetration Testing"} status="active" />
            <OfferList text={isSoftware ? "Web & Mobile Apps" : "Threat Intelligence"} status="active" />
            <OfferList text={isSoftware ? "Enterprise Software" : "Compliance Audits"} status="active" />
            <OfferList text={isSoftware ? "API Development" : "Vulnerability Scanning"} status="active" />
            <OfferList text={isSoftware ? "Lifetime Access" : "Patch Management"} status="active" />
            <OfferList text={isSoftware ? "AI & Machine Learning" : "Advanced Security Protocols"} status="inactive" />
          </ServiceBox>
          <ServiceBox
            Service={isSoftware ? "Enterprise Cloud & SaaS Solutions" : " User Access & Authentication"}
            subtitle={isSoftware ? "Secure, scalable, and cost-effective cloud Services for modern businesses." : " Enhancing security with seamless authentication and controlled access."}
          >
            <OfferList text={isSoftware ? "Cloud Migration" : "Single Sign-On (SSO) Solutions"} status="active" />
            <OfferList text={isSoftware ? "SaaS & PaaS Development" : "Role-Based Access Control"} status="active" />
            <OfferList text={isSoftware ? "Hybrid & Multi-cloud Strategies" : "Secure Credential Management"} status="active" />
            <OfferList text={isSoftware ? "Data Backup & Recovery" : "Multi-Factor Authentication"} status="active" />
            <OfferList text={isSoftware ? "Performance Optimization" : "Audit & Compliance"} status="active" />
            <OfferList text={isSoftware ? "Free Lifetime Updates" : "Advanced Security Configurations"} status="inactive" />
          </ServiceBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Service;