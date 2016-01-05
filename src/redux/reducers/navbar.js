import {NAV_TOGGLE_MENU} from '../constants/index'

export const navbar = (state={}, action) => {
  switch (action.type) {
    case NAV_TOGGLE_MENU:
    let obj = {navMenuVisible:!state.navMenuVisible}
      return {...state, ...obj}
    default:
      return state
  }
}
