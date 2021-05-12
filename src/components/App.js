import {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((_, i) => {
        return i !== index;
      }),
    });
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table charactersData={characters}
        removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;