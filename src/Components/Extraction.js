import React, {Component} from 'react';
import DetailApi from './DetailApi.js'


class Extraction extends Component
 {

    render()
    {

        var items = this.props.items;
        var name = this.props.name;
        var btnClicked = this.props.btnClicked;

        var nameId = -1;
            for(var i=0; i<items.length; i++){
                if(items[i].name === name || items[i].id===name){
                    nameId = items[i].id;
                        break;
            }
    }
        if(btnClicked)
        {
            if(nameId === -1)
            {
                return(
                    
                    <div>Sorry, the coin does not exist</div>
                )
            }
            else
            {
                return (

                    <div className="load"> 
                <DetailApi nameId = {nameId}/>
                    </div>
                )
            }   
        }
        
        else 
        {
            return(

                <div>Search for a coin</div>
            )
        }
    }
}

export default Extraction;