export const mapItemShape = {
  manomano_field_name: '',
  type: 'erp',
  manomano_field_id: 0,
  field_id: '',
  static_value: '',
  rule_value: null,
};

/*

export const mmfieldsWithErpId = mmfields.map((mmfield) => {
  const erpfieldId = mappedfields.filter(
    (mapped) => mapped.manomano_field_id === mmfield.id
  );
  return erpfieldId[0]
    ? { ...mmfield, field_id: erpfieldId[0].field_id }
    : { ...mmfield };
});

  const mappedfields = useSelector(mapSelectors.selectAll);
  const post = useSelector((state) => mmSelectors.selectById(state, 2));

*/
