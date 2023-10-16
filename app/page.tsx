import ChatComponent from '@/components/chatComponent'
import React from 'react'

function Home() {
  
  return (
    <main className='  pt-6'>
      <div className='bg-zinc-100 dark:bg-slate-800 p-3 w-full h-[100vh] fixed rounded-md  mx-auto'>
        <ChatComponent />
      </div>
    </main>
    
  )
}

export default Home