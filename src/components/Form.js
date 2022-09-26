import React from 'react';

const { Component } = React;

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          <input data-testid="name-input" type="text" name="cardName" id="cardName" />
        </label>

        <label htmlFor="describeCard">
          <textarea
            data-testid="description-input"
            name="describeCard"
            id="describeCard"
          />
        </label>

        <label htmlFor="cardNumber1">
          <input
            data-testid="attr1-input"
            type="number"
            name="cardNumber1"
            id="cardNumber1"
          />
        </label>

        <label htmlFor="cardNumber2">
          <input
            data-testid="attr2-input"
            type="number"
            name="cardNumber2"
            id="cardNumber2"
          />
        </label>

        <label htmlFor="cardNumber3">
          <input
            data-testid="attr3-input"
            type="number"
            name="cardNumber3"
            id="cardNumber3"
          />
        </label>

        <label htmlFor="cardFile">
          <input
            data-testid="image-input"
            type="text"
            name="cardFile"
            id="cardFile"
          />
        </label>

        <label htmlFor="rarityCard">
          <select name="rarity" data-testid="rare-input" id="rarityCard">
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
          />
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;
