import React  from 'react';
import reactDOM from 'react-dom';
import App from './Components/App.jsx';


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         WOO LOOK AT ME! I'm the app component
//       </div>
//     )
//   }
// }

reactDOM.render(<App first={'James'} last={'Bond'}/>, document.getElementById('root'));



