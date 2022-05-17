import { useDispatch, useSelector } from 'react-redux';
import { mapSelectors, actions } from '../redux/slice';

const Select = ({ rowData, erps }) => {
  const dispatch = useDispatch();
  const mapField = useSelector((state) =>
    mapSelectors.selectById(state, rowData.id)
  );

  const options = erps.map((option) => (
    <option key={option.field_id} value={option.field_id}>
      {option.label}
    </option>
  ));

  return (
    <select
      value={mapField ? mapField.field_id : ''}
      onChange={(e) =>
        dispatch(
          actions.selectErpField({ ...rowData, field_id: e.target.value })
        )
      }
    >
      {options}
    </select>
  );
};

export default Select;
