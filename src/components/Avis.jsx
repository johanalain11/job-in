import React from 'react'

const Avis = () => {
    const avis = [
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "/src/assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
        {name:"Johan NZALI", periode: "il y a 3 jours", image: "../assets/account.png", 
        message:"Cette application est très efficace et m’a permis d’arrondir mes fins du mois."},
    ];

  return (
    <div className='bg-green1'>
    <div className='max-w-[1240px] items-center py-10 md:mt-0 min-h-[550px] ml-8 justify-center md:items-start md:ms-4 lg:ms-36 '>
        <div>
            <div className='font-bold text-4xl w-full items-center md:justify-start text-white'>Avis de nos <span className='text-yellow'>utilisateurs</span></div>
        </div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 items-center md:justify-evenly py-12'>
            {
                avis.map((avis, index) => <div key={index} className='bg-white hover:-translate-y-1 shadow-lg hover:shadow-green2 transition ease-out duration-500 p-4 md:p-6 xl:p-7 max-w-64 h-60 md:h-64 hover:rounded-lg rounded-md mx-auto'>
                    <div className='flex flex-row'>
                        <img src={avis.image} alt='/' />
                        <div>
                            <h3 className='text-2xl font-bold'>{avis.name}</h3>
                            <p className='text-gray1 text-base pb-2'>{avis.periode}</p>
                        </div>
                    </div>
                    <p className='items-start'>"{avis.message}"</p>
                    </div>)
            }
        </div>
    </div>
        
    </div>
  )
}

export default Avis