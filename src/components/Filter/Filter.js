import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        placeholder="Search"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
        className={css.input}
      />
    </label>
  );
};
