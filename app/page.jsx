import React from 'react'

function page() {
  return (
    <main className='w-screen h-screen flex p-3'>
      <div className='w-fit h-fit max-h-[90vh] md:aspect-[16/9] m-auto flex overflow-hidden rounded-lg '>
        <img src="/invitacion.jpeg" className='w-full h-full object-contain ' alt="" />
      </div>
    </main>
  )
}

export default page