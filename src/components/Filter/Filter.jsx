import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/contacts-selectors';

import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilter = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
}
