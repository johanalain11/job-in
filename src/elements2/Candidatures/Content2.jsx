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
      name: 'Nom',
      selector: row => row.nom,
      sortable: true
    },
    {
      name: 'Score',
      selector: row => row.score,
      sortable: true
    },
    {
      name: 'Statut',
      selector: row => row.statut,
      sortable: true
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true
    },
  ];
  
  const data = [
    {
      id: 1,
      nom: "Jason Computer",
      score: 3.7,
      statut: "En attente",
      date: "08/11/2023",
      role: "Javascript Dev",
      action: "Voir la candidature",
    },
    {
      id: 2,
      nom: "Jason Computer",
      score: 3.7,
      statut: "En attente",
      date: "08/11/2023",
      role: "Javascript Dev",
      action: "Voir la candidature",
    },
    {
      id: 3,
      nom: "Jason Computer",
      score: 3.7,
      statut: "En attente",
      date: "08/11/2023",
      role: "Javascript Dev",
      action: "Voir la candidature",
    },
  ]

  return (
    <div className='m-3 lg:m-6 p-2 lg:p-4 border border-gray3 h-full'>
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