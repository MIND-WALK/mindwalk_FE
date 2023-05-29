import React from "react";
import { styled } from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useCalendar from "../../../hooks/useCalendar";

const Calendar = () => {
  const { prevMonth, nextMonth, monthControl, yearControl, returnWeek, returnDay } = useCalendar();

  return (
    <Container>
      <div className="title">
        <div className="pagination">
          <button onClick={prevMonth}>
            <MdKeyboardArrowLeft fontSize="2.5rem" />
          </button>
          {monthControl()}
          <button onClick={nextMonth}>
            <MdKeyboardArrowRight fontSize="2.5rem" />
          </button>
        </div>
      </div>
      <div className="week">{returnWeek()}</div>
      <div className="date">{returnDay()}</div>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  margin: auto 2rem;
  font-size: 1.6rem;

  & > .title {
    margin: 3rem 0 1rem;
  }

  & .pagination {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    & > select {
      border: none;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }

  & .week {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    text-align: center;
    margin: 1rem 0;
  }
  & .date {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    text-align: center;
  }

  & .sunday {
    color: #e48e8e;
  }
  & .saturday {
    color: #8ec0e4;
  }

  & .weekday {
    padding: 0.8rem 1rem;
    border-radius: 50%;
    background-color: transparent;
  }
`;
