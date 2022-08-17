import memesData from "/home/andrea/meme-generator/memesData.js"
import React from "react"



export default function Meme() {
  const [img, setImg] = React.useState("")

  function getMemeImage() {
    let randomUrl;
    const array = memesData.data.memes
    randomUrl = array[Math.floor(Math.random() * array.length)].url
    setImg(randomUrl)
  }

  return (
    <section>
      <div className="input-wrapper">
        <input type="text" placeholder="Upper text"/>
        <input type="text" placeholder="Lower text"/>
        <button onClick={getMemeImage} className="meme-btn">GENERATE MEME</button>
        <div className="meme-wrapper"><img src={img} className="meme-img" /></div>
      </div>
    </section>
  )
}
