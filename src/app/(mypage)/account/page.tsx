import React from 'react'
import AccountInfo from './accountInfo';
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

const accountInfo = async () => {
  const session = await getServerSession(options)
  const url = `${process.env.BASE_API_URL}/api/v1/users/info`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.user.token}`,
      'Email':`${session?.user.email}`
    },
  });
  if (!res.ok) {
    console.log(!res.json());
    throw new Error('Failed to fetch data')
  }
  console.log(res.json());
  return res.json()
}

const AccountPage = () => {
  return (
    <div>
      <AccountInfo/>
    </div>
  );
};

export default AccountPage;
