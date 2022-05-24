
//*Api genreNumbers
//! 28 action
//! 18 drama
//! 35 comedy
//! 53 thriller
//! 10751 family
//! topscore

export const apiMovies = async (setMovies, genreNumber, pageNumber) => {
  try {
    let url =`https://api.themoviedb.org/3/discover/movie?api_key=435c3f45aa5de36644fb911458c35f2b&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreNumber}&with_watch_monetization_types=flatrate`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  } catch (error) {
    return [];
  }
};



export const apiTopScoreOrPopular = async(setMovies, genreNumber,pageNumber) => {
  try{
    let url = `https://api.themoviedb.org/3/movie/${genreNumber}?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&page=${pageNumber}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  } catch {
    return[];
  }
}



