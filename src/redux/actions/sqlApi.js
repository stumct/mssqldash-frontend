import {UPDATE_INSTANCE_INFO}
from '../constants/index'

export function fetchInstanceInfo(instance) {
  return fetch('http://localhost:8081/api/'+instance+'/');
}

export function getInstanceInfo(instance) {
  return function(dispatch) {
    return fetchInstanceInfo(instance)
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        json => dispatch(updateInstanceInfo(instance, json.data[0]))
      )
  };
}

function updateInstanceInfo(instance, data) {
  return {
    type: UPDATE_INSTANCE_INFO,
    instance: instance,
    data: data
  }
}
