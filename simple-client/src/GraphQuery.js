import React from 'react';
import { Query } from "react-apollo";

const GraphQuery = ({ query, variables, children }) =>
  <Query {...{ query, variables }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return React.Children.map(children, child => React.cloneElement(child, data))
      }
    }
  </Query>;

export default GraphQuery;