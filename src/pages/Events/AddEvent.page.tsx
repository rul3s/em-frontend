import "./events.scss";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { IEventType } from "../../types/IEvent";
import axios from "axios";
import { eventsUrl } from "../../constants/urls";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { eventsRoute } from "../../constants/routes";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface Props {}

const AddEvent = (props: Props) => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const [eventType, setEvent] = React.useState<Partial<IEventType>>({
    name: "",
    description: "",
    category: "",
    date: new Date(),
  });

  const redirect = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({
      ...eventType,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveBtnClick = () => {
    if (
      eventType.name === "" ||
      eventType.description === "" ||
      eventType.category === "" ||
      eventType.date === null
    ) {
      alert("Enter all needed values");
      return;
    }

    const data: Partial<IEventType> = {
      name: eventType.name,
      description: eventType.description,
      category: eventType.category,
      date: eventType.date,
    };

    axios
      .post(eventsUrl, data)
      .then((response) =>
        redirect(`${eventsRoute}`, {
          state: { message: "Product Created Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };
  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="add-event">
      <h1>Add new event</h1>
      <TextField
        autoComplete="off"
        label="Name"
        name="name"
        variant="outlined"
        value={eventType.name}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Description"
        name="description"
        variant="outlined"
        value={eventType.description}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Category"
        name="category"
        variant="outlined"
        value={eventType.category}
        onChange={changeHandler}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={eventType.date}
          onChange={(newDate) => setDate(newDate)}
        />
      </LocalizationProvider>
      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleBackBtnClick}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddEvent;
