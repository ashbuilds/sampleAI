import { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import user from '../../helpers/user';
import dimensionPair from './predefine';

// TODO WIP

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.session = 0;
    this.dimensionPair = Object.assign([], dimensionPair);
    this.handleLogout = this.handleLogout.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.state = {
      nextAnswers: [],
    };
  }

  getAnswers() {
    const nextDimension = this.dimensionPair.find(item => !item.selected.length);
    const dimensionId1 = nextDimension.pair[0];
    const dimensionId2 = nextDimension.pair[1];
    const answers = this.props.getAnswers({ variables: { dimensionId1, dimensionId2 } });
    answers.then(({ data: { getAnswers } }) => {
      const newAnswer = getAnswers.reduce((newItem, item) => {
        item.answers[this.session ? 'pop' : 'shift']();
        newItem.push(item);
        return newItem;
      }, []);
      this.setState({
        nextAnswers: newAnswer,
      });
    });
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

const QuizAnswers = gql`
  mutation getAnswers($dimensionId1: Int!, $dimensionId2: Int!) {
    getAnswers(dimensionId1: $dimensionId1, dimensionId2: $dimensionId2) {
      id
      name
      answers{
       index
       answer
    }
  }
 }
`;


Quiz.propTypes = {
  // getDimension: PropTypes.func.isRequired,
  getAnswers: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  loading: true,
};

export default graphql(QuizQuery, { name: 'getDimension' })(
    graphql(QuizAnswers, { name: 'getAnswers' })(Quiz),
);

