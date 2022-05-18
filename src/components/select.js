import { useSelector, useDispatch } from 'react-redux';
import { mapSelectors, actions } from '../redux/slice';

const Select = ({ erps, mmFieldId, mmFieldName }) => {
  const dispatch = useDispatch();
  const mapField = useSelector((state) =>
    mapSelectors.selectById(state, mmFieldId)
  );

  const handleSelectErpField = (e) => {
    dispatch(
      actions.selectErpField({
        id: mmFieldId,
        name: mmFieldName,
        field_id: e.target.value,
      })
    );
  };

  const options = erps.map((option) => (
    <option key={option.field_id} value={option.field_id}>
      {option.label}
    </option>
  ));

  return (
    <select
      value={mapField ? mapField.field_id : ''}
      onChange={handleSelectErpField}
    >
      {options}
    </select>
  );
};

export default Select;
