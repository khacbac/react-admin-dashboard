import {
  PersonOutline,
  LineStyle,
  TrendingUp,
  Store,
  AttachMoneySharp,
  Assessment,
  MailOutline,
  FeedbackOutlined,
  MessageOutlined,
  ReportOffOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sideBar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarListItem active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarListItem">
                <PersonOutline className="sideBarIcon" />
                Users
              </li>
            </Link>
            <li className="sideBarListItem">
              <Store className="sideBarIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <AttachMoneySharp className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <Assessment className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <FeedbackOutlined className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <MessageOutlined className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyle className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <ReportOffOutlined className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
