"use client";
import Header from "./components/(header)/header";
import HeroSection from "./components/(sections)/(heroSection)/heroSection";
import DigitalAgencySection from "./components/(sections)/(digitalAgencySection)/digitalAgencySection";
import ServiceSection from "./components/serviceSection";
import ProjectsSlider from "./components/(projects)/projectsSlider";
import PowerSection from "./components/powerSection";
import Testimonial from "./components/(testimonial)/testimonial";
import ContactSection from "./components/contactSection";
import BlogSection from "./components/(sections)/(blogSection)/blogSection";
import ServiceLineSection from "./components/serviceLineSection";
import Footer from "./components/(footer)/footer";
import Image from "next/image";
import burst_pucker from "../../public/assets/img/icon/burst_pucker.png";
import { ParallaxProvider } from 'react-scroll-parallax';
import { GoogleTagManager } from '@next/third-parties/google';
import { sendGTMEvent } from '@next/third-parties/google';

export default function Home() {
  return (
    <>
      <ParallaxProvider>
      <GoogleTagManager gtmId="GTM-PVX39Z5" />
      <Header />
      <HeroSection />
      <DigitalAgencySection />
      <ServiceSection />
      {/* <section className="service_line">
        <div className="line_item">
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
        </div>
        <div className="line_item two">
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
          <Image src={burst_pucker} width={100} height={100} alt="" />
          <h5>We create and develop digital product</h5>
        </div>
      </section> */}

      <ProjectsSlider />
      {/* <PowerSection /> */}
      <Testimonial />
      <ContactSection />
      {/* <BlogSection /> */}
      {/* <ServiceLineSection /> */}
      <Footer />

      {/* <!-- jQuery Libraary --> */}
      <script src="assets/js/jquery.min.js" async></script>
      {/* <!-- Popper - Js For Bootstrap --> */}
      <script src="assets/js/popper.min.js" async></script>
      {/* <!-- Bootstrap - jS  --> */}
      <script src="assets/js/bootstrap.min.js" async></script>
      {/* <!-- Waypoints Js For Counter Up --> */}
      <script src="assets/js/waypoints.min.js" async></script>
      {/* <!-- Counter Up - Js --> */}
      <script src="assets/js/jquery.counterup.js" async></script>
      {/* <!-- Magnific Popup -Js --> */}
      <script src="assets/js/magnific-popup.min.js" async></script>
      {/* <!-- Wow - Js --> */}
      <script src="assets/js/wow.min.js" async></script>
      {/* <!-- Parallax - Js --> */}
      <script src="assets/js/parallax.min.js" async></script>
      {/* <!-- Slick-Slidr-js --> */}
      <script src="assets/js/slick.min.js" async></script>
      {/* <!-- Magnet-mouse --> */}
      {/* <script src="assets/js/magnet-mouse.min.js" async></script> */}
      {/* <!-- jquery-ui --> */}
      <script src="assets/js/jquery-ui.js" async></script>
      {/* <!-- Main Js --> */}
      <script src="assets/js/main.js" async></script>
      </ParallaxProvider>
    </>
  );
}
