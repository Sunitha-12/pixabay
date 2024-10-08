import React, { useState, useEffect } from "react";
function App() {
  const [api, setApi] = useState({ products: [] });  
  const [search, setSearch] = useState("");  //search

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => {
        setApi({ products: val });
      })  
  }, []);
  const valueSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={valueSearch} />
      {api.products
        .filter((x) => x.title.toLowerCase().includes(search))
        .map((x) => (
         <>
          <p>{x.title}</p>
          <img src={x.image} alt=""/>
         </>
        ))}
    </div>
  );
}
export default App;