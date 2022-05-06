import Filter from "./filter";

const Catalog = ({device}) => {
  
    return (device === "web") ? (
        <div>
            <Filter />
        </div>
    )
    :
    (
        <div>
            
        </div>
    )

};

export default Catalog;
