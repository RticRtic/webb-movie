

import { actions } from "../features/searchMovieReducer";

const getSearchedApi = async (input, dispatch) => {
  //let url = "https://api.themoviedb.org/3/search/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=pt-EN&query={INPUT}"
  let searchApi = [];

  if(input != "") {
    try {
      dispatch(actions.isFetching());
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-EN&query=${input}`
      );
      const data = await response.json();
      dispatch(actions.success(data));
  
      searchApi.push(data);
  
      console.log(searchApi);
    } catch {
      dispatch(actions.failure());
    }
  } else {
    dispatch(actions.disableSearch());
  }

  } 

  

export { getSearchedApi };
