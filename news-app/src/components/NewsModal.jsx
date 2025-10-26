import "./NewsModal.css";

const NewsModal = () => {
  // TODO: 請完成 modal 的顯示機制
  return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span
          className="close-button"
          onClick={() => {
            // TODO: 這裡要可以控制 modal 關閉
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </span>
        {/* TODO: 這裡要顯示文章的圖片，參考api image */}
        <img className="modal-image" />
        {/* TODO: 這裡要顯示文章的標題，參考api title */}
        <h2 className="modal-title"></h2>
        {/* TODO: 這裡要顯示文章的來源，參考api source.name */}
        <p className="modal-source"></p>
        {/* TODO: 這裡要顯示文章的日期，參考api publishedAt */}
        <p className="modal-date"></p>
        {/* TODO: 這裡要顯示文章的內文，參考api content */}
        <p className="modal-content-text"></p>
        {/* TODO: User 點擊 Read More 可以跳轉頁面 */}
        <a target="_blank" rel="noopener noreferrer" className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
