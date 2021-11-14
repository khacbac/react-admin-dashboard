import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Settings />
          </div>
          <img
            src="http://res.heraldm.com/content/image/2021/06/02/20210602000653_0.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}
