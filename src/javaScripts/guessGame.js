class GuessGame {
    constructor() {
        this.numberArray = this.createNumberArray();
        this.number = this.ArraytoNumber(this.numberArray);
    }

    createNumberArray() {
        var numbers = [];
        while(numbers.length < 4) {
            var number = Math.floor(Math.random()*10).toString();
            if(numbers.indexOf(number) == -1) {
                numbers.push(number);
            }
        }

        return numbers;
    }

    checkAnswer(answer) {
        var answerArray = this.NumbertoArray(answer);
        var plus = 0;
        var minus = 0;
        var result = "";

        for (let i = 0; i < answerArray.length; i++) {
            if(this.numberArray.indexOf(answerArray[i]) !== -1) {
                if(this.numberArray.indexOf(answerArray[i]) === i) {
                    plus++;
                } else {
                    minus++;
                }
            }
        }

        if(plus !== 0) {
            result += "+" + plus.toString();
        }
        if(minus !== 0) {
            result += "-" + minus.toString();
        }
        if(result === "") {
            result = "0";
        }

        return result;
    }

    ArraytoNumber(numbers) {
        return numbers[0]+numbers[1]+numbers[2]+numbers[3];
    }
    NumbertoArray(number) {
        number = number.toString();

        return number.split("");
    }
}

export default GuessGame;