import s from "./SearchBox.module.css";

const SearchBox = ({ searchUser, searchValue }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.searchBox}
        type="text"
        value={searchValue}
        onChange={searchUser}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
