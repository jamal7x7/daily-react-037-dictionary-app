import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Words App</h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

   

  </div>
)

const Graphics = (props) => (
  
  <div className='graphics'  >
    

  

    <svg     >
        <defs>
          <linearGradient x1="73%" y1="7%" x2="14%" y2="106%" id="linearGradient-1">
              <stop stopColor="#DD8EDA" offset="0%" />
              <stop stopColor="#42A3F9" offset="100%" />
          </linearGradient>
        </defs>
        {/* <path d='M 100 100 L 200 200' stroke='pink'  /> */}
        <g transform="translate(500,300)" >
          <rect  fill='white' fillRule="nonzero" opacity='0.05'  width="190" height="40" rx="20"></rect>
          <svg width="190px" height="40px"  >
            {/* { props.rhymeWithWord.map( w =>  (<text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle" fill='white' >{ w.word }</text> ))}    */}
          </svg>

            {/* <foreignObject x="20" y="90" width="150" height="200">
              <input type="text" name="" id=""/>
            </foreignObject> */}
        </g>
    </svg>

   
  </div>
)

class WordsApp extends Component {

  state = {
    
    list: []
  }
  
  handleClick = (e) => {
    e.preventDefault()
    
    console.log('hello!!!!')
    
  }

  componentDidMount() {
    const rhymeWithWord = 'forgetful'
    const url = 'https://api.datamuse.com/words?rel_rhy=' + rhymeWithWord
  

    fetch(url)
        .then(res =>  res.json())
        .then(data => {
          console.log(data)
            this.setState( prevState => ({
              rhymeWithList: [...prevState, ...data]
            }))
            console.log(this.state.list[0].word)
  
          })
        .catch(error => { console.log('Something went wrong!!!', error) })
  
  }

  render () {
    return (
      <div
        className='App-container'>

        <Graphics
          handleClick={this.handleClick}
          list={this.state.list}
        />
        <Main

        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <WordsApp />

  </div>
)

export default App
