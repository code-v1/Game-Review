import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import './CreateGame.css';


export default class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            date: new Date()
            
        }
    }

    // componentDidMount() {
    //     axios.get('http://localhost:3000/games/')
    //         .then(response => {
    //             if (response.data.length > 0) {
    //                 this.setState({
                        
    //                 })
    //             }
    //         })

    //     })
    // }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const game = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date

        }
        console.log(game);
        
        axios.post('http://localhost:3001/games/add', game)
        .then(res => console.log(res.data));

        this.setState({
            title:'',
            description:'',
            date: ''
        })
        
        // window.location = '/GamesList';
    }
    render()
{
            return (
            <div>
      <h3>Create Game Review</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title</label>
          <input type='text' 
                required
                className='form-control'
                value={this.state.title}
                onChange={this.onChangeTitle}
          />
              
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Game Review" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
};
};