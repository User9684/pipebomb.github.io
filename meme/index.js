const vid = document.createElement('video')
vid.src = 'https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4'
vid.style.display = 'none'
vid.addEventListener('pause', () => {
    vid.play()
})
document.body.append(vid)
document.addEventListener('mousemove', ()=>{
    vid.play()
    vid.requestPictureInPicture()
})
