import Avatar from '@/shared/Avatar'
import React, { SetStateAction } from 'react'
import { FaStar } from 'react-icons/fa'

function Worker({setOnClickData,data}:{setOnClickData:React.Dispatch<SetStateAction<any>>,data:any}) {
  
  return (
    <div onClick={()=>{setOnClickData({
      workername:data.name,
      service:data.service,
      desc:data.desc,
    })}}>
      <div className="flex items-center">
        <Avatar
          hasChecked
          hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
          sizeClass="h-14 w-14"
          radius="rounded-full"
        />
        <div className='ml-3'>
          <a className="block text-xl font-medium" href="##">
            {data.name}
          </a>
          <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400 gap-2">
          <FaStar className="fill-yellow-400" />
          <p>{`(${data.star})`}</p>
          </div>
        </div>
      </div>

      {/* desc */}
      <span className="block text-neutral-6000 dark:text-neutral-300 mt-5">
        {data.sub_desc}
      </span>
    </div>
  )
}

export default Worker