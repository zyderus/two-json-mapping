import { useDispatch, useSelector } from 'react-redux';
import { erpSelectors, mapSelectors } from '../redux/slice';

const Select = ({ rowId }) => {
  const dispatch = useDispatch();
  const map = useSelector((state) => mapSelectors.selectById(state, rowId));
  const erp = useSelector(erpSelectors.selectAll);

  const options = erp.map((option) => (
    <option key={option.field_id} value={option.field_id}>
      {option.label}
    </option>
  ));

  return <select defaultValue={map?.field_id}>{options}</select>;
};

export default Select;
