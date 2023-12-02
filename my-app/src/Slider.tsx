import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './App.css'
import { Container } from 'react-bootstrap';
import CommonButton from './common/CommonButton';
import { useState } from 'react';

function Slider() {
   
  const Carousel_data = [
    {
      Image: "https://assets.airtrfx.com/media-em/ul/Default-2.jpg?width=400&height=300&quality=80&format=auto&opt=true",
      CardTitle: "Card Title",
      CardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      Image: "https://assets.airtrfx.com/media-em/ul/Default-2.jpg?width=400&height=300&quality=80&format=auto&opt=true",
      CardTitle: "Card Title",
      CardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      Image: "https://assets.airtrfx.com/media-em/ul/Default-2.jpg?width=400&height=300&quality=80&format=auto&opt=true",
      CardTitle: "Card Title",
      CardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]
  return (
    <Container>
      <Carousel className='main-div py-5'>
        <Carousel.Item>
          <div className='d-flex gap-5 justify-content-center'>
            {Carousel_data.map((item, index) => (
              <div key={index}>
                <Card className="card_main_div">
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title>{item.CardTitle}</Card.Title>
                    <Card.Text>{item.CardText}</Card.Text>
                    <CommonButton type="submit" className="btn btn-primary" variant="variant" onClick={() => console.log('book now')}>
                      Book now
                    </CommonButton>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex gap-5 justify-content-center'>
            {Carousel_data.map((item, index) => (
              <div key={index}>
                <Card className="card_main_div">
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title>{item.CardTitle}</Card.Title>
                    <Card.Text>{item.CardText}</Card.Text>
                    <CommonButton type="submit" className="btn btn-primary" variant="variant" onClick={() => console.log('book now')}>
                      Book now
                    </CommonButton>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='d-flex gap-5 justify-content-center'>
            {Carousel_data.map((item, index) => (
              <div key={index}>
                <Card className="card_main_div">
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title>{item.CardTitle}</Card.Title>
                    <Card.Text>{item.CardText}</Card.Text>
                    <CommonButton type="submit" className="btn btn-primary" variant="variant" onClick={() => console.log('book now')}>
                      Book now
                    </CommonButton>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;