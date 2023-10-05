import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayList = Object.values(props.days).map((day) => {
    console.log(day);
    return (
      <DayListItem
        key={day.id}
        name={day.day_title.charAt(0).toUpperCase() + day.day_title.slice(1)}
        spots={day.spots}
        selected={day.day_title === props.value}
        setDay={() => props.onChange(day.day_title)}
      />
    );
  });

  return <ul>{dayList}</ul>;
}
