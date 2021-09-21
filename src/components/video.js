import React, { useState, useRef, useEffect } from "react"

const VideoPlayer = props => {
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const vidRef = useRef(null)
  let timer = null

  useEffect(() => {
    let video = vidRef
    video.current.addEventListener("mousemove", handleMouseMove)
    return () => {
      video.current.removeEventListener("mousemove", handleMouseMove)
      if (timer) clearTimeout(timer)
    }
  })

  function playToggle() {
    setPlaying(!playing)
    if (!playing) {
      setPaused(false)
      vidRef.current.play()
    } else {
      setPaused(true)
      vidRef.current.pause()
    }
  }
  function stop() {
    setPlaying(false)
    vidRef.current.currentTime = 0
  }

  function replay() {
    setPlaying(true)
    setPaused(false)
    vidRef.current.currentTime = 0
    vidRef.current.play()
  }

  function videoEnded(video) {
    vidRef.current.load()
    setPaused(false)
    setPlaying(false)
  }

  function handleMouseMove(e) {
    e.preventDefault()
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      setShowControls(false)
    }, 1000)
    setShowControls(true)
  }

  function handleTouchEnd(e) {
    e.preventDefault()
    if (playing || paused) {
      console.log("touch")
      setShowControls(true)
      setTimeout(() => {
        setShowControls(false)
      }, 2000)
    }
  }

  return (
    <div
      className={
        "video" +
        (playing ? " isPlaying" : "") +
        (paused ? " isPaused" : "") +
        (showControls ? " showControls" : "")
      }
      onMouseMove={handleMouseMove}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={vidRef}
        src={props.video}
        type="video/mp4"
        onEnded={stop}
        poster={props.poster}
        onEnded={videoEnded}
      >
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div className="video-controls">
          <div
            className="video-controls__button video-controls__button--play"
            onClick={playToggle}
            onTouchEnd={playToggle}
          >
            <div className="video-controls-button__play-icon"></div>
            <div className="video-controls-button__pause-icon"></div>
          </div>
          <div
            className="video-controls__button video-controls__button--replay"
            onClick={replay}
            onTouchEnd={replay}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
