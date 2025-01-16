const { data } = require("./poem/poem.js");

const similarityThreshold = 0; // 设置相似度阈值
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
    const minPoemLength = 4;
    const specialCharRemovalRange = { l: 1, r: 2 }; // 设置丢弃的“特别的字”的数量范围

    let correctAnswer;
    let randomIndex;

    // 生成随机答案，确保符合长度限制
    do {
        randomIndex = Math.floor(Math.random() * data.length);
        correctAnswer = data[randomIndex];
    } while (correctAnswer.line.length > maxPoemLength || correctAnswer.line.length < minPoemLength);

    // 计算每首诗的相似度并排序，优先选择相似度大于阈值的诗句
    const poemSimilarities = data.map(item => ({
        poem: item,
        similarity: calculateSimilarity(correctAnswer.line, item.line),
    }));

    // 按照相似度从高到低排序
    poemSimilarities.sort((a, b) => b.similarity - a.similarity);

    let gridChars = correctAnswer.line.split('');  // 开始时，先将正确答案的每个字加入字库
    let gridData = [];  // 用于存储生成的格子数据
    let addedPoems = 0;  // 用于记录已添加的干扰诗句数量

    // 先把正确答案的字填入gridData
    gridChars.forEach(char => {
        if (gridData.length < n * m) {
            gridData.push(char);
        }
    });

    let selectedPoems = [];  // 存储最终选择的干扰诗句
    let selectedPoemLines = new Set();  // 用于记录已选择的诗句的行内容

    // 添加相似度大于阈值的诗句，从第二个开始
    poemSimilarities.forEach((item, index) => {
        if (index > 0 && gridData.length < n * m && item.similarity >= similarityThreshold) {  // 跳过最相似的诗句
            // 检查是否已经选择过这首诗句
            if (!selectedPoemLines.has(item.poem.line)) {
                const poemChars = item.poem.line.split('');
                const specialChars = poemChars.filter(char => !correctAnswer.line.includes(char));

                // 随机丢弃一些“特别的字”
                const removalCount = Math.floor(Math.random() * (specialCharRemovalRange.r - specialCharRemovalRange.l + 1)) + specialCharRemovalRange.l;
                const charsToRemove = getRandomChars(specialChars, removalCount);
                selectedPoems.push(item);  // 记录作为干扰项的诗句
                selectedPoemLines.add(item.poem.line);  // 将诗句添加到已选择的集合
                addedPoems++;
                poemChars.forEach(char => {
                    if (gridData.length < n * m && !gridData.includes(char) && !charsToRemove.includes(char)) {
                        gridData.push(char);
                    }
                });
            }
        }
    });


    // 如果相似度大于阈值的诗句不足以填满格子，则选择相似度小于阈值的诗句
    if (gridData.length < n * m) {
        poemSimilarities.forEach(item => {
            if (item.similarity < similarityThreshold) {
                // 检查是否已经选择过这首诗句
                if (!selectedPoemLines.has(item.poem.line)) {
                    const poemChars = item.poem.line.split('');
                    const specialChars = poemChars.filter(char => !correctAnswer.line.includes(char));

                    // 随机丢弃一些“特别的字”
                    const removalCount = Math.floor(Math.random() * (specialCharRemovalRange.r - specialCharRemovalRange.l + 1)) + specialCharRemovalRange.l;
                    const charsToRemove = getRandomChars(specialChars, removalCount);

                    poemChars.forEach(char => {
                        if (gridData.length < n * m && !gridData.includes(char) && !charsToRemove.includes(char)) {
                            gridData.push(char);
                            selectedPoems.push(item);  // 记录作为干扰项的诗句
                            selectedPoemLines.add(item.poem.line);  // 将诗句添加到已选择的集合
                        }
                    });
                }
            }
        });
    }


    // 如果字库不足以填满网格，则继续从所有诗句中加入
    while (gridData.length < n * m) {
        data.forEach(poem => {
            poem.line.split('').forEach(char => {
                if (gridData.length < n * m && !gridData.includes(char)) {
                    gridData.push(char);
                }
            });
        });
    }


    // 随机打乱字库中的字
    gridData = gridData.sort(() => Math.random() - 0.5);

    // 生成格子数据
    const finalGridData = [];
    let currentIndex = 0;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(gridData[currentIndex]);
            currentIndex++;
        }
        finalGridData.push(row);
    }

    // 通过检查此网格生成的答案是否合法
    if (!isValidGrid(finalGridData, selectedPoems)) {
        return generateGame();  // 如果网格不合法，则重新生成
    }
    console.log("Correct Answer:", correctAnswer);
    return { gridData: finalGridData, correctAnswer };
}

// 随机从数组中选择指定数量的元素
function getRandomChars(chars, count) {
    const randomChars = [];
    while (randomChars.length < count && chars.length > 0) {
        const index = Math.floor(Math.random() * chars.length);
        randomChars.push(chars[index]);
        chars.splice(index, 1); // 删除已选择的字符
    }
    return randomChars;
}

// 检查网格是否合法
function isValidGrid(gridData, selectedPoems) {
    const gridString = gridData.flat().join('');  // 将网格数据拼接成字符串

    // 遍历每一个干扰项，检查其字是否都出现在网格中
    for (const poem of selectedPoems) {
        const poemChars = poem.poem.line.split('');
        // 检查该干扰项的字符是否完全在网格中
        if (poemChars.every(char => gridString.includes(char))) {
            // 如果干扰项的字都在网格中，则表示答案不唯一
            return false;
        }
    }

    return true;  // 如果所有干扰项的字不能完全组成合法的答案，则合法
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