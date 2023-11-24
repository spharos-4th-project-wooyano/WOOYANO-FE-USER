'use client'
import React from "react";
import ReviewDetail from "./reviewDetail";
import ModalReview from "@/components/listing-image-gallery/components/ModalReview";



const page = () => {
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

export default page;