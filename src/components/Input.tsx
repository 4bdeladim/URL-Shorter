import React, { useState } from 'react'
import axios from "axios";



const Input = () => {
  

  
  const [shorterUrl, setShortUrl] = useState('')
  const [longUrl, setLongUrl] = useState('')

  const shortUrl = () => {
    axios.get(`https://api.shrtco.de/v2/shorten?url=${longUrl}`)
      .then(function (res) {
      setShortUrl(res.data.result.short_link);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className="input-container">
    <div className="form__group field">
        <input
          onChange={(e) => setLongUrl(e.target.value)}
          type="input" className="form__field" placeholder="Paste your url" name="name" id='name' required />
        <button onClick={shortUrl} className="btn">Short!</button>
    </div>
    <div className="btn-res">
      <a className="link">{shorterUrl}</a>
    </div>
    </div>
  )
}

export default Input
