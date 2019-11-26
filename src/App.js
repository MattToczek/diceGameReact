import React, { Component } from 'react'
import Img1 from './Components/Img/dice1.png'
import Img2 from './Components/Img/dice2.png'
import Img3 from './Components/Img/dice3.png'
import Img4 from './Components/Img/dice4.png'
import Img5 from './Components/Img/dice5.png'
import Img6 from './Components/Img/dice6.png'
import Arrow from './Components/Img/arrow.png'
import './App.css';



export default class App extends Component {
  state = {
    imgs: [
      {
        img: Img1,
        value:1
      },
      {
        img: Img2,
        value:2
      },
      {
        img: Img3,
        value:3
      },
      {
        img: Img4,
        value:4
      },
      {
        img: Img5,
        value:5
      },
      {
        img: Img6,
        value:6
      }
    ],
    players: [
      {
        id: 1,
        name: "Matt",
        score: 0,
        wins: 0,
        hold: false
      },
      {
        id: 2,
        name: "Ttam",
        score: 0,
        wins: 0,
        hold: false
      },
    ], 
    currDie: {
      img: Arrow,
      value: 0
    },
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

  reset = () => {
    this.setState({
      players: [
        {
          id: 1,
          name: "Matt",
          score: 0,
          wins: 0,
          hold: false
        },
        {
          id: 2,
          name: "Ttam",
          score: 0,
          wins: 0,
          hold: false
        },
      ], 
      currDie: {
        img: Arrow,
        value: 0
      },
    })
  }

  
  switchPlayers = () => {
    if(this.state.players[1].hold == false){
      let newArray = [...this.state.players];
      newArray = [newArray[1], newArray[0]]
      this.setState({
        players: newArray,
      })
    }
  }

  addScore = () => {
    const newArray = [...this.state.players];
    newArray[0].score+= this.state.currDie.value;
    this.setState({
      players: newArray,
    })
  }

  hold = () => {
    const newArray = [...this.state.players];
    newArray[0].hold = true;
    this.setState({
      players: newArray,
    })
    this.switchPlayers();
  }

  checkScores = () => {
    this.state.players.map((item, i)=> {
      if(item.score>= 21){

        let newArray = [...this.state.players];
        newArray[1].wins = newArray[1].wins +1;

        for (let i = 0; i < newArray.length; i++) {
          newArray[i].score = 0;
          newArray[i].hold = false;
        }

        this.setState({
          players: newArray,
        })
      }
    })
  }

  roll = async () => {
    await this.calcRoll();
    console.log(this.state.currDie) //returning correct info but not showing img in render
    this.addScore();
    this.checkScores()
    this.switchPlayers();
  }




  render() {
    return (

    <div className="App">
        <div id="gameBoard">
          <div className = "turnRead text">
            <h2>{this.state.players[0].name}, it's your turn!!</h2>
          </div>
          <div className = "die">
            <img className="dieImg" src= {this.state.currDie.img} alt="die image" />
          </div>
          <div>
            <button onClick={this.roll} >Roll!</button>
            <button onClick={this.hold} >Hold!</button>
            <button onClick={this.reset} >Reset!</button>
          </div>
          <div className = "scoreRead">
            <h2 className = "p1Name">{this.state.players.map((item)=> {
              if(item.id === 1) return item.name })}</h2>
            <div className = "p1Score scores ">
              <p>Score: </p>
            {this.state.players.map((item)=> {
              if(item.id === 1) return item.score })}
            </div>
            <div className = "p1Wins scores">
              <p>Wins: </p>
              {this.state.players.map((item)=> {
              if(item.id === 1) return item.wins })}
            </div>
            <h2 className = "p2Name">{this.state.players.map((item)=> {
              if(item.id === 2) return item.name })}</h2>
            <div className = "p2Score scores">
              <p>Score: </p>
            {this.state.players.map((item)=> {
              if(item.id === 2) return item.score })}
            </div>
            <div className = "p2Wins scores">
            <p>Win: </p>
              {this.state.players.map((item)=> {
              if(item.id === 2) return item.wins })}
            </div>
          </div>
        </div>
    </div>
    );
  }
}


