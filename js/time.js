class TimeManager {
  
  #counter_inc;

  constructor(){
    this.#counter_inc = Config.TIME_COUNTER;
    this.tickEvent = new Event("tick");
    this.stopped = false;
  }

  startCounter(){
    this.stopped = false;
    const tm = this;
    setTimeout(() => {
      if (!tm.stopped){
        this.dispatchEvent(tm.tickEvent);
        tm.startCounter();
      }
    }, this.#counter_inc);
  }
}
