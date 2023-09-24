import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
function App() {
  let [fetchdata, setfetchData] = useState([]);
  let [api, setApi] = useState([""]);
  let { products } = fetchdata;
  let [type, setType] = useState("");
  api = `https://dummyjson.com/products/${type}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setfetchData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mt-5">Shop</h1>
      <div className="container d-flex ">
        <div className="row col-3">
          <Filters setApi={setApi} setType={setType} api={api} />
        </div>
        <div className="col-8">
          <div className="row ">
            <Cards products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
