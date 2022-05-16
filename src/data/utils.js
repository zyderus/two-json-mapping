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
