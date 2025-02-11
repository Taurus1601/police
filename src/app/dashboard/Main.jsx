
import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input";

function Main() {
  return (
    <div className='flex flex-row gap-10 items-center justify-center'>
    <Input className="w-[30vw]" type="email" placeholder="Email" onChange={(e)=>{
                console.log(e.target.value)
              }} />
              <Button onClick={()=>{
                console.log("Submit")
              }}>Submit</Button>
    </div>
  )
}

export default Main