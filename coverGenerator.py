import os
from PIL import Image, ImageDraw, ImageFont
import argparse

def generate_image_with_text_and_logo(
    text,
    logo_path,
    output_path,
    size_factor=4,
    text_padding=30,
    font_path='public/fonts/FZYanZQKSJF.TTF',
    base_font_size=40,
    base_logo_size=250
):
    # 获取字体的绝对路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    font_absolute_path = os.path.join(current_dir, font_path)

    # 检查 Logo 是否存在
    try:
        logo = Image.open(logo_path)
    except FileNotFoundError:
        print(f"Logo 文件未找到: {logo_path}")
        return

    # 根据 size_factor 动态调整字体大小和 Logo 大小
    font_size = int(base_font_size * size_factor)
    logo_size = (int(base_logo_size * size_factor), int(base_logo_size * size_factor))

    # 设置背景尺寸（与 size_factor 挂钩）
    width_large = 900 * size_factor  # 大封面宽度
    height_large = 383 * size_factor  # 大封面高度
    width_small = 383 * size_factor  # 小封面宽度
    height_small = 383 * size_factor  # 小封面高度

    # 创建大封面图像
    large_cover = Image.new('RGB', (width_large, height_large), color=(255, 255, 255))  # 白色背景
    draw_large = ImageDraw.Draw(large_cover)

    # 加载中文字体并设置字体大小
    try:
        font = ImageFont.truetype(font_absolute_path, font_size)
    except IOError:
        print(f"无法加载字体文件: {font_absolute_path}")
        return

    # 计算文字的宽度和高度
    text_bbox = draw_large.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]

    # 调整 Logo 的大小
    logo_resized = logo.resize(logo_size, Image.Resampling.LANCZOS)  # 根据 size_factor 调整 logo 大小

    # 计算文字和 logo 的组合体高度
    total_height_large = text_height + logo_resized.height + text_padding * size_factor

    # 计算文字和 Logo 的组合体在大封面中的位置
    text_pos_large = ((width_large - text_width) // 2, (height_large - total_height_large) // 2)
    logo_pos_large = ((width_large - logo_resized.width) // 2, text_pos_large[1] + text_height + int(text_padding * size_factor))

    # 绘制文字和 logo 到大封面
    draw_large.text(text_pos_large, text, font=font, fill="black")
    large_cover.paste(logo_resized, logo_pos_large, logo_resized)

    # 创建小封面图像
    small_cover = Image.new('RGB', (width_small, height_small), color=(255, 255, 255))  # 白色背景
    draw_small = ImageDraw.Draw(small_cover)

    # 计算文字和 logo 的组合体高度
    total_height_small = text_height + logo_resized.height + text_padding * size_factor

    # 计算文字和 Logo 的组合体在小封面中的位置
    text_pos_small = ((width_small - text_width) // 2, (height_small - total_height_small) // 2)
    logo_pos_small = ((width_small - logo_resized.width) // 2, text_pos_small[1] + text_height + int(text_padding * size_factor))

    # 绘制文字和 logo 到小封面
    draw_small.text(text_pos_small, text, font=font, fill="black")
    small_cover.paste(logo_resized, logo_pos_small, logo_resized)

    # 合成大封面和小封面
    final_image = Image.new('RGB', (width_large + width_small, height_large), color=(255, 255, 255))
    final_image.paste(large_cover, (0, 0))
    final_image.paste(small_cover, (width_large, 0))

    # 确保输出路径的目录存在
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # 保存最终图片
    final_image.save(output_path)
    print(f"图片生成成功: {output_path}")

if __name__ == "__main__":
    # 解析命令行参数
    parser = argparse.ArgumentParser(description="Generate cover image with text and logo")
    parser.add_argument("--text", required=True, help="Text to display on the cover")
    parser.add_argument("--logo", required=True, help="Path to the logo image")
    parser.add_argument("--output", required=True, help="Output path for the generated cover image")
    parser.add_argument("--size_factor", type=int, default=4, help="Scaling factor for the image size")
    args = parser.parse_args()

    # 调用函数生成图片
    generate_image_with_text_and_logo(
        text=args.text,
        logo_path=args.logo,
        output_path=args.output,
        size_factor=args.size_factor
    )