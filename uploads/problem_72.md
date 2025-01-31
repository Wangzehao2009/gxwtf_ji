123

## 题目背景

> Let me forget everything, and leave no trace of you.

## 问题描述

给定一个长度为 $n$ 的序列 $\\{A\\}$，求：

$$\sum\limits_{i = 1}^n\sum\limits_{j = i + 1}^nd(\gcd(A_i, A_j))$$

其中 $d(x)$ 表示 $x$ 的约数个数，$\gcd(x, y)$ 表示 $x$ 和 $y$ 的最大公约数。

## 输入格式

第一行一个正整数 $n$。
thing, and leave no trace of you.

## 问题描述

给定一个长度为 $n$ 的序列 $\\{A\\}$，求：

$$\sum\limits_{i = 1}^n\sum\limits_{j = i + 1}^nd(\gcd(A_i, A_j))$$

其中 $d(x)$ 表示 $x$ 的约数个数，$\gcd(x, y)$ 表示 $x$ 和 $y$ 的最大公约数。

## 输入格式

第一行一个正整数 $n$。

第二行 $n$ 个正整数 $A_i$。

## 输出格式

输出一行一个正整数表示答案。

## 样例输入

```data
4
2 4 6 9
```

## 样例输出

```data
10
```

## 评测用例规模与约定

本题共 $10$ 组测试点，每组 $10$ 分，共 $100$ 分。详细信息如下：

|测试点编号|$n \le$|$A_i \le$|特殊性质|
|:-:|:-:|:-:|:-:|
|$1 \sim 2$|$10^3$|$10^7$||
|$3$|$2 \times 10^5$|$10^7$| $\forall i \in [1, n]$，$a_i$ 是质数|
|$4$|$2 \times 10^5$|$10^3$||
|$5 \sim 6$|$2 \times 10^5$|$2 \times 10^5$||
|$7 \sim 10$|$2 \times 10^5$|$10^7$||


对于全部数据，$1 \le n \le 2 \times 10^5$，$\forall i \in [1, n], 1 \le A_i \le 10^7$。

123