import React, {Component} from 'react';

import '../ProjectCss/Body.css';

class Body extends Component 
{
    render()
    {

        var details = this.props.details;
        return(
            <div className="left">
                
                <img src={details.image.large} alt={details.name}></img>
              
                <ul className="side">
                    <li>Country of Origin - {details.country_origin}</li>
                    <li>Market Cap Rank - {details.market_cap_rank}</li>
                    <li>Date of Appearance - {details.genesis_date}</li>
                    <li>Coin Gecko - 
                        <ul>
                            <li>Rank - {details.coingecko_rank}</li>
                            <li>Score - {details.coingecko_score}</li>
                        </ul>
                        
                    </li>
                    <li>Developer Score - {details.developer_score}</li>
                    <li>Community Score - {details.community_score}</li>
                    <li>Liquidity Score - {details.liquidity_score}</li>
                    <li>Public Interest Score - {details.public_interest_score}</li>
                </ul>
            </div>
        )
    }
}

export default Body;
