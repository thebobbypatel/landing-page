import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';


const Testimonials = () => {
    return (
        <section class="testimonials">
            <Row className="testimonial-row">
                <h1 className="testimonials-header">What people are saying...</h1>
            </Row>
            <Row className="testimonial-row">
                <Col span={6} className="testimonial-item">
                    <img src={require('../assets/testimonials-1.jpg')}/>
                    <h3>Margaret E.</h3>
                    <p>"This is fantastic! Thanks so much guys!"</p>
                </Col>
                <Col span={6} className="testimonial-item">
                    <img src={require('../assets/testimonials-2.jpg')}/>
                    <h3>Fred S.</h3>
                    <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </Col>
                <Col span={6} className="testimonial-item">
                    <img src={require('../assets/testimonials-3.jpg')}/>
                    <h3>Sarah W.</h3>
                    <p>"Thanks so much for making these free resources available to us!"</p>
                </Col>
            </Row>
        </section>
    )
}

export default Testimonials