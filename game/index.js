import {Map} from 'immutable';

//type constants
const MOVE = 'move';
const START = 'start';


//action creators
export const move = (player, position) => {
  return {
    type: MOVE,
    position,
    player
  }
}

let alternate = (player) => {
  player === 'X' ? player = 'O' : player = 'X';
  return player;
};

export default function reducer(state = {board: Map(), turn: 'X'}, action) {
    console.log('action', action)
    if (action.type === MOVE) {
      return {
        board: state.board.setIn(action.position, action.player),
        turn: alternate(action.player)
      }
    } //else if (action.type === START) {
    //     return state
    //   }
  return state;
}



