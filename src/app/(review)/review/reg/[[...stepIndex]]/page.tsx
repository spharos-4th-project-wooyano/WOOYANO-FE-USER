import React from "react";
import PageAddListing5 from "./PageAddListing5";
import PageAddListing6 from "./PageAddListing6";
import PageAddListing7 from "./PageAddListing7";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let ContentComponent = PageAddListing5;
  switch (Number(params.stepIndex)) {
    case 1:
      ContentComponent = PageAddListing5;
      break;
    case 2:
      ContentComponent = PageAddListing6;
      break;
    case 3:
      ContentComponent = PageAddListing7;
      break;

    default:
      ContentComponent = PageAddListing5;
      break;
  }

  return <ContentComponent />;
};

export default Page;