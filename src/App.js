import { useState } from "react";
import "./App.css";
import data from "./data/mock-data.json";
import MyInput from "./components/MyInput";
import { MyButton1 } from "./components/MyButton";
import ReadOnly from "./components/readonlyrow";
import EditAble from "./components/editablerow";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addNewContact, setAddNewContact] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editOldContact, setEditOldContact] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [contactId, setContactId] = useState(null);
  //---------------------------------------------------------
  //-- add new contacts  to list

  const handleChange = (e) => {
    setAddNewContact({ ...addNewContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // alert(JSON.stringify(addNewContact));
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addNewContact.fullName,
      address: addNewContact.address,
      phoneNumber: addNewContact.phoneNumber,
      email: addNewContact.email,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
    setAddNewContact({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };

  //---------------------------------------------------------
  //-- pick the  id value for
  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setContactId(contact.id);

    const newEditContact = {
      id: contactId,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditOldContact(newEditContact);
  };
  //---------------------------------------------------------
  // -- edit old contact
  const handleEditChange = (e) => {
    setEditOldContact({ ...editOldContact, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: contactId,
      fullName: editOldContact.fullName,
      address: editOldContact.address,
      phoneNumber: editOldContact.phoneNumber,
      email: editOldContact.email,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts[index] = newContact;

    setContacts(newContacts);
    setContactId(null);
  };

  //---------------------------------------------------------

  const handleCancelClick = () => {
    setContactId(null);
  };

  //----------------------------------------------------------
  // delete a contact in the table
  const handleDeleteClick = (contact) => {
    const newArr = contacts.filter((data) => data.id !== contact.id);
    setContacts(newArr);
  };
  //----------------------------------------------------------

  return (
    <>
      <div className="container">
        <form onSubmit={handleEditSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <>
                  {contactId === contact.id ? (
                    <EditAble
                      onChange={handleEditChange}
                      editOldContact={editOldContact}
                      onClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      contact={contact}
                      onClick={handleEditClick}
                      onDelete={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
        <div className="addContactContainer">
          <h3>Add contact</h3>
          <form onSubmit={handleSubmit}>
            <MyInput
              type="text"
              name="fullName"
              value={addNewContact.fullName}
              placeholder={"input your name here"}
              onChange={handleChange}
            />
            <MyInput
              type="text"
              name="address"
              value={addNewContact.address}
              placeholder={"input your address here"}
              onChange={handleChange}
            />
            <MyInput
              type="phone"
              name="phoneNumber"
              value={addNewContact.phoneNumber}
              placeholder={"input your phoneNumber here"}
              onChange={handleChange}
            />
            <MyInput
              type="email"
              name="email"
              value={addNewContact.email}
              placeholder={"input your email here"}
              onChange={handleChange}
            />
            <MyButton1 type="submit" label="add" />
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
