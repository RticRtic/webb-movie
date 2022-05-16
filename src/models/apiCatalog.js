
//*Api genreNumbers
//! 28 action
//! 18 drama
//! 35 comedy
//! 53 thriller
//! 10751 family
//! topscore

export const apiMovies = async (setMovies, setGenreNumber) => {
  try {
    let url =`https://api.themoviedb.org/3/discover/movie?api_key=435c3f45aa5de36644fb911458c35f2b&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${setGenreNumber}&with_watch_monetization_types=flatrate`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  } catch (error) {
    return [];
  }
};



export const apiTopScore = async(setTopScoreMovies, input) => {
  try{
    let url = `https://api.themoviedb.org/3/movie/${input}?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setTopScoreMovies(data.results);
  } catch {
    return[];
  }
}

export const apiPopular = async(setPopularMovies, input) => {
  try {
    let url = `https://api.themoviedb.org/3/movie/${input}?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setPopularMovies(data.results);
  } catch {
    return[];
  }
}
