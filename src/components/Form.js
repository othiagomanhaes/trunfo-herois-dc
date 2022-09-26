import React from 'react';
import PropTypes from 'prop-types';

const { Component } = React;
const { string, bool, func } = PropTypes;

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="describeCard">
          <textarea
            data-testid="description-input"
            name="describeCard"
            id="describeCard"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber1">
          <input
            data-testid="attr1-input"
            type="number"
            name="cardNumber1"
            id="cardNumber1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber2">
          <input
            data-testid="attr2-input"
            type="number"
            name="cardNumber2"
            id="cardNumber2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber3">
          <input
            data-testid="attr3-input"
            type="number"
            name="cardNumber3"
            id="cardNumber3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardFile">
          <input
            data-testid="image-input"
            type="text"
            name="cardFile"
            id="cardFile"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarityCard">
          <select
            name="rarity"
            data-testid="rare-input"
            id="rarityCard"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="superTrunfo"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

Form.propTypes = {
  cardName: string,
  cardDescription: string,
  cardAttr1: string,
  cardAttr2: string,
  cardAttr3: string,
  cardImage: string,
  cardRare: string,
  cardTrunfo: bool,
  hasTrunfo: bool,
  isSaveButtonDisabled: bool,
  onInputChange: func,
  onSaveButtonClick: func,
};

export default Form;
