import Lanyard from "./components/Lanyard";
import WebThreads from "./components/WebThreads";
import ScrambledText from "./components/ScrambledText";
import ScrollFloat from "./components/ScrollFloat";
import { any } from "three/tsl";
import LogoLoop from "./components/LogoLoop";
import htmlLogo from "./assets/html-icon.png";
import cssLogo from "./assets/css-icon.png";
import nodeJsLogo from "./assets/node-js-icon.png";
import reactLogo from "./assets/react-js-icon.png";
import cppLogo from "./assets/c++.png";
import jsLogo from "./assets/js.png";
import githubLogo from "./assets/github-white-icon.png";
import viteLogo from "./assets/vite-dev-icon.png";
import webLogo from "./assets/web-globe-icon.png";
import espLogo from "./assets/pngwing-esp32.png";
import dsaLogo from "./assets/dsa.png";

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <div className="logo">AK</div>
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-threads">
          <WebThreads />
        </div>
        <div className="name-idcard">
          <div className="glass-text">
            <p className="eyebrow">web.game.iot.embedded</p>

            <h1>
              <span className="intro">Hi , I am</span><br />Ayush <br /> <span>Kushwaha</span></h1>
          </div>
          <div className="idcard">
            <Lanyard />
          </div>
        </div>
        <div className="hero-button">
          <br />
          <p>Mainly focused on Full Stack Web Dev &amp; DSA in C++</p>

          <a href="#work" className="scroll">
            scroll to explore
          </a>
        </div>

      </section>
      <section id="about" className="placeholder-section">
        <span className="numbering">01</span>

        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=40%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="about-float"
        >
          About Me
        </ScrollFloat>
        <div className="about-text">
          <ScrambledText radius={100} duration={1.2} speed={0.5} className="scramble-about">Hi , my name is Ayush kushwaha , I have completed my 12 from mumbai in sainath junior college vashi , currently learning react and dsa in c++ . I like web dev , dsa, fishing ,drones , iot and embedded system .
            . will take admission in bca may be in future , When I am not writing code, you will find me out fishing,  or playing vollyball , cricket , badminton and  games like BGMI and Hazmob PC
            . My favroit place is my hometown .   </ScrambledText>
        </div>

      </section>
      <section id="skills" className="placeholder-section">
        <span className="numbering">02</span>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=40%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="about-float"
        >
          Skills
        </ScrollFloat>
        <div className="skils-content">
          <div className="skill-item-contain">
            <div className="skill-item">
              <span>01</span>
              <div>
                <h3>Web Devlopment</h3>
                <p>React . Javascript . HTML . CSS . VITE . FIREBASE</p>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">HTML</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
              <span>90%</span>
            </div>
            <div className="skill">
              <span className="skill-name">CSS</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
              <span>80%</span>
            </div>
            <div className="skill">
              <span className="skill-name">JS</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "70%" }}></div>
              </div>
              <span>70%</span>
            </div>
            <div className="skill">
              <span className="skill-name">VITE</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "75%" }}></div>
              </div>
              <span>75%</span>
            </div>
            <div className="skill">
              <span className="skill-name">REACT</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "35%" }}></div>
              </div>
              <span>35%</span>
            </div>
            <div className="skill">
              <span className="skill-name">FIREBASE</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "65%" }}></div>
              </div>
              <span>65%</span>
            </div>
          </div>
          <div className="skill-item-contain">
            <div className="skill-item">
              <span>02</span>
              <div>
                <h3>DSA</h3>
                <p>c++ . Datas structures . Algorithms . Problem solving</p>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">C++</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "75%" }}></div>
              </div>
              <span>75%</span>
            </div>
            <div className="skill">
              <span className="skill-name">DSA</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "45%" }}></div>
              </div>
              <span>45%</span>
            </div>
          </div>
          <div className="skill-item-contain">
            <div className="skill-item">
              <span>03</span>
              <div>
                <h3>IoT &amp; Embedded</h3>
                <p>ESP32 . ARdunio . IoT . raspberry pi </p>
              </div>
            </div>
            <div className="skill">
              <span className="skill-name">ESP32</span>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: "50%" }}></div>
              </div>
              <span>50%</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <LogoLoop
          logos={[
            {
              node: <img src={htmlLogo} alt="HTML" style={{ height: "80px" }} />,
              title: "HTML"
            },
            {
              node: <img src={cssLogo} alt="CSS" style={{ height: "80px" }} />,
              title: "CSS"
            },
            {
              node: <img src={nodeJsLogo} alt="NODE JS" style={{ height: "80px" }} />,
              title: "NODE JS"
            },
            {
              node: <img src={jsLogo} alt="JS" style={{ height: "80px" }} />,
              title: "JS"
            },
            {
              node: <img src={reactLogo} alt="REACT JS" style={{ height: "80px" }} />,
              title: "REACT JS"
            },
            {
              node: <img src={cppLogo} alt="C++" style={{ height: "80px" }} />,
              title: "c++"
            },
            {
              node: <img src={githubLogo} alt="GITHUB" style={{ height: "80px" }} />,
              title: "GITHUB"
            },
            {
              node: <img src={viteLogo} alt="VITE" style={{ height: "80px" }} />,
              title: "VITE"
            }, {
              node: <img src={webLogo} alt="web" style={{ height: "80px" }} />,
              title: "webicon"
            },
            {
              node: <img src={espLogo} alt="ESP32" style={{ height: "80px" }} />,
              title: "esp32"
            },
            {
              node: <img src={dsaLogo} alt="DSA" style={{ height: "80px" }} />,
              title: "DSA"
            }

          ]}

        />
      </section>


      <section id="project" className="placeholder-section">
        <span className="numbering">03</span>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=40%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="about-float"
        >
          Projects
        </ScrollFloat>
        <div className="projects-grid">
          <article className="project-card">
            <div className="project-top">
              <div className="project-type">
                <span className="project-icon">&lt;/&gt;</span>
                <span>web app</span>
              </div>
              <span className="project-number">01</span>
            </div>
            <div className="project-body">
              <h3>Pixel Pizza</h3>
              <p>Pixel pizza is pizza ordering website for local pizza shops
                , it has a great ui/ux with features
                like add to cart , place order , admin dashboard and view order details.</p>
            </div>
            <div className="project-bottom">
              <div className="project-tech">
                <span>Vite</span>
                <span>Js</span>
                <span>Firebase</span>
              </div>
              <a href="https://github.com/ayush-bug/Pixel-pizza" target="_blank" className="view-project">
                view Project
              </a>
            </div>
          </article>
          <article className="project-card">
            <div className="project-top">
              <div className="project-type">
                <span className="project-icon">&lt;/&gt;</span>
                <span>web app</span>
              </div>
              <span className="project-number">02</span>
            </div>
            <div className="project-body">
              <h3>NASA APOD </h3>
              <p>This is the web that will allow you to see NASA APOD , 
                live ISS tracer , and a image gallery of the nasa with search
                 bar with clean ui and interface , made with free NASA api.
                .</p>
            </div>
            <div className="project-bottom">
              <div className="project-tech">
                <span>Vite</span>
                <span>Js</span>
                <span>NASA API</span>
                <span>HTML</span>
              </div>
              <a href="https://github.com/ayush-bug/Interstellar-NASA-API" target="_blank" className="view-project">View Project</a>
            </div>
          </article>
           <article className="project-card">
            <div className="project-top">
              <div className="project-type">
                <span className="project-icon">&lt;/&gt;</span>
                <span>Extension</span>
              </div>
              <span className="project-number">02</span>
            </div>
            <div className="project-body">
              <h3>Chrome Buddy </h3>
              <p>Chrome buddy is a chrome extension that help you to trace your daily usage on every website you visit, you can see how many hours you have worked today with last week . It also has
  a water intake reminder as default and you can add your own reminders as well .               .</p>
            </div>
            <div className="project-bottom">
              <div className="project-tech">
                <span>HTML</span>
                <span>Js</span>
                <span>JSON</span>
                <span>CHROME API</span>
              </div>
              <a href="https://github.com/ayush-bug/Chrome-Buddy" target="_blank" className="view-project">View Project</a>
            </div>
          </article>
          <article className="project-card">
            <div className="project-top">
              <div className="project-type">
                <span className="project-icon">&lt;/&gt;</span>
                <span>FUN</span>
              </div>
              <span className="project-number">02</span>
            </div>
            <div className="project-body">
              <h3>Spend Musk Money</h3>
              <p>A fun website where you can spend Elon Musk money in a fun way you can buy many things . check it out once you wil relly enjoy this .               .</p>
            </div>
            <div className="project-bottom">
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
               
              </div>
              <a href="https://github.com/ayush-bug/Spend-ElonMusk-Money" target="_blank" className="view-project">View Project</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default App;