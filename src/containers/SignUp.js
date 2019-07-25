import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import IntlMessages from 'util/IntlMessages';
import {
  userSignUp,
} from 'actions/Auth';
import { showLoader } from "actions/Alert";


class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: '',
      buildingNum: ''
    }
  }

  componentDidUpdate() {
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }
  handleOnChange = (value) => {
    this.setState({
      phone_number: value
    });
  };
  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      buildingNum
    } = this.state;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="GEMINI START">
              <img src={require("assets/images/logo.png")} alt="GEMINI START" title="GEMINI START" />
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header">
              <h1>Sign Up</h1>
            </div>

            <div className="mb-4">
              <h2><IntlMessages id="appModule.createAccount" /></h2>
            </div>

            <div className="app-login-form">
              <form method="post" action="/">
                <TextField
                  type="text"
                  label="First Name"
                  onChange={(event) => this.setState({ first_name: event.target.value })}
                  fullWidth
                  defaultValue={first_name}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <TextField
                  type="text"
                  label="Last Name"
                  onChange={(event) => this.setState({ last_name: event.target.value })}
                  fullWidth
                  defaultValue={last_name}
                  margin="normal"
                  className="mt-0 mb-2"
                />

                <TextField
                  type="email"
                  onChange={(event) => this.setState({ email: event.target.value })}
                  label={<IntlMessages id="appModule.email" />}
                  fullWidth
                  defaultValue={email}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <MuiPhoneNumber
                  defaultCountry={'it'}
                  onChange={this.handleOnChange}
                  label={'Phone Number'}
                  fullWidth
                  inputClass="mt-0 mb-2"
                />
                <TextField
                  type="password"
                  onChange={(event) => this.setState({ password: event.target.value })}
                  label={<IntlMessages id="appModule.password" />}
                  fullWidth
                  defaultValue={password}
                  margin="normal"
                  className="mt-0 mb-4"
                />
                <TextField
                  type="number"
                  label="Building Number"
                  onChange={(event) => this.setState({ buildingNum: event.target.value })}
                  fullWidth
                  defaultValue={buildingNum}
                  margin="normal"
                  className="mt-0 mb-2"
                />
                <div className="mb-3 d-flex align-items-center">
                  <span>
                    By clicking “Create an account” below, you agree to our <Link to="/signup">Privacy Statement</Link>. We’ll occasionally send you account-related emails.
                  </span>
                </div>
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button variant="contained" onClick={() => {
                    this.props.showLoader();
                    this.props.userSignUp({ email, password });
                  }} color="primary">
                    <IntlMessages
                      id="appModule.regsiter" />
                  </Button>
                  <Link to="/signin">
                    <IntlMessages id="signUp.alreadyMember" />
                  </Link>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth, alert }) => {
  const { authUser } = auth;
  return { authUser }
};

export default connect(mapStateToProps, {
  userSignUp,
  showLoader,
})(SignUp);
