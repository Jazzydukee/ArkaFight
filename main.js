// =======================
// Costanti e dati globali
// =======================
export const GAME_W = 960;
export const GAME_H = 540;

export const FIGHTERS = {
  maggi:    { name:'Maggi',    color:0x4fc3f7, stats:{ health:100, speed:260, jump:520, damage:10 } },
  livio:    { name:'Livio',    color:0xff8a65, stats:{ health:100, speed:280, jump:520, damage:10 } },
  meliador: { name:'Meliador', color:0xff8a21, stats:{ health:100, speed:280, jump:520, damage:10 } }
};

export const gameState = { selectedP1: null, selectedP2: null };

// Utility
export function fitImage(img, maxW, maxH) {
  if (!img || !img.width) return;
  const scale = Math.min(maxW / img.width, maxH / img.height);
  img.setScale(scale);
}

// =======================
// Import scene
// =======================


import PreloadScene from './assets';


// =======================
// Config & start game
// =======================
const config = {
  type: Phaser.AUTO, width: GAME_W, height: GAME_H, parent:'game',
  backgroundColor:'#12132b',
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: GAME_W, height: GAME_H },
  physics: { default: 'arcade', arcade: { gravity: { y:1000 }, debug: false } },
  scene: [ PreloadScene, MenuScene, CharacterSelectScene, FightScene, VictoryScene ]
};

new Phaser.Game(config);

