import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';

const Icons = () => {
    return (
        <section className="features-icons">
          
          <div className="icon-rows">
            


              <div className="features-icons-item">
                <div className="features-icons-icon">
                  <i className="icon-screen-desktop"></i>
                </div>
                <p className="features-icons-title">Fully Responsive</p>
                <p className="features-icons-text">This theme will look great on any device, no matter the size!</p>
              </div>

            

              <div className="features-icons-item">
                <div className="features-icons-icon">
                  <i className="icon-layers"></i>
                </div>
                <p className="features-icons-title">Bootstrap 4 Ready</p>
                <p className="features-icons-text">Featuring the latest build of the new Bootstrap 4 framework!</p>
              </div>

            

              <div className="features-icons-item">
                <div className="features-icons-icon">
                  <i className="icon-check"></i>
                </div>
                <p className="features-icons-title">Easy to Use</p>
                <p className="features-icons-text">Ready to use with your own content, or customize the source files!</p>
              </div>



          </div>


      </section>
    )
}

export default Icons