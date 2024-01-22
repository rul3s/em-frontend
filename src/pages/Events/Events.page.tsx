import "./events.scss";
import { useEffect, useState } from "react";
import { IEvent } from "../../types/IEvent";
import axios from "axios";
import { eventsUrl } from "../../constants/urls";

interface Props {}

const Events = (props: Props) => {
  const [events, setEvents] = useState<IEvent[]>([]);

  const fetchEventList = async () => {
    try {
      const response = await axios.get<IEvent[]>(eventsUrl);
      setEvents(response.data);
    } catch (error) {
      alert("An Error Happened. Debug: " + error);
    }
  };

  useEffect(() => {
    fetchEventList();
  }, []);

  console.log(events);

  return (
    <div className="events">
      <h1>List of events</h1>
      {events.length === 0 ? (
        <h1>No events to show</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>{event.category}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Events;
