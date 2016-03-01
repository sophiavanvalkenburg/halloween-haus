var SoundManager = function(){
  this.channels = this.setupChannels();
  this.sounds = this.loadSounds(Config.sounds.files);
}

SoundManager.prototype.setupChannels = function(){
  var channels = {};
  var music_conf = Config.sounds.channels.MUSIC;
  effects_conf = Config.sounds.channels.EFFECTS;
  channels[music_conf.label] = new SoundChannel(music_conf);
  channels[effects_conf.label] = new SoundChannel(effects_conf);
  return channels;
}
SoundManager.prototype.loadSounds = function(sounds){
  var sound_obj = {};
  for (var i=0; i<sounds.length; i++){
    var $sound = new Audio(sounds[i].src);
    $sound.loop = sounds[i].loop;
    //sound_obj[sound.label] = { src: sound.src, loop: sound.loop, obj: $sound_element};
    sound_obj[sounds[i].label] = $sound;
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

var SoundChannel = function(conf){
  this.volume = conf.volume === undefined ? 1.0 : conf.volume;
  this.current_sound = undefined;
}

SoundChannel.prototype.play = function(sound){
  if (this.current_sound != undefined){
    this.stop();
  }
  this.current_sound = sound;
  sound.volume = this.volume;
  sound.load();
  sound.play();
}
SoundChannel.prototype.stop = function(){
  this.current_sound.pause();
  this.current_sound = undefined;
}
