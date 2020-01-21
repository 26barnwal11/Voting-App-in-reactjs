import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			languages : [
				{name: "C++", votes: 0},
				{name: "Python", votes: 0},
				{name: "JavaScript", votes: 0},
				{name: "Java", votes: 0}
			]
		}
	}

	vote (i) {
		let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
				<h1>Vote Your Language!</h1>
				<div className="languages">
					{
						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );