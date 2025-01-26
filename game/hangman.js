const { data } = require("../vocabulary.js");

let currentWord = null;
let wordState = [];
let remainingAttempts = 6;

// 随机选择单词
function getRandomWord() {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}

// 初始化游戏
function startGame(req, res) {
  currentWord = getRandomWord();
  console.log(currentWord);
  remainingAttempts = 6;

  const englishWord = currentWord.english;

  // 处理单词，将字母替换为下划线，其他非字母字符保持原样
  wordState = englishWord.split("").map(char => {
      if (/[a-zA-Z]/.test(char)) {
          return "_"; // 如果是字母，显示下划线
      }
      return char; // 非字母字符保持不变
  });

  res.json({
      currentWord,
      wordState,
      remainingAttempts,
      showHint: false,
  });
}

// 初始化路由
function init(app) {
  app.get("/game/hangman/start", startGame);
}

module.exports = init;