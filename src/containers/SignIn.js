import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from 'actions/Auth';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123',
      checkedAdmin: false,
    }
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }
  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };
  onSubmitSignIn = () => {
    const { email, password } = this.state;
    this.props.showAuthLoader();
    this.props.userSignIn({ email, password });
  }

  render() {
    const {
      email,
      password,
      checkedAdmin
    } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
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
            <div className="app-login-header mb-4">
              <h1><IntlMessages id="signIn.description" /></h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    fullWidth
                    onChange={(event) => this.setState({ email: event.target.value })}
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={(event) => this.setState({ password: event.target.value })}
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox color="primary"
                        checked={checkedAdmin}
                        onChange={this.handleChange('checkedAdmin')}
                        value="checkedAdmin"
                      />
                    }
                    label={<IntlMessages id='signIn.administrator'></IntlMessages>}
                  />
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button onClick={() => this.onSubmitSignIn()}
                      variant="contained"
                      color="primary">
                      <IntlMessages id="appModule.signIn" />
                    </Button>

                    <Link to="/signup">
                      <IntlMessages id="signIn.signUp" />
                    </Link>
                  </div>

                  <div className="app-social-block my-1 my-sm-3">
                    <IntlMessages
                      id="signIn.connectWith" />
                    <ul className="social-link">
                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userFacebookSignIn();
                          }}>
                          <i className="zmdi zmdi-facebook" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userTwitterSignIn();
                          }}>
                          <i className="zmdi zmdi-twitter" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userGoogleSignIn();

                          }}>
                          <i className="zmdi zmdi-google-plus" />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton className="icon"
                          onClick={() => {
                            this.props.showAuthLoader();
                            this.props.userGithubSignIn();
                          }}>
                          <i className="zmdi zmdi-github" />
                        </IconButton>
                      </li>
                    </ul>
                  </div>

                </fieldset>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress />
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(SignIn);
