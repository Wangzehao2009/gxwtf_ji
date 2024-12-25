# 信息
出题人：施云浩

## 题目描述

现在给定正整数 $n$，需要你求 

$$
\sum\limits_{i=1}^n\sum\limits_{j=1}^n\lfloor \dfrac{n}{\max(i,j)}\rfloor [i \perp j]
$$

其中 $\lfloor x \rfloor$ 表示对 $x$ 向下取整。 $max(x,y)$ 表示 $x,y$ 中的较大值。$[i \perp j]$ 表示 $i,j$ 是否互质，即当 $\gcd(i,j)=1$ 时，$[i \perp j]$ 的值为 $1$，其余情况其值为 $0$。

## 输入格式

输入一行一个正整数 $n$ ($1\le n \le 10^9$)。

## 输出格式

输出一行一个整数，表示这个和式的结果。