import React, { useEffect} from 'react'
import './css/RecommendedTag.css'
import RoundedButton from '../buttons/general/RoundedButton';

function RecommendedTag() {
    
    useEffect(() => {
        let isDown = false
        let startX
        let scrollLeft
        const slider = document.querySelector('.carousel');
        slider.addEventListener('mousedown', (e) => {
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
          })
        
          slider.addEventListener('mouseleave', () => {
            isDown = false
            slider.classList.remove('active')
          })
        
          slider.addEventListener('mouseup', () => {
            isDown = false
            slider.classList.remove('active')
          })
        
          slider.addEventListener('mousemove', (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 2
            slider.scrollLeft = scrollLeft - walk
          })
        
          slider.addEventListener('touchstart', (e) => {
            isDown = true;
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
          })
        
          slider.addEventListener('touchend', () => {
            isDown = false
            slider.classList.remove('active')
          })
        
          slider.addEventListener('touchcancel', () => {
            isDown = false
            slider.classList.remove('active')
          })
        
          slider.addEventListener('touchmove', (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 2
            slider.scrollLeft = scrollLeft - walk
          })
    }) 

    return(
        <div className="container">
            <div className="carousel">
                <div className="item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)"}}>
                    <h3>Танд санал болгох таг</h3>
                    <h1>#MINIMAL</h1>
                    <div>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
                <div className="item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1427&q=80)"}}>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
                <div className="item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"}}>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
                <div className="item" style={{backgroundImage: "url(https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"}}>
                  <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default RecommendedTag
