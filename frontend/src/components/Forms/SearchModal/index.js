import React from "react";
import "./SearchModal.scss";

export const SearchModal = () => {
  const [searchType, setSearchType] = React.useState("by-id");

  return (
    <>
      <h2 className="form-title">Search</h2>
      <form className="search-form">
        <div className="accordion w-100 accordion-flus" id="accordion-search">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={() => setSearchType("by-id")}
              >
                Search order by id
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion-search"
            >
              <div className="accordion-body">Search by id</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                onClick={() => setSearchType("by-date")}
              >
                Search orders by dates
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion-search"
            >
              <div className="accordion-body">By date</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={() => setSearchType("by-location")}
              >
                Search Orders by location
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion-search"
            >
              <div className="accordion-body">By location</div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary m-2">Search</button>
      </form>
    </>
  );
};
