import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
    
  const handleChange = (e) => {
      const type = e.target.type;
      const value = e.target.value;
      if(type === 'text'){setName(value)};
      if(type === 'email'){setEmail(value)};
      if(type === 'tel'){setPhone(value)};
      
  }
    
  return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange} />
        <input type='email' value={email} onChange={handleChange} />
        <input pattern ="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" type='tel' value={phone} onChange={handleChange} />
        <input type='submit'/>
      </form>
  );
};
