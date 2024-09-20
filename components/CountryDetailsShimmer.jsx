import React from "react";
import "./CountryDetailsShimmer.css";

export default function CountryDetailsShimmer() {
  return (
    <>
      <main>
        <div className="country-details-container">
          <span className="back-button">
            <i className="fa-solid fa-arrow-left" />
            &nbsp; Back
          </span>
          <div className="country-details  ">
            <div className="country-details-shimmer"></div>
            <div className="details-text-container details-text-container-shimmer">
              <h1>.......... </h1>
              <div className="details-text details-text-shimmer ">
                <p>
                  <b>Native Name:........... </b>
                  <span className="native-name" />
                </p>
                <p>
                  <b>Population:............. </b>
                  <span className="population" />
                </p>
                <p>
                  <b>Region:.............</b>
                  <span className="region" />
                </p>
                <p>
                  <b>Sub Region:.......................... </b>
                  <span className="sub-region" />
                </p>
                <p>
                  <b>Capital:............ </b>
                  <span className="capital" />
                </p>
                <p>
                  <b>Top Level Domain:.............. </b>
                  <span className="top-level-domain" />
                </p>
                <p>
                  <b>Currencies:............ </b>
                  <span className="currencies" />
                </p>
                <p>
                  <b>Languages:.......... </b>
                  <span className="languages" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
