// import React, { Component } from 'react';
// import './app.css';

// class Square extends Component {
//   render() {
//     return <button className='square'>{/* TODO */}</button>;
//   }
// }

// const renderSquare = () => {
// class Board extends Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className='status'>{this.props.value}</div>
//         <div className='board-row'>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className='game'>
//         <div className='game-board'>
//           <Board />
//         </div>
//         <div className='game-info'>
//           <div>{/* status */}</div>
//           <div>{/* TODO */}</div>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// )
