import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import SearchLine from "../components/SearchLine";

import axios from 'axios'

function MainPage() {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => setData(res.data))
  },[])

    console.log(data)
  return (
    <div>
      <Header />
      <SearchLine />
      {/* <Item /> */}
      {data.map((id, title) => {
        return (
          <Item id={id} title={title} /> 
        )
      })}
      </div>
  );
}

export default MainPage;
