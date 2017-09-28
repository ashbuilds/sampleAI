import { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import apolloPropTypes from '../../helpers/apolloPropType';

import { Loading } from '../../components';

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Home extends Component {

  componentWillReceiveProps(nextProps) {
    const { data: { home } } = nextProps;
    document.title = home ? home.title : 'Sample AI';
  }

  render() {
    const { data: { error, loading } } = this.props;
    if (error) {
      // todo Render error template
      // eslint-disable-next-line no-console
      console.error(error);
      return null;
    }
    return (loading ? Loading() : template(this));
  }
}

// binding graphQL query to Home , sample home query
const HomeQuery = gql`query Home{ home {
  id,title,quote{
   text,isButton
  }
}}`;

Home.propTypes = {
  data: apolloPropTypes(HomeQuery).isRequired,
};

export default graphql(HomeQuery)(Home);
