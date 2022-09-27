const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16c4865cd0msh426323ab2dd362fp1449c0jsn5aa772e9f8e2',
    'X-RapidAPI-Host': '',
  },
}

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
