import React from "react";
import "../Styles/Development.css"; // Import the CSS file for styling
import characterCarousel from "../Assets/charactercarousel.png";
import johnImage from "../Assets/john.png"; // Importing images
import ensembleImage from "../Assets/ensemble.png";
import desksketchImage from "../Assets/desksketch.png";

function Development() {
  return (
    <div className="development-container">
      <img src={characterCarousel} alt="Character Carousel" className="character-carousel" />
      <div className="development-section">
        <div className="left-content">
          <p>
            <i>Shelf Life</i> was developed between June and August 2024 and took a lot of love, hard work, and snack breaks. 
            We have close to 100 pages of planning documentation, narrative writing, and project requirements 
            documents. The original kernel of this project was to marry three concepts we all cared about:
          </p>
          <ol>
            <li>Social progress and mutual aid</li>
            <li>Thoughtful, narratively rich games</li>
            <li>Really good books, and where you find them.</li>
          </ol>
        
        <p>We broke down into a few natural teams, with some overlap along the way:</p>
        <h2>UI/UX</h2>
        <p>The UI team, led by Emily Pan, defined the feel and look of this game. We wanted to nail down a consistent
          achievable and scalable aesthetic, taking inspiration from games like <i>Stardew Valley</i>, <i>Gourdlets</i>,  
            <i> Fish Bowl</i>, <i> Half Past Fate</i>, and many many more. 
          <br /><br />
          Initial sketches came to life with color, followed by a 
          pixelization treatment in an online application called <a href="https://www.piskelapp.com/">Piskel.</a> from characters to
          buttons to backgrounds, this team worked hard to build the world of <i>Shelf Life</i>.
          You would not believe how big our Figma board was by the time we wrapped. Seriously, it's huge.
          </p>

          <h2>Narrative Design & Writing</h2>
          <p>
            The narrative team, led by Sofia Meis with Goda Vertelkaite, created the heart and soul of this game. While the mechanics and graphics are a visual delight <i>Shelf Life</i> comes alive in the 
            conversations players have with their library's patrons. The narrative team transformed the nebulous idea of a broken community
            into twenty two richly developed characters (not counting those who were cut for time) players will love, hate, or hate to love.
            <br /><br />
            This team began working in Twine, a branching story-writing software, where they wrote over 80,000 words. That writing was turned into
            in-game dialogue by Unity coder and alchemist Ksenia on the Coding Team.
          </p>

          <h2>Development</h2>
          <p>
            Our one-man coding (Ksenia Anokhina) team brings this 2D Unity game to life, focusing on delivering a full-bodied 
            narrative experience within a two-hour gameplay window. Working closely with the narrative and 
            UI/UX teams, our developer ensured that the game's mechanics seamlessly integrated with its rich 
            storytelling. 
            <br /><br />
            Our game environment runs smoothly on WebGL, making it accessible directly through 
            the browser without the need for downloads. From scripting the interactions to fine-tuning the 
            gameplay, every aspect of Shelf Life was meticulously crafted to provide players with a memorable 
            and immersive experience, complete with responsive controls and a world that feels alive.
          </p>
          <h2>Sound and Atmosphere</h2>
          <p>
            Major influences for the soundtrack of this game include Mort Garson's <i>Plantasia</i> (1976), Aphex Twin's ambient works,
            and Ricky Eat Acid's <i>Three Love Songs</i> (2014). All the songs in this game are original compositions by the sound team under C. Cahill.
            Listen to the soundtrack here:
            <br /><br />
          </p>
          <iframe 
                  width="70%" 
                  height="300" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1867154463&color=%235c6c84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
        <div style={{
                  fontSize: '10px', 
                  color: '#cccccc',
                  lineBreak: 'anywhere',
                  wordBreak: 'normal',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                  fontWeight: 100
                  }}>
            <a href="https://soundcloud.com/bad-librarian-studios" 
              title="Bad Librarian Studios" 
              target="_blank" 
              style={{color: '#cccccc', textDecoration: 'none'}}>
              Bad Librarian Studios
            </a> 
            · 
            <a href="https://soundcloud.com/bad-librarian-studios/sets/shelf-life-original-soundtrack" 
              title="Shelf Life Original Soundtrack" 
              target="_blank" 
              style={{color: '#cccccc', textDecoration: 'none'}}>
              Shelf Life Original Soundtrack
            </a>
          </div>

        </div>
        <div className="right-content">
          <h3>Early Character and Environment Sketches</h3>
          <img src={johnImage} alt="John" className="development-image" />
          <img src={ensembleImage} alt="Ensemble" className="development-image" />
          <img src={desksketchImage} alt="Desk Sketch" className="development-image" />
        </div>
      </div>
    </div>
  );
}

export default Development;
