// import React from 'react';
// import BuggyCounter from './BuggyCounter';
// import MyErrorBoudnary from './MyErrorBoundary';

// class App extends React.Component {
//   refreshPage = () => {
//     window.location.reload()
//     // history.go(0);
//   };

//   render() {
//     return (
//       <div>
//         <MyErrorBoudnary>
//           <BuggyCounter />
//         </MyErrorBoudnary>
//         <hr />
//         <button onClick={this.refreshPage}>Refresh Page</button>
//       </div>
//     );
//   }
// }

// export default App;

import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

export default function App() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <BuggyCounter/>
      {/* <ErrorBoundary> */}
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        {/* <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      {/* <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary> */}
    </div>
  );
}