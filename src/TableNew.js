import MaterialTable from 'material-table';
import React from 'react';
function Comp() {
  return (
    <MaterialTable
      title="Basic Sorting Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      
    />
  )
  }
  export default Comp;