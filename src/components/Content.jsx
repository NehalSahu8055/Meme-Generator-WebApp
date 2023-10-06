import React, { useState } from "react";
import memeData from "../memesData";

const Content = () => {
  // state for particular meme
  const memeImgData = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  };

  const [meme, setMeme] = useState(memeImgData);

  // getting whole memedata
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  // getNewMeme
  const getMemeImage = (e) => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    e.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const changeText = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main className="font-['Karla'] shadow-2xl rounded-b-xl">
      <div className="meme p-9">
        <form className="flex flex-col" id="form" onSubmit={getMemeImage}>
          <div className="inputs mx-auto w-full grid sm:grid-cols-2 gap-3">
            <label className="flex-1" htmlFor="top-text">
              <input
                className="w-full text-sm py-2 px-3 border-2 border-[#D5D4D8] rounded-md outline-none  mr-4 focus:ring-2 ring-offset-1 transition-all"
                type="text"
                id="top-text"
                name="topText"
                value={meme.topText}
                placeholder="Top-text"
                onChange={changeText}
              />
            </label>
            <label className="flex-1" htmlFor="bottom-text">
              <input
                className="w-full text-sm py-2 px-3 border-2 border-[#D5D4D8] rounded-md outline-none focus:ring-2 ring-offset-1 transition-all"
                type="text"
                id="bottom-text"
                name="bottomText"
                value={meme.bottomText}
                placeholder="Bottom-Text"
                onChange={changeText}
              />
            </label>
          </div>
          <button
            className="w-full outline-none text-sm font-bold text-white p-2 mt-4 rounded-md mr-4 bg-gradient-to-r from-[#672280] to-[#A626D3] hover:opacity-90 focus:ring-2 ring-offset-1 transition-all"
            type="submit"
          >
            Get a new meme image 🖼️
          </button>
        </form>

        <div className="meme relative flex justify-center mt-9">
          <img
            className="mx-auto"
            width="400"
            src={meme.randomImage}
            alt="meme image"
          />
          <h2 className="top-text absolute top-8 text-white text-3xl font-['Impact'] uppercase tracking-tighter shadow-text">
            {meme.topText}
          </h2>
          <h2 className="bottom-text absolute bottom-8 text-white text-3xl font-['Impact']  uppercase tracking-tighter shadow-text">
            {meme.bottomText}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Content;
