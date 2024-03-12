import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/filterSlice';
import { getContacts } from 'redux/contacts/selectors';

import { ContactListStyled } from './ContactList.styled';
import { ContactListItems } from './ContactListItems';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const findContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  return (
    <ContactListStyled>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactListItems
            key={id}
            name={name}
            number={number}
            contactId={id}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
