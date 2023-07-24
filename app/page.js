
'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Home() {
 
  const textRef = useRef();
const[response, setResponse] = useState('')

  const callOpenAI = async () => {
    const text = textRef.current.value;
    console.log(text);
   
    const res = await fetch('/api/openai', {
      method: 'POST',
      body: text
    })  

    const data = await res.json();
    console.log(data);
    console.log(data.choices[0].message.content);
setResponse(data.choices[0].message.content)
  }



  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className="w-[600px] flex-col flex items-center justify-center border-gray-100 bg-blue-50 border p-10 rounded-2xl shadow-2xl"> 
        <div className="text-lg font-bold mb-10">ChatGPT</div>
        <textarea className="w-full bg-gray-50 p-4" rows="10" placeholder='Enter Text Here'ref={textRef}> 
          
        </textarea>
        <button onClick={() => callOpenAI()} className="mt-10 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl">Submit</button>
      
      {response}
      </div>


    </div>
  
  )
  }
 