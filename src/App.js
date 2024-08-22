  import React from "react";
  import "./App.css";
  import './Styles/Type.css';
  import Menu from "./Components/Menu";
  import Landing from "./Components/Landing";
  import Title from "./Components/Title";
  import Video from "./Components/Video";
  import About from "./Components/About";
  import TeamCard from "./Components/TeamCard";
  import ButtonTop from "./Components/ButtonTop";
  import Contact from "./Components/Contact";
  import Development from "./Components/Development";
  import clemmieImage from "./Assets/clemmie.png";
  import cahillImage from "./Assets/cahill.png";
  import kseniaImage from "./Assets/ksenia.png";
  import anokhinaImage from "./Assets/anokhina.png";
  import sofiaImage from "./Assets/sofia.png";
  import meisImage from "./Assets/meis.jpg";
  import godaImage from "./Assets/goda.jpeg";
  import vertelImage from "./Assets/vertel.jpg";
  import emilyImage from "./Assets/emily.jpeg";
  import panImage from "./Assets/pan.png";
  import peachLogo from "./Assets/peachlogo.png";

  function App() {
    return (
      <div className="App" id="start">
        <Menu />
        <ButtonTop />
        <div className="block">
          <Landing />
        </div>
        <div className="block" id="trailer">
          <Video />
        </div>
        <div className="block" id="about">
          <Title text="What's Shelf Life about?" />
          <About />
        </div>
        <div className="block" id="development">  {/* New Section */}
          <Title text="Development" />
          <Development />
        </div>
        <div className="block" id="team"> 
          <Title text="Who made this?" />
          <p id="badlib">
            Shelf Life was developed by{" "}
            <a href="https://www.linkedin.com/company/bad-librarian/about/">
              Bad Librarian Studios,
            </a>{" "}
            a Dublin-based development team originally formed at Trinity College
            Dublin. We're a small team comprised of individuals of female, POC,
            and queer experience. Diverse and nuanced perspectives are deeply
            important to us; we're excited about bringing them to our narrative
            design.
          </p>

          <TeamCard
            name="Ksenia Anokhina"
            pixelatedImage={kseniaImage}
            headShotImage={anokhinaImage}
            roles={["Lead Developer", "Art Director", "Project Manager"]}
            description="I’m passionate about building complex backend and frontend architectures, 
            finding most efficient ways to display and abstract data. My interests also extend to 
            interactive data visualization, particularly projects with a social impact, and game development, 
            where I enjoy highlighting important narratives through play. When I'm not deep in code, I 
            enjoy making clothes, creating illustrations, and walking around in Google maps."
            linkedInLink="https://www.linkedin.com/in/anokhina-ksenia/"
            portfolioLink="https://https://kseniiia.nl/"
            githubLink="https://github.com/Shandaram"
          />

          <TeamCard
            name="Sofia Meis"
            pixelatedImage={sofiaImage}
            headShotImage={meisImage}
            roles={["Lead Writer", "Lead Narrative Designer", "Concept Artist"]}
            description="So-called writer Sofia Meis grew up in Bangkok, studied Journalism and Political 
            Science in Los Angeles, and worked for various humanitarian nonprofits in Washington DC before 
            coming to Dublin. She specialises in interactive game design, program management, and mixed-methods 
            applied research. Interests include SBCC, dim sum, and science fiction."
            imagePosition="left"
            linkedInLink="https://www.linkedin.com/in/sofiameisburger/"
            githubVisibility="hide"
            portfolioLinkVisibility="hide"
          />
          <TeamCard
            name="C. Cahill"
            pixelatedImage={clemmieImage}
            headShotImage={cahillImage}  
            roles={["Product Manager", "Lead Sound & Environment Engineer", "Product Designer"]}
            description="Wearer of many hats, I was born in Ireland and raised in the great 
            state of New Jersey. Before returning to Dublin for postgrad, I completed a B.S in Media Studies at Boston University. 
            It was here that a lifelong love of RPGs morphed from a nerdy hobby to an academic fixation. 
            I spend a LOT of time imagining realities, trying to digitize the human experience 
            without compromising organic emotion, and thinking about ways to develop the gaming industry’s 
            answer to the Great American Novel. I also make indie rock, which came in handy while 
            developing the soundtrack for this game!"
            githubVisibility="hide"
            portfolioLink="https://caroline-cahill.com/"
            linkedInLink="https://www.linkedin.com/in/caroline-cahill-453389178/"
          />

          <TeamCard
            name="Emily Pan"
            pixelatedImage={emilyImage}
            headShotImage={panImage} 
            roles={["Lead UI/UX Designer", "Concept Artist"]}
            description="With a background in Illustration for the Entertainment Industry, I focus on designing
            art that is both impactful and memorable. Outside of work, I enjoy cozy games, scribbling story 
            ideas, and watching films. My love for cats and passion for traveling inspire my creative process.
            I thrive in aesthetic spaces that encourage creativity and innovation."
            imagePosition="left"
            linkedInLink="https://www.linkedin.com/in/emily-pan-704028190/"
            portfolioLink="https://www.emilypanstudio.com/"
          />

          <TeamCard 
            name="Goda Vertelkaite"
            pixelatedImage={godaImage}
            headShotImage={vertelImage}
            roles={["Environmental Storyteller"]}
            description="From my bachelor study origins in Communications and Media, to my master’s in 
            Interactive Digital Media, I am both a storyteller and open book by heart. From observing what’s 
            out there, to thinking instead what “could be”—I enjoy telling stories through unconventional and 
            compelling means. I love to collaborate and share my thoughts with others, and contribute to the 
            design of narrative-rich experiences, evoking the need for exploration and inspiring the user to 
            uncover hidden details through experiencing the world in new and enriching ways."
            linkedInLink="http://www.linkedin.com/in/godavertelkaite"
          />
        </div>
      <div className="block" id="donate">
          <Title text=" " />
          <p> </p>
        </div>
        <div className="block" id="contact">
          <Contact />
        </div>
    
        <footer className="footer">
          <img src={peachLogo} alt="Peach Logo" className="footer-logo" />
        </footer>
      </div>
    );
  }

  export default App;
