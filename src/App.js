import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const lodash = require('lodash');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  verificaCardTrunfo = () => {
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      isSaveButtonDisabled: true,
      hasTrunfo: true,
    }));
  };

  salvaCard = (evt) => {
    evt.preventDefault();
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((stateBefore) => ({
      cardList: [...stateBefore.cardList, newCard],
    }));

    if (cardTrunfo) this.verificaCardTrunfo();

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      isSaveButtonDisabled: true,
    }));
  };

  habilitaBtnSave = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arrayTextos = [cardName, cardDescription, cardImage, cardRare];
    const textos = arrayTextos.every((txt) => txt.length > 0);

    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxNum = 90;
    const minNum = 0;
    const totNum = 210;
    const atributos = [cardAttr1, cardAttr2, cardAttr3];

    const arrAtt = atributos.map((att) => (
      parseInt(att, 10)
    ));

    // https://www.delftstack.com/pt/howto/javascript/javascript-sum-of-array/
    const somaAtt = lodash.sum(arrAtt) <= totNum;

    const numeros = atributos.every((num) => num >= minNum && num <= maxNum);

    if (somaAtt && numeros && textos) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  handleTudo = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.habilitaBtnSave());
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          onChange={ this.handleTudo }
          onInputChange={ this.handleTudo }
          onSaveButtonClick={ this.salvaCard }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
