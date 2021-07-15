import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'd70e071e1e8d3f3ff37e34a652772c9a',
    language: 'es-ES'
  }
})

export default movieDB
