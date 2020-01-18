function truckTour(petrolpumps) {
    // keep track of our current gas.
    // current = 0;
  let current = 0;
  let start = 0;
    // start = 0;
    // currentGas
  let currentGas = 0;
    // loop through our gas stations
    // while (true) {}
  while (true) {
    // where do we get gasAdded and distance?
    // petrolpumps[current][0] petrolpumps[current][1]
    currentGas += petrolpumps[current][0]
    currentGas -= petrolpumps[current][1]
    // currentGas += gasAdded
    // currentGas -= distanceToNextStation
    // if (currentGas < 0)
    if (currentGas < 0) {
      start++
      current = start
      currentGas = 0
    } else {
            // we failed, move on to next starting station.
          // increase start by one, and then set current to start
          // continue, move on to next loop
      current++;
      // current will increase by one
      // if current is greater than the length, then current = 0;
      if (current >= petrolpumps.length){
        current = 0
      }
      // we are done when we make it back to the start again
      // this means that our current === start
          // report back that start is the correct one :tada:
          // return start;
      if (current === start) {
        return start;
      }
    }

  }
    // keep track of our beginning and current position, and increment them as we go along

}
