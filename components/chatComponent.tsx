"use client"
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  // console.log(messages);
  // console.log(input);

  const checkPrompt =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (input === '청소' || input === '가사도우미') return handleSubmit(e)
    else alert('청소와 관련된 단어를 적어주세요')
    
  }

  return (
    <div className='bg-zinc-100 dark:bg-background1 p-3 w-full h-[100vh] fixed rounded-md  mx-auto'>
      {/* <div className='relative left-[25%] h-20 w-full mt-4'>
        <div className="flex absolute"><p className="text-2xl font-bold">우</p><p className="text-xs leading-10">리들의 문제를</p></div>
        <div className="flex absolute top-1/3 left-4"><p className="text-2xl font-bold">야</p><p className="text-xs leading-10">무지게 해결해줄</p></div>
        <div className="flex absolute top-2/3 left-8"><p className="text-2xl font-bold">노</p><p className="text-xs leading-10">련한 전문가를 찾습니다.</p></div>
      </div> */}
      <div className=' h-20 mt-4'>
        <div className="flex "><p className="text-2xl font-bold">우</p><p className="text-xs leading-10">리들의 문제를</p></div>
        <div className="flex  top-1/3 left-4"><p className="text-2xl font-bold">야</p><p className="text-xs leading-10">무지게 해결해줄</p></div>
        <div className="flex npm top-2/3 left-8"><p className="text-2xl font-bold">노</p><p className="text-xs leading-10">련한 전문가를 찾습니다.</p></div>
      </div>
      {messages.map((message : Message) => {
        return (
          <div key={message.id} className="pt-4">
            {/*  Name of person talking */}
            {
              message.role === "assistant"
              ?
              <h3 className="text-lg font-semibold mt-2">
                  우야노 전문가
              </h3>
              :
              <h3 className="text-lg font-semibold mt-2">
                  UserName
              </h3>
            }
            
            {/* Formatting the message */}
            {message.content.split("\n").map((currentTextBlock: string, index : number) => {
              if(currentTextBlock === "") {
                  return <p key={message.id + index}>&nbsp;</p> // " "
              } else {
                  return <p key={message.id + index}>{currentTextBlock}</p> // "Cooper Codes is a YouTuber"
              }
            })}


            {/*  
              Cooper Codes is a YouTuber

              He makes software content

              You should subscribe.

              ["Cooper Codes is a YouTuber", "", "He makes software content", "", "You should subscribe."]

            */}
          </div>
        )
      })}

      <form className="flex absolute bottom-12 w-[100vw]" onSubmit={checkPrompt}>
        <div className="w-full">
          <textarea
              className="mt-2 w-[93vw] dark:bg-background2 border rounded-lg p-2"
              placeholder={"청소 관련 질문을 주세요."}
              value={input}
              onChange={handleInputChange}
          />
        </div>
        <div className="absolute right-[calc(6%)] w-[calc(70px)]">
          <button className="rounded-md bg-blue-600 w-full h-[66px] text-white p-2 mt-2 whitespace-nowrap ">
              질문
          </button>
        </div>
        
      </form>
    </div>
  )
}