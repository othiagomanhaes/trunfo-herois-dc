import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './form.css';

const { string, bool, func, number } = PropTypes;

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    const { totalPoints } = this.props;

    return (
      <form className="newCard">
        <h2 id="titleAddCard">Adicione Nova Carta</h2>
        <label htmlFor="cardName" className="labelIdentify">
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

        <label htmlFor="describeCard" className="labelIdentify">
          <p>Descrição:</p>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="describeCard"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber1" className="labelAtributo">
          <p>Força</p>
          <input
            className="classAtributo"
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="cardNumber1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber2" className="labelAtributo">
          <p>Poder</p>
          <input
            className="classAtributo"
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="cardNumber2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardNumber3" className="labelAtributo">
          <p>Inteligência</p>
          <input
            className="classAtributo"
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="cardNumber3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <p onChange={ onInputChange }>{`Pontos restantes: ${totalPoints}`}</p>
        <label htmlFor="cardFile" className="labelAtributo">
          <p>Imagem</p>
          <input
            className="classAtributo"
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="cardFile"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarityCard" className="labelRarity">
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

        <div className="divTrunfoButton">
          {
            !hasTrunfo ? (
              <label htmlFor="superTrunfo">
                Super Trunfo
                <input
                  data-testid="trunfo-input"
                  type="checkbox"
                  name="cardTrunfo"
                  id="superTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>) : <p>Você já tem um Super Trunfo em seu baralho</p>
          }

          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>


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
  cardAttr1: number.isRequired,
  cardAttr2: number.isRequired,
  cardAttr3: number.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func,
  onSaveButtonClick: func,
};

export default Form;
