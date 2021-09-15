fetch("http://192.168.1.18:8080/creative")
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));