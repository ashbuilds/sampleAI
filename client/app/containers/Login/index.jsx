import { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import user from '../../helpers/user';
import { Loading } from '../../components';

// template.jsx contain all HTML with style.
import template from './template';

// Events / Functions / Base query are defined here.
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.getSavedUser = this.getSavedUser.bind(this);
    this.state = {
      name: '',
      email: '',
      loading: false,
    };
  }

  componentWillMount() {
    const userData = user.get() || {};
    if (userData.email) {
      window.location = '/quiz';
    }
  }

  componentDidMount() {
    document.title = 'Login | Sample AI';
  }

  getSavedUser() {
    const { email } = this.state;
    if (email) {
      return this.props.getUser({ variables: { email } });
    }
    return '';
  }

  saveUser() {
    const { name, email } = this.state;
    const result = this.props.setUser({ variables: { name, email } });
    result.then((res) => {
      this.setState({
        loading: false,
      });
      const { data: { setUser: { status } } } = res;
      // eslint-disable-next-line no-console
      if (!status) console.error('Something went wrong!! \n Please try again');
      else {
        user.set(name, email);
        // eslint-disable-next-line no-alert
        alert(`Welcome ${name}`);
        window.location = '/quiz';
      }
    });
  }
  handleSubmit() {
    const { name } = this.state;
    const savedUser = this.getSavedUser();

    this.setState({
      loading: true,
    });

    if (savedUser) {
      savedUser.then((res) => {
        const { data: { getUser: { status } } } = res;
        if (!status) {
          // eslint-disable-next-line no-console
          console.error('User not found!! \n Registering...');
          this.saveUser();
        } else {
          // eslint-disable-next-line no-alert
          alert(`Welcome back ${name}`);
          window.location = '/quiz';
        }
      });
    } else {
      this.saveUser();
    }
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (this.state.loading ? Loading() : template(this));
  }
}

// binding graphQL mutation to Login
const setUserMutation = gql`
  mutation setUser($name: String!,$email: String!) {
    setUser(name: $name,email: $email) {
      status
    }
  }
`;

const getUserMutation = gql`
  mutation getUser($email: String!) {
    getUser(email: $email) {
      status
    }
  }
`;

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};


export default graphql(setUserMutation, { name: 'setUser' })(
    graphql(getUserMutation, { name: 'getUser' })(Login),
);
