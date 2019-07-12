import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import styled from 'styled-components';

const Container = styled.div`
  input {
    height: 20px;
    width: 180px;
    margin-top: 5px;
  }
`;

export const Daterange = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Container>
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date: Date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        onChange={(date: Date) => setEndDate(date)}
        minDate={startDate}
      />
    </Container>
  )
}