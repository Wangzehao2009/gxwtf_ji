const sharp = require('sharp');
const fs = require('fs');

async function generateImageWithTextAndLogo(text, logoPath) {
    // 检查文件是否存在
    if (!fs.existsSync(logoPath)) {
        console.error("Logo 文件未找到：", logoPath);
        return;
    }

    // 尝试读取并验证图像格式
    try {
        const metadata = await sharp(logoPath).metadata(); // 获取图像的元数据
        console.log('Logo 图像格式:', metadata.format); // 输出图像格式
        console.log('图像尺寸:', metadata.width, metadata.height); // 输出图像尺寸
    } catch (error) {
        console.error('Logo 图像格式无效或损坏:', error);
        return;
    }

    const widthLarge = 900;
    const heightLarge = 383;
    const widthSmall = 383;
    const heightSmall = 383;

    // 将 SVG 转换为 PNG 格式
    const svgToPng = await sharp(Buffer.from(`
        <svg width="${widthLarge}" height="${heightLarge}">
            <text x="50%" y="40%" font-size="48" text-anchor="middle" fill="black">${text}</text>
        </svg>
    `))
    .toFormat('png')
    .toBuffer();

    // 创建大封面并合成文本
    const largeCoverWithText = await sharp({
        create: {
            width: widthLarge,
            height: heightLarge,
            channels: 3,
            background: { r: 255, g: 255, b: 255 } // 白色背景
        }
    })
    .composite([{
        input: svgToPng, // 使用已转换为 PNG 的 SVG
        gravity: 'center'
    }]);

    // 添加 logo 到大封面
    const logoResizedLarge = await sharp(logoPath)
        .resize({ width: Math.min(widthLarge, 200), height: Math.min(heightLarge, 200) })
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .toBuffer();

    const largeCoverWithLogo = await largeCoverWithText
        .composite([{ input: logoResizedLarge, gravity: 'center' }])
        .toBuffer();

    // 创建小封面并合成文本
    const smallCoverWithText = await sharp({
        create: {
            width: widthSmall,
            height: heightSmall,
            channels: 3,
            background: { r: 255, g: 255, b: 255 } // 白色背景
        }
    })
    .composite([{
        input: Buffer.from(`
            <svg width="${widthSmall}" height="${heightSmall}">
                <text x="50%" y="40%" font-size="48" text-anchor="middle" fill="black">${text}</text>
            </svg>
        `),
        gravity: 'center'
    }]);

    // 添加 logo 到小封面
    const logoResizedSmall = await sharp(logoPath)
        .resize({ width: Math.min(widthSmall, 100), height: Math.min(heightSmall, 100) })
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .toBuffer();

    const smallCoverWithLogo = await smallCoverWithText
        .composite([{ input: logoResizedSmall, gravity: 'center' }])
        .toBuffer();

    // 合并大封面和小封面
    const finalImage = await sharp({
        create: {
            width: widthLarge + widthSmall,
            height: heightLarge,
            channels: 3,
            background: { r: 255, g: 255, b: 255 }
        }
    })
    .composite([
        { input: largeCoverWithLogo, left: 0, top: 0 },
        { input: smallCoverWithLogo, left: widthLarge, top: 0 }
    ])
    .toFile('final_output.png');

    console.log('图片生成成功');
}

const logoPath = './public/uploads/1737036113673-726449805.png'; // 本地路径
generateImageWithTextAndLogo('广学五题坊｜第十期', logoPath);