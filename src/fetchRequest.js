import Notiflix from 'notiflix';
function fetchCountries(name){

  const URL = `https://restcountries.com/v3.1/name/${name}?&fields=capital,population,languages,name,flags`
  return fetch(URL)
    .then(r=>{
      if(!r.ok){
        throw new Error(r.status)
      }
      return r.json();

    })
    .then(a=>{
    if (a.length>10){
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
    }
    return a
  }).catch(()=>{
      Notiflix.Notify.failure("Oops, there is no country with that name")
    })

}

export default fetchCountries