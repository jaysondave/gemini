import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
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
            email: '',
            password: '',
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
        this.setState({[name]: checked});
    };
    onSubmitSignIn = () => {
        const {email, password} = this.state;
        this.props.showAuthLoader();
        this.props.userSignIn({email, password});
    };

    render() {
        const {
            email,
            password,
            checkedAdmin
        } = this.state;
        const {showMessage, loader, alertMessage} = this.props;
        return (
            <div className="app-wrapper h-100">
                <div
                    className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                    <div className="login-content">
                        <div className="login-header">
                            <Link className="app-logo" to="/" title="Jambo">
                                <img src={require("assets/images/logo-color.png")} alt="jambo" title="jambo"/>
                            </Link>
                        </div>

                        <div className="login-form">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <input name="email" id="email" className="form-control form-control-lg"
                                               placeholder="Email" type="email"
                                               onChange={(event) => this.setState({email: event.target.value})}
                                               defaultValue={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" id="password" className="form-control form-control-lg"
                                               placeholder="Password" type="password"
                                               onChange={(event) => this.setState({password: event.target.value})}
                                               defaultValue={password}
                                        />
                                    </div>
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <FormControlLabel
                                            control={
                                                <Checkbox color="primary"
                                                          checked={checkedAdmin}
                                                          onChange={this.handleChange('checkedAdmin')}
                                                          value="checkedAdmin"
                                                />
                                            }
                                            label={'Remember me'}
                                        />

                                        <div>
                                            <Link to="/app/app-module/forgot-password-1"
                                                  title="Reset Password"><IntlMessages
                                                id="appModule.forgotPassword"/></Link>
                                        </div>
                                    </div>

                                    <Button onClick={() => this.onSubmitSignIn()}
                                            variant="contained"
                                            color="primary">
                                        <IntlMessages id="appModule.signIn"/>
                                    </Button>
                                    {
                                        loader &&
                                        <div className="loader-view">
                                            <CircularProgress/>
                                        </div>
                                    }
                                </fieldset>
                            </form>
                        </div>
                    </div>


                    {showMessage && NotificationManager.error(alertMessage)}
                    <NotificationContainer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
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
