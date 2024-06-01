import { useContext, useState } from "react";
import { assets } from "../helpers/assets";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
          onClick={() => setOpen(!open)}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="plus_icon" />
          {open ? <p>Yeni Sohbet</p> : null}
        </div>
        {open ? (
          <div className="recent">
            <p className="recent__title">En Son</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} className="recent__entry" onClick={() => loadPrompt(item)}>
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0, 18)}</p>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom__item recent__entry">
          <img src={assets.question_icon} alt="question_icon" />
          {open ? <p>Yardım</p> : null}
        </div>
        <div className="bottom__item recent__entry">
          <img src={assets.history_icon} alt="history_icon" />
          {open ? <p>Etkinlik</p> : null}
        </div>
        <div className="bottom__item recent__entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {open ? <p>Ayarlar</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
