class Animation {

  #loop;
  #queue;
  #next_instruction;

  constructor(obj) {
    this.#loop = obj.loop === undefined ? true : obj.loop;
    this.#queue = Animation.createAnimationQueue(obj.instructions, obj.length);
    this.#next_instruction = 0;
  }

  static createAnimationQueue(instructions, length) {
    const queue = [];
    for (let i=0; i<instructions.length; i++){
      const ins = instructions[i];
      if (ins.wait !== undefined){
        let wait_queue = Animation.createWaitQueue(ins.wait);
        queue.push(...wait_queue);
      } else {
        queue.push(ins);
      }
    }
    if (length !== undefined && queue.length < length){
      const queue_diff = length - queue.length;
      const wait_queue = Animation.createWaitQueue(queue_diff);
      queue.push(...wait_queue);
    }
    return queue;
  }

  static createWaitQueue(length){
    const wait_queue = [];
    for (let i=0; i<length; i++){
      wait_queue.push({ wait: 1 });
    }
    return wait_queue;
  }

  getNextInstruction(){
    if (this.#next_instruction < 0 || this.#next_instruction >= this.#queue.length){
      return undefined;
    }
    return this.#queue[this.#next_instruction];
  }

  update(){
    this.#next_instruction++;
    if (this.#next_instruction >= this.#queue.length){
      if (this.#loop){
        this.#next_instruction = 0;
      }else{
        this.#next_instruction = -1;
      }
    }
  }

  getLastOrientation(){
    if (this.#next_instruction == 0){
      return undefined;
    }
    let last_instruction;
    if (this.#next_instruction < 0 || this.#next_instruction >= this.#queue.length){
      last_instruction = this.#queue.length - 1;
    }else{
      last_instruction = this.#next_instruction - 1;
    }
    for (let i=last_instruction; i>=0; i--){
      const ins = this.#queue[i];
      if (ins.orientation !== undefined){
        return ins.orientation;
      }
    }
  }
  

}
