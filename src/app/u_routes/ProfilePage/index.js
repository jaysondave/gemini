import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader";
import Auxiliary from "../../../util/Auxiliary";
import AddEmail from "./AddEmail";
import ChangePassword from "./ChangePassword";
import ChangePhone from "./ChangePhone";

class ProfilePage extends Component {
  onTapEditBtn = () => {
    const { editable } = this.state;
    this.setState({editable: !editable});
  };
  onClickAddBuilding = () => {
    this.setState({addBuilding: true});
  };
  onClickAddEmail = () => {
    this.setState({addEmail: true});
  };
  onClickChangePassword = () => {
    this.setState({changePassword: true});
  };
  onClickChangePhone = () => {
    this.setState({changePhone: true});
  };
  onClose = name => {
    this.setState({[name]: false})
  };
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      addBuilding: false,
      addEmail: false,
      changePassword: false,
      changePhone: false
    }
  }
  render() {
    const { editable, addBuilding, addEmail, changePassword, changePhone } = this.state;
    return (
      <div className="app-wrapper">
        <Auxiliary>
          <ProfileHeader onTapEditBtn={this.onTapEditBtn}/>
          <div className="jr-profile-content">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                <form action="" className="contact-form jr-card">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label form="firstName">First Name</label>
                        <input
                          readOnly={!editable}
                          className="form-control form-control-lg"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          readOnly={!editable}
                          className="form-control form-control-lg"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="webSite">Website</label>
                        <input
                          readOnly={!editable}
                          className="form-control form-control-lg"
                          id="webSite"
                          type="text"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Bio</label>
                        <textarea
                          readOnly={!editable}
                          className="form-control form-control-lg"
                          rows="6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <button disabled={!editable} type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                  <div className="contact-block jr-card py-5 px-4">
                    <ul className="contact-info vertical">
                      <li>
                        <i className="zmdi zmdi-pin zmdi-hc-fw"/>
                        <div className="contact-body">
                          <h4 className="text-uppercase">ADDRESS</h4>
                          <address className="mb-0">
                            44 New Design Street
                            <br/>
                            Melbourne 005
                            <br/>
                            Australia 300
                          </address>
                        </div>
                      </li>

                      <li>
                        <div className="contact-body">
                          <h4 className="text-uppercase">Change Credential</h4>
                          <div onClick={this.onClickAddEmail}>
                            <span className="text-primary jr-link">Add Building</span>
                          </div>
                          <div onClick={this.onClickAddEmail}>
                            <span className="text-primary jr-link">Add new email</span>
                          </div>
                          <div onClick={this.onClickChangePassword}>
                            <span className="text-primary jr-link">Change password</span>
                          </div>
                          <div onClick={this.onClickChangePhone}>
                            <span className="text-primary jr-link">Change phone number</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </Auxiliary>
        {addEmail &&
          <AddEmail
            open={addEmail}
            onClose={this.onClose}
          />
        }
        {changePassword &&
        <ChangePassword
          open={changePassword}
          onClose={this.onClose}
        />
        }
        {changePhone &&
        <ChangePhone
          open={changePhone}
          onClose={this.onClose}
        />
        }
      </div>
    );
  }
}

export default ProfilePage;


