import React from "react";
import { ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
    


  const onChange = (e) => {
      const type = e.target.type;
      const id = e.target.id;
      const value = e.target.value;
      console.log("this is id: " + id)
      console.log("this is value: " +  value)
      if(type === 'text'){setTitle(value)};
      if(type === 'date'){setDate(value)};
      if(type === 'time'){setTime(value)};
      if(id === 'contactPicker'){setContact(value)};
      console.log("this is contact: " + contact)
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <input defaultValue='Appointment Title' type='text' value={title} onChange={onChange}/>
      <input type='date' min={getTodayString()} value={date} onChange={onChange}/>
      <input type='time' value={time} onChange={onChange}/>
      <ContactPicker contacts={contacts} onChange={onChange}/>
      <input type='submit'/>
    </form>
  );
};
