import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const typeOfProperty = [
  {
    id:null,
    value: "service select"
  },
  {
    id:1,
    value: "가사도우미"
  },
  {
    id:2,
    value: "이사 / 입주 청소"
  },
  {
    id:3,
    value: "사무실 청소"
  },
  {
    id:4,
    value: "가전 청소"
  }
]

function DropDownFilter() {

  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState<string>('서비스');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const selectedValue = typeOfProperty[index].value;
    setSelectedValue(selectedValue);
    console.log('Selected:', selectedValue);
  };

  return (
    <div>
       <div className='p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between'>
      <select onChange={handleSelectChange}>
        {typeOfProperty.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
    </div>
  )
}

export default DropDownFilter