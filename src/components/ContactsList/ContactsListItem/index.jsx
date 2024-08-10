import { FaStar } from 'react-icons/fa6';
import { CiTrash } from 'react-icons/ci';
import styles from './ContactsListItem.module.css';

function ContactsListItem ({
  contact: { id, fullName, phoneNumber, isFavourite },
  remove,
  handle,
}) {
  return (
    <li className={styles.contactItem}>
      <h3>{fullName}</h3>
      <p>
        {' '}
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
      <button className={styles.favouriteBtn} onClick={() => handle(id)}>
        <FaStar className={isFavourite ? styles.clicked : styles.notCliked} />
      </button>
      <button onClick={() => remove(id)} className={styles.deleteBtn}>
        <CiTrash />
      </button>
    </li>
  );
}

export default ContactsListItem;
