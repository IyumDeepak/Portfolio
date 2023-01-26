import React from 'react'
import './Portfolio.css' 
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'

//Do not use the image in production

const data= [
  {
    id :1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Finincial Visualization',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20267926-Core-Dashboard-Builder-Customer-Components'
  },
  {
    id :2,
    image:IMG2,
    title:'Charts Template & Interfaces in Figma',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20267900-Card-Components-of-an-Investment-App-Keitoto'
  },
  {
    id :3,
    image:IMG3,
    title:'Figma UI Kits',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20273038-FluxWear-Web-Design?utm_source=Clipboard_Shot&utm_campaign=tubik_ux&utm_content=FluxWear%20Web%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=tubik_ux&utm_content=FluxWear%20Web%20Design&utm_medium=Social_Share'
  },
  {
    id :4,
    image:IMG4,
    title:'Network Connection',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20267045-Welcome-2023?utm_source=Clipboard_Shot&utm_campaign=catalystvibes&utm_content=Welcome%202023!%F0%9F%8E%89&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=catalystvibes&utm_content=Welcome%202023!%F0%9F%8E%89&utm_medium=Social_Share'
  },
  {
    id :5,
    image:IMG5,
    title:'Social Media Marketing',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20268695-Be-Website?utm_source=Clipboard_Shot&utm_campaign=mrstudio&utm_content=Be%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mrstudio&utm_content=Be%20Website&utm_medium=Social_Share'
  },
  {
    id :6,
    image:IMG6,
    title:'Software Developer',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/20267177-Dave-File-Save-Solution-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=fanditgio&utm_content=Dave%20-%20File%20Save%20Solution%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=fanditgio&utm_content=Dave%20-%20File%20Save%20Solution%20Landing%20Page&utm_medium=Social_Share'
  },

]


const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id}className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
             <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo Project</a>
              </div>
                </article>
             )
          })
        }
          </div>
     </section>
  )
}

export default Portfolio
         

      
