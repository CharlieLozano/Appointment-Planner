import React, { useState, useEffect} from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
    const contacts = props.contacts;
    const addContact = props.addContact;
    
    /*
  Define state variables for 
  contact info and duplicate check
  */

    const [name, setName] = useState('Name');
    const [phone, setPhone] = useState('Phone (Format: 123-123-1234)');
    const [email, setEmail] = useState('Email');
    const [duplicate, setDuplicate] = useState(false);
    
  useEffect(() =>{
    const found = contacts.some(e => e.name === name);
    if(found){
        setDuplicate(true)
    }
  }, [contacts, name])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate){
        addContact(name, phone, email);
        setName('');
        setPhone('');
        setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
            name = {name}
            setName = {setName}
            phone = {phone}
            setPhone = {setPhone}
            email = {email}
            setEmail = {setEmail}
            handleSubmit = {handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts}/>
      </section>
    </div>
  );
};
