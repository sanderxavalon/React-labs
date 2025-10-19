import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import loadingGif from "../assets/images/loading.gif";
import { useState, useEffect } from "react";

const backgroundImages = {
  Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
  Clouds: "linear-gradient(to right, #57d6d4, #71eeec)",
  Rain: "linear-gradient(to right, #5bc8fb, #80eaff)",
  Snow: "linear-gradient(to right, #aff2ff, #fff)",
  Haze: "linear-gradient(to right, #57d6d4, #71eeec)",
  Mist: "linear-gradient(to right, #57d6d4, #71eeec)",
};

const weatherImages = {
  Clear: sunny,
  Clouds: cloudy,
  Rain: rainy,
  Snow: snowy,
  Haze: cloudy,
  Mist: cloudy,
};

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // TODO: 為了讓 User 進來就有資料，進入時就要打API，預設地點是Taipei
  useEffect(() => {}, []);

  // TODO: Event Handler 需要接收 Input 的值並且改變狀態
  const handleInputChange = (e) => {};

  // TODO: 按下 Enter 後可以搜尋
  const search = async () => {};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  // TODO: 目前寫死，根據 data.weather.main 裡面的值，在 weatherImages 做對應轉換
  const weatherImage = null;

  // TODO: 目前寫死，根據 data.weather.main 裡面的值，在 backgroundImages 做對應轉換
  const backgroundImage = "linear-gradient(to right, #f3b07c, #fcd283)";

  // 日期顯示應該是：星期一, 20日, 10月
  const formattedDate = ``;

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage:
            backgroundImage && backgroundImage.replace
              ? backgroundImage.replace("to right", "to top")
              : null,
        }}
      >
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">{/* TODO: 顯示地點 */}</div>
          </div>
          <div className="search-bar">
            {/* TODO: Input 必須要能夠接收值 */}
            <input
              type="text"
              placeholder="輸入地點(英文)"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
          </div>
        </div>
        {/* 幫我做一個 loading 狀態判斷 */}
        {/* 如果還在跑讀取資料的時候 */}
        {/* 顯示這段 */}
        {/* <img className="loader" src={loadingGif} alt="loading" /> */}
        {/* 如果 回傳的資料找不到的話，顯示這段： */}
        {/* <div className="not-found">找不到啦 😒</div> */}
        {/* 有東西確切回傳之後，才顯示下面的 JSX */}
        <>
          <div className="weather">
            <img src={weatherImage} alt="sunny" />
            <div className="weather-type">
              {/* TODO: 顯示天氣狀態 */}
              {null}
            </div>
            <div className="temp">
              {/* TODO: 顯示溫度度數 */}
              {null}
            </div>
          </div>
          <div className="weather-date">
            {/* TODO: 記得要顯示格式化字串 */}
            <p>{formattedDate}</p>
          </div>
          <div className="weather-data">
            <div className="humidity">
              <div className="data-name">濕度</div>
              <i className="fa-solid fa-droplet"></i>
              <div className="data">{/* TODO: 顯示濕度 */}</div>
            </div>
            <div className="wind">
              <div className="data-name">風速</div>
              <i className="fa-solid fa-wind"></i>
              <div className="data">{/* TODO: 顯示風速 */}</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default WeatherApp;
