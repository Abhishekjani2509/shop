import React from "react";

const Cards = ({ products, type }) => {
  let display;
  // console.log(products);
  if (products) {
    display = products.map((x) => {
      let { title, description, thumbnail } = x;
      return (
        <div className="col-4 mb-4 position-relative">
          <div className="">
            <div className="">
              <div className="card ">
                <img className="card-img-top" style={{ width: 200, height: 160 }} src={thumbnail} alt="not found" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "None";
  }
  return <>{display}</>;
};

export default Cards;
