import { Inter } from "next/font/google";

// CSS imports
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/style.css";

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
    icon: [
      { url: '/kloudwise.png' },
      { url: '/kloudwise.png', sizes: '32x32', type: 'image/png' },
      { url: '/kloudwise.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/kloudwise.png',
    shortcut: '/kloudwise.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* External CSS */}
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

        {/* Flickity Script */}
        <script
          src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"
          async
        ></script>
      </head>

      <body className={inter.className} data-scroll-animation="false">
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/+918168087261?text=Hey%21+I+have+a+requirement+for+Kloudwise+for+building+a"
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