import sys
import re

def parse_poems():
    # 读取标准输入的内容
    content = sys.stdin.read()
    
    # 按空行分割每一首诗，过滤掉空行
    poems_data = [poem.strip() for poem in content.strip().split("\n\n") if poem.strip()]
    
    # 生成结果数据
    data = []
    
    for poem in poems_data:
        # 按行分割诗句，第一行是诗名和作者
        lines = poem.split("\n")
        
        if len(lines) > 0:
            # 获取诗名和作者
            first_line = lines[0].strip()
            # 正则匹配诗名和作者，假设格式为 "诗名 作者" 或 "诗名"
            match = re.match(r'^(.*?)(?:\s+(.*))?$', first_line)
            if match:
                poem_name = match.group(1).strip()
                author = match.group(2).strip() if match.group(2) else ""
                
                # 处理每一行诗句
                for line in lines[1:]:
                    # 使用正则去除标点符号并分割成每句诗
                    sentences = re.split(r'[,!?.，。！？；;、：:“”‘’\s]+', line.strip())
                    for sentence in sentences:
                        if sentence:  # 排除空字符串
                            data.append(f"\t{{ line: '{sentence.strip()}', name: '{poem_name}', author: '{author}' }}")
    
    # 输出格式化的JavaScript数组
    print("const data = [")
    print(",\n".join(data))
    print("];")
    print("module.exports = { data };")

# 调用函数
parse_poems()