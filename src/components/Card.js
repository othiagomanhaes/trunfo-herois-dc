import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const { Component } = React;
const { string, bool, number } = PropTypes;

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="preCard">
        <h4 data-testid="name-card" className="nomeHeroi">{cardName}</h4>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } className="imgHero" />
        <p data-testid="description-card" className="describe">{cardDescription}</p>
        <div id="divAllAtt">
          <div className="divAtt">
            <p>Força</p>
            <p data-testid="attr1-card" className="attClass">{cardAttr1}</p>
          </div>

          <div className="divAtt">
            <p>Poder</p>
            <p data-testid="attr2-card" className="attClass">{cardAttr2}</p>
          </div>

          <div className="divAtt">
            <p>Inteligência</p>
            <p
              data-testid="attr3-card"
              className="attClass"
            >
              {cardAttr3}
            </p>
          </div>

        </div>
        <p data-testid="rare-card" className="raridade">{cardRare}</p>
        {cardTrunfo && (
          <div id="divSuper">
            <img data-testid="trunfo-card" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad36332-03b9-4804-aad7-acc8455a1109/d42tpe1-a02bdea4-630a-4099-90f4-4dbb5d0983b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhZDM2MzMyLTAzYjktNDgwNC1hYWQ3LWFjYzg0NTVhMTEwOVwvZDQydHBlMS1hMDJiZGVhNC02MzBhLTQwOTktOTBmNC00ZGJiNWQwOTgzYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wpMxGvw4yKLHNsRNdsbInIpp4qdur26edk4YuMM8284" alt="logo da DC" id="superTrunfo" />
          </div>)}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: number.isRequired,
  cardAttr2: number.isRequired,
  cardAttr3: number.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};

export default Card;
