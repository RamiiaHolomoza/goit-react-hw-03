import s from "./Contact.module.css";
import { ImPhone } from "react-icons/im";
import { FaUser } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.name}>
          <FaUser className={s.icon} size="20" />
          {name}
        </p>
        <p className={s.number}>
          <ImPhone className={s.icon} size="20" />
          {number}
        </p>
      </div>

      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
