import { useState } from "react";

const CalendarApp = () => {
  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const monthsOfYear = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({ hours: "00", minutes: "00" });
  const [eventText, setEventText] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // TODO: 完成按下上個月按鈕時的行為
  const prevMonth = () => {};

  // TODO: 完成按下下個月按鈕時的行為
  const nextMonth = () => {};

  // TODO: 完成按下行事曆日期的行為
  // 只能選擇今天或未來的日期，不能選擇過去的日期
  // 點選日期後會跳出新增事件的 popup
  const handleDayClick = (day) => {};

  // TODO: 完成新增/編輯後，送出事件的行為
  // event的格式: { id, date: Date, time: "HH:MM", text: string }
  const handleEventSubmit = () => {};

  // TODO: 完成按下編輯按鈕後行為
  const handleEditEvent = (event) => {};

  // TODO: 完成刪除事件的行為
  const handleDeleteEvent = (eventId) => {};

  // TODO: 完成時間輸入框變更時的行為
  const handleTimeChange = (e) => {};

  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">行事曆</h1>
        <div className="navigate-date">
          <h2 className="month">{monthsOfYear[currentMonth]},</h2>
          <h2 className="year">{currentYear}</h2>
          <div className="buttons">
            <i className="bx bx-chevron-left" onClick={prevMonth}></i>
            <i className="bx bx-chevron-right" onClick={nextMonth}></i>
          </div>
        </div>
        <div className="weekdays">
          {daysOfWeek.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="days">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <span key={`empty-${index}`} />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <span
              key={day + 1}
              className={
                day + 1 === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
                  ? "current-day"
                  : ""
              }
              onClick={() => handleDayClick(day + 1)}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="events">
        {/* TODO: 加上 popup 顯示狀態與控制邏輯 */}
        {false && (
          <div className="event-popup">
            <div className="time-input">
              <div className="event-popup-time">時間</div>
              <input
                type="number"
                name="hours"
                min={0}
                max={24}
                className="hours"
                value={eventTime.hours}
                onChange={handleTimeChange}
              />
              <input
                type="number"
                name="minutes"
                min={0}
                max={60}
                className="minutes"
                value={eventTime.minutes}
                onChange={handleTimeChange}
              />
            </div>
            <textarea
              placeholder="輸入事件內容（最多60字）"
              value={eventText}
              // TODO: 完成事件內容輸入框變更時的行為
            ></textarea>
            <button className="event-popup-btn" onClick={handleEventSubmit}>
              {editingEvent ? "更新事件" : "新增事件"}
            </button>
            <button
              className="close-event-popup"
              onClick={
                {
                  /* TODO: 加上 popup 顯示控制邏輯 */
                }
              }
            >
              <i className="bx bx-x"></i>
            </button>
          </div>
        )}
        {events.map((event, index) => (
          <div className="event" key={index}>
            <div className="event-date-wrapper">
              <div className="event-date">{`${
                monthsOfYear[event.date.getMonth()]
              } ${event.date.getDate()}, ${event.date.getFullYear()}`}</div>
              <div className="event-time">{event.time}</div>
            </div>
            <div className="event-text">{event.text}</div>
            <div className="event-buttons">
              <i
                className="bx bxs-edit-alt"
                onClick={() => handleEditEvent(event)}
              ></i>
              <i
                className="bx bxs-message-alt-x"
                onClick={() => handleDeleteEvent(event.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarApp;
