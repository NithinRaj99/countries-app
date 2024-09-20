import React from "react";
import "./CountriesListShimmer.css";

export default function () {
  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((e, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
