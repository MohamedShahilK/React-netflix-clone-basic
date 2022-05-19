import React, { useEffect, useRef } from 'react'

function YoutubePlayer(props) {

    // Scroll to View
    const messageRef = useRef(null);
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    })
    // Scroll to View

    const key = props.Y_key

    const link = `https://www.youtube.com/embed/${key}?autoplay=0`
    // const link = "https://www.youtube.com/embed/Q7eWNIJGuoc?autoplay=0"
    return (
        <div ref={messageRef}>
            <iframe id="ytplayer" type="text/html" width="100%" height="500" title='Video'
                src={link}
                frameborder="0"></iframe>
            {/* <button onClick={() => console.log(key)}>clickme</button> */}
        </div>
    )
}

export default YoutubePlayer    