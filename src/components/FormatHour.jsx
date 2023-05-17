import React, { useState, useEffect } from "react";

function CurrentHour() {
  const [hour, sethour] = useState(new Date());

  useEffect(() => {
    const hour = setInterval(() => {
      sethour(new Date());
    }, 1000);

    return () => clearInterval(hour);
  }, []);

  return <span>{hour.toLocaleTimeString()}</span>;
}

export default CurrentHour;



