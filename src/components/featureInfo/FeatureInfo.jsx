import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featureInfo.css";

export default function FeatureInfo() {
  return (
    <div className="featured">
      <div className="feartureItem">
        <div className="featuredTitle">Revunue</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.524</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featuredDes">Compared to last month</div>
      </div>
      <div className="feartureItem">
        <div className="featuredTitle">Revunue</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.524</span>
          <span className="featureMoneyRate">
            +2.4 <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <div className="featuredDes">Compared to last month</div>
      </div>
      <div className="feartureItem">
        <div className="featuredTitle">Revunue</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.524</span>
          <span className="featureMoneyRate">
            -4.4 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featuredDes">Compared to last month</div>
      </div>
    </div>
  );
}
