import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GET_CONTINENTS } from "../queries/index";
import { Query } from "react-apollo";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@material-ui/core";

class ContinentsList extends Component {
  render() {
    /* Using native AbortController for cancelling the pending requests (Network throttling) */
    const abortController = new AbortController();
    const { signal } = abortController;
    return (
      <Query
        query={GET_CONTINENTS}
        context={{
          fetchOptions: {
            signal
          }
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress className="loader" />;
          if (error) {
            return (
              <p>Something went wrong while fetching the list of continents!</p>
            );
          }

          return (
            <List component="nav">
              {data.continents.map(continent => {
                return (
                  <Link to={`/continent/${continent.code}`}>
                    <ListItem
                      className="continent"
                      onClick={this.showContinentDetails}
                    >
                      <Avatar className="blue-avatar">{continent.code}</Avatar>
                      <ListItemText primary={continent.name} />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          );
        }}
      </Query>
    );
  }
}

export default ContinentsList;
