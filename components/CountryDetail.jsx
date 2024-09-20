import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CountryDetail() {
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isDark] = useContext(ThemeContext);

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital?.[0],
      topLevelDomain: data.tld.join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
        console.log(err);
      });
  }, [countryName]);

  if (notFound) {
    return <ErrorPage />;
  }
  return countryData === null ? (
    <CountryDetailsShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>
                  Native Name: {countryData.nativeName || countryData.name}{" "}
                </b>
                <span className="native-name" />
              </p>
              <p>
                <b>Population: {countryData.population} </b>
                <span className="population" />
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion} </b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: {countryData.capital} </b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: {countryData.topLevelDomain} </b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages" />
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
