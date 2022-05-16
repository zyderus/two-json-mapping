import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, mmSelectors } from '../redux/slice';
import Select from '../components/select';

const Fields = () => {
  const dispatch = useDispatch();

  const mmfields = useSelector(mmSelectors.selectEntities);

  const useSortFields = (sortBy) => {
    const entities = Object.values(mmfields);
    return entities.sort((a, b) => b[sortBy] - a[sortBy]);
  };

  const sortedMmFields = useSortFields('is_required');

  useEffect(() => {
    dispatch(actions.addMmFields());
    dispatch(actions.addErpFields());
    dispatch(actions.addMapFields());
  }, [dispatch]);

  const rows = sortedMmFields.map((field, i) => (
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
