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
          <a href="#">Home</a>
          <a href="#project">Projects</a>
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
              <span className="project-number">03</span>
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
              <span className="project-number">04</span>
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
      <section id="contact" className="placeholder-section">
        <span className="numbering">04</span>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=40%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="about-float"
        >
          Let's  Connect
        </ScrollFloat>
        <div className="contact-container">
          <div className="connect">
            <div className="upper">
              <div className="connect-logo">
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 499.368"><path fill="#fff" fill-rule="nonzero" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z" /></svg></div>
                 <span>Github</span>
            </div>
            <div className="username">@ayush-bug</div>
            <a href="https://github.com/ayush-bug" className="connect-visit">
              Visit</a>
          </div>
          <div className="connect">
             <div className="upper">
              <div className="connect-logo">
                
<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 370.23"><path fill="#fff" fill-rule="nonzero" d="M29.37 0h453.26C498.79 0 512 13.21 512 29.37v311.49c0 16.57-12.68 29.37-29.37 29.37H29.37C13.21 370.23 0 357.02 0 340.86V29.37C0 13.19 13.19 0 29.37 0zm-6.84 328.51l158.85-159.25L22.53 39.74v288.77zm176.34-144.99L35.1 347.7h440.43L319.02 183.55l-51.6 43.96v-.01c-4.05 3.47-10.11 3.66-14.39.18l-54.16-44.16zm137.28-14.57l153.32 160.82V38.33L336.15 168.95zM36.95 22.53l223 181.82L473.38 22.53H36.95z"/></svg>
                </div>
                 <span>Mail</span>
            </div>
            <div className="username">ayushkushwahrxl2007@gmailcom</div>
            <a href="mailto:ayushkushwaharxl2007@gmail.com" className="connect-visit">
              Send mail</a>
          </div>
          
          <div className="connect">
            <div className="upper">
               <div className="connect-logo">
              <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="#fff" fill-rule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.483 47.121-.092 85.407 38.03 85.499 85.16.091 47.129-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.091c.141 72.602 59.106 131.327 131.69 131.186 72.592-.141 131.35-59.09 131.209-131.692-.141-72.577-59.114-131.335-131.715-131.194-72.585.141-131.325 59.115-131.184 131.7zm237.104-137.091c.033 16.953 13.817 30.681 30.772 30.648 16.961-.033 30.689-13.811 30.664-30.764-.033-16.954-13.818-30.69-30.78-30.657-16.962.033-30.689 13.818-30.656 30.773zm-208.696 345.4c-24.958-1.087-38.511-5.234-47.543-8.709-11.961-4.629-20.496-10.178-29.479-19.094-8.966-8.95-14.532-17.46-19.202-29.397-3.508-9.032-7.73-22.569-8.9-47.527-1.269-26.982-1.559-35.077-1.683-103.432-.133-68.339.116-76.434 1.294-103.441 1.069-24.942 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.479 8.949-8.982 17.459-14.532 29.403-19.202 9.025-3.525 22.561-7.714 47.511-8.9 26.998-1.277 35.085-1.551 103.423-1.684 68.353-.132 76.448.108 103.456 1.295 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.144 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.412 3.524 9 7.714 22.553 8.892 47.494 1.285 26.999 1.576 35.095 1.7 103.433.132 68.355-.117 76.451-1.302 103.441-1.087 24.958-5.226 38.52-8.709 47.561-4.629 11.952-10.161 20.487-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.559-103.448 1.684-68.338.132-76.424-.125-103.431-1.294zM149.977 1.773c-27.239 1.285-45.843 5.648-62.101 12.018-16.829 6.561-31.095 15.354-45.286 29.604C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.547 1.302 27.231 5.649 45.828 12.019 62.093 6.569 16.83 15.353 31.088 29.611 45.288 14.25 14.201 28.55 22.918 45.404 29.438 16.282 6.295 34.902 10.583 62.15 11.778 27.305 1.203 36.022 1.468 105.521 1.335 69.532-.132 78.25-.439 105.555-1.733 27.239-1.303 45.826-5.665 62.1-12.019 16.829-6.586 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.405 6.304-16.282 10.592-34.903 11.777-62.134 1.195-27.322 1.478-36.048 1.344-105.556-.133-69.516-.447-78.225-1.741-105.523-1.294-27.255-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.079-29.602-45.287-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.305-34.903-10.601-62.15-11.779C333.747.164 325.03-.102 255.506.031c-69.507.133-78.224.431-105.529 1.742z"/></svg>
</div>
                 <span>Instagram</span>
            </div>
            <div className="username">@ayush.bug</div>
            <a href="https://www.instagram.com/ayush.bug/" className="connect-visit">
              Visit</a>
          </div>

        </div>
      </section>
    </main>
  );
}
export default App;