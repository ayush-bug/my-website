function App(){
  return(
    <main className="protfolio">
      <nav className="navbar">
        <div className="logo">AK</div>
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

     <section className="hero">
          <p className="eyebrow">web.game.iot.embedded</p>
         <h1>Ayush <br /> <span>Kushwaha</span></h1>
            <div className="hero-button">
              <p>I built websites <br /> hardware , iot</p>
           
            <a href="#work" className="scroll">
              scroll to explore
            </a>
             </div>
     </section>
   <section id="work" className="placeholder-section">
    <span>01</span>
       <h2>Pixel pizza</h2>
   </section>
      <section id="about" className="placeholder-section">
        <span>02</span>
        <h2>About Me</h2>
      </section>

      <section id="contact" className="placeholder-section">
        <span>03</span>
        <h2>Let's build something.</h2>
      </section>
    </main>
  );
}
export default App;