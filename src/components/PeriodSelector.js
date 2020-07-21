import React from "react";
import TextField from "@material-ui/core/TextField";

const PerioSelector = () => {
  const periodEnd = new Date();
  const periodStart = new Date();
  periodStart.setDate(periodEnd.getDate() - 30);

  const handleChange = (event, date) => {
    console.log(event, date);
  };

  return (
    <form className='date-picker__container' noValidate>
      <TextField
        // id='date'
        className='date-picker__element'
        label='Period start'
        type='date'
        defaultValue={`${periodStart.getFullYear()}-${(
          "0" +
          (periodStart.getMonth() + 1)
        ).slice(-2)}-${periodStart.getDate()}`}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        // id='date'
        className='date-picker__element'
        label='Period end'
        type='date'
        defaultValue={`${periodEnd.getFullYear()}-${(
          "0" +
          (periodEnd.getMonth() + 1)
        ).slice(-2)}-${periodEnd.getDate()}`}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default PerioSelector;
