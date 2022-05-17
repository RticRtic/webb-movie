import Filter from "./filter";
import MovieList from "./movieList";
import MovieListMobil from "./movieListMobil";

const Catalog = ({device}) => {

    // return(
    //     <div>
    //         <Filter />
           
    //     </div>
    // );
  
    return (device === "web") ? (
        <div>
            <Filter />
        </div>
    )
    :
    (
        <div>
            <MovieListMobil />
        </div>
    )

};

export default Catalog;
