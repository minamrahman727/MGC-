import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactSection from "../components/contact/1";

export const metadata = {
    title: "Contact Us | MGC",
    description: "Get in touch with us",
    'icons': {
      'icon': '/mgc.png',
    },
};  
export default function Contact() {
  return (
    <main>
<NavBar />
<ContactSection />

<Footer />
    </main>
  );    
}