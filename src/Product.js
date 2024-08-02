import data from "./data.js";
import { useState } from "react";

const Products = () => {
  let [shoes] = useState(data);
  return (
    <div className="container">
      <div className="row">
        {JSON.stringify(shoes)}
        {
          //   shoes.map((shoe) => {
          //     console.log(shoe.id);
          //   })

          shoes.map((shoe, i) => (
            <div className="col-m-4">
              <img
                src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                width="80%"
                alt={`${shoe.id + 1}`}
                key={`${shoe.id + 1}`}
              />
              <h4>{shoe.title}</h4>
              <h5>{shoe.content}</h5>
              <p>{shoe.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Products;
