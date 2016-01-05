import {WINDOW_RESIZE} from '../constants/index.js'

export function resizeWindow(width, height){
  return {
    type: WINDOW_RESIZE,
    width: width,
    height: height
  }
}
