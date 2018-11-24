import React from 'react';
import defaultImg from './img/default.png';
import gold from './img/gold.png';
import silver from './img/silver.png';
import bronz from './img/bronz.png';

const Card = ({ name, location, id, img, rep, badges, link }) => {
    // const { name, email, id } = props;
    let Bdgs = '';
    if (badges !== undefined) {
        Bdgs = () => {
            return (
                <span>
                    <img alt='G' src={gold} width='12px' height='12x' /> { badges.gold } &nbsp;
                    <img alt='S' src={silver} width='12px' height='12x' /> { badges.silver } &nbsp;
                    <img alt='B' src={bronz} width='12px' height='12x' /> { badges.bronze } 
                </span>
            );
        }
    } else {
        Bdgs = () => <p></p>
    }
    return (
        <a href={link} rel="noopener noreferrer" target='_blank'>
            <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow5'>
                <img alt='pic' src={(img === '' ? defaultImg : img)} width='150px' height='150px' />
                <div>
                    <h2>{name}</h2>
                    <h3>Reputation: { rep }</h3>
                    <Bdgs />
                    <p>{location}</p>
                </div>
            </div>
        </a>
    );
}

export default Card;

// import React, { Component } from 'react';

// class Card extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }
