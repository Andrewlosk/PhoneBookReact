import { useSelector, useDispatch } from "react-redux";

// import { deleteContact } from "./redux/actions";
// import { deleteContact } from "./redux/contacts/contactSlice";
import { deleteContact } from "./redux/operations";


const PhoneList = () => {
  const contacts = useSelector((state) => state.contacts.items) 
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  console.log(contacts);
  

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );


  return (
    <ul>
      {filteredContacts.map(({createdAt,name,phone, id}) => {
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
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// class PhoneList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id}>
//               <p>
//                 {name}: {number}
//               </p>
//               <button
//                 onClick={() => {
//                   this.props.handleDelete(id);
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

export default PhoneList;
