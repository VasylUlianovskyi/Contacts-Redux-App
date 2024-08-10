import { connect } from "react-redux";
import ContactsListItem from "./ContactsListItem";
import {
  handleFavourite,
  removeContacts,
} from "../../store/slices/contactsSlice";

function ContactsList({ contacts, remove, handle }) {
  const mapContacts = (c) => (
    <ContactsListItem key={c.id} contact={c} remove={remove} handle={handle} />
  );

  return (
    <section>
      <h2>ContactsList</h2>
      <ul>{contacts.map(mapContacts)}</ul>
    </section>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeContacts(id)),
  handle: (id) => dispatch(handleFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
