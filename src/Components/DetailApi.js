

import React, {Component} from 'react';
import '../ProjectCss/Details.css'
import Body from './Body.js'

class DetailApi extends Component 
{
   
    constructor()
    {
        super();
        this.state = {
            details: [],
            flag: false
        };
    }

    componentDidMount()
    {
        
        var  url = 'https://api.coingecko.com/api/v3/coins/' + this.props.nameId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                flag: true,
                details: json
            })
        });
    }

    
    render()
    {
        var {details, flag} = this.state;
        
    
        if(!flag){
            
            return <div>Loading...</div>
        }
        
        else
        {
            return (
                <div className="load">
                    <header className="Header">
                      {details.name} - {details.symbol}
                    </header>
                    <div className="container-fluid Body">
                        <div className="row">
                            <div className="col-sm-3">
                                <Body details={details}/>
                            </div>
                            <div className="col-sm-9">
                                <div className="container description">
                                    
                                    <div dangerouslySetInnerHTML={{ __html: details.description.en }} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            )
        }
    }
    }

export default DetailApi;
