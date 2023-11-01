// import ButtonPrimary from '@/shared/ButtonPrimary';
// import ButtonThird from '@/shared/ButtonThird';
// import Checkbox from '@/shared/Checkbox';
// import { Popover, Transition } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import React, { Fragment, useState } from 'react'

// // DEMO DATA
// const typeOfProperty = [
//   {
//     name: "가사도우미",
//     description: "집안일 부담을 덜어드립니다:)",
//     checked: true,
//   },
//   {
//     name: "이사 / 입주 청소",
//     description: "새 집과 같이 깔끔하게 만들어드립니다.",
//     checked: true,
//   },
//   {
//     name: "사무실 청소",
//     description:
//       "작업 환경을 보다 깨끗하게 해드립니다.",
//     checked: true,
//   },
//   {
//     name: "가전 청소",
//     description: "새 것과 같은 가전제품으로 만들어드립니다.",
//   },
// ];

// //
// const moreFilter1 = typeOfProperty;

// const TabFilters = () => {
//   const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);
//   //
//   const [isOnSale, setIsOnSale] = useState(true);
//   const [rangePrices, setRangePrices] = useState([0, 1000]);
//   //
//   const closeModalMoreFilter = () => setisOpenMoreFilter(false);
//   const openModalMoreFilter = () => setisOpenMoreFilter(true);

//   const renderXClear = () => {
//     return (
//       <span className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer">
//         <XMarkIcon className="h-3 w-3" />
//       </span>
//     );
//   };
// }


//   const renderTabsTypeOfPlace = () => {
//     return (
//       <Popover className="relative">
//         {({ open, close }: { open: boolean, close: () => void }) => (
//           <>
//             <Popover.Button
//               className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
//                 open ? "!border-primary-500 " : ""
//               }`}
//             >
//               <span>Type of property</span>
//               <i className="las la-angle-down ml-2"></i>
//             </Popover.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
//                 <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
//                   <div className="relative flex flex-col px-5 py-6 space-y-5">
//                     {typeOfProperty.map((item) => (
//                       <div key={item.name} className="">
//                         <Checkbox
//                           name={item.name}
//                           label={item.name}
//                           subLabel={item.description}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
//                     <ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
//                       Clear
//                     </ButtonThird>
//                     <ButtonPrimary
//                       onClick={close}
//                       sizeClass="px-4 py-2 sm:px-5"
//                     >
//                       Apply
//                     </ButtonPrimary>
//                   </div>
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </>
//         )}
//       </Popover>
//     );
//   };

// function DropDownMenu() {
//   return (
//     <div>
//       {renderTabsTypeOfPlace()}
//     </div>
//   )
// }

// export default DropDownMenu