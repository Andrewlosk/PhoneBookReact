import { useSelector, useDispatch } from "react-redux";


import { selectContactsArray } from "./redux/selectors";

import { deleteContact } from "./redux/operations";


const PhoneList = () => {
  const contacts = useSelector(selectContactsArray) 
  const filter = useSelector((state) => state.filter ?? "");
  const dispatch = useDispatch();

  console.log(contacts);
  

  const filteredContacts = contacts.filter((contact) =>
    (contact.name || "").toUpperCase().includes(filter.toUpperCase())
  );




  return (
    <ul>
      {filteredContacts.map(({name,phone, id}) => {
        return (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>
            <button
              onClick={() => {
                dispatch(deleteContact(id));

              }}
            >
              Delete number
            </button>
          </li>
        );
      })}
    </ul>
  );
};


export default PhoneList;
