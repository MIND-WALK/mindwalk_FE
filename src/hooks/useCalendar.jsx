/* eslint-disable no-restricted-globals */
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useCalendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  const navigate = useNavigate();

  const handleSelectDay = useCallback(
    date => {
      const newSelectedDate = new Date(selectedYear, selectedMonth - 1, date); // 날짜에 대한 Date 객체 생성

      navigate(`/diary/write/${newSelectedDate.getTime()}`); // 날짜 클릭 시 페이지 이동
    },
    [selectedYear, selectedMonth, navigate],
  );

  const changeSelectMonth = e => {
    setSelectedMonth(Number(e.target.value));
  };

  const changeSelectYear = e => {
    setSelectedYear(Number(e.target.value));
  };

  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth, selectedYear]);

  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth, selectedYear]);

  const monthControl = useCallback(() => {
    const monthArr = [];
    for (let i = 0; i < 12; i++) {
      monthArr.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}월
        </option>,
      );
    }
    return (
      <select onChange={changeSelectMonth} value={selectedMonth}>
        {monthArr}
      </select>
    );
  }, [selectedMonth]);

  const yearControl = useCallback(() => {
    const yearArr = [];
    const startYear = today.year - 10;
    const endYear = today.year + 10;
    for (let i = startYear; i < endYear + 1; i++) {
      yearArr.push(
        <option key={i} value={i}>
          {i}년
        </option>,
      );
    }
    return (
      <select className="yearSelect" onChange={changeSelectYear} value={selectedYear}>
        {yearArr}
      </select>
    );
  }, [selectedYear]);

  const returnWeek = useCallback(() => {
    const weekArr = [];
    week.forEach(v => {
      weekArr.push(
        <div
          key={v}
          className={`weekday ${v === "일" ? "sunday" : ""} ${v === "토" ? "saturday" : ""}`}
        >
          {v}
        </div>,
      );
    });
    return weekArr;
  }, []);

  const returnDay = useCallback(() => {
    const dayArr = [];

    for (const nowDay of week) {
      const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      if (week[day] === nowDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          const dayNumber = i + 1;
          dayArr.push(
            <div
              key={dayNumber}
              className={`${
                today.year === selectedYear &&
                today.month === selectedMonth &&
                today.date === dayNumber
                  ? "today"
                  : ""
              } weekday ${
                new Date(selectedYear, selectedMonth - 1, dayNumber).getDay() === 0 ? "sunday" : ""
              } ${
                new Date(selectedYear, selectedMonth - 1, dayNumber).getDay() === 6
                  ? "saturday"
                  : ""
              }`}
              onClick={() => handleSelectDay(dayNumber)}
            >
              {dayNumber}
            </div>,
          );
        }
      } else {
        dayArr.push(<div key={nowDay} className="weekday"></div>);
      }
    }

    return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount, handleSelectDay]);

  return {
    today,
    selectedYear,
    selectedMonth,
    dateTotalCount,
    prevMonth,
    nextMonth,
    monthControl,
    yearControl,
    returnWeek,
    returnDay,
  };
};

export default useCalendar;
