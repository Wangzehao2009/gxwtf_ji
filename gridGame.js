const data = [
    { line: '床前明月光', name: '静夜思', author: '李白' },
    { line: '明月几时有', name: '水调歌头·明月几时有', author: '苏轼' },
    { line: '明月何时照我还', name: '114', author: '514' },
    { line: '月明星稀', name: '111', author: '101' },
    { line: '时间都去哪了', name: '123', author: '321' }
    // 更多诗句
];

const similarityThreshold = 1; // 设置相似度阈值
const n = 3; // 网格的行数
const m = 3; // 网格的列数

// 计算两个诗句的相似度（字相同的个数）
function calculateSimilarity(line1, line2) {
    let commonChars = 0;
    for (let char1 of line1) {
        if (line2.includes(char1)) commonChars++;
    }
    return commonChars;
}

// 生成游戏格子和正确答案
function generateGame() {
    const maxPoemLength = Math.floor((n * m * 7) / 9);  // 限制最大诗句长度
    let randomIndex = Math.floor(Math.random() * data.length);
    let correctAnswer = data[randomIndex];

    // 如果选中的诗句长度大于最大允许长度，则重新选取
    while (correctAnswer.line.length > maxPoemLength) {
        randomIndex = Math.floor(Math.random() * data.length);
        correctAnswer = data[randomIndex];
    }

    const correctLine = correctAnswer.line;

    // 找到与正确答案相似的诗句作为干扰项
    const similarPoems = data.filter(item => {
        const similarity = calculateSimilarity(correctLine, item.line);
        return similarity >= similarityThreshold && item !== correctAnswer;
    });

    // 将正确答案的每个字加入到一个字库中
    let gridChars = correctLine.split('');

    // 从相似诗句中抽取字作为干扰项
    similarPoems.forEach(poem => {
        poem.line.split('').forEach(char => {
            if (gridChars.length < n * m) { // 确保不会超过网格大小
                gridChars.push(char);
            }
        });
    });

    // 如果字库不足以填满网格，则从所有诗句中继续添加
    while (gridChars.length < n * m) {
        const remainingPoems = data.filter(item => !gridChars.includes(item.line));
        remainingPoems.forEach(poem => {
            poem.line.split('').forEach(char => {
                if (gridChars.length < n * m) {
                    gridChars.push(char);
                }
            });
        });
    }

    // 随机打乱字库中的字
    gridChars = gridChars.sort(() => Math.random() - 0.5);

    // 生成格子数据
    const gridData = [];
    let currentIndex = 0;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(gridChars[currentIndex]);
            currentIndex++;
        }
        gridData.push(row);
    }

    return { gridData, correctAnswer };
}

// 启动游戏
function startGame(req, res) {
    const { gridData, correctAnswer } = generateGame();
    res.json({ gridData, correctAnswer, n, m }); // 返回完整的正确答案信息
}

// 用户猜测
function guessLetter(req, res) {
    // 处理用户猜测的逻辑
    res.send('用户猜测的处理');
}

// 放弃当前题目
function giveUp(req, res) {
    // 处理放弃当前题目的逻辑
    res.send('用户放弃题目');
}

// 初始化路由
function init(app) {
    app.get("/game/gridGame/start", startGame);
    app.post("/game/gridGame/guess", guessLetter);
    app.post("/game/gridGame/giveup", giveUp);
}

module.exports = init;