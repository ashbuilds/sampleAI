import { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import apolloPropTypes from '../../helpers/apolloPropType';


import { Loading } from '../../components';

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Quiz extends Component {
// eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    const { data: { home } } = nextProps;
    document.title = home ? home.title : 'Sample AI';
  }

  render() {
    // just sample data but from api server
    const { data: { error, loading } } = this.props;
    if (error) {
      // todo Render error template
      // eslint-disable-next-line no-console
      console.error(error);
      return null;
    }
    // todo Render loading template in else
    return (loading ? Loading() : template(this));
  }
}

// binding graphQL query to Home , sample home query
const QuizQuery = gql`query Home{ home {
  id,title
}}`;

Quiz.propTypes = {
  data: apolloPropTypes(QuizQuery).isRequired,
};

export default graphql(QuizQuery)(Quiz);
