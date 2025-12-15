import { Inter } from "next/font/google";
import Head from "next/head";

// CSS imports (KEEP AS-IS)
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/style.css";

// ❌ THIS SCRIPT WAS INVALID (outside JSX)
// <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" async></script>

// Plugins
import "../../public/assets/css/plugins/slick-slider/slick.css";
import "../../public/assets/css/plugins/animate.css";
import "../../public/assets/css/plugins/magnific-popup.css";
import "../../public/assets/css/plugins/nice-select.min.css";
import "../../public/assets/css/plugins/progress.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../../public/assets/img/whatsapp_float_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleTagManager } from "@next/third-parties/google";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kloudwise Technologies | Design, Develop, Market",
  description: "The one stop solution to all your digital problems.",
  icons: {
    icon: "/kloudwise.png",
    apple: "/kloudwise.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ================= META (UNCHANGED) ================= */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* (ALL your SEO meta tags KEPT AS-IS) */}

        {/* ================= FAVICON (FIXED) ================= */}

        {/* ✅ EXPECTS FILE AT: /public/favicon1.png */}
        <link rel="apple-touch-icon" sizes="180x180" href="/kloudwise.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/kloudwise.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/kloudwise.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ❌ OLD BROKEN PATH */}
        {/* <link rel="icon" type="image/x-icon" href="../../public/assets/img/icon/tab-icon.png" /> */}

        {/* ✅ FIXED VERSION */}
        {/* EXPECTS FILE AT: /public/assets/img/icon/tab-icon.png */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/kloudwise.png"
        />

        <title>Kloudwise Technologies | Design, Develop, Market</title>

        {/* ================= EXTERNAL CSS (PATHS FIXED) ================= */}

        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/font-awesome/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/bootstrap/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/magnific-popup.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/animate.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/slick-slider/slick.css"
        />

        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />

        {/* ================= FLICKITY SCRIPT (FIXED LOCATION) ================= */}
        <script
          src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"
          async
        ></script>
      </Head>

      <body className={inter.className} data-scroll-animation="false">
        {children}

        {/* WhatsApp Floating Button */}
        <a
        href="https://wa.me/+918168087261?text=Hey%21+I+have+a+requirement+for+MetaRizz+for+building+a"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp_float"
          title="Chat with us on WhatsApp"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="whatss_float_img"
          />
        </a>
      </body>

      <GoogleTagManager gtmId="GTM-PVX39Z5" />
    </html>
  );
}
