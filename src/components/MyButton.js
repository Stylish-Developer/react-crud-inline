// -- reuseable button component

const MyButton1 = ({ type, label }) => {
  return <button type={type}>{label}</button>;
};

const MyButton2 = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export { MyButton1, MyButton2 };
