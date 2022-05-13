import Filter from "./filter";
import MovieList from "./movieList";

const Catalog = ({device}) => {

    return(
        <div>
            <Filter />
           
        </div>
    );
  
    // return (device === "web") ? (
    //     <div>
    //         <Filter />
    //     </div>
    // )
    // :
    // (
    //     <div>
            
    //     </div>
    // )

};

export default Catalog;
