import { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
// import apolloPropTypes from '../../helpers/apolloPropType';


// import { Loading } from '../../components';

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Quiz extends Component {
// eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
  //   const { data: { home } } = nextProps;
  //   document.title = home ? home.title : 'Sample AI';
  // }

  handleClick() {
    this.props.getDimension({ variables: { dimensionId: 1 } });
    this.props.setLogin({ variables: { name: 'Ashish', email: 'ashish@gmail.com' } });
  }

  render() {
    console.log('this.props : ', this.props);
    // just sample data but from api server
    // const { loading } = this.props;
    // console.log('loading : ',this.props);
    // if (error) {
    //   // todo Render error template
    //   // eslint-disable-next-line no-console
    //   console.error(error);
    //   return null;
    // }
    // todo Render loading template in else
    return (template(this));
  }
}

// binding graphQL query to Home , sample home query
const QuizQuery = gql`
  mutation getDimension($dimensionId: Int!) {
    getDimension(dimensionId: $dimensionId) {
      id
      name
      answers
    }
  }
`;

const setQuizUser = gql`
  mutation setUser($name: String!,$email: String!) {
    setLogin(name: $name,email: $email) {
      status
    }
  }
`;

Quiz.propTypes = {
  getDimension: PropTypes.func.isRequired,
  setLogin: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  loading: true,
};

export default graphql(QuizQuery, { name: 'getDimension' })(
    graphql(setQuizUser, { name: 'setLogin' })(Quiz),
);
