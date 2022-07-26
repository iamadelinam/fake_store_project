import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import SearchBox from "../components/SearchBox";
function MainPage() {
  return (
    <div>
      <Header />
      <SearchBox />
      <Item />
    </div>
  );
}

export default MainPage;
