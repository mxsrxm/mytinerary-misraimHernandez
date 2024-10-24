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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
          <div className="flex justify-center md:col-span-1">
            <FooterMap className="mx-auto sm:mx-0"></FooterMap>
          </div>
          <div className="flex justify-start md:col-span-1">
            <FooterLinks routes={routes}></FooterLinks>
          </div>
          <div className="flex justify-start md:col-span-1">
            <FooterPopularActivities></FooterPopularActivities>
          </div>
          <div className="flex justify-start md:col-span-1">
            <FooterSocialLinks></FooterSocialLinks>
          </div>
        </div>
      </footer>

      <FooterDeveloper></FooterDeveloper>
    </>
  );
}
