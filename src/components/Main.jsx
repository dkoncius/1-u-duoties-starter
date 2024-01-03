import '../styles/Main.css'
import women from '../images/women.jpg'
import MainImage from './MainImage'


const data = [
  {src: women, title: "women1"},
  {src: women, title: "women2"},
  {src: women, title: ""},
  {src: women, title: "women4"}
]

const Main = () => {
  return (
    <>
    <main>
       <div className="container">
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ullam fugit dicta, voluptates odit voluptatum veritatis optio fugiat officia magni. Ullam aliquam dolores dolore animi, numquam quasi distinctio fugiat explicabo?</p>
            <div className="images">
              {
                data.map((x, index) => (
                  <MainImage women={x.src} key={index} title={x.title}/>
                ))
              }
            </div>
       </div>
    </main>
    </>
  )
}

export default Main