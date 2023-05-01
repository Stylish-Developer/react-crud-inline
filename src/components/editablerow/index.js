// editable row component

import { MyButton1, MyButton2 } from "../MyButton";
import MyInput from "../MyInput";

const EditAble = ({ onChange, editOldContact, onClick }) => {
  return (
    <tr>
      <td>
        {" "}
        <MyInput
          type="text"
          name="fullName"
          value={editOldContact.fullName}
          placeholder={"input your name here"}
          onChange={onChange}
        />
      </td>
      <td>
        <MyInput
          type="text"
          name="address"
          value={editOldContact.address}
          placeholder={"input your address here"}
          onChange={onChange}
        />
      </td>
      <td>
        <MyInput
          type="phone"
          name="phoneNumber"
          value={editOldContact.phoneNumber}
          placeholder={"input your phoneNumber here"}
          onChange={onChange}
        />
      </td>
      <td>
        <MyInput
          type="email"
          name="email"
          value={editOldContact.email}
          placeholder={"input your email here"}
          onChange={onChange}
        />
      </td>
      <td>
        <MyButton1 type="submit" label="save" />
        <MyButton2 label="cancel" onClick={onClick} />
      </td>
    </tr>
  );
};

export default EditAble;
