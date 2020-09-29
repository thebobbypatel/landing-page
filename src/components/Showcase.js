import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';


const Showcase = () => {
    return (
        <section class="showcase">
        
        <div>
          <div className="row">
            <div className="column">
              <div classname="showcase-padding">
                <p className="showcase-title">Fully Responsive Design</p>
                <p className="showcase-text">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
              </div>
            </div>
            <div className="column">
              <img className="showcase-img" src={require('../assets/bg-showcase-1.jpg')} alt="missing-image"/>
            </div>
          </div>

          <div className="row-flipped">
            <div className="column">
              <img className="showcase-img" src={require('../assets/bg-showcase-2.jpg')} alt="missing-image"/>
            </div>
            <div className="column">
              <div>
                <p className="showcase-title">Updated For Bootstrap 4</p>
                <p className="showcase-text">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
              </div>
            </div>  
          </div>

          <div className="row">
            <div className="column">
              <div>
                <p className="showcase-title">Easy to Use &amp; Customize</p>
                <p className="showcase-text">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
              </div>
            </div>
            <div className="column">
              <img className="showcase-img" src={require('../assets/bg-showcase-3.jpg')} alt="missing-image"/>
            </div>
          </div>

        </div>

      </section>
    )
}

export default Showcase

