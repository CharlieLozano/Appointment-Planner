import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('Appointment Title')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    Add contact info and clear data  
    */
    console.log(contact)
    props.addAppointment(title, contact, date, time)
    console.log(contact)
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
            contacts={props.contacts}
            title={title}
            setTitle={setTitle}
            contact={contact}
            setContact={setContact}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleSubmit={handleSubmit}
      
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointments}/>
      </section>
    </div>
  );
};
