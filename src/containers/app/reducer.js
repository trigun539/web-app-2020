import { TOGGLE_MENU } from './actions'

const initialState = {
  menuOpened: true
}

export default function config(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      const newState = { ...state, menuOpened: !state.menuOpened }

      return newState
    }
    default:
      return state
  }
}
