import {
  CalendarToday,
  EmailOutlined,
  MapOutlined,
  Person,
  PersonOutline,
  Phone,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userHeader">
        <h2 className="userEditUserTitle">Edit User</h2>
        <Link to="/user/new">
          <button className="userCreateUserBtn">Create</button>
        </Link>
      </div>
      <div className="userInfo">
        <div className="userInfoShow">
          <div className="userInfoBasic">
            <img
              src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il"
              alt=""
              className="userAvatar"
            />
            <div className="userInfoNameContainer">
              <span className="userInfoName">Anna Becker</span>
              <span className="userInfoTitle">Software Engineer</span>
            </div>
          </div>

          <div className="userInfoDetail">
            <div className="userInfoDetailTitle">Account Details</div>
            <div className="userInfoDetailInfo">
              <PersonOutline className="userInfoDetailIcon" />
              <span>annabecker99</span>
            </div>
            <div className="userInfoDetailInfo">
              <CalendarToday className="userInfoDetailIcon" />
              <span>10.12.1999</span>
            </div>
          </div>

          <div className="userInfoDetail">
            <div className="userInfoDetailTitle">Contact Details</div>
            <div className="userInfoDetailInfo">
              <PhoneAndroid className="userInfoDetailIcon" />
              <span>+84389999999</span>
            </div>
            <div className="userInfoDetailInfo">
              <EmailOutlined className="userInfoDetailIcon" />
              <span>annabecker@gmail.com</span>
            </div>
            <div className="userInfoDetailInfo">
              <MapOutlined className="userInfoDetailIcon" />
              <span>New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userInfoUpdate">
          <h3 className="userInfoUpdateTitle">Edit</h3>
          <div className="userInfoUpdateContent">
            <div className="userInfoUpdateContentLeft">
              <div className="userInfoUpdateInputWrapper">
                <label className="userInfoUpdateContentLabel">Username</label>
                <input
                  type="text"
                  className="userInfoUpdateContentInput"
                  placeholder="annabecker99"
                />
              </div>
              <div className="userInfoUpdateInputWrapper">
                <label className="userInfoUpdateContentLabel">Full Name</label>
                <input
                  type="text"
                  className="userInfoUpdateContentInput"
                  placeholder="Anna Becker"
                />
              </div>
              <div className="userInfoUpdateInputWrapper">
                <label className="userInfoUpdateContentLabel">Email</label>
                <input
                  type="text"
                  className="userInfoUpdateContentInput"
                  placeholder="annabecker@gmail.com"
                />
              </div>
              <div className="userInfoUpdateInputWrapper">
                <label className="userInfoUpdateContentLabel">Phone</label>
                <input
                  type="text"
                  className="userInfoUpdateContentInput"
                  placeholder="+84389999999"
                />
              </div>
              <div className="userInfoUpdateInputWrapper">
                <label className="userInfoUpdateContentLabel">Address</label>
                <input
                  type="text"
                  className="userInfoUpdateContentInput"
                  placeholder="New York | USA"
                />
              </div>
            </div>
            <div className="userInfoUpdateContentRight">
              <div className="userInfoUpdateAvatarWrapper">
                <img
                  src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/dear_eonni_iu_anjala_rahman_india.jpg?itok=3ALpt6il"
                  alt=""
                  className="userInfoUpdateAvatar"
                />
                <label htmlFor="avatar">
                  <Publish className="userInfoUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="myfile"
                  className="userInfoUpdateFile"
                />
              </div>
              <button className="userInfoUpdateBtn">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
