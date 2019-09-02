import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IntlMessages from 'util/IntlMessages';
import {
    userSignIn,
} from 'actions/Auth';
import {
    showLoader,
} from 'actions/Alert';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isRemember: false,
        }
    }

    componentDidUpdate() {

        if (this.props.authUser !== null) {
            this.props.history.push('/');
        }
    }

    handleChange = name => (event, checked) => {
        this.setState({[name]: checked});
    };
    onSubmitSignIn = () => {
        const {email, password, isRemember} = this.state;
        this.props.showLoader();
        this.props.userSignIn({email, password, isRemember});
    };

    render() {
        const {
            email,
            password,
            isRemember
        } = this.state;
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
                                                          checked={isRemember}
                                                          onChange={this.handleChange('isRemember')}
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
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {authUser} = auth;
    return {authUser}
};

export default connect(mapStateToProps, {
    userSignIn,
    showLoader,
})(SignIn);
