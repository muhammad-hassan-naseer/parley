import React, { Component } from "react";

const Accordion = (props) => {
  return (
    <div>
      <div id="accordion" className="mt-5 text-white">
        <div className="card bg-primary">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link text-white collapsed"
                data-toggle="collapse"
                data-target={"#" + props.id}
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {props.question}
              </button>
            </h5>
          </div>
          <div
            id={props.id}
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
            style={{}}
          >
            <div className="card-body">{props.answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
