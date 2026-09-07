import Lanyard from "./components/Lanyard";
import WebThreads from "./components/WebThreads";
import ScrambledText from "./components/ScrambledText";
import ScrollFloat from "./components/ScrollFloat";
import { any } from "three/tsl";
import LogoLoop from "./components/LogoLoop";
import htmlLogo from "./assets/html-icon.png";
import cssLogo from "./assets/css-icon.png";
import nodeJsLogo from "./assets/node-js-icon.png";
import reactLogo  from "./assets/react-js-icon.png";
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
            . will take admission in bca may be in future , When I am not writing code, you will find me out fishing,  or playing vollyball , cricket , badminton and competitive games like BGMI and Hazmob PC
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
              <div className="skill-progress-fill" style={{width:"50%"}}></div>
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
              node: <img src={htmlLogo} alt="HTML"  style={{height:"80px"}}/>,
              title :"HTML"
              },
              {
                node : <img src={cssLogo} alt="CSS" style={{height:"80px"}} />,
                title : "CSS"
              },
              {
                node : <img src={nodeJsLogo} alt="NODE JS" style={{height:"80px"}} />,
                title : "NODE JS"
              },
              {
               node : <img src={jsLogo} alt="JS" style={{height:"80px"}}/>,
               title : "JS"
              },
              {
                node : <img src={reactLogo} alt="REACT JS" style={{height:"80px"}}/>,
                title : "REACT JS"
              },
              {
                node : <img src={cppLogo} alt="C++" style={{height:"80px"}}/>,
                title : "c++"
              },
              {
                node : <img src={githubLogo} alt="GITHUB" style={{height:"80px"}}/>,
                title : "GITHUB"
              },
              {
                node : <img src={viteLogo} alt="VITE" style={{height:"80px"}}/>,
                title : "VITE"
              },{
                node: <img src={webLogo} alt="web" style={{height:"80px"}}/>,
                title : "webicon"
              },
              {
                node: <img src={espLogo} alt="ESP32" style={{height:"80px"}}/>,
                title : "esp32"
              },
              {
                node: <img src={dsaLogo} alt="DSA" style={{height:"80px"}}/>,
                 title : "DSA"
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
      </section>
    </main>
  );
}
export default App;