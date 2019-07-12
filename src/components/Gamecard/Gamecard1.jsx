import React from 'react';
import './Gamecard.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const Gamecard = (props) => {
  return (
    <Card className='box' style={{ width: '18rem' }}>
  <CardImg variant="top" src={require("../../images/swordfight.jpeg")} />
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button variant="primary">More</Button>
  </CardBody>
</Card>
  );
};

export default Gamecard;