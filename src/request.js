import axios from 'axios';

export default function(query) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/graphql', { query })
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

export const requestWithVariables = (query, variables) => {
  return new Promise((resolve,reject) =>{
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://localhost:4000/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = () => {resolve(xhr.response)}
    xhr.send(JSON.stringify({query:query, variables: variables}));
  })
}
