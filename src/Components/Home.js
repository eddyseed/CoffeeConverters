import React from 'react'
import './styles.css'
import About from './Subpages/About'
export default function Home() {
  return (
    <div id='home' className='h-[80vh] m'>
      <div className='m flex flex-col justify-center h-full space-y-12'>
        <div className='m flex flex-col justify-center space-y-6'>
          <h6 className='ml-24 text-8xl mos-fs font-bold font-[#333333]'>Get Code</h6>
          <p className='ml-24 text-2xl pr-56 mos-fs font-semibold leading-9 text-[#595959]'>Embark on an extraordinary journey within our tech community, where ideas come to life, collaborations flourish, and innovation knows no bounds.</p>
        </div>
        <div className='pl-24 m w-full flex flex-row space-x-3'>
          <div className='w-3/5'>
            <div><input type="text" className='m w-full' placeholder='Search your query...' /></div>
          </div>
          <div><button className="btn-teal"><i class="fa-solid fa-magnifying-glass"></i></button></div>
        </div>
      </div>
      <div>
        <About/>
      </div>
    </div>
  )
}
