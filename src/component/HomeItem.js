import React from "react";

export default function HomeItem(props) {
  let {dataItem} = props
  return (
    <div>
      <div className="card" style={{'width': '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{dataItem.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Author : {dataItem.Author}</h6>
          {/* <h6 className="card-subtitle mb-2 text-muted">Date : {dataItem.Published-date}</h6> */}
          <p className="card-text">
            {dataItem.description}
          </p>
          <a href={dataItem.Image} className="card-link">
            Image URL
          </a>
          <a href={dataItem.URL} className="card-link">
            Url
          </a>
        </div>
      </div>
    </div>
  );
}
