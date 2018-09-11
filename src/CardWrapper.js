import React, { Component  } from 'react';
import "./App.scss";

class CardWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	componentDidMount() {
		this.setupCards();

	}

	componentDidUpdate() {
		this.setupCards();

	}


	setupCards() {
		var container = document.querySelector('.container');
		var allCards = document.querySelectorAll('.card_container');
		var newCards = document.querySelectorAll('.card_container:not(.removed)');
		newCards.forEach(function (card, index) {
			card.style.zIndex = allCards.length - index;
			card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
			card.style.opacity = (10 - index) / 10;


		});
		container.classList.add('loaded');

	}

	renderCards() {
		return React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, { superOnSwipe: this.superOnSwipe.bind(this)   })

		});

	}

	renderEndCard() {
		if(this.props.addEndCard) {
			return(
				<div className="card_container end_card">
					{this.props.addEndCard()}
				</div>

			);

		}

	}

	superOnSwipe() {
		this.setupCards();

	}

	render() {
		return (
			<div className="container">
				<div className="cards_container">
					{this.renderCards()}
					{this.renderEndCard()}
				</div>
			</div>

		);

	}

}

export default CardWrapper;
