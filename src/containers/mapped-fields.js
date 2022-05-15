import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMapFields, addMmFields, addErpFields } from '../redux/slice';
import Select from '../components/select';

const Fields = () => {
  const dispatch = useDispatch();

  const mmfields = useSelector((state) => state.fields.mmfields);

  useEffect(() => {
    dispatch(addMmFields());
    dispatch(addErpFields());
    dispatch(addMapFields());
  }, []);

  const rows = mmfields.map((field, i) => (
    <tr key={i}>
      <td>{field.id}</td>
      <td>{field.is_required && '*'}</td>
      <td>{field.label}</td>
      <td>
        <Select rowId={field.id} />
      </td>
      <td>
        <button>x</button>
      </td>
      <td>
        <input type="text" />
      </td>
    </tr>
  ));

  return (
    <div className="tables">
      <h3>Fields</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>req</th>
            <th>Mano Field</th>
            <th>ERP Field</th>
            <th>Reset</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Fields;
