import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className="myСalendar" onChange={onChange} value={value} />
    </div>
  );
}
export default MyApp;
