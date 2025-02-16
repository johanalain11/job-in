import React from 'react'
import DataTable from 'react-data-table-component'

function Content2() {

  const columns = [
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true
    },
    {
      name: 'Statut',
      selector: row => row.statut,
      sortable: true
    },
    {
      name: 'Date de publication',
      selector: row => row.date1,
      sortable: true
    },
    {
      name: 'Date limite',
      selector: row => row.date2,
      sortable: true
    },
    {
      name: 'Type',
      selector: row => row.type,
      sortable: true
    },
    {
      name: 'Nb de candidatures',
      selector: row => row.candidats,
      sortable: true
    },
    {
      name: 'Besoin',
      selector: row => row.besoin,
      sortable: true
    },
    {
      name: '',
      selector: row => row.action,
      sortable: true
    },
  ];
  
  const data = [
    {
      role: 'front-end Dev',
      statut: 'en cours',
      date1: '08/11/2023',
      date2: '01/03/2024',
      type: 'Temps plein',
      candidats: '54',
      besoin: '4/8',
      action: '...'
    },
    {
      role: 'Java Dev',
      statut: 'en cours',
      date1: '10/11/2023',
      date2: '01/03/2024',
      type: 'Temps plein',
      candidats: '54',
      besoin: '4/8',
      action: '...'
    },
    {
      role: 'Designer',
      statut: 'en cours',
      date1: '06/11/2023',
      date2: '01/03/2024',
      type: 'Temps plein',
      candidats: '54',
      besoin: '4/8',
      action: '...'
    },
  ]

  return (
    <div className='m-2 lg:m-4 p-2 lg:p-4 max-w-screen-lg'>
      <div className='w-full border border-gray3 p-2'>
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          selectableRows
          selectableRowsHighlight/>
      </div>
    </div>
  )
}

export default Content2