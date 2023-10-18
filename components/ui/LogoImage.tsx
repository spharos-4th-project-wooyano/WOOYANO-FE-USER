import React from 'react'
import Image from 'next/image'

function LogoImage() {
  return (
    <>
      <Image
      alt="우야노 로고"
      src={"images/Logo/wooyano-logo.png"}
      width={1000}
      height={1000}
      />
    </>
  )
}

export default LogoImage