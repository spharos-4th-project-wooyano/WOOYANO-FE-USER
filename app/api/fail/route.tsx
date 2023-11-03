// import { useRouter } from "next/router";

// export default function FailPage() {
//   const {query} = useRouter();

//   return (
//     <main className="flex flex-col items-center">
//       <h1>결제 실패</h1>
//       <p>이유: {query.message ?? "알 수 없음"}</p>
//     </main>
//   );
// }

import { type NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('message')
  console.log(searchParams);
  
  // query is "hello" for /api/search?query=hello
  return (
    <main className="flex flex-col items-center">
      <h1>결제 실패</h1>
      <p>이유: {query ?? "알 수 없음"}</p>
    </main>
  );
}