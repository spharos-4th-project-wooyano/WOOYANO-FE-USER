import Link from 'next/link'
import React from 'react'

function Findinfo() {
  return (
    <div className='flex gap-4'>
        <Link href="/findid">아이디 찾기</Link>
        <Link href="/findpwcert">비밀번호 찾기</Link>
    </div>
  )
}

export default Findinfo