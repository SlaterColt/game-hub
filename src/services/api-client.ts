import axios from "axios"; 

export default axios.create({
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjM2ZGNkMjY1MjhmOTI4ZDI4OTQ4Nzg2YTA0MWJjYiIsInN1YiI6IjY2MmM1OTMwYTgwNjczMDEyOGU3ZDRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_mOfiZeTKJFpKye0Rg6iRGFN6oWTbro6jlYINGwzeA'},
  baseURL: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  params: {
    key: '0236dcd26528f928d28948786a041bcb'
  }
})