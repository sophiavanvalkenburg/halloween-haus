var Animation = function(obj){
  this.loop = obj.loop === undefined ? true : obj.loop;
  this.queue = Animation.createAnimationQueue(obj.instructions, obj.length);
  this.next_instruction = 0;
}

Animation.createAnimationQueue = function (instructions, length){
  var queue = [];
  for (var i=0; i<instructions.length; i++){
    var ins = instructions[i];
    if (ins.wait !== undefined){
      var wait_queue = Animation.createWaitQueue(ins.wait);
      Array.prototype.push.apply(queue, wait_queue);
    }else{
      queue.push(ins);
    }
  }
  if (length !== undefined && queue.length < length){
    var queue_diff = length - queue.length;
    var wait_queue = Animation.createWaitQueue(queue_diff);
    Array.prototype.push.apply(queue, wait_queue);
  }
  return queue;
}
Animation.createWaitQueue = function(length){
  var wait_queue = [];
  for (var i=0; i<length; i++){
    wait_queue.push({ wait: 1 });
  }
  return wait_queue;
}
Animation.prototype.getNextInstruction = function(){
  if (this.next_instruction < 0 || this.next_instruction >= this.queue.length){
    return undefined;
  }
  var ins = this.queue[this.next_instruction];
  return ins;
}
Animation.prototype.update = function(){
  this.next_instruction++;
  if (this.next_instruction >= this.queue.length){
    if (this.loop){
      this.next_instruction = 0;
    }else{
      this.next_instruction = -1;
    }
  }
}
Animation.prototype.getLastOrientation = function(){
  if (this.next_instruction == 0){
    return undefined;
  }
  if (this.next_instruction < 0 || this.next_instruction >= this.queue.length){
    last_instruction = this.queue.length - 1;
  }else{
    last_instruction = this.next_instruction - 1;
  }
  for (var i=last_instruction; i>=0; i--){
    var ins = this.queue[i];
    if (ins.orientation !== undefined){
      return ins.orientation;
    }
  }
}
