"use client"
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  // console.log(messages);
  // console.log('input',input);

  const checkPrompt =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (input === '청소' || input === '가사도우미') return handleSubmit(e)
    else alert('청소와 관련된 단어를 적어주세요')
    
  }

  return (
    <div className='bg-[#DEDEDE] dark:bg-background1 p-3 w-full h-[100vh] fixed rounded-md  mx-auto pt-20'>
      
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
                  return <p className="border leading-[50px] text-sm rounded-full bg-[#D3AB7C] text-white pl-2" key={message.id + index}>&nbsp;</p> // " "
              } else {
                  return <p className="border leading-[50px] text-sm rounded-full bg-[#50555C] text-white pl-2" key={message.id + index}>{currentTextBlock}</p> // "Cooper Codes is a YouTuber"
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
              className=" w-[93vw] h-14 dark:bg-background2 border rounded-full pt-[14px] pl-12"
              placeholder={"청소 관련 질문을 주세요."}
              value={input}
              onChange={handleInputChange}
          />
        </div>
        <div className="absolute left-[calc(3%)] top-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 0C6.26613 0 0 6.26613 0 14C0 21.7339 6.26613 28 14 28C21.7339 28 28 21.7339 28 14C28 6.26613 21.7339 0 14 0ZM18.5161 9.48387C19.5153 9.48387 20.3226 10.2911 20.3226 11.2903C20.3226 12.2895 19.5153 13.0968 18.5161 13.0968C17.5169 13.0968 16.7097 12.2895 16.7097 11.2903C16.7097 10.2911 17.5169 9.48387 18.5161 9.48387ZM9.48387 9.48387C10.4831 9.48387 11.2903 10.2911 11.2903 11.2903C11.2903 12.2895 10.4831 13.0968 9.48387 13.0968C8.48468 13.0968 7.67742 12.2895 7.67742 11.2903C7.67742 10.2911 8.48468 9.48387 9.48387 9.48387ZM20.4806 19.0919C18.8718 21.0226 16.5121 22.129 14 22.129C11.4879 22.129 9.12823 21.0226 7.51935 19.0919C6.75161 18.1718 8.14032 17.0202 8.90806 17.9347C10.1726 19.4532 12.0242 20.3169 14 20.3169C15.9758 20.3169 17.8274 19.4476 19.0919 17.9347C19.8484 17.0202 21.2427 18.1718 20.4806 19.0919Z" fill="#CAC6C1"/>
          </svg>
        </div>
        <div className="absolute right-[calc(10%)] top-1">
          <button className="rounded-full bg-[#596E79] w-[2.875rem] h-[2.875rem] text-white p-2 whitespace-nowrap flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="8" viewBox="0 0 18 8" fill="none">
              <path d="M17.7938 3.54332C17.7936 3.54313 17.7934 3.5429 17.7931 3.54271L14.1192 0.187869C13.8439 -0.0634537 13.3987 -0.0625185 13.1248 0.190062C12.8508 0.442611 12.8519 0.851095 13.1271 1.10245L15.5938 3.35484H0.703125C0.314789 3.35484 0 3.64368 0 4C0 4.35632 0.314789 4.64516 0.703125 4.64516H15.5938L13.1272 6.89755C12.8519 7.1489 12.8509 7.55739 13.1248 7.80994C13.3988 8.06255 13.844 8.06342 14.1192 7.81213L17.7932 4.45729C17.7934 4.4571 17.7936 4.45687 17.7938 4.45668C18.0692 4.20448 18.0683 3.79468 17.7938 3.54332Z" fill="white"/>
            </svg>
          </button>
        </div>
        
      </form>
    </div>
  )
}