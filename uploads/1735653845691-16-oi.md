# 信息
出题人：陈雨翔、王泽昊

> 目前信息学竞赛还没有开发出提交的OJ，可以先将代码或者解题思路放在问卷中。

## 问题描述

有 $n$ 个数 $a_1,a_2,\dots,a_n$，最开始全为 $0$。

有 $m$ 次操作：

1. $\forall i\in [l,r],a_i\gets a_i+x$；
2. $\forall i\in [l,r],a_i\gets |a_i-x|$；
3. $\forall i\in [l,r],a_i\gets a_i\times x$；
4. $\forall i\in [l,r],a_i\gets \lfloor\frac{a_i}x\rfloor$；
5. $\forall i\in [l,r],a_i\gets \min(a_i,x)$；
6. $\forall i\in [l,r],a_i\gets \max(a_i,x)$；
7. $\forall i\in [l,r],a_i\gets x^{a_i}$；
8. $\forall i\in [l,r],a_i\gets a_i\oplus x$，$\oplus$ 表示异或；
9. 查询 $\min(a_l,a_{l+1},\dots,a_r)\times\text{mex}(a_l,a_{l+1},\dots,a_r)$ 对 $10^9+7$ 取模的结果。

对于一个序列 $a$，$\text{mex}(a)$ 表示 $a$ 中第一个没有出现的**自然数**。如 $\text{mex}(1,1,4,5,1,4)=0,\text{mex}(1,9,1,9,8,1,0)=2$。

## 输入格式

本题**强制在线**。

第一行两个非负整数 $n,m$，表示初始数的个数和操作的个数；

接下来 $m$ 行，每行三个或四个正整数 $op,l,r$ 或 $op,l,r,x'$。

我们记 $last$ 表示上一次 $9$ 操作的答案，则每次操作的 $x'$ 都要异或上 $last$ 才是真实的 $x$ 。初始 $last$ 为 $0$ 。

## 输出格式

对于每一次 $9$ 操作输出一行表示对应的答案。

## 评测用例规模与约定

提示：本题输入文件最大约 $50MB$ ，请选择合适的输入输出方式；请注意算法的常数。

$1\le l\le r\le n\le 10^{18}$，$1\le m\le 10^6$，$1\le x\le 10^{18},1\le op\le 9$。

这里定义 $0^0=1$。