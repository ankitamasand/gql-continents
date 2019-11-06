import React from "react";
import gql from "graphql-tag";

export const GET_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

export const GET_CONTINENT_DETAILS = gql`
  query continent($code: String!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        native
        phone
        currency
        emoji
        emojiU
        languages {
          code
          name
          native
        }
      }
    }
  }
`;
