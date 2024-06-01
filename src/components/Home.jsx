import { useContext } from "react";
import { assets } from "../helpers/assets";
import { Context } from "../context/Context";

const Home = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main__container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Merhaba,</span>
              </p>
              <p>Bugün nasıl yardımcı olabilirim?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Ekonomi Kavramları</p>
                <img src={assets.compass_icon} alt="compass_icon" />
              </div>
              <div className="card">
                <p>Kariyer alanları</p>
                <img src={assets.bulb_icon} alt="bulb_icon" />
              </div>
              <div className="card">
                <p>Müzik Tarihi</p>
                <img src={assets.message_icon} alt="message_icon" />
              </div>
              <div className="card">
                <p>Pişirme trandleri</p>
                <img src={assets.code_icon} alt="code_icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result__title">
              <img src={assets.user_icon} alt="user_icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result__data">
              <img src={assets.gemini_icon} alt="gemini_icon" />
              {loading ? (
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="main__bottom">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buraya bir istem girin"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            <img src={assets.gallery_icon} alt="gallery_icon" />
            <img src={assets.mic_icon} alt="mic_icon" />
            {input ? (
                <img
                src={assets.send_icon}
                alt="send_icon"
                onClick={() => onSent()}
                />
            ) : null}         
          </div>
        </div>
        <p className="main__bottom--info">
        Gemini, kişiler de dahil olmak üzere farklı konular hakkında yanlış bilgiler gösterebilir. Bu nedenle, verdiği yanıtların doğru olup olmadığını kontrol edin. <u>Gizliliğiniz ve Gemini Uygulamaları</u>
        </p>
      </div>
    </div>
  );
};

export default Home;
