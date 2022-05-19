import axios from '../../API calling Config/Axios config/axios_config'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import { TMDB_API_KEY, Image_Url_Original } from '../../API calling Config/constants/constants'

function Banner() {

    // const [movie, setMovie] = useState({})
    const [movie, setMovie] = useState()

    useEffect(() => {

        //After current page is mounted
        axios.get(`trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`).then((response) => {
            
            // console.log(response);
            // console.log(response.data.results);
            console.log(response.data.results[0]);
            // setMovie(response.data.results[0])
            
            let totalItems = response.data.results.length
            let randomNum = Math.floor(Math.random() * totalItems)
            setMovie(response.data.results[randomNum])
        })


    }, [])

    return (
        <div style={{ backgroundImage: `url(${movie ? Image_Url_Original + movie.backdrop_path : ''})`
        , backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
            <div className="banner">
                <div className="content">

                    <h1 className="title">{movie ? movie.title : ''}</h1>

                    <div className="banner-buttons">
                        <button className='button'>Play</button>
                        <button className='button'>Mylist</button>
                    </div>
                    <h1 className="description">
                        {movie ? movie.overview : ''}
                    </h1>
                </div>

                <div className="fade_bottom"></div>
            </div>
        </div>
    )
}

export default Banner
