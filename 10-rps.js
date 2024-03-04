const score = JSON.parse(localStorage.getItem('score1'));

        document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses},Ties : ${score.ties}`;

        //shows the current moves and result
        function showMoves(yourMove,compMove,result)
        {
            document.querySelector('.js-result').innerHTML = `${result}`;

            document.querySelector('.js-moves').          innerHTML = 
        `You 
        <img src="images/${yourMove}-emoji.png" class="move-icon">
        <img src="images/${compMove}-emoji.png" class="move-icon"> 
        Computer`;

        }

        //updates the score
        function changeScore()
        {
            

            document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses},Ties : ${score.ties}`;
        }

        
        //picks the computer Move
        function pickComputerMove()
        {
            randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber < (1/3))
            {
                return 'Rock';
            }
            else if(randomNumber >= (1/3) && randomNumber<(2/3))
            {
                return 'Paper';
            }
            else{
                return 'Scissors';
                
            }
        
        }
        

        let result = '';
        //comapring the user and computer moves
        function playGame(userMove,computerMove)
        {
            if(userMove === 'Rock')
            {
                if(computerMove === 'Rock' )
                {
                    result = 'You Tie.';
                
                }
                else if(computerMove === 'Scissors')
                {
                    result = 'You win.';
                }
                else
                {
                    result = 'You lose.';
                }
            }
            else if(userMove === 'Scissors')
            {
                if(computerMove === 'Rock' )
                {
                    result = 'You lose.';
                }
                else if(computerMove === 'Scissors')
                {
                    result = 'Tie.';
                }
                else
                {
                    result = 'You win.';
                }
            }
            else if(userMove === 'Paper')
            {
                if(computerMove === 'Rock' )
                {
                    result = 'You win.';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'Tie.';
                }
                else
                {
                    result = 'You lose.';
                }
            }
        
            if(result === 'You win.')
            {
                score.wins +=1;
            }
            else if(result === 'You lose.')
            {
                score.losses +=1;
            }
            else
            {
                score.ties +=1;
            }

            localStorage.setItem('score1',JSON.stringify(score));

            showMoves(userMove,computerMove,result);
            changeScore();

           

            
            
        }

        function resetScore()
        {
            score.losses = 0;
            score.wins= 0;
            score.ties = 0;
            changeScore();
            
        }