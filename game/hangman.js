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
        wordState,
        remainingAttempts,
        showHint: false,
    });
}

// 猜测字母
function guessLetter(req, res) {
    const { letter } = req.body;
    if (!currentWord) {
      return res.status(400).json({ error: "Game not started." });
    }
  
    const englishWord = currentWord.english.toLowerCase(); // 获取纯小写字母
  
    let correct = false;
  
    // 更新单词状态
    englishWord.split("").forEach((char, index) => {
      // 仅更新字母的位置，非字母位置（如符号和空格）保持原样
      if (char === letter && wordState[index] === "_") {
        wordState[index] = letter;
        correct = true;
      } else if (/[a-zA-Z]/.test(char) === false) {
        // 如果是非字母字符（如空格、符号等），保持原来的字符
        wordState[index] = currentWord.english[index]; 
      }
    });
  
    if (!correct) {
      remainingAttempts -= 1;
    }
  
    const completed = !wordState.includes("_");
    const gameOver = completed || remainingAttempts <= 0;
  
    res.json({
      correct,
      wordState,
      remainingAttempts,
      completed,
      success: completed && remainingAttempts > 0,
      showHint: gameOver,
      hint: {
        phoneticSymbol: currentWord.phoneticSymbol,
        chinese: currentWord.chinese,
      },
      correctWord: gameOver ? currentWord.english : null, // 输或完成时返回正确单词
    });
}


// 认输
function giveUp(req, res) {
  if (!currentWord) {
    return res.status(400).json({ error: "Game not started." });
  }

  res.json({
    success: false,
    showHint: true,
    hint: {
      phoneticSymbol: currentWord.phoneticSymbol,
      chinese: currentWord.chinese,
    },
    correctWord: currentWord.english,
  });
}

// 初始化路由
function init(app) {
  app.get("/game/hangman/start", startGame);
  app.post("/game/hangman/guess", guessLetter);
  app.post("/game/hangman/giveup", giveUp);
}

module.exports = init;