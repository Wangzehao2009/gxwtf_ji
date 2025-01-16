const sharp = require('sharp');

async function generateImageWithText(text) {
    const width = 800;
    const height = 400;

    // 创建一个空白图像
    const image = sharp({
        create: {
            width: width,
            height: height,
            channels: 3,
            background: { r: 255, g: 255, b: 255 } // 白色背景
        }
    });

    // 添加文本到图像
    await image
        .composite([{
            input: Buffer.from(`
                <svg width="${width}" height="${height}">
                    <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="black">${text}</text>
                </svg>
            `),
            gravity: 'center'
        }])
        .toFile('output.png');

    console.log('图片生成成功');
}

generateImageWithText('广学五题坊｜第十期');