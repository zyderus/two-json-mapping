import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, mmSelectors, erpSelectors } from '../redux/slice';
import { Select, Input } from '../components';

const Fields = () => {
  const dispatch = useDispatch();

  const mmfields = useSelector(mmSelectors.selectAll);
  const erps = useSelector(erpSelectors.selectAll);

  const useSortFields = (arr, sortBy) => {
    return arr.sort((a, b) => b[sortBy] - a[sortBy]);
  };

  const sortedMmFields = useSortFields(mmfields, 'is_required');

  useEffect(() => {
    dispatch(actions.addMmFields());
    dispatch(actions.addErpFields());
    dispatch(actions.addMapFields());
  }, [dispatch]);

  const rows = sortedMmFields.map((field, i) => {
    return (
      <tr key={i}>
        <td>{field.id}</td>
        <td className="field-name">
          {field.is_required && '*'} {field.label}
        </td>
        <td>
          <Select erps={erps} mmFieldId={field.id} mmFieldName={field.name} />
        </td>
        <td>
          <button onClick={() => dispatch(actions.deleteMapping(field.id))}>
            x
          </button>
        </td>
        <td>
          <Input rowData={field} />
        </td>
      </tr>
    );
  });

  return (
    <div className="tables">
      <table>
        <thead>
          <tr>
            <th>id</th>
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
