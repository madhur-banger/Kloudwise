"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/(header)/header';
import Footer from '../../components/(footer)/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './page.css';
import Loader from "../../components/(sections)/(heroSection)/Loader";
import Link from  "next/link";

const projectsData = [
  {
    id: 1,
    image: "/assets/img/tokenwale.png",
    title: "TokenWale",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.tokenwale.in/",
    description: "Crypto Project"
  },
  {
    id: 2,
    image: "/assets/img/imbuzi.png",
    title: "Imbuzi Ecom Fashion Brand",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Shopify"],
    url: "https://imbuzi.in/",
    description: "IMBUZI, an e-commerce platform on Shopify, specializes in premium streetwear. It features an ambassador program, a blog for fashion content, and integrates with social media for brand outreach. Key services include a refund policy, store locator, SEO optimization, and promotional offers."
  },
  {
    id: 3,
    image: "/assets/img/medinobel.png",
    title: "Medinobel",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase", "Push Notification", "Git", "Github"],
    url: "https://www.medinobel.com/",
    description: "Medinobel is an innovative app connecting patients with doctors and hospitals. Utilizing Flutter for front-end and Firebase for back-end, it offers a seamless, cross-platform user experience. Key features include intuitive UI/UX, patient and doctor profile management, appointment scheduling, and enhanced security measures like data encryption. The app focuses on user accessibility, efficient search functionalities, and incorporates user analytics for continuous improvement. With its unique selling proposition, Medinobel stands out by offering comprehensive healthcare management solutions."
  },{
    id: 4,
    image: "/assets/img/get_in_guestlist.png",
    title: "GuestInMe Club App",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.guestinme.guestinme",
    description: "GuestInMe Club App, built with Flutter and Firebase, offers a unified nightlife experience. It allows users to discover events, gain exclusive access, and make in-app purchases. Key features include push notifications, loyalty programs, and user analytics for continuous app improvement."
  },
  {
    id: 5,
    image: "/assets/img/show_world_film_directory.png",
    title: "Show World Film Directory",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.showworld.showworldfilmdirectory&hl=en_IN&gl=US",
    description: "Show World Film Directory, designed with Flutter and Firebase, serves as a comprehensive tool for the Indian film industry. It features an extensive database of industry contacts and stays updated with the industry dynamics. The directory is accessible on multiple platforms with an active online presence."
  },
  {
    id: 6,
    image: "/assets/img/the_stripe_nft.png",
    title: "The Stripes NFT",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["HTML", "CSS", "JavaScript", "ERC-721", "ERC-1155"],
    url: "https://www.youtube.com/playlist?list=PLwXSCBuwy1QuSccdzqB6coWYDhJCx-CRk",
    description: "The Stripes NFT Minting Dapp, using standard web technologies, enables users to mint NFTs and manage wallet connectivity. It focuses on responsive design, user guidance, and secure transactions, complying with NFT standards for Ethereum blockchain integration."
  },{
    id: 7,
    image: "/assets/img/vega.png",
    title: "Vega Auto Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://vegaauto.com/",
    description: "Motor gear brand"
  },{
    id: 8,
    image: "/assets/img/watermelon_gang.png",
    title: "Watermelon Gang Creative Agency Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://thewatermelongang.com/",
    description: "An exceptional marketing agency"
  },{
    id: 9,
    image: "/assets/img/edtech_platform.png",
    title: "Ed-tech Platform",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://courses.alisolanki.com/",
    description: "Hands On Courses, created by Ali Solanki, offers practical and impactful learning experiences. With a 'Learn by Doing' approach, our courses skip the unnecessary fluff and focus on teaching you valuable, useful skills. Embrace self-education and unlock your full potential with our wide range of courses. Discover the power of hands-on learning and take your knowledge and career to new heights."
  },{
    id: 10,
    image: "/assets/img/kasu_loyalty.png",
    title: "Kasu Loyalty",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Javascript", "Blockchain"],
    url: "https://kasu-ui.vercel.app/",
    description: "Blockchain based loyalty program through $KASU tokens"
  },{
    id: 11,
    image: "/assets/img/helper_ai.png",
    title: "Helper AI Chrome Extension",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://helper-ai.alisolanki.com/",
    description: "Chrome Extension"
  },{
    id: 12,
    image: "/assets/img/kart_racing_league.png",
    title: "Kart Racing League Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://krl-ui.vercel.app/",
    description: "Blockchain game"
  },{
    id: 13,
    image: "/assets/img/typer_ai.png",
    title: "Typer AI Webapp",
    tags: ["Content Generation", "Social Media"],
    techStack: ["Javascript", "AI"],
    url: "https://typer-ai.vercel.app/",
    description: "Typer AI revolutionizes social media content creation by generating personalized content ideas. It matches users' writing styles for platforms like LinkedIn and YouTube, making content creation seamless and impactful."
  },{
    id: 14,
    image: "/assets/img/snetsdk2.png",
    title: "Singularity Net SDK",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["ReactJS", "Blockchain", "Ethereum SDKs"],
    url: "https://singularity-boilerplate-r67r.vercel.app/",
    description: "Singularity Net SDK, leveraging React.js , facilitates a responsive web experience adn integration with an SDK updated by Metarizz Tech Agency. The tool emphasizes interactive UI, service breakdown, and effective communication strategies, including visual icons, clear call to action, and SEO best practices."
  }
  // ... other projects to be added here ...
];

export default function ProjectDetails({ params }) {
//   const router = useRouter();
//   const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectDetails = projectsData.find((proj) => proj.id.toString() === params.id );
    setProject(projectDetails);
  }, [params.id]);

  if (!project) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><Loader /></div>; 
  }

  return (  
    <>
   <Header />
      <div className="breadcrumb_area two" data-bg-color="#F5DB6E">
        <div className="container">
          <div className="breadcrumb_content">
            <h2>{project.title}</h2>
            <div className="breadcrumb_category">
              <span><a href="/">Home</a></span>
              <span><FontAwesomeIcon icon={faArrowRight} /></span>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Single Section */}
      <section className="portfolio_single">
        <div className="container">
          <div className="portfolio_single_content">
            <div className="top">
              <img src={project.image} alt={project.title} className="min_img" />
              {/* Tags - Uncomment and adjust as and when all tags are ready */}
              {/* <ul className="tags list-unstyled">
                {project.tags.map((tag, index) => (
                  <li key={index}><a href="#" className="bg_btn">{tag}</a></li>
                ))}
              </ul> */}
              <div className="main_content">
                <div className="section_title">
                  <h2>{project.title}</h2>
                </div>
                <div>
                  <h2>Tech Stack -</h2>
                  <div>
                    <h3>
                    <ul>
                      {project.techStack.map((techStack, index) => (
                        <li key={index}>{techStack}</li>
                      ))}
                    </ul>
                    </h3>
                    <br></br>
                  </div>
                </div>
                <div>
                  <h2>Project Description -</h2>
                  <h3>{project.description}</h3>
                  <br></br>
                </div>
                <div>
                  <h2>Project Link -</h2>
                  <h3><Link href={project.url} target="_blank">{project.url}</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

