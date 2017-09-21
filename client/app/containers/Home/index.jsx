import { Component } from 'react';
import { graphql, gql } from 'react-apollo';

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions/ Base query are defined here and html,style in template.jsx
class Home extends Component {
  constructor(props) {
    super(props);
    // getting access to this in template.jsx
    template.bind(this);
  }

  render() {
    // just sample data but from api server
    // eslint-disable-next-line react/prop-types
    const { data: { home, error } } = this.props;
    if (error) {
      // todo Render error template
      // eslint-disable-next-line no-console
      console.error(error);
    }
    // todo Render loading template in else
    return (home ? template(home) : null);
  }
}

// binding graphQL query to Home , sample home query
const HomeQuery = gql`{home {
  id,title
}}`;

export default graphql(HomeQuery)(Home);
