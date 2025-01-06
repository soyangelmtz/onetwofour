import React from 'react'

function page() {
  return (
    <main className='w-screen h-screen flex p-3'>
      <div className='w-fit h-fit max-h-[90vh] m-auto flex overflow-hidden rounded-lg border'>
        <img src="/invita.jpeg" className='w-full h-full object-contain ' alt="" />
      </div>
    </main>
  )
}

export default page