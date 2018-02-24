
/* Just a couple of things about this program.
   1.  I could not get the playAgain prompt to work so I took that code out.
   2.  This program should reuse code instead of repeating.  My knowledge of javascript and jquery is limited so
       could not make that happen.
*/  

// Declare a variable "targetNumber"
			var targetNumber = Math.floor(Math.random() * 101);
			
			//Set the number-to-guess equal to the target number */
			$("#number-to-guess").text(targetNumber); 
			
		    //Counter for crystal clicks
			//Each crystal starts at a random number	
			var crystalCtr = Math.floor(Math.random() * (11 - 0));
			var crystalCtr0 = Math.floor(Math.random() * 21);
			var crystalCtr1 = Math.floor(Math.random() * 51);
			var crystalCtr2 = Math.floor(Math.random() * 71);
			var lossCnt = 0;
			var winCnt=0;
			var counter = 0;
			var playAgain;
			
			/* Note:
				I know there is a better way to do the following but, with my limited understanding of javascript, I could not get it to work.
			*/
			//On click event
            $(".crystal-image").on("click", function() {
				<!--Increment the counter -->
				counter = counter + crystalCtr;
				if (counter === targetNumber) {
				  alert("You Win! Click refresh to play again.");
				  winCnt = ++winCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  
				}
				// Check to find out if the user's counter exceeds the target number
				else if (counter >= targetNumber) {
				  alert("You lose!! Your score is " + counter + ". Click refresh to play again.");
				  lossCnt = ++lossCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  				  
				}
				
			});
			
			$(".crystal-image0").on("click", function() {
				<!--Increment the counter -->
				counter = counter + crystalCtr0;
				
				if (counter === targetNumber) {
				  alert("You Win! Click refresh to play again.");
				  winCnt = ++winCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				}
				// Check to find out if the user's counter exceeds the target number
				else if (counter >= targetNumber) {
				  alert("You lose!! Your score is " + counter + ". Click refresh to play again.");
				  lossCnt = ++lossCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  				  
				} 
				
			});
			$(".crystal-image1").on("click", function() {
				<!--Increment the counter -->
				counter = counter + crystalCtr1;
				
				if (counter === targetNumber) {
				  alert("You Win! Click refresh to play again.");
				  winCnt = ++winCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  				  
				}
				// Check to find out if the user's counter exceeds the target number
				else if (counter >= targetNumber) {
				  alert("You lose!! Your score is " + counter + ". Click refresh to play again.");
				  lossCnt = ++lossCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  
				} 
				
			});
			$(".crystal-image2").on("click", function() {
				<!--Increment the counter -->
				counter = counter + crystalCtr2;
				
				if (counter === targetNumber) {
				  alert("You Win! Click refresh to play again.");
				  winCnt = ++winCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  
				}
				// Check to find out if the user's counter exceeds the target number
				else if (counter >= targetNumber) {
				  alert("You lose!! Your score is " + counter + ". Click refresh to play again.");
				  lossCnt = ++lossCnt;
				  //alert("You won " + winCnt + "; You loss " + lossCnt);
				  				  
				}
				
			});
			
