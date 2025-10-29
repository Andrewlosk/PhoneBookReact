
import "./App.css";
import { nanoid } from "nanoid";
import PhoneList from "./PhoneList";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeContacts } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch()

  const [nameInp, setNameInp] = useState('')
  const [numInp, setNumInp] = useState('')



  

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeContacts({id:nanoid(), name: nameInp, number: numInp}));
        setNameInp('');
        setNumInp('');
      }}>
        <label>name</label>
        <input
          type="text"
          name="name"

          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameInp}

          onChange={(e) => {setNameInp(e.target.value)}}
        />

        <label>phone</label>

        <input
          type="tel"
          name="number"

          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numInp}
          onChange={(e) => {setNumInp(e.target.value)}}
          
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Contacts</h2>

      <Filter></Filter>
      <PhoneList ></PhoneList>


    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     id: nanoid(),
//     name: "",
//     number: "",
//     filter: "",
//     filteredContacts: [],
//     isFilter: false,
//   };

//   componentDidUpdate() {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }

//   componentDidMount() {
//     const localValue = JSON.parse(localStorage.getItem("contacts"));
//     if (localValue) {
//       this.setState({ contacts: localValue });
//     }
//   }

//   handleChange = ({ target }) => {
//     const { name, value } = target;

//     this.setState({ [name]: value });

//     // console.log(this.state.filter);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     let search = false

//     this.setState({ id: nanoid() });

//     const form = e.currentTarget;
//     const { id, name, number } = this.state;

//     this.state.contacts.forEach((contact) => {
//       if (contact.name === name) {
//         alert(`${name} is already in contacts`);

//         search = true

//       }

//     });

//     if(!search) {
//       this.setState((prev) => ({
//       contacts: [
//         ...prev.contacts,
//         { id, name, number,},
//       ],
//     }));
//     }

//     // console.log(this.state.contacts);

//     form.reset();
//   };

//   handleDelete = (id) => {
//     const updateContacts = this.state.contacts.filter(
//       (contact) => contact.id !== id
//     );

//     this.setState({ contacts: updateContacts });
//   };

//   filterFn = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });

//     // console.log(this.state.filter);

//     // const filteredContacts = this.state.contacts.filter(
//     //   (contact) => contact.name === this.state.filter
//     // );

//     const filteredContacts = this.state.contacts.filter(
//       (contact) => {
//         console.log(contact.name.toUpperCase(), value.toUpperCase());
//         return contact.name.toUpperCase().includes(value.toUpperCase())
//       }
//     );

//     // console.log(filteredContacts);

//     if (this.state.filter.length > 0) {
//       this.setState({ isFilter: true });
//     } else {
//       this.setState({ isFilter: false });
//     }

//     this.setState({ filteredContacts });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>name</label>
//           <input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />

//           <label>phone</label>

//           <input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />

//           <button type="submit">Submit</button>
//         </form>

//         <h2>Contacts</h2>

//         <Filter filterFn={this.filterFn}></Filter>

//         {/* {this.state.contacts.length > 0 && <PhoneList contacts={this.state.contacts} handleDelete={this.handleDelete}></PhoneList>} */}

//         {this.state.isFilter ? (
//           <PhoneList
//             contacts={this.state.filteredContacts}
//             handleDelete={this.handleDelete}
//           ></PhoneList>
//         ) : (
//           <PhoneList
//             contacts={this.state.contacts}
//             handleDelete={this.handleDelete}
//           ></PhoneList>
//         )}
//       </div>
//     );
//   }
// }

export default App;
