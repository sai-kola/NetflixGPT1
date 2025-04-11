import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
   
const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang)
    const searchText=useRef(null)
    const handleGptSearchClick=()=>{
      const value = searchText.current.value;
      if (value.trim() === '') return;
      alert(`Opp's Billing limit exceedded for OpenAI API 
        here is search text: ${value}`);
    }
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form className=' w-ful md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className=' p-4 m-4 bg-white rounded-lg col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 cursor-pointer' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar