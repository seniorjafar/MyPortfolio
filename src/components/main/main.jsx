import "./Main.scss";
import About from "../../assets/images/my.jpg";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { ImGithub } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import My from "../../assets/images/my.jpg";
import Norn from "../../assets/images/norn.png";
import AliExpress from "../../assets/images/AliExpress.png";
import Ecommer from "../../assets/images/Ecommer.png";
import Country from "../../assets/images/country.png";
import Mebels from "../../assets/images/mebel.png";
import Gold from "../../assets/images/gold.png";

import { SiNetlify } from "react-icons/si";
import { IoIosArrowDropup } from "react-icons/io";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaVolleyballBall } from "react-icons/fa";
import { VscFoldDown } from "react-icons/vsc";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Main() {
  const [backToTopButton, setBackTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [typeEffect] = useTypewriter({
    words: ["FrontEnd Developer", "Coder", "Hard Worker"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <main className="main">
      {backToTopButton && (
        <button className="backtop" onClick={scrollUp}>
          <IoIosArrowDropup />
        </button>
      )}

      {/* hero section */}
      <section id="heroSec" className="hero">
        <div className="container">
          <div className="hero-left">
            <h1>
              Hi I am
              <br />
              Jabborov Ja'far
              <br />
              <span>{typeEffect}</span>
              <span style={{ color: "red" }}>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <div className="hero-left-flex">
              <div className="hero-left-flex__f">
                <a href="https://t.me/jafar_seniornumber0605">
                  <FaTelegram />
                </a>
                <a href="https://www.instagram.com/jafar__0605/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/jafar-jabborov-68a86a2a1/">
                  <IoLogoLinkedin />
                </a>
                <a href="https://github.com/seniorjafar">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={About} alt="me-img" />
          </div>
          <div className="arrow">
            <MdKeyboardDoubleArrowDown />
          </div>
        </div>
      </section>
      {/* hero section */}

      {/* about section */}
      <section id="About" className="about">
        <div className="container">
          <div className="about-top">
            {/* <h1> About Me</h1> */}
            <div className="banner">
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
            </div>
            <p>
              <span>Hello there!</span> My name is Ja'far and I am a web developer and I am 
                currently gaining experience. Information technology is  becoming popular 
                in the developing world, so I want to become a strong programmer in my field 
                of study. I studied at <span>NAJOT TALIM</span> in 2023-2024.
            </p>
          </div>
          <div className="about-card">
            <div className="about-card-item">
              <div className="icon">
                <FaCalendarDays />
              </div>
              <h4>BIRTHDAY</h4>
              <p>05.06.2005</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <FaLocationDot />
              </div>
              <h4>LOCATION</h4>
              <p>Tashkent</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <PiStudentBold />
              </div>
              <h4>DEGREE</h4>
              <p>Najot Talim Education</p>
            </div>
            <div className="about-card-item">
              <div className="icon">
                <FaVolleyballBall />
              </div>
              <h4>HOBBBY</h4>
              <p> Voleyball</p>
            </div>
          </div>
          <div className="icon-line">
            <VscFoldDown />
          </div>
        </div>
      </section>
      {/* about section */}

      {/* service section */}
      <section id="Service" className="service">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Services</span>
            </h1>
            <p>
              <span>
                My services are Web Programming, Video montage,Web design.
              </span>
            </p>
          </div>
          <div className="service-card">
            <div className="service-card-items">
              <div className="icon-web">
                <IoLogoFigma />
              </div>
              <h4>Web Design</h4>
              <p>
                I can also create front-end web designs. I primarily use the
                Figma.com website for this.
              </p>
            </div>
            <div className="service-card-items2">
              <div className="icon-web">
                <FaVideo />
              </div>
              <h4>Video Montage</h4>
              <p>I could work with video montage ,espically in cup cut app.</p>
            </div>
            <div className="service-card-items3">
              <div className="icon-web">
                <MdOutlineDeveloperMode />
              </div>
              <h4>Web Programming</h4>
              <p>
                It is my major so I can create new web projects by using
                Front-End
              </p>
            </div>
          </div>
          <div className="request-area">
            <p className="description">
              Dears, if you want to open your own website, we offer you our
              services called IT WORLD, fill this form and we will contact you
              soon.
            </p>
            
          </div>
        </div>
      </section>
      {/* service section  */}

      {/* skills section */}
      <section id="Skill" className="skills">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Skills</span>
            </h1>
          </div>
          <marquee scrollAmount="13" direction="left">
            <div className="skills-card">
              <div className="skills-card__items">
                <FaHtml5 />
                <h3>Html</h3>
              </div>
              <div className="skills-card__items">
                <FaCss3 />

                <h3>Css</h3>
              </div>
              <div className="skills-card__items">
                <FaSass />

                <h3>Sass</h3>
              </div>
              <div className="skills-card__items">
                <FaBootstrap />

                <h3>Bootstrap</h3>
              </div>
              <div className="skills-card__items">
                <SiTailwindcss />

                <h3>Tailwind</h3>
              </div>
              <div className="skills-card__items">
                <IoLogoJavascript />

                <h3>JavaScript</h3>
              </div>
              <div className="skills-card__items">
                <FaReact />
                <h3>React</h3>
              </div>
              <div className="skills-card__items">
                <SiRedux />

                <h3>Redux</h3>
              </div>
              <div className="skills-card__items">
                <SiTypescript />

                <h3>TypeScript</h3>
              </div>
              <div className="skills-card__items">
                <PiFigmaLogoFill />

                <h3>Figma</h3>
              </div>
              <div className="skills-card__items">
                <ImGithub />

                <h3>GitHub</h3>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      {/* skills section */}

      {/* work section */}
      <section className="work" id="Projects">
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Works</span>
            </h1>
          </div>
          <div className="work-card">
            <div className="work-card-item">
              <img className="img-project"  src={Norn} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://norn-light0605.vercel.app/" >View code</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={AliExpress} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://ali-expres.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Ecommer} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://e-commerce-imtihon-eight.vercel.app/">View project</a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Country} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://countrys-indol.vercel.app/">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Mebels} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://mebel-ashen.vercel.app/">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div className="work-card-item">
              <img className="img-project" src={Gold} alt="" />
              <div className="work-card-item__flex">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ut.
                </p>
                <a href="https://mohid-gold.vercel.app/">
                  View project
                </a>
                <span>
                  <SiNetlify />
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="see-all">
            <a
              className="link-see"
              href=""
            >
              See more
            </a>
          </div>
        </div>
      </section>
      {/* work section */}

      {/* section contact  */}
      <section className="contact" id="Contactsec">
       
        <div className="container">
          <div className="scroll-reveal">
            <h1 className="section-title">
              <span>My Contact</span>
            </h1>
          </div>
          <div className="contact-card">
            <div className="contact-card-items">
              <div className="child1">
                <FaPhoneAlt />
              </div>
              <p>Phone</p>
              <h3>+998 97 779 61 77</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <MdMarkEmailRead />
              </div>
              <p>Email Adress</p>
              <h3>jafarseniornumber0605@gmail.com</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <IoLocation />
              </div>
              <p>Address</p>
              <h3>Tashkent, Uzbekistan</h3>
            </div>
            <div className="contact-card-items">
              <div className="child1">
                <FaGlobe />
              </div>
              <p>Website</p>
              <h3>Myportfolio.uz</h3>
            </div>
          </div>
        </div>
      </section>
      {/* section contact  */}
    </main>
  );
}

export default Main;
