var SoundManager = function(){
  this.channels = this.setupChannels();
  this.sounds = this.loadSounds(Config.sounds.files);
}

SoundManager.prototype.setupChannels = function(){
  var channels = {};
  var music_conf = Config.sounds.channels.MUSIC;
  effects_conf = Config.sounds.channels.EFFECTS;
  channels[music_conf.label] = new SoundChannel("#music", music_conf);
  channels[effects_conf.label] = new SoundChannel("#sound-effects", effects_conf);
  return channels;
}
SoundManager.prototype.loadSounds = function(sounds){
  var sound_obj = {};
  for (var i=0; i<sounds.length; i++){
    var sound = sounds[i];
    sound_obj[sound.label] = { src: sound.src, loop: sound.loop };
  }
  return sound_obj;
}
SoundManager.prototype.toggleMute = function(){
  this.channels[Labels.channels.MUSIC].toggleMute();
  this.channels[Labels.channels.EFFECTS].toggleMute();
}
SoundManager.prototype.playMusic = function(label){
  this.playSound(label, Labels.channels.MUSIC);
}
SoundManager.prototype.playSoundEffect = function(label){
  this.playSound(label, Labels.channels.EFFECTS);
}
SoundManager.prototype.playSound = function(label, channel){
  var sound = this.sounds[label];
  var channel = this.channels[channel];
  if (sound !== undefined && channel !== undefined){
    channel.fadeOutAndPlay(sound);
  }
}


var SoundChannel = function(element_id, conf){
  this.volume = conf.volume === undefined ? 1.0 : conf.volume;
  this.$player = $(element_id)[0];
  var channel = this;
  this.$player.addEventListener("canplaythrough", function(){
    channel.play();
  }, false)
}
SoundChannel.prototype.play = function(){
  this.$player.volume = this.volume;
  this.$player.play();
}
SoundChannel.prototype.load = function(sound){
  this.$player.src = sound.src;
  this.$player.loop = sound.loop;
  this.$player.load();
}
SoundChannel.prototype.fadeOutAndPlay = function(sound){
  var channel = this
  if (!this.$player.paused){
    var fadeout = setInterval(function(){
      if (channel.$player.volume > 0.05){
        channel.$player.volume -= 0.05;
      }else{
        clearInterval(fadeout);
        channel.load(sound);
      }
    }, 150);
  }else{
    this.load(sound);
  }
}
SoundChannel.prototype.toggleMute = function(){
  var muteVal = this.$player.muted;
  this.$player.muted = !muteVal;
}
