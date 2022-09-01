import memesData from "/home/andrea/meme-generator/memesData.js"
import React from "react"



export default function Meme() {
  const [img, setImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  console.log(img)

  function getMemeImage() {
    [img.topText, img.bottomText] = ""
    const arrayMemes = allMemeImages.data.memes
    const randomUrl = arrayMemes[Math.floor(Math.random() * arrayMemes.length)].url
    setImg(img => ({...img, randomImage: randomUrl}))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setImg(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section>
      <div className="input-wrapper">

        <input
          type="text"
          placeholder="Upper text"
          name="topText"
          value={img.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Lower text"
          name="bottomText"
          value={img.bottomText}
          onChange={handleChange}
        />

        <button
          onClick={getMemeImage}
          className="meme-btn">GENERATE MEME
        </button>

        <div className="meme-wrapper">
          <img src={img.randomImage} className="meme-img" />
            <h2 className="meme--text top">{img.topText}</h2>
            <h2 className="meme--text bottom">{img.bottomText}</h2>
        </div>

      </div>
    </section>
  )
}
