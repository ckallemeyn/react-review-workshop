import React from 'react';
import List from './List.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.first,
      last: this.props.last,
    }
    this.changeFirst= this.changeFirst.bind(this);
    this.changeLast= this.changeLast.bind(this);
  }
  changeFirst(e) {
    this.setState({
      first: e.target.value
    });
  }
  changeLast(e){
    this.setState({
      last: e.target.value
    });
  }


  render() {
// check if first and last name equal my first and last name
    if (this.state.first === 'Chase' && this.state.last === 'Kallemeyn') {
      return (
        <div>
          <input type="text" placeholder="first" onChange={this.changeFirst}/>
          <br></br>
          <input type="text" placeholder="last" onChange={this.changeLast}/>
          <button type="submit"> Submit </button>
          {this.state.first} {this.state.last}
          <div className="list"> <List/> </div>
        </div>
      )
    }

    return (
      <div>
        <input type="text" placeholder="first" onChange={this.changeFirst}/>
        <br></br>
        <input type="text" placeholder="last" onChange={this.changeLast}/>
        <button type="submit"> Submit </button>
        {this.state.first} {this.state.last}
      </div>
    )
  }
}

export default App;