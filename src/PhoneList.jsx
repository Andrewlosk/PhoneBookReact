import { useSelector, useDispatch } from "react-redux";

// import { deleteContact } from "./redux/actions";
import { deleteContact } from "./redux/contacts/contactSlice";


const PhoneList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();



  const filteredContacts = contacts.filter((contact) =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );


  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
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
