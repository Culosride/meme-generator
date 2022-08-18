import memesData from "/home/andrea/meme-generator/memesData.js"
import React from "react"



export default function Meme() {
  const [img, setImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const array = memesData.data.memes
    const randomUrl = array[Math.floor(Math.random() * array.length)].url
    setImg(img => ({...img, randomImage: randomUrl}))
  }

  return (
    <section>
      <div className="input-wrapper">
        <input type="text" placeholder="Upper text"/>
        <input type="text" placeholder="Lower text"/>
        <button onClick={getMemeImage} className="meme-btn">GENERATE MEME</button>
        <div className="meme-wrapper"><img src={img.randomImage} className="meme-img" /></div>
      </div>
    </section>
  )
}
