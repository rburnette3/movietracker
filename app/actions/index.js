export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    data: movies
  }
}

export const cleanData =(array) => {
  return array.map(movie => {
    return{
      movieId: movie.id,
      title: movie.title,
      date: movie.release_date,
      desc: movie.overview,
      score: movie.vote_average,
      image: movie.poster_path,
      fav: false,
    }
  })
}

export const moviesFetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.results)
      .then(array => cleanData(array))
      .then(cleanArray => dispatch(moviesFetchDataSuccess(cleanArray)))
      .catch(error => console.log('ERROR', error))
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export const createUser = (user) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(response => console.log(response))
  }
}

export const checkUser = (user) => {
  return dispatch => {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(response => console.log(response))
  }
}
