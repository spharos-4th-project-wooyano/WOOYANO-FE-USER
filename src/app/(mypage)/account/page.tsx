import React from 'react'
import AccountInfo from './accountInfo';
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { BaseResDataType } from '@/types/BaseResDataType';

const accountInfo = async () => {
  const session = await getServerSession(options)

  if (!session || !session.user) {
    // 로그인되어 있지 않으면 로그인 페이지로 리다이렉트
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/mypage/info`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.user.result.token}`,
      'Email':`${session?.user.result.email}`
    },
  }); if(res.ok) {
    const data = await res.json();
    console.log("data :", data)
    return data;
  } else {
    console.error('Failed to fetch data:', res.status, res.statusText);
  }
}

async function AccountPage() {
  const data: BaseResDataType = await accountInfo();
  console.log("data:",data)

  return (
    <div>
      <AccountInfo accountInfo={data.result}/>
    </div>
  );
};

export default AccountPage;


