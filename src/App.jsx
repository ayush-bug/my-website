import Lanyard from "./components/Lanyard";
import WebThreads from "./components/WebThreads";
import ScrambledText from "./components/ScrambledText";
import ScrollFloat from "./components/ScrollFloat";
import { any } from "three/tsl";


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
      {/* <section id="work" className="placeholder-section">
        <span>02</span>
        <h2>Pixel pizza</h2>
      </section>


      <section id="contact" className="placeholder-section">
        <span>03</span>
        <h2>Let's build something.</h2>
      </section> */}
    </main>
  );
}
export default App;