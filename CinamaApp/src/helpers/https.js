// Set config defaults when creating the instance
import axiosInit from "axios";

const instance = axiosInit.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] ="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Q0Njk3YjhiYTI2ZWI5N2YzNDM2MjU4MjBhNzI5MSIsInN1YiI6IjY0NmQxOGJmNTRhMDk4MDBlNDExMTM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ix2EjeWD6NftWptaNtYJ-AgE6RxUCia3ZXKK89cxQtU"
  export default instance ;