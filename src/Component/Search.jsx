import React, { useState } from 'react'
import Images from './Images'
import './Search.css';
import { TextField, styled, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const SearchImg = () => {
  const [img, setImg] = useState("")
  const inputEvent = (e) => {
    setImg(e.target.value);
  }

  return (
    <>
      <div className="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div className='box'>
        <TextField
          label="Search image"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className='textFirld'
          onChange={inputEvent}
          value={img}
        />

        {img === "" ? null : <Images name={img} />}
      </div>

    </>
  )
}

export default SearchImg
