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
        <h4 data-testid="name-card">{cardName}</h4>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" id="describe">{cardDescription}</p>
        <p data-testid="attr1-card" className="attClass">{`Força ${cardAttr1}`}</p>
        <p data-testid="attr2-card" className="attClass">{`Poder ${cardAttr2}`}</p>
        <p data-testid="attr3-card" className="attClass">{`Inteligência ${cardAttr3}`}</p>
        <p data-testid="rare-card" id="raridade">{cardRare}</p>
        {cardTrunfo && (
          <div id="divSuper">
            <p><strong>Super</strong></p>
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
