import React from "react";

const Filters = ({ api, setApi, setType}) => {
  return (
    <div className="">
      <div className="accordion mb" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Filters
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => {
                    setType('category/smartphones')
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Smartphones
                </label>
              </div>
            </div>
            <div className="accordion-body">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => {
                    setType("category/laptops")
                  }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Laptops
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
