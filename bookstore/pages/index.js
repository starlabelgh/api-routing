import {useState} from 'react'
export default function Home() {
  const [name, setName] = useState("")
  const data = fetch("/api/hello/")
  .then((res)=>res.json())
  .then((data)=>setName(data.name))

  console.log(data)
  return (
    <div>{name}</div>
  )
}
