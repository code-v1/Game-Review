import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import './Maingame.css'


const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-1">Featured Game</h3>
        <div>
        <Image src={require("../../images/fightingGameplay.jpeg")} alt="" rounded/>
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
    </div>
  );
};

export default Example;