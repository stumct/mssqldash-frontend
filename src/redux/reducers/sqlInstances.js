import {UPDATE_INSTANCE_INFO} from '../constants/index'

export const sqlInstances = (state={}, action) => {
  switch (action.type) {
    case UPDATE_INSTANCE_INFO:
    let obj = {}
    obj[action.instance] = action.data;
      return {...state, ...obj}
    default:
      return state
  }
}
