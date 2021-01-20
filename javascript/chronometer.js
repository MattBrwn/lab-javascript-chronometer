class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime += 1
    }, 1000) 
  }
  getMinutes() {
    if (this.currentTime >= 60) {
      let currentMinutes =  Math.floor((this.currentTime) / 60);
      return currentMinutes
    } else if (this.currentTime == 0) {
      let currentMinutes = 0;
      return currentMinutes 
    }
  }
  getSeconds() {
    if (this.currentTime < 60) {
      return  this.currentTime;
    } else if (this.currentTime >= 0) {
      return  this.currentTime % 60 
    } 
  }
  
  twoDigitsNumber() {
    if (this.currentTime <10) {
      let digits = ("0" + this.currentTime).splice(-2)
      return digits
    } else 
    return digits
  }

  stopClick() {
    clearInterval(this.IntervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    
    `${this.getMinutes()}:${this.getSeconds()}`
  }
}
