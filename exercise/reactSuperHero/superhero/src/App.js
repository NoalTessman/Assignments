import React,{Component} from 'react'
import "./styles.css"
class App extends Component {
    render(){
    const Heros =
            [
            {   
                name:"StratoGal",
                age: 42,
                imgSrc:"https://vignette.wikia.nocookie.net/pixar/images/3/31/Stratogale.jpg/revision/latest?cb=20071113064354"
            },
            {
                name:"GazerBeam",
                age: 25,
                imgSrc:"https://vignette.wikia.nocookie.net/pixar/images/e/e1/Gazerbeam.jpg/revision/latest?cb=20071113064345"
            },
            {
                name: "ThunderHead",
                age: 23,
                imgSrc:"https://vignette.wikia.nocookie.net/pixar/images/e/ec/Thunderhead.jpg/revision/latest?cb=20071113064357"
            },
            {
                name: "DynaGuy",
                age: 28,
                imgSrc:"https://vignette.wikia.nocookie.net/pixar/images/7/7b/Dynaguy.jpg/revision/latest?cb=20071113064332"
            },
            {
                name: "SplashDown",
                age: 23,
                imgSrc:"https://vignette.wikia.nocookie.net/pixar/images/c/cd/Splashdown.jpg/revision/latest?cb=20071113064350"
            }]
    
    return (
        <div className="HeroCrate">
            {Heros.map(Hero=>
                <div id={Hero.name}>
                <h1>{Hero.name}</h1>
                <h2>{Hero.age}</h2>
                <img src={Hero.imgSrc} alt={Hero.imgSrc}/>
                
                </div>
                )}
        </div>
    )
}}
export default App
