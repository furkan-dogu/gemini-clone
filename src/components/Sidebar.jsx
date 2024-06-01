import { useState } from "react";
import { assets } from "../helpers/assets";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
          onClick={() => setOpen(!open)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {open ? <p>New Chat</p> : null}
        </div>
        {open ? (
          <div className="recent">
            <p className="recent__title">Recent</p>
            <div className="recent__entry">
              <img src={assets.message_icon} alt="message_icon" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom__item recent__entry">
          <img src={assets.question_icon} alt="question_icon" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="bottom__item recent__entry">
          <img src={assets.history_icon} alt="history_icon" />
          {open ? <p>Activity</p> : null}
        </div>
        <div className="bottom__item recent__entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {open ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
