'use client'
import ModalReview from "@/components/listing-image-gallery/components/ModalReview";
import React from "react";


const Page = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  return  (
    <>
      <ModalReview 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={onClose}
      >
      </ModalReview>
      {/* <ReviewDetail/> */}
      <button onClick={() => setIsOpen(true)}>리뷰 작성</button>

    </>
  );
};

export default Page;