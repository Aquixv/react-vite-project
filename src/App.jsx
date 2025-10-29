import { useEffect, useState } from "react"
import Background  from "./components/background/background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
const App = () => {
  let heroData = [
  {text1:"Dive into", text2:"What you love"},
  {text1:"Indulge in", text2:"your passions"},
  {text1:"Give into", text2:"your desires"},
  ]
  const [heroCount,setheroCount]  = useState(0);
  const [playStatus,setplayStatus]  = useState(false);

  useEffect (() => {
    setInterval(() => {
      setheroCount ((count) => {return count===2?0:count+1})
    }, 8000);
  }, [])

  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setplayStatus = {setplayStatus}
      heroData = {heroData[heroCount]}
      heroCount = {heroCount}
      setheroCount = {setheroCount}
      playStatus = {playStatus}/>
    </div>
  )
}
export default App