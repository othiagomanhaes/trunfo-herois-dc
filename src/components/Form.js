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
        <h2>Adicione Nova Carta</h2>
        <label htmlFor="cardName">
          <p>Nome:</p>
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
          <p>Descrição:</p>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="describeCard"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber1">
          <p>Atributo 1</p>
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="cardNumber1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber2">
          <p>Atributo 2</p>
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="cardNumber2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber3">
          <p>Atributo 3</p>
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="cardNumber3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardFile">
          <p>Imagem</p>
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="cardFile"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarityCard">
          <p>Raridade</p>
          <select
            name="cardRare"
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
          { !hasTrunfo ? <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          /> : 'Você já tem um Super Trunfo em seu baralho'}
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
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func,
  onSaveButtonClick: func,
};

export default Form;
