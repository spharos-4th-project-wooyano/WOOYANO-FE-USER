'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import PayDone from './PayDone'

function page() {
  const searchParams = useSearchParams()
  const paymentKey = searchParams.get('paymentKey')
  const orderId = searchParams.get('orderId')
  const amount = searchParams.get('amount')

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.tosspayments.com/v1/payments/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(
              `${process.env.TOSS_PAYMENTS_SECRET_KEY}:`
            ).toString("base64")}`,
          },
          body: JSON.stringify({ paymentKey, orderId, amount }),
        }
      );

      if (!response.ok) {
        // Handle non-successful responses here
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const payment = await response.json();

      console.log(payment);

      return payment
    } catch (err: any) {
      console.error("err", err);

      return {
        redirect: {
          destination: `/fail?code=${err.code}&message=${err.message}`,
          permanent: false,
        },
      };
    }

  };

  useEffect(() => {
    
    getData()
  },[])

  return (
    <div>
      <PayDone />   
    </div>
  )
}

export default page
