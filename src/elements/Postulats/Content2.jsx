import React from 'react'
import DataTable from 'react-data-table-component'

function Content2() {

  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Entreprise',
      selector: row => row.entreprise,
      sortable: true
    },
    {
      name: 'Job',
      selector: row => row.job,
      sortable: true
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true
    },
    {
      name: 'Statut',
      selector: row => row.statut,
      sortable: true
    },
  ];
  
  const data = [
    {
      id: 1,
      entreprise: "Gold Telecom",
      job: "Développeur",
      date: "21/08/2023",
      statut: "Effectué"
    },
    {
      id: 2,
      entreprise: "Gold Telecom",
      job: "Data Manager",
      date: "08/11/2023",
      statut: "En cours"
    },
  ]

  return (
    <div className='m-3 lg:m-6 p-2 lg:p-4 border border-gray3 h-full'>
        <p className='font-bold text-xl lg:text-2xl'>Historique</p>
        <div>
          <DataTable
            columns={columns}
            data={data}
            fixedHeader
            className='text-3xl'
            ></DataTable>
        </div>
    </div>
  )
}

export default Content2