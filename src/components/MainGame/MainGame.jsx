import React, {Component} from 'react';
import { Jumbotron } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';
import '../MainGame/MainGame.css'



export default class MainGame extends Component {
    render() {
            return (
                <div>
      <Jumbotron style={{background: 'black'}}>
        <h3 className="my-2">Featured Game</h3>
        <div>
        <Image src={require("../../images/fightingGameplay.jpeg")} alt="" rounded/>
        <h4 style={{color: 'white'}}>RAGE 2</h4>
        
        </div>
        <hr className="my-2" />
        <p style={{color: 'white'}}>Rage 2 is one of the video gamiest video games I’ve ever played.

The game’s designers didn’t just borrow ideas from a couple iconic first-person shooters; They cribbed from the genre’s entire history.
 Good games, bad games, nearly forgotten ones. Remember that weapon from Dark Sector? Or that monster from Gears of War? Or that setting from Borderlands?
 Or that color palette from Sunset Overdrive?</p>
        
      </Jumbotron>
      
      <Card className='box' style={{ width: '18rem' }}>
      <CardImg variant="top" src={require("../../images/swordfight.jpeg")} />
  <CardBody>
    <CardTitle style={{fontWeight:'bold'}}>Chivalry: Medieval Warfare</CardTitle>
    <CardText>
    Well-placed killing blows send limbs and heads flying, 
    accompanied by fountains of blood spewing from drippy stumps that call to mind the iconic Black Knight duel in Monty Python and the Holy Grail. 
    It's hilarious at times and excessively gruesome. 
    </CardText>
    
  </CardBody>
</Card>
<Card className='box' style={{ width: '18rem' }}>
  <CardImg variant="top" src={require("../../images/godfight.jpeg")} />
  <CardBody>
    <CardTitle style={{fontWeight:'bold'}}>God of War</CardTitle>
    <CardText>
     The Shining, The Social Network, and Jaws are all excellent examples of films made up of strong individual parts complementing each other to form a fantastic work of art. That is absolutely true of God of War

 </CardText>
    
  </CardBody>
</Card>
</div>
  )
};

};
            
   
