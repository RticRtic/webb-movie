

import SearchInput from "./SearchInput";
import SearchBackgroundImage from "./SearchBackgroundImage";
import { useState } from "react";

const Home = ({device}) => {

   


  return (device === "web") ? (
    <div>
      <SearchBackgroundImage />
      <SearchInput />
    </div>
  ) :
  
  (
    <div>
      {/* <SearchBackgroundImage /> */}
     
    </div>
  )
    
  
};

export default Home;
