import { useDispatch, useSelector } from 'react-redux';
import { mapSelectors, actions } from '../redux/slice';

const Input = ({ rowData }) => {
  const dispatch = useDispatch();
  const mapField = useSelector((state) =>
    mapSelectors.selectById(state, rowData.id)
  );

  const handleChange = (e) => {
    dispatch(
      actions.setDefaultValue({
        id: rowData.id,
        static_value: e.target.value,
      })
    );
  };

  const isChecked = mapField?.static_value === '1';

  const handleCheckbox = (e) => {
    dispatch(
      actions.setDefaultValue({
        id: rowData.id,
        static_value: isChecked ? '' : '1',
      })
    );
  };

  const numberType =
    rowData.type === 'float' ||
    rowData.type === 'int' ||
    rowData.type === 'money';
  const checkboxType = rowData.type === 'boolean';

  return numberType ? (
    <input
      type="number"
      value={mapField?.static_value || ''}
      onChange={handleChange}
      disabled={!mapField}
    />
  ) : checkboxType ? (
    <input
      type="checkbox"
      onChange={handleCheckbox}
      checked={isChecked}
      disabled={!mapField}
    />
  ) : (
    <input
      type="text"
      value={mapField?.static_value || ''}
      onChange={handleChange}
      disabled={!mapField}
    />
  );
};

export default Input;
