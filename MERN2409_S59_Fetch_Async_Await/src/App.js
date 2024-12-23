import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    onGetProducts();
  }, []);

  let onGetProducts = async () => {
    console.log("Get Products");
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch("https://fakestoreapi.com/products", reqOptions);
    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };

  return (
    <div>
      <h1>
        ⚡⚡⚡<u>Lightning Deals</u>⚡⚡⚡
      </h1>
      <div className="ProdectsTab">
        {products.map((ele, i) => {
          return (
            <div className="Product" key={i}>
              <h3>{ele.title}</h3>
              <img src={ele.image} alt="" />
              <h3>
                ${ele.price} <del> ${(ele.price * 1.3).toFixed(2)}</del>
              </h3>
              <p>
                {ele.rating.rate}⭐ ({ele.rating.count})
              </p>
              <p>{ele.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
