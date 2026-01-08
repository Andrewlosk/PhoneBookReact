
import { nanoid } from "nanoid";
import PhoneList from "../PhoneList";
import Filter from "../Filter";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { addContact, fetchContacts } from "../redux/operations";

const PhoneListMenu = () => {
  const dispatch = useDispatch();

  const [nameInp, setNameInp] = useState("");
  const [numInp, setNumInp] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="AppList">
      <h1>Phonebook</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addContact({ id: nanoid(), name: nameInp, phone: numInp }));
          setNameInp("");
          setNumInp("");
        }}
      >
        <label>name</label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameInp}
          onChange={(e) => {
            setNameInp(e.target.value);
          }}
        />

        <label>phone</label>

        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numInp}
          onChange={(e) => {
            setNumInp(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Contacts</h2>

      <Filter></Filter>
      <PhoneList></PhoneList>
    </div>
  );
};

export default PhoneListMenu;
