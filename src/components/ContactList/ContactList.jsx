import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import {selectContacts} from '../../redux/contactsSlice'
import { useSelector } from 'react-redux';

export default function ContactList({onDelete }) {
  const reduxContacts = useSelector(selectContacts);
  return (
    <ul>
      {reduxContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <BsFillPersonFill />
          <BsFillTelephoneFill />
          <ContactListItem
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />

          {/* <ContactListItem data={contact} /> */}
        </li>
      ))}
    </ul>
  );
}
