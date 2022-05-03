

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
      <SearchInput />
    </div>
  )
    
  
};

export default Home;
