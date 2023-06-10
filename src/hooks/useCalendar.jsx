/* eslint-disable no-restricted-globals */
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getAllDiaries, getDiary } from "../apis/diary";
import userIdState from "../recoil/userIdState";

const useCalendar = ({ colorData }) => {
  const [userAuthState] = useRecoilState(userIdState);

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

  const checkDiaryExistence = async ms => {
    const diaries = await getAllDiaries(userAuthState);
    const matchingDiary = diaries.find(diary => diary.date === ms);
    return matchingDiary || null;
  };

  const handleSelectDay = useCallback(
    async date => {
      const selectedDate = new Date(selectedYear, selectedMonth - 1, date);
      const diaryDataExists = await checkDiaryExistence(selectedDate.getTime());

      if (!diaryDataExists) {
        navigate(`/diary/write/${selectedDate.getTime()}`);
      } else {
        navigate(`/diary/detail/${selectedDate.getTime()}`);
      }
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
          const currentDate = new Date(selectedYear, selectedMonth - 1, dayNumber);
          const isToday =
            today.year === selectedYear &&
            today.month === selectedMonth &&
            today.date === dayNumber;
          const isSunday = currentDate.getDay() === 0;
          const isSaturday = currentDate.getDay() === 6;
          let dayStyle = {
            backgroundColor: "transparent",
          };

          const matchingDates = colorData.filter(item => {
            const itemDate = new Date(item.date);
            return (
              itemDate.getFullYear() === currentDate.getFullYear() &&
              itemDate.getMonth() === currentDate.getMonth() &&
              itemDate.getDate() === currentDate.getDate()
            );
          });

          if (matchingDates.length > 0) {
            dayStyle = {
              backgroundColor: matchingDates[0].color,
            };
          }

          if (isToday) {
            dayStyle = {
              ...dayStyle,
              backgroundColor: matchingDates.length > 0 ? matchingDates[0].color : colorData.color,
            };
          }

          dayArr.push(
            <div
              key={dayNumber}
              className={`weekday ${isSunday ? "sunday" : ""} ${isSaturday ? "saturday" : ""}`}
              style={dayStyle}
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
  }, [selectedYear, selectedMonth, dateTotalCount, handleSelectDay, today, week, colorData]);

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
