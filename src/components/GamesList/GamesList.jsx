import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import './GamesList.css';

const Game = props => (
  <tr>
    <td>{props.game.title}</td>
    <td>{props.game.description}</td>
    <td>{props.game.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.game._id}>edit</Link> | <a href="/" onClick={() => { props.deleteGame(props.game._id) }}>delete</a>
    </td>
  </tr>
)


export default class GamesList extends Component {
    constructor(props) {
        super(props);

        this.deleteGame = this.deleteGame.bind(this);

        this.state = {games: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/games/')
            .then(response => {
                this.setState({ games: response.data })
            })
            .catch((error) => {
                console.log(error);
            
            })
    }

    deleteGame(id) {
        axios.delete('http://localhost:3001/games/'+id)
            .then(response => {console.log(response.data)});

        this.setState({
            games: this.state.games.filter(el => el._id !== id)
        })
    }

    gamesList() {
        return this.state.games.map(currentgame => {
            return <Game game={currentgame} deleteGame={this.deleteGame} key={currentgame._id}/>;
        })
    }

    render()
{
            return (
                <div>
        <h3>Games Reviewed</h3>
        <table className="table">
          <thead className="table">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.gamesList() }
          </tbody>
        </table>
      </div>
            )};
};
            
