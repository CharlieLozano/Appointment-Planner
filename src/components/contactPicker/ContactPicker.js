import React from "react";

export const ContactPicker = (props) => {
  return (
    <select id="contactPicker" name="contacts" onChange={props.onChange}>
        <option  value="No contact">No contact</option>
        {
            props.contacts.map(contact => {
                return (
                    <option value={contact.name}>
                        {contact.name}
                    </option>
                )
            })
        }
    </select>
  );
};
