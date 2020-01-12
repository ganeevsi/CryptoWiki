import React, {Component} from 'react';
import Heading from './Heading.js';

class ListApi extends Component {

    constructor()
    {
        super();
        this.state = {
            items: [],
            flag: false
        };
    }

    componentDidMount()
    {
    
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                flag: true,
                items: json
            })
        });
    }


    render()
    {
        var {flag, items} = this.state;
        if(!flag)
        {
            return <div>Loading the coin list</div>
        }
        else{
            return(
                <Heading items = {items}/>
            )
        }
        
    }

}

export default ListApi;
