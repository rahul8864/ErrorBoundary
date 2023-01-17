// import React from 'react';

// class BuggyCounter extends React.Component {
//     state = {
//         counter: 0,
//     };

//     handleClick = () => {
//         this.setState({
//             counter: this.state.counter + 1,
//         });
//     };

//     render() {
//         if (this.state.counter === 5) {
//             // Simulate an error!
//             throw new Error('Simulated error.');
//         }
//         return (
//             <div>
//                 <h1>{this.state.counter}</h1>
//                 <button onClick={this.handleClick}>+</button>
//             </div>
//         );
//     }
// }

// export default BuggyCounter;

import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }

  export default BuggyCounter;