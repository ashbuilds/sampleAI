import { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import user from '../../helpers/user';

// TODO WIP

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.getDimension = this.getDimension.bind(this);
  }

  getDimension() {
    this.props.getDimension({ variables: { dimensionId: 1 } });
  }

// eslint-disable-next-line class-methods-use-this
  handleLogout() {
    user.logout();
    window.location = '/';
  }

  render() {
// eslint-disable-next-line no-console
    console.log('this.props : ', this.props);
    return (template(this));
  }
}

// binding graphQL mutations to Quiz
const QuizQuery = gql`
  mutation getDimension($dimensionId: Int!) {
    getDimension(dimensionId: $dimensionId) {
      id
      name
      answers
    }
  }
`;

Quiz.propTypes = {
  getDimension: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  loading: true,
};

export default graphql(QuizQuery, { name: 'getDimension' })(Quiz);
