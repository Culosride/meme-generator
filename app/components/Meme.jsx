import React from "react"

export default function Meme() {
  const [img, setImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(function() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json()
      .then(data => setAllMemes(data.data.memes))
    )
  }, [])

  function getMemeImage() {
    const randomUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url;
    setImg(img => ({...img,
      randomImage: randomUrl,
      topText:"",
      bottomText:""
    }))
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
