import { useDispatch, useSelector } from "react-redux";

import { findContact } from "./redux/filter/filterSlice";

const Filter = () => {

  const dispatch = useDispatch();
  return (
    <>
      <h3>Find your contacts by name</h3>

      <input
        name="filter"
        type="text"
        onChange={(e) => {
          dispatch(findContact(e.target.value));

        }}
      />
    </>
  );
};

export default Filter;
