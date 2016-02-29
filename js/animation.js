var Animation = function(obj){
  this.loop = obj.loop === undefined ? true : obj.loop;
  this.queue = Animation.createAnimationQueue(obj.instructions);
  this.next_instruction = 0;
}

Animation.createAnimationQueue = function (instructions){
  var queue = [];
  for (var i=0; i<instructions.length; i++){
    var ins = instructions[i];
    if (ins.wait !== undefined){
      for (var j=0; j<ins.wait; j++){
        queue.push({ wait: 1 });
      }
    }else{
      queue.push(ins);
    }
  }
  return queue;
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
