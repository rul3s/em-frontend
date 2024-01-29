import "./events.scss";
import { useEffect, useState } from "react";
import { IEventType } from "../../types/IEvent";
import axios from "axios";
import { eventsUrl } from "../../constants/urls";

interface Props {}

const Events = (props: Props) => {
  const [events, setEvents] = useState<IEventType[]>([]);

  const fetchEventList = async () => {
    try {
      const response = await axios.get<IEventType[]>(eventsUrl);
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
              {events.map((eventType) => (
                <tr key={eventType.id}>
                  <td>{eventType.name}</td>
                  <td>{eventType.description}</td>
                  <td>{eventType.category}</td>
                  <td>{new Date(eventType.date).toLocaleDateString()}</td>
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
