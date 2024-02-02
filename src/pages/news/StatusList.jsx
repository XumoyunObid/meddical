import HeartIcon from "./../../assets/icons/HeartIcon";
import UserIcon from "./../../assets/icons/UserIcon";
import EyeIcon from "./../../assets/icons/EyeIcon";
import Calendar from "./../../assets/icons/Calendar";

import "./news.css"
const StatusList = () => {
  return (
    <div className="statuslist">
      <div>
        <Calendar /> <span className="statuslistItem">Monday05, September 2021</span>
      </div>
      <div>
        <UserIcon /> <span className="statuslistItem">By Author</span>
      </div>
      <div>
        <EyeIcon />
        <span className="statuslistItem">68</span>
      </div>
      <div>
        <HeartIcon /> <span className="statuslistItem">66</span>
      </div>
    </div>
  );
};

export default StatusList;
