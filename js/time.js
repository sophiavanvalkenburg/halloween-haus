class TimeManager {
  
  #counter_inc;
  #tickEvent;
  #stopped;

  constructor(){
    this.#counter_inc = Config.TIME_COUNTER;
    this.#tickEvent = new Event("tick");
    this.#stopped = false;
  }

  startCounter(){
    this.#stopped = false;
    setTimeout(() => {
      if (!this.#stopped){
        window.dispatchEvent(this.#tickEvent);
        this.startCounter();
      }
    }, this.#counter_inc);
  }
}
