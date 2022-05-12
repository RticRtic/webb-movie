export const apiAction = async (setActionMovies) => {
  try {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=435c3f45aa5de36644fb911458c35f2b&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate";
    const response = await fetch(url);
    const data = await response.json();
    setActionMovies(data.results);
  } catch (error) {
    return [];
  }
};

export const apiDrama = async (setDramaMovies) => {
  try {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate";
    const response = await fetch(url);
    const data = await response.json();
    setDramaMovies(data.results);
  } catch {
    return [];
  }
};

export const apiComedy = async (setComedyMovies) => {
  try {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate";
    const response = await fetch(url);
    const data = await response.json();
    setComedyMovies(data.results);
  } catch {
    return [];
  }
};

export const apiThriller = async (setThrillerMovies) => {
  try {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate";
    const response = await fetch(url);
    const data = await response.json();
    setThrillerMovies(data.results);
  } catch {
    return [];
  }
};

export const apiFamily = async (setFamilyMovies) => {
  try {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate";
    const response = await fetch(url);
    const data = await response.json();
    setFamilyMovies(data.results);

  } catch {
    return[];
  }
}

export const apiTopScore = async(setTopScore) => {
  try{
    let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&page=1";
    const response = await fetch(url);
    const data = await response.json();
    setTopScore(data.results);
  } catch {
    return[];
  }
}

export const apiPopular = async(setPopularMovies) => {
  try {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US&page=1";
    const response = await fetch(url);
    const data = await response.json();
    setPopularMovies(data.results);
  } catch {
    return[];
  }
}
