> 题目名称：费马数列\
> 题目编号：$2243$\
> 时间限制：$1.0 s$\
> 空间限制：$512$ $MB$

# 题目描述

定义费马数 $F_n$ 为 $2^{2^n}+1$，其中 $n$ 为自然数。

令 $\{a_n\}$ 为满足如下条件的无穷正整数列（下标从 $1$ 开始）：

1. $\{a_n\}$ 单调递增。
2. 一个数 $x$ 在数列 $\{a_n\}$ 中出现，当且仅当 $x$ 为 $1$，或者可以表示成若干个不同费马数之积。

请求出 $a_n$ 在模意义下的值。

# 输入格式

第一行输入两个正整数 $T$ 和 $m$，表示数据组数和模数。

第 $2$ 到 $T+1$ 行每行输入一个正整数 $n$。

# 输出格式

共输出 $T$ 行，每行依次对应一个输入。

# 样例 #1

## 样例输入 #1

```
2 3
2
4
```

## 样例输出 #1

```
0
0
```

# 样例 #2

## 样例输入 #2

```
3 5
2
5
7
```

## 样例输出 #2

```
3
2
0
```

# 数据范围

$T\leq 10^5,m\leq 2\times 10^9,n\leq 10^{18}$