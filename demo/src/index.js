import React, {Component} from 'react'
import {render} from 'react-dom'
import { Card, CardWrapper } from '../../src/index'

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "React-Swipe-Card",
			messageButton: "Add End Card",
			showEndCard: false
		}
	}

	onSwipeLeft(data) {
		this.setState({
			message: "You Swiped Left " + data.title
		});
	}

	onSwipeRight(data) {
		this.setState({
			message: "You Swiped Right " + data.title
		});
	}

	onDoubleTap(data) {
		this.setState({
			message: "You Double Tapped " + data.title
		});
	}

	addEndCard() {
		let titleStyle = {
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "50px",
			fontFamily: "Sans-Serif",
			marginTop: "10px"
		};
		return(
			<div style={titleStyle}>
				You Finished Swiping!
			</div>
		);
	}

	changeEndCardState(e) {
		e.preventDefault();
		let showingEndCard = this.state.showEndCard;
		let message = showingEndCard ? "Add End Card" : "Remove End Card";
		this.setState({
			messageButton: message,
			showEndCard: !showingEndCard
		});
	}

	renderCards() {
		let data = [{id: 1, title: "First"},{id: 2, title: "Second"},{id: 3, title: "Third"}];
		let titleStyle = {
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "50px",
			fontFamily: "Sans-Serif",
			marginTop: "10px"
		};
		return data.map((d) => {
			return(
				<Card 
					key={d.id}
					data={d}
					onSwipeLeft={this.onSwipeLeft.bind(this)}
					onSwipeRight={this.onSwipeRight.bind(this)}
					onDoubleTap={this.onDoubleTap.bind(this)}
				>
					<div style={titleStyle}>
						{d.title}
					</div>
				</Card>
			);
		});
	}

	render() {
		let wrapperStyle = {
			backgroundColor: "#024773",
			height: "80vh"
		};
		let containerStyle = {
			backgroundColor: "#024773",
			height: "calc(100vh - 16px)"
		}
		let messageStyle = {
			color: "white",
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "2vw",
			fontFamily: "Sans-Serif",
		}
		let buttonStyle = {
			textAlign: "center",
			marginTop: "10px"
		}
		return(
			<div style={containerStyle}>
				<CardWrapper style={wrapperStyle} addEndCard={this.state.showEndCard ? this.addEndCard.bind(this) : null}>
					{this.renderCards()}
				</CardWrapper>
				<div style={messageStyle}>{this.state.message}</div>
				<div style={{textAlign: "center"}}><button style={buttonStyle} onClick={this.changeEndCardState.bind(this)}>{this.state.messageButton}</button></div>
			</div>
		);
	}
}

render(<Demo/>, document.querySelector('#demo'))
