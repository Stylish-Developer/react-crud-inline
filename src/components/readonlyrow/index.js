// readOnly row component

import { MyButton2 } from "../MyButton";

const ReadOnly = ({ contact, onClick,onDelete }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <MyButton2 label="edit" onClick={(e) => onClick(e, contact)} />
        <MyButton2 label="delete" onClick={(e) => onDelete(contact)} />
      </td>
    </tr>
  );
};

export default ReadOnly;
