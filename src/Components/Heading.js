import React, {Component} from 'react';
import '../ProjectCss/Heading.css';
import Extraction from './Extraction.js';
class Heading extends Component {
  
    constructor()
    {
        super();
        this.state = {
            name: '',
            btnClicked: false
        }
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
       
        this.setState({btnClicked: false})
    }

    
    buttonHandler = (e) => 
    {
        const state = this.state;
        this.setState({btnClicked: true});
    }

    render()
    {
        const {name, btnClicked} = this.state;
    
        return(
            <div className="headingStyles">
          
              <div className="input-group input-group-sm">
                  <input type="text" placeholder="Enter the Crypto Currency name" name="name" id="name" className="form-control" onChange={this.inputChangeHandler}/>
                  <button className="btn btn-success btn-sm" onClick={this.buttonHandler.bind(this)}>Get Info about coin</button>
              </div>
        
              <Extraction items={this.props.items} name={name} btnClicked={btnClicked}/>

            </div>
        )
    }

}

export default Heading;
