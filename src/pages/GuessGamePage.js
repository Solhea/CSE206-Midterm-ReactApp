import '../assets/css/GuessGamePage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import GuessGame from '../javaScripts/guessGame';


class GuessGamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          prediction: '',
          totalPredictions: 0,
          result: 0,
          isButtonDisabled: true,
          guessGame: new GuessGame()
        }
      }

      check_onClick=()=> {
        this.setState({totalPredictions: this.state.totalPredictions+=1,
            result: this.state.guessGame.checkAnswer(this.state.prediction)
         },()=>{this.checkResult();});
         //console.log(this.state.guessGame.number);
      }
      
      checkResult=()=> {
        if(this.state.result === "+4") {
            alert("Congratulations! You have found: "+ this.state.guessGame.number);
            this.setState({
                prediction: '',
                totalPredictions: 0,
                result: 0,
                isButtonDisabled: true,
                guessGame: new GuessGame()
            });
        }
      }

      handleChange(evt) {
        //This way user only can enter numbers
        const prediction = (evt.target.validity.valid) ? evt.target.value : this.state.prediction;

        this.setState({ prediction });

        //This way user can't enter anything but length of 4
        if(prediction.length === 4) {
            this.setState({isButtonDisabled: false});
        } else {
            this.setState({isButtonDisabled: true});
        }
      }

  render () {
    return(
        <div class="GuessGame">
            <div>
                <h2>Guess the Number With Four Digits</h2>
            </div>
            <br/>
            <div class="ShowForm">
               Type your guess:
               <br/>
               <Form.Group>
                   <Form.Control type="text" pattern="[0-9]*" maxLength="4" onInput={this.handleChange.bind(this)} value={this.state.prediction} placeholder="Enter 4 digit number" />
               </Form.Group>
            </div>
            <div class="PredicText">
                Number of Predictions: {this.state.totalPredictions}
            </div>
            <div>
                <Button variant="success" onClick={this.check_onClick} disabled={this.state.isButtonDisabled} >Check!</Button>
            </div>
            <div class="ShowForm">
                Result:
                <div class="Result"> 
                    {this.state.result}
                </div>
            </div>
        </div>
    );
  }
}



export default GuessGamePage;