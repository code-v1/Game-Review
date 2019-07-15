import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';


export default class GamesList extends Component {
    render()
{
            return (
                <div>
      <Jumbotron>
        <h3 className="display-1">Featured Game</h3>
        <div>
        <Image src={require("../../images/fightingGameplay.jpeg")} alt="" rounded/>
        <h3>RAGE 2</h3>
        
        </div>
        <hr className="my-2" />
        <p>Rage 2 is one of the video gamiest video games I’ve ever played.

The game’s designers didn’t just borrow ideas from a couple iconic first-person shooters; They cribbed from the genre’s entire history.
 Good games, bad games, nearly forgotten ones. Remember that weapon from Dark Sector? Or that monster from Gears of War? Or that setting from Borderlands?
 Or that color palette from Sunset Overdrive?</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      
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
<Card className='box' style={{ width: '18rem' }}>
  <CardImg variant="top" src={require("../../images/godfight.jpeg")} />
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button variant="primary">More</Button>
  </CardBody>
</Card>
<Card className='box' style={{ width: '18rem' }}>
  <CardImg variant="top" src={require("../../images/gtaV.jpeg")} />
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button variant="primary">More</Button>
  </CardBody>
</Card>
</div>
  )
};

};
