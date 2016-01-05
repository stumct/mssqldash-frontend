import {WINDOW_RESIZE} from '../constants/index'

export const appWindow = (state={}, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
    let obj = {width:action.width, height:action.height}
      return {...state, ...obj}
    default:
      return state
  }
}
