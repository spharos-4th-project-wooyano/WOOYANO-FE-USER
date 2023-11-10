import Avatar from '@/shared/Avatar'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function Worker() {
  return (
    <div>
      <div className="flex items-center">
        <Avatar
          hasChecked
          hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
          sizeClass="h-14 w-14"
          radius="rounded-full"
        />
        <div className='ml-3'>
          <a className="block text-xl font-medium" href="##">
            임찬섭
          </a>
          <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400 gap-2">
          <FaStar className="fill-yellow-400" />
          <p>(50)</p>
          </div>
        </div>
      </div>

      {/* desc */}
      <span className="block text-neutral-6000 dark:text-neutral-300">
        투룸, 쓰리룸 전문 가사도우미. 고객 만족율 99% !
      </span>
    </div>
  )
}

export default Worker