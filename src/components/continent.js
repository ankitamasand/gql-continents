import React, { Component } from "react";
import { GET_CONTINENT_DETAILS } from "../queries/index";
import { Query } from "react-apollo";
import { CircularProgress, Typography } from "@material-ui/core";
import Country from "./country";

class Continent extends Component {
  render() {
    const continentCode = this.props.match.params.code;
    /* Using native AbortController for cancelling the pending requests (Network throttling) */
    const abortController = new AbortController();
    const { signal } = abortController;
    return (
      <Query
        query={GET_CONTINENT_DETAILS}
        variables={{ code: continentCode }}
        context={{
          fetchOptions: {
            signal
          }
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress className="loader" />;
          if (error)
            return (
              <p>
                Something went wrong while fetching the details of the
                continent!
              </p>
            );
          const { continent } = data;
          const { name, countries } = continent;
          return (
            <div className="continent-details">
              <Typography variant="h4" component="h2">
                {name}
              </Typography>
              {countries.map(country => {
                return <Country key={country.code} data={country} />;
              })}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Continent;
