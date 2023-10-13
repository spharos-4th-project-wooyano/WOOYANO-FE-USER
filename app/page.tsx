import ChatComponent from '@/components/chatComponent'
import React from 'react'

function Home() {
  return (
    <main className='bg-black h-[100vh] pt-24'>
      <div className='bg-slate-800 p-3 w-[80%] rounded-md text-white mx-auto'>
        <h2 className='text-2xl'>GPT-4 Streaming Chat Application</h2>
        <ChatComponent />
      </div>
    </main>
    
  )
}

export default Home