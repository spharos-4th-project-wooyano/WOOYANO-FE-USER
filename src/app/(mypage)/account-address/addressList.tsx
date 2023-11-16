import React from "react";
import AddressFlightCard from "./addressFlightCard";

export default function AddressList() {
  return (
    <div>
      <AddressFlightCard
        data={{
          id: "",
          res: "",
          review: {
            img: "",
            name: "",
            workername: "",
          },
        }}
      />
    </div>
  );
}
