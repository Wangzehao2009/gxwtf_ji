const nodemailer = require('nodemailer');

// Nodemailer 邮件发送器
const transporter = nodemailer.createTransport({
    service: 'QQ', // 使用 QQ 邮箱服务
    auth: {
        user: 'gxwtf@foxmail.com', // 发件人邮箱
        pass: 'finekbekjveodefc', // 发件人邮箱的授权码（不是登录密码）
    },
});

function sendCaptcha(req, res) {
    const { email, captcha } = req.body;
    if (!email || !captcha) {
        return res.status(400).json({ message: '邮箱和验证码不能为空' });
    }

    // 邮件内容
    const mailOptions = {
        from: 'gxwtf@foxmail.com', // 发件人邮箱
        to: email, // 收件人邮箱
        subject: '验证码', // 邮件主题
        text: `您的验证码是：${captcha}`, // 邮件正文
    };

    // 发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('邮件发送失败:', error);
            return res.status(500).json({ message: '邮件发送失败', error: error.message });
        } else {
            console.log('邮件发送成功:', info.response);
            return res.status(200).json({ message: '邮件发送成功' });
        }
    });
}

function init(app){
    app.post('/sendCaptcha', sendCaptcha);
}

module.exports = init;
