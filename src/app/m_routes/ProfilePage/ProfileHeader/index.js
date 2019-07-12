import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import createObjectURL from "create-object-url";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.filePick = null;
    this.state = {
      file: null,
      profilePic: "http://pbs.twimg.com/profile_images/1146982927433007110/KweOe9o3_200x200.jpg"
    }
  }
  onChangeAvatar = (e) => {
    const url = createObjectURL(e.target.files[0]);
    console.log("details",e.target.files[0]);
    console.log({url});
    this.setState({
      file: e.target.files[0],
      profilePic: url
    });
  };
  render() {
    const { profilePic } = this.state;
    const { onTapEditBtn } = this.props;
    return (
      <div className="jr-profile-banner">
        <div className="jr-profile-container">
          <div className="jr-profile-banner-top">
            <div className="jr-profile-banner-top-left">
              <div className="jr-profile-banner-avatar">
                <Avatar className="size-90" alt="..."
                        src={profilePic}/>
              </div>
              <div className="jr-profile-banner-avatar-info">
                <h2 className="mb-2 jr-mb-sm-3 jr-fs-xxl jr-font-weight-light">Yang Mi</h2>
                <p className="mb-2 jr-fs-lg">ShenYang, China</p>
                <div className="mb-0" onClick={() => this.filePick.click()}>
                <span className="jr-link jr-profile-setting">
                  <i className="zmdi zmdi-edit mr-2"/>
                  <span className="d-inline-flex align-middle ml-1 jr-ml-sm-0">Change Avatar</span>
                </span>
                  <input
                    type="file"
                    hidden
                    ref={c => this.filePick = c}
                    onChange={e => this.onChangeAvatar(e)}
                  />

                </div>
              </div>
            </div>
          </div>
          <div className="jr-profile-banner-bottom" onClick={() => onTapEditBtn()}>
          <span className="jr-link jr-profile-setting">
            <i className="zmdi zmdi-edit mr-2"/>
            <span className="d-inline-flex align-middle ml-1 jr-ml-sm-0">Edit</span>
          </span>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileHeader;

