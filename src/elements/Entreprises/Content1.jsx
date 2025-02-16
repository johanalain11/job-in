import React from 'react'
import model7 from '../../assets/model7.png'
import { GrLocation } from "react-icons/gr"

const Content1 = () => {

  return (
    <div className='w-full'>
        <div className='text-green1 flex items-center w-full'>
            <div >
                <img src={model7} alt='/' className='w-full min-h-80 object-cover'/>
            </div>
            <div className='absolute text-2xl md:text-4xl xl:text-5xl max-w-screen-lg px-3 md:px-7'>
                <p className='font-extrabold'>Contactez dans entreprises partout dans le territoire et répondez à leurs besoins grâce à<span className='font-logo font-black text-white'> JOB-in</span>
                </p>
                    <form className='border border-green1 flex flex-row justify-between w-fit my-2 md:my-4 xl:my-8 text-lg md:text-2xl xl:text-3xl shadow shadow-green1 bg-white bg-opacity-55 hover:bg-white transition ease-out duration-200'>
                        <div className='flex flex-col md:flex-row md:divide-x-2 md:divide-green1 py-2'>
                            <input type="text" name='nomJobber' placeholder="Entrer le nom de l'entreprise" className='bg-transparent text-green1 p-1 xl:p-2 mx-1'/>
                            <div className='flex mx-1'>
                                <GrLocation color='#164A41' className='ml-2 w-10 hidden md:block'/>
                                <input type="text" name='location' placeholder="Localisation" className='bg-transparent text-green1 p-1 xl:p-2 mt-3 md:mt-0'/>
                            </div>
                        </div>
                        <div className='min-w-10 justify-center flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" className='bg-green1 p-1'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 23.8333C10.8333 22.1261 11.1696 20.4357 11.8229 18.8584C12.4762 17.2812 13.4337 15.8481 14.6409 14.6409C15.8481 13.4338 17.2812 12.4762 18.8584 11.8229C20.4356 11.1696 22.1261 10.8333 23.8333 10.8333C25.5405 10.8333 27.2309 11.1696 28.8082 11.8229C30.3854 12.4762 31.8185 13.4338 33.0257 14.6409C34.2328 15.8481 35.1904 17.2812 35.8437 18.8584C36.497 20.4357 36.8333 22.1261 36.8333 23.8333C36.8333 27.2811 35.4637 30.5877 33.0257 33.0257C30.5877 35.4637 27.2811 36.8333 23.8333 36.8333C20.3855 36.8333 17.0789 35.4637 14.6409 33.0257C12.2029 30.5877 10.8333 27.2811 10.8333 23.8333ZM23.8333 6.5C21.0748 6.5004 18.3563 7.15914 15.9036 8.42149C13.4509 9.68383 11.3349 11.5133 9.73151 13.7579C8.12808 16.0025 7.08352 18.5974 6.68463 21.3268C6.28574 24.0563 6.54404 26.8416 7.43808 29.4512C8.33211 32.0607 9.83605 34.4192 11.8249 36.3307C13.8138 38.2421 16.2301 39.6513 18.8731 40.4411C21.5161 41.2308 24.3094 41.3784 27.0209 40.8715C29.7324 40.3646 32.2838 39.2179 34.463 37.5267L41.8015 44.8652C42.2101 45.2598 42.7574 45.4782 43.3255 45.4733C43.8936 45.4684 44.437 45.2405 44.8387 44.8388C45.2405 44.4371 45.4683 43.8936 45.4733 43.3255C45.4782 42.7574 45.2598 42.2101 44.8651 41.8015L37.5266 34.463C39.5158 31.9008 40.7462 28.8319 41.0778 25.6052C41.4093 22.3784 40.8288 19.1234 39.4023 16.2102C37.9757 13.2971 35.7603 10.8426 33.008 9.12605C30.2557 7.40948 27.077 6.49964 23.8333 6.5ZM23.8333 32.5C26.1318 32.5 28.3362 31.5869 29.9616 29.9616C31.5869 28.3363 32.5 26.1319 32.5 23.8333C32.5 21.5348 31.5869 19.3304 29.9616 17.7051C28.3362 16.0798 26.1318 15.1667 23.8333 15.1667C21.5348 15.1667 19.3304 16.0798 17.705 17.7051C16.0797 19.3304 15.1666 21.5348 15.1666 23.8333C15.1666 26.1319 16.0797 28.3363 17.705 29.9616C19.3304 31.5869 21.5348 32.5 23.8333 32.5Z" fill="white"/>
                            </svg> 
                        </div>              
                    </form>
                <p className='text-green1 text-sm md:text-base'>Populaires: Gold Telecom, Orange Cameroun ...</p>
            </div>
        </div>
    </div>
  )
}

export default Content1