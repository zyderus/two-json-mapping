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

  const handleCheckbox = (e) => {
    const isChecked = mapField?.static_value === 'true';

    dispatch(
      actions.setDefaultValue({
        id: rowData.id,
        static_value: isChecked ? 'false' : 'true',
      })
    );
  };

  const InputField = () => {
    return (
      <div style={{ display: 'flex' }}>
        <input
          type={inputType}
          value={mapField?.static_value || ''}
          onChange={handleChange}
        />
        <span>{rowData.type}</span>
      </div>
    );
  };

  const InputCheckbox = () => {
    const checked =
      mapField?.static_value === 'true' || mapField?.static_value === true;
    return (
      <div style={{ display: 'flex' }}>
        <input type="checkbox" onChange={handleCheckbox} checked={checked} />
        <span>{rowData.type}</span>
      </div>
    );
  };

  let inputType = '';

  switch (rowData.type) {
    case 'boolean':
      return <InputCheckbox />;
    case 'float':
    case 'int':
    case 'money':
      inputType = 'number';
      return <InputField />;
    default:
      inputType = 'text';
      return <InputField />;
  }
};

export default Input;
