function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer == "white" ? "black" : "white"
}

//https://www.codewars.com/kata/59126992f9f87fd31600009b/solutions/javascript