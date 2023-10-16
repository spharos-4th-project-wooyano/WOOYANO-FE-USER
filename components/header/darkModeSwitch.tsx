'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/button';

function DarkModeSwitch() {
  const {theme,setTheme}=useTheme();
  

  return (
    <div>
      <div className='px-2'>
        <Button size='sm' variant='flat' onClick={()=>setTheme(theme==="light"?"dark":"light")}>{theme==="light"?"Dark":"Light"}</Button>
      </div>
    </div>
  )
}

export default DarkModeSwitch