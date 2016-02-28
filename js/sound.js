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
    channel.play(sound);
  }
}


var SoundChannel = function(element_id, conf){
  this.$player = $(element_id)[0];
  this.$player.volume = conf.volume === undefined ? 1.0 : conf.volume;
}

SoundChannel.prototype.play = function(sound){
  this.$player.src = sound.src;
  this.$player.loop = sound.loop;
  this.$player.load();
  this.$player.play();
}
