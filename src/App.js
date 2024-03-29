import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './app.css';
import Footer from './components/Footer';

const lodash = require('lodash');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
      buscaNome: '',
      cardRareFilter: 'Todas',
      superTruFilter: false,
      totalPoints: 210,
    };
  }

  componentDidMount() {
    document.title = "Trunfo Herois DC";
    const temBaralho = localStorage.getItem('cards');
    if (temBaralho) {
      const baralhoArray = JSON.parse(temBaralho);
      this.setState({ cardList: baralhoArray });
      baralhoArray.forEach(({ cardTrunfo }) => (cardTrunfo ? this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      }) : null));
    } else {
      const listDefault = '[{"cardName":"Batman","cardDescription":"Cavaleiro das trevas, justiceiro de Gotham.","cardImage":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg","cardRare":"Muito Raro","cardAttr1":"15","cardAttr2":"20","cardAttr3":"85","cardTrunfo":false},{"cardName":"Superman","cardDescription":"Filho de Krypton, homem de aço.","cardImage":" https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/644-superman.jpg","cardRare":"Muito Raro","cardAttr1":"80","cardAttr2":"85","cardAttr3":"45","cardTrunfo":true},{"cardName":"Aquaman","cardDescription":"Rei dos mares, Rei de Atlanta.","cardImage":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/38-aquaman.jpg","cardRare":"Normal","cardAttr1":"60","cardAttr2":"65","cardAttr3":"40","cardTrunfo":false},{"cardName":"Wonder Woman","cardDescription":"Rainha das amazonas, princesa de Themyscira.","cardImage":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg","cardRare":"Muito Raro","cardAttr1":"70","cardAttr2":"73","cardAttr3":"67","cardTrunfo":false},{"cardName":"Black Adam","cardDescription":"Rei e campeão de Kahndaq, primeiro campeão do Mago Shazam.","cardImage":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/95-black-adam.jpg","cardRare":"Normal","cardAttr1":"74","cardAttr2":"79","cardAttr3":"40","cardTrunfo":false},{"cardName":"Flash","cardDescription":"O homem mais rápido do mundo. Membro da liga da justiça.","cardImage":"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/265-flash-ii.jpg","cardRare":"Raro","cardAttr1":"50","cardAttr2":"83","cardAttr3":"77","cardTrunfo":false}]';
      const listDefaultArr = JSON.parse(listDefault);
      // this.setState({ cardList: listDefaultArr });
      this.setState({ cardList: listDefaultArr });
      listDefaultArr.forEach(({ cardTrunfo }) => (cardTrunfo ? this.setState({
        cardTrunfo: false,
        hasTrunfo: true,
      }) : null));
    }
  }

  filtraTudo = () => {
    const { cardList, buscaNome, cardRareFilter, superTruFilter } = this.state;
    if (superTruFilter) {
      return cardList.filter(({ cardTrunfo }) => cardTrunfo);
    }
    if (buscaNome) {
      return cardList.filter(({ cardName }) => (cardName.includes(buscaNome)));
    }
    if (cardRareFilter) {
      return cardList.filter(({ cardRare }) => {
        if (cardRareFilter === 'Todas') {
          return cardList;
        }
        return cardRare === cardRareFilter;
      });
    }
    return cardList;
  };

  deleteCard = (carta) => {
    const { cardList } = this.state;
    const arrDasCards = cardList;

    const { cardTrunfo } = carta;

    if (cardTrunfo) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }

    const arrFiltered = arrDasCards.filter((card) => (card.cardName !== carta.cardName));

    localStorage.setItem('cards', JSON.stringify(arrFiltered));
    const newCardList = localStorage.getItem('cards');

    this.setState(() => ({
      cardList: JSON.parse(newCardList),
    }));
  };

  verificaCardTrunfo = () => {
    this.setState(() => ({
      hasTrunfo: true,
      cardTrunfo: false,
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

    const temCard = localStorage.getItem('cards');

    if (temCard) {
      const asCartas = JSON.parse(temCard);
      localStorage.setItem('cards', JSON.stringify([...asCartas, newCard]));
    } else {
      localStorage.setItem('cards', JSON.stringify([newCard]));
    }

    const baralho = localStorage.getItem('cards');

    this.setState(({
      cardList: JSON.parse(baralho),
    }));

    if (cardTrunfo) this.verificaCardTrunfo();

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'Normal',
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

    this.setState({ totalPoints: totNum - lodash.sum(arrAtt) });
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
    const { isSaveButtonDisabled, buscaNome, cardRareFilter } = this.state;
    const { superTruFilter, totalPoints } = this.state;

    return (
      <div>
        <h1 className="tituloTryunfo">Tryunfo DC</h1>
        <div id="divCriaCard">
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
            totalPoints={ totalPoints }
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
        <section>
          <h3 id="todasCartas">Todas as cartas</h3>

          <div id="divFiltros">
            <input
              type="text"
              name="buscaNome"
              value={ buscaNome }
              disabled={ superTruFilter }
              data-testid="name-filter"
              placeholder="Busque a carta"
              onChange={ this.handleTudo }
            />

            <select
              name="cardRareFilter"
              value={ cardRareFilter }
              disabled={ superTruFilter }
              data-testid="rare-filter"
              onChange={ this.handleTudo }
            >
              <option value="Todas">Todas</option>
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>

            <label htmlFor="superT" id="labelFiltroTrunfo">
              Super Trunfo
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                name="superTruFilter"
                checked={ superTruFilter }
                id="superT"
                onChange={ this.handleTudo }
              />
            </label>
          </div>

          <div className="oBaralho">
            {this.filtraTudo()
              .map((card) => (
                <div key={ card.cardName } className="cardSalvo">
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardImage={ card.cardImage }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    id="btnDelteCard"
                    data-testid="delete-button"
                    key={ card.cardName }
                    type="button"
                    onClick={ () => this.deleteCard(card) }
                  >
                    Excluir
                  </button>
                </div>
              ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
