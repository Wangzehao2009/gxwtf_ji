# 公告栏

**公布排行榜分数计算方式**

## 提交分数：

$$score_{submit,subjects} = \pi (1+\sum_{s \in subjects}{excel\_count(s)})^e \sum_{s \in subjects}{\ln({submit\_count(s)+1})}$$

## 供题分数：

$$score_{problems}=\sum_{p \in problems}{score_{problems}}$$

## 用户总分：

$$score=score_{submit}+score_{problems}$$

## 题目分数：

$$credit\_users = \{ user \in users | user.score_{submit,all} \geq 11.4 \vee user.problem\_count\}$$

$$score=\frac{\sum_{user \in  credit\_users} score_{user} \cdot point_{user}}{\sum_{user \in  credit\_users}score_{user}}$$

## 学校分数：

$$score_{school}=\ln^2{user\_count_{school}} \sum_{user \in school } score_{submit}$$

