import { useDispatch, useSelector } from 'react-redux';

const Select = ({ rowId }) => {
  const dispatch = useDispatch();
  const erp = useSelector((state) => state.fields.erpfields);
  const map = useSelector((state) => state.fields.mappedfields);

  console.log(map.length);
  console.log(erp.length);

  const erpMapId = map.filter((field) => rowId === field.manomano_field_id);

  console.log('erpMapId', erpMapId[0]);

  const options = erp.map((option) => (
    <option key={option.field_id} value={option.name}>
      {option.label}
    </option>
  ));

  return <select>{options}</select>;
};

export default Select;
