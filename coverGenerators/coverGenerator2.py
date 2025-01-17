import os
from PIL import Image, ImageDraw, ImageFont
import argparse

def generate_custom_cover(
    text_line2, background_path, output_path,
    font_path='public/fonts/FZYanZQKSJF.TTF',
    base_width=1362, base_height=768,
    base_font_size_line1=100, base_font_size_line2=60,
    base_line_spacing=20, size_factor=1):
    text_line1 = "广学五题坊"  # 固定文本

    # 计算目标尺寸
    width = int(base_width * size_factor)
    height = int(base_height * size_factor)
    font_size_line1 = int(base_font_size_line1 * size_factor)
    font_size_line2 = int(base_font_size_line2 * size_factor)
    line_spacing = int(base_line_spacing * size_factor)

    # 获取字体路径
    current_dir = os.path.dirname(os.path.abspath(__file__))
    font_absolute_path = os.path.join(current_dir, font_path)

    # 打开并处理背景图片
    try:
        background = Image.open(background_path)
    except FileNotFoundError:
        print(f"背景图片未找到: {background_path}")
        return

    # 使用与其他图片相同的等比缩放和填充方式
    bg_aspect = background.width / background.height
    target_aspect = width / height

    if bg_aspect > target_aspect:  # 背景图片更宽，裁剪宽度
        new_width = int(background.height * target_aspect)
        offset = (background.width - new_width) // 2
        background = background.crop((offset, 0, offset + new_width, background.height))
    else:  # 背景图片更高，裁剪高度
        new_height = int(background.width / target_aspect)
        offset = (background.height - new_height) // 2
        background = background.crop((0, offset, background.width, offset + new_height))

    # 调整背景到目标尺寸
    background = background.resize((width, height), Image.Resampling.LANCZOS)

    # 创建绘图对象
    draw = ImageDraw.Draw(background)

    # 加载字体
    try:
        font_line1 = ImageFont.truetype(font_absolute_path, font_size_line1)
        font_line2 = ImageFont.truetype(font_absolute_path, font_size_line2)
    except IOError:
        print(f"无法加载字体文件: {font_absolute_path}")
        return

    # 计算每行文字的宽高
    line1_bbox = draw.textbbox((0, 0), text_line1, font=font_line1)
    line1_width = line1_bbox[2] - line1_bbox[0]
    line1_height = line1_bbox[3] - line1_bbox[1]

    line2_bbox = draw.textbbox((0, 0), text_line2, font=font_line2)
    line2_width = line2_bbox[2] - line2_bbox[0]
    line2_height = line2_bbox[3] - line2_bbox[1]

    # 计算总文字高度
    total_text_height = line1_height + line2_height + line_spacing

    # 计算文字的起始位置（居中）
    line1_x = (width - line1_width) // 2
    line2_x = (width - line2_width) // 2
    line1_y = (height - total_text_height) // 2
    line2_y = line1_y + line1_height + line_spacing

    # 绘制文字
    draw.text((line1_x, line1_y), text_line1, font=font_line1, fill="white")
    draw.text((line2_x, line2_y), text_line2, font=font_line2, fill="white")

    # 保存封面图片
    background.save(output_path)
    print(f"封面已保存到: {output_path}")
    return background

def resize_and_crop(image, target_width, target_height):
    # 获取原图宽高
    aspect_ratio = image.width / image.height
    target_aspect = target_width / target_height

    if aspect_ratio > target_aspect:  # 图片更宽，裁剪宽度
        new_width = int(image.height * target_aspect)
        offset = (image.width - new_width) // 2
        image = image.crop((offset, 0, offset + new_width, image.height))
    else:  # 图片更高，裁剪高度
        new_height = int(image.width / target_aspect)
        offset = (image.height - new_height) // 2
        image = image.crop((0, offset, image.width, offset + new_height))

    return image.resize((target_width, target_height), Image.Resampling.LANCZOS)

def generate_resized_and_combined_images(
    base_image_path, output_path_b, output_path_c, combined_output_path, size_factor=1):
    try:
        # 打开基础图片
        base_image = Image.open(base_image_path)

        # 动态调整目标尺寸
        target_900x383_width = int(900 * size_factor)
        target_900x383_height = int(383 * size_factor)
        target_383x383_width = int(383 * size_factor)
        target_383x383_height = int(383 * size_factor)

        # 裁剪 900x383 的图片
        resized_900x383 = resize_and_crop(base_image, target_900x383_width, target_900x383_height)
        resized_900x383.save(output_path_b)
        print(f"900x383 图片已保存到: {output_path_b}")

        # 裁剪 1:1 的图片
        resized_383x383 = resize_and_crop(base_image, target_383x383_width, target_383x383_height)
        resized_383x383.save(output_path_c)
        print(f"383x383 图片已保存到: {output_path_c}")

        # 拼接 B 和 C
        combined_width = resized_900x383.width + resized_383x383.width
        combined_height = max(resized_900x383.height, resized_383x383.height)
        combined_image = Image.new("RGB", (combined_width, combined_height), "white")

        combined_image.paste(resized_900x383, (0, 0))
        combined_image.paste(resized_383x383, (resized_900x383.width, 0))
        combined_image.save(combined_output_path)
        print(f"拼接图片已保存到: {combined_output_path}")

    except FileNotFoundError:
        print(f"基础图片未找到: {base_image_path}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Generate cover and resized images.")
    parser.add_argument('--text_line2', required=True, help="Second line text.")
    parser.add_argument('--background', required=True, help="Background image path.")
    parser.add_argument('--output_path', required=True, help="Output cover image path.")
    parser.add_argument('--output_path_b', required=True, help="Output 900x383 image path.")
    parser.add_argument('--output_path_c', required=True, help="Output 383x383 image path.")
    parser.add_argument('--combined_output_path', required=True, help="Output combined image path.")
    parser.add_argument('--size_factor', type=int, default=1, help="Scaling factor.")
    
    args = parser.parse_args()

    # 生成封面
    generate_custom_cover(
        text_line2=args.text_line2,
        background_path=args.background,
        output_path=args.output_path,
        size_factor=args.size_factor
    )

    # 生成调整后的图片及拼接图片
    generate_resized_and_combined_images(
        base_image_path=args.output_path,
        output_path_b=args.output_path_b,
        output_path_c=args.output_path_c,
        combined_output_path=args.combined_output_path,
        size_factor=args.size_factor
    )
