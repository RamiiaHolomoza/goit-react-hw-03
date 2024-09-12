import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>

      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
