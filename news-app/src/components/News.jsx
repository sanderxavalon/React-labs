import { useEffect, useState } from "react";
import "./News.css";
import NewsModal from "./NewsModal";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

const News = () => {
  // TODO: 為了讓 User 進來就有資料，進入時就要打API，剛進來請用 general

  // TODO: Event Handler 需要接收 category 的值並且送出不同的 Request
  const handleCategoryClick = (e, category) => {};

  // TODO: Event Handler 點擊之後換顯示 modal
  const handleArticleClick = (article) => {};

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {/**
             * TODO: 顯示各個 category，並且按下的時候可以會送出不同的 Request
             * 元素請使用刻好的：
             * <a href="#" className="nav-link"> </a>
             */}
          </div>
        </nav>
        <div className="news-section">
          {/**
           * TODO: 顯示第一則新聞當頭條，並且按下的時候可以會讓 modal 顯示
           * 元素請使用刻好的：
           * <div className="headline">
           *   <img />
           *   <h2 className="headline-title"></h2>
           * </div>
           */}
          <div className="news-grid">
            {/**
             * TODO: 顯示第2-7則當底下新聞，並且按下的時候可以會讓 modal 顯示
             * 元素請使用刻好的：
             * <div className="news-grid-item">
             *   <img />
             *   <h3></h3>
             * </div>
             */}
          </div>
        </div>
        <NewsModal />
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
      </footer>
    </div>
  );
};

export default News;
