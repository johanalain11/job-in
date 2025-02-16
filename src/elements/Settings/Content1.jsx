import React from 'react'
import { VscAccount } from "react-icons/vsc";

function Content1(props) {
  return (
    <div className='p-3 md:p-5 xl:px-9 pb-5 divide-y divide-gray3 space-y-3 max-w-screen-lg'>
      <div>
        <p className='text-xl'>Hello {props.nom},</p>
        <p className='text-gray1'>Vous pouvez configurer votre compte ici.</p>
      </div>
      <div className='pt-4 flex justify-between flex-wrap items-center'>
        <div className='max-w-80'>
          <h2 className='text-2xl'>Photo de profil</h2>
          <p className='text-gray1 my-2 xl:my-4'>Cette image est visible par tous! Elle aidera les recruteurs à vous reconnnaître.</p>
        </div>
        <div className='rounded-full flex justify-center p-2 bg-white top-16 mx-3 left-0 right-0 w-fit'>
          <VscAccount size={90} color='#164A41'/>
        </div>
        <div>
          <input type='submit' value="Modifier le profil" className="border-2 border-green2 p-1 text-green1"/>
        </div>
      </div>
      {/*Informations personnelles*/}
      <div className='pt-4 flex justify-between flex-wrap'>
        <h2 className='text-2xl'>Informations personnelles</h2>
        <div className=' my-3'>
          <form>
          <p>Nom</p>
          <input type='text' className='border border-gray3 p-1 w-full'/>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <span>
              <p>Téléphone</p>
              <input type='text' className='border border-gray3 p-1'/>
            </span>
            <span>
              <p>Email</p>
              <input type='text' className='border border-gray3 p-1'/>
            </span>
            <span>
              <p>Date de naissance</p>
              <input type='text' className='border border-gray3 p-1'/>
            </span>
            <span>
              <p>Genre</p>
              <input type='text' className='border border-gray3 p-1'/>
            </span>
          </div>
          </form>
        </div>

      </div>
      {/*Informations personnelles*/}
      <div className='pt-4 flex justify-between flex-wrap'>
        <div>
          <h2 className='text-2xl'>Type de compte</h2>
          <p className='text-gray1 w-60 text-sm mt-2'>Vous pouvez mettre à jour le type de compte.</p>
        </div>
        <div className=' my-3'>
        <fieldset className='space-y-4'>
          <div className=' flex flex-row space-x-3'>
          <input id="draft" class="peer/draft" type="radio" name="status" checked />
          <label for="draft" class="peer-checked/draft:text-sky-500" >
            <p className='text-xl'>Jobber</p>
            <p className='text-gray1 text-sm'>A la recherche de jobs</p>
          </label>
          </div>
          <div className=' flex flex-row space-x-3'>
          <input id="published" class="peer/published" type="radio" name="status" />
          <label for="published" class="peer-checked/published:text-sky-500">
            <p className='text-xl'>Entreprise</p>
            <p className='text-gray1 text-sm'>Recherche de jobbers, publication de jobs et de publicités.</p>
          </label>
          </div>
        </fieldset>
        </div>
      </div>
      <div className=' flex justify-end items-end'>
        <input type="submit" value={"Sauvegarder"} className='bg-green1 p-1 my-3 text-white font-bold text-lg' />
      </div>
    </div>
  )
}

export default Content1