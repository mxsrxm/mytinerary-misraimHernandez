import React from "react";
import NewsletterForm from "./NewsletterForm";
import FooterLinks from "./FooterLinks";
import FooterDeveloper from "./FooterDeveloper";
import FooterMap from "./FooterMap";
import FooterPopularActivities from "./FooterPopularActivities";
import FooterSocialLinks from "./FooterSocialLinks";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/*", text: "Discover" },
  { to: "/*", text: "Community" },
  { to: "/*", text: "Special Deals" },
  { to: "/*", text: "About Us" },
];

export default function Footer() {
  return (
    <>
      <NewsletterForm></NewsletterForm>

      <footer className="bg-white md:px-10 rounded-lg shadow-lg">
        <div className=" grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="md:col-span-1">
            <FooterMap />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FooterLinks routes={routes}> </FooterLinks>
            <FooterPopularActivities></FooterPopularActivities>
            <FooterSocialLinks></FooterSocialLinks>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8"></div>
      </footer>

      <FooterDeveloper></FooterDeveloper>
    </>
  );
}
