var playerName = window.prompt("Whats is your robot's name?");
var playerHealth=100;
var playerAttack=180;
var playerMoney=10;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);
var enemyNames=["Roborto", "Amy Android","Robo Trumble"];
var enemyHealth=50;
var enemyAttack=9;



//GAME STATES 
//"WIN" -Player robot has defeated all enemy-bots
//   *Fight all enemy-robots
//*Defeat each enemy-robot
//"LOSE"-Player robot's health is zero or less


var fight= function(enemyNames){
  //repeat and execute as long as the enemy robot is alive
  while(playerHealth >0 && enemyHealth >0){
    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
      break;

    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      
    
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip =window.confirm("Are you sure you'd like to quit?");
    //if yes (true),leave fight
    if(confirmSkip){
      window.alert(playerName + "has decided to skip this fight. Goodbye!");
      //subtract money from playermoney for skipping
      playerMoney=playerMoney - 10;
      console.log("playerMoney",playerMoney);
      break;
    }
  }
    //If no (false), ask question again by runnig fight() again
    else{
      fight();
    }
    fight(enemyNames[i]); 
    
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

  }
}

  // call fight function with enemy-robot




//Enemy Robots
var enemy1="Roborto";
var enemy2="Amy Android";
var enemy3="Robo Trumble";
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

console.log(enemyNames.length);

//function to start  new game
var startGame =function(){
  //reset player stats
  playerHealth=100;
  playerAttack=10;
  playerMoney=10;
  //other logic remains the same
endGame();
};
for(var i=0; i<enemyNames.length; i++) {
  if (playerHealth >0){
    window.alert("Welcome to Robot Gladiators! Round" + (i+1));
  var pickedEnemyName=enemyNames[i];
  enemyHealth =50;
  fight(pickedEnemyName);
// reset enemyHealth before starting new fight
enemyHealth = 50;


// use debugger to pause script from running and check what's going on at that moment in the code
// debugger;

// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
fight(pickedEnemyName);
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + "is at" + i +"index");
}
else{
  window.alert("You have lost your Robot in battle! Game Over!");
  break;
}
}



    //alert players that they are starting the round 
   
    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
    } else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip =window.confirm("Are you sure you'd like to quit?");
    //if yes (true),leave fight
    if(confirmSkip){
      window.alert(playerName + "has decided to skip this fight. Goodbye!");
      //subtract money from playermoney for skipping
      playerMoney=playerMoney - 10;
      console.log("playerMoney", playerMoney);
  
    }
    //If no (false), ask question again by runnig fight() again
    else{
      fight();
    }
    
    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }



 
fight();

//start game when the page loads
startGame();

//function to end the entire game
var endGame = function() {
// if player is still alive, player wins!
if (playerHealth > 0) {
  window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
}
else{
  window.alert ("You've lost your robot in battle.");
}
}
//ask player if they'd like to play again
var playAgainConfirm = window.confirm("would you like to play again?");

if (playAgainConfirm) {
  //restart the game 
  startGame();
}
else {
  window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
}


