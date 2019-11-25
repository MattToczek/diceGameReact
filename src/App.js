import React, { Component } from 'react'
import Img1 from './Components/Img/dice1.png'
import Img2 from './Components/Img/dice2.png'
import Img3 from './Components/Img/dice3.png'
import Img4 from './Components/Img/dice4.png'
import Img5 from './Components/Img/dice5.png'
import Img6 from './Components/Img/dice6.png'
import './App.css';



export default class App extends Component {
  state = {
    imgs: [
      {
        img: './Components/Img/dice1.png',
        value:1
      },
      {
        img: './Components/Img/dice2.png',
        value:2
      },
      {
        img: './Components/Img/dice3.png',
        value:3
      },
      {
        img: './Components/Img/dice4.png',
        value:4
      },
      {
        img: './Components/Img/dice5.png',
        value:5
      },
      {
        img: './Components/Img/dice6.png',
        value:6
      }
    ],
    players: [
      {
        id: 1,
        name: "",
        score: 0,
        wins: 0,
        hold: false
      },
      {
        id: 2,
        name: "",
        score: 0,
        wins: 0,
        hold: false
      },
    ], 
    currDie: ""
  }

  randomNum = ()=> {
    return Math.floor(Math.random() * 6)
  }

  calcRoll = () => {
    let num= this.randomNum();
          this.setState({
            currDie : this.state.imgs[num]
          })
  }

  roll = async () => {
    await this.calcRoll();
    console.log(this.state.currDie) //returning correct info but not showing img in render
  }


  render() {
    return (

    <div className="App">
        <div id="gameBoard">
          <div className = "playerRead text">

          </div>
          <div className = "die">
            <img url= {this.state.currDie.img} />
          </div>
          <button onClick={this.roll} >Roll!</button>
          <div className = "scoreRead">
            <h2 className = "p1Name"></h2>
            <div className = "p1Score scores ">

            </div>
            <h2 className = "p2Name"></h2>
            <div className = "p2Score scores ">
              
            </div>
          </div>
        </div>
    </div>
    );
  }
}


