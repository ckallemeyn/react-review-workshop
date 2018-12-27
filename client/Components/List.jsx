import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: 'Mario',
      list: []
    }
    this.changeCharacterName = this.changeCharacterName.bind(this);
    this.clickedItem = this.clickedItem.bind(this);
  }

// handleKeyPress(e)  {
//   if (e.key === 'Enter') {
//     console.log('do validate');
//     console.log(e.target.value);
//   }
// }

changeCharacterName() {
  console.log('context for this:', this);
  console.log(this.refs.textInput.value);
  var query = this.refs.textInput.value;
    this.setState({
      characterName: query,
    });
    // store character names into list array
    this.state.list.push(query);
    console.log(this.state.list);
}

clickedItem() {
  console.log('Item clicked');
}


  render() {
    return (
      <div>
      Character name: {this.state.characterName}
        <input className='marioCharacters' ref='textInput' type="text" placeholder="Mario characters"/>
        <br></br>
        <input type='button' value='submit' onClick={this.changeCharacterName}></input>
        <ul>
          <ListEntry characterList={this.state.list} logged={this.clickedItem}/>
        </ul>
      </div>
    )
  }
}

export default List;