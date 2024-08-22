import React from "react";
import "../Styles/Cards.css";
import Button from "./Button";
import Slideshow from "./slideshow";
import characterCarousel from "../Assets/charactercarousel.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-start">
        <p>
          <div id="lots"> Lots of things, actually.</div> Shelf Life is an online single-player game about books, public services, 
          and community. Players assume the role of an interim librarian tasked with revitalizing a run-down 
          public library. <br /><br />
          Starting with a crumbling infrastructure and disengaged patrons, players must 
          navigate the challenges of library management, community engagement, and governmental relations to 
          breathe new life into this vital public institution. Players' decisions shape the library’s future, 
          highlighting the importance of civic participation, political efficacy, and agentic empowerment.
          <br /><br /> 
          Within the existing indie game market, Shelf Life offers a unique blend of strategic management, 
          interactivity, narrative depth, and community engagement. With a diverse cast of characters, 
          comprehensive book collection, and customizable library, Shelf Life delivers an engaging and 
          educational gaming experience that highlights the importance of public libraries in fostering 
          community and learning, as well as the importance of choice and agency.
          
        </p>
        <br /><br />
      </div>
      
      <div className="about-right">
        <h1>Why libraries though?</h1>
        <p className="about-text">
          Libraries no longer serve as a receptacle for books alone; in the age of surveillance, 
          hostile architecture, and late state capitalism, these are one of the few remaining spaces where 
          human beings can exist without an entry fee or required labor. In the library, citizens can gather 
          to share not only knowledge but also community and resources in what sociologists call a vital 
          ‘third space’. 
          <br /><br />
          Research suggests that taking an active role in video games can generate
          empathy and shape real-world perceptions, making it easier for players
          to understand and relate to others’ experiences 
          (Sources: <a href="https://psycnet.apa.org/record/2014-27625-010" target="_blank" rel="noopener noreferrer">1</a>, 
          <a href="https://www.researchgate.net/publication/258190001_Learning_to_Stand_in_the_Other's_Shoes_A_Computer_Video_Game_Experience_of_the_Israeli-Palestinian_Conflict" target="_blank" rel="noopener noreferrer">2</a>, 
          <a href="https://psycnet.apa.org/record/2008-11359-024" target="_blank" rel="noopener noreferrer">3</a>). 
          Our vision for Shelf Life is to create the opportunity for players to sense this new
          reality by taking the role of a librarian in a fractured community.
          <br /><br />
          This game isn’t about filling shelves or stamping library cards (although
          that’s definitely satisfying), but instead becoming an integral part of
          this endangered service and realizing that education, empathy, attention,
          patience, and love are always political.
        </p>
      </div>
      <div className="about-left">
        <Slideshow /> {/* Slideshow component placed on the right */}
      </div>
      <div className="about-right">
        <h1>The Research</h1>
        <p className="about-text">
          These institutions are the cornerstone of democracy, knowledge, culture, and history, 
          and they’re on the financial chopping block for a plethora of reasons. <br /><br />
          At best, it’s the simple fact that libraries don’t make money; at worst, it’s the threat presented
          by a space where citizens can get organized, share information, and take care of each other.
          <br /><br />
          Take a look at these stats around the world to see what we mean:
        </p>
        <ul>
          <li>The American Library Association reported that attempts were made to censor 4,240 unique titles at libraries, schools, and universities in 2023. 
          (<a href="https://americanlibrariesmagazine.org/blogs/the-scoop/ala-releases-state-of-americas-libraries-2024-report/" target="_blank" rel="noopener noreferrer">x</a>)</li>
          <br />
          <li>Ukraine’s historical Kherson Regional Scientific Library was bombed and levelled 
          (<a href="https://chytomo.com/en/oles-honchar-kherson-regional-library-struck-again-in-russian-attack/" target="_blank" rel="noopener noreferrer">x</a>) 
          by a targeted Russian attack, 750 other libraries faced similar fates.
          (<a href="https://chytomo.com/en/russia-has-destroyed-131-ukrainian-libraries/#:~:text=The%20Russian%20army%20has%20destroyed,2014%20%E2%80%93%20February%202024)%3A%20The" target="_blank" rel="noopener noreferrer">x</a>)</li>
          <br />
          <li>In Palestine, Israeli forces destroyed 12 of about 15 total libraries between October 2023 and July 2024.
          (<a href="https://librarianswithpalestine.org/wp-content/uploads/2024/02/LAP-Gaza-Report-2024.pdf" target="_blank" rel="noopener noreferrer">x</a>)</li>
          <br />
          <li>In India, university libraries took a 25% slash in budget during reforms in 2018.
          (<a href="https://www.ndtv.com/india-news/jnu-has-cuts-library-budget-to-one-fourth-claims-students-union-1948813" target="_blank" rel="noopener noreferrer">x</a>)</li>
          <br />
          <li>Johannesburg City Library in South Africa has been closed for four years, stemming from COVID-19 spending cuts.
          (<a href="https://groundup.org.za/article/joburg-residents-picket-outside-city-library-to-demand-it-be-opened-immediately/" target="_blank" rel="noopener noreferrer">x</a>)</li>
        </ul>
        <p>This may seem like a hopeless situation, but the people these libraries serve are fighting back, 
          and winning. New York City citizens protested and reversed $58 million in library budget cuts in June 2024. <br /><br />
          We hope <i>Shelf Life</i> has the potential to inspire a similar brand of brave organization in pursuit of 
          a world where everyone has an equal opportunity to learn.</p>
      </div>
      
    </div>
     
    
  );
}

export default About;
