const data = [
    {
        english: "a (an)",
        phoneticSymbol: "[ə, eɪ(ən)]",
        chinese: "art. 一（个、件……）",
    },
    {
        english: "abandon",
        phoneticSymbol: "[əˈbændən]",
        chinese: "v.抛弃，舍弃，放弃",
    },
    {
        english: "ability",
        phoneticSymbol: "[əˈbɪlɪtɪ]",
        chinese: "n. 能力；才能",
    },
    {
        english: "able",
        phoneticSymbol: "[ˈeɪb(ə)l]",
        chinese: "a. 能够；有能力的",
    },
    {
        english: "abnormal",
        phoneticSymbol: "[æbˈnɔːm(ə)l]",
        chinese: "a. 反常的，变态的",
    },
    {
        english: "aboard",
        phoneticSymbol: "[əˈbɔːd]",
        chinese: "prep. 上（船，飞机，火车，汽车等）",
    },
    {
        english: "abolish",
        phoneticSymbol: "[əˈbɔlɪʃ]",
        chinese: "v. 废除，废止",
    },
    {
        english: "abortion",
        phoneticSymbol: "[əˈbɔːʃ(ə)n]",
        chinese: "v. 人工流产，堕胎",
    },
    {
        english: "about",
        phoneticSymbol: "[əˈbaʊt]",
        chinese: "ad. 大约；到处；四处 prep. 关于；在各处；四处",
    },
    {
        english: "above",
        phoneticSymbol: "[əˈbʌv]",
        chinese: "prep. 在……上面 a. 上面的 ad. 在……之上",
    },
    {
        english: "abroad",
        phoneticSymbol: "[əˈbrɔːd]",
        chinese: "ad. 到（在）国外",
    },
    {
        english: "abrupt",
        phoneticSymbol: "[əˈbrʌpt]",
        chinese: "a. 突然的，意外的，粗鲁",
    },
    {
        english: "absence",
        phoneticSymbol: "[ˈæbsəns]",
        chinese: "n. 不在，缺席",
    },
    {
        english: "absent",
        phoneticSymbol: "[ˈæbsənt]",
        chinese: "a. 缺席， 不在",
    },
    {
        english: "absolute",
        phoneticSymbol: "[ˈæbsəluːt]",
        chinese: "a. 完全，全部，绝对的",
    },
    {
        english: "absorb",
        phoneticSymbol: "[əbˈsɔːb]",
        chinese: "v. 吸收，使全神贯注",
    },
    {
        english: "abstract",
        phoneticSymbol: "[ˈæbstrækt]",
        chinese: "a./ n. 抽象的（作品）",
    },
    {
        english: "absurd",
        phoneticSymbol: "[əbˈsɜːd]",
        chinese: "a.荒谬的，怪诞不经的",
    },
    {
        english: "abundant",
        phoneticSymbol: "[əˈbʌndənt]",
        chinese: "a.大量,丰盛的,充裕的",
    },
    {
        english: "abuse",
        phoneticSymbol: "[əˈbjuːz]",
        chinese: "v.（酗酒）滥用,虐待,恶语",
    },
    {
        english: "academic",
        phoneticSymbol: "[ækəˈdemɪk]",
        chinese: "a. / n. 学术的，教学的",
    },
    {
        english: "academy",
        phoneticSymbol: "[əˈkædəmɪ]",
        chinese: "n.专科学院,（美）私立学校",
    },
    {
        english: "accelerate",
        phoneticSymbol: "[əkˈseləreɪt]",
        chinese: "v.（使）加速，加快",
    },
    {
        english: "accent",
        phoneticSymbol: "[ˈæksənt]",
        chinese: "n. 口音，音调",
    },
    {
        english: "accept",
        phoneticSymbol: "[əkˈsept]",
        chinese: "vt. 接受",
    },
    {
        english: "access",
        phoneticSymbol: "[ˈækses]",
        chinese: "n. / v. 通道，入径，存取（计算机文件）",
    },
    {
        english: "accessible",
        phoneticSymbol: "[əkˈsesɪb(ə)l]",
        chinese: "a. 可到达的，可接受的，易相处的）",
    },
    {
        english: "accident",
        phoneticSymbol: "[ˈæksɪdənt]",
        chinese: "n. 事故，意外的事",
    },
    {
        english: "accommodation",
        phoneticSymbol: "[əkɔməˈdeɪʃ(ə)n]",
        chinese: "n.住宿，膳宿",
    },
    {
        english: "accompany",
        phoneticSymbol: "[əˈkʌmpənɪ]",
        chinese: "v. 陪同，陪伴，与…同时发生",
    },
    {
        english: "accomplish",
        phoneticSymbol: "[əˈkʌmplɪʃ]",
        chinese: "v. 完成",
    },
    {
        english: "account",
        phoneticSymbol: "[əˈkaʊnt]",
        chinese: "n. 账目;描述",
    },
    {
        english: "accountant",
        phoneticSymbol: "[əˈkaʊnt(ə)nt]",
        chinese: "n. 会计，会计师",
    },
    {
        english: "accumulate",
        phoneticSymbol: "[əˈkjuːmjʊleɪt]",
        chinese: "v. 积累，积聚",
    },
    {
        english: "accuracy",
        phoneticSymbol: "[ˈækjʊrəsɪ]",
        chinese: "n. 准确，精确",
    },
    {
        english: "accurate",
        phoneticSymbol: "[ˈækjərət]",
        chinese: "adj. 精确的，准确的;正确无误的",
    },
    {
        english: "accuse",
        phoneticSymbol: "[əˈkjuːz]",
        chinese: "v. 正确无误的,精确的",
    },
    {
        english: "accustomed",
        phoneticSymbol: "[əˈkʌstəmd]",
        chinese: "a. 习惯于,惯常的",
    },
    {
        english: "ache",
        phoneticSymbol: "[eɪk]",
        chinese: "vi.& n. 痛，疼痛",
    },
    {
        english: "achieve",
        phoneticSymbol: "[əˈtʃiːv]",
        chinese: "vt. 达到，取得",
    },
    {
        english: "achievement",
        phoneticSymbol: "[əˈtʃiːvmənt]",
        chinese: "n. 成就,成绩,功绩",
    },
    {
        english: "acid",
        phoneticSymbol: "[ˈæsɪd]",
        chinese: "a. 酸的",
    },
    {
        english: "acknowledge",
        phoneticSymbol: "[əkˈnɔlɪdʒ]",
        chinese: "v. 承认",
    },
    {
        english: "acquaintance",
        phoneticSymbol: "[əˈkweɪntəns]",
        chinese: "n. 熟人，（与某人）认识",
    },
    {
        english: "acquire",
        phoneticSymbol: "[əˈkwaɪə(r)]",
        chinese: "v. 获得，得到",
    },
    {
        english: "acquisition",
        phoneticSymbol: "[ækwɪˈzɪʃ(ə)n]",
        chinese: "n. 获得，得到",
    },
    {
        english: "acre",
        phoneticSymbol: "[ˈeɪkə(r)]",
        chinese: "n. 英亩",
    },
    {
        english: "across",
        phoneticSymbol: "[əˈkrɔs]",
        chinese: "prep. 横过，穿过",
    },
    {
        english: "act",
        phoneticSymbol: "[ækt]",
        chinese:
            "n. 法令，条例 v. （戏）表演，扮演（角色），演出（戏）；行动，做事",
    },
    {
        english: "action",
        phoneticSymbol: "[ˈækʃ(ə)n]",
        chinese: "n. 行动",
    },
    {
        english: "active",
        phoneticSymbol: "[ˈæktɪv]",
        chinese: "a. 积极的，主动的",
    },
    {
        english: "activity",
        phoneticSymbol: "[ækˈtɪvɪtɪ]",
        chinese: "n. 活动",
    },
    {
        english: "actor",
        phoneticSymbol: "[ˈæktə(r)]",
        chinese: "n. 男演员",
    },
    {
        english: "actress",
        phoneticSymbol: "[ˈæktrɪs]",
        chinese: "n. 女演员",
    },
    {
        english: "actual",
        phoneticSymbol: "[ˈæktʃʊəl]",
        chinese: "a. 实际的； 现实的",
    },
    {
        english: "ad",
        phoneticSymbol: "[æd]",
        chinese: "(缩) =advertisement n.广告",
    },
    {
        english: "adapt",
        phoneticSymbol: "[əˈdæpt]",
        chinese: "v. 使适应，适合，改编",
    },
    {
        english: "adaptation",
        phoneticSymbol: "[ədæpˈteɪʃ(ə)n]",
        chinese: "n. 适应，改编本",
    },
    {
        english: "add",
        phoneticSymbol: "[æd]",
        chinese: "vt.添加，增加",
    },
    {
        english: "addicted",
        phoneticSymbol: "[əˈdɪktɪd]",
        chinese: "a. 上瘾，成瘾，入迷",
    },
    {
        english: "addition",
        phoneticSymbol: "[əˈdɪʃ(ə)n]",
        chinese: "n.增加;（算数用语）加",
    },
    {
        english: "address",
        phoneticSymbol: "[əˈdres]",
        chinese: "n. 地址",
    },
    {
        english: "adequate",
        phoneticSymbol: "[ˈædɪkwət]",
        chinese: "a. 合适的，合乎需要的",
    },
    {
        english: "adjust",
        phoneticSymbol: "[əˈdʒʌst]",
        chinese: "v.调整,调节,适应,习惯",
    },
    {
        english: "adjustment",
        phoneticSymbol: "[əˈdʒʌstmənt]",
        chinese: "n. 调整，适应",
    },
    {
        english: "administration",
        phoneticSymbol: "[ədmɪnɪˈstreɪʃ(ə)n]",
        chinese: "n.管理,行政部门",
    },
    {
        english: "admirable",
        phoneticSymbol: "[ˈædmərəb(ə)l]",
        chinese: "a.值得赞赏的,可钦佩的",
    },
    {
        english: "admire",
        phoneticSymbol: "[ədˈmaɪə(r)]",
        chinese: "v. 钦佩；羡慕",
    },
    {
        english: "admission",
        phoneticSymbol: "[ədˈmɪʃ(ə)n]",
        chinese: "n. 准入, 接纳",
    },
    {
        english: "admit",
        phoneticSymbol: "[ədˈmɪt]",
        chinese: "vt. 承认，准许（入场，入学，入会）",
    },
    {
        english: "adolescence",
        phoneticSymbol: "[ædəʊ'lesns]",
        chinese: "n. 青春，青春期",
    },
    {
        english: "adolescent",
        phoneticSymbol: "[ædəˈlesənt]",
        chinese: "n. 青少年",
    },
    {
        english: "adopt",
        phoneticSymbol: "[əˈdɔpt]",
        chinese: "v. 收养，领养",
    },
    {
        english: "adore",
        phoneticSymbol: "[əˈdɔː(r)]",
        chinese: "v. （不用于进行时）热爱，爱慕某人",
    },
    {
        english: "adult",
        phoneticSymbol: "[ˈædʌlt]",
        chinese: "n. 成年人",
    },
    {
        english: "advance",
        phoneticSymbol: "[ədˈvɑːns; (US) ədˈvæns]",
        chinese: "v. 推进，促进；前进",
    },
    {
        english: "advantage",
        phoneticSymbol: "[ədˈvɑːntɪdʒ]",
        chinese: "n. 优点； 好处",
    },
    {
        english: "adventure",
        phoneticSymbol: "[ədˈventʃə(r)]",
        chinese: "n. 冒险； 奇遇",
    },
    {
        english: "advertise",
        phoneticSymbol: "[ˈædvətaɪz]",
        chinese: "vt. 为……做广告",
    },
    {
        english: "advertisement",
        phoneticSymbol: "[ədˈvɜːtɪsmənt]",
        chinese: "n. 广告",
    },
    {
        english: "advice",
        phoneticSymbol: "[ədˈvaɪs]",
        chinese: "n. 忠告，劝告，建议",
    },
    {
        english: "advise",
        phoneticSymbol: "[ədˈvaɪz]",
        chinese: "vt. 忠告，劝告，建议",
    },
    {
        english: "advocate",
        phoneticSymbol: "[ˈædvəkət]",
        chinese: "v. 拥护，支持，提倡",
    },
    {
        english: "affair",
        phoneticSymbol: "[əˈfeə(r)]",
        chinese: "n. 事，事情",
    },
    {
        english: "affect",
        phoneticSymbol: "[əˈfekt]",
        chinese: "vt. 影响",
    },
    {
        english: "affection",
        phoneticSymbol: "[əˈfekʃ(ə)n]",
        chinese: "n. 喜爱，钟爱",
    },
    {
        english: "afford",
        phoneticSymbol: "[əˈfɔːd]",
        chinese: "vt. 负担得起（……的费用）；抽得出（时间）；提供",
    },
    {
        english: "afraid",
        phoneticSymbol: "[əˈfreɪd]",
        chinese: "a. 害怕的；担心",
    },
    {
        english: "Africa",
        phoneticSymbol: "[ˈæfrɪkə]",
        chinese: "* n. 非洲",
    },
    {
        english: "African",
        phoneticSymbol: "[ˈæfrɪkən]",
        chinese: "a. 非洲的，非洲人的 n. 非洲人",
    },
    {
        english: "afte",
        phoneticSymbol: "[ˈɑːftə(r)]",
        chinese: "r ad. 在后；后来prep. 在…之后；在 后面 conj. 在…以后",
    },
    {
        english: "afternoon",
        phoneticSymbol: "[ɑːftəˈnuːn]",
        chinese: "n. 下午，午后",
    },
    {
        english: "afterward(s)",
        phoneticSymbol: "[ˈɑːftəwəd(z)]",
        chinese: "ad. 后来",
    },
    {
        english: "again",
        phoneticSymbol: "[əˈɡeɪn]",
        chinese: "ad. 再一次；再，又",
    },
    {
        english: "against",
        phoneticSymbol: "[əˈɡeɪnst]",
        chinese: "prep. 对着，反对",
    },
    {
        english: "age",
        phoneticSymbol: "[eɪdʒ]",
        chinese: "n. 年龄；时代",
    },
    {
        english: "agency",
        phoneticSymbol: "[ˈeɪdʒənsɪ]",
        chinese: "n. 代理机构",
    },
    {
        english: "agenda",
        phoneticSymbol: "[əˈdʒendə]",
        chinese: "n. （会议）议程表，议事日程",
    },
    {
        english: "agent",
        phoneticSymbol: "[ˈeɪdʒənt]",
        chinese: "n. 代理人，经济人",
    },
    {
        english: "aggressive",
        phoneticSymbol: "[ˈəɡresɪv]",
        chinese: "a. 侵略的；咄咄逼人",
    },
    {
        english: "ago",
        phoneticSymbol: "[əˈɡəʊ]",
        chinese: "ad. 以前",
    },
    {
        english: "agree",
        phoneticSymbol: "[əˈɡriː]",
        chinese: "v. 同意；应允",
    },
    {
        english: "agreement",
        phoneticSymbol: "[əˈɡriːmənt]",
        chinese: "n. 同意，一致；协定，协议",
    },
    {
        english: "agricultural",
        phoneticSymbol: "[æɡrɪˈkʌltʃər(ə)l]",
        chinese: "a. 农业的",
    },
    {
        english: "agriculture",
        phoneticSymbol: "[ˈæɡrɪkʌltʃə(r)]",
        chinese: "n. 农业，农学",
    },
    {
        english: "ahead",
        phoneticSymbol: "[əˈhed]",
        chinese: "ad. 在前，向前",
    },
    {
        english: "aid",
        phoneticSymbol: "[eɪd]",
        chinese: "n. 援助；救护；辅助器具",
    },
    {
        english: "AIDS",
        phoneticSymbol: "[eɪdz]",
        chinese: "n. 艾滋病",
    },
    {
        english: "aim",
        phoneticSymbol: "[eɪm]",
        chinese: "n.目的；目标 v. 计划，打算；瞄准；针对",
    },
    {
        english: "air",
        phoneticSymbol: "[eə(r)]",
        chinese: "n. 空气；大气",
    },
    {
        english: "aircraft",
        phoneticSymbol: "[ˈeəkrɑːft]",
        chinese: "n. 飞机 (单复数同)",
    },
    {
        english: "airmail",
        phoneticSymbol: "[ˈeəmeɪl]",
        chinese: "n. 航空邮件",
    },
    {
        english: "airplane",
        phoneticSymbol: "[ˈeəpleɪn]",
        chinese: "n. （美）飞机",
    },
    {
        english: "airport",
        phoneticSymbol: "[ˈeəpɔːt]",
        chinese: "n. 航空站，飞机场",
    },
    {
        english: "airspace",
        phoneticSymbol: "[ˈeəspeɪs]",
        chinese: "n.领空,（某国的）空域",
    },
    {
        english: "alarm",
        phoneticSymbol: "[əˈlɑːm]",
        chinese: "n. 警报",
    },
    {
        english: "album",
        phoneticSymbol: "[ˈælbəm]",
        chinese: "n. 相册，影集，集邮簿",
    },
    {
        english: "alcohol",
        phoneticSymbol: "[ˈælkəhɔl]",
        chinese: "n. 含酒精饮料，酒",
    },
    {
        english: "alcoholic",
        phoneticSymbol: "[ælkəˈhɔlɪk]",
        chinese: "a. / n. 含酒精的，酒鬼",
    },
    {
        english: "algebra",
        phoneticSymbol: "[ˈældʒɪbrə]",
        chinese: "n. 代数",
    },
    {
        english: "alike",
        phoneticSymbol: "[əˈlaɪk]",
        chinese: "ad. 很相似地，同样地",
    },
    {
        english: "alive",
        phoneticSymbol: "[əˈlaɪv]",
        chinese: "a. 活着的，存在的",
    },
    {
        english: "all",
        phoneticSymbol: "[ɔːl]",
        chinese: "ad. 全部地 a. 全（部）;所有的;总;整 pron.全部;全体人员",
    },
    {
        english: "allergic",
        phoneticSymbol: "[əˈlɜːdʒɪk]",
        chinese: "a. 过敏的，厌恶",
    },
    {
        english: "alley",
        phoneticSymbol: "[ˈælɪ]",
        chinese: "n. 小巷，胡同",
    },
    {
        english: "allocate",
        phoneticSymbol: "[ˈæləkeɪt]",
        chinese: "v. 划归,分配…给",
    },
    {
        english: "allow",
        phoneticSymbol: "[əˈlaʊ]",
        chinese: "vt. 允许，准许",
    },
    {
        english: "allowance",
        phoneticSymbol: "[əˈlaʊəns]",
        chinese: "n. 津贴，补助",
    },
    {
        english: "almost",
        phoneticSymbol: "[ˈɔːlməʊst]",
        chinese: "ad. 几乎，差不多",
    },
    {
        english: "alone",
        phoneticSymbol: "[əˈləʊn]",
        chinese: "a. 单独的，孤独的",
    },
    {
        english: "along",
        phoneticSymbol: "[əˈlɔŋ; (US) əˈlɔŋ]",
        chinese: "ad. 向前；和…一起；一同 prep. 沿着；顺着",
    },
    {
        english: "alongside",
        phoneticSymbol: "[əlɔŋˈsaɪd; (US) əlɔːŋˈsaɪd]",
        chinese: "ad.在…旁边,与…同时",
    },
    {
        english: "aloud",
        phoneticSymbol: "[əˈlaʊd]",
        chinese: "ad. 大声地",
    },
    {
        english: "alphabet",
        phoneticSymbol: "[ˈælfəbet]",
        chinese: "n. 字母表，字母",
    },
    {
        english: "already",
        phoneticSymbol: "[ɔːlˈredɪ]",
        chinese: "ad. 已经",
    },
    {
        english: "also",
        phoneticSymbol: "[ˈɔːlsəʊ]",
        chinese: "ad. 也",
    },
    {
        english: "alternative",
        phoneticSymbol: "[ɔːlˈtɜːnətɪv]",
        chinese: "a.可供替代,非传统的",
    },
    {
        english: "although",
        phoneticSymbol: "[ɔːlˈðəʊ]",
        chinese: "conj. 虽然，尽管",
    },
    {
        english: "altitude",
        phoneticSymbol: "[ˈæltɪtjuːd; (US) ælˈtɪtuːd]",
        chinese: "n. 海拔高度",
    },
    {
        english: "altogether",
        phoneticSymbol: "[ɔːltəˈɡeðə(r)]",
        chinese: "ad. 总共",
    },
    {
        english: "aluminium",
        phoneticSymbol: "[æljʊˈmɪnɪəm]",
        chinese: "n. （化）铝",
    },
    {
        english: "always",
        phoneticSymbol: "[ˈɔːlweɪz]",
        chinese: "ad. 总是；一直；永远",
    },
    {
        english: "amateur",
        phoneticSymbol: "[ˈæmətə(r)]",
        chinese: "a. 业余爱好的",
    },
    {
        english: "amaze",
        phoneticSymbol: "[əˈmeɪz]",
        chinese: "v. 惊奇，惊叹；震惊",
    },
    {
        english: "amazing",
        phoneticSymbol: "[əˈmeɪzɪŋ]",
        chinese: "a.惊奇,惊叹的;震惊的",
    },
    {
        english: "ambassador",
        phoneticSymbol: "[æmˈbæsədə(r)]",
        chinese: "n.大使",
    },
    {
        english: "ambassadress",
        phoneticSymbol: "[æm'bæsədres]",
        chinese: "n. 大使夫人；女大使",
    },
    {
        english: "ambiguous",
        phoneticSymbol: "[æmˈbɪɡjʊəs]",
        chinese: "a. 模棱两可的",
    },
    {
        english: "ambition",
        phoneticSymbol: "[æmˈbɪʃ(ə)n]",
        chinese: "n.目标,野心,雄心,抱负",
    },
    {
        english: "ambulance",
        phoneticSymbol: "[ˈæmbjʊləns]",
        chinese: "n. 救护车",
    },
    {
        english: "America",
        phoneticSymbol: "[əˈmerɪkə]",
        chinese: "* n. 美国；美洲",
    },
    {
        english: "among",
        phoneticSymbol: "[əˈmʌŋ]",
        chinese: "prep. 在…中间；在（三个以上）之间",
    },
    {
        english: "amount",
        phoneticSymbol: "[əˈmaʊnt]",
        chinese: "n. / v. 金额，数量，总计",
    },
    {
        english: "ample",
        phoneticSymbol: "[ˈæmp(ə)l]",
        chinese: "a. 足够的，丰裕的",
    },
    {
        english: "amuse",
        phoneticSymbol: "[əˈmjuːz]",
        chinese: "vt. （使人）快乐，逗乐",
    },
    {
        english: "amusement",
        phoneticSymbol: "[əˈmjuːzmənt]",
        chinese: "n. 娱乐",
    },
    {
        english: "analysis",
        phoneticSymbol: "[əˈnæləsɪs]",
        chinese: "n. 分析，分析结果",
    },
    {
        english: "ancestor",
        phoneticSymbol: "[ˈænsəstə(r)]",
        chinese: "n. 祖宗； 祖先",
    },
    {
        english: "ancient",
        phoneticSymbol: "[ˈeɪnʃənt]",
        chinese: "a. 古代的，古老的",
    },
    {
        english: "and",
        phoneticSymbol: "[ənd, ænd]",
        chinese: "conj. 和；又；而",
    },
    {
        english: "anecdote",
        phoneticSymbol: "[ˈænɪkdəʊt]",
        chinese: "n. 逸事，趣闻",
    },
    {
        english: "anger",
        phoneticSymbol: "[ˈæŋɡə(r)]",
        chinese: "n. 怒，愤怒",
    },
    {
        english: "angle",
        phoneticSymbol: "[ˈæŋɡ(ə)l]",
        chinese: "n. 角度",
    },
    {
        english: "angry",
        phoneticSymbol: "[ˈænɡrɪ]",
        chinese: "a. 生气的，愤怒的",
    },
    {
        english: "animal",
        phoneticSymbol: "[ˈænɪm(ə)l]",
        chinese: "n. 动物",
    },
    {
        english: "ankle",
        phoneticSymbol: "[ˈæŋk(ə)l]",
        chinese: "n. 踝，踝关节",
    },
    {
        english: "anniversary",
        phoneticSymbol: "[ænɪˈvɜːsərɪ]",
        chinese: "n. 周年纪念日",
    },
    {
        english: "announce",
        phoneticSymbol: "[əˈnaʊns]",
        chinese: "vt. 宣布，宣告",
    },
    {
        english: "annoy",
        phoneticSymbol: "[əˈnɔɪ]",
        chinese: "vt. （使）烦恼",
    },
    {
        english: "annual",
        phoneticSymbol: "[ˈænjʊəl]",
        chinese: "a. 每年的，年度的，一年一次的",
    },
    {
        english: "another",
        phoneticSymbol: "[əˈnʌðə(r)]",
        chinese: "a. 再一；另一；别的；不同的 pron. 另一个",
    },
    {
        english: "answer",
        phoneticSymbol: "[ˈɑːnsə(r); (US) ˈænsər]",
        chinese: "n.回答,答复;回信;答案 v.回答,答复;回信;（作出）答案",
    },
    {
        english: "ant",
        phoneticSymbol: "[ænt]",
        chinese: "n. 蚂蚁",
    },
    {
        english: "Antarctic",
        phoneticSymbol: "[ænˈtɑːktɪk]",
        chinese: "a. 南极的",
    },
    {
        english: "antique",
        phoneticSymbol: "[ænˈtiːk]",
        chinese: "n. 古董",
    },
    {
        english: "anxiety",
        phoneticSymbol: "[æŋˈzaɪətɪ]",
        chinese: "n. 担忧，焦虑",
    },
    {
        english: "anxious",
        phoneticSymbol: "[ˈæŋkʃəs]",
        chinese: "a. 忧虑的，焦急的",
    },
    {
        english: "any",
        phoneticSymbol: "[ˈenɪ]",
        chinese:
            "pron. （无论）哪一个；哪些 任何的；（用于疑问句、否定句）一些；什么",
    },
    {
        english: "anybody",
        phoneticSymbol: "[ˈenɪbɔdɪ]",
        chinese: "pron. 任何人，无论谁",
    },
    {
        english: "anyhow",
        phoneticSymbol: "[ˈenɪhaʊ]",
        chinese: "ad. 不管怎样",
    },
    {
        english: "anyone",
        phoneticSymbol: "[ˈenɪwʌn]",
        chinese: "pron. 任何人，无论谁",
    },
    {
        english: "anything",
        phoneticSymbol: "[ˈenɪθɪŋ]",
        chinese: "pron. 什么事（物）；任何事（物）",
    },
    {
        english: "anyway",
        phoneticSymbol: "[ˈenɪweɪ]",
        chinese: "y ad. 不管怎样",
    },
    {
        english: "anywhere",
        phoneticSymbol: "[ˈenɪweə(r)]",
        chinese: "ad. 任何地方",
    },
    {
        english: "apart",
        phoneticSymbol: "[əˈpɑːt]",
        chinese: "ad, / a. 相隔，相距，除外",
    },
    {
        english: "apartment",
        phoneticSymbol: "[əˈpɑːtmənt]",
        chinese: "n. （美）楼中单元房，一套房间；房间",
    },
    {
        english: "apologize",
        phoneticSymbol: "[əˈpɔlədʒaɪz]",
        chinese: "vi. 道歉，谢罪",
    },
    {
        english: "apology",
        phoneticSymbol: "[əˈpɔlədʒɪ]",
        chinese: "n. 道歉；歉意",
    },
    {
        english: "apparent",
        phoneticSymbol: "[əˈpærənt]",
        chinese: "a. 显而易见",
    },
    {
        english: "appeal",
        phoneticSymbol: "[əˈpiːl]",
        chinese: "v. 上诉，申诉，吸引力",
    },
    {
        english: "appear",
        phoneticSymbol: "[əˈpɪə(r)]",
        chinese: "vi. 出现",
    },
    {
        english: "appearance",
        phoneticSymbol: "[əˈpɪərəns]",
        chinese: "n. 出现，露面；容貌",
    },
    {
        english: "appendix",
        phoneticSymbol: "[əˈpendɪks]",
        chinese: "n. 附录，阑尾",
    },
    {
        english: "appetite",
        phoneticSymbol: "[ˈæpɪtaɪt]",
        chinese: "n. 食欲，胃口",
    },
    {
        english: "applaud",
        phoneticSymbol: "[əˈplɔːd]",
        chinese: "v. / n. 鼓掌,赞许,赞赏",
    },
    {
        english: "apple",
        phoneticSymbol: "[ˈæp(ə)l]",
        chinese: "n. 苹果",
    },
    {
        english: "applicant",
        phoneticSymbol: "[ˈæplɪkənt]",
        chinese: "n. 申请人",
    },
    {
        english: "application",
        phoneticSymbol: "[æplɪˈkeɪʃ(ə)n]",
        chinese: "n. 申请",
    },
    {
        english: "apply",
        phoneticSymbol: "[əˈplaɪ]",
        chinese: "v. 申请",
    },
    {
        english: "appoint",
        phoneticSymbol: "[əˈpɔɪnt]",
        chinese: "v. 任命，委任，安排，确定（时间，地点）",
    },
    {
        english: "appointment",
        phoneticSymbol: "[əˈpɔɪntmənt]",
        chinese: "n. 约会",
    },
    {
        english: "appreciate",
        phoneticSymbol: "[əˈpriːʃɪeɪt]",
        chinese: "v. 欣赏； 感激",
    },
    {
        english: "appreciation",
        phoneticSymbol: "[əpriːʃɪˈeɪʃ(ə)n]",
        chinese: "n. 欣赏,鉴定,评估",
    },
    {
        english: "approach",
        phoneticSymbol: "[əˈprəʊtʃ]",
        chinese: "n. / v. 靠近，接近，建议，要求",
    },
    {
        english: "appropriate",
        phoneticSymbol: "[əˈprəʊprɪət]",
        chinese: "a. 合适的，恰当的",
    },
    {
        english: "approval",
        phoneticSymbol: "[ə‘pru:vl]",
        chinese: "n. 同意;批准;赞成",
    },
    {
        english: "approve",
        phoneticSymbol: "[əˈpruːv]",
        chinese: "v.赞成,同意,批准,通过",
    },
    {
        english: "approximately",
        phoneticSymbol: "[əprɔksɪˈmətlɪ]",
        chinese: "ad.近似，大约",
    },
    {
        english: "apron",
        phoneticSymbol: "[ˈeɪprən]",
        chinese: "n. （机场的）停机坪",
    },
    {
        english: "arbitrary",
        phoneticSymbol: "[ˈɑːbɪtrərɪ; (US) ˈɑːrbɪtrerɪ]",
        chinese: "a. 随心所欲的，独裁的，专断的",
    },
    {
        english: "arch",
        phoneticSymbol: "[ɑːtʃ]",
        chinese: "n. 拱，拱门",
    },
    {
        english: "architect",
        phoneticSymbol: "[ˈɑːkɪtekt]",
        chinese: "n. 建筑师，设计师",
    },
    {
        english: "architecture",
        phoneticSymbol: "[ˈɑːkɪtektʃə(r)]",
        chinese: "n.建筑学，建筑设计，风格",
    },
    {
        english: "Arctic",
        phoneticSymbol: "[ˈɑːktɪk]",
        chinese: "a. 北极的",
    },
    {
        english: "are",
        phoneticSymbol: "[ɑː(r)]",
        chinese: "v.(be) 是",
    },
    {
        english: "area",
        phoneticSymbol: "[ˈeərɪə]",
        chinese: "n. 面积；地域，地方，区域；范围，领域",
    },
    {
        english: "argue",
        phoneticSymbol: "[ˈɑːɡjuː]",
        chinese: "vi. 争辩， 争论",
    },
    {
        english: "argument",
        phoneticSymbol: "[ˈɑːɡjʊmənt]",
        chinese: "n. 争论，辩论",
    },
    {
        english: "arise (arose, arisen)",
        phoneticSymbol: "[əˈraɪz]",
        chinese: "vi. 起来，升起；出现",
    },
    {
        english: "arithmetic",
        phoneticSymbol: "[əˈrɪθmətɪk]",
        chinese: "n. 算术",
    },
    {
        english: "arm",
        phoneticSymbol: "[ɑːm]",
        chinese: "n. 臂,支架 v. 以…装备,武装起来n. （美）武器,武力",
    },
    {
        english: "armchair",
        phoneticSymbol: "[ɑːmˈtʃeə(r)]",
        chinese: "n. 扶手椅",
    },
    {
        english: "army",
        phoneticSymbol: "[ˈɑːmɪ]",
        chinese: "n. 军队",
    },
    {
        english: "around",
        phoneticSymbol: "[əˈraʊnd]",
        chinese: "ad. 在周围；在附近prep. 在……周围；大约",
    },
    {
        english: "arrange",
        phoneticSymbol: "[əˈreɪndʒ]",
        chinese: "v. 安排，布置",
    },
    {
        english: "arrangement",
        phoneticSymbol: "[əˈreɪndʒmənt]",
        chinese: "n. 安排，布置",
    },
    {
        english: "arrest",
        phoneticSymbol: "[əˈrest]",
        chinese: "v. 逮捕，拘留",
    },
    {
        english: "arrival",
        phoneticSymbol: "[əˈraɪv(ə)l]",
        chinese: "n. 到来，到达",
    },
    {
        english: "arrive",
        phoneticSymbol: "[əˈraɪv]",
        chinese: "vi. 到达；达到",
    },
    {
        english: "arrow",
        phoneticSymbol: "[ˈærəʊ]",
        chinese: "n. 箭；箭头",
    },
    {
        english: "art",
        phoneticSymbol: "[ɑːt]",
        chinese: "n. 艺术，美术；技艺",
    },
    {
        english: "article",
        phoneticSymbol: "[ˈɑːtɪk(ə)l]",
        chinese: "n.文章;东西,物品;冠词",
    },
    {
        english: "artificial",
        phoneticSymbol: "[ɑːtɪˈfɪʃ(ə)l]",
        chinese: "a. 人工的，人造的",
    },
    {
        english: "artist",
        phoneticSymbol: "[ˈɑːtɪst]",
        chinese: "n.艺术家",
    },
    {
        english: "as",
        phoneticSymbol: "[əz, æz]",
        chinese: "ad.& conj.像……一样；如同；因为 prep. 作为，当做",
    },
    {
        english: "ash",
        phoneticSymbol: "[æʃ]",
        chinese: "n. 灰； 灰末",
    },
    {
        english: "ashamed",
        phoneticSymbol: "[əˈʃeɪmd]",
        chinese: "a. 惭愧； 害臊",
    },
    {
        english: "Asia",
        phoneticSymbol: "[ˈeɪʃə]",
        chinese: "* n. 亚洲",
    },
    {
        english: "Asian",
        phoneticSymbol: "[ˈeɪʃ(ə)n, ˈeɪʒ(ə)n]",
        chinese: "a. 亚洲（人）的n. 亚洲人",
    },
    {
        english: "aside",
        phoneticSymbol: "[əˈsaɪd]",
        chinese: "ad. 在旁边",
    },
    {
        english: "ask",
        phoneticSymbol: "[ɑːsk]",
        chinese: "v. 问；请求，要求；邀请",
    },
    {
        english: "asleep",
        phoneticSymbol: "[əˈsliːp]",
        chinese: "a. 睡着的，熟睡",
    },
    {
        english: "aspect",
        phoneticSymbol: "[ˈæspekt]",
        chinese: "n. 方面，外观，外表",
    },
    {
        english: "assess",
        phoneticSymbol: "[əˈses]",
        chinese: "v.评价,评定（性质,质量）",
    },
    {
        english: "assessment",
        phoneticSymbol: "[əˈsesmənt]",
        chinese: "n. 看法，评价",
    },
    {
        english: "assist",
        phoneticSymbol: "[əˈsɪst]",
        chinese: "v. 帮助，协助",
    },
    {
        english: "assistance",
        phoneticSymbol: "[əˈsɪst(ə)ns]",
        chinese: "n. 帮助，援助，支持",
    },
    {
        english: "assistant",
        phoneticSymbol: "[əˈsɪst(ə)nt]",
        chinese: "n. 助手，助理",
    },
    {
        english: "associate",
        phoneticSymbol: "[əˈsəʊʃɪeɪt]",
        chinese: "v. 联想，联系",
    },
    {
        english: "association",
        phoneticSymbol: "[əsəʊsɪˈeɪʃ(ə)n]",
        chinese: "n. 协会，社团，联系",
    },
    {
        english: "assume",
        phoneticSymbol: "[əˈsjuːm; (US) əˈsuːm]",
        chinese: "v. 假定，假设",
    },
    {
        english: "assumption",
        phoneticSymbol: "[əˈsʌmpʃ(ə)n]",
        chinese: "n. 假定，假设",
    },
    {
        english: "astonish",
        phoneticSymbol: "[əˈstɔnɪʃ]",
        chinese: "vt. 使惊讶",
    },
    {
        english: "astronaut",
        phoneticSymbol: "[ˈæstrənɔːt]",
        chinese: "n. 宇航员",
    },
    {
        english: "astronomer",
        phoneticSymbol: "[əˈstrɔnəmə(r)]",
        chinese: "n. 天文学家",
    },
    {
        english: "astronomy",
        phoneticSymbol: "[əˈstrɔnəmɪ]",
        chinese: "n. 天文学",
    },
    {
        english: "at",
        phoneticSymbol: "[æt]",
        chinese: "prep.在（几点钟）;在（某处）",
    },
    {
        english: "athlete",
        phoneticSymbol: "[ˈæθliːt]",
        chinese: "n. 运动员",
    },
    {
        english: "athletic",
        phoneticSymbol: "[æθˈletɪk]",
        chinese: "a. 健壮的,体育运动的",
    },
    {
        english: "Atlantic",
        phoneticSymbol: "[ətˈlæntɪk]",
        chinese: "a. 大西洋的",
    },
    {
        english: "the Atlantic Ocean",
        phoneticSymbol: "[ətˈlæntɪk ˈəʊʃ(ə)n]",
        chinese: "大西洋",
    },
    {
        english: "atmosphere",
        phoneticSymbol: "[ˈætməsfɪə(r)]",
        chinese: "n. 大气；气氛",
    },
    {
        english: "atom",
        phoneticSymbol: "[ˈætəm]",
        chinese: "n. 原子，微粒",
    },
    {
        english: "attach",
        phoneticSymbol: "[əˈtætʃ]",
        chinese: "v. 把…固定，重视",
    },
    {
        english: "attack",
        phoneticSymbol: "[əˈtæk]",
        chinese: "vt. / n. 攻击，袭击",
    },
    {
        english: "attain",
        phoneticSymbol: "[əˈteɪn]",
        chinese: "v.（经过努力）获得,得到",
    },
    {
        english: "attempt",
        phoneticSymbol: "[əˈtempt]",
        chinese: "vt. 试图，尝试",
    },
    {
        english: "attend",
        phoneticSymbol: "[əˈtend]",
        chinese: "v. 看护，照料，服侍；出席，参加",
    },
    {
        english: "attention",
        phoneticSymbol: "[əˈtenʃ(ə)n]",
        chinese: "n. 注意，关心",
    },
    {
        english: "attitude",
        phoneticSymbol: "[ˈætɪtjuːd; (US) ˈætɪtud]",
        chinese: "n. 态度，看法",
    },
    {
        english: "attract",
        phoneticSymbol: "[əˈtrækt]",
        chinese: "v. 吸引，引起",
    },
    {
        english: "attraction",
        phoneticSymbol: "[əˈtrækʃ(ə)n]",
        chinese: "n. 吸引，爱慕",
    },
    {
        english: "attractive",
        phoneticSymbol: "[əˈtræktɪv]",
        chinese: "a. 迷人的，有吸引力的",
    },
    {
        english: "audience",
        phoneticSymbol: "[ˈɔːdɪəns]",
        chinese: "n. 观众，听众",
    },
    {
        english: "aunt",
        phoneticSymbol: "[ɑːnt; (US) ænt]",
        chinese: "n. 伯母；舅母；婶；姑；姨",
    },
    {
        english: "authentic",
        phoneticSymbol: "[ɜːˈθentɪk]",
        chinese: "a. 真正的，真品的",
    },
    {
        english: "author",
        phoneticSymbol: "[ˈɔːθə(r)]",
        chinese: "n. 作者，作家",
    },
    {
        english: "authority",
        phoneticSymbol: "[ɔːˈθɔrɪtɪ]",
        chinese: "n.权力,权威,威信,官方",
    },
    {
        english: "automatic",
        phoneticSymbol: "[ɔːtəˈmætɪk]",
        chinese: "a. 自动的，机械的",
    },
    {
        english: "autonomous",
        phoneticSymbol: "[ɔːˈtɔnəməs]",
        chinese: "a. 自治的，自主的",
    },
    {
        english: "autumn",
        phoneticSymbol: "[ˈɔːtəm]",
        chinese: "n. 秋天，秋季",
    },
    {
        english: "available",
        phoneticSymbol: "[ˈɔːtəm]",
        chinese: "a. 可获得的，有空的",
    },
    {
        english: "avenue",
        phoneticSymbol: "[ˈævənjuːˈævənuː]",
        chinese: "n. 大道",
    },
    {
        english: "average",
        phoneticSymbol: "[ˈævərɪdʒ]",
        chinese: "a.平均；普通的 n.平均数",
    },
    {
        english: "avoid",
        phoneticSymbol: "[əˈvɔɪd]",
        chinese: "v. 避免，躲开，逃避",
    },
    {
        english: "awake (awoke, awoken)",
        phoneticSymbol: "[əˈweɪk]",
        chinese: "v. 唤醒 a. 醒着的",
    },
    {
        english: "award",
        phoneticSymbol: "[wɔːd]",
        chinese: "n. 奖品，奖励",
    },
    {
        english: "aware",
        phoneticSymbol: "[əˈweə(r)]",
        chinese: "a. 知道，意识到，发觉",
    },
    {
        english: "away",
        phoneticSymbol: "[əˈweɪ]",
        chinese: "ad. 离开；远离",
    },
    {
        english: "awesome",
        phoneticSymbol: "[ˈɔːsəm]",
        chinese: "a.令人惊叹,很困难的",
    },
    {
        english: "awful",
        phoneticSymbol: "[ˈɔːfʊl]",
        chinese: "a. 很坏的，极讨厌的",
    },
    {
        english: "awkward",
        phoneticSymbol: "[ˈɔːkwəd]",
        chinese: "a.令人尴尬,使人难堪的",
    },
    {
        english: "baby",
        phoneticSymbol: "[ˈbeɪbɪ]",
        chinese: "n. 婴儿",
    },
    {
        english: "bachelor",
        phoneticSymbol: "[ˈbætʃələ(r)]",
        chinese: "n. 未婚男子，单身汉",
    },
    {
        english: "back",
        phoneticSymbol: "[bæk]",
        chinese: "ad. 回（原处）；向后 a. 后面的 n. 背后，后部；背",
    },
    {
        english: "background",
        phoneticSymbol: "[ˈbækɡraʊnd]",
        chinese: "n. 背景",
    },
    {
        english: "backward(s)",
        phoneticSymbol: "[ˈbækwəd]",
        chinese: "ad. 向后",
    },
    {
        english: "bacon",
        phoneticSymbol: "[ˈbeɪkən]",
        chinese: "n. 咸猪肉；熏猪肉 ",
    },
    {
        english: "bacterium",
        phoneticSymbol: "[bækˈtɪərɪəm]",
        chinese: "(复bacteria) n. 细菌",
    },
    {
        english: "bad (worse, worst)",
        phoneticSymbol: "[bæd]",
        chinese: "a. 坏的；有害的，不利的；严重的",
    },
    {
        english: "badly",
        phoneticSymbol: "[ˈbædlɪ]",
        chinese: "ad. 坏，恶劣地",
    },
    {
        english: "badminton",
        phoneticSymbol: "[ˈbædmɪntən]",
        chinese: "n. 羽毛球",
    },
    {
        english: "bag",
        phoneticSymbol: "[bæɡ]",
        chinese: "n. 书包；提包；袋子",
    },
    {
        english: "baggage",
        phoneticSymbol: "[ˈbæɡɪdʒ]",
        chinese: "n. 行李",
    },
    {
        english: "bakery",
        phoneticSymbol: "[ˈbeɪkərɪ]",
        chinese: "n. 面包店",
    },
    {
        english: "balance",
        phoneticSymbol: "[ˈbæləns]",
        chinese: "n. 平衡",
    },
    {
        english: "balcony",
        phoneticSymbol: "[ˈbælkənɪ]",
        chinese: "n. 阳台；楼座",
    },
    {
        english: "ball",
        phoneticSymbol: "[bɔːl]",
        chinese: "n. 球 n. 舞会",
    },
    {
        english: "ballet",
        phoneticSymbol: "[ˈbæleɪ]",
        chinese: "n. 芭蕾舞",
    },
    {
        english: "balloon",
        phoneticSymbol: "[bəˈluːn]",
        chinese: "n. 气球",
    },
    {
        english: "bamboo",
        phoneticSymbol: "[bæmˈbuː]",
        chinese: "n. 竹",
    },
    {
        english: "ban",
        phoneticSymbol: "[bæn]",
        chinese: "n. 禁令 v. 禁止；取缔",
    },
    {
        english: "banana",
        phoneticSymbol: "[bəˈnɑːnə; (US) bəˈnænə]",
        chinese: "n. 香蕉",
    },
    {
        english: "band",
        phoneticSymbol: "[bænd]",
        chinese: "n. 乐队",
    },
    {
        english: "bandage",
        phoneticSymbol: "[ˈbændɪdʒ]",
        chinese: "n. 绷带",
    },
    {
        english: "bank",
        phoneticSymbol: "[bæŋk]",
        chinese: "n. （河海湖的）岸，堤 n. 银行",
    },
    {
        english: "bank account",
        phoneticSymbol: "[bæŋk əˈkaʊnt]",
        chinese: "n. 银行账户",
    },
    {
        english: "bar",
        phoneticSymbol: "[bɑː(r)]",
        chinese:
            "n. 条（长方）块，棒，横木 n.（酒店的）买酒柜台；酒吧；（卖东西的）柜台",
    },
    {
        english: "barbecue",
        phoneticSymbol: "[ˈbɑːbɪkjuː]",
        chinese: "n. 烤肉野餐",
    },
    {
        english: "barber",
        phoneticSymbol: "[ˈbɑːbə(r)]",
        chinese: "n. （为男人理发）理发师",
    },
    {
        english: "bare",
        phoneticSymbol: "[beə(r)]",
        chinese: "a. 裸露的，光秃秃的",
    },
    {
        english: "bargain",
        phoneticSymbol: "[ˈbɑːɡɪn]",
        chinese: "n. （经讨价还价后）成交的商品；廉价货 v. 讨价还价",
    },
    {
        english: "bark",
        phoneticSymbol: "[bɑːk]",
        chinese: "v. 狗叫 n. 狗叫声",
    },
    {
        english: "barrier",
        phoneticSymbol: "['bærɪə]",
        chinese: "n. 屏障，障碍，关卡",
    },
    {
        english: "base",
        phoneticSymbol: "[beɪs]",
        chinese: "n. 根据地，基地（棒球）垒",
    },
    {
        english: "baseball",
        phoneticSymbol: "[ˈbeɪsbɔːl]",
        chinese: "n. 棒球",
    },
    {
        english: "basement",
        phoneticSymbol: "[ˈbeɪsmənt]",
        chinese: "n. 地下室",
    },
    {
        english: "basic",
        phoneticSymbol: "[ˈbeɪsɪk]",
        chinese: "a. 基本的",
    },
    {
        english: "basin",
        phoneticSymbol: "[ˈbeɪs(ə)n]",
        chinese: "n. 水盆，脸盆",
    },
    {
        english: "basis",
        phoneticSymbol: "[ˈbeɪsɪs]",
        chinese: "n. 原因，缘由，要素",
    },
    {
        english: "basket",
        phoneticSymbol: "[ˈbɑːskɪt; (US) ˈbæskɪt]",
        chinese: "n. 篮子",
    },
    {
        english: "basketball",
        phoneticSymbol: "[ˈbɑːskɪtbɔːl]",
        chinese: "n. 篮球",
    },
    {
        english: "bat",
        phoneticSymbol: "[bæt]",
        chinese: "n. （棒球、板球的）球棒 n. 蝙蝠",
    },
    {
        english: "bath",
        phoneticSymbol: "[bɑːθ; (US) bæθ]",
        chinese: "n. 洗澡；浴室；澡盆",
    },
    {
        english: "bathe",
        phoneticSymbol: "[beɪð]",
        chinese: "vi. 洗澡；游泳",
    },
    {
        english: "bathroom",
        phoneticSymbol: "[ˈbɑːθruːm]",
        chinese: "n. 浴室，盥洗室",
    },
    {
        english: "bathtub",
        phoneticSymbol: "['bɑ:θtʌb]",
        chinese: "n. 澡盆",
    },
    {
        english: "battery",
        phoneticSymbol: "[ˈbætərɪ]",
        chinese: "n. 电池",
    },
    {
        english: "battle",
        phoneticSymbol: "[ˈbæt(ə)l]",
        chinese: "n. 战斗；战役",
    },
    {
        english: "bay",
        phoneticSymbol: "[beɪ]",
        chinese: "n. 湾； 海湾",
    },
    {
        english: "be",
        phoneticSymbol: "[biː]",
        chinese:
            "v. 是（原形）,其人称和时态形式有(am, is, are, was, were, being, been)；成为",
    },
    {
        english: "beach",
        phoneticSymbol: "[biːtʃ]",
        chinese: "n. 海滨，海滩",
    },
    {
        english: "beam",
        phoneticSymbol: "[biːm]",
        chinese: "n. 平衡木",
    },
    {
        english: "bean",
        phoneticSymbol: "[biːn]",
        chinese: "n. 豆，豆科植物",
    },
    {
        english: "bean curd",
        phoneticSymbol: "['bi:nkə:d]",
        chinese: "n. 豆腐",
    },
    {
        english: "bear",
        phoneticSymbol: "[beə(r)]",
        chinese: "v. 承受，负担，承担；忍受；容忍 n. 熊",
    },
    {
        english: "beard",
        phoneticSymbol: "[bɪəd]",
        chinese: "n. （下巴上的）胡须",
    },
    {
        english: "beast",
        phoneticSymbol: "[biːst]",
        chinese: "n. 野兽；牲畜",
    },
    {
        english: "beat (beat, beaten)",
        phoneticSymbol: "[biːt]",
        chinese: "v. 敲打；跳动；打赢 n. （音乐）节拍",
    },
    {
        english: "beautiful",
        phoneticSymbol: "[ˈbjuːtɪf(ə)l]",
        chinese: "a. 美，美丽，美观的",
    },
    {
        english: "beauty",
        phoneticSymbol: "[ˈbjuːtɪ]",
        chinese: "n. 美丽，美人",
    },
    {
        english: "because",
        phoneticSymbol: "[bɪˈkɔz; (US) bɪˈkɔːz]",
        chinese: "conj. 因为",
    },
    {
        english: "become (became, be come)",
        phoneticSymbol: "[bɪˈkʌm]",
        chinese: "v. 变得；成为",
    },
    {
        english: "bed",
        phoneticSymbol: "[bed]",
        chinese: "n. 床",
    },
    {
        english: "beddings",
        phoneticSymbol: "[ˈbedɪŋ]",
        chinese: "n. 卧具，铺盖",
    },
    {
        english: "bedroom",
        phoneticSymbol: "[ˈbedruːm]",
        chinese: "n. 寝室，卧室",
    },
    {
        english: "bee",
        phoneticSymbol: "[biː]",
        chinese: "n.. 蜜蜂",
    },
    {
        english: "beef",
        phoneticSymbol: "[biːf]",
        chinese: "n. 牛肉",
    },
    {
        english: "beer",
        phoneticSymbol: "[bɪə(r)]",
        chinese: "n. 啤酒",
    },
    {
        english: "before",
        phoneticSymbol: "[bɪˈfɔː(r)]",
        chinese: "prep. 在…以前；在…前面 ad. 以前 conj. 在…之前",
    },
    {
        english: "beg",
        phoneticSymbol: "[beɡ]",
        chinese: "v. 请求，乞求，乞讨 ",
    },
    {
        english: "begin(began,begun)",
        phoneticSymbol: "[bɪˈɡɪn]",
        chinese: " v.开始,着手",
    },
    {
        english: "behalf",
        phoneticSymbol: "[bɪˈhɑːf]",
        chinese: "n. 代表某人，为了某人",
    },
    {
        english: "behave",
        phoneticSymbol: "[bɪˈheɪv]",
        chinese: "v. 守规矩，行为",
    },
    {
        english: "behind",
        phoneticSymbol: "[bɪˈhaɪnd]",
        chinese: "prep. (表示位置)在…后面 ad. 在后面；向后",
    },
    {
        english: "being",
        phoneticSymbol: "[ˈbiːɪŋ]",
        chinese: "n. 物；生物；人",
    },
    {
        english: "belief",
        phoneticSymbol: "[bɪˈliːf]",
        chinese: "n. 信条，信念",
    },
    {
        english: "believe",
        phoneticSymbol: "[bɪˈliːv]",
        chinese: "v. 相信，认为",
    },
    {
        english: "bell",
        phoneticSymbol: "[bel]",
        chinese: "n. 钟,铃;钟(铃)声;钟形物",
    },
    {
        english: "belly",
        phoneticSymbol: "[ˈbelɪ]",
        chinese: "n. 肚子",
    },
    {
        english: "belong",
        phoneticSymbol: "[bɪˈlɔŋ]",
        chinese: "vi. 属，附属",
    },
    {
        english: "below",
        phoneticSymbol: "[bɪˈləʊ]",
        chinese: "prep. 在……下面",
    },
    {
        english: "belt",
        phoneticSymbol: "[belt]",
        chinese: "n. （皮）带",
    },
    {
        english: "bench",
        phoneticSymbol: "[bentʃ]",
        chinese: "n. 长凳；工作台",
    },
    {
        english: "bend (bent, bent)",
        phoneticSymbol: "[bend]",
        chinese: "vt. 使弯曲",
    },
    {
        english: "beneath",
        phoneticSymbol: "[bɪˈniːθ]",
        chinese: "prep. 在…下方（面）",
    },
    {
        english: "beneficial",
        phoneticSymbol: "[benɪˈfɪʃ(ə)l]",
        chinese: "a. 有利的，有帮助的，有用的",
    },
    {
        english: "benefit",
        phoneticSymbol: "[ˈbenɪfɪt]",
        chinese: "n. / v.优势,益处,使…受益",
    },
    {
        english: "bent",
        phoneticSymbol: "[bent]",
        chinese: "a. 弯的",
    },
    {
        english: "beside",
        phoneticSymbol: "[bɪˈsaɪd]",
        chinese: "prep. 在…旁边；靠近",
    },
    {
        english: "besides",
        phoneticSymbol: "[bɪˈsaɪdz]",
        chinese: "prep. 除…以外（还有） ad. 还有，此外",
    },
    {
        english: "betray",
        phoneticSymbol: "[bɪˈtreɪ]",
        chinese: "v.出卖,泄露（机密）,辜负",
    },
    {
        english: "between",
        phoneticSymbol: "[bɪˈtwiːn]",
        chinese: "prep. 在（两者）之间；在…中间",
    },
    {
        english: "beyond",
        phoneticSymbol: "[bɪˈjɔnd]",
        chinese: "prep. (表示位置) 在…的那边",
    },
    {
        english: "bicycle",
        phoneticSymbol: "[ˈbaɪsɪk(ə)l]",
        chinese: "n. 自行车",
    },
    {
        english: "bid",
        phoneticSymbol: "[bɪd]",
        chinese: "v./ n. 出价，投标，向（某人）道别",
    },
    {
        english: "big",
        phoneticSymbol: "[bɪɡ]",
        chinese: "a. 大的",
    },
    {
        english: "bike = bicycle",
        phoneticSymbol: "[baɪk]",
        chinese: "n. 自行车",
    },
    {
        english: "bill",
        phoneticSymbol: "[bɪl]",
        chinese: "n.账单；法案，议案； （美）钞票，纸币",
    },
    {
        english: "bingo",
        phoneticSymbol: "[ˈbɪŋɡəʊ]",
        chinese: "n. 宾戈游戏",
    },
    {
        english: "biography",
        phoneticSymbol: "[baɪˈɔɡrəfɪ]",
        chinese: "n. 传记",
    },
    {
        english: "biology",
        phoneticSymbol: "[baɪˈɔlədʒɪ]",
        chinese: "n. 生物（学）",
    },
    {
        english: "bird",
        phoneticSymbol: "[bɜːd]",
        chinese: "n. 鸟",
    },
    {
        english: "birdcage",
        phoneticSymbol: "[ˈbɜːdkeɪdʒ]",
        chinese: "n. 鸟笼",
    },
    {
        english: "birth",
        phoneticSymbol: "[bɜːθ]",
        chinese: "n. 出生； 诞生",
    },
    {
        english: "birthday",
        phoneticSymbol: "[ˈbɜːθdeɪ]",
        chinese: "n. 生日",
    },
    {
        english: "birthplace",
        phoneticSymbol: "[ˈbɜːθpleɪs]",
        chinese: "n. 出生地；故乡",
    },
    {
        english: "biscuit",
        phoneticSymbol: "[ˈbɪskɪt]",
        chinese: "n. 饼干",
    },
    {
        english: "bishop",
        phoneticSymbol: "[ˈbɪʃəp]",
        chinese: "n. 主教",
    },
    {
        english: "bit",
        phoneticSymbol: "[bɪt]",
        chinese: "n. 一点，一些，少量的",
    },
    {
        english: "bite (bit, bitten)",
        phoneticSymbol: "[baɪt]",
        chinese: "v. 咬；叮",
    },
    {
        english: "bitter",
        phoneticSymbol: "[ˈbɪtə(r)]",
        chinese: "a. 有苦味的；痛苦的，难过的；严酷的",
    },
    {
        english: "black",
        phoneticSymbol: "[blæk]",
        chinese: "n. 黑色 a. 黑色的",
    },
    {
        english: "blackboard",
        phoneticSymbol: "[ˈblækbɔːd]",
        chinese: "n. 黑板",
    },
    {
        english: "blame",
        phoneticSymbol: "[bleɪm]",
        chinese: "n.& v. 责备；责怪",
    },
    {
        english: "blank",
        phoneticSymbol: "[blæŋk]",
        chinese: "n.& a. 空格，空白（处）；空的；茫然无表情的",
    },
    {
        english: "blanket",
        phoneticSymbol: "[ˈblæŋkɪt]",
        chinese: "n. 毛毯，毯子",
    },
    {
        english: "bleed",
        phoneticSymbol: "[bliːd]",
        chinese: "vi. 出血，流血",
    },
    {
        english: "bless",
        phoneticSymbol: "[bles]",
        chinese: "vt. 保佑，降福",
    },
    {
        english: "blind",
        phoneticSymbol: "[blaɪnd]",
        chinese: "a. 瞎的",
    },
    {
        english: "block",
        phoneticSymbol: "[blɔk]",
        chinese: "n. 大块；（木、石等）块；街区；路障 vt. 阻塞；阻挡",
    },
    {
        english: "blood",
        phoneticSymbol: "[blʌd]",
        chinese: "n. 血，血液",
    },
    {
        english: "blouse",
        phoneticSymbol: "[blaʊz; u.S. blaʊs]",
        chinese: "n. 宽罩衫；（妇女、儿童穿的）短上衣",
    },
    {
        english: "blow",
        phoneticSymbol: "[bləʊ]",
        chinese: "n. 击；打击",
    },
    {
        english: "blow (blew, blown)",
        phoneticSymbol: "[bləʊ]",
        chinese: "v. 吹；刮风；吹气",
    },
    {
        english: "blue",
        phoneticSymbol: "[bluː]",
        chinese: "n. 蓝色 a.蓝色的 a. 悲伤的；沮丧的",
    },
    {
        english: "board",
        phoneticSymbol: "[bɔːd]",
        chinese:
            "n. 木板；布告牌；委员会；（政府的）部 v. 上（船、火车、飞机）",
    },
    {
        english: "boat",
        phoneticSymbol: "[bəʊt]",
        chinese: "n. 小船，小舟",
    },
    {
        english: "boil",
        phoneticSymbol: "[bɔɪl]",
        chinese: "v. 沸腾；烧开；煮……",
    },
    {
        english: "bomb",
        phoneticSymbol: "[bɔm]",
        chinese: "n. 炸弹 v. 轰炸",
    },
    {
        english: "bond",
        phoneticSymbol: "[bɔnd]",
        chinese: "n. /v. 纽带，联系，使牢固",
    },
    {
        english: "bone",
        phoneticSymbol: "[bəʊn]",
        chinese: "n. 骨头，骨质（复数bones骨骼；骨骸）",
    },
    {
        english: "bonus",
        phoneticSymbol: "[ˈbəʊnəs]",
        chinese: "n. 津贴，奖金，红利",
    },
    {
        english: "book",
        phoneticSymbol: "[bʊk]",
        chinese: "n. 书；本子 v. 预定，定（房间、车票等）",
    },
    {
        english: "boom",
        phoneticSymbol: "[buːm]",
        chinese: "n. / v. 繁荣，轰鸣，激增",
    },
    {
        english: "boot",
        phoneticSymbol: "[buːt]",
        chinese: "n. 长统靴；靴",
    },
    {
        english: "booth",
        phoneticSymbol: "[buːð]",
        chinese: "n.岗；（为某种用途而设的）亭或小隔间",
    },
    {
        english: "border",
        phoneticSymbol: "[ˈbɔːdə(r)]",
        chinese: "n. 边缘；边境，国界",
    },
    {
        english: "born",
        phoneticSymbol: "[bɔːn]",
        chinese: "a. 出生",
    },
    {
        english: "borrow",
        phoneticSymbol: "[ˈbɔrəʊ]",
        chinese: "v. （向别人）借用；借",
    },
    {
        english: "boss",
        phoneticSymbol: "[bɔs]",
        chinese: "n. 领班；老板",
    },
    {
        english: "botanical",
        phoneticSymbol: "[bəˈtænɪk(ə)l]",
        chinese: "a. 植物学的",
    },
    {
        english: "botany",
        phoneticSymbol: "[ˈbɔtənɪ]",
        chinese: "n. 植物； 植物学",
    },
    {
        english: "both",
        phoneticSymbol: "[bəʊθ]",
        chinese: "a. 两；双 pron. 两者；双方",
    },
    {
        english: "bother",
        phoneticSymbol: "[bɒðə]",
        chinese: "vt. 烦扰，打扰;使…不安，使…恼怒;使迷惑;烦恼",
    },
    {
        english: "bottle",
        phoneticSymbol: "[ˈbɔt(ə)l]",
        chinese: "n. 瓶子",
    },
    {
        english: "bottom",
        phoneticSymbol: "[ˈbɔtəm]",
        chinese: "n. 底部；底",
    },
    {
        english: "bounce",
        phoneticSymbol: "[baʊns]",
        chinese: "v. 弹起，蹦，上下晃动",
    },
    {
        english: "bound",
        phoneticSymbol: "[baʊnd]",
        chinese: "a. 被束缚的；被绑的；有义务的  v.& n. 跳跃",
    },
    {
        english: "boundary",
        phoneticSymbol: "[ˈbaʊndərɪ]",
        chinese: "n. 边界，界限",
    },
    {
        english: "bow",
        phoneticSymbol: "[bəʊ]",
        chinese: "v.& n. 鞠躬，弯腰行礼",
    },
    {
        english: "bowl",
        phoneticSymbol: "[bəʊl]",
        chinese: "n. 碗",
    },
    {
        english: "bowling",
        phoneticSymbol: "[ˈbəʊlɪŋ]",
        chinese: "n. 保龄球",
    },
    {
        english: "box",
        phoneticSymbol: "[bɔks]",
        chinese: "n. 盒子，箱子",
    },
    {
        english: "boxing",
        phoneticSymbol: "[ˈbɔksɪŋ]",
        chinese: "n. 拳击（运动）",
    },
    {
        english: "boy",
        phoneticSymbol: "[bɔɪ]",
        chinese: "n. 男孩",
    },
    {
        english: "boycott",
        phoneticSymbol: "[ˈbɔɪkɔt]",
        chinese: "v. 拒绝购买，抵制",
    },
    {
        english: "brain",
        phoneticSymbol: "[breɪn]",
        chinese: "n. 脑（子）",
    },
    {
        english: "brake",
        phoneticSymbol: "[breɪk]",
        chinese: "n. 闸 vi. 刹车",
    },
    {
        english: "branch",
        phoneticSymbol: "[brɑːntʃ]",
        chinese: "n. 树枝；分枝；分公司，分店；支部",
    },
    {
        english: "brand",
        phoneticSymbol: "[brænd]",
        chinese: "n. 品牌",
    },
    {
        english: "brave",
        phoneticSymbol: "[breɪv]",
        chinese: "a. 勇敢的",
    },
    {
        english: "bravery",
        phoneticSymbol: "[ˈbreɪvərɪ]",
        chinese: "n. 勇气",
    },
    {
        english: "bread",
        phoneticSymbol: "[bred]",
        chinese: "n. 面包",
    },
    {
        english: "break",
        phoneticSymbol: "[breɪk]",
        chinese: "n. 间隙",
    },
    {
        english: "break (broke, bro ken)",
        phoneticSymbol: "[breɪk]",
        chinese: "v. 打破（断，碎）；损坏，撕开",
    },
    {
        english: "breakfast",
        phoneticSymbol: "[ˈbrekfəst]",
        chinese: "n. 早餐",
    },
    {
        english: "breakthrough",
        phoneticSymbol: "[ˈbreɪkθruː]",
        chinese: "n. 重大进展，突破",
    },
    {
        english: "breast",
        phoneticSymbol: "[brest]",
        chinese: "n. 乳房，胸脯",
    },
    {
        english: "breath",
        phoneticSymbol: "[breθ]",
        chinese: "n. 气息；呼吸",
    },
    {
        english: "breathe",
        phoneticSymbol: "[briːð]",
        chinese: "vi. 呼吸",
    },
    {
        english: "breathless",
        phoneticSymbol: "[ˈbreθlɪs]",
        chinese: "a. 气喘吁吁的，上气不接下气的",
    },
    {
        english: "brewery",
        phoneticSymbol: "[ˈbruːərɪ]",
        chinese: "n. 啤酒厂（公司）",
    },
    {
        english: "brick",
        phoneticSymbol: "[brɪk]",
        chinese: "n. 砖；砖块",
    },
    {
        english: "bride",
        phoneticSymbol: "[braɪd]",
        chinese: "n. 新娘",
    },
    {
        english: "bridegroom",
        phoneticSymbol: "[ˈbraɪdɡruːm]",
        chinese: "n. 新郎",
    },
    {
        english: "bridge",
        phoneticSymbol: "[brɪdʒ]",
        chinese: "n. 桥",
    },
    {
        english: "brief",
        phoneticSymbol: "[briːf]",
        chinese: "a. 简洁的",
    },
    {
        english: "bright",
        phoneticSymbol: "[braɪt]",
        chinese: "a. 明亮的；聪明的",
    },
    {
        english: "brilliant",
        phoneticSymbol: "[ˈbrɪlɪənt]",
        chinese: "a. 巧妙的，使人印象深刻的，技艺高的",
    },
    {
        english: "bring (brought, brought)",
        phoneticSymbol: "[brɪŋ]",
        chinese: "vt. 拿来，带来，取来",
    },
    {
        english: "broad",
        phoneticSymbol: "[brɔːd]",
        chinese: "a. 宽的，宽大的",
    },
    {
        english: "broadcast",
        phoneticSymbol: "[ˈbrɔːdkɑːst]",
        chinese: "n. 广播节目",
    },
    {
        english: "broadcast（broadcast, broadcast或--ed,--ed）",
        phoneticSymbol: "[ˈbrɔːdkɑːst]",
        chinese: "vt. 广播",
    },
    {
        english: "brochure",
        phoneticSymbol: "[brəʊˈʃə(r); (US) brəʊˈʃʊər]",
        chinese: "n. 资料（或广告）手册",
    },
    {
        english: "broken",
        phoneticSymbol: "[ˈbrəʊkən]",
        chinese: "a. 弄坏了的",
    },
    {
        english: "broom",
        phoneticSymbol: "[bruːm]",
        chinese: "n. 扫帚",
    },
    {
        english: "brother",
        phoneticSymbol: "[ˈbrʌðə(r)]",
        chinese: "n. 兄；弟",
    },
    {
        english: "brotherhood",
        phoneticSymbol: "[ˈbrʌðəhʊd]",
        chinese: "n. 兄弟般的关系",
    },
    {
        english: "brown",
        phoneticSymbol: "[braʊn]",
        chinese: "n. 褐色，棕色 a. 褐色的，棕色的",
    },
    {
        english: "brunch",
        phoneticSymbol: "[ˈbrʌntʃ]",
        chinese: "n. 早午饭（晚早饭）",
    },
    {
        english: "brush",
        phoneticSymbol: "[brʌʃ]",
        chinese: "v. 刷；擦 n. 刷子",
    },
    {
        english: "Buddhism",
        phoneticSymbol: "[ˈbʊdɪz(ə)m]",
        chinese: "n. 佛教",
    },
    {
        english: "budget",
        phoneticSymbol: "[ˈbʌdʒɪt]",
        chinese: "n. 预算",
    },
    {
        english: "buffet",
        phoneticSymbol: "[ˈbʊfeɪ; (US) bəˈfeɪ]",
        chinese: "n. 自助餐",
    },
    {
        english: "build (built, built)",
        phoneticSymbol: "[bɪld]",
        chinese: "v. 建筑；造",
    },
    {
        english: "building",
        phoneticSymbol: "[ˈbɪldɪŋ]",
        chinese: "n. 建筑物；房屋；大楼",
    },
    {
        english: "bunch",
        phoneticSymbol: "[bʌntʃ]",
        chinese: "n. 串,束,扎,大量,大批",
    },
    {
        english: "bungalow",
        phoneticSymbol: "[ˈbʌŋɡələʊ]",
        chinese: "n. 平房",
    },
    {
        english: "burden",
        phoneticSymbol: "[ˈbɜːd(ə)n]",
        chinese: "n. （义务，责任的）重担，负担",
    },
    {
        english: "bureaucratic",
        phoneticSymbol: "[bjuəˌrəu'krætik]",
        chinese: "a. 官僚的",
    },
    {
        english: "burglar",
        phoneticSymbol: "[ˈbɜːɡlə(r)]",
        chinese: "n. 入室窃贼",
    },
    {
        english: "burn (-ed, -ed 或 burnt, burnt)",
        phoneticSymbol: "[bɜːn]",
        chinese: "v. 燃，烧，着火；使烧焦；使晒黑 n. 烧伤；晒伤",
    },
    {
        english: "burst",
        phoneticSymbol: "[ˈbɜːst]",
        chinese: "v. 突然发生； 突然发作",
    },
    {
        english: "bury",
        phoneticSymbol: "[ˈberɪ]",
        chinese: "vt. 埋；葬",
    },
    {
        english: "bus",
        phoneticSymbol: "[bʌs]",
        chinese: "n. 公共汽车",
    },
    {
        english: "bush",
        phoneticSymbol: "[bʊʃ]",
        chinese: "n. 灌木丛，矮树丛",
    },
    {
        english: "business",
        phoneticSymbol: "[ˈbɪznɪs]",
        chinese: "n. （本分）工作，职业；职责；生意，交易；事业",
    },
    {
        english: "businessman (pl. businessmen)",
        phoneticSymbol: "[ˈbɪznɪsmæn]",
        chinese: "n. 商人（男）；男企业家",
    },
    {
        english: "businesswoman (businesswomen)",
        phoneticSymbol: "[ˈbɪznɪswʊmæn]",
        chinese: "n. 商人（女）；女企业家",
    },
    {
        english: "busy",
        phoneticSymbol: "[ˈbɪzɪ]",
        chinese: "a. 忙（碌）的",
    },
    {
        english: "but",
        phoneticSymbol: "[bət, bʌt]",
        chinese: "conj. 但是，可是 prep. 除了, 除……外",
    },
    {
        english: "butcher",
        phoneticSymbol: "['bʊtʃə]",
        chinese: "n. vt. 肉店；屠夫 屠宰（动物）；残杀（人）",
    },
    {
        english: "butter",
        phoneticSymbol: "[ˈbʌtə(r)]",
        chinese: "n. 黄油，奶油",
    },
    {
        english: "butterfly",
        phoneticSymbol: "[ˈbʌtəflaɪ]",
        chinese: "n. 蝴蝶",
    },
    {
        english: "button",
        phoneticSymbol: "[ˈbʌt(ə)n]",
        chinese: "n. 纽扣；（电铃等的）按钮 v. 扣（纽扣） ",
    },
    {
        english: "buy (bought,bought)",
        phoneticSymbol: "[baɪ]",
        chinese: "vt. 买",
    },
    {
        english: "by",
        phoneticSymbol: "[baɪ]",
        chinese: "prep. 靠近，在…旁；在…时间；不迟于；被；用；由；乘（车）",
    },
    {
        english: "bye",
        phoneticSymbol: "[baɪ]",
        chinese: "int. 再见",
    },
    {
        english: "cab",
        phoneticSymbol: "[kæb]",
        chinese: "n. （美）出租车",
    },
    {
        english: "cabbage",
        phoneticSymbol: "[ˈkæbɪdʒ]",
        chinese: "n. 卷心菜，洋白菜",
    },
    {
        english: "café",
        phoneticSymbol: "[ˈkæfeɪ; (US) kæˈfeɪ]",
        chinese: "n. 咖啡馆； 餐馆",
    },
    {
        english: "cafeteria",
        phoneticSymbol: "[kæfɪˈtɪərɪə]",
        chinese: "n. 自助餐厅",
    },
    {
        english: "cage",
        phoneticSymbol: "[keɪdʒ]",
        chinese: "n 笼；鸟笼",
    },
    {
        english: "cake",
        phoneticSymbol: "[keɪk]",
        chinese: "n. 蛋糕，糕点；饼",
    },
    {
        english: "calculate",
        phoneticSymbol: "['kælkjʊleɪt]",
        chinese: "vt.& vi. 计算;估计;打算，计划;旨在",
    },
    {
        english: "call",
        phoneticSymbol: "[kɔːl]",
        chinese: "n. 喊，叫；电话，通话 v. 称呼；呼唤；喊，叫",
    },
    {
        english: "calm",
        phoneticSymbol: "[kɑːm; (US) kɑːlm]",
        chinese: "a. 镇静,沉着的 v.镇静沉着",
    },
    {
        english: "camel",
        phoneticSymbol: "[ˈkæm(ə)l]",
        chinese: "n. 骆驼",
    },
    {
        english: "camera",
        phoneticSymbol: "[ˈkæmərə]",
        chinese: "n. 照相机；摄像机",
    },
    {
        english: "camp",
        phoneticSymbol: "[kæmp]",
        chinese: "n.（夏令）营 vi.野营,宿营",
    },
    {
        english: "campaign",
        phoneticSymbol: "[kæmˈpeɪn]",
        chinese: "n. 运动，战役",
    },
    {
        english: "can (could) can't = can not modal",
        phoneticSymbol: "[ken, kæn]",
        chinese: "v. 可能；能够；可以 不能 n.（美）罐头；罐子",
    },
    {
        english: "canal",
        phoneticSymbol: "[kəˈnæl]",
        chinese: "n. 运河；水道",
    },
    {
        english: "cancel",
        phoneticSymbol: "[ˈkæns(ə)l]",
        chinese: "vt. 取消",
    },
    {
        english: "cancer",
        phoneticSymbol: "[ˈkænsə(r)]",
        chinese: "r n. 癌",
    },
    {
        english: "candidate",
        phoneticSymbol: "[ˈkændɪdət; (US) ˈkændɪdeɪt]",
        chinese: "n. 候选人，申请人",
    },
    {
        english: "candle",
        phoneticSymbol: "[ˈkænd(ə)l]",
        chinese: "n. 蜡烛",
    },
    {
        english: "candy",
        phoneticSymbol: "[ˈkændɪ]",
        chinese: "n. 糖果",
    },
    {
        english: "canteen",
        phoneticSymbol: "[kænˈtiːn]",
        chinese: "n. 餐厅；食堂",
    },
    {
        english: "cap",
        phoneticSymbol: "[kæp]",
        chinese:
            "n. （无檐的或仅在前面有檐的）帽子；（瓶子的）盖；（钢笔等的）笔套",
    },
    {
        english: "capital",
        phoneticSymbol: "[ˈkæpɪt(ə)l]",
        chinese: "n.首都.省会.大写；资本",
    },
    {
        english: "capsule",
        phoneticSymbol: "[ˈkæpsjuːl; (US) ˈkæpsl]",
        chinese: "n. （药）胶囊",
    },
    {
        english: "captain",
        phoneticSymbol: "[ˈkæptɪn]",
        chinese: "n. （海军）上校；船长，舰长；队长",
    },
    {
        english: "caption",
        phoneticSymbol: "[ˈkæpʃ(ə)n]",
        chinese: "n. （图片，漫画等的）说明文字",
    },
    {
        english: "car",
        phoneticSymbol: "[kɑː(r)]",
        chinese: "n. 汽车，小卧车",
    },
    {
        english: "carbon",
        phoneticSymbol: "[ˈkɑːbən]",
        chinese: "n. 碳",
    },
    {
        english: "card",
        phoneticSymbol: "[kɑːd]",
        chinese: "n.卡片；名片；纸牌",
    },
    {
        english: "care",
        phoneticSymbol: "[keə(r)]",
        chinese: "n. 照料，保护；小心v. 介意……，在乎；关心",
    },
    {
        english: "careful",
        phoneticSymbol: "[ˈkeəfʊl]",
        chinese: "a. 小心，仔细，谨慎的",
    },
    {
        english: "careless",
        phoneticSymbol: "[ˈkeəlɪs]",
        chinese: "a. 粗心的，漫不经心的",
    },
    {
        english: "carpenter",
        phoneticSymbol: "[ˈkɑːpɪntə(r)]",
        chinese: "n. 木工，木匠",
    },
    {
        english: "carpet",
        phoneticSymbol: "[ˈkɑːpɪt]",
        chinese: "n. 地毯",
    },
    {
        english: "carriage",
        phoneticSymbol: "[ˈkærɪdʒ]",
        chinese: "n. 四轮马车;（火车）客车厢",
    },
    {
        english: "carrier",
        phoneticSymbol: "[ˈkærɪə(r)]",
        chinese: "n. 搬运者；媒介;（自行车等的）置物架；（车的）货架",
    },
    {
        english: "carrot",
        phoneticSymbol: "[ˈkærət]",
        chinese: "n.胡萝卜",
    },
    {
        english: "carry",
        phoneticSymbol: "[ˈkærɪ]",
        chinese: "vt. 拿，搬，带，提，抬，背，抱，运等",
    },
    {
        english: "cartoon",
        phoneticSymbol: "[kɑːˈtuːn]",
        chinese: "n. 动画片，卡通；漫画",
    },
    {
        english: "carve",
        phoneticSymbol: "[kɑːv]",
        chinese: "vt.刻；雕刻",
    },
    {
        english: "case",
        phoneticSymbol: "[keɪs]",
        chinese: "n. 情况；病例；案件；真相  n. 箱；盒；容器",
    },
    {
        english: "cash",
        phoneticSymbol: "[kæʃ]",
        chinese: "n. 现金，现钞 v. 兑现",
    },
    {
        english: "cassette",
        phoneticSymbol: "[kæ'set]",
        chinese: "n. 磁带",
    },
    {
        english: "cast (cast, cast)",
        phoneticSymbol: "[kɑːst; (US) kæst]",
        chinese: "v. 扔，抛，撒",
    },
    {
        english: "castle",
        phoneticSymbol: "[ˈkɑːs(ə)l; (US) ˈkæsl]",
        chinese: "n. 城堡",
    },
    {
        english: "casual",
        phoneticSymbol: "[ˈkæʒʊəl]",
        chinese: "a. 漫不经心的，不经意的，非正式的",
    },
    {
        english: "cat",
        phoneticSymbol: "[kæt]",
        chinese: "n. 猫 ",
    },
    {
        english: "catalogue",
        phoneticSymbol: "['kætəlɔg]",
        chinese: "n. 目录",
    },
    {
        english: "catastrophe",
        phoneticSymbol: "[kəˈtæstrəfɪ]",
        chinese: "n. 灾难，灾祸，不幸事件",
    },
    {
        english: "catch(caught,caught)",
        phoneticSymbol: "[kætʃ]",
        chinese: "v. 接住；捉住；赶上；染上（疾病）",
    },
    {
        english: "category",
        phoneticSymbol: "[ˈkætɪɡərɪ]",
        chinese: "n. 类别，种类",
    },
    {
        english: "cater",
        phoneticSymbol: "[ˈkeɪtə(r)]",
        chinese: "v. 提供饮食，承办酒席",
    },
    {
        english: "Catholic",
        phoneticSymbol: "[ˈkæθəlɪk]",
        chinese: "a. 天主教的",
    },
    {
        english: "cattle",
        phoneticSymbol: "[ˈkæt(ə)l]",
        chinese: "n. 牛（总称），家畜",
    },
    {
        english: "cause",
        phoneticSymbol: "[kɔːz]",
        chinese: "n. 原因，起因 vt. 促使，引起，使发生",
    },
    {
        english: "caution",
        phoneticSymbol: "[ˈkɔːʃ(ə)n]",
        chinese: "n. 谨慎，小心，警告",
    },
    {
        english: "cautious",
        phoneticSymbol: "[ˈkɔːʃəs]",
        chinese: "a. 小心的，谨慎的",
    },
    {
        english: "cave",
        phoneticSymbol: "[keɪv]",
        chinese: "n. 洞，穴；地窖",
    },
    {
        english: "CD",
        phoneticSymbol: "[ˌsi:'di:]",
        chinese: "光盘 (compact disk的缩写)",
    },
    {
        english: "ceiling",
        phoneticSymbol: "[ˈsiːlɪŋ]",
        chinese: "n. 天花板，顶棚",
    },
    {
        english: "celebrate",
        phoneticSymbol: "[ˈselɪbreɪt]",
        chinese: "v. 庆祝",
    },
    {
        english: "celebration",
        phoneticSymbol: "[selɪˈbreɪʃ(ə)n]",
        chinese: "n. 庆祝；庆祝会",
    },
    {
        english: "cell",
        phoneticSymbol: "[sel]",
        chinese:
            "n.（监狱的）单人牢房；（修道院等的）单人小室；（蜂巢的）小蜂窝，蜂房；［生   物］ 细胞",
    },
    {
        english: "cent",
        phoneticSymbol: "[sent]",
        chinese: "n. 美分（100 cents = 1 dollar）",
    },
    {
        english: "centigrade",
        phoneticSymbol: "[ˈsentɪɡreɪd]",
        chinese: "a. 摄氏的",
    },
    {
        english: "centimetre",
        phoneticSymbol: "['sentiˌmi:tə(r)]",
        chinese: "(美 centimeter) n. 公分，厘米",
    },
    {
        english: "central",
        phoneticSymbol: "[ˈsentr(ə)l]",
        chinese: "a. 中心，中央；主要的",
    },
    {
        english: "century",
        phoneticSymbol: "[ˈsentʃərɪ]",
        chinese: "n. 世纪，百年",
    },
    {
        english: "ceremony",
        phoneticSymbol: "[ˈserɪmənɪ]",
        chinese: "n. 典礼，仪式，礼节",
    },
    {
        english: "certain",
        phoneticSymbol: "[ˈsɜːt(ə)n]",
        chinese: "a. （未指明真实名称的）某…；确定的，无疑的；一定会…",
    },
    {
        english: "certificate",
        phoneticSymbol: "[səˈtɪfɪkət]",
        chinese: "n. 证明，证明书",
    },
    {
        english: "chain",
        phoneticSymbol: "[tʃeɪn]",
        chinese: "n. 链； 链条",
    },
    {
        english: "chair",
        phoneticSymbol: "[tʃeə(r)]",
        chinese: "n. 椅子",
    },
    {
        english: "chairman",
        phoneticSymbol: "[ˈtʃeəmən]",
        chinese: "(pl. chairmen) n. 主席，会长；议长",
    },
    {
        english: "chairwoman (pl. chairwomen)",
        phoneticSymbol: "['tʃɛəˌwumən]",
        chinese: "n. 女主席, 女会长；女议长",
    },
    {
        english: "chalk",
        phoneticSymbol: "[tʃɔːk]",
        chinese: "n. 粉笔",
    },
    {
        english: "challenge",
        phoneticSymbol: "[ˈtʃælɪndʒ]",
        chinese: "n.挑战(性)",
    },
    {
        english: "challenging",
        phoneticSymbol: "[ˈtʃælɪndʒɪŋ]",
        chinese: "a.具有挑战性的",
    },
    {
        english: "champion",
        phoneticSymbol: "[ˈtʃæmpɪən]",
        chinese: "n. 冠军，优胜者",
    },
    {
        english: "chance",
        phoneticSymbol: "[tʃɑːns; (US) tʃæns]",
        chinese: "n. 机会，可能性",
    },
    {
        english: "changeable",
        phoneticSymbol: "[ˈtʃeɪndʒəb(ə)l]",
        chinese: "a.易变的，变化无常的",
    },
    {
        english: "change",
        phoneticSymbol: "[tʃeɪndʒ]",
        chinese: "n. 零钱；找头v. 改变，变化；更换；兑换",
    },
    {
        english: "channel",
        phoneticSymbol: "[ˈtʃæn(ə)l]",
        chinese: "n.频道；通道；水渠",
    },
    {
        english: "chant",
        phoneticSymbol: "[tʃɑːnt]",
        chinese: "v./ n.反复呼喊",
    },
    {
        english: "chaos",
        phoneticSymbol: "[ˈkeɪɔs]",
        chinese: "n. 混乱，杂乱，紊乱",
    },
    {
        english: "character",
        phoneticSymbol: "[ˈkærɪktə(r)]",
        chinese: "n.（汉）字.字体；品格",
    },
    {
        english: "characteristic",
        phoneticSymbol: "[kærɪktəˈrɪstɪk]",
        chinese: "a. 典型的，独特的",
    },
    {
        english: "charge",
        phoneticSymbol: "[tʃɑːdʒ]",
        chinese: "v. 要求收费；索价；将(电池)充电 n. 费用；价钱",
    },
    {
        english: "chapter",
        phoneticSymbol: "[ˈtʃæptə(r)]",
        chinese: "n. 章",
    },
    {
        english: "chart",
        phoneticSymbol: "[tʃɑːt]",
        chinese: "n. 图表；航海图",
    },
    {
        english: "chat",
        phoneticSymbol: "[tʃæt]",
        chinese: "n. & vi. 聊天，闲谈",
    },
    {
        english: "cheap",
        phoneticSymbol: "[tʃiːp]",
        chinese: "a. 便宜的，贱",
    },
    {
        english: "cheat",
        phoneticSymbol: "[tʃiːt]",
        chinese: "n. & v. 骗取，哄骗；作弊",
    },
    {
        english: "check",
        phoneticSymbol: "[tʃek]",
        chinese: "n. 检查；批改 vt. 校对，核对； 检查；批改",
    },
    {
        english: "cheek",
        phoneticSymbol: "[tʃiːk]",
        chinese: "n. 面颊，脸蛋",
    },
    {
        english: "cheer",
        phoneticSymbol: "[tʃɪə(r)]",
        chinese: "n. & vi.欢呼； 喝彩",
    },
    {
        english: "cheerful",
        phoneticSymbol: "[ˈtʃɪəfʊl]",
        chinese: "a.兴高采烈的，快活的",
    },
    {
        english: "cheers",
        phoneticSymbol: "[tʃɪə(r)]",
        chinese: "int. 干杯，(口)谢谢，再见",
    },
    {
        english: "cheese",
        phoneticSymbol: "[tʃiːz]",
        chinese: "n. 奶酪",
    },
    {
        english: "chef",
        phoneticSymbol: "[ʃef]",
        chinese: "n. 厨师长，主厨",
    },
    {
        english: "chemical",
        phoneticSymbol: "[ˈkemɪk(ə)l]",
        chinese: "a. 化学的 n. 化学品",
    },
    {
        english: "chemist",
        phoneticSymbol: "[ˈkemɪst]",
        chinese: "n. 药剂师；化学家",
    },
    {
        english: "chemistry",
        phoneticSymbol: "[ˈkemɪstrɪ]",
        chinese: "n. 化学",
    },
    {
        english: "cheque",
        phoneticSymbol: "[tʃek]",
        chinese: "(美check) n. 支票",
    },
    {
        english: "chess",
        phoneticSymbol: "[tʃes]",
        chinese: "n. 棋",
    },
    {
        english: "chest",
        phoneticSymbol: "[tʃest]",
        chinese: "n. 箱子；盒子；胸部",
    },
    {
        english: "chew",
        phoneticSymbol: "[tʃuː]",
        chinese: "vt. 咀嚼",
    },
    {
        english: "chicken",
        phoneticSymbol: "[ˈtʃɪkən]",
        chinese: "n. 鸡；鸡肉",
    },
    {
        english: "chief",
        phoneticSymbol: "[tʃiːf]",
        chinese: "a. 主要,首要的 n.领导，头",
    },
    {
        english: "child (复children)",
        phoneticSymbol: "[tʃaɪld]",
        chinese: "n. 孩子，儿童",
    },
    {
        english: "childhood",
        phoneticSymbol: "[ˈtʃaɪldhʊd]",
        chinese: "n. 幼年时代，童年",
    },
    {
        english: "chocolate",
        phoneticSymbol: "[ˈtʃɔklət]",
        chinese: "n. 巧克力",
    },
    {
        english: "choice",
        phoneticSymbol: "[tʃɔɪs]",
        chinese: "n. 选择；抉择",
    },
    {
        english: "choir",
        phoneticSymbol: "[ˈkwaɪə(r)]",
        chinese: "n. 合唱团，教堂的唱诗班",
    },
    {
        english: "choke",
        phoneticSymbol: "[tʃəʊk]",
        chinese: "n. & v. 窒息",
    },
    {
        english: "choose (chose, chosen)",
        phoneticSymbol: "[tʃuːz]",
        chinese: "vt. 选择",
    },
    {
        english: "chopsticks",
        phoneticSymbol: "[ˈtʃɔpstɪks]",
        chinese: "n. 筷子",
    },
    {
        english: "chorus",
        phoneticSymbol: "[ˈkɔːrəs]",
        chinese: "n. 合唱曲，歌咏队",
    },
    {
        english: "Christian",
        phoneticSymbol: "[ˈkrɪstɪən]",
        chinese: "n. 基督教徒和天主教徒的总称",
    },
    {
        english: "Christmas",
        phoneticSymbol: "[ˈkrɪsməs]",
        chinese: "n. 圣诞节（12月25日）",
    },
    {
        english: "church",
        phoneticSymbol: "[tʃɜːtʃ]",
        chinese: "n. 教堂；教会",
    },
    {
        english: "cigar",
        phoneticSymbol: "[sɪˈɡɑː(r)]",
        chinese: "n. 雪茄烟",
    },
    {
        english: "cigarette",
        phoneticSymbol: "[sɪɡəˈret]",
        chinese: "n. 纸烟，香烟",
    },
    {
        english: "cinema",
        phoneticSymbol: "[ˈsɪnəmə]",
        chinese: "n. 电影院；电影",
    },
    {
        english: "circle",
        phoneticSymbol: "[ˈsɜːk(ə)l]",
        chinese: "n. /vt. 圆圈 将…圈起来",
    },
    {
        english: "circuit",
        phoneticSymbol: "[ˈsɜːkɪt]",
        chinese: "n. 环形路线，巡回赛",
    },
    {
        english: "circulate",
        phoneticSymbol: "[ˈsɜːkjʊleɪt]",
        chinese: "v. （液体或气体）环流，循环",
    },
    {
        english: "circumstance",
        phoneticSymbol: "[ˈsɜːkəmstəns]",
        chinese: "n.条件,环境,状况",
    },
    {
        english: "circus",
        phoneticSymbol: "[ˈsɜːkəs]",
        chinese: "n. 马戏团",
    },
    {
        english: "citizen",
        phoneticSymbol: "[ˈsɪtɪz(ə)n]",
        chinese: "n. 公民；居民",
    },
    {
        english: "city",
        phoneticSymbol: "[ˈsɪtɪ]",
        chinese: "n. 市，城市，都市",
    },
    {
        english: "civil",
        phoneticSymbol: "[ˈsɪv(ə)l]",
        chinese: "a. 国内的；平民（非军人）的；民用的",
    },
    {
        english: "civilian",
        phoneticSymbol: "[sɪˈvɪlɪən]",
        chinese: "n. 平民，老百姓",
    },
    {
        english: "civilization",
        phoneticSymbol: "[sɪvɪlaɪˈzeɪʃ(ə)n; (US) sɪvəlɪˈzeɪʃən]",
        chinese: "n. 文明",
    },
    {
        english: "clap",
        phoneticSymbol: "[klæp]",
        chinese: "vi. 拍手；鼓掌",
    },
    {
        english: "clarify",
        phoneticSymbol: "[ˈklærɪfaɪ]",
        chinese: "v. 澄清，阐明",
    },
    {
        english: "class",
        phoneticSymbol: "[klɑːs; (US) klæs]",
        chinese: "n. （学校的）班；年级；课",
    },
    {
        english: "classic",
        phoneticSymbol: "[ˈklæsɪk]",
        chinese: "a. 一流的，典型的，有代表性的",
    },
    {
        english: "classify",
        phoneticSymbol: "[ˈklæsɪfaɪ]",
        chinese: "v. 分类，归类",
    },
    {
        english: "classmate",
        phoneticSymbol: "[ˈklɑːsmeɪt]",
        chinese: "n. 同班同学",
    },
    {
        english: "classroom",
        phoneticSymbol: "[ˈklɑːsruːm]",
        chinese: "n. 教室",
    },
    {
        english: "claw",
        phoneticSymbol: "[klɔː]",
        chinese: "n. 爪",
    },
    {
        english: "clay",
        phoneticSymbol: "[kleɪ]",
        chinese: "n. 黏土，陶土",
    },
    {
        english: "clean",
        phoneticSymbol: "[kliːn]",
        chinese: "vt. 弄干净，擦干净 a. 清洁的，干净的",
    },
    {
        english: "cleaner",
        phoneticSymbol: "[kliːnə(r)]",
        chinese: "n.清洁工.,清洁器.,清洁剂",
    },
    {
        english: "clear",
        phoneticSymbol: "[klɪə(r)]",
        chinese: "a. 清晰；明亮的；清楚的",
    },
    {
        english: "clerk",
        phoneticSymbol: "[klɑːk; (US) klərk]",
        chinese: "n. 书记员；办事员；职员",
    },
    {
        english: "clever",
        phoneticSymbol: "[ˈklevə(r)]",
        chinese: "a. 聪明的，伶俐的",
    },
    {
        english: "click",
        phoneticSymbol: "[klɪk]",
        chinese: "v. 点击（计算机用语）",
    },
    {
        english: "climate",
        phoneticSymbol: "[ˈklaɪmɪt]",
        chinese: "n. 气候",
    },
    {
        english: "climb",
        phoneticSymbol: "[klaɪm]",
        chinese: "v. 爬，攀登",
    },
    {
        english: "clinic",
        phoneticSymbol: "[ˈklɪnɪk]",
        chinese: "n. 诊所",
    },
    {
        english: "clock",
        phoneticSymbol: "[klɔk]",
        chinese: "n. 钟",
    },
    {
        english: "clone",
        phoneticSymbol: "[kləʊn]",
        chinese: "n.克隆（无性繁殖出来的有机体群）",
    },
    {
        english: "close",
        phoneticSymbol: "[kləʊz]",
        chinese: "a. 亲密的；近，靠近 ad. 近，靠近 vt. 关，关闭",
    },
    {
        english: "cloth",
        phoneticSymbol: "[klɔθ; (US) klɔθ]",
        chinese: "n. 布",
    },
    {
        english: "clothes",
        phoneticSymbol: "[klɔðz; (US) kləʊz]",
        chinese: "n. 衣服；各种衣物",
    },
    {
        english: "clothing",
        phoneticSymbol: "[ˈkləʊðɪŋ]",
        chinese: "n. (总称) 衣服",
    },
    {
        english: "cloud",
        phoneticSymbol: "[ˈkləʊðɪŋ]",
        chinese: "n. 云；云状物；阴影",
    },
    {
        english: "cloudy",
        phoneticSymbol: "[ˈklaʊdɪ]",
        chinese: "a. 多云的，阴天的",
    },
    {
        english: "club",
        phoneticSymbol: "[klʌb]",
        chinese: "n. 俱乐部；纸牌中的梅花",
    },
    {
        english: "clumsy",
        phoneticSymbol: "[ˈklʌmzɪ]",
        chinese: "a. 笨拙的，不灵巧的",
    },
    {
        english: "coach",
        phoneticSymbol: "[kəʊtʃ]",
        chinese: "n. 教练；马车；长途车",
    },
    {
        english: "coal",
        phoneticSymbol: "[kəʊl]",
        chinese: "n. 煤；煤块",
    },
    {
        english: "coast",
        phoneticSymbol: "[kəʊst]",
        chinese: "n. 海岸；海滨",
    },
    {
        english: "coat",
        phoneticSymbol: "[kəʊt]",
        chinese: "n. 外套；涂层；表皮；皮毛 vt. 给……穿外套；涂上",
    },
    {
        english: "cocoa",
        phoneticSymbol: "[ˈkəʊkəʊ]",
        chinese: "n. 可可粉",
    },
    {
        english: "coffee",
        phoneticSymbol: "[ˈkɔfɪ; (US) ˈkɔːfɪ]",
        chinese: "n. 咖啡",
    },
    {
        english: "coin",
        phoneticSymbol: "[kɔɪn]",
        chinese: "n. 硬币",
    },
    {
        english: "coincidence",
        phoneticSymbol: "[kəʊɪnˈsɪdəns]",
        chinese: "n. 巧合，巧事",
    },
    {
        english: "coke",
        phoneticSymbol: "[kəʊk]",
        chinese: "n. 可口可乐",
    },
    {
        english: "cold",
        phoneticSymbol: "[kəʊld]",
        chinese: "a. 冷的，寒的 n. 寒冷；感冒，伤风",
    },
    {
        english: "collar",
        phoneticSymbol: "[ˈkɔlə(r)]",
        chinese: "n. 衣领； 硬领",
    },
    {
        english: "colleague",
        phoneticSymbol: "[ˈkɔliːɡ]",
        chinese: "n. 同事",
    },
    {
        english: "collect",
        phoneticSymbol: "[kəˈlekt]",
        chinese: "vt. 收集，搜集",
    },
    {
        english: "collection",
        phoneticSymbol: "[kəˈlekʃ(ə)n]",
        chinese: "n. 收藏品，收集物",
    },
    {
        english: "college",
        phoneticSymbol: "[ˈkɔlɪdʒ]",
        chinese: "n. 学院；专科学校",
    },
    {
        english: "collision",
        phoneticSymbol: "[kəˈlɪʒ(ə)n]",
        chinese: "n. 碰撞事故",
    },
    {
        english: "colour (美color)",
        phoneticSymbol: "['kʌlə]",
        chinese: "n. 颜色 vt.给…着色，涂色",
    },
    {
        english: "comb",
        phoneticSymbol: "[kəʊm]",
        chinese: "n. 梳子 v. 梳",
    },
    {
        english: "combine",
        phoneticSymbol: "[kəmˈbaɪn]",
        chinese: "vt. 使联合；使结合",
    },
    {
        english: "come (came, come)",
        phoneticSymbol: "[kʌm]",
        chinese: "vi. 来，来到",
    },
    {
        english: "comedy",
        phoneticSymbol: "[ˈkɔmədɪ]",
        chinese: "n. 喜剧",
    },
    {
        english: "comfort",
        phoneticSymbol: "[ˈkʌmfət]",
        chinese: "n. 安慰； 慰问",
    },
    {
        english: "comfortable",
        phoneticSymbol: "[ˈkʌmfətəb(ə)l; (US) ˈkʌmfərtəbl]",
        chinese: "a. 舒服的；安逸的；舒服自在的",
    },
    {
        english: "command",
        phoneticSymbol: "[kəˈmɑːnd; (US) kəˈmænd]",
        chinese: "n. & v. 命令",
    },
    {
        english: "comment",
        phoneticSymbol: "[ˈkɔment]",
        chinese: "n. 评论",
    },
    {
        english: "commit",
        phoneticSymbol: "[kəˈmɪt]",
        chinese: "v.犯（罪，错），自杀",
    },
    {
        english: "commitment",
        phoneticSymbol: "[kəˈmɪtmənt]",
        chinese: "n. 承诺,允诺,承担",
    },
    {
        english: "committee",
        phoneticSymbol: "[kəˈmɪtɪ]",
        chinese: "n. 委员会",
    },
    {
        english: "common",
        phoneticSymbol: "[ˈkɔmən]",
        chinese: "a. 普通，一般；共有的",
    },
    {
        english: "communicate",
        phoneticSymbol: "[kəˈmjuːnɪkeɪt]",
        chinese: "v. 交际；传达（感情，信息等）",
    },
    {
        english: "communication",
        phoneticSymbol: "[kəmjuːnɪˈkeɪʃ(ə)n]",
        chinese: "n.交际,交往;通讯",
    },
    {
        english: "communism",
        phoneticSymbol: "[ˈkɔmjʊnɪz(ə)m]",
        chinese: "n. 共产主义",
    },
    {
        english: "communist",
        phoneticSymbol: "[ˈkɔmjuːnɪst]",
        chinese: "n. 共产主义者 a. 共产党的；共产主义的",
    },
    {
        english: "companion",
        phoneticSymbol: "[kəmˈpænɪən]",
        chinese: "n. 同伴；同事",
    },
    {
        english: "company",
        phoneticSymbol: "[ˈkʌmpənɪ]",
        chinese: "n. 公司",
    },
    {
        english: "compare",
        phoneticSymbol: "[kəmˈpeə(r)]",
        chinese: "vt. 比较，对照",
    },
    {
        english: "compass",
        phoneticSymbol: "[ˈkʌmpəs]",
        chinese: "n. 罗盘，指南针",
    },
    {
        english: "compensate",
        phoneticSymbol: "[ˈkɔmpenseɪt]",
        chinese: "v. 补偿，弥补",
    },
    {
        english: "compete",
        phoneticSymbol: "[kəmˈpiːt]",
        chinese: "vi. 比赛，竞赛",
    },
    {
        english: "competence",
        phoneticSymbol: "[ˈkɔmpətəns]",
        chinese: "n.能力,胜任,管辖权",
    },
    {
        english: "competition",
        phoneticSymbol: "[kɔmpəˈtɪʃ(ə)n]",
        chinese: "n. 比赛，竞赛",
    },
    {
        english: "complete",
        phoneticSymbol: "[kəmˈpliːt]",
        chinese: "a. 完成vt. 完成，结束",
    },
    {
        english: "complex",
        phoneticSymbol: "[ˈkɔmpleks]",
        chinese: "a. / n. 复杂的，建筑群",
    },
    {
        english: "component",
        phoneticSymbol: "[kəmˈpəʊnənt]",
        chinese: "n. 组成部分，部件",
    },
    {
        english: "composition",
        phoneticSymbol: "[kɔmpəˈzɪʃ(ə)n]",
        chinese: "n. 作文；作曲",
    },
    {
        english: "comprehension",
        phoneticSymbol: "[kɔmprɪˈhenʃ(ə)n]",
        chinese: "n. 理解",
    },
    {
        english: "compromise",
        phoneticSymbol: "[ˈkɔmprəmaɪz]",
        chinese: "v. 妥协,折中,让步",
    },
    {
        english: "compulsory",
        phoneticSymbol: "[kəmˈpʌlsərɪ]",
        chinese: "a. 强制的,必须做的",
    },
    {
        english: "computer",
        phoneticSymbol: "[kəmˈpjuːtə(r)]",
        chinese: "n. 电子计算机",
    },
    {
        english: "concentrate",
        phoneticSymbol: "[ˈkɔnsəntreɪt]",
        chinese: "v. 聚精会神",
    },
    {
        english: "concept",
        phoneticSymbol: "[ˈkɔnsept]",
        chinese: "n. 概念",
    },
    {
        english: "concern",
        phoneticSymbol: "[kənˈsɜːn]",
        chinese: "v. / n. 涉及，关心",
    },
    {
        english: "concert",
        phoneticSymbol: "[ˈkɔnsət]",
        chinese: "n. 音乐会；演奏会",
    },
    {
        english: "conclude",
        phoneticSymbol: "[kənˈkluːd]",
        chinese: "v. 完成，结束",
    },
    {
        english: "conclusion",
        phoneticSymbol: "[kənˈkluːʒ(ə)n]",
        chinese: "n. 结论；结束",
    },
    {
        english: "concrete",
        phoneticSymbol: "[ˈkɔŋkriːt]",
        chinese: "a. 混凝土制的",
    },
    {
        english: "condition",
        phoneticSymbol: "[kənˈdɪʃ(ə)n]",
        chinese: "n. 条件，状况",
    },
    {
        english: "condemn",
        phoneticSymbol: "[kənˈdem]",
        chinese: "v. 谴责，指责，宣判",
    },
    {
        english: "conduct",
        phoneticSymbol: "[ˈkɔndʌkt]",
        chinese: "vt. 引导，带领",
    },
    {
        english: "conductor",
        phoneticSymbol: "[kənˈdʌktə(r)]",
        chinese: "n. 管理人；指导者；（车上的）售票员，列车员；乐队指挥",
    },
    {
        english: "confident",
        phoneticSymbol: "[ˈkɔnfɪdənt]",
        chinese: "a. 自信的",
    },
    {
        english: "confidential",
        phoneticSymbol: "[kɔnfɪˈdenʃ(ə)l]",
        chinese: "a. 机密的，保密的",
    },
    {
        english: "conference",
        phoneticSymbol: "[ˈkɔnfərəns]",
        chinese: "n. (正式的)会议；讨论",
    },
    {
        english: "confirm",
        phoneticSymbol: "[kənˈfɜːm]",
        chinese: "v. 证实，证明，确认",
    },
    {
        english: "conflict",
        phoneticSymbol: "[ˈkɔnflɪkt]",
        chinese: "n. 冲突，争执，争论",
    },
    {
        english: "confuse",
        phoneticSymbol: "[kənˈfjuːz]",
        chinese: "v. 使迷惑，混淆",
    },
    {
        english: "congratulate",
        phoneticSymbol: "[kənˈɡrætjʊleɪt]",
        chinese: "vt. 祝贺",
    },
    {
        english: "congratulation",
        phoneticSymbol: "[kənɡrætjʊˈleɪʃ(ə)n]",
        chinese: "n. 祝贺，庆贺",
    },
    {
        english: "connect",
        phoneticSymbol: "[kəˈnekt]",
        chinese: "v. 连接，把…联系起来",
    },
    {
        english: "connection",
        phoneticSymbol: "[kəˈnekʃ(ə)n]",
        chinese: "n.连接物;接触,联系",
    },
    {
        english: "conscience",
        phoneticSymbol: "[ˈkɔnʃəns]",
        chinese: "n. 良心，良知，内疚",
    },
    {
        english: "consensus",
        phoneticSymbol: "[kənˈsensəs]",
        chinese: "n. 一致的意见，共识",
    },
    {
        english: "consequence",
        phoneticSymbol: "[ˈkɔnsɪkwəns; (US) ˈkɔnsɪkwens]",
        chinese: "n. 结果，后果",
    },
    {
        english: "conservation",
        phoneticSymbol: "[kɔnsəˈveɪʃ(ə)n]",
        chinese: "n 保存；（自然资源的）保护，管理",
    },
    {
        english: "conservative",
        phoneticSymbol: "[kənˈsɜːvətɪv]",
        chinese: "a. 保守的,守旧的；保守主义的；谨慎的 n.保守的人，保守主义",
    },
    {
        english: "consider",
        phoneticSymbol: "[kənˈsɪdə(r)]",
        chinese: "vt. 考虑",
    },
    {
        english: "considerate",
        phoneticSymbol: "[kənˈsɪdərət]",
        chinese: "a. 体贴的",
    },
    {
        english: "consideration",
        phoneticSymbol: "[kənsɪdəˈreɪʃ(ə)n]",
        chinese: "n. 考虑；关心",
    },
    {
        english: "consist",
        phoneticSymbol: "[kənˈsɪst]",
        chinese: "v. 包含，组成，构成",
    },
    {
        english: "consistent",
        phoneticSymbol: "[kənˈsɪst(ə)nt]",
        chinese: "a. 一致的，始终如一的，连续的",
    },
    {
        english: "constant",
        phoneticSymbol: "[ˈkɔnstənt]",
        chinese: "a. 经常的，不断的",
    },
    {
        english: "constitution",
        phoneticSymbol: "[kɔnstɪˈtjuːʃ(ə)n; (US) kɔnstəˈtuːʃən]",
        chinese: "n. 宪法，章程，身体素质",
    },
    {
        english: "construct",
        phoneticSymbol: "[kənˈstrʌkt]",
        chinese: "v. 构筑；建造，建设",
    },
    {
        english: "construction",
        phoneticSymbol: "[kənˈstrʌkʃ(ə)n]",
        chinese: "n.建造,建设,建筑物",
    },
    {
        english: "consult",
        phoneticSymbol: "[kənˈsʌlt]",
        chinese: "v. 咨询，商量",
    },
    {
        english: "consultant",
        phoneticSymbol: "[kənˈsʌltənt]",
        chinese: "n. 顾问",
    },
    {
        english: "consume",
        phoneticSymbol: "[kənˈsʌltənt]",
        chinese: "v. 消耗，耗费（燃料，能量，时间等）",
    },
    {
        english: "contain",
        phoneticSymbol: "[kənˈteɪn]",
        chinese: "v. 包含；包括；能容纳",
    },
    {
        english: "container",
        phoneticSymbol: "[kənˈteɪnə(r)]",
        chinese: "n. 容器",
    },
    {
        english: "contemporary",
        phoneticSymbol: "[kənˈtempərərɪ; (US) kənˈtempərerɪ]",
        chinese: "a.属同时期的，同一时代的",
    },
    {
        english: "content",
        phoneticSymbol: "[kənˈtent]",
        chinese: "a.甘愿的,满意的 n.内容",
    },
    {
        english: "continent",
        phoneticSymbol: "[ˈkɔntɪnənt]",
        chinese: "n. 大陆，大洲；陆地",
    },
    {
        english: "continue",
        phoneticSymbol: "[kənˈtɪnjuː]",
        chinese: "vi. 继续",
    },
    {
        english: "contradict",
        phoneticSymbol: "[kɔntrəˈdɪkt]",
        chinese: "v. 反驳，驳斥，批驳",
    },
    {
        english: "contradictory",
        phoneticSymbol: "[ˌkɔntrə'diktəri]",
        chinese: "a.相互矛盾,对立的",
    },
    {
        english: "contrary",
        phoneticSymbol: "[ˈkɔntrərɪ; (US) ˈkɔntrerɪ]",
        chinese: "n. / a. 相反 相反的",
    },
    {
        english: "contribute",
        phoneticSymbol: "[kənˈtrɪbjuːt]",
        chinese: "v. 贡献",
    },
    {
        english: "contribution",
        phoneticSymbol: "[kɔnˈtrɪbjuːt]",
        chinese: "n. 贡献",
    },
    {
        english: "control",
        phoneticSymbol: "[kənˈtrol]",
        chinese: "vt.& n. 控制",
    },
    {
        english: "controversial",
        phoneticSymbol: "[kɔntrəˈvɜːʃ(ə)l]",
        chinese: "a.引起争论的,有争议的",
    },
    {
        english: "convenience",
        phoneticSymbol: "[kənˈviːnɪəns]",
        chinese: "n. 便利",
    },
    {
        english: "convenient",
        phoneticSymbol: "[kənˈviːnɪənt]",
        chinese: "a. 便利的，方便的",
    },
    {
        english: "conventional",
        phoneticSymbol: "[kənˈvenʃən(ə)l]",
        chinese: "a. 依照惯例的，习惯的",
    },
    {
        english: "conversation",
        phoneticSymbol: "[kɔnvəˈseɪʃ(ə)n]",
        chinese: "n. 谈话，交谈",
    },
    {
        english: "convey",
        phoneticSymbol: "[kənˈveɪ]",
        chinese: "v. 表达，传递（思想，感情等）",
    },
    {
        english: "convince",
        phoneticSymbol: "[kənˈvɪns]",
        chinese: "v. 使确信，使信服",
    },
    {
        english: "cook",
        phoneticSymbol: "[kʊk]",
        chinese: "n.炊事员, 厨师 v.烹调,做饭",
    },
    {
        english: "cooker",
        phoneticSymbol: "[ˈkʊkə(r)]",
        chinese: "n.炊具(锅、炉灶、烤炉等)",
    },
    {
        english: "cookie",
        phoneticSymbol: "[ˈkʊkɪ]",
        chinese: "n. 小甜饼",
    },
    {
        english: "cool",
        phoneticSymbol: "[kuːl]",
        chinese: "a. 凉的，凉爽的；酷",
    },
    {
        english: "copy",
        phoneticSymbol: "[ˈkɔpɪ]",
        chinese:
            "n. 抄本，副本；一本（份，册……） v. 抄写；复印；（计算机用语）拷（备 份盘）",
    },
    {
        english: "corn",
        phoneticSymbol: "[kɔːn]",
        chinese: "n. 玉米，谷物",
    },
    {
        english: "corner",
        phoneticSymbol: "[ˈkɔːnə(r)]",
        chinese: "n. 角；角落；拐角",
    },
    {
        english: "corporation",
        phoneticSymbol: "[kɔːpəˈreɪʃ(ə)n]",
        chinese: "n. （大）公司",
    },
    {
        english: "correct",
        phoneticSymbol: "[kəˈrekt]",
        chinese: "v. 改正；纠正 a. 正确的，对的；恰当的",
    },
    {
        english: "correction",
        phoneticSymbol: "[kəˈrekʃ(ə)n]",
        chinese: "n. 改正",
    },
    {
        english: "correspond",
        phoneticSymbol: "[kɔrɪˈspɔnd; (US) kɔːrəˈspɔnd]",
        chinese: "vi. 一致；与…相当；(与人)通信，有书信往来",
    },
    {
        english: "corrupt",
        phoneticSymbol: "[kəˈrʌpt]",
        chinese: "a. / v. 贪污的，腐败的，使腐化，堕落",
    },
    {
        english: "cost (cost, cost)",
        phoneticSymbol: "[kɔst; (US) kɔːst]",
        chinese: "v.值（钱），花费 n. 价格",
    },
    {
        english: "cosy",
        phoneticSymbol: "['kəuzi]",
        chinese: "a.暖和舒适的,亲密无间的",
    },
    {
        english: "cottage",
        phoneticSymbol: "[ˈkɔtɪdʒ]",
        chinese: "n. (郊外)小屋,村舍,别墅",
    },
    {
        english: "cotton",
        phoneticSymbol: "[ˈkɔt(ə)n]",
        chinese: "n. 棉花 a. 棉花的",
    },
    {
        english: "cough",
        phoneticSymbol: "[kɔf; (US) kɔːf]",
        chinese: "n.& vi. 咳嗽",
    },
    {
        english: "could",
        phoneticSymbol: "[kʊd]",
        chinese: "modal v.（can的过去式）可以…；（表示许可或请求）可以…，行",
    },
    {
        english: "count",
        phoneticSymbol: "[kaʊnt]",
        chinese: "vt. 数，点数",
    },
    {
        english: "counter",
        phoneticSymbol: "[ˈkaʊntə(r)]",
        chinese: "n. 柜台，结账处",
    },
    {
        english: "country",
        phoneticSymbol: "[ˈkʌntrɪ]",
        chinese: "n. 国家；农村，乡下",
    },
    {
        english: "countryside",
        phoneticSymbol: "[ˈkʌntrɪsaɪd]",
        chinese: "n. 乡下，农村",
    },
    {
        english: "couple",
        phoneticSymbol: "[ˈkʌp(ə)l]",
        chinese: "n. 夫妇，一对",
    },
    {
        english: "courage",
        phoneticSymbol: "[ˈkʌrɪdʒ]",
        chinese: "n. 勇气； 胆略",
    },
    {
        english: "course",
        phoneticSymbol: "[kɔːs]",
        chinese: "n. 过程；经过；课程",
    },
    {
        english: "court",
        phoneticSymbol: "[kɔːt]",
        chinese: "n. 法庭；法院",
    },
    {
        english: "courtyard",
        phoneticSymbol: "[ˈkɔːtjɑːd]",
        chinese: "n. 庭院，院子",
    },
    {
        english: "cousin",
        phoneticSymbol: "[ˈkʌz(ə)n]",
        chinese: "n. 堂（表）兄弟，堂（表）姐妹",
    },
    {
        english: "cover",
        phoneticSymbol: "[ˈkʌvə(r)]",
        chinese: "n. 盖子；罩 v. 覆盖，遮盖；掩盖",
    },
    {
        english: "cow",
        phoneticSymbol: "[kaʊ]",
        chinese: "n. 母牛，奶牛",
    },
    {
        english: "crash",
        phoneticSymbol: "[kræʃ]",
        chinese: "v. / n. 碰撞，撞击",
    },
    {
        english: "crayon",
        phoneticSymbol: "[ˈkreɪən]",
        chinese: "n 蜡笔；蜡笔画",
    },
    {
        english: "crazy",
        phoneticSymbol: "[ˈkreɪzɪ]",
        chinese: "a. 疯狂的",
    },
    {
        english: "cream",
        phoneticSymbol: "[kriːm]",
        chinese: "n. 奶油，乳脂",
    },
    {
        english: "create",
        phoneticSymbol: "[kriːˈeɪt]",
        chinese: "vt. 创造； 造成",
    },
    {
        english: "creature",
        phoneticSymbol: "[ˈkriːtʃə(r)]",
        chinese: "n. 生物，动物",
    },
    {
        english: "credit",
        phoneticSymbol: "[ˈkredɪt]",
        chinese: "n. 信用；信赖；信誉",
    },
    {
        english: "crew",
        phoneticSymbol: "[kruː]",
        chinese: "n. 全体船员",
    },
    {
        english: "crime",
        phoneticSymbol: "[kraim]",
        chinese: "n. 罪行，犯罪;罪恶",
    },
    {
        english: "criminal",
        phoneticSymbol: "[‘kriminl]",
        chinese: "n. 罪犯，犯人",
    },
    {
        english: "criterion (pl. criteria)",
        phoneticSymbol: "[kraɪˈtɪərɪən]",
        chinese: "n. 标准，准则，原则",
    },
    {
        english: "crop",
        phoneticSymbol: "[krɔp]",
        chinese: "n. 庄稼；收成",
    },
    {
        english: "cross",
        phoneticSymbol: "[krɔs]",
        chinese: "a. 脾气不好的，易怒的 n. 十字形的东西 vt. 越过；穿过",
    },
    {
        english: "crossing",
        phoneticSymbol: "[ˈkrɔsɪŋ]",
        chinese: "n. 十字路口，人行横道",
    },
    {
        english: "crossroads",
        phoneticSymbol: "[ˈkrɔsrəʊd]",
        chinese: "n. 交叉路口",
    },
    {
        english: "crowd",
        phoneticSymbol: "[kraʊd]",
        chinese: "n. 人群 vt. 拥挤，群聚",
    },
    {
        english: "cruel",
        phoneticSymbol: "[ˈkruːəl]",
        chinese: "a. 残忍的，残酷的；无情的",
    },
    {
        english: "cry",
        phoneticSymbol: "[kraɪ]",
        chinese: "n. 叫喊；哭声 v. 喊叫；哭",
    },
    {
        english: "cube",
        phoneticSymbol: "[kjuːb]",
        chinese: "n. 立方体",
    },
    {
        english: "cubic",
        phoneticSymbol: "[ˈkjuːbɪk]",
        chinese: "a.立方体的，立方形的",
    },
    {
        english: "cuisine",
        phoneticSymbol: "[kwɪˈziːn]",
        chinese: "n. 饭菜，佳肴",
    },
    {
        english: "culture",
        phoneticSymbol: "[ˈkʌltʃə(r)]",
        chinese: "n. 文化",
    },
    {
        english: "cup",
        phoneticSymbol: "[kʌp]",
        chinese: "n. 茶杯",
    },
    {
        english: "cupboard",
        phoneticSymbol: "[ˈkʌbəd]",
        chinese: "n. 碗柜；橱柜",
    },
    {
        english: "cure",
        phoneticSymbol: "[kjʊə(r)]",
        chinese: "n. & vt. 治疗；医好",
    },
    {
        english: "curious",
        phoneticSymbol: "[ˈkjʊərɪəs]",
        chinese: "a. 好奇的；奇异的",
    },
    {
        english: "currency",
        phoneticSymbol: "[ˈkʌrənsɪ]",
        chinese: "n. 货币；现金",
    },
    {
        english: "curriculum",
        phoneticSymbol: "[kəˈrɪkjʊləm]",
        chinese: "n.（学校的）全部课程",
    },
    {
        english: "curtain",
        phoneticSymbol: "[ˈkɜːt(ə)n]",
        chinese: "n. 窗帘",
    },
    {
        english: "cushion",
        phoneticSymbol: "[ˈkʊʃ(ə)n]",
        chinese: "n. 垫子",
    },
    {
        english: "custom",
        phoneticSymbol: "[ˈkʌstəm]",
        chinese: "n. 习惯，习俗，风俗习惯",
    },
    {
        english: "customer",
        phoneticSymbol: "[ˈkʌstəmə(r)]",
        chinese: "n. （商店）顾客，主顾",
    },
    {
        english: "customs",
        phoneticSymbol: "[ˈkʌstəm]",
        chinese: "n. 海关，关税",
    },
    {
        english: "cut (cut, cut)",
        phoneticSymbol: "[kʌt]",
        chinese: "v. / n. 切，剪，削，割, 伤口",
    },
    {
        english: "cycle",
        phoneticSymbol: "[ˈsaɪk(ə)l]",
        chinese: "vi. 骑自行车",
    },
    {
        english: "cyclist",
        phoneticSymbol: "[ˈsaɪklɪst]",
        chinese: "n. 骑自行车的人",
    },
    {
        english: "dad = daddy",
        phoneticSymbol: "[dæd]",
        chinese: "n.（口）爸爸，爹爹",
    },
    {
        english: "daily",
        phoneticSymbol: "[ˈdeɪlɪ]",
        chinese: "a. 每日的；日常的 ad. 每天 n. 日报",
    },
    {
        english: "dam",
        phoneticSymbol: "[dæm]",
        chinese: "n. 水坝，堰堤",
    },
    {
        english: "damage",
        phoneticSymbol: "[ˈdæmɪdʒ]",
        chinese: "n.& vt. 毁坏，损害",
    },
    {
        english: "damp",
        phoneticSymbol: "[dæmp]",
        chinese: "a. & n. 潮湿（的）",
    },
    {
        english: "dance",
        phoneticSymbol: "[dɑːns; (US) dæns]",
        chinese: "n.& vi. 跳舞",
    },
    {
        english: "danger",
        phoneticSymbol: "[ˈdeɪndʒə(r)]",
        chinese: "n. 危险",
    },
    {
        english: "dangerous",
        phoneticSymbol: "[ˈdeɪndʒərəs]",
        chinese: "a. 危险的",
    },
    {
        english: "dare",
        phoneticSymbol: "[deə(r)]",
        chinese:
            "v.& aux..（后接不带to的不定式；主要用于疑问，否定或条件句）敢，敢于",
    },
    {
        english: "dark",
        phoneticSymbol: "[dɑːk]",
        chinese: "n. 黑暗；暗处；日暮 a. 黑暗的；暗淡的；深色的",
    },
    {
        english: "darkness",
        phoneticSymbol: "[ˈdɑːknɪs]",
        chinese: "n. 黑暗，阴暗",
    },
    {
        english: "dash",
        phoneticSymbol: "[dæʃ]",
        chinese: "v. & n. 快跑，冲刺，短跑",
    },
    {
        english: "data",
        phoneticSymbol: "[ˈdeɪtə, ˈdɑːtə; (US) ˈdætə]",
        chinese: "n. 资料，数据",
    },
    {
        english: "database",
        phoneticSymbol: "[ˈdeɪtbeɪs]",
        chinese: "n. 资料库，数据库",
    },
    {
        english: "date",
        phoneticSymbol: "[deɪt]",
        chinese: "n. 日期；约会 n.枣",
    },
    {
        english: "daughter",
        phoneticSymbol: "[ˈdɔːtə(r)]",
        chinese: "n. 女儿",
    },
    {
        english: "dawn",
        phoneticSymbol: "[dɔːn]",
        chinese: "n. 黎明，拂晓",
    },
    {
        english: "day",
        phoneticSymbol: "[deɪ]",
        chinese: "n.（一）天，（一）日；白天",
    },
    {
        english: "dead",
        phoneticSymbol: "[ded]",
        chinese: "a. 死的；无生命的",
    },
    {
        english: "deadline",
        phoneticSymbol: "[ˈdedlaɪn]",
        chinese: "n.最后期限，截止日期",
    },
    {
        english: "deaf",
        phoneticSymbol: "[def]",
        chinese: "a. 聋的",
    },
    {
        english: "deal",
        phoneticSymbol: "[diːl]",
        chinese: "n. 量，数额；交易",
    },
    {
        english: "dear",
        phoneticSymbol: "[dɪə(r)]",
        chinese: "int.（表示惊愕）哎呀！唷！ a. 亲爱的；贵的",
    },
    {
        english: "death",
        phoneticSymbol: "[deθ]",
        chinese: "n. 死",
    },
    {
        english: "debate",
        phoneticSymbol: "[dɪˈbeɪt]",
        chinese: "n. & v.讨论，辩论",
    },
    {
        english: "debt",
        phoneticSymbol: "[det]",
        chinese: "n. 债务；欠款",
    },
    {
        english: "decade",
        phoneticSymbol: "[ˈdekeɪd]",
        chinese: "n. 十年期",
    },
    {
        english: "decide",
        phoneticSymbol: "[dɪˈsaɪd]",
        chinese: "v. 决定；下决心",
    },
    {
        english: "decision",
        phoneticSymbol: "[dɪˈsɪʒ(ə)n]",
        chinese: "n. 决定；决心",
    },
    {
        english: "declare",
        phoneticSymbol: "[dɪˈkleə(r)]",
        chinese: "vt. 声明；断言",
    },
    {
        english: "decline",
        phoneticSymbol: "[dɪˈklaɪn]",
        chinese: "v. 减少,下降,衰退,谢绝",
    },
    {
        english: "decorate",
        phoneticSymbol: "[ˈdekəreɪt]",
        chinese: "vt.装饰…，修饰…",
    },
    {
        english: "decoration",
        phoneticSymbol: "[dekəˈreɪʃ(ə)n]",
        chinese: "n.装饰，修饰",
    },
    {
        english: "decrease",
        phoneticSymbol: "[dɪˈkriːs]",
        chinese: "v.减少，减小，降低",
    },
    {
        english: "deed",
        phoneticSymbol: "[diːd]",
        chinese: "n. 行为；事迹",
    },
    {
        english: "deep",
        phoneticSymbol: "[diːp]",
        chinese: "a. 深 ad. 深；深厚",
    },
    {
        english: "deer",
        phoneticSymbol: "[dɪə(r)]",
        chinese: "n. 鹿",
    },
    {
        english: "defeat",
        phoneticSymbol: "[dɪˈfiːt]",
        chinese: "vt. 击败；战胜",
    },
    {
        english: "defence (美defense)",
        phoneticSymbol: "[di'fens]",
        chinese: "n. & v. 防御；防务",
    },
    {
        english: "defend",
        phoneticSymbol: "[dɪˈfend]",
        chinese: "vt. 防守；保卫",
    },
    {
        english: "degree",
        phoneticSymbol: "[dɪˈɡriː]",
        chinese: "n. 程度；度数；学位",
    },
    {
        english: "delay",
        phoneticSymbol: "[dɪˈleɪ]",
        chinese: "v.& n. 拖延，延误，延迟，延期；耽搁",
    },
    {
        english: "delete",
        phoneticSymbol: "[dɪˈliːt]",
        chinese: "v. 删去",
    },
    {
        english: "deliberately",
        phoneticSymbol: "[dɪˈlɪbərətlɪ]",
        chinese: "ad.故意,蓄意,存心",
    },
    {
        english: "delicate",
        phoneticSymbol: "[ˈdelɪkət]",
        chinese: "a.易损的，易碎的",
    },
    {
        english: "delicious",
        phoneticSymbol: "[dɪˈlɪʃəs]",
        chinese: "a. 美味的，可口的",
    },
    {
        english: "delight",
        phoneticSymbol: "[dɪˈlaɪt]",
        chinese: "n. 快乐；乐事",
    },
    {
        english: "delighted",
        phoneticSymbol: "[di'laitid]",
        chinese: "a. 高兴的，快乐的",
    },
    {
        english: "deliver",
        phoneticSymbol: "[dɪˈlɪvə(r)]",
        chinese: "vt. 投递（信件，邮包等）",
    },
    {
        english: "demand",
        phoneticSymbol: "[dɪˈmɑːnd; (US) dɪˈmænd]",
        chinese: "vt. 要求",
    },
    {
        english: "dentist",
        phoneticSymbol: "[ˈdentɪst]",
        chinese: "n. 牙科医生 ",
    },
    {
        english: "department(缩Dept.)",
        phoneticSymbol: "[dɪˈpɑːtmənt]",
        chinese: "n. 部门；（机关的）司，处；（大学的）系",
    },
    {
        english: "departure",
        phoneticSymbol: "[dɪˈpɑːtʃə(r)]",
        chinese: "n. 离开，启程",
    },
    {
        english: "depend",
        phoneticSymbol: "[dɪˈpend]",
        chinese: "vi. 依靠，依赖，指望；取决于",
    },
    {
        english: "deposit",
        phoneticSymbol: "[dɪˈpɔzɪt]",
        chinese: "v. / n. 订金，押金，放下，放置，储存",
    },
    {
        english: "depth",
        phoneticSymbol: "[depθ]",
        chinese: "n. 深，深度",
    },
    {
        english: "describe",
        phoneticSymbol: "[dɪˈskraɪb]",
        chinese: "vt. 描写，叙述",
    },
    {
        english: "description",
        phoneticSymbol: "[dɪˈskrɪpʃ(ə)n]",
        chinese: "n. 描述，描写",
    },
    {
        english: "desert",
        phoneticSymbol: "[dɪˈzɜːt]",
        chinese: "n. 沙漠 vt. 舍弃； 遗弃",
    },
    {
        english: "deserve",
        phoneticSymbol: "[dɪˈzɜːv]",
        chinese: "v.（不用于进行时态）应得，应受",
    },
    {
        english: "design",
        phoneticSymbol: "[dɪˈzaɪn]",
        chinese: "n.& vt. n. 设计，策划 图案，图样，样式",
    },
    {
        english: "desire",
        phoneticSymbol: "[dɪˈzaɪə(r)]",
        chinese: "vt. & n. 要求；期望",
    },
    {
        english: "desk",
        phoneticSymbol: "[desk]",
        chinese: "n. 书桌，写字台",
    },
    {
        english: "desperate",
        phoneticSymbol: "[ˈdespərət]",
        chinese: "a.（因绝望而）不惜冒险的，不顾一切的，拼命的",
    },
    {
        english: "dessert",
        phoneticSymbol: "[dɪˈzɜːt]",
        chinese: "n. 甜点",
    },
    {
        english: "destination",
        phoneticSymbol: "[destɪˈneɪʃ(ə)n]",
        chinese: "n.目的地，终点",
    },
    {
        english: "destroy",
        phoneticSymbol: "[dɪˈstrɔɪ]",
        chinese: "vt. 破坏，毁坏",
    },
    {
        english: "detective",
        phoneticSymbol: "[dɪˈtektɪv]",
        chinese: "n. 侦探",
    },
    {
        english: "determine",
        phoneticSymbol: "[dɪˈtɜːmɪn]",
        chinese: "vt. 决定；决心",
    },
    {
        english: "develop",
        phoneticSymbol: "[dɪˈveləp]",
        chinese: "v. （使）发展；（使）发达；（使）发育；开发 vt. 冲洗（照片）",
    },
    {
        english: "development",
        phoneticSymbol: "[dɪˈveləpmənt]",
        chinese: "n. 发展，发达，发育，开发",
    },
    {
        english: "devote",
        phoneticSymbol: "[dɪˈvəʊt]",
        chinese: "vt. 把…奉献, 把…专用（于）",
    },
    {
        english: "devotion",
        phoneticSymbol: "[dɪˈvəʊʃ(ə)n]",
        chinese: "n. 奉献，奉献精神",
    },
    {
        english: "diagram",
        phoneticSymbol: "[ˈdaɪəɡræm]",
        chinese: "n. 图表，图样",
    },
    {
        english: "dial",
        phoneticSymbol: "[ˈdaɪ(ə)l]",
        chinese: "vt. 拨（电话号码）",
    },
    {
        english: "dialogue (美 dialog)",
        phoneticSymbol: "[ˈdaɪəlɔɡ; (US) ˈdaɪəlɔːɡ]",
        chinese: "n. 对话",
    },
    {
        english: "diamond",
        phoneticSymbol: "[ˈdaɪəmənd]",
        chinese: "n. 钻石，金刚石；纸牌中的方块",
    },
    {
        english: "diary",
        phoneticSymbol: "[ˈdaɪərɪ]",
        chinese: "n. 日记；日记簿",
    },
    {
        english: "dictation",
        phoneticSymbol: "[dɪkˈteɪʃ(ə)n]",
        chinese: "n. 听写",
    },
    {
        english: "dictionary",
        phoneticSymbol: "[ˈdɪkʃənərɪ; (US) ˈdɪkʃənerɪ]",
        chinese: "n. 词典，字典",
    },
    {
        english: "die",
        phoneticSymbol: "[daɪ]",
        chinese: "v. 死",
    },
    {
        english: "diet",
        phoneticSymbol: "[daɪ]",
        chinese: "n. 饮食",
    },
    {
        english: "differ",
        phoneticSymbol: "[ˈdɪfə(r)]",
        chinese: "v. 相异，有区别",
    },
    {
        english: "difference",
        phoneticSymbol: "[ˈdɪfrəns]",
        chinese: "n. 不同",
    },
    {
        english: "different",
        phoneticSymbol: "[ˈdɪfrənt]",
        chinese: "a. 不同的，有差异的",
    },
    {
        english: "difficult",
        phoneticSymbol: "[ˈdɪfɪkəlt]",
        chinese: "a.难；艰难；不易相处",
    },
    {
        english: "difficulty",
        phoneticSymbol: "[ˈdɪfɪkəltɪ]",
        chinese: "n. 困难，费力",
    },
    {
        english: "dig (dug, dug)",
        phoneticSymbol: "[dɪɡ]",
        chinese: "v. 挖（洞沟）,掘",
    },
    {
        english: "digest",
        phoneticSymbol: "[dɪˈdʒest, daɪˈdʒest]",
        chinese: "v.消化, 领会",
    },
    {
        english: "digital",
        phoneticSymbol: "[ˈdɪdʒɪt(ə)l]",
        chinese: "a. .数字的，数码的",
    },
    {
        english: "dignity",
        phoneticSymbol: "[ˈdɪɡnɪtɪ]",
        chinese: "n. 庄重，庄严，尊严。尊贵，高尚",
    },
    {
        english: "dilemma",
        phoneticSymbol: "[daɪˈlemə]",
        chinese: "n. （进退两难的）窘境，困境",
    },
    {
        english: "dimension",
        phoneticSymbol: "[dɪˈmenʃ(ə)n]",
        chinese: "n.量度，尺寸，面积，程度，范围",
    },
    {
        english: "dinner",
        phoneticSymbol: "[ˈdɪnə(r)]",
        chinese: "n. 正餐，宴会",
    },
    {
        english: "dinosaur",
        phoneticSymbol: "[ˈdaɪnəsɔː(r)]",
        chinese: "n. 恐龙",
    },
    {
        english: "dioxide",
        phoneticSymbol: "[daɪˈɔksaɪd]",
        chinese: "n.二氧化物",
    },
    {
        english: "dip",
        phoneticSymbol: "[dɪp]",
        chinese: "vt. 浸，蘸；把…放入又取出",
    },
    {
        english: "diploma",
        phoneticSymbol: "[dɪˈpləʊmə]",
        chinese: "n.毕业文凭；学位证书",
    },
    {
        english: "direct",
        phoneticSymbol: "[dɪˈrekt, daɪˈrekt]",
        chinese:
            "a. / vt. 直接的；直达的；直截了当的 指挥；指导；监督；管理；指挥（演奏）；导演（电影）",
    },
    {
        english: "direction",
        phoneticSymbol: "[dɪˈrekʃ(ə)n, daɪˈrekʃ(ə)n]",
        chinese: "n. 方向；方位",
    },
    {
        english: "director",
        phoneticSymbol: "[dɪˈrektə(r)]",
        chinese: "n. 所长，处长，主任；董事；导演",
    },
    {
        english: "directory",
        phoneticSymbol: "[dɪˈrektərɪ]",
        chinese: "n. 姓名地址录",
    },
    {
        english: "dirty",
        phoneticSymbol: "[ˈdɜːtɪ]",
        chinese: "a. 脏的",
    },
    {
        english: "disability",
        phoneticSymbol: "[dɪsəˈbɪlɪtɪ]",
        chinese: "n.. 残疾；无能",
    },
    {
        english: "disabled",
        phoneticSymbol: "[dɪsˈeɪb(ə)ld]",
        chinese: "a. 残废的，残疾的",
    },
    {
        english: "disadvantage",
        phoneticSymbol: "[dɪsədˈvɑːntɪdʒ]",
        chinese: "n. 不利条件；弱点",
    },
    {
        english: "disagree",
        phoneticSymbol: "[dɪsəˈɡriː]",
        chinese: "vi. 意见不一致，持不同意见",
    },
    {
        english: "disagreement",
        phoneticSymbol: "[dɪsəˈɡriːmənt]",
        chinese: "n. 意见不一致；相违；争论",
    },
    {
        english: "disappear",
        phoneticSymbol: "[dɪsəˈpɪə(r)]",
        chinese: "vi. 消失",
    },
    {
        english: "disappoint",
        phoneticSymbol: "[dɪsəˈpɔɪnt]",
        chinese: "vt. 使失望",
    },
    {
        english: "disappointed",
        phoneticSymbol: "[disə’pɔintid]",
        chinese: "adj. 失望的;沮丧的，失意的",
    },
    {
        english: "disaster",
        phoneticSymbol: "[dɪˈzɑːstə(r); (US) dɪzˈæstər]",
        chinese: "n. 灾难；祸患",
    },
    {
        english: "discount",
        phoneticSymbol: "[ˈdɪskaʊnt]",
        chinese: "n. 折扣",
    },
    {
        english: "discourage",
        phoneticSymbol: "[dɪˈskʌrɪdʒ]",
        chinese: "vt. （使）气馁；打消（做…的念头）",
    },
    {
        english: "discover",
        phoneticSymbol: "[dɪˈskʌvə(r)]",
        chinese: "vt. 发现",
    },
    {
        english: "discovery",
        phoneticSymbol: "[dɪˈskʌvərɪ]",
        chinese: "n. 发现",
    },
    {
        english: "discrimination",
        phoneticSymbol: "[dɪskrɪmɪˈneɪʃ(ə)n]",
        chinese: "n. 歧视",
    },
    {
        english: "discuss",
        phoneticSymbol: "[dɪsˈkʌs]",
        chinese: "vt. 讨论，议论",
    },
    {
        english: "discussion",
        phoneticSymbol: "[dɪsˈkʌʃ(ə)n]",
        chinese: "n. 讨论，辩论",
    },
    {
        english: "disease",
        phoneticSymbol: "[dɪˈziːz]",
        chinese: "n. 病，疾病",
    },
    {
        english: "disgusting",
        phoneticSymbol: "[dɪsˈɡʌstɪŋ]",
        chinese: "a.极糟的，令人不快的，令人厌恶的",
    },
    {
        english: "dish",
        phoneticSymbol: "[dɪʃ]",
        chinese: "n. 盘，碟；盘装菜；盘形物",
    },
    {
        english: "disk =disc",
        phoneticSymbol: "[dɪsk]",
        chinese: "n. 磁盘",
    },
    {
        english: "dislike",
        phoneticSymbol: "[dɪsˈlaɪk]",
        chinese: "vt. 不喜爱；厌恶",
    },
    {
        english: "dismiss",
        phoneticSymbol: "[dɪsˈmɪs]",
        chinese: "vt. 让……离开；遣散；解散；解雇",
    },
    {
        english: "distance",
        phoneticSymbol: "[ˈdɪstəns]",
        chinese: "n. 距离",
    },
    {
        english: "distant",
        phoneticSymbol: "[ˈdɪst(ə)nt]",
        chinese: "a. 远的，遥远的",
    },
    {
        english: "distinction",
        phoneticSymbol: "[dɪˈstɪŋkʃ(ə)n]",
        chinese: "n.差别,区别,优秀,卓越",
    },
    {
        english: "distinguish",
        phoneticSymbol: "[dɪˈstɪŋɡwɪʃ]",
        chinese: "v. 区分，辨别，分清",
    },
    {
        english: "distribute",
        phoneticSymbol: "[dɪˈstrɪbjuːt]",
        chinese: "v. 分发，分配",
    },
    {
        english: "district",
        phoneticSymbol: "[ˈdɪstrɪkt]",
        chinese: "n. 区；地区；区域",
    },
    {
        english: "disturb",
        phoneticSymbol: "[dɪˈstɜːb]",
        chinese: "vt. 扰乱；打扰",
    },
    {
        english: "disturbing",
        phoneticSymbol: "[dɪˈstɜːbɪŋ]",
        chinese: "a. 令人不安的，引起恐慌的",
    },
    {
        english: "dive",
        phoneticSymbol: "[daɪv]",
        chinese: "vi. 跳水",
    },
    {
        english: "diverse",
        phoneticSymbol: "[daɪˈvɜːs]",
        chinese: "v. 不同的，多种多样，形形色色的",
    },
    {
        english: "divide",
        phoneticSymbol: "[dɪˈvaɪd]",
        chinese: "vt. 分，划分",
    },
    {
        english: "division",
        phoneticSymbol: "[dɪˈvɪʒ(ə)n]",
        chinese: "n. （算术用语）除",
    },
    {
        english: "divorce",
        phoneticSymbol: "[dɪˈvɔːs]",
        chinese: "v. 离婚",
    },
    {
        english: "dizzy",
        phoneticSymbol: "[ˈdɪzɪ]",
        chinese: "a. 头眩目晕的",
    },
    {
        english: "do (did, done)  don't=do not",
        phoneticSymbol: "[dʊ, duː]",
        chinese:
            "v. & aux. 做，干（用以构成疑问句及否定句。第三人称单数现在时用does） 不做，不干",
    },
    {
        english: "doctor",
        phoneticSymbol: "[ˈdɔktə(r)]",
        chinese: "n. 医生，大夫；博士",
    },
    {
        english: "document",
        phoneticSymbol: "[ˈdɔkjʊmənt]",
        chinese: "n. 文件；文献",
    },
    {
        english: "dog",
        phoneticSymbol: "[dɔɡ; (US) dɔːɡ]",
        chinese: "n. 狗",
    },
    {
        english: "doll",
        phoneticSymbol: "[dɔl; (US) dɔːl]",
        chinese: "n. 玩偶，玩具娃娃",
    },
    {
        english: "dollar",
        phoneticSymbol: "[dɔl; (US) dɔːl]",
        chinese: "n. 元（美国、加拿大、澳大利亚等国货币单位）",
    },
    {
        english: "donate",
        phoneticSymbol: "[dəʊˈneɪt]",
        chinese:
            "vt. vi. （尤指向慈善机构）捐赠;献（血）;捐（血）;捐献（器官）",
    },
    {
        english: "door",
        phoneticSymbol: "[dɔː(r)]",
        chinese: "n. 门",
    },
    {
        english: "dormitory",
        phoneticSymbol: "[ˈdɔːmɪtərɪ; (US) ˈdɔːrmɪtɔːrɪ]",
        chinese: "n. 学生宿舍（缩写式dorm）",
    },
    {
        english: "dot",
        phoneticSymbol: "[dɔt]",
        chinese: "n. 点，小点，圆点",
    },
    {
        english: "double",
        phoneticSymbol: "[ˈdʌb(ə)l]",
        chinese: "a. 两倍.双的 n. 两个.双",
    },
    {
        english: "doubt",
        phoneticSymbol: "[daʊt]",
        chinese: "n.& v. 怀疑，疑惑",
    },
    {
        english: "down",
        phoneticSymbol: "[daʊn]",
        chinese: "prep. 沿着，沿…而下 ad. 向下",
    },
    {
        english: "download",
        phoneticSymbol: "['daunləud]",
        chinese: "n.& v. 下载",
    },
    {
        english: "downstairs",
        phoneticSymbol: "[ˈdaʊnsteəz]",
        chinese: "ad. 在楼下；到楼下",
    },
    {
        english: "downtown",
        phoneticSymbol: "[ˈdaʊntaʊn]",
        chinese:
            "ad. 往或在城市的商业区（或中心区、闹市区） n. 城市的商业区，中心区，闹市区 a.城市的商业区的，中心区的，闹市区的",
    },
    {
        english: "dozen",
        phoneticSymbol: "[ˈdaʊnwəd]",
        chinese: "n. 十二个；几十，许多",
    },
    {
        english: "draft",
        phoneticSymbol: "[drɑːft; (US) dræft]",
        chinese: "n. / v. 草稿，草案，起草，草拟",
    },
    {
        english: "drag",
        phoneticSymbol: "[dræɡ]",
        chinese: "v. 拖；拽",
    },
    {
        english: "draw (drew, drawn)",
        phoneticSymbol: "[drɔː]",
        chinese: "v. 绘画；绘制；拉，拖；提取（金钱）",
    },
    {
        english: "drawback",
        phoneticSymbol: "[ˈdrɔːbæk]",
        chinese: "n.缺点，不利条件",
    },
    {
        english: "drawer",
        phoneticSymbol: "[ˈdrɔːə(r)]",
        chinese: "n. 抽屉",
    },
    {
        english: "drawing",
        phoneticSymbol: "[ˈdrɔːɪŋ]",
        chinese: "n. 图画，素描,绘画",
    },
    {
        english: "dream (dreamt, dreamt 或--ed, --ed)",
        phoneticSymbol: "[driːm]",
        chinese: "n.& vt. 梦，梦想",
    },
    {
        english: "dress",
        phoneticSymbol: "[dres]",
        chinese: "n. 女服，连衣裙；(统指)服装；童装 v. 穿衣；穿着",
    },
    {
        english: "drill",
        phoneticSymbol: "[drɪl]",
        chinese: "n. 钻头；（反复的）训练 vt. 钻(孔)， 在…上钻孔；重复训练",
    },
    {
        english: "drink",
        phoneticSymbol: "[drɪŋk]",
        chinese: "n. 饮料；喝酒 ",
    },
    {
        english: "drink(drank,drunk)",
        phoneticSymbol: "[drɪŋk]",
        chinese: "v. 喝，饮",
    },
    {
        english: "drive(drove,driven)",
        phoneticSymbol: "[draɪv]",
        chinese: "v. 驾驶，开（车）；驱赶",
    },
    {
        english: "driver",
        phoneticSymbol: "[ˈdraɪvə(r)]",
        chinese: "n. 司机，驾驶员",
    },
    {
        english: "drop",
        phoneticSymbol: "[drɔp]",
        chinese: "n.滴 v.掉下.落下.投递.放弃",
    },
    {
        english: "drown",
        phoneticSymbol: "[draʊn]",
        chinese: "vi. 溺死；淹没",
    },
    {
        english: "drug",
        phoneticSymbol: "[drʌɡ]",
        chinese: "n. 药，药物；毒品",
    },
    {
        english: "drum",
        phoneticSymbol: "[drʌm]",
        chinese: "n. 鼓",
    },
    {
        english: "drunk",
        phoneticSymbol: "[drʌŋk]",
        chinese: "a. 醉的",
    },
    {
        english: "dry",
        phoneticSymbol: "[draɪ]",
        chinese: "v. 使…干；弄干；擦干 a. 干的；干燥的",
    },
    {
        english: "duck",
        phoneticSymbol: "[dʌk]",
        chinese: "n. 鸭子",
    },
    {
        english: "due",
        phoneticSymbol: "[djuː; (US) duː]",
        chinese: "a. 预期的；约定的",
    },
    {
        english: "dull",
        phoneticSymbol: "[dʌl]",
        chinese: "a. 阴暗的；单调无味",
    },
    {
        english: "dumpling",
        phoneticSymbol: "[ˈdʌmplɪŋ]",
        chinese: "n. 饺子",
    },
    {
        english: "during",
        phoneticSymbol: "[ˈdjʊərɪŋ; (US) ˈdʊərɪŋ]",
        chinese: "prep. 在…期间；在…过程中",
    },
    {
        english: "dusk",
        phoneticSymbol: "[dʌsk]",
        chinese: "n. 黄昏",
    },
    {
        english: "dust",
        phoneticSymbol: "[dʌst]",
        chinese: "n. 灰尘，尘土",
    },
    {
        english: "dustbin",
        phoneticSymbol: "[ˈdʌstbɪn]",
        chinese: "n. 垃圾箱",
    },
    {
        english: "dusty",
        phoneticSymbol: "[ˈdʌstɪ]",
        chinese: "a. 尘土般的，尘土多的",
    },
    {
        english: "duty",
        phoneticSymbol: "[ˈdjuːtɪ; (US) ˈduːtɪ]",
        chinese: "n. 责任，义务",
    },
    {
        english: "DVD",
        phoneticSymbol: "['di:'vi:'di:]",
        chinese: "数码影碟(digital versatile disk)",
    },
    {
        english: "dynamic",
        phoneticSymbol: "[daɪˈnæmɪk]",
        chinese: "a.充满活力,精力充沛的",
    },
    {
        english: "dynasty",
        phoneticSymbol: "[ˈdɪnəstɪ; (US) ˈdaɪnəstɪ]",
        chinese: "n.王朝，朝代",
    },
    {
        english: "each",
        phoneticSymbol: "[iːtʃ]",
        chinese: "a.& pron.每人.每个.每件",
    },
    {
        english: "eager",
        phoneticSymbol: "[ˈiːɡə(r)]",
        chinese: "a. 渴望的，热切的",
    },
    {
        english: "eagle",
        phoneticSymbol: "[ˈiːɡ(ə)l]",
        chinese: "n. 鹰",
    },
    {
        english: "ear",
        phoneticSymbol: "[ɪə(r)]",
        chinese: "n.耳朵.耳状物；听力，听觉",
    },
    {
        english: "early",
        phoneticSymbol: "[ɜːlɪ]",
        chinese: "a. 早的 ad. 早地",
    },
    {
        english: "earn",
        phoneticSymbol: "[ɜːn]",
        chinese: "vt. 挣得，赚得",
    },
    {
        english: "earth",
        phoneticSymbol: "[ɜːθ]",
        chinese: "n. 地球；土，泥；大地",
    },
    {
        english: "earthquake",
        phoneticSymbol: "[ˈɜːθkweɪk]",
        chinese: "n. 地震",
    },
    {
        english: "east",
        phoneticSymbol: "[iːst]",
        chinese:
            "a. 东方；东部的；朝东的；从东方来 ad. 在东方；向东方；从东方 n. 东，东方；东部",
    },
    {
        english: "Easter",
        phoneticSymbol: "[ˈiːstə(r)]",
        chinese: "n. 复活节",
    },
    {
        english: "eastern",
        phoneticSymbol: "[ˈiːst(ə)n]",
        chinese: "a. 东方的；东部的",
    },
    {
        english: "easy",
        phoneticSymbol: "[ˈiːzɪ]",
        chinese: "a. 容易的，不费力的",
    },
    {
        english: "eat (ate, eaten)",
        phoneticSymbol: "[iːt]",
        chinese: "v. 吃",
    },
    {
        english: "ecology",
        phoneticSymbol: "[ɪˈkɔlədʒɪ]",
        chinese: "n. 生态，生态学",
    },
    {
        english: "edge",
        phoneticSymbol: "[edʒ]",
        chinese: "n. 边缘",
    },
    {
        english: "edition",
        phoneticSymbol: "[ɪˈdɪʃ(ə)n]",
        chinese: "n.（发行物的）版，版（本）",
    },
    {
        english: "editor",
        phoneticSymbol: "[ˈedɪtə(r)]",
        chinese: "n. 编辑",
    },
    {
        english: "educate",
        phoneticSymbol: "[ˈedjʊkeɪt]",
        chinese: "vt. 教育，培养",
    },
    {
        english: "educator",
        phoneticSymbol: "['edju:keitə(r)]",
        chinese: "n. 教育家",
    },
    {
        english: "education",
        phoneticSymbol: "[edjʊˈkeɪʃ(ə)n]",
        chinese: "n. 教育，培养",
    },
    {
        english: "effect",
        phoneticSymbol: "[ɪˈfekt]",
        chinese: "n. 效果；作用",
    },
    {
        english: "effort",
        phoneticSymbol: "[ˈefət]",
        chinese: "n. 努力，艰难的尝试",
    },
    {
        english: "egg",
        phoneticSymbol: "[eɡ]",
        chinese: "n. 蛋；卵",
    },
    {
        english: "eggplant",
        phoneticSymbol: "[ˈeɡplɑːnt]",
        chinese: "n. 茄子",
    },
    {
        english: "either",
        phoneticSymbol: "[ˈaɪðə(r)]",
        chinese: "a. 两方任一方的；二者之一 conj. 二者之一；要么……",
    },
    {
        english: "elder",
        phoneticSymbol: "[ˈeldə(r)]",
        chinese: "n. 长者；前辈",
    },
    {
        english: "elect",
        phoneticSymbol: "[ɪˈlekt]",
        chinese: "vt. （投票）选举",
    },
    {
        english: "electric",
        phoneticSymbol: "[ɪˈlektrɪk]",
        chinese: "a. 电的",
    },
    {
        english: "electrical",
        phoneticSymbol: "[ɪˈlektrɪk(ə)l]",
        chinese: "a. 电的；电器的",
    },
    {
        english: "electricity",
        phoneticSymbol: "[ɪlekˈtrɪsɪtɪ]",
        chinese: "n. 电；电流",
    },
    {
        english: "electronic",
        phoneticSymbol: "[ɪlekˈtrɔnɪk]",
        chinese: "a. 电子的",
    },
    {
        english: "elegant",
        phoneticSymbol: "[ˈelɪɡənt]",
        chinese: "a.文雅的,漂亮的,精美的",
    },
    {
        english: "elephant",
        phoneticSymbol: "[ˈelɪfənt]",
        chinese: "n. 象",
    },
    {
        english: "else",
        phoneticSymbol: "[els]",
        chinese: "ad. 别的，其他的",
    },
    {
        english: "e-mail/e",
        phoneticSymbol: "[iː- meɪl]",
        chinese: "n. 电子邮件",
    },
    {
        english: "embarrass",
        phoneticSymbol: "[ɪmˈbærəs]",
        chinese: "v.使窘迫，尴尬",
    },
    {
        english: "embassy",
        phoneticSymbol: "[ˈembəsɪ]",
        chinese: "n. 大使馆",
    },
    {
        english: "emergency",
        phoneticSymbol: "[ɪˈmɜːdʒənsɪ]",
        chinese: "n.紧急情况或状态",
    },
    {
        english: "emperor",
        phoneticSymbol: "[ˈempərə(r)]",
        chinese: "n. 皇帝",
    },
    {
        english: "employ",
        phoneticSymbol: "[ɪmˈplɔɪ]",
        chinese: "vt. 雇佣",
    },
    {
        english: "empty",
        phoneticSymbol: "[ˈemptɪ]",
        chinese: "a. 空的",
    },
    {
        english: "encourage",
        phoneticSymbol: "[ɪnˈkʌrɪdʒ]",
        chinese: "vt. 鼓励",
    },
    {
        english: "encouragement",
        phoneticSymbol: "[ɪnˈkʌrɪdʒmənt]",
        chinese: "n. 鼓励",
    },
    {
        english: "end",
        phoneticSymbol: "[end]",
        chinese: "n. 末尾；终点；结束 v. 结束，终止",
    },
    {
        english: "ending",
        phoneticSymbol: "[ˈendɪŋ]",
        chinese: "n. 结局；结尾，最后",
    },
    {
        english: "endless",
        phoneticSymbol: "[ˈendlɪs]",
        chinese: "a. 无止境的； 没完的",
    },
    {
        english: "enemy",
        phoneticSymbol: "[ˈenɪmɪ]",
        chinese: "n. 敌人；敌军",
    },
    {
        english: "energetic",
        phoneticSymbol: "[enəˈdʒetɪk]",
        chinese: "a. 精力旺盛的",
    },
    {
        english: "energy",
        phoneticSymbol: "[ˈenədʒɪ]",
        chinese: "y n. 精力，能量",
    },
    {
        english: "engine",
        phoneticSymbol: "[ˈendʒɪn]",
        chinese: "n. 发动机，引擎",
    },
    {
        english: "engineer",
        phoneticSymbol: "[endʒɪˈnɪə(r)]",
        chinese: "n. 工程师；技师",
    },
    {
        english: "enjoy",
        phoneticSymbol: "[ɪnˈdʒɔɪ]",
        chinese: "vt.欣赏；享受乐趣；喜欢",
    },
    {
        english: "enjoyable",
        phoneticSymbol: "[ɪnˈdʒɔɪəb(ə)l]",
        chinese: "a. 愉快的；有趣的",
    },
    {
        english: "enlarge",
        phoneticSymbol: "[ɪnˈlɑːdʒ]",
        chinese: "vt. 扩大",
    },
    {
        english: "enough",
        phoneticSymbol: "[ɪˈnʌf]",
        chinese: "n. 足够；充足 a. 足够；充分的 ad. 足够地；充分地",
    },
    {
        english: "enquiry",
        phoneticSymbol: "[ɪnˈkwaɪərɪ]",
        chinese: "n. 询问",
    },
    {
        english: "enter",
        phoneticSymbol: "[ˈentə(r)]",
        chinese: "vt. 进入",
    },
    {
        english: "enterprise",
        phoneticSymbol: "[ˈentəpraɪz]",
        chinese: "n.公司，企，事业单位",
    },
    {
        english: "entertainment",
        phoneticSymbol: "[entəˈteɪnmənt]",
        chinese: "n. 娱乐",
    },
    {
        english: "enthusiastic",
        phoneticSymbol: "[ɪnθjuːzɪˈæstɪk]",
        chinese: "a.热情的，热心的",
    },
    {
        english: "entire",
        phoneticSymbol: "[ɪnˈtaɪə(r)]",
        chinese: "a. 整个的，全部的",
    },
    {
        english: "entrance",
        phoneticSymbol: "[ˈentrəns]",
        chinese: "n. 入口；入场；进入的权利;入学许可",
    },
    {
        english: "entry",
        phoneticSymbol: "[ˈentrɪ]",
        chinese: "n. 进入",
    },
    {
        english: "envelope",
        phoneticSymbol: "[ˈenvələʊp]",
        chinese: "n. 信封",
    },
    {
        english: "environment",
        phoneticSymbol: "[ɪnˈvaɪərənmənt]",
        chinese: "n.环境",
    },
    {
        english: "envy",
        phoneticSymbol: "[ˈenvɪ]",
        chinese: "vt.& n. 忌妒； 羡慕",
    },
    {
        english: "equal",
        phoneticSymbol: "[ˈiːkw(ə)l]",
        chinese: "a.平等的 vt.等于，使等于",
    },
    {
        english: "equality",
        phoneticSymbol: "[iːˈkwɔlətɪ]",
        chinese: "n. 平等",
    },
    {
        english: "equip",
        phoneticSymbol: "[ɪˈkwɪp]",
        chinese: "vt. 提供设备；装备；配备",
    },
    {
        english: "equipment",
        phoneticSymbol: "[ɪˈkwɪpmənt]",
        chinese: "n. 装备，设备",
    },
    {
        english: "eraser",
        phoneticSymbol: "[ɪˈreɪzə(r)]",
        chinese: "n. 橡皮擦；黑板擦",
    },
    {
        english: "error",
        phoneticSymbol: "[ˈerə(r)]",
        chinese: "n. 错误；差错",
    },
    {
        english: "erupt",
        phoneticSymbol: "[ɪˈrʌpt]",
        chinese: "v.（火山）爆发，喷发",
    },
    {
        english: "escape",
        phoneticSymbol: "[ɪˈskeɪp]",
        chinese: "n.& vi. 逃跑；逃脱",
    },
    {
        english: "especially",
        phoneticSymbol: "[ɪˈspeʃəlɪ]",
        chinese: "ad. 特别，尤其",
    },
    {
        english: "essay",
        phoneticSymbol: "[ˈeseɪ]",
        chinese: "n. 散文；文章；随笔",
    },
    {
        english: "Europe*",
        phoneticSymbol: "[ˈjʊərəp]",
        chinese: "n. 欧洲",
    },
    {
        english: "European",
        phoneticSymbol: "[jʊərəˈpiːən]",
        chinese: "a. 欧洲的，欧洲人的 n. 欧洲人",
    },
    {
        english: "evaluate",
        phoneticSymbol: "[ɪˈvæljʊeɪt]",
        chinese: "v.估值，评价，评估",
    },
    {
        english: "even",
        phoneticSymbol: "[ˈiːv(ə)n]",
        chinese: "ad. 甚至，连（…都）；更",
    },
    {
        english: "evening",
        phoneticSymbol: "[ˈiːvnɪŋ]",
        chinese: "n. 傍晚，晚上",
    },
    {
        english: "event",
        phoneticSymbol: "[ ɪ'vent]",
        chinese: "n. 事件，大事",
    },
    {
        english: "eventually",
        phoneticSymbol: "[ɪˈventjʊəlɪ]",
        chinese: "ad.最终地",
    },
    {
        english: "ever",
        phoneticSymbol: "[ˈevə(r)]",
        chinese: "ad. 曾经；无论何时",
    },
    {
        english: "every",
        phoneticSymbol: "[ˈevrɪ]",
        chinese: "a. 每一，每个的",
    },
    {
        english: "everyday",
        phoneticSymbol: "[ˈevrɪbɔdɪ]",
        chinese: "a. 每日的；日常的",
    },
    {
        english: "everyone",
        phoneticSymbol: "[ˈevrɪwʌn]",
        chinese: "pron. 每人，人人",
    },
    {
        english: "everything",
        phoneticSymbol: "[ˈevrɪθɪŋ]",
        chinese: "pron. 每件事，事事",
    },
    {
        english: "everywhere",
        phoneticSymbol: "[ˈevrɪweə(r)]",
        chinese: "ad. 到处",
    },
    {
        english: "evidence",
        phoneticSymbol: "[ˈevɪdəns]",
        chinese: "n. 证据，证明",
    },
    {
        english: "evident",
        phoneticSymbol: "[ˈevɪdənt]",
        chinese: "a.清楚的，显而易见的",
    },
    {
        english: "evolution",
        phoneticSymbol: "[iːvəˈluːʃ(ə)n; (US) ev-]",
        chinese: "n. 进化，演变",
    },
    {
        english: "exact",
        phoneticSymbol: "[ɪɡˈzækt]",
        chinese: "a. 精确的；确切的",
    },
    {
        english: "exam = examination",
        phoneticSymbol: "[ɪɡzæmɪˈneɪʃ(ə)n]",
        chinese: "n. 考试，测试；检查；审查",
    },
    {
        english: "examine",
        phoneticSymbol: "[ɪɡˈzæmɪn]",
        chinese: "vt. 检查；诊察",
    },
    {
        english: "example",
        phoneticSymbol: "[ɪɡˈzɑːmp(ə)l; (US) ɪɡˈzæmpl]",
        chinese: "n. 例子；榜样",
    },
    {
        english: "excellent",
        phoneticSymbol: "[ˈeksələnt]",
        chinese: "a. 极好的，优秀的",
    },
    {
        english: "except",
        phoneticSymbol: "[ɪkˈsept]",
        chinese: "prep. 除……之外",
    },
    {
        english: "exchange",
        phoneticSymbol: "[ɪksˈtʃeɪndʒ]",
        chinese: "n. 交换，掉换；交流",
    },
    {
        english: "excite",
        phoneticSymbol: "[ɪkˈsaɪt]",
        chinese: "vt. 使兴奋，使激动",
    },
    {
        english: "excuse",
        phoneticSymbol: "[ɪkˈskjuːz]",
        chinese: "n.借口.辩解 vt.原谅.宽恕",
    },
    {
        english: "exercise",
        phoneticSymbol: "[ˈeksəsaɪz]",
        chinese: "n. 锻炼，做操；练习，习题 vi. 锻炼",
    },
    {
        english: "exhibition",
        phoneticSymbol: "[eksɪˈbɪʃ(ə)n]",
        chinese: "n. 展览；展览会",
    },
    {
        english: "exist",
        phoneticSymbol: "[ɪg'zɪst]",
        chinese: "vi. 存在",
    },
    {
        english: "existence",
        phoneticSymbol: "[ɪɡˈzɪst(ə)ns]",
        chinese: "n.存在；生存；存在物",
    },
    {
        english: "exit",
        phoneticSymbol: "[ˈeksɪt]",
        chinese: "n. 出口，太平门",
    },
    {
        english: "expand",
        phoneticSymbol: "[ɪkˈspænd]",
        chinese: "v.扩大，增加，扩展",
    },
    {
        english: "expect",
        phoneticSymbol: "[ɪkˈspekt]",
        chinese: "vt. 预料；盼望；认为",
    },
    {
        english: "expectation",
        phoneticSymbol: "[ekspekˈteɪʃ(ə)n]",
        chinese: "n. 预料；期望",
    },
    {
        english: "expense",
        phoneticSymbol: "[ɪkˈspens]",
        chinese: "n. 消费； 支出",
    },
    {
        english: "expensive",
        phoneticSymbol: "[ɪkˈspensɪv]",
        chinese: "a. 昂贵的",
    },
    {
        english: "experience",
        phoneticSymbol: "[ɪkˈspɪərɪəns]",
        chinese: "n. 经验；经历",
    },
    {
        english: "experiment",
        phoneticSymbol: "[ɪkˈsperɪmənt]",
        chinese: "n. 实验",
    },
    {
        english: "expert",
        phoneticSymbol: "[ˈekspɜːt]",
        chinese: "n. 专家，能手",
    },
    {
        english: "explain",
        phoneticSymbol: "[ɪksˈpleɪn]",
        chinese: "vt. 解释，说明",
    },
    {
        english: "explanation",
        phoneticSymbol: "[ekspləˈneɪʃ(ə)n]",
        chinese: "n. 解释，说明",
    },
    {
        english: "explicit",
        phoneticSymbol: "[ɪkˈsplɪsɪt]",
        chinese: "a.清楚明白,易于理解的",
    },
    {
        english: "explode",
        phoneticSymbol: "[ɪkˈspləʊd]",
        chinese: "v. （使）爆炸",
    },
    {
        english: "explore",
        phoneticSymbol: "[ɪkˈsplɔː(r)]",
        chinese: "v. 探险",
    },
    {
        english: "export",
        phoneticSymbol: "[ɪkˈspɔːt]",
        chinese: "n. / v.出口，输出",
    },
    {
        english: "expose",
        phoneticSymbol: "[ɪkˈspəʊz; (US) ekspəˈzeɪ]",
        chinese: "vt. 揭露",
    },
    {
        english: "express",
        phoneticSymbol: "[ɪkˈspres]",
        chinese: "vt. 表达；表示；表情 n. 快车，特快专递",
    },
    {
        english: "expression",
        phoneticSymbol: "[ɪkˈspreʃ(ə)n]",
        chinese: "n. 表达；词句；表示，说法；表情",
    },
    {
        english: "extension",
        phoneticSymbol: "[ɪkˈstenʃ(ə)n]",
        chinese: "n.扩大，延伸",
    },
    {
        english: "extra",
        phoneticSymbol: "[ˈekstrə]",
        chinese: "a. 额外的，外加的",
    },
    {
        english: "extraordinary",
        phoneticSymbol: "[ɪkˈstrɔːdɪnərɪ; (US) -dənerɪ]",
        chinese: "a. 离奇的；使人惊奇的",
    },
    {
        english: "extreme",
        phoneticSymbol: "[ɪkˈstriːm]",
        chinese: "a. 极其的，非常的",
    },
    {
        english: "extremely",
        phoneticSymbol: "[ɪkˈstriːmlɪ]",
        chinese: "ad. 极其，非常",
    },
    {
        english: "eye",
        phoneticSymbol: "[aɪ]",
        chinese: "n. 眼睛",
    },
    {
        english: "eyesight",
        phoneticSymbol: "[ˈaɪsaɪt]",
        chinese: "n. 视力；视觉",
    },
    {
        english: "face",
        phoneticSymbol: "[feɪs]",
        chinese: "n. 脸 vt. 面向；面对",
    },
    {
        english: "facial",
        phoneticSymbol: "[ˈfeɪʃ(ə)l]",
        chinese: "a. 面部用的",
    },
    {
        english: "fact",
        phoneticSymbol: "[fækt]",
        chinese: "n. 事实，现实",
    },
    {
        english: "fade",
        phoneticSymbol: "[feɪd]",
        chinese: "vi. 褪色，（颜色）消退",
    },
    {
        english: "fail",
        phoneticSymbol: "[feɪl]",
        chinese: "v. 失败；不及格；衰退",
    },
    {
        english: "failure",
        phoneticSymbol: "[ˈfeɪljə(r)]",
        chinese: "n. 失败",
    },
    {
        english: "fair",
        phoneticSymbol: "[feə(r)]",
        chinese:
            "a. 公平的，合理的 a. (肤色)白皙的； （人）白肤金发的 n. 集市；庙会；展览会",
    },
    {
        english: "faith",
        phoneticSymbol: "[feɪθ]",
        chinese: "n. 信仰；信念",
    },
    {
        english: "fall",
        phoneticSymbol: "[fɔːl]",
        chinese: "n. （美）秋季",
    },
    {
        english: "fall",
        phoneticSymbol: "[fɔːl]",
        chinese: "(fell, fallen) vi. 落（下），降落；倒",
    },
    {
        english: "false",
        phoneticSymbol: "[fɔːls]",
        chinese: "a. 不正确的；假的",
    },
    {
        english: "familiar",
        phoneticSymbol: "[fəˈmɪlɪə(r)]",
        chinese: "a. 熟悉的",
    },
    {
        english: "family",
        phoneticSymbol: "[ˈfæmɪlɪ]",
        chinese: "n. 家庭；家族；子女",
    },
    {
        english: "famous",
        phoneticSymbol: "[ˈfeɪməs]",
        chinese: "a. 著名的",
    },
    {
        english: "fan",
        phoneticSymbol: "[fæn]",
        chinese: "n. （电影、运动等的）迷；热心的爱好者（支持者） n. 风扇",
    },
    {
        english: "fancy",
        phoneticSymbol: "[ˈfænsɪ]",
        chinese: "a.花式；装饰的；奇特的",
    },
    {
        english: "fantasy",
        phoneticSymbol: "[ˈfæntəsɪ]",
        chinese: "n 幻想，梦想",
    },
    {
        english: "far",
        phoneticSymbol: "[fɑː(r)]",
        chinese: "(farther, farthest 或further , furthest) a.& ad. 远的；远地",
    },
    {
        english: "fare",
        phoneticSymbol: "[feə(r)]",
        chinese: "n.（车或船的）费用，票（价）",
    },
    {
        english: "farm",
        phoneticSymbol: "[fɑːm]",
        chinese: "n. 农场；农庄",
    },
    {
        english: "farmer",
        phoneticSymbol: "[ˈfɑːmə(r)]",
        chinese: "n. 农民",
    },
    {
        english: "fast",
        phoneticSymbol: "[fɑːst; (US) fæst]",
        chinese: "a. 快的，迅速的；紧密的 ad. 快地，迅速地；紧密地",
    },
    {
        english: "fasten",
        phoneticSymbol: "[ˈfɑːs(ə)n; (US) fæsn]",
        chinese: "vt. 扎牢；扣住",
    },
    {
        english: "fat",
        phoneticSymbol: "[fæt]",
        chinese: "n. 脂肪 a. 胖的；肥的",
    },
    {
        english: "father",
        phoneticSymbol: "[ˈfɑːðə(r)]",
        chinese: "n. 父亲",
    },
    {
        english: "fault",
        phoneticSymbol: "[fɔːlt]",
        chinese: "n. 缺点，毛病",
    },
    {
        english: "favour",
        phoneticSymbol: "['feivə]",
        chinese: "(美favor) n. 恩惠；好意；帮助",
    },
    {
        english: "favourite",
        phoneticSymbol: "['feivərit]",
        chinese: "(美 favorite) a. 喜爱的 n. 特别喜爱的人（或物）",
    },
    {
        english: "fax",
        phoneticSymbol: "[fæks]",
        chinese: "n. 传真",
    },
    {
        english: "fear",
        phoneticSymbol: "[fɪə(r)]",
        chinese: "n. 害怕；恐惧； 担忧",
    },
    {
        english: "feast",
        phoneticSymbol: "[fiːst]",
        chinese: "n.盛宴，宴会，（宗教的）节日",
    },
    {
        english: "feather",
        phoneticSymbol: "[ˈfeðə(r)]",
        chinese: "n. 羽毛",
    },
    {
        english: "February",
        phoneticSymbol: "['februəri]",
        chinese: "n. 2月",
    },
    {
        english: "federa",
        phoneticSymbol: "[ˈfedər(ə)l]",
        chinese: "l a.中央的（政府）联邦的",
    },
    {
        english: "fee",
        phoneticSymbol: "[fiː]",
        chinese: "n. 费，费用",
    },
    {
        english: "feed (fed, fed)",
        phoneticSymbol: "[fiːd]",
        chinese: "vt. 喂（养）；饲（养）",
    },
    {
        english: "feel (felt, felt)",
        phoneticSymbol: "[fiːl]",
        chinese: "v.& link 感觉，觉得；摸，触",
    },
    {
        english: "feeling",
        phoneticSymbol: "[ˈfiːlɪŋ]",
        chinese: "n. 感情；感觉",
    },
    {
        english: "fellow",
        phoneticSymbol: "[ˈfeləʊ]",
        chinese: "n. 同伴；伙伴",
    },
    {
        english: "female",
        phoneticSymbol: "[ˈfiːmeɪl]",
        chinese: "a. 女的；女性的；雌性的",
    },
    {
        english: "fence",
        phoneticSymbol: "[fens]",
        chinese: "n. 栅栏；围栏；篱笆",
    },
    {
        english: "ferry",
        phoneticSymbol: "[ˈferɪ]",
        chinese: "n. 渡船",
    },
    {
        english: "festival",
        phoneticSymbol: "[ˈfestɪvəl]",
        chinese: "a. 节日的，喜庆的",
    },
    {
        english: "fetch",
        phoneticSymbol: "[fetʃ]",
        chinese: "vt. （去）取（物）来，（去）带（人）来",
    },
    {
        english: "fever",
        phoneticSymbol: "[ˈfiːvə(r)]",
        chinese: "n. 发烧；发热",
    },
    {
        english: "few",
        phoneticSymbol: "[fjuː]",
        chinese: "pron. 不多；少数 不多的；少数的",
    },
    {
        english: "fibre",
        phoneticSymbol: "['faibə]",
        chinese: "(美fiber) n. 纤维质",
    },
    {
        english: "fiction",
        phoneticSymbol: "[ˈfɪkʃ(ə)n]",
        chinese: "n.小说，虚构的事",
    },
    {
        english: "field",
        phoneticSymbol: "[fiːld]",
        chinese: "n. 田地；牧场；场地",
    },
    {
        english: "fight",
        phoneticSymbol: "[faɪt]",
        chinese: "n. 打仗（架），争论",
    },
    {
        english: "fight",
        phoneticSymbol: "[faɪt]",
        chinese: "(fought, fought) n. 打仗（架），与……打仗（架）",
    },
    {
        english: "figure",
        phoneticSymbol: "[ˈfɪɡə(r); (US) ˈfɪgjər]",
        chinese:
            "n.数字；数目；图；图形；（人的）身型；人物；（绘画、雕刻）人物像 vt.（美口语）认为，判断.（在心里）想像，描绘",
    },
    {
        english: "file",
        phoneticSymbol: "[faɪl]",
        chinese: "n.公文柜；档案(计算机)文档",
    },
    {
        english: "fill",
        phoneticSymbol: "[fɪl]",
        chinese: "vt. 填空，装满",
    },
    {
        english: "film",
        phoneticSymbol: "[fɪlm]",
        chinese: "n. 电影；影片；胶卷 vt. 拍摄，把……拍成电影",
    },
    {
        english: "final",
        phoneticSymbol: "[ˈfaɪn(ə)l]",
        chinese: "a. 最后的；终极的",
    },
    {
        english: "finance",
        phoneticSymbol: "[ˈfaɪnæns]",
        chinese: "n.资金，财政，财务",
    },
    {
        english: "find",
        phoneticSymbol: "[faɪnd]",
        chinese: "(found, found) vt. 找到，发现，感到",
    },
    {
        english: "fine",
        phoneticSymbol: "[faɪn]",
        chinese: "a. 细的；晴朗的；美好的；（身体）健康的 n.& v. 罚款",
    },
    {
        english: "finger",
        phoneticSymbol: "[ˈfɪŋɡə(r)]",
        chinese: "n. 手指",
    },
    {
        english: "fingernail",
        phoneticSymbol: "[ˈfɪŋɡəneɪl]",
        chinese: "n. 指甲",
    },
    {
        english: "finish",
        phoneticSymbol: "[ˈfɪnɪʃ]",
        chinese: "v. 结束；做完",
    },
    {
        english: "fire",
        phoneticSymbol: "[ˈfaɪə(r)]",
        chinese: "n. 火；火炉；火灾 vi. 开火，开（枪，炮等），射击",
    },
    {
        english: "fireworks",
        phoneticSymbol: "[ˈfaɪəwɜːk]",
        chinese: "n. 焰火",
    },
    {
        english: "firm",
        phoneticSymbol: "[fɜːm]",
        chinese: "n.公司;企业 a.坚固的,坚定的",
    },
    {
        english: "firmly",
        phoneticSymbol: "[ˈfɜːmlɪ]",
        chinese: "ad. 牢牢地",
    },
    {
        english: "fish",
        phoneticSymbol: "[fɪʃ]",
        chinese: "n. 鱼；鱼肉 vi. 钓鱼；捕鱼",
    },
    {
        english: "fisherman",
        phoneticSymbol: "[ˈfɪʃəmən]",
        chinese: "n. 渔民；钓鱼健身者",
    },
    {
        english: "fist",
        phoneticSymbol: "[fɪst]",
        chinese: "n. 拳(头)",
    },
    {
        english: "fit",
        phoneticSymbol: "[fɪt]",
        chinese: "a. 健康的, 适合的 v. （使）适合，安装",
    },
    {
        english: "fix",
        phoneticSymbol: "[fɪks]",
        chinese: "vt. 修理；安装；确定，决定",
    },
    {
        english: "flag",
        phoneticSymbol: "[flæɡ]",
        chinese: "n. 旗；标志；旗舰",
    },
    {
        english: "flame",
        phoneticSymbol: "[fleɪm]",
        chinese: "n. 火焰，光辉",
    },
    {
        english: "flash",
        phoneticSymbol: "[flæʃ]",
        chinese: "n. 闪；闪光； 转瞬间",
    },
    {
        english: "flashlight",
        phoneticSymbol: "[flæʃ]",
        chinese: "n. 手电",
    },
    {
        english: "flat",
        phoneticSymbol: "[flæt]",
        chinese: "a. 平的 n. 楼中一套房间； 公寓(常用复数)",
    },
    {
        english: "flee",
        phoneticSymbol: "[fliː]",
        chinese: "(fled, fled) v. 逃走；逃跑",
    },
    {
        english: "flexible",
        phoneticSymbol: "['fleksəbl]",
        chinese: "a.灵活的，可变动的",
    },
    {
        english: "flesh",
        phoneticSymbol: "[fleʃ]",
        chinese: "n. 肉",
    },
    {
        english: "flight",
        phoneticSymbol: "[flaɪt]",
        chinese: "n. 航班 n. 楼梯的一段",
    },
    {
        english: "float",
        phoneticSymbol: "[fləʊt]",
        chinese: "vi. 漂浮，浮动",
    },
    {
        english: "flood",
        phoneticSymbol: "[flʌd]",
        chinese: "n. 洪水 vt. 淹没，使泛滥",
    },
    {
        english: "floor",
        phoneticSymbol: "[flɔː(r)]",
        chinese: "n.地面，地板.（楼房的）层",
    },
    {
        english: "flour",
        phoneticSymbol: "[ˈflaʊə(r)]",
        chinese: "n. 面粉，粉",
    },
    {
        english: "flow",
        phoneticSymbol: "[fləʊ]",
        chinese: "vi. 流动",
    },
    {
        english: "flower",
        phoneticSymbol: "[ˈflaʊə(r)]",
        chinese: "n. 花",
    },
    {
        english: "flu",
        phoneticSymbol: "[fluː]",
        chinese: "n. 流行性感冒",
    },
    {
        english: "fluency",
        phoneticSymbol: "['fluənsi]",
        chinese: "n.（外语）流利，流畅",
    },
    {
        english: "fluent",
        phoneticSymbol: "[ˈfluːənt]",
        chinese: "a. （外语）流利的，流畅",
    },
    {
        english: "fly",
        phoneticSymbol: "[ˈfluːənt]",
        chinese: "n. 飞行；苍蝇",
    },
    {
        english: "fly (flew, flown)",
        phoneticSymbol: "[flaɪ]",
        chinese:
            "vi. （鸟、飞机）飞；（人乘飞机）飞行；（旗子等）飘动 vt. 空运（乘客，货物等）；放（风筝、飞机模型等）",
    },
    {
        english: "focus",
        phoneticSymbol: "[ˈfəʊkəs]",
        chinese: "v. / n.集中（注意力，精力）于，焦点，中心点",
    },
    {
        english: "fog",
        phoneticSymbol: "[fɔɡ]",
        chinese: "n. 雾",
    },
    {
        english: "foggy",
        phoneticSymbol: "[ˈfɔɡɪ]",
        chinese: "a. 多雾的",
    },
    {
        english: "fold",
        phoneticSymbol: "[fəʊld]",
        chinese: "vt. 折叠；合拢",
    },
    {
        english: "folk",
        phoneticSymbol: "[fəʊk]",
        chinese: "a. 民间的",
    },
    {
        english: "follow",
        phoneticSymbol: "[ˈfɔləʊ]",
        chinese: "vt. 跟随；仿效；跟得上",
    },
    {
        english: "fond",
        phoneticSymbol: "[fɔnd]",
        chinese: "a. 喜爱的，爱好的",
    },
    {
        english: "food",
        phoneticSymbol: "[fɔnd]",
        chinese: "n. 食物，食品",
    },
    {
        english: "fool",
        phoneticSymbol: "[fuːl]",
        chinese: "n. 傻子，蠢人",
    },
    {
        english: "foolish",
        phoneticSymbol: "[ˈfuːlɪʃ]",
        chinese: "a. 愚蠢的，傻的",
    },
    {
        english: "foot (复 feet)",
        phoneticSymbol: "[fʊt]",
        chinese: "n. 足，脚；英尺",
    },
    {
        english: "football",
        phoneticSymbol: "[ˈfʊtbɔːl]",
        chinese: "n. （英式）足球；（美式）橄榄球",
    },
    {
        english: "for",
        phoneticSymbol: "[fə(r), fɔː(r)]",
        chinese:
            "prep. 为了…；向…，往…；与…交换；防备…；适合…；因为…；在…期 间；对于…；对…来说 conj. 因为，由于",
    },
    {
        english: "forbid",
        phoneticSymbol: "[fəˈbɪd]",
        chinese: "(forbade, forbidden) vt. 禁止，不许",
    },
    {
        english: "force",
        phoneticSymbol: "[fɔːs]",
        chinese: "vt. 强迫，迫使",
    },
    {
        english: "forecast",
        phoneticSymbol: "[ˈfɔːkɑːst; (US) ˈfɔrkæst]",
        chinese: "n. & vt. 预告",
    },
    {
        english: "forehead",
        phoneticSymbol: "[ˈfɔrɪd; (US) ˈfɔːrɪd]",
        chinese: "n. 前额",
    },
    {
        english: "foreign",
        phoneticSymbol: "[ˈfɔrən; (US) ˈfɔːrɪn]",
        chinese: "a. 外国的",
    },
    {
        english: "foreigner",
        phoneticSymbol: "[ˈfɔrənə(r)]",
        chinese: "n. 外国人",
    },
    {
        english: "foresee",
        phoneticSymbol: "[fɔːˈsiː]",
        chinese: "(foresaw, foreseen) vt.预见.预知",
    },
    {
        english: "forest",
        phoneticSymbol: "[ˈfɔrɪst; (US) ˈfɔːrɪst]",
        chinese: "n. 森林",
    },
    {
        english: "forever",
        phoneticSymbol: "[fəˈrevə(r)]",
        chinese: "ad. 永远；永恒的",
    },
    {
        english: "forget",
        phoneticSymbol: "[fəˈrevə(r)]",
        chinese: "(forgot, forgotten) v. 忘记；忘掉",
    },
    {
        english: "forgetful",
        phoneticSymbol: "[fəˈɡetfʊl]",
        chinese: "a. 健忘的，不留心的",
    },
    {
        english: "forgive",
        phoneticSymbol: "[fəˈɡɪv]",
        chinese: "(forgave, forgiven) vt. 原谅，宽恕",
    },
    {
        english: "fork",
        phoneticSymbol: "[fɔːk]",
        chinese: "n. 叉，餐叉",
    },
    {
        english: "form",
        phoneticSymbol: "[fɔːm]",
        chinese: "n. 表格；形式；结构",
    },
    {
        english: "format",
        phoneticSymbol: "[ˈfɔːmæt]",
        chinese: "n.安排，计划，设计",
    },
    {
        english: "former",
        phoneticSymbol: "[ˈfɔːmə(r)]",
        chinese: "a. 以前的，从前的；（两者之中的）前者",
    },
    {
        english: "fortnight",
        phoneticSymbol: "[ˈfɔːtnaɪt]",
        chinese: "n. 十四日，两星期",
    },
    {
        english: "fortunate",
        phoneticSymbol: "[ˈfɔːtʃənət]",
        chinese: "a. 幸运的； 侥幸的",
    },
    {
        english: "fortune",
        phoneticSymbol: "[ˈfɔːtjuːn, ˈfɔːtʃuːn]",
        chinese: "n. 财产；运气",
    },
    {
        english: "forward",
        phoneticSymbol: "[ˈfɔːwəd]",
        chinese: "ad.将来.今后.向前，前进",
    },
    {
        english: "fountain",
        phoneticSymbol: "[ˈfaʊntɪn; (US) ˈfaʊntn]",
        chinese: "n. 喷泉",
    },
    {
        english: "fox",
        phoneticSymbol: "[fɔks]",
        chinese: "n. 狐狸",
    },
    {
        english: "fragile",
        phoneticSymbol: "[ˈfrædʒaɪl; (US) ˈfrædʒl]",
        chinese: "a.易碎的，易损的",
    },
    {
        english: "fragrant",
        phoneticSymbol: "[ˈfreɪɡrənt]",
        chinese: "a. 香的，芳香的",
    },
    {
        english: "framework",
        phoneticSymbol: "[ˈfreɪmwɜːk]",
        chinese: "n.（建筑物）框架，结构",
    },
    {
        english: "franc",
        phoneticSymbol: "[fræŋk]",
        chinese: "n. （法国、瑞士、比利时等国的货币单位）法郎",
    },
    {
        english: "free",
        phoneticSymbol: "[friː]",
        chinese: "a. 自由，空闲的；免费的",
    },
    {
        english: "freedom",
        phoneticSymbol: "[ˈfriːdəm]",
        chinese: "n. 自由",
    },
    {
        english: "freeway",
        phoneticSymbol: "[ˈfriːweɪ]",
        chinese: "n. 高速公路",
    },
    {
        english: "freeze",
        phoneticSymbol: "[friːz]",
        chinese: "(froze, frozen) vi. 结冰",
    },
    {
        english: "freezing",
        phoneticSymbol: "['fri:ziŋ]",
        chinese: "a. 冻结的；极冷的",
    },
    {
        english: "frequent",
        phoneticSymbol: "[ˈfriːkwənt]",
        chinese: "a. 经常的；频繁的",
    },
    {
        english: "fresh",
        phoneticSymbol: "[freʃ]",
        chinese: "a. 新鲜的",
    },
    {
        english: "friction",
        phoneticSymbol: "[ˈfrɪkʃ(ə)n]",
        chinese: "n. 摩擦",
    },
    {
        english: "fridge =refrigerator",
        phoneticSymbol: "[rɪˈfrɪdʒəreɪtə(r)]",
        chinese: "n. 冰箱",
    },
    {
        english: "fried",
        phoneticSymbol: "[fraid]",
        chinese: "a. 油煎的",
    },
    {
        english: "friend",
        phoneticSymbol: "[frend]",
        chinese: "n. 朋友",
    },
    {
        english: "friendly",
        phoneticSymbol: "[ˈfrendlɪ]",
        chinese: "a. 友好的",
    },
    {
        english: "friendship",
        phoneticSymbol: "[ˈfrendʃɪp]",
        chinese: "n. 友谊，友情",
    },
    {
        english: "frighten",
        phoneticSymbol: "[ˈfraɪt(ə)n]",
        chinese: "vt. 使惊恐，吓唬",
    },
    {
        english: "frog",
        phoneticSymbol: "[frɔɡ; (US) frɔːɡ]",
        chinese: "n. 青蛙",
    },
    {
        english: "from",
        phoneticSymbol: "[frəm, frɔm]",
        chinese: "prep.从；从…起.距.来自",
    },
    {
        english: "front",
        phoneticSymbol: "[frʌnt]",
        chinese: "a. 前面的；前部的 n. 前面；前部；前线",
    },
    {
        english: "frontier",
        phoneticSymbol: "[ˈfrʌntɪə(r); (US) frʌnˈtɪər]",
        chinese: "n. 前沿 ，边界；前线",
    },
    {
        english: "frost",
        phoneticSymbol: "[frɔst; (US) frɔːst]",
        chinese: "n. 霜",
    },
    {
        english: "fruit",
        phoneticSymbol: "[fruːt]",
        chinese: "n. 水果；果实",
    },
    {
        english: "fruit juice",
        phoneticSymbol: "[fruːt dʒuːs]",
        chinese: "n. 果汁",
    },
    {
        english: "fry",
        phoneticSymbol: "[fraɪ]",
        chinese: "vt. 用油煎；用油炸",
    },
    {
        english: "fuel",
        phoneticSymbol: "[fjuːəl]",
        chinese: "n. 燃料",
    },
    {
        english: "full",
        phoneticSymbol: "[fʊl]",
        chinese: "a. 满的，充满的；完全的",
    },
    {
        english: "fun",
        phoneticSymbol: "[fʌn]",
        chinese: "n. 有趣的事，娱乐，玩笑",
    },
    {
        english: "function",
        phoneticSymbol: "['fʌŋkʃən]",
        chinese: "n. / v. 作用,功能,运转",
    },
    {
        english: "fundamental",
        phoneticSymbol: "[fʌndəˈment(ə)l]",
        chinese: "a. 十分重大的，根本的",
    },
    {
        english: "funeral",
        phoneticSymbol: "[ˈfjuːˈnər(ə)l]",
        chinese: "n. 葬礼",
    },
    {
        english: "funny",
        phoneticSymbol: "[ˈfʌnɪ]",
        chinese: "a. 有趣的，滑稽可笑的",
    },
    {
        english: "fur",
        phoneticSymbol: "[fɜː(r)]",
        chinese: "n. 毛皮；皮子",
    },
    {
        english: "furnished",
        phoneticSymbol: "['fə:niʃt]",
        chinese: "a. 配备了家具的",
    },
    {
        english: "furniture",
        phoneticSymbol: "[ˈfɜːnɪtʃə(r)]",
        chinese: "n. （总称）家具",
    },
    {
        english: "future",
        phoneticSymbol: "[ˈfjuːtʃə(r)]",
        chinese: "n. 将来",
    },
    {
        english: "gain",
        phoneticSymbol: "[ɡeɪn]",
        chinese: "vt. 赢得；挣得",
    },
    {
        english: "gallery",
        phoneticSymbol: "[ˈɡælərɪ]",
        chinese: "n. 画廊；美术品陈列室",
    },
    {
        english: "gallon",
        phoneticSymbol: "[ˈɡælən]",
        chinese: "n. 加仑",
    },
    {
        english: "game",
        phoneticSymbol: "[ɡeɪm]",
        chinese: "n. 游戏；运动；比赛",
    },
    {
        english: "garage",
        phoneticSymbol: "[ˈɡærɑːʒ, -rɪdʒ; (US) ɡəˈrɑːʒ]",
        chinese: "n. 汽车间（库）",
    },
    {
        english: "garbage",
        phoneticSymbol: "[ˈɡɑːbɪdʒ]",
        chinese: "n. 垃圾",
    },
    {
        english: "garden",
        phoneticSymbol: "[ˈɡɑːd(ə)n]",
        chinese: "n. 花园，果园，菜园",
    },
    {
        english: "garlic",
        phoneticSymbol: "[ˈɡɑːlɪk]",
        chinese: "n. 大蒜",
    },
    {
        english: "garment",
        phoneticSymbol: "[ˈɡɑːmənt]",
        chinese: "n. （一件）衣服",
    },
    {
        english: "gas",
        phoneticSymbol: "[ɡæs]",
        chinese: "n. 煤气",
    },
    {
        english: "gate",
        phoneticSymbol: "[ɡeɪt]",
        chinese: "n. 大门",
    },
    {
        english: "gather",
        phoneticSymbol: "[ˈɡæðə(r)]",
        chinese: "v. 聚集；采集",
    },
    {
        english: "gay",
        phoneticSymbol: "[ɡeɪ]",
        chinese: "a. （男）同性恋的；快活的，愉快的",
    },
    {
        english: "general",
        phoneticSymbol: "[ˈdʒenər(ə)l]",
        chinese: "a. 大体，笼统的，总的",
    },
    {
        english: "generation",
        phoneticSymbol: "[dʒenəˈreɪʃ(ə)n]",
        chinese: "n. 代，一代",
    },
    {
        english: "generous",
        phoneticSymbol: "[ˈdʒenərəs]",
        chinese: "a. 慷慨大方的",
    },
    {
        english: "gentle",
        phoneticSymbol: "[ˈdʒent(ə)l]",
        chinese: "a. 温柔的，轻轻的",
    },
    {
        english: "gentleman",
        phoneticSymbol: "[ˈdʒent(ə)lmən]",
        chinese: "n. 绅士，先生；有身份、有教养的人",
    },
    {
        english: "geography",
        phoneticSymbol: "[dʒɪˈɔɡrəfɪ]",
        chinese: "n. 地理学",
    },
    {
        english: "geometry",
        phoneticSymbol: "[dʒɪ'ɑmɪtrɪ]",
        chinese: "n. 几何学",
    },
    {
        english: "gesture",
        phoneticSymbol: "[ˈdʒestʃə(r)]",
        chinese: "n. 姿势，手势",
    },
    {
        english: "get (got , got)",
        phoneticSymbol: "[ɡet]",
        chinese: "vt. 成为；得到；具有；到达",
    },
    {
        english: "gift",
        phoneticSymbol: "[ɡɪft]",
        chinese: "n. 赠品；礼物",
    },
    {
        english: "gifted",
        phoneticSymbol: "[ˈɡɪftɪd]",
        chinese: "a. 有天赋的；有才华的",
    },
    {
        english: "giraffe",
        phoneticSymbol: "[dʒɪˈrɑːf; (US) dʒəˈræf]",
        chinese: "n. 长颈鹿",
    },
    {
        english: "girl",
        phoneticSymbol: "[ɡɜːl]",
        chinese: "n. 女孩",
    },
    {
        english: "give (gave, given)",
        phoneticSymbol: "[ɡɪv]",
        chinese: "vt. 给,递给,付出,给予",
    },
    {
        english: "glad",
        phoneticSymbol: "[ɡlæd]",
        chinese: "a. 高兴的；乐意的",
    },
    {
        english: "glance",
        phoneticSymbol: "[glæns /glɑːns]",
        chinese: "vi. 匆匆一看；一瞥",
    },
    {
        english: "glare",
        phoneticSymbol: "[ɡleə(r)]",
        chinese: "v. 瞪眼,怒目而视,闪耀",
    },
    {
        english: "glass",
        phoneticSymbol: "[ɡlɑːs; (US) ɡlæs]",
        chinese: "n.玻璃杯,玻璃；(复)眼镜",
    },
    {
        english: "globe",
        phoneticSymbol: "[ɡləʊb]",
        chinese: "n. 地球仪,地球",
    },
    {
        english: "glory",
        phoneticSymbol: "[ˈɡlɔːrɪ]",
        chinese: "n.巨大的光荣; 荣誉;赞美",
    },
    {
        english: "glove",
        phoneticSymbol: "[ɡlʌv]",
        chinese: "n. 手套",
    },
    {
        english: "glue",
        phoneticSymbol: "[ɡluː]",
        chinese: "n. 胶水",
    },
    {
        english: "go (went, gone)",
        phoneticSymbol: "[ɡəʊ]",
        chinese: "vi. 去；走；驶；通到；到达 n. 尝试（做某事）",
    },
    {
        english: "goal",
        phoneticSymbol: "[ɡəʊl]",
        chinese: "n. （足球）球门，目标",
    },
    {
        english: "goat",
        phoneticSymbol: "[ɡəʊt]",
        chinese: "n. 山羊",
    },
    {
        english: "god",
        phoneticSymbol: "[ɡɔd]",
        chinese: "n. 神，（大写）上帝",
    },
    {
        english: "gold",
        phoneticSymbol: "[ɡəʊld]",
        chinese: "n. 黄金 a 金的，黄金的",
    },
    {
        english: "golden",
        phoneticSymbol: "[ˈɡəʊld(ə)n]",
        chinese: "a. 金(黄)色的",
    },
    {
        english: "golf",
        phoneticSymbol: "[ɡɔlf]",
        chinese: "n. 高尔夫球",
    },
    {
        english: "good (better ,best)",
        phoneticSymbol: "[ɡʊd]",
        chinese: "a. 好；良好",
    },
    {
        english: "goods",
        phoneticSymbol: "[ɡʊd]",
        chinese: "n. 商品，货物",
    },
    {
        english: "goose (复 geese)",
        phoneticSymbol: "[ɡuːs]",
        chinese: "n. 鹅",
    },
    {
        english: "govern",
        phoneticSymbol: "[ˈɡʌv(ə)n]",
        chinese: "v. 统治；管理",
    },
    {
        english: "government",
        phoneticSymbol: "[ˈɡʌvənmənt]",
        chinese: "n. 政府",
    },
    {
        english: "grade",
        phoneticSymbol: "[greɪd]",
        chinese: "n. 等级;职别;成绩等级;年级vt. 安排;依序排列，.评估;评分",
    },
    {
        english: "graduall",
        phoneticSymbol: "[ˈɡrædjʊəl]",
        chinese: "adj. 逐渐的",
    },
    {
        english: "graduate",
        phoneticSymbol: "[ˈɡrædjʊət]",
        chinese: "v. 毕业",
    },
    {
        english: "graduation",
        phoneticSymbol: "[ɡrædjʊˈeɪʃ(ə)n]",
        chinese: "n. 毕业，毕业典礼",
    },
    {
        english: "grain",
        phoneticSymbol: "[ɡreɪn]",
        chinese: "n. 谷物，谷类",
    },
    {
        english: "gram",
        phoneticSymbol: "[ɡræm]",
        chinese: "n. 克(重量单位)",
    },
    {
        english: "grammar",
        phoneticSymbol: "[ˈɡræmə(r)]",
        chinese: "n. 语法",
    },
    {
        english: "grand",
        phoneticSymbol: "[ɡrænd]",
        chinese: "a. 宏伟的",
    },
    {
        english: "grandchild",
        phoneticSymbol: "['græntʃaɪld]",
        chinese: "n.(外)孙或孙女.孙辈",
    },
    {
        english: "granddaughter",
        phoneticSymbol: "[ˈɡrændɔːtə(r)]",
        chinese: "n. （外）孙女",
    },
    {
        english: "grandma = grandmother",
        phoneticSymbol: "[ˈɡrænmɑː, ˈɡrændmɑː]",
        chinese: "n. 奶奶；外婆",
    },
    {
        english: "grandpa = grandfather",
        phoneticSymbol: "[ˈɡrænpɑː, ˈɡrændpɑː]",
        chinese: "n.爷爷,外公",
    },
    {
        english: "grandparents",
        phoneticSymbol: "[ˈɡrændpeərənt]",
        chinese: "n.祖父母.外祖父母",
    },
    {
        english: "grandson",
        phoneticSymbol: "[ˈɡrændsʌn]",
        chinese: "n. （外）孙子",
    },
    {
        english: "granny",
        phoneticSymbol: "[ˈɡrænɪ]",
        chinese: "n. 老奶奶；祖母；外婆",
    },
    {
        english: "grape",
        phoneticSymbol: "[ɡreɪp]",
        chinese: "n. 葡萄",
    },
    {
        english: "graph",
        phoneticSymbol: "[ɡrɑːf; (US) ɡræf]",
        chinese: "n. 图表，曲线图",
    },
    {
        english: "grasp",
        phoneticSymbol: "[ɡrɑːsp; (US) ɡræsp]",
        chinese: "v. 抓住；紧握",
    },
    {
        english: "grass",
        phoneticSymbol: "[ɡrɑːs; (US) ɡræs]",
        chinese: "n. 草；草场；牧草",
    },
    {
        english: "grateful",
        phoneticSymbol: "[ˈɡreɪtfʊl]",
        chinese: "a. 感激的，感谢的",
    },
    {
        english: "gravity",
        phoneticSymbol: "[ˈɡrævɪtɪ]",
        chinese: "n. 重力，地球引力",
    },
    {
        english: "great",
        phoneticSymbol: "[ɡreɪt]",
        chinese: "a. 伟大的,重要的,好极了 ad. （口语）好极了，很好",
    },
    {
        english: "greedy",
        phoneticSymbol: "[ˈɡriːdɪ]",
        chinese: "a. 贪婪的",
    },
    {
        english: "green",
        phoneticSymbol: "[ɡriːn]",
        chinese: "a. 绿色的；青的 n. 绿色",
    },
    {
        english: "greengrocer",
        phoneticSymbol: "[ˈɡriːnɡrəʊsə(r)]",
        chinese: "n.（英）蔬菜水果商",
    },
    {
        english: "greet",
        phoneticSymbol: "[ɡriːt]",
        chinese: "vt. 问候；向……致敬",
    },
    {
        english: "greeting",
        phoneticSymbol: "[ˈɡriːtɪŋ]",
        chinese: "n. 祝贺",
    },
    {
        english: "grey / gray",
        phoneticSymbol: "[ɡreɪ]",
        chinese: "a. 灰色的； 灰白的",
    },
    {
        english: "grill",
        phoneticSymbol: "[ɡrɪl]",
        chinese: "n. （烧食物的）烤架",
    },
    {
        english: "grocer",
        phoneticSymbol: "[ˈɡrəʊsə(r)]",
        chinese: "n. 零售商人；食品店",
    },
    {
        english: "grocery",
        phoneticSymbol: "[ ˈgrəʊsəri]",
        chinese: "n. 食品杂货店;食品杂货业",
    },
    {
        english: "ground",
        phoneticSymbol: "[ɡraʊnd]",
        chinese: "n. 地面",
    },
    {
        english: "group",
        phoneticSymbol: "[ɡruːp]",
        chinese: "n. 组，群",
    },
    {
        english: "grow (grew, grown)",
        phoneticSymbol: "[ɡrəʊ]",
        chinese: "v. 生长；发育；种植；变成",
    },
    {
        english: "growth",
        phoneticSymbol: "[ɡrəʊθ]",
        chinese: "n. 生长，增长",
    },
    {
        english: "gruel",
        phoneticSymbol: "[ɡrʊəl]",
        chinese: "n. 粥",
    },
    {
        english: "guarantee",
        phoneticSymbol: "[ɡærənˈtiː]",
        chinese: "v. 保证，担保",
    },
    {
        english: "guard",
        phoneticSymbol: "[ɡɑːd]",
        chinese: "n. 防护装置，警戒",
    },
    {
        english: "guess",
        phoneticSymbol: "[ɡes]",
        chinese: "vi. 猜",
    },
    {
        english: "guest",
        phoneticSymbol: "[ɡest]",
        chinese: "n. 客人，宾客",
    },
    {
        english: "guidance",
        phoneticSymbol: "[ˈɡaɪdəns]",
        chinese: "n. 引导，指导",
    },
    {
        english: "guide",
        phoneticSymbol: "[ɡaɪd]",
        chinese: "n. 向导，导游者",
    },
    {
        english: "guilty",
        phoneticSymbol: "[ˈɡɪltɪ]",
        chinese: "a.有罪,犯法的,做错事的",
    },
    {
        english: "guitar",
        phoneticSymbol: "[ɡɪˈtɑː(r)]",
        chinese: "n. 吉他，六弦琴",
    },
    {
        english: "gun",
        phoneticSymbol: "[ɡʌn]",
        chinese: "n. 枪，炮",
    },
    {
        english: "gym =gymnasium",
        phoneticSymbol: "[dʒɪm]",
        chinese: "n. 体操；体育馆；健身房",
    },
    {
        english: "gymnastics",
        phoneticSymbol: "[dʒɪmˈnæstɪks]",
        chinese: "n. 体操",
    },
    {
        english: "habit",
        phoneticSymbol: "[ˈhæbɪt]",
        chinese: "n. 习惯，习性",
    },
    {
        english: "hair",
        phoneticSymbol: "[heə(r)]",
        chinese: "n. 头发",
    },
    {
        english: "haircut",
        phoneticSymbol: "[ˈheəkʌt]",
        chinese: "n. （男子）理发",
    },
    {
        english: "half",
        phoneticSymbol: "[hɑːf; (US) hæf]",
        chinese: "a.& n. 半，一半，半个",
    },
    {
        english: "hall",
        phoneticSymbol: "[hɔːl]",
        chinese: "n. 大厅,会堂,礼堂;过道",
    },
    {
        english: "ham",
        phoneticSymbol: "[hæm]",
        chinese: "n. 火腿",
    },
    {
        english: "hamburger",
        phoneticSymbol: "[ˈhæmbɜːɡə(r)]",
        chinese: "n. 汉堡包",
    },
    {
        english: "hammer",
        phoneticSymbol: "['hæmə(r)]",
        chinese: "n. 锤子，锣锤",
    },
    {
        english: "hand",
        phoneticSymbol: "[hænd]",
        chinese: "n. 手；指针 v. 递；给；交付 交上；交进",
    },
    {
        english: "handbag",
        phoneticSymbol: "[ˈhændbæɡ]",
        chinese: "n. 女用皮包，手提包",
    },
    {
        english: "handful",
        phoneticSymbol: "[ˈhændfʊl]",
        chinese: "n.(一)把；少数，少量",
    },
    {
        english: "handkerchief",
        phoneticSymbol: "[ˈhæŋkətʃɪf]",
        chinese: "n. 手帕",
    },
    {
        english: "handle",
        phoneticSymbol: "[ˈhænd(ə)l]",
        chinese: "n. 柄，把柄 v. 处理",
    },
    {
        english: "handsome",
        phoneticSymbol: "[ˈhænsəm]",
        chinese: "a. 英俊的",
    },
    {
        english: "handwriting",
        phoneticSymbol: "[ˈhændraɪtɪŋ]",
        chinese: "n. 书法",
    },
    {
        english: "handy",
        phoneticSymbol: "[ˈhændɪ]",
        chinese: "a. 便利的，顺手的 hang(hanged,hanged) v. 处（人）绞刑；上吊",
    },
    {
        english: "hang (hung, hung)",
        phoneticSymbol: "[hæŋ]",
        chinese: "v.悬挂，吊着；把……吊起",
    },
    {
        english: "happen",
        phoneticSymbol: "[ˈhæpən]",
        chinese: "vi.（偶然）发生",
    },
    {
        english: "happiness",
        phoneticSymbol: "[ˈhæpɪnɪs]",
        chinese: "n. 幸福，愉快",
    },
    {
        english: "happy",
        phoneticSymbol: "[ˈhæpɪ]",
        chinese: "a.幸福；快乐的，高兴的",
    },
    {
        english: "harbour (美harbor)",
        phoneticSymbol: "['hɑ:bə]",
        chinese: "n. 港口",
    },
    {
        english: "hard",
        phoneticSymbol: "[hɑːd]",
        chinese: "ad. 努力地；使劲；猛烈地 a.硬的；困难的；艰难的",
    },
    {
        english: "hardly",
        phoneticSymbol: "[ˈhɑːdlɪ]",
        chinese: "ad. 几乎不",
    },
    {
        english: "hardship",
        phoneticSymbol: "[ˈhɑːdʃɪp]",
        chinese: "n. 困难",
    },
    {
        english: "hardworking",
        phoneticSymbol: "['ha:d'wə:kiŋ]",
        chinese: "a. 努力工作的",
    },
    {
        english: "harm",
        phoneticSymbol: "[hɑːm]",
        chinese: "n.&v. 伤害；损伤",
    },
    {
        english: "harmful",
        phoneticSymbol: "[ˈhɑːmfʊl]",
        chinese: "a.有害的；致伤的",
    },
    {
        english: "harmless",
        phoneticSymbol: "[ˈhɑːmlɪs]",
        chinese: "a. 无害的;不致伤的",
    },
    {
        english: "harmony",
        phoneticSymbol: "[ˈhɑːmənɪ]",
        chinese: "n. 融洽，和睦",
    },
    {
        english: "harvest",
        phoneticSymbol: "[ˈhɑːvɪst]",
        chinese: "n.& vt. 收割，收获（物）",
    },
    {
        english: "hat",
        phoneticSymbol: "[hæt]",
        chinese: "n.帽子(一般指有边的)；礼帽",
    },
    {
        english: "hatch",
        phoneticSymbol: "[hætʃ]",
        chinese: "v. （鸟、鸡）孵蛋",
    },
    {
        english: "hate",
        phoneticSymbol: "[heɪt]",
        chinese: "vt.& n. 恨，讨厌",
    },
    {
        english: "have (has, had, had)",
        phoneticSymbol: "[hæv]",
        chinese: "vt.有；吃；喝；进行；经受",
    },
    {
        english: "he",
        phoneticSymbol: "[heɪ]",
        chinese: "pron. 他",
    },
    {
        english: "head",
        phoneticSymbol: "[hed]",
        chinese:
            "n. 头；头脑(像)；才智；首脑；源头；标题 a. 头部的；主要的；首席的 v. 率领；加标题；用头顶；出发；(船等)驶向",
    },
    {
        english: "headache",
        phoneticSymbol: "[ˈhedeɪk]",
        chinese: "n. 头疼",
    },
    {
        english: "headline",
        phoneticSymbol: "[ˈhedlaɪn]",
        chinese: "n. （报刊的）大字标题",
    },
    {
        english: "headmaster",
        phoneticSymbol: "[hedˈmɑːstə(r)]",
        chinese: "n. （英）中小学校长",
    },
    {
        english: "headmistress",
        phoneticSymbol: "['hed'mistrɪs]",
        chinese: "n. 女校长",
    },
    {
        english: "health",
        phoneticSymbol: "[helθ]",
        chinese: "n. 健康，卫生",
    },
    {
        english: "healthy",
        phoneticSymbol: "[ˈhelθɪ]",
        chinese: "a. 健康的，健壮的",
    },
    {
        english: "hear (heard, heard)",
        phoneticSymbol: "[hɪə(r)]",
        chinese: "v. 听见；听说,得知",
    },
    {
        english: "hearing",
        phoneticSymbol: "[ˈhɪərɪŋ]",
        chinese: "n. 听力",
    },
    {
        english: "heart",
        phoneticSymbol: "[hɑːt]",
        chinese: "n.心.心脏, 纸牌中的红桃",
    },
    {
        english: "heat",
        phoneticSymbol: "[hiːt]",
        chinese: "n. 热 vt. 把……加热",
    },
    {
        english: "heaven",
        phoneticSymbol: "[ˈhev(ə)n]",
        chinese: "n. 天，天空",
    },
    {
        english: "heavy",
        phoneticSymbol: "[ˈhevɪ]",
        chinese: "a. 重的",
    },
    {
        english: "heel",
        phoneticSymbol: "[hiːl]",
        chinese: "n. 脚后跟",
    },
    {
        english: "height",
        phoneticSymbol: "[haɪt]",
        chinese: "n. 高，高度",
    },
    {
        english: "helicopter",
        phoneticSymbol: "[ˈhelɪkɔptə(r)]",
        chinese: "n. 直升飞机",
    },
    {
        english: "hello",
        phoneticSymbol: "[həˈləʊ]",
        chinese: "int. 喂；你好（表示打招呼，问候或唤起注意）",
    },
    {
        english: "helmet",
        phoneticSymbol: "['helmɪt]",
        chinese: "n. 头盔",
    },
    {
        english: "help",
        phoneticSymbol: "[help]",
        chinese: "n. & vt. 帮助，帮忙",
    },
    {
        english: "helpful",
        phoneticSymbol: "[ˈhelpfʊl]",
        chinese: "a. 有帮助的，有益的",
    },
    {
        english: "hen",
        phoneticSymbol: "[hen]",
        chinese: "n. 母鸡",
    },
    {
        english: "her",
        phoneticSymbol: "[hɜː(r)]",
        chinese: "pron. 她(宾格),她的",
    },
    {
        english: "herb",
        phoneticSymbol: "[hɜːb; (US) ɜːrb]",
        chinese: "n. 草药",
    },
    {
        english: "here",
        phoneticSymbol: "[hɪə(r)]",
        chinese: "ad. 这里，在这里；向这里",
    },
    {
        english: "hero",
        phoneticSymbol: "[ˈhɪərəʊ]",
        chinese: "n. 英雄，勇士，男主角",
    },
    {
        english: "hers",
        phoneticSymbol: "[hɜːz]",
        chinese: "pron. 她的",
    },
    {
        english: "herself",
        phoneticSymbol: "[hɜːˈself]",
        chinese: "pron. 她自己",
    },
    {
        english: "hesitate",
        phoneticSymbol: "['heziteit]",
        chinese: "vi. 犹豫，踌躇;不愿;支吾;停顿",
    },
    {
        english: "hi",
        phoneticSymbol: "[haɪ]",
        chinese: "int. 你好（表示打招呼、问候或唤起注 意）",
    },
    {
        english: "hide (hid, hidden)",
        phoneticSymbol: "[haɪd]",
        chinese: "v. 把…藏起来，隐藏",
    },
    {
        english: "high",
        phoneticSymbol: "[haɪ]",
        chinese: "a. 高的;高度的 ad. 高地",
    },
    {
        english: "highway",
        phoneticSymbol: "[ˈhaɪweɪ]",
        chinese: "n.公路,主要交通道路",
    },
    {
        english: "hill",
        phoneticSymbol: "[hɪl]",
        chinese: "n. 小山;丘陵;土堆;斜坡",
    },
    {
        english: "him",
        phoneticSymbol: "[hɪm]",
        chinese: "pron. 他（宾格）",
    },
    {
        english: "himself",
        phoneticSymbol: "[hɪmˈself]",
        chinese: "pron. 他自己",
    },
    {
        english: "hire",
        phoneticSymbol: "[ˈhaɪə(r)]",
        chinese: "vt. 租用",
    },
    {
        english: "his",
        phoneticSymbol: "[hɪz]",
        chinese: "pron. 他的",
    },
    {
        english: "history",
        phoneticSymbol: "[ˈhɪstərɪ]",
        chinese: "n. 历史，历史学",
    },
    {
        english: "hit (hit, hit)",
        phoneticSymbol: "[hɪt]",
        chinese: "n.& vt. 打,撞,击中",
    },
    {
        english: "hobby",
        phoneticSymbol: "[ˈhɔbɪ]",
        chinese: "n. 业余爱好，嗜好",
    },
    {
        english: "hold (held, held)",
        phoneticSymbol: "[həʊld]",
        chinese: "vt.拿；抱；握住；举行；进行",
    },
    {
        english: "hole",
        phoneticSymbol: "[həʊl]",
        chinese: "n. 洞，坑",
    },
    {
        english: "holiday",
        phoneticSymbol: "[ˈhɔlɪdɪ]",
        chinese: "n. 假日；假期",
    },
    {
        english: "holy",
        phoneticSymbol: "[ˈhəʊlɪ]",
        chinese: "a. 神圣的",
    },
    {
        english: "home",
        phoneticSymbol: "[həʊm]",
        chinese: "n. 家 ad. 到家；回家",
    },
    {
        english: "homeland",
        phoneticSymbol: "[ˈhəʊmlænd]",
        chinese: "n. 祖国",
    },
    {
        english: "hometown",
        phoneticSymbol: "[ˈhəʊmtaʊn]",
        chinese: "n. 故乡",
    },
    {
        english: "homework",
        phoneticSymbol: "[ˈhəʊmwɜːk]",
        chinese: "n. 家庭作业",
    },
    {
        english: "honest",
        phoneticSymbol: "[ˈɔnɪst]",
        chinese: "a. 诚实的，正直的",
    },
    {
        english: "honey",
        phoneticSymbol: "[ˈɔnɪst]",
        chinese: "n. 蜂蜜",
    },
    {
        english: "honour (美honor)",
        phoneticSymbol: "['ɔnə]",
        chinese: "n. 荣誉，光荣 vt. 尊敬，给予荣誉",
    },
    {
        english: "hook",
        phoneticSymbol: "[hʊk]",
        chinese: "n.& v. 钩子；衔接，连接",
    },
    {
        english: "hope",
        phoneticSymbol: "[həʊp]",
        chinese: "n.& v. 希望",
    },
    {
        english: "hopeful",
        phoneticSymbol: "[ˈhəʊpfʊl]",
        chinese: "a. 有希望的；有前途的",
    },
    {
        english: "horrible",
        phoneticSymbol: "[ˈhɔrɪb(ə)l]",
        chinese: "a. 令人恐惧；恐怖的",
    },
    {
        english: "horse",
        phoneticSymbol: "[hɔːs]",
        chinese: "n. 马",
    },
    {
        english: "hospital",
        phoneticSymbol: "[ˈhɔspɪt(ə)l]",
        chinese: "n. 医院",
    },
    {
        english: "host",
        phoneticSymbol: "[həʊst]",
        chinese: "n. 主人；节目主持人 v. 做主人招待",
    },
    {
        english: "hostess",
        phoneticSymbol: "[ˈhəʊstɪs]",
        chinese: "n. 女主人",
    },
    {
        english: "hot",
        phoneticSymbol: "[hɔt,hɑt]",
        chinese: "a. 热的",
    },
    {
        english: "hotdog",
        phoneticSymbol: "[hɔt- dɔɡ]",
        chinese: "n. 热狗(红肠面包)",
    },
    {
        english: "hotel",
        phoneticSymbol: "[həʊˈtel]",
        chinese: "n. 旅馆，饭店，宾馆",
    },
    {
        english: "hour",
        phoneticSymbol: "[ˈaʊə(r)]",
        chinese: "n. 小时",
    },
    {
        english: "house",
        phoneticSymbol: "[haʊs]",
        chinese: "n. 房子；住宅",
    },
    {
        english: "housewife",
        phoneticSymbol: "[ˈhaʊswaɪf]",
        chinese: "n. 家庭主妇",
    },
    {
        english: "housework",
        phoneticSymbol: "[ˈhaʊswɜːk]",
        chinese: "n. 家务劳动",
    },
    {
        english: "how",
        phoneticSymbol: "[haʊ]",
        chinese: "ad.怎样,如何；多少；多么",
    },
    {
        english: "however",
        phoneticSymbol: "[haʊˈevə(r)]",
        chinese: "ad. 可是 conj. 然而，可是，尽管如此",
    },
    {
        english: "howl",
        phoneticSymbol: "[haʊl]",
        chinese: "vi. 嚎叫，嚎哭",
    },
    {
        english: "hug",
        phoneticSymbol: "[hʌɡ]",
        chinese: "v. 拥抱",
    },
    {
        english: "huge",
        phoneticSymbol: "[hjuːdʒ]",
        chinese: "a. 巨大的，庞大的",
    },
    {
        english: "human",
        phoneticSymbol: "[ˈhjuːmən]",
        chinese: "a. 人的，人类的",
    },
    {
        english: "human being",
        phoneticSymbol: "[ˈhjuːmən ˈbiːɪŋ]",
        chinese: "人",
    },
    {
        english: "humorous",
        phoneticSymbol: "[ˈhjuːmərəs]",
        chinese: "a. 富于幽默的",
    },
    {
        english: "humour (美humor)",
        phoneticSymbol: "['hju:mə]",
        chinese: "n.幽默,幽默感",
    },
    {
        english: "hunger",
        phoneticSymbol: "[ˈhʌŋɡə(r)]",
        chinese: "n. 饥饿",
    },
    {
        english: "hungry",
        phoneticSymbol: "[ˈhʌŋɡrɪ]",
        chinese: "a. （饥）饿的",
    },
    {
        english: "hunt",
        phoneticSymbol: "[hʌnt]",
        chinese: "vt. 寻找；狩猎，猎取",
    },
    {
        english: "hunter",
        phoneticSymbol: "[ˈhʌntə(r)]",
        chinese: "n. 猎人",
    },
    {
        english: "hurricane",
        phoneticSymbol: "[ˈhʌrɪkən]",
        chinese: "n. 飓风，十二级风",
    },
    {
        english: "hurry",
        phoneticSymbol: "[ˈhʌrɪ]",
        chinese: "vi. 赶快；急忙",
    },
    {
        english: "hurt (hurt, hurt)",
        phoneticSymbol: "[hɜːt]",
        chinese: "vt. 伤害，受伤；伤人感情",
    },
    {
        english: "husband",
        phoneticSymbol: "[ˈhʌzbənd]",
        chinese: "n. 丈夫",
    },
    {
        english: "hydrogen",
        phoneticSymbol: "[ˈhaɪdrədʒ(ə)n]",
        chinese: "n. 氢",
    },
    {
        english: "I",
        phoneticSymbol: "[aɪ]",
        chinese: "pron. 我",
    },
    {
        english: "ice",
        phoneticSymbol: "[aɪs]",
        chinese: "n. 冰",
    },
    {
        english: "ice--cream",
        phoneticSymbol: "[aɪs- kriːm]",
        chinese: "n. 冰淇淋",
    },
    {
        english: "idea",
        phoneticSymbol: "[aɪˈdɪə]",
        chinese: "n. 主意,意见,打算,想法",
    },
    {
        english: "identity",
        phoneticSymbol: "[aɪˈdentɪtɪ]",
        chinese: "n. 身份，特征",
    },
    {
        english: "identification",
        phoneticSymbol: "[aɪdentɪfɪˈkeɪʃ(ə)n]",
        chinese: "n. 鉴定，辨别",
    },
    {
        english: "idiom",
        phoneticSymbol: "[ˈɪdɪəm]",
        chinese: "n. 习语，成语",
    },
    {
        english: "if",
        phoneticSymbol: "[ɪf]",
        chinese: "conj.如果,假使,是否,是不是",
    },
    {
        english: "ignore",
        phoneticSymbol: "[ɪɡˈnɔː(r)]",
        chinese: "v. 忽视，对…不理会",
    },
    {
        english: "ill",
        phoneticSymbol: "[ɪl]",
        chinese: "a. 有病的；不健康的",
    },
    {
        english: "illegal",
        phoneticSymbol: "[ɪˈliːɡ(ə)l]",
        chinese: "a. 非法的",
    },
    {
        english: "illness",
        phoneticSymbol: "[ˈɪlnɪs]",
        chinese: "n. 疾病",
    },
    {
        english: "imagine",
        phoneticSymbol: "[ɪˈmædʒɪn]",
        chinese: "vt. 想像，设想",
    },
    {
        english: "immediately",
        phoneticSymbol: "[ɪˈmiːdɪətlɪ]",
        chinese: "ad. 立即",
    },
    {
        english: "immigration",
        phoneticSymbol: "[ɪmɪ'greɪʃn]",
        chinese: "n. 移民",
    },
    {
        english: "import",
        phoneticSymbol: "[ɪmˈpɔːt]",
        chinese: "v.& n. 进口，输入",
    },
    {
        english: "importance",
        phoneticSymbol: "[ɪmˈpɔːt(ə)ns]",
        chinese: "n. 重要性",
    },
    {
        english: "important",
        phoneticSymbol: "[ɪmˈpɔːtənt]",
        chinese: "a. 重要的",
    },
    {
        english: "impossible",
        phoneticSymbol: "[ɪmˈpɔsɪb(ə)l]",
        chinese: "a. 不可能的",
    },
    {
        english: "impress",
        phoneticSymbol: "[ɪmˈpres]",
        chinese: "vt. 留下极深的印象",
    },
    {
        english: "impression",
        phoneticSymbol: "[ɪmˈpreʃ(ə)n]",
        chinese: "n. 印象，感觉",
    },
    {
        english: "improve",
        phoneticSymbol: "[ɪmˈpruːv]",
        chinese: "vt. 改进，更新",
    },
    {
        english: "in",
        phoneticSymbol: "[ɪn]",
        chinese: "prep. 在…里(内)；在…；以… ad. 在家，在内，向内",
    },
    {
        english: "inch",
        phoneticSymbol: "[ɪntʃ]",
        chinese: "n. 英寸",
    },
    {
        english: "incident",
        phoneticSymbol: "[ˈɪnsɪd(ə)nt]",
        chinese: "n. 事件",
    },
    {
        english: "include",
        phoneticSymbol: "[ɪnˈkluːd]",
        chinese: "vt. 包含，包括",
    },
    {
        english: "income",
        phoneticSymbol: "[ˈɪnkʌm]",
        chinese: "n. 收入，所得",
    },
    {
        english: "increase",
        phoneticSymbol: "[ɪnˈkriːs]",
        chinese: "v. & n. 增加，繁殖",
    },
    {
        english: "indeed",
        phoneticSymbol: "[ɪnˈdiːd]",
        chinese: "a. 确实；实在",
    },
    {
        english: "independence",
        phoneticSymbol: "[ɪndɪˈpendəns]",
        chinese: "n. 独立",
    },
    {
        english: "independent",
        phoneticSymbol: "[ɪndɪˈpendənt]",
        chinese: "a.独立的,有主见的",
    },
    {
        english: "Indicate",
        phoneticSymbol: "['ɪndɪkeɪt]",
        chinese: "v.表明，象征，暗示",
    },
    {
        english: "industry",
        phoneticSymbol: "[ˈɪndəstrɪ]",
        chinese: "n. 工业，产业",
    },
    {
        english: "influence",
        phoneticSymbol: "[ˈɪnflʊəns]",
        chinese: "n.& v. 影响",
    },
    {
        english: "inform",
        phoneticSymbol: "[ɪnˈfɔːm]",
        chinese: "vt. 告诉； 通知",
    },
    {
        english: "information",
        phoneticSymbol: "[ɪnfəˈmeɪʃ(ə)n]",
        chinese: "n. 信息",
    },
    {
        english: "initial",
        phoneticSymbol: "[ɪˈnɪʃ(ə)l]",
        chinese: "a. 开始的，最初的",
    },
    {
        english: "injure",
        phoneticSymbol: "[ˈɪndʒə(r)]",
        chinese: "vt. 损害，伤害",
    },
    {
        english: "injury",
        phoneticSymbol: "[ˈɪndʒərɪ]",
        chinese: "n. 受伤处",
    },
    {
        english: "ink",
        phoneticSymbol: "[ɪŋk]",
        chinese: "n. 墨水，油墨",
    },
    {
        english: "inland",
        phoneticSymbol: "[ˈɪnlənd, ˈɪnlænd]",
        chinese: "a. 内陆的；内地的",
    },
    {
        english: "inn",
        phoneticSymbol: "[ɪn]",
        chinese: "n. 小旅店；小饭店",
    },
    {
        english: "innocent",
        phoneticSymbol: "[ˈɪnəsənt]",
        chinese: "a.无辜的，清白的",
    },
    {
        english: "insect",
        phoneticSymbol: "[ˈɪnsekt]",
        chinese: "n. 昆虫",
    },
    {
        english: "insert",
        phoneticSymbol: "[ɪnˈsɜːt]",
        chinese: "vt. 插入",
    },
    {
        english: "inside",
        phoneticSymbol: "[ɪnˈsaɪd]",
        chinese: "prep.在…里面 ad.在里面",
    },
    {
        english: "insist",
        phoneticSymbol: "[ɪnˈsɪst]",
        chinese: "vi. 坚持；坚决认为",
    },
    {
        english: "inspect",
        phoneticSymbol: "[ɪnˈspekt]",
        chinese: "vt. 检查；检验；审视",
    },
    {
        english: "inspire",
        phoneticSymbol: "[ɪnˈspaɪə(r)]",
        chinese: "vt. 鼓舞； 激励",
    },
    {
        english: "instant",
        phoneticSymbol: "[ˈɪnst(ə)nt]",
        chinese: "a. 瞬间；刹那",
    },
    {
        english: "instead",
        phoneticSymbol: "[ɪnˈsted]",
        chinese: "ad. 代替，顶替",
    },
    {
        english: "institute",
        phoneticSymbol: "[ˈɪnstɪtjuːt; (US) ˈɪnstətuːt]",
        chinese: "n. (研究)所, 院，学院",
    },
    {
        english: "institution",
        phoneticSymbol: "[ɪnstɪˈtjuːʃ(ə)n; (US) ɪnstəˈtuːʃn]",
        chinese: "n. (慈善、宗教等性质的)公共机构； 学校",
    },
    {
        english: "instruct",
        phoneticSymbol: "[ɪnˈstrʌkt]",
        chinese: "vt. 通知；指示；教",
    },
    {
        english: "instruction",
        phoneticSymbol: "[ɪnˈstrʌkʃ(ə)n]",
        chinese: "n. 说明,须知;教导",
    },
    {
        english: "instrument",
        phoneticSymbol: "[ˈɪnstrʊmənt]",
        chinese: "n. 乐器;工具,器械",
    },
    {
        english: "insurance",
        phoneticSymbol: "[ɪnˈʃʊərəns]",
        chinese: "n. 保险",
    },
    {
        english: "insure",
        phoneticSymbol: "[ɪnˈʃʊə(r)]",
        chinese: "vt. 给……保险",
    },
    {
        english: "intelligence",
        phoneticSymbol: "[ɪnˈtelɪdʒəns]",
        chinese: "n.智力,才智,智慧",
    },
    {
        english: "intend",
        phoneticSymbol: "[ɪnˈtend]",
        chinese: "vt. 想要，打算",
    },
    {
        english: "intention",
        phoneticSymbol: "[ɪnˈtenʃ(ə)n]",
        chinese: "n. 打算,计划,意图",
    },
    {
        english: "interest",
        phoneticSymbol: "[ˈɪntrəst]",
        chinese: "n. 兴趣，趣味;利息",
    },
    {
        english: "interesting",
        phoneticSymbol: "[ˈɪntrətɪŋ]",
        chinese: "a. 有趣的",
    },
    {
        english: "international",
        phoneticSymbol: "[ɪntəˈnæʃən(ə)l]",
        chinese: "a. 国际的",
    },
    {
        english: "Internet",
        phoneticSymbol: "[ˈɪntənet]",
        chinese: "n. 互联网，英特网",
    },
    {
        english: "interpreter",
        phoneticSymbol: "[ɪnˈtɜːprɪtə(r)]",
        chinese: "n.翻译",
    },
    {
        english: "interrupt",
        phoneticSymbol: "[ɪntəˈrʌpt]",
        chinese: "v. 打扰，打断",
    },
    {
        english: "interval",
        phoneticSymbol: "[ˈɪntəv(ə)l]",
        chinese: "n. 间歇；间隔",
    },
    {
        english: "interview",
        phoneticSymbol: "[ˈɪntəvjuː]",
        chinese: "n.& vt.采访,会见,面试",
    },
    {
        english: "into",
        phoneticSymbol: "[ˈɪntʊ, ˈɪntə]",
        chinese: "prep. 到…里;向内；变成",
    },
    {
        english: "introduce",
        phoneticSymbol: "[ɪntrəˈdjuːs; (US) -duːs]",
        chinese: "vt. 介绍",
    },
    {
        english: "introduction",
        phoneticSymbol: "[ɪntrəˈdʌkʃ(ə)n]",
        chinese: "n. 引进，介绍",
    },
    {
        english: "invent",
        phoneticSymbol: "[ɪnˈvent]",
        chinese: "vt. 发明，创造",
    },
    {
        english: "invention",
        phoneticSymbol: "[ɪnˈvenʃ(ə)n]",
        chinese: "n. 发明，创造",
    },
    {
        english: "invitation",
        phoneticSymbol: "[ɪnvɪˈteɪʃ(ə)n]",
        chinese: "n. 邀请，请帖",
    },
    {
        english: "invite",
        phoneticSymbol: "[ɪnˈvaɪt]",
        chinese: "vt. 邀请，招待",
    },
    {
        english: "Iiron",
        phoneticSymbol: "[ˈaɪən; (US) ˈaɪərn]",
        chinese: "n. 铁，熨斗 vt. 熨烫",
    },
    {
        english: "irrigate",
        phoneticSymbol: "[ˈɪrɪɡeɪt]",
        chinese: "vt. 灌溉",
    },
    {
        english: "irrigation",
        phoneticSymbol: "[ɪrɪˈɡeɪʃ(ə)n]",
        chinese: "n. 灌溉",
    },
    {
        english: "island",
        phoneticSymbol: "[ˈaɪlənd]",
        chinese: "n. 岛",
    },
    {
        english: "it",
        phoneticSymbol: "[ɪt]",
        chinese: "pron. 它",
    },
    {
        english: "its",
        phoneticSymbol: "[ɪts]",
        chinese: "pron. 它的",
    },
    {
        english: "itself",
        phoneticSymbol: "[ɪtˈself]",
        chinese: "pron. 它自己",
    },
    {
        english: "jacket",
        phoneticSymbol: "[ˈdʒækɪt]",
        chinese: "n. 短上衣，夹克衫",
    },
    {
        english: "jam",
        phoneticSymbol: "[dʒæm]",
        chinese: "n. 果酱；阻塞",
    },
    {
        english: "jar",
        phoneticSymbol: "[dʒɑː(r)]",
        chinese: "n. 罐子；坛子",
    },
    {
        english: "jaw",
        phoneticSymbol: "[dʒɔː]",
        chinese: "n. 下巴",
    },
    {
        english: "jazz",
        phoneticSymbol: "[dʒæz]",
        chinese: "n. 爵士音乐，爵士舞曲",
    },
    {
        english: "jeans",
        phoneticSymbol: "[dʒiːns]",
        chinese: "n. 牛仔裤",
    },
    {
        english: "jeep",
        phoneticSymbol: "[dʒiːp]",
        chinese: "n. 吉普车",
    },
    {
        english: "jet",
        phoneticSymbol: "[dʒet]",
        chinese: "n. 喷气式飞机；喷射（器）",
    },
    {
        english: "jewellery(Am. jewelry)",
        phoneticSymbol: "[ˈdʒuːəlrɪ]",
        chinese: "n. （总称）珠宝",
    },
    {
        english: "job",
        phoneticSymbol: "[dʒɔb]",
        chinese: "n. （一份）工作",
    },
    {
        english: "jog",
        phoneticSymbol: "[dʒɔɡ]",
        chinese: "v. 慢跑",
    },
    {
        english: "join",
        phoneticSymbol: "[dʒɔɪn]",
        chinese: "v.参加,加入;连接;会合",
    },
    {
        english: "joke",
        phoneticSymbol: "[dʒəʊk]",
        chinese: "n. 笑话",
    },
    {
        english: "journalist",
        phoneticSymbol: "[ˈdʒɜːnəlɪzt]",
        chinese: "n. 记者，新闻工作者",
    },
    {
        english: "journey",
        phoneticSymbol: "[ˈdʒɜːnɪ]",
        chinese: "n. 旅行，路程",
    },
    {
        english: "joy",
        phoneticSymbol: "[dʒɔɪ]",
        chinese: "n. 欢乐，高兴，乐趣",
    },
    {
        english: "judge",
        phoneticSymbol: "[dʒʌdʒ]",
        chinese: "n. 裁判；审判员；法官vt. 判断，断定",
    },
    {
        english: "judgement",
        phoneticSymbol: "['dʒʌdʒmənt]",
        chinese: "n. 裁判",
    },
    {
        english: "juice",
        phoneticSymbol: "[dʒuːs]",
        chinese: "n. 汁、液",
    },
    {
        english: "jump",
        phoneticSymbol: "[dʒʌmp]",
        chinese: "n. 跳跃；跳变 v. 跳跃；惊起；猛扑",
    },
    {
        english: "jungle",
        phoneticSymbol: "[ˈdʒʌŋɡ(ə)l]",
        chinese: "n. 丛林，密林",
    },
    {
        english: "junior",
        phoneticSymbol: "[ˈdʒuːnɪə(r)]",
        chinese: "a. 初级的；年少的",
    },
    {
        english: "just",
        phoneticSymbol: "[dʒʌst]",
        chinese: "ad. 刚才；恰好；不过；仅 a. 公正的",
    },
    {
        english: "justice",
        phoneticSymbol: "[ˈdʒʌstɪs]",
        chinese: "n. 正义；公正；司法",
    },
    {
        english: "kangaroo",
        phoneticSymbol: "[kæŋɡəˈruː]",
        chinese: "n. 大袋鼠",
    },
    {
        english: "keep (kept, kept)",
        phoneticSymbol: "[kiːp]",
        chinese: "v. 保持；保存；继续不断 vt. 培育，饲养",
    },
    {
        english: "kettle",
        phoneticSymbol: "[ˈket(ə)l]",
        chinese: "n. (烧水用的)水壶",
    },
    {
        english: "key",
        phoneticSymbol: "[kiː]",
        chinese: "n. 钥匙;答案;键;关键",
    },
    {
        english: "keyboard",
        phoneticSymbol: "[kiːbɔːd]",
        chinese: "n. 键盘",
    },
    {
        english: "kick",
        phoneticSymbol: "[kɪk]",
        chinese: "v.& n. 踢",
    },
    {
        english: "kid",
        phoneticSymbol: "[kɪd]",
        chinese: "n. 小孩",
    },
    {
        english: "kill",
        phoneticSymbol: "[kɪl]",
        chinese: "v. 杀死，弄死",
    },
    {
        english: "kilo",
        phoneticSymbol: "[ˈkiːləʊ]",
        chinese: "n. 千克；千米",
    },
    {
        english: "kilogram",
        phoneticSymbol: "[ˈkɪləɡræm]",
        chinese: "n. 千克",
    },
    {
        english: "kilometre",
        phoneticSymbol: "['kiləʊmi:tə(r)]",
        chinese: "e n. 千米（公里）",
    },
    {
        english: "kind",
        phoneticSymbol: "[kaɪnd]",
        chinese: "n. 种;类 a. 善良,友好的",
    },
    {
        english: "kindergarten",
        phoneticSymbol: "[kɪndəˈɡɑːt(ə)n]",
        chinese: "n. 幼儿园",
    },
    {
        english: "kindness",
        phoneticSymbol: "[ˈkaɪndnɪs]",
        chinese: "n. 仁慈；善良",
    },
    {
        english: "king",
        phoneticSymbol: "[kɪŋ]",
        chinese: "n. 国王",
    },
    {
        english: "kingdom",
        phoneticSymbol: "[ˈkɪŋdəm]",
        chinese: "n. 王国",
    },
    {
        english: "kiss",
        phoneticSymbol: "[kɪs]",
        chinese: "n.& vt. 吻，亲吻",
    },
    {
        english: "kitchen",
        phoneticSymbol: "[ˈkɪtʃɪn]",
        chinese: "n. 厨房",
    },
    {
        english: "kite",
        phoneticSymbol: "[kaɪt]",
        chinese: "n. 风筝",
    },
    {
        english: "knee",
        phoneticSymbol: "[niː]",
        chinese: "n. 膝盖",
    },
    {
        english: "knife",
        phoneticSymbol: "[naɪf]",
        chinese: "(复 knives) n.小刀;匕首;刀片",
    },
    {
        english: "knock",
        phoneticSymbol: "[nɔk]",
        chinese: "n.& v. 敲；打；击 ",
    },
    {
        english: "know(knew,known)",
        phoneticSymbol: "[nəʊ]",
        chinese: "v. 知道，了解；认识；懂得",
    },
    {
        english: "knowledge",
        phoneticSymbol: "[ˈnɔlɪdʒ]",
        chinese: "n. 知识，学问",
    },
    {
        english: "lab",
        phoneticSymbol: "[ˈnɔlɪdʒ]",
        chinese: "= laboratory n. 实验室",
    },
    {
        english: "labour (美labor)",
        phoneticSymbol: "[ˈleɪbə(r)]",
        chinese: "n. 劳动",
    },
    {
        english: "lack",
        phoneticSymbol: "[læk]",
        chinese: "n.& vt. 缺乏，缺少",
    },
    {
        english: "lady",
        phoneticSymbol: "[ˈleɪdɪ]",
        chinese: "n. 女士，夫人",
    },
    {
        english: "lake",
        phoneticSymbol: "[leɪk]",
        chinese: "n. 湖",
    },
    {
        english: "lamb",
        phoneticSymbol: "[læm]",
        chinese: "n. 羔羊",
    },
    {
        english: "lame",
        phoneticSymbol: "[leɪm]",
        chinese: "a. 跛的，瘸的，残废的",
    },
    {
        english: "lamp",
        phoneticSymbol: "[læmp]",
        chinese: "n. 灯，油灯；光源",
    },
    {
        english: "land",
        phoneticSymbol: "[lænd]",
        chinese: "n.陆地,土地v.登岸(陆)降落",
    },
    {
        english: "language",
        phoneticSymbol: "[ˈlæŋɡwɪdʒ]",
        chinese: "n. 语言",
    },
    {
        english: "lantern",
        phoneticSymbol: "[ˈlæntən]",
        chinese: "n. 灯笼；提灯",
    },
    {
        english: "lap",
        phoneticSymbol: "[læp]",
        chinese: "n. (人坐时)膝部.(跑道的)一圈",
    },
    {
        english: "large",
        phoneticSymbol: "[lɑːdʒ]",
        chinese: "a. 大的；巨大的",
    },
    {
        english: "last",
        phoneticSymbol: "[lɑːst; (US) læst]",
        chinese: "a.最近刚过去;最后的ad.最近刚过去;最后地 n.最后v.持续",
    },
    {
        english: "late",
        phoneticSymbol: "[leɪt]",
        chinese: "a.晚的,迟的ad.晚地,迟地",
    },
    {
        english: "latter",
        phoneticSymbol: "[ˈlætə(r)]",
        chinese: "n.（两者之中的）后者",
    },
    {
        english: "laugh",
        phoneticSymbol: "[lɑːf]",
        chinese: "n.& v. 笑，大笑；嘲笑",
    },
    {
        english: "laughter",
        phoneticSymbol: "[ˈlɑːftə(r); (US) ˈlæftər]",
        chinese: "n. 笑； 笑声",
    },
    {
        english: "laundry",
        phoneticSymbol: "[ˈlɔːndrɪ]",
        chinese: "n. 洗衣店;要洗的衣服",
    },
    {
        english: "lavatory",
        phoneticSymbol: "[ˈlævətrɪ; (US) ˈlævətɔːrɪ]",
        chinese: "n. 便所，厕所",
    },
    {
        english: "law",
        phoneticSymbol: "[lɔː]",
        chinese: "n. 法律，法令；定律",
    },
    {
        english: "lawyer",
        phoneticSymbol: "[ˈlɔːjə(r), ˈlɔɪə(r)]",
        chinese: "n. 律师",
    },
    {
        english: "lay (laid, laid)",
        phoneticSymbol: "[leɪ]",
        chinese: "vt. 放，搁",
    },
    {
        english: "lazy",
        phoneticSymbol: "[ˈleɪzɪ]",
        chinese: "a. 懒惰的",
    },
    {
        english: "lead (led, led)",
        phoneticSymbol: "[liːd]",
        chinese: "v. 领导，带领 n. 铅",
    },
    {
        english: "leader",
        phoneticSymbol: "[ˈliːdə(r)]",
        chinese: "n. 领袖，领导人",
    },
    {
        english: "leaf (复 leaves)",
        phoneticSymbol: "[liːf]",
        chinese: "n. （树，菜）叶",
    },
    {
        english: "league",
        phoneticSymbol: "[liːɡ]",
        chinese: "n. 联盟，社团",
    },
    {
        english: "leak",
        phoneticSymbol: "[liːk]",
        chinese: "vi. 漏； 渗",
    },
    {
        english: "learn (learnt, learnt；--ed --ed)",
        phoneticSymbol: "[lɜːn]",
        chinese: "vt. 学，学习，学会",
    },
    {
        english: "least",
        phoneticSymbol: "[liːst]",
        chinese: "n.最少，最少量",
    },
    {
        english: "leather",
        phoneticSymbol: "[ˈleðə(r)]",
        chinese: "n. 皮革",
    },
    {
        english: "leave (left, left)",
        phoneticSymbol: "[liːv]",
        chinese: "v. 离开;把…留下，剩下",
    },
    {
        english: "lecture",
        phoneticSymbol: "[ˈlektʃə(r)]",
        chinese: "n. 讲课，演讲",
    },
    {
        english: "left",
        phoneticSymbol: "[left]",
        chinese: "a.左边的 ad.向左 n.左,左边",
    },
    {
        english: "leg",
        phoneticSymbol: "[leɡ]",
        chinese: "n. 腿；腿脚；支柱",
    },
    {
        english: "legal",
        phoneticSymbol: "[ˈliːɡ(ə)l]",
        chinese: "a.与法律有关的，法律的",
    },
    {
        english: "lemon",
        phoneticSymbol: "[ˈlemən]",
        chinese: "n. 柠檬 a. 柠檬色(味)的",
    },
    {
        english: "lemonade",
        phoneticSymbol: "[leməˈneɪd]",
        chinese: "n. 柠檬水",
    },
    {
        english: "lend (lent, lent)",
        phoneticSymbol: "[lend]",
        chinese: "vt.借(出),把…借给",
    },
    {
        english: "length",
        phoneticSymbol: "[leŋθ]",
        chinese: "n. 长，长度，段，节",
    },
    {
        english: "lesson",
        phoneticSymbol: "[ˈles(ə)n]",
        chinese: "n. 课；功课；教训",
    },
    {
        english: "let (let, let)",
        phoneticSymbol: "[let]",
        chinese: "vt. 让",
    },
    {
        english: "letter",
        phoneticSymbol: "[ˈletə(r)]",
        chinese: "n. 信；字母",
    },
    {
        english: "level",
        phoneticSymbol: "[ˈlev(ə)l]",
        chinese: "n. 水平线，水平",
    },
    {
        english: "liberty",
        phoneticSymbol: "[ˈlɪbətɪ]",
        chinese: "n. 自由",
    },
    {
        english: "liberation",
        phoneticSymbol: "[lɪbəˈreɪʃ(ə)n]",
        chinese: "n. 解放",
    },
    {
        english: "librarian",
        phoneticSymbol: "[laɪˈbreərɪən]",
        chinese: "n. 图书管理员；（西方的）图书馆馆长",
    },
    {
        english: "library",
        phoneticSymbol: "[ˈlaɪbrərɪ; (US) ˈlaɪbrerɪ]",
        chinese: "n. 图书馆，图书室",
    },
    {
        english: "license",
        phoneticSymbol: "[ˈlaɪsəns]",
        chinese: "n. 执照，许可证",
    },
    {
        english: "lid",
        phoneticSymbol: "[lɪd]",
        chinese: "n. 盖子",
    },
    {
        english: "lie (lay, lain)",
        phoneticSymbol: "[laɪ]",
        chinese: "v. 躺;卧;平放;位于n.& vi. 谎言; 说谎",
    },
    {
        english: "life (复lives)",
        phoneticSymbol: "[laɪf]",
        chinese: "n. 生命；生涯；生活；人生；生物",
    },
    {
        english: "lift",
        phoneticSymbol: "[lɪft]",
        chinese: "v. 举起，抬起；（云、烟等）消散 n. （英）电梯",
    },
    {
        english: "light",
        phoneticSymbol: "[laɪt]",
        chinese:
            "n. 光，光亮；灯，灯光 vt. 点（火），点燃 a. 明亮的；轻的；浅色的",
    },
    {
        english: "lightning",
        phoneticSymbol: "[ˈlaɪtnɪŋ]",
        chinese: "n.闪电",
    },
    {
        english: "like",
        phoneticSymbol: "[laɪk]",
        chinese: "prep. 像，跟…一样 vt. 喜欢，喜爱",
    },
    {
        english: "likely",
        phoneticSymbol: "[ˈlaɪklɪ]",
        chinese: "a.很可能的",
    },
    {
        english: "limit",
        phoneticSymbol: "[ˈlɪmɪt]",
        chinese: "vt. 限制；减少",
    },
    {
        english: "line",
        phoneticSymbol: "[laɪn]",
        chinese: "n. 绳索，线，排，行，线路 v. 画线于，（使）成行",
    },
    {
        english: "link",
        phoneticSymbol: "[lɪŋk]",
        chinese: "v. 连接； 联系",
    },
    {
        english: "lion",
        phoneticSymbol: "[ˈlaɪən]",
        chinese: "n. 狮子",
    },
    {
        english: "lip",
        phoneticSymbol: "[lɪp]",
        chinese: "n. 嘴唇",
    },
    {
        english: "liquid",
        phoneticSymbol: "[ˈlɪkwɪd]",
        chinese: "n. & a. 液体；液体的",
    },
    {
        english: "list",
        phoneticSymbol: "[lɪst]",
        chinese: "n. 一览表，清单",
    },
    {
        english: "listen",
        phoneticSymbol: "[ˈlɪs(ə)n]",
        chinese: "vi. 听,仔细听",
    },
    {
        english: "literature",
        phoneticSymbol: "[ˈlɪtərətʃə(r); (US) ˈlɪtrətʃʊər]",
        chinese: "n. 文学",
    },
    {
        english: "literary",
        phoneticSymbol: "[ˈlɪtərərɪ; (US) ˈlɪtərerɪ]",
        chinese: "a. 文学的",
    },
    {
        english: "litre (美liter)",
        phoneticSymbol: "[liːtə(r)]",
        chinese: "n. 升； 公升",
    },
    {
        english: "litter",
        phoneticSymbol: "[ˈlɪtə(r)]",
        chinese: "v. 乱丢杂物",
    },
    {
        english: "little (less, least)",
        phoneticSymbol: "[ˈlɪt(ə)l]",
        chinese: "a.小的,少的 ad. 很少地, 稍许 n.没有多少,一点",
    },
    {
        english: "live",
        phoneticSymbol: "[lɪv]",
        chinese: "vi. 生活;居住;活着 a. 活的,活着的;实况,现场（直播）的",
    },
    {
        english: "lively",
        phoneticSymbol: "[ˈlaɪvlɪ]",
        chinese: "a. 活泼的;充满生气的",
    },
    {
        english: "load",
        phoneticSymbol: "[ləʊd]",
        chinese: "n. 担子，货物",
    },
    {
        english: "loaf",
        phoneticSymbol: "[ləʊf]",
        chinese: "n. 一个面包",
    },
    {
        english: "local",
        phoneticSymbol: "[ˈləʊk(ə)l]",
        chinese: "a. 当地的；地方的",
    },
    {
        english: "lock",
        phoneticSymbol: "[lɔk]",
        chinese: "n. 锁 vt. 锁，锁上",
    },
    {
        english: "lonely",
        phoneticSymbol: "[ˈləʊnlɪ]",
        chinese: "a. 孤独的，寂寞的",
    },
    {
        english: "long",
        phoneticSymbol: "[lɔŋ; (US) lɔːŋ]",
        chinese: "a. 长的，远 ad. 长久",
    },
    {
        english: "look",
        phoneticSymbol: "[lʊk]",
        chinese: "n. 看，瞧 v. 看，观看 v. link 看起来",
    },
    {
        english: "loose",
        phoneticSymbol: "[luːs]",
        chinese: "a. 松散的； 宽松的",
    },
    {
        english: "lorry",
        phoneticSymbol: "[ˈlɔrɪ; (US) ˈlɔːrɪ]",
        chinese: "n.（英）运货汽车，卡车",
    },
    {
        english: "loss",
        phoneticSymbol: "[lɔs; (US) lɔːs]",
        chinese: "n. 丧失；损耗",
    },
    {
        english: "lose (lost, lost)",
        phoneticSymbol: "[luːz]",
        chinese: "vt. 失去，丢失",
    },
    {
        english: "lot",
        phoneticSymbol: "[lɔt]",
        chinese: "n. 许多，好些",
    },
    {
        english: "loud",
        phoneticSymbol: "[laʊd]",
        chinese: "a. 大声的",
    },
    {
        english: "lounge",
        phoneticSymbol: "[laʊndʒ]",
        chinese: "n. 休息厅；休息室",
    },
    {
        english: "love",
        phoneticSymbol: "[lʌv]",
        chinese: "n.& vt. 爱；热爱;很喜欢",
    },
    {
        english: "lovely",
        phoneticSymbol: "[ˈlʌvlɪ]",
        chinese: "a. 美好的，可爱的",
    },
    {
        english: "low",
        phoneticSymbol: "[ləʊ]",
        chinese: "a.& ad. 低；矮",
    },
    {
        english: "luck",
        phoneticSymbol: "[lʌk]",
        chinese: "n. 运气，好运",
    },
    {
        english: "lucky",
        phoneticSymbol: "[ˈlʌkɪ]",
        chinese: "a. 运气好，侥幸",
    },
    {
        english: "luggage",
        phoneticSymbol: "[ˈlʌɡɪdʒ]",
        chinese: "n. (总称)行李",
    },
    {
        english: "lunch",
        phoneticSymbol: "[lʌntʃ]",
        chinese: "n. 午餐，午饭",
    },
    {
        english: "lung",
        phoneticSymbol: "[lʌŋ]",
        chinese: "n. 肺；肺脏",
    },
    {
        english: "machine",
        phoneticSymbol: "[məˈʃiːn]",
        chinese: "n. 机器",
    },
    {
        english: "madam/ madame",
        phoneticSymbol: "[ˈmædəm]",
        chinese: "n. 夫人,女士",
    },
    {
        english: "magazine",
        phoneticSymbol: "[mæɡəˈziːn]",
        chinese: "n. 杂志",
    },
    {
        english: "magic",
        phoneticSymbol: "[ˈmædʒɪk]",
        chinese: "a. 有魔力的",
    },
    {
        english: "maid",
        phoneticSymbol: "[meɪd]",
        chinese: "n. 女仆；侍女",
    },
    {
        english: "mail",
        phoneticSymbol: "[meɪl]",
        chinese: "n. 邮政,邮递 v. (美)邮寄",
    },
    {
        english: "mailbox",
        phoneticSymbol: "['meɪlbɒks]",
        chinese: "n. 邮筒；邮箱",
    },
    {
        english: "main",
        phoneticSymbol: "[meɪn]",
        chinese: "a. 主要的",
    },
    {
        english: "mainland",
        phoneticSymbol: "[ˈmeɪnlənd]",
        chinese: "n. 大陆",
    },
    {
        english: "major",
        phoneticSymbol: "[ˈmeɪdʒə(r)]",
        chinese: "a. 较大的；主要的",
    },
    {
        english: "majority",
        phoneticSymbol: "[məˈdʒɔrɪtɪ]",
        chinese: "n. 大多数 ",
    },
    {
        english: "make (made,made)",
        phoneticSymbol: "[meɪk]",
        chinese: "vt.制造,做;使得 n. 样式；制造",
    },
    {
        english: "male",
        phoneticSymbol: "[meɪl]",
        chinese: "a. 男（性）的；雄的",
    },
    {
        english: "man (复men)",
        phoneticSymbol: "[mæn]",
        chinese: "n. 成年男人;人类",
    },
    {
        english: "manage",
        phoneticSymbol: "[ˈmænɪdʒ]",
        chinese: "v. 管理；设法对付",
    },
    {
        english: "manager",
        phoneticSymbol: "[ˈmænɪdʒə(r)]",
        chinese: "n. 经理",
    },
    {
        english: "mankind",
        phoneticSymbol: "[mænˈkaɪnd]",
        chinese: "n. 人类;（总称）人",
    },
    {
        english: "manner",
        phoneticSymbol: "[ˈmænə(r)]",
        chinese: "n. 方式，态度，举止",
    },
    {
        english: "many (more, most)",
        phoneticSymbol: "[ˈmenɪ]",
        chinese: "pron. 许多人（或物）a. 许多的",
    },
    {
        english: "map",
        phoneticSymbol: "[mæp]",
        chinese: "n. 地图",
    },
    {
        english: "maple",
        phoneticSymbol: "[ˈmeɪp(ə)l]",
        chinese: "n. 枫树",
    },
    {
        english: "marathon",
        phoneticSymbol: "[ˈmærəθ(ə)n]",
        chinese: "n. 马拉松",
    },
    {
        english: "marble",
        phoneticSymbol: "[ˈmɑːb(ə)l]",
        chinese: "n. 大理石；玻璃弹子",
    },
    {
        english: "march",
        phoneticSymbol: "[mɑːtʃ]",
        chinese: "n. 游行，行进",
    },
    {
        english: "mark",
        phoneticSymbol: "[mɑːk]",
        chinese: "n.标记 vt.标明,作记号于",
    },
    {
        english: "market",
        phoneticSymbol: "[ˈmɑːkɪt]",
        chinese: "n. 市场，集市",
    },
    {
        english: "marriage",
        phoneticSymbol: "[ˈmærɪdʒ]",
        chinese: "n. 结婚，婚姻",
    },
    {
        english: "marry",
        phoneticSymbol: "[ˈmærɪ]",
        chinese: "v.（使）成婚，结婚",
    },
    {
        english: "mask",
        phoneticSymbol: "[mɑːsk; (US) mæsk]",
        chinese: "n. 口罩；面罩(具)；遮盖物 v. 戴面具；掩饰；伪装",
    },
    {
        english: "mass",
        phoneticSymbol: "[mæs]",
        chinese: "n. 众多;大量;（复）群众",
    },
    {
        english: "master",
        phoneticSymbol: "[ˈmɑːstə(r); (US) ˈmæstər]",
        chinese: "vt. 精通，掌握",
    },
    {
        english: "mat",
        phoneticSymbol: "[mæt]",
        chinese: "n. 垫子",
    },
    {
        english: "match",
        phoneticSymbol: "[mætʃ]",
        chinese: "vt. 使相配，使成对 n. 比赛，竞赛 n. 火柴",
    },
    {
        english: "material",
        phoneticSymbol: "[məˈtɪərɪəl]",
        chinese: "n. 材料，原料",
    },
    {
        english: "mathematics =math / maths",
        phoneticSymbol: "[mæθəˈmætɪks]",
        chinese: "n.（常作单数用）数学, (英美口语) 数学",
    },
    {
        english: "matter",
        phoneticSymbol: "[ˈmætə(r)]",
        chinese: "n. 要紧事，要紧, 事情；问题 vi. 要紧，有重大关系",
    },
    {
        english: "mature",
        phoneticSymbol: "[məˈtjʊə(r); (US) məˈtʊər]",
        chinese: "a. 成熟的",
    },
    {
        english: "maximum",
        phoneticSymbol: "[ˈmæksɪməm]",
        chinese: "a.& n. 最大量(的)； 最大限度(的)",
    },
    {
        english: "may",
        phoneticSymbol: "[meɪ ]",
        chinese: "modal v. 可以;也许,可能",
    },
    {
        english: "maybe",
        phoneticSymbol: "[ˈmeɪbiː]",
        chinese: "ad. 可能，大概，也许",
    },
    {
        english: "me",
        phoneticSymbol: "[miː, mɪ]",
        chinese: "pron. 我（宾格）",
    },
    {
        english: "meal",
        phoneticSymbol: "[miːl]",
        chinese: "n. 一餐（饭） ",
    },
    {
        english: "mean(meant,meant)",
        phoneticSymbol: "[miːn]",
        chinese: "vt.意思,意指",
    },
    {
        english: "meaning",
        phoneticSymbol: "[ˈmiːnɪŋ]",
        chinese: "n. 意思，含意",
    },
    {
        english: "means",
        phoneticSymbol: "[miːnz]",
        chinese: "n. 方法，手段；财产",
    },
    {
        english: "meanwhile",
        phoneticSymbol: "[ˈmiːnwaɪl; (US) ˈmɪnhwaɪl]",
        chinese: "ad. 同时",
    },
    {
        english: "measure",
        phoneticSymbol: "[ˈmeʒə(r)]",
        chinese: "v. 量",
    },
    {
        english: "meat",
        phoneticSymbol: "[miːt]",
        chinese: "n.（猪、牛、羊等的）肉",
    },
    {
        english: "medal",
        phoneticSymbol: "[ˈmed(ə)l]",
        chinese: "n. 奖牌",
    },
    {
        english: "media",
        phoneticSymbol: "[ˈmiːdɪə]",
        chinese: "n. 大众传播媒介",
    },
    {
        english: "medical",
        phoneticSymbol: "[ˈmedɪk(ə)l]",
        chinese: "a. 医学的，医疗的",
    },
    {
        english: "medicine",
        phoneticSymbol: "[ˈmeds(ə)n; (US) ˈmedɪsn]",
        chinese: "n. 药",
    },
    {
        english: "medium",
        phoneticSymbol: "[ˈmiːdɪəm]",
        chinese: "n.媒体,中间的,中等的",
    },
    {
        english: "meet (met, met)",
        phoneticSymbol: "[miːt]",
        chinese: "vt./ n. 遇见，见到 会；集会",
    },
    {
        english: "meeting",
        phoneticSymbol: "[ˈmiːtɪŋ]",
        chinese: "n.会,集会,会见,汇合点",
    },
    {
        english: "melon",
        phoneticSymbol: "[ˈmelən]",
        chinese: "n. （甜）瓜；瓜状物",
    },
    {
        english: "member",
        phoneticSymbol: "[ˈmembə(r)]",
        chinese: "n. 成员，会员",
    },
    {
        english: "memorial",
        phoneticSymbol: "[mɪˈmɔːrɪəl]",
        chinese: "n. 纪念馆",
    },
    {
        english: "memory",
        phoneticSymbol: "[ˈmemərɪ]",
        chinese: "n. 回忆，记忆",
    },
    {
        english: "mend",
        phoneticSymbol: "[mend]",
        chinese: "v. 修理，修补",
    },
    {
        english: "mental",
        phoneticSymbol: "[ˈment(ə)l]",
        chinese: "a. 精神的；脑力的",
    },
    {
        english: "mention",
        phoneticSymbol: "[ˈmenʃ(ə)n]",
        chinese: "n. 提及；记载 vt. 提到，说起；提名表扬",
    },
    {
        english: "menu",
        phoneticSymbol: "[ˈmenʃ(ə)n]",
        chinese: "n. 菜单",
    },
    {
        english: "merchant",
        phoneticSymbol: "[ˈmɜːtʃənt]",
        chinese: "a. 商业的；商人的 n. 商人；生意人",
    },
    {
        english: "merciful",
        phoneticSymbol: "[ˈmɜːsɪfʊl]",
        chinese: "a. 仁慈的；宽大的",
    },
    {
        english: "mercy",
        phoneticSymbol: "[ˈmɜːsɪ]",
        chinese: "n. 怜悯",
    },
    {
        english: "merely",
        phoneticSymbol: "[ˈmɪəlɪ]",
        chinese: "ad. 仅仅，只不过",
    },
    {
        english: "merry",
        phoneticSymbol: "[ˈmerɪ]",
        chinese: "a. 高兴的，愉快的",
    },
    {
        english: "mess",
        phoneticSymbol: "[mes]",
        chinese: "n. 凌乱",
    },
    {
        english: "message",
        phoneticSymbol: "[ˈmesɪdʒ]",
        chinese: "n. 消息，音信",
    },
    {
        english: "messy",
        phoneticSymbol: "[ˈmesɪ]",
        chinese: "a. 乱七八糟的",
    },
    {
        english: "metal",
        phoneticSymbol: "[ˈmet(ə)l]",
        chinese: "n. 金属 a. 金属制成的",
    },
    {
        english: "method",
        phoneticSymbol: "[ˈmeθəd]",
        chinese: "n. 方法，办法",
    },
    {
        english: "metre (美meter)",
        phoneticSymbol: "['mi:tə]",
        chinese: "n. 米，公尺",
    },
    {
        english: "microscope",
        phoneticSymbol: "[ˈmaɪkrəskəʊp]",
        chinese: "n. 显微镜",
    },
    {
        english: "middle",
        phoneticSymbol: "[ˈmɪd(ə)l]",
        chinese: "n. 中间;当中;中级的",
    },
    {
        english: "midnight",
        phoneticSymbol: "[ˈmɪdnaɪt]",
        chinese: "n. 午夜",
    },
    {
        english: "might",
        phoneticSymbol: "[maɪt]",
        chinese: "v. aux. (may的过去式，助动词) 可能，也许，或许",
    },
    {
        english: "mild",
        phoneticSymbol: "[maɪld]",
        chinese: "a. 温和,暖和的,凉爽的",
    },
    {
        english: "mile",
        phoneticSymbol: "[maɪl]",
        chinese: "n. 英里",
    },
    {
        english: "milk",
        phoneticSymbol: "[mɪlk]",
        chinese: "n. 牛奶 vt. 挤奶",
    },
    {
        english: "millimetre(Am. millimeter)",
        phoneticSymbol: "[ˈmɪlimi:tə(r)]",
        chinese: "n. 毫米",
    },
    {
        english: "millionaire",
        phoneticSymbol: "[mɪljəˈneə(r)]",
        chinese: "n. 百万富翁",
    },
    {
        english: "mind",
        phoneticSymbol: "[maɪnd]",
        chinese: "n. 思想,想法 v.介意,关心",
    },
    {
        english: "mine",
        phoneticSymbol: "[maɪn]",
        chinese: "n.矿藏,矿山vt.开采(矿物) pron. 我的",
    },
    {
        english: "mineral",
        phoneticSymbol: "[ˈmɪnər(ə)l]",
        chinese: "n. 矿物质，矿物",
    },
    {
        english: "minibus",
        phoneticSymbol: "[ˈmɪnɪbʌs]",
        chinese: "n. 小型公共汽车",
    },
    {
        english: "minimum",
        phoneticSymbol: "[ˈmɪnɪməm]",
        chinese: "a.最小的",
    },
    {
        english: "minister",
        phoneticSymbol: "[ˈmɪnɪstə(r)]",
        chinese: "n. 部长；牧师",
    },
    {
        english: "ministry",
        phoneticSymbol: "[ˈmɪnɪstrɪ]",
        chinese: "n.（政府的）部",
    },
    {
        english: "minority",
        phoneticSymbol: "[maɪˈnɔrɪtɪ; (US) -ˈnɔːr-]",
        chinese: "n. 少数；少数民族",
    },
    {
        english: "minus",
        phoneticSymbol: "[ˈmaɪnəs]",
        chinese: "prep. & a.负的，减去的",
    },
    {
        english: "minute",
        phoneticSymbol: "[ˈmɪnɪt]",
        chinese: "n. 分钟;一会儿，瞬间",
    },
    {
        english: "mirror",
        phoneticSymbol: "[ˈmɪrə(r)]",
        chinese: "n. 镜子",
    },
    {
        english: "missile",
        phoneticSymbol: "[ˈmɪsaɪl]",
        chinese: "n 导弹",
    },
    {
        english: "mist",
        phoneticSymbol: "[mɪst]",
        chinese: "n. 雾",
    },
    {
        english: "mistake (mistook, mistaken)",
        phoneticSymbol: "[mɪsˈteɪk]",
        chinese: "n. 错误 vt. 弄错",
    },
    {
        english: "mistaken",
        phoneticSymbol: "[mɪsˈteɪkən]",
        chinese: "a. 错误的",
    },
    {
        english: "misunderstand (misunderstood, misunderstood)",
        phoneticSymbol: "[mɪsʌndəˈstænd]",
        chinese: "v. 误会；不理解",
    },
    {
        english: "mix",
        phoneticSymbol: "[mɪks]",
        chinese: "v. 混合，搅拌",
    },
    {
        english: "mixture",
        phoneticSymbol: "[ˈmɪkstʃə(r)]",
        chinese: "n. 混合物",
    },
    {
        english: "mobile",
        phoneticSymbol: "[ˈməʊbaɪl; (US) məʊbl]",
        chinese: "a. 活动的，可移动的",
    },
    {
        english: "mobile phone",
        phoneticSymbol: "[ˈməʊbaɪl fəʊn]",
        chinese: "手提电话，手机",
    },
    {
        english: "model",
        phoneticSymbol: "[ˈmɔd(ə)l]",
        chinese: "n.模型,原形,范例,模范",
    },
    {
        english: "modem",
        phoneticSymbol: "[ˈməʊdem]",
        chinese: "n. 调制解调器",
    },
    {
        english: "modern",
        phoneticSymbol: "[ˈmɔd(ə)n]",
        chinese: "a. 现代的",
    },
    {
        english: "modest",
        phoneticSymbol: "[ˈmɔdɪst]",
        chinese: "a. 谦虚的；谦逊的",
    },
    {
        english: "Mom =Mum",
        phoneticSymbol: "[mɒm]",
        chinese: "n. 妈妈",
    },
    {
        english: "moment",
        phoneticSymbol: "[ˈməʊmənt]",
        chinese: "n. 片刻，瞬间",
    },
    {
        english: "mommy = mummy",
        phoneticSymbol: "[ˈmɔmɪ]",
        chinese: "n. 妈妈（美）",
    },
    {
        english: "money",
        phoneticSymbol: "[ˈmʌnɪ]",
        chinese: "n. 钱；货币",
    },
    {
        english: "monitor",
        phoneticSymbol: "[ˈmɔnɪtə(r)]",
        chinese: "n. （班级内的）班长；纠察生；监视器",
    },
    {
        english: "monkey",
        phoneticSymbol: "[ˈmʌŋkɪ]",
        chinese: "n. 猴子",
    },
    {
        english: "month",
        phoneticSymbol: "[mʌnθ]",
        chinese: "n. 月，月份",
    },
    {
        english: "monument",
        phoneticSymbol: "[ˈmɔnjʊmənt]",
        chinese: "n. 纪念碑，纪念物",
    },
    {
        english: "moon",
        phoneticSymbol: "[muːn]",
        chinese: "n. 月球；月光；月状物",
    },
    {
        english: "moon cake",
        phoneticSymbol: "[muːn keɪk]",
        chinese: "n. 月饼",
    },
    {
        english: "mop",
        phoneticSymbol: "[mɔp]",
        chinese: "n. / v. 拖把 拖地",
    },
    {
        english: "moral",
        phoneticSymbol: "[ˈmɔr(ə)l; (US) ˈmɔːrəl]",
        chinese: "a.道德的 n.寓意,道德启示",
    },
    {
        english: "more（much或many 的比较级）",
        phoneticSymbol: "[mɔː(r)]",
        chinese:
            "a./ ad.另外的；附加的；较多的再；另外；而且；更 n. 更多的量；另外的一些",
    },
    {
        english: "morning",
        phoneticSymbol: "[ˈmɔːnɪŋ]",
        chinese: "n. 早晨，上午",
    },
    {
        english: "Moslem",
        phoneticSymbol: "[ˈmɔzləm]",
        chinese: "n. 伊斯兰教徒,回教徒",
    },
    {
        english: "Mosquito",
        phoneticSymbol: "[məˈskiːtəʊ]",
        chinese: "n.蚊子",
    },
    {
        english: "most (much或many 的最高级)",
        phoneticSymbol: "[məʊst; (US) mɔːst]",
        chinese: "a. & ad.最多 n.大部分,大多数",
    },
    {
        english: "mother",
        phoneticSymbol: "[ˈmʌðə(r)]",
        chinese: "n. 母亲",
    },
    {
        english: "motherland",
        phoneticSymbol: "[ˈmʌðəlænd]",
        chinese: "n. 祖国",
    },
    {
        english: "motivation",
        phoneticSymbol: "[məʊtɪ'veɪʃn]",
        chinese: "n. （做事的）动机",
    },
    {
        english: "motor",
        phoneticSymbol: "[ˈməʊtə(r)]",
        chinese: "n. 发动机，马达",
    },
    {
        english: "motorcycle",
        phoneticSymbol: "['məʊtəsaikl]",
        chinese: "n. 摩托车",
    },
    {
        english: "motto",
        phoneticSymbol: "[ˈmɔtəʊ]",
        chinese: "n. 箴言，格言",
    },
    {
        english: "mountain(s)",
        phoneticSymbol: "[ˈmaʊntɪn(z)]",
        chinese: "n. 山，山脉",
    },
    {
        english: "mountainous",
        phoneticSymbol: "[ˈmaʊntɪnəs]",
        chinese: "a. 多山的",
    },
    {
        english: "mourn",
        phoneticSymbol: "[mɔːn]",
        chinese: "vt. 哀痛； 哀悼",
    },
    {
        english: "mouse (复mice)",
        phoneticSymbol: "[maʊs]",
        chinese: "n. 鼠，耗子；（计算机）鼠标",
    },
    {
        english: "moustache",
        phoneticSymbol: "[məs'tɑ:ʃ]",
        chinese: "n. 小胡子",
    },
    {
        english: "mouth",
        phoneticSymbol: "[maʊθ]",
        chinese: "n. 嘴，口",
    },
    {
        english: "move",
        phoneticSymbol: "[muːv]",
        chinese: "v. 移动，搬动，搬家",
    },
    {
        english: "movement",
        phoneticSymbol: "[ˈmuːvmənt]",
        chinese: "n. 运动，活动",
    },
    {
        english: "movie",
        phoneticSymbol: "[ˈmuːvɪ]",
        chinese: "n.（口语）电影",
    },
    {
        english: "Mr. (mister)",
        phoneticSymbol: "[ˈmɪstə(r)]",
        chinese: "n. 先生（用于姓名前）",
    },
    {
        english: "Mrs. (mistress)",
        phoneticSymbol: "[ˈmɪsɪz]",
        chinese: "n. 夫人, 太太（称呼已婚妇女）",
    },
    {
        english: "Ms.",
        phoneticSymbol: "[mɪz]",
        chinese: "n. 女士(用在婚姻状况不明的女子姓名前)",
    },
    {
        english: "much (more，most)",
        phoneticSymbol: "[mʌtʃ]",
        chinese: "a. 许多的，大量的 ad. 非常；更加 n. 许多，大量，非常",
    },
    {
        english: "mud",
        phoneticSymbol: "[mʌd]",
        chinese: "n. 泥, 泥浆",
    },
    {
        english: "muddy",
        phoneticSymbol: "[ˈmʌdɪ]",
        chinese: "a. 泥泞的",
    },
    {
        english: "multiply",
        phoneticSymbol: "[ˈmʌltɪplaɪ]",
        chinese: "vt. 乘；使相乘",
    },
    {
        english: "murder",
        phoneticSymbol: "[ˈmɜːdə(r)]",
        chinese: "vt. 谋杀",
    },
    {
        english: "museum",
        phoneticSymbol: "[mjuːˈzɪəm]",
        chinese: "n. 博物馆，博物院",
    },
    {
        english: "mushroom",
        phoneticSymbol: "[ˈmʌʃrʊm]",
        chinese: "n. 蘑菇",
    },
    {
        english: "music",
        phoneticSymbol: "[ˈmjuːzɪk]",
        chinese: "n. 音乐，乐曲",
    },
    {
        english: "musical",
        phoneticSymbol: "[ˈmjuːzɪk(ə)l]",
        chinese: "a. 音乐的，爱好音乐的 n. 音乐片",
    },
    {
        english: "musician",
        phoneticSymbol: "[mjuːˈzɪʃ(ə)n]",
        chinese: "n. 音乐家，乐师",
    },
    {
        english: "must",
        phoneticSymbol: "[mʌst ]",
        chinese: "modal v.必须,应当;必定是",
    },
    {
        english: "mustard",
        phoneticSymbol: "[ˈmʌstəd]",
        chinese: "n. 芥末，芥子粉",
    },
    {
        english: "mutton",
        phoneticSymbol: "[ˈmʌt(ə)n]",
        chinese: "n. 羊肉",
    },
    {
        english: "my",
        phoneticSymbol: "[maɪ]",
        chinese: "pron. 我的",
    },
    {
        english: "myself",
        phoneticSymbol: "[maɪˈself]",
        chinese: "pron. 我自己",
    },
    {
        english: "nail",
        phoneticSymbol: "[neɪl]",
        chinese: "n. 钉，钉子",
    },
    {
        english: "name",
        phoneticSymbol: "[neɪm]",
        chinese: "n. 名字,姓名,名称 vt. 命名,名叫",
    },
    {
        english: "narrow",
        phoneticSymbol: "[ˈnærəʊ]",
        chinese: "a. 狭窄的",
    },
    {
        english: "nation",
        phoneticSymbol: "[ˈneɪʃ(ə)n]",
        chinese: "n. 民族，国家",
    },
    {
        english: "national",
        phoneticSymbol: "[ˈnæʃən(ə)l]",
        chinese: "a. 国家的,全国性的，民族的",
    },
    {
        english: "nationality",
        phoneticSymbol: "[næʃəˈnælətɪ]",
        chinese: "n. 国籍",
    },
    {
        english: "nationwide",
        phoneticSymbol: "[ˈneɪʃ(ə)nwaɪd]",
        chinese: "ad.全国范围内的,全国性的",
    },
    {
        english: "native",
        phoneticSymbol: "[ˈneɪtɪv]",
        chinese: "a. 本土的，本国的",
    },
    {
        english: "natural",
        phoneticSymbol: "[ˈnætʃər(ə)l]",
        chinese: "a. 自然的",
    },
    {
        english: "nature",
        phoneticSymbol: "[ˈneɪtʃə(r)]",
        chinese: "n. 自然, 性质，种类",
    },
    {
        english: "navy",
        phoneticSymbol: "[ˈneɪvɪ]",
        chinese: "n. 海军",
    },
    {
        english: "near",
        phoneticSymbol: "[nɪə(r)]",
        chinese: "a. 近的 ad. 附近，邻近 prep. 在……附近，靠近",
    },
    {
        english: "nearby",
        phoneticSymbol: "[ˈnɪəbaɪ]",
        chinese: "a. 附近的",
    },
    {
        english: "nearly",
        phoneticSymbol: "[ˈnɪəlɪ]",
        chinese: "ad. 将近，几乎",
    },
    {
        english: "neat",
        phoneticSymbol: "[niːt]",
        chinese: "a. 整洁的；灵巧的",
    },
    {
        english: "necessary",
        phoneticSymbol: "[ˈnesəsərɪ; (US) ˈnesəserɪ]",
        chinese: "a. 必需的，必要的",
    },
    {
        english: "neck",
        phoneticSymbol: "[nek]",
        chinese: "n. 颈，脖子",
    },
    {
        english: "necklace",
        phoneticSymbol: "[ˈneklɪs]",
        chinese: "n. 项链",
    },
    {
        english: "need",
        phoneticSymbol: "[niːd]",
        chinese: "n. 需要,需求aux.& v.需要,必须",
    },
    {
        english: "needle",
        phoneticSymbol: "[niːd(ə)l]",
        chinese: "n. 针",
    },
    {
        english: "negotiate",
        phoneticSymbol: "[nɪˈɡəʊʃɪeɪt]",
        chinese: "v.谈判，协商",
    },
    {
        english: "neighbour (美neighbor)",
        phoneticSymbol: "[ˈneɪbə(r)]",
        chinese: "n. 邻居，邻人",
    },
    {
        english: "neighbourhood (美neighborhood)",
        phoneticSymbol: "['neibəhud]",
        chinese: "n. 四邻；邻近地区",
    },
    {
        english: "neither",
        phoneticSymbol: "[ˈnaɪðə(r), ˈniːðə(r)]",
        chinese: "a. （两者）都不;也不",
    },
    {
        english: "nephew",
        phoneticSymbol: "[ˈnefjuː, ˈnevjuː]",
        chinese: "n. 侄子，外甥",
    },
    {
        english: "nervous",
        phoneticSymbol: "[ˈnɜːvəs]",
        chinese: "a. 紧张不安的",
    },
    {
        english: "nest",
        phoneticSymbol: "[nest]",
        chinese: "n. 巢；窝",
    },
    {
        english: "net",
        phoneticSymbol: "[net]",
        chinese: "n. 网",
    },
    {
        english: "network",
        phoneticSymbol: "[ˈnetwɜːk]",
        chinese: "n. 网络，网状系统",
    },
    {
        english: "never",
        phoneticSymbol: "[ˈnevə(r)]",
        chinese: "ad. 决不，从来没有",
    },
    {
        english: "new",
        phoneticSymbol: "[njuː; (US) nuː]",
        chinese: "a. 新的；新鲜的",
    },
    {
        english: "news",
        phoneticSymbol: "[njuːz; (US) nuːz]",
        chinese: "n. 新闻，消息",
    },
    {
        english: "newspaper",
        phoneticSymbol: "[njuːz; (US) nuːz]",
        chinese: "n. 报纸",
    },
    {
        english: "next",
        phoneticSymbol: "[nekst]",
        chinese:
            "a. 最近的，紧挨着的，隔壁的；下一次 ad. 随后，然后，下一步 n. 下一个人（东西）",
    },
    {
        english: "nice",
        phoneticSymbol: "[naɪs]",
        chinese: "a.令人愉快;好的漂亮的",
    },
    {
        english: "niece",
        phoneticSymbol: "[niːs]",
        chinese: "n. 侄女，甥女",
    },
    {
        english: "night",
        phoneticSymbol: "[naɪt]",
        chinese: "n. 夜；夜间",
    },
    {
        english: "no",
        phoneticSymbol: "[nəʊ]",
        chinese: "ad. 不,不是 a.没有,无,不",
    },
    {
        english: "No.(缩) = number",
        phoneticSymbol: "[ˈnʌmbə(r)]",
        chinese: "n.数字;号码",
    },
    {
        english: "noble",
        phoneticSymbol: "[ˈnəʊb(ə)l]",
        chinese: "a. 高贵的，贵族的",
    },
    {
        english: "nobody",
        phoneticSymbol: "[ˈnəʊbədɪ]",
        chinese: "n. 渺小人物 pron. 没有人，谁也不",
    },
    {
        english: "nod",
        phoneticSymbol: "[nɔd]",
        chinese: "vi. 点头",
    },
    {
        english: "noise",
        phoneticSymbol: "[nɔɪz]",
        chinese: "n. 声音，噪声，喧闹声",
    },
    {
        english: "noisy",
        phoneticSymbol: "[ˈnɔɪzɪ]",
        chinese: "a. 喧闹的，嘈杂的",
    },
    {
        english: "none",
        phoneticSymbol: "[nʌn]",
        chinese: "pron.无任何东西, 无一人",
    },
    {
        english: "noodle",
        phoneticSymbol: "[ˈnuːd(ə)l]",
        chinese: "n. 面条",
    },
    {
        english: "noon",
        phoneticSymbol: "[nuːn]",
        chinese: "n. 中午，正午",
    },
    {
        english: "nor",
        phoneticSymbol: "[nɔː(r)]",
        chinese: "conj. 也不",
    },
    {
        english: "normal",
        phoneticSymbol: "[ˈnɔːm(ə)l]",
        chinese: "n.& a. 正常的（状态）",
    },
    {
        english: "north",
        phoneticSymbol: "[nɔːθ]",
        chinese: "a.北的;朝北的;从北来的 ad.向（在,从）北方 n.北;北方;北部",
    },
    {
        english: "northeast",
        phoneticSymbol: "[nɒ:θ'i:st]",
        chinese: "n. 东北（部）",
    },
    {
        english: "northern",
        phoneticSymbol: "[ˈnɔːð(ə)n]",
        chinese: "a. 北方的，北部的",
    },
    {
        english: "northwest",
        phoneticSymbol: "[nɒ:θ'west]",
        chinese: "n. 西北",
    },
    {
        english: "nose",
        phoneticSymbol: "[nəʊz]",
        chinese: "n. 鼻",
    },
    {
        english: "not",
        phoneticSymbol: "[nɔt]",
        chinese: "ad. 不，没",
    },
    {
        english: "note",
        phoneticSymbol: "[nəʊt]",
        chinese:
            "n. 便条，笔记，注释；钞票，纸币；音符，音调 vt. 记下，记录；注意，留意",
    },
    {
        english: "notebook",
        phoneticSymbol: "[ˈnəʊtbʊk]",
        chinese: "n. 笔记簿",
    },
    {
        english: "nothing",
        phoneticSymbol: "[ˈnʌθɪŋ]",
        chinese: "n. 没有东西,没有什么 adv.一点也不；并不",
    },
    {
        english: "notice",
        phoneticSymbol: "[ˈnəʊtɪs]",
        chinese: "n. 布告，通告；注意 vt. 注意，注意到",
    },
    {
        english: "novel",
        phoneticSymbol: "[ˈnɔv(ə)l]",
        chinese: "n. （长篇）小说",
    },
    {
        english: "novelist",
        phoneticSymbol: "[ˈnɔvəlɪst]",
        chinese: "n. 小说家",
    },
    {
        english: "now",
        phoneticSymbol: "[naʊ]",
        chinese: "ad. 现在",
    },
    {
        english: "nowadays",
        phoneticSymbol: "[ˈnaʊədeɪz]",
        chinese: "ad. 当今，现在",
    },
    {
        english: "nowhere",
        phoneticSymbol: "[ˈnəʊweə(r); (US) ˈnəʊhweər]",
        chinese: "ad.任何地方都不,无处",
    },
    {
        english: "nuclear",
        phoneticSymbol: "[ˈnjuːklɪə(r)]",
        chinese: "a. 原子核的，原子能的，核动力的",
    },
    {
        english: "numb",
        phoneticSymbol: "[nʌm]",
        chinese: "a. 麻木的，失去知觉的，迟钝的",
    },
    {
        english: "number",
        phoneticSymbol: "[ˈnʌmbə(r)]",
        chinese: "n. 数,数字,号码,数量",
    },
    {
        english: "nurse",
        phoneticSymbol: "[nɜːs]",
        chinese: "n. 护士；保育员",
    },
    {
        english: "nursery",
        phoneticSymbol: "[ˈnɜːsərɪ]",
        chinese: "n. 托儿所",
    },
    {
        english: "nut",
        phoneticSymbol: "[nʌt]",
        chinese: "n.坚果,果仁(胡桃,栗子等)",
    },
    {
        english: "nutrition",
        phoneticSymbol: "[njuːˈtrɪʃ(ə)n]",
        chinese: "n. 营养，滋养",
    },
    {
        english: "obey",
        phoneticSymbol: "[əʊˈbeɪ]",
        chinese: "v. 服从，顺从，听从",
    },
    {
        english: "object",
        phoneticSymbol: "[ˈɔbdʒɪkt]",
        chinese: "n. 物，物体；宾语",
    },
    {
        english: "observe",
        phoneticSymbol: "[əbˈzɜːv]",
        chinese: "v. 观察，监视，观测",
    },
    {
        english: "obtain",
        phoneticSymbol: "[əbˈteɪn]",
        chinese: "vt. 获得；得到",
    },
    {
        english: "obvious",
        phoneticSymbol: "[ˈɔbvɪəs]",
        chinese: "a. 显然",
    },
    {
        english: "occupation",
        phoneticSymbol: "[ɔkjʊˈpeɪʃ(ə)n]",
        chinese: "n. 职业，工作",
    },
    {
        english: "occupy",
        phoneticSymbol: "[ˈɔkjupai]",
        chinese: "vt. 占领;使用，住在…;使从事，使忙碌;任职",
    },
    {
        english: "occur",
        phoneticSymbol: "[əˈkɜː(r)]",
        chinese: "vi. 发生",
    },
    {
        english: "ocean",
        phoneticSymbol: "[ˈəʊʃ(ə)n]",
        chinese: "n. 海洋",
    },
    {
        english: "o'clock",
        phoneticSymbol: "[əˈklɔk]",
        chinese: "n. 点钟",
    },
    {
        english: "of",
        phoneticSymbol: "[ɔv, əv; (US) ɔːf]",
        chinese: "prep.(表所属,数量,) ….的",
    },
    {
        english: "off",
        phoneticSymbol: "[ˈɔf; (US) ɔːf]",
        chinese: "prep. 离开,脱离,（走）开",
    },
    {
        english: "offence",
        phoneticSymbol: "[of·fence || ə'fens]",
        chinese: "n. 违法行为，犯罪",
    },
    {
        english: "offer",
        phoneticSymbol: "[ˈɔfə(r); (US) ɔːfər]",
        chinese: "n.& vt. 提供；建议",
    },
    {
        english: "office",
        phoneticSymbol: "[ˈɔfɪs; (US) ˈɔːfɪs]",
        chinese: "n. 办公室",
    },
    {
        english: "officer",
        phoneticSymbol: "[ˈɔfɪsə(r); (US) ˈɔːfɪsər]",
        chinese: "n. 军官;公务员,官员；警察，警官",
    },
    {
        english: "official",
        phoneticSymbol: "[əˈfɪʃ(ə)l; (US) ˈɔːf-]",
        chinese: "n.（公司、团体或政府）官员 ,高级职员 a.官方,政府的",
    },
    {
        english: "offshore",
        phoneticSymbol: "[ˈɔfʃɔː(r); (US) ˈɔːf-]",
        chinese: "a. 近海的",
    },
    {
        english: "often",
        phoneticSymbol: "[ˈɔf(ə)n; (US) ˈɔːfn]",
        chinese: "ad. 经常，常常",
    },
    {
        english: "oh",
        phoneticSymbol: "[əʊ]",
        chinese: "int. 哦！啊！",
    },
    {
        english: "oil",
        phoneticSymbol: "[ɔɪl]",
        chinese: "n. 油",
    },
    {
        english: "oilfield",
        phoneticSymbol: "[ˈɔɪlfiːld]",
        chinese: "n.油田",
    },
    {
        english: "O.K.",
        phoneticSymbol: "[əʊˈkeɪ]",
        chinese: "ad. （口语）好,对,不错",
    },
    {
        english: "old",
        phoneticSymbol: "[əʊld]",
        chinese: "a. 老的，旧的",
    },
    {
        english: "Olympic(s)",
        phoneticSymbol: "[əˈlɪmpɪk]",
        chinese: "a. & n. 奥林匹克",
    },
    {
        english: "on",
        phoneticSymbol: "[ɔn]",
        chinese:
            "prep. 在…上（时），关于 ad. （穿，放…）上；接通；进行下  去；（电灯）开",
    },
    {
        english: "once",
        phoneticSymbol: "[wʌns]",
        chinese: "n.& ad. 一次,一度,从前 conj. 一旦",
    },
    {
        english: "one",
        phoneticSymbol: "[wʌn]",
        chinese: "pron. 一（个，只…）(pl. ones) num. 一",
    },
    {
        english: "oneself",
        phoneticSymbol: "[wʌnˈself]",
        chinese: "pron. 自己；自身",
    },
    {
        english: "onion",
        phoneticSymbol: "[ˈʌnjən]",
        chinese: "n. 洋葱；洋葱头",
    },
    {
        english: "only",
        phoneticSymbol: "[ˈəʊnlɪ]",
        chinese: "a. 惟一的，仅有的 ad. 仅仅，只，才",
    },
    {
        english: "onto",
        phoneticSymbol: "[ˈɔntʊ]",
        chinese: "prep. 到…的上面",
    },
    {
        english: "open",
        phoneticSymbol: "[ˈəʊpən]",
        chinese: "a.开着的,开的 vt.开,打开",
    },
    {
        english: "opening",
        phoneticSymbol: "[ˈəʊpənɪŋ]",
        chinese: "n. 开放，口子",
    },
    {
        english: "opera",
        phoneticSymbol: "[ˈɔpərə]",
        chinese: "n. 歌剧",
    },
    {
        english: "operate",
        phoneticSymbol: "[ˈɔpəreɪt]",
        chinese: "v. 做手术，运转；实施，负责, 经营，管理",
    },
    {
        english: "operation",
        phoneticSymbol: "[ɔpəˈreɪʃ(ə)n]",
        chinese: "n. 手术，操作",
    },
    {
        english: "operator",
        phoneticSymbol: "[ˈɔpəreɪtə(r)]",
        chinese: "n. 接线员",
    },
    {
        english: "opinion",
        phoneticSymbol: "[əˈpɪnjən]",
        chinese: "n. 看法，见解",
    },
    {
        english: "oppose",
        phoneticSymbol: "[əˈpəʊz]",
        chinese: "vt. 反对；反抗",
    },
    {
        english: "opposite",
        phoneticSymbol: "[ˈɔpəzɪt]",
        chinese: "n. 相反，对面 a. 相反的，对面的",
    },
    {
        english: "optimistic",
        phoneticSymbol: "[ɔptɪˈmɪstɪk]",
        chinese: "a. 乐观的",
    },
    {
        english: "optional",
        phoneticSymbol: "[ˈɔpʃən(ə)l]",
        chinese: "a. 可选择的，选修的",
    },
    {
        english: "or",
        phoneticSymbol: "[ə(r), ɔː(r)]",
        chinese: "conj. 或；就是；否则",
    },
    {
        english: "oral",
        phoneticSymbol: "[ˈɔːrəl]",
        chinese: "a. 口述的，口头上的",
    },
    {
        english: "orange",
        phoneticSymbol: "[ˈɔrɪndʒ; (US) ˈɔːr-]",
        chinese: "n. 橘子，橙子，橘汁 a. 橘色的，橙色的",
    },
    {
        english: "orbit",
        phoneticSymbol: "[ˈɔːbɪt]",
        chinese: "n.（天体等的）运行轨道",
    },
    {
        english: "order",
        phoneticSymbol: "[ˈɔːdə(r)]",
        chinese: "n. 顺序",
    },
    {
        english: "order",
        phoneticSymbol: "[ˈɔːdə(r)]",
        chinese: "vt. 定购，定货；点菜",
    },
    {
        english: "ordinary",
        phoneticSymbol: "[ˈɔːdɪnərɪ; (US) ˈɔːrdənerɪ]",
        chinese: "a. 普通的，平常的",
    },
    {
        english: "organ",
        phoneticSymbol: "[ˈɔːɡən]",
        chinese: "n. （人，动物）器官",
    },
    {
        english: "organise(Am. organize)",
        phoneticSymbol: "['ɔ:gənaiz]",
        chinese: "vt. 组织",
    },
    {
        english: "organisation(Am. organization)",
        phoneticSymbol: "[ɔːɡənaɪˈzeɪʃ(ə)n]",
        chinese: "n. 组织，机构",
    },
    {
        english: "origin",
        phoneticSymbol: "[ˈɔrɪdʒɪn]",
        chinese: "n. 起源，由来",
    },
    {
        english: "other",
        phoneticSymbol: "[ˈʌðə(r)]",
        chinese: "pron. 别人，别的东西 a. 别的,另外的",
    },
    {
        english: "otherwise",
        phoneticSymbol: "[ˈʌðəwaɪz]",
        chinese: "ad.要不然,否则,另样",
    },
    {
        english: "ought",
        phoneticSymbol: "[ɔːt]",
        chinese: "v.& aux.应该，应当",
    },
    {
        english: "our",
        phoneticSymbol: "[ˈaʊə(r)]",
        chinese: "pron.我们的",
    },
    {
        english: "ours",
        phoneticSymbol: "[ˈaʊəz]",
        chinese: "pron.我们的",
    },
    {
        english: "ourselves",
        phoneticSymbol: "[aʊəˈselvz]",
        chinese: "pron. 我们自己",
    },
    {
        english: "out",
        phoneticSymbol: "[aʊt]",
        chinese: "ad. 出外;在外,向外;熄",
    },
    {
        english: "outcome",
        phoneticSymbol: "[ˈaʊtkʌm]",
        chinese: "n. 结果，效果",
    },
    {
        english: "outdoors",
        phoneticSymbol: "[aʊtˈdɔːz]",
        chinese: "ad. 在户外, 在野外",
    },
    {
        english: "outer",
        phoneticSymbol: "[ˈaʊtə(r)]",
        chinese: "a. 外部的，外面的",
    },
    {
        english: "outgoing",
        phoneticSymbol: "[ˈaʊtɡəʊɪŋ]",
        chinese: "a. 爱交际的,外向的",
    },
    {
        english: "outing",
        phoneticSymbol: "[ˈaʊtɪŋ]",
        chinese: "n. 郊游，远足",
    },
    {
        english: "outline",
        phoneticSymbol: "[ˈaʊtlaɪn]",
        chinese: "n. 概述，略述",
    },
    {
        english: "output",
        phoneticSymbol: "[ˈaʊtpʊt]",
        chinese: "n. 产量，输出量",
    },
    {
        english: "outside",
        phoneticSymbol: "[aʊtˈsaɪd]",
        chinese: "n. 外面 ad. 在外面；向外面 prep. 在…外面",
    },
    {
        english: "outspoken",
        phoneticSymbol: "[aʊtˈspəʊkən]",
        chinese: "a. 直率，坦诚",
    },
    {
        english: "outstanding",
        phoneticSymbol: "[aʊtˈstændɪŋ]",
        chinese: "a. 优秀的，杰出的",
    },
    {
        english: "outward(s)",
        phoneticSymbol: "[ˈaʊtwəd]",
        chinese: "ad. 向外的，外出的",
    },
    {
        english: "oval",
        phoneticSymbol: "[ˈəʊv(ə)l]",
        chinese: "n.& adj.椭圆；椭圆形的",
    },
    {
        english: "over",
        phoneticSymbol: "[ˈəʊvə(r)]",
        chinese: "prep. 在…上方,越过,遍及 ad. 翻倒,遍布,越过,结束",
    },
    {
        english: "overcoat",
        phoneticSymbol: "[ˈəʊvəkəʊt]",
        chinese: "n. 大衣",
    },
    {
        english: "overcome",
        phoneticSymbol: "[əʊvəˈkʌm]",
        chinese: "v. 克服，解决",
    },
    {
        english: "overhead",
        phoneticSymbol: "[əʊvəˈhed]",
        chinese: "a.在头顶上;架空的",
    },
    {
        english: "overlook",
        phoneticSymbol: "[əʊvəˈlʊk]",
        chinese: "v. 忽略,不予理会",
    },
    {
        english: "overweight",
        phoneticSymbol: "[əʊvəˈweɪt]",
        chinese: "a. 太胖的,超重的",
    },
    {
        english: "owe",
        phoneticSymbol: "[əʊ]",
        chinese: "vt. 欠（债等）",
    },
    {
        english: "own",
        phoneticSymbol: "[əʊn]",
        chinese: "a. 自己的 v. 拥有,所有",
    },
    {
        english: "owner",
        phoneticSymbol: "[ˈəʊnə(r)]",
        chinese: "n. 物主，所有人",
    },
    {
        english: "ownership",
        phoneticSymbol: "[ˈəʊnəʃɪp]",
        chinese: "n. 所有制",
    },
    {
        english: "ox (复oxen)",
        phoneticSymbol: "[ɔks]",
        chinese: "n. 牛；公牛",
    },
    {
        english: "oxygen",
        phoneticSymbol: "[ˈɔksɪdʒ(ə)n]",
        chinese: "n. 氧；氧气",
    },
    {
        english: "pace",
        phoneticSymbol: "[peɪs]",
        chinese: "n. 步子；节奏",
    },
    {
        english: "Pacific",
        phoneticSymbol: "[pəˈsɪfɪk]",
        chinese: "a. 太平洋的",
    },
    {
        english: "pack",
        phoneticSymbol: "[pæk]",
        chinese: "n. 包,捆;（猎犬、野兽的）一群 v.(为运输或储存而)打包",
    },
    {
        english: "package",
        phoneticSymbol: "[ˈpækɪdʒ]",
        chinese: "n. （尤指包装好或密封的容器）一包，一袋，一盒",
    },
    {
        english: "packet",
        phoneticSymbol: "[ˈpækɪt]",
        chinese: "n. 小包裹，袋",
    },
    {
        english: "paddle",
        phoneticSymbol: "[ˈpæd(ə)l]",
        chinese: "n. 桨状物，蹼",
    },
    {
        english: "page",
        phoneticSymbol: "[peɪdʒ]",
        chinese: "n. 页，页码",
    },
    {
        english: "pain",
        phoneticSymbol: "[peɪn]",
        chinese: "n. 疼痛，疼",
    },
    {
        english: "painful",
        phoneticSymbol: "[ˈpeɪnfʊl]",
        chinese: "a. 使痛的，使痛苦的",
    },
    {
        english: "paint",
        phoneticSymbol: "[peɪnt]",
        chinese: "n.油漆 vt.油漆,粉刷,绘画",
    },
    {
        english: "painter",
        phoneticSymbol: "[ˈpeɪntə(r)]",
        chinese: "n. 绘画者,（油）画家",
    },
    {
        english: "painting",
        phoneticSymbol: "[ˈpeɪntɪŋ]",
        chinese: "n. 油画，水彩画",
    },
    {
        english: "pair",
        phoneticSymbol: "[peə(r)]",
        chinese: "n. 一双，一对",
    },
    {
        english: "palace",
        phoneticSymbol: "[ˈpælɪs]",
        chinese: "n. 宫，宫殿",
    },
    {
        english: "pale",
        phoneticSymbol: "[peɪl]",
        chinese: "a. 苍白的，灰白的",
    },
    {
        english: "pan",
        phoneticSymbol: "[pæn]",
        chinese: "n. 平底锅",
    },
    {
        english: "pancake",
        phoneticSymbol: "[ˈpænkeɪk]",
        chinese: "n. 薄煎饼",
    },
    {
        english: "panda",
        phoneticSymbol: "[ˈpændə]",
        chinese: "n. 熊猫",
    },
    {
        english: "panic",
        phoneticSymbol: "[ˈpænɪk]",
        chinese: "a./ v.惊慌,恐慌,惶恐不安",
    },
    {
        english: "paper",
        phoneticSymbol: "[ˈpeɪpə(r)]",
        chinese: "n. 纸；报纸",
    },
    {
        english: "paperwork",
        phoneticSymbol: "[ˈpeɪpəwɜːk]",
        chinese: "n. 日常文书工作",
    },
    {
        english: "paragraph",
        phoneticSymbol: "[ˈpærəɡrɑːf; (US) ˈpærəgræf]",
        chinese: "n. （文章的）段落",
    },
    {
        english: "parcel",
        phoneticSymbol: "[ˈpɑːs(ə)l]",
        chinese: "n. 包裹",
    },
    {
        english: "pardon",
        phoneticSymbol: "[ˈpɑːd(ə)n]",
        chinese: "n. 原谅,宽恕,对不起",
    },
    {
        english: "parent",
        phoneticSymbol: "[ˈpeərənt]",
        chinese: "n. 父(母)，双亲",
    },
    {
        english: "park",
        phoneticSymbol: "[ˈpærɪs]",
        chinese: "n. 公园",
    },
    {
        english: "park",
        phoneticSymbol: "[pɑːk]",
        chinese: "vt. 停放（汽车）",
    },
    {
        english: "parking",
        phoneticSymbol: "[ˈpɑːkɪŋ]",
        chinese: "n. 停车",
    },
    {
        english: "parrot",
        phoneticSymbol: "[ˈpærət]",
        chinese: "n. 鹦鹉",
    },
    {
        english: "part",
        phoneticSymbol: "[pɑːt]",
        chinese:
            "n. 部分；成分；角色；部件；零件 a. 局部的；部分的 v. 分离；分开；分割",
    },
    {
        english: "participate",
        phoneticSymbol: "[pɑːˈtɪsɪpeɪt]",
        chinese: "v. 参加，参与",
    },
    {
        english: "particular",
        phoneticSymbol: "[pəˈtɪkjʊlə(r)]",
        chinese: "a. 特殊的，个别的",
    },
    {
        english: "partly",
        phoneticSymbol: "[ˈpɑːtlɪ]",
        chinese: "ad.部分地,在一定程度上",
    },
    {
        english: "partner",
        phoneticSymbol: "[ˈpɑːtnə(r)]",
        chinese: "n. 搭档，合作者",
    },
    {
        english: "part-time",
        phoneticSymbol: "[pɑːt -taɪm]",
        chinese: "a.& ad. 兼职的； 部分时间的（地）",
    },
    {
        english: "party",
        phoneticSymbol: "[ˈpɑːtɪ]",
        chinese: "n. 聚会，晚会；党派",
    },
    {
        english: "pass",
        phoneticSymbol: "[pɑːs; (US) pæs]",
        chinese: "vt. 传，递；经过；通过",
    },
    {
        english: "passage",
        phoneticSymbol: "[ˈpæsɪdʒ]",
        chinese: "n. （文章等的）一节，一段；通道；走廊",
    },
    {
        english: "passenger",
        phoneticSymbol: "[ˈpæsɪndʒə(r)]",
        chinese: "n. 乘客，旅客",
    },
    {
        english: "passer-by",
        phoneticSymbol: "['pɑ:sə-baɪ]",
        chinese: "n. 过客，过路人",
    },
    {
        english: "passive",
        phoneticSymbol: "[ˈpæsɪv]",
        chinese: "a. 被动的",
    },
    {
        english: "passport",
        phoneticSymbol: "[ˈpɑːspɔːt; (US) ˈpæ-]",
        chinese: "n. 护照",
    },
    {
        english: "past",
        phoneticSymbol: "[pɑːst; (US) pæst]",
        chinese: "ad. 过 n.过去，昔日，往事 prep. 过…，走过某处",
    },
    {
        english: "patent",
        phoneticSymbol: "[ˈpeɪt(ə)nt; (US) ˈpætnt]",
        chinese: "n.专利权，专利证书",
    },
    {
        english: "path",
        phoneticSymbol: "[pɑːθ; (US) pæθ]",
        chinese: "n. 小道，小径",
    },
    {
        english: "patient",
        phoneticSymbol: "[ˈpeɪʃ(ə)nt]",
        chinese: "n. 病人",
    },
    {
        english: "pattern",
        phoneticSymbol: "[ˈpæt(ə)n]",
        chinese: "n. 式样",
    },
    {
        english: "pause",
        phoneticSymbol: "[pɔːz]",
        chinese: "n.& vi. 中止，暂停；停止",
    },
    {
        english: "pay",
        phoneticSymbol: "[peɪ]",
        chinese: "(paid, paid) v. 付钱，给…报酬 n. 工资",
    },
    {
        english: "P.E.(缩) =physical education",
        phoneticSymbol: "[piːiː]",
        chinese: "体育",
    },
    {
        english: "P.C.(缩) =personal computer",
        phoneticSymbol: "[piːsiː]",
        chinese: "个人电脑",
    },
    {
        english: "pea",
        phoneticSymbol: "[piː]",
        chinese: "n. 豌豆",
    },
    {
        english: "peace",
        phoneticSymbol: "[piːs]",
        chinese: "n. 和平",
    },
    {
        english: "peaceful",
        phoneticSymbol: "[ˈpiːsfʊl]",
        chinese: "a. 和平的，安宁的",
    },
    {
        english: "peach",
        phoneticSymbol: "[piːtʃ]",
        chinese: "n. 桃子",
    },
    {
        english: "pear",
        phoneticSymbol: "[peə(r)]",
        chinese: "n. 梨子，梨树",
    },
    {
        english: "pedestrian",
        phoneticSymbol: "[pɪˈdestrɪən]",
        chinese: "n. 步行者，行人",
    },
    {
        english: "pen",
        phoneticSymbol: "[pen]",
        chinese: "n. 钢笔，笔",
    },
    {
        english: "pence",
        phoneticSymbol: "[pens]",
        chinese: "n. 便士 (penny的复数)",
    },
    {
        english: "pencil",
        phoneticSymbol: "[ˈpens(ə)l]",
        chinese: "n. 铅笔",
    },
    {
        english: "penny",
        phoneticSymbol: "[ˈpenɪ]",
        chinese: "(英复pence) n. （英）便士；美分",
    },
    {
        english: "pension",
        phoneticSymbol: "[ˈpenʃ(ə)n]",
        chinese: "n. 养老金",
    },
    {
        english: "people",
        phoneticSymbol: "[ˈpiːp(ə)l]",
        chinese: "n. 人，人们；人民",
    },
    {
        english: "pepper",
        phoneticSymbol: "[ˈpepə(r)]",
        chinese: "n. 胡椒粉",
    },
    {
        english: "per",
        phoneticSymbol: "[pə(r)]",
        chinese: "prep. 每，每一",
    },
    {
        english: "percent",
        phoneticSymbol: "[pəˈsent]",
        chinese: "n. 百分之……",
    },
    {
        english: "percentage",
        phoneticSymbol: "[pəˈsentədʒ]",
        chinese: "n. 百分率",
    },
    {
        english: "perfect",
        phoneticSymbol: "[kwestʃəˈneə(r)]",
        chinese: "a. 完美的，极好的",
    },
    {
        english: "perform",
        phoneticSymbol: "[pəˈfɔːm]",
        chinese: "v. 表演，履行；行动",
    },
    {
        english: "performance",
        phoneticSymbol: "[pəˈfɔːm]",
        chinese: "n. 演出，表演",
    },
    {
        english: "performer",
        phoneticSymbol: "[pəˈfɔːmə(r)]",
        chinese: "n. 表演者，执行者",
    },
    {
        english: "perfume",
        phoneticSymbol: "[ˈpɜːfjuːm]",
        chinese: "n. 香水",
    },
    {
        english: "perhaps",
        phoneticSymbol: "[pəˈhæps]",
        chinese: "ad. 可能，或",
    },
    {
        english: "period",
        phoneticSymbol: "[ˈpɪərɪəd]",
        chinese: "n. 时期，时代",
    },
    {
        english: "permanent",
        phoneticSymbol: "[ˈpɜːmənənt]",
        chinese: "a. 永久的，永恒的",
    },
    {
        english: "permission",
        phoneticSymbol: "[pəˈmɪʃ(ə)n]",
        chinese: "n. 允许,许可,同意",
    },
    {
        english: "permit",
        phoneticSymbol: "[pəˈmɪt]",
        chinese: "vt.许可,允许;执照 n.许可证",
    },
    {
        english: "person",
        phoneticSymbol: "[ˈpɜːs(ə)n]",
        chinese: "n. 人",
    },
    {
        english: "personal",
        phoneticSymbol: "[ˈpɜːsən(ə)l]",
        chinese: "a. 个人的，私人的",
    },
    {
        english: "personnel",
        phoneticSymbol: "[pɜːsəˈnel]",
        chinese: "n. 全体人员，职员",
    },
    {
        english: "personally",
        phoneticSymbol: "[ˈpɜːsənəlɪ]",
        chinese: "ad. 就自己而言",
    },
    {
        english: "persuade",
        phoneticSymbol: "[ˈpɜːsənəlɪ]",
        chinese: "vt. 说服，劝说",
    },
    {
        english: "pest",
        phoneticSymbol: "[pest]",
        chinese: "n. 害虫",
    },
    {
        english: "pet",
        phoneticSymbol: "[pet]",
        chinese: "n. 宠物，爱畜",
    },
    {
        english: "petrol",
        phoneticSymbol: "[ˈpetr(ə)l]",
        chinese: "n. 石油",
    },
    {
        english: "phenomenon (pl. phenomena)",
        phoneticSymbol: "[fɪˈnɔmɪnən; (US) -nɔn-]",
        chinese: "n. 现象",
    },
    {
        english: "phone = telephone",
        phoneticSymbol: "[fəʊn]",
        chinese: "v. 打电话 n. 电话，电话机",
    },
    {
        english: "photo =photograph",
        phoneticSymbol: "[ˈfəʊtəʊ]",
        chinese: "n. 照片",
    },
    {
        english: "photograph",
        phoneticSymbol: "[ˈfəʊtəɡrɑːf; (US) -ɡræf]",
        chinese: "n. 照片",
    },
    {
        english: "photographer",
        phoneticSymbol: "[fəˈtɔɡrəfə(r)]",
        chinese: "n. 摄影师",
    },
    {
        english: "phrase",
        phoneticSymbol: "[freɪz]",
        chinese: "n. 短语；习惯用语",
    },
    {
        english: "physical",
        phoneticSymbol: "[ˈfɪzɪk(ə)l]",
        chinese: "a. 身体的；物理的",
    },
    {
        english: "physician",
        phoneticSymbol: "[fɪˈzɪʃ(ə)n]",
        chinese: "n.(有行医执照的)医生",
    },
    {
        english: "physicist",
        phoneticSymbol: "[ˈfɪzɪsɪst]",
        chinese: "n. 物理学家",
    },
    {
        english: "physics",
        phoneticSymbol: "[ˈfɪzɪks]",
        chinese: "n. 物理（学）",
    },
    {
        english: "pianist",
        phoneticSymbol: "[ˈfɪzɪks]",
        chinese: "n. 钢琴家",
    },
    {
        english: "piano",
        phoneticSymbol: "[pɪˈænəʊ]",
        chinese: "n. 钢琴",
    },
    {
        english: "pick",
        phoneticSymbol: "[pɪk]",
        chinese: "v. 拾起，采集；挑选",
    },
    {
        english: "picnic",
        phoneticSymbol: "[ˈpɪknɪk]",
        chinese: "n.& v. 野餐",
    },
    {
        english: "picture",
        phoneticSymbol: "[ˈpɪktʃə(r)]",
        chinese: "n. 图片，画片，照片",
    },
    {
        english: "pie",
        phoneticSymbol: "[paɪ]",
        chinese: "n. 甜馅饼",
    },
    {
        english: "piece",
        phoneticSymbol: "[paɪ]",
        chinese: "n. 一块（片，张，件…）",
    },
    {
        english: "pig",
        phoneticSymbol: "[paɪ]",
        chinese: "n. 猪",
    },
    {
        english: "pile",
        phoneticSymbol: "[paɪ]",
        chinese: "n. 堆",
    },
    {
        english: "pill",
        phoneticSymbol: "[pɪl]",
        chinese: "n. 药丸，药片",
    },
    {
        english: "pillow",
        phoneticSymbol: "[pɪl]",
        chinese: "n. 枕头",
    },
    {
        english: "pilot",
        phoneticSymbol: "[ˈpaɪlət]",
        chinese: "n. 飞行员",
    },
    {
        english: "pin",
        phoneticSymbol: "[pɪn]",
        chinese: "n. 别针 v. 别住, 钉住",
    },
    {
        english: "pine",
        phoneticSymbol: "[paɪn]",
        chinese: "n. 松树",
    },
    {
        english: "pineapple",
        phoneticSymbol: "[ˈpaɪnæp(ə)l]",
        chinese: "n. 菠萝",
    },
    {
        english: "ping-pong",
        phoneticSymbol: "[pɪŋ-pɔɡ]",
        chinese: "n. 乒乓球",
    },
    {
        english: "pint",
        phoneticSymbol: "[paɪnt]",
        chinese: "n.（液量单位）品脱",
    },
    {
        english: "pioneer",
        phoneticSymbol: "[paɪəˈnɪə(r)]",
        chinese: "n. 先锋，开拓者",
    },
    {
        english: "pipe",
        phoneticSymbol: "[paɪp]",
        chinese: "n. 管子，输送管",
    },
    {
        english: "pity",
        phoneticSymbol: "[ˈpɪtɪ]",
        chinese: "n. 怜悯，同情",
    },
    {
        english: "place",
        phoneticSymbol: "[pleɪs]",
        chinese: "n. 地方，处所 v. 放置，安置，安排",
    },
    {
        english: "plain",
        phoneticSymbol: "[pleɪn]",
        chinese: "a. 家常的； 普通的",
    },
    {
        english: "plan",
        phoneticSymbol: "[plæn]",
        chinese: "n.& v. 计划，打算",
    },
    {
        english: "plane",
        phoneticSymbol: "[pleɪn]",
        chinese: "n. 飞机",
    },
    {
        english: "planet",
        phoneticSymbol: "[ˈplænɪt]",
        chinese: "n. 行星",
    },
    {
        english: "plant",
        phoneticSymbol: "[plɑːnt; (US) ˈplænt]",
        chinese: "vt. 种植，播种 n. 植物",
    },
    {
        english: "plastic",
        phoneticSymbol: "[ˈplæstɪk]",
        chinese: "a. 塑料的",
    },
    {
        english: "plate",
        phoneticSymbol: "[pleɪt]",
        chinese: "n. 板；片；牌；盘子；盆子",
    },
    {
        english: "platform",
        phoneticSymbol: "[ˈplætfɔːm]",
        chinese: "n. 讲台,(车站的)月台",
    },
    {
        english: "play",
        phoneticSymbol: "[pleɪ]",
        chinese: "v. 玩；打（球）；游戏；播放 n. 玩耍，戏剧",
    },
    {
        english: "playground",
        phoneticSymbol: "[ˈpleɪgraʊnd]",
        chinese: "n. 操场，运动场",
    },
    {
        english: "pleasant",
        phoneticSymbol: "[ˈplezənt]",
        chinese: "a. 令人愉快的，舒适的",
    },
    {
        english: "please",
        phoneticSymbol: "[pliːz]",
        chinese: "v. 请,使人高兴,使人满意",
    },
    {
        english: "pleased",
        phoneticSymbol: "[pliːzd]",
        chinese: "a. 高兴的",
    },
    {
        english: "pleasure",
        phoneticSymbol: "[pliːzd]",
        chinese: "n. 高兴，愉快",
    },
    {
        english: "plenty",
        phoneticSymbol: "[pliːzd]",
        chinese: "n. 充足，大量",
    },
    {
        english: "plot",
        phoneticSymbol: "[plɔt]",
        chinese: "v. / n. 故事情节，密谋",
    },
    {
        english: "plug",
        phoneticSymbol: "[plʌɡ]",
        chinese: "n. 塞子 vt.（用塞子）把…塞住",
    },
    {
        english: "plus",
        phoneticSymbol: "[plʌs]",
        chinese: "prep.加，加上",
    },
    {
        english: "p.m./pm, P.M. /PM",
        phoneticSymbol: "[piːem]",
        chinese: "n. 下午,午后",
    },
    {
        english: "pocket",
        phoneticSymbol: "[ˈpɔkɪt]",
        chinese: "n. （衣服的）口袋",
    },
    {
        english: "poem",
        phoneticSymbol: "[ˈpəʊɪm]",
        chinese: "n. 诗",
    },
    {
        english: "poet",
        phoneticSymbol: "[ˈpəʊɪt]",
        chinese: "n. 诗人",
    },
    {
        english: "point",
        phoneticSymbol: "[pɔɪnt]",
        chinese: "v. 指，指向 n. 点；分数",
    },
    {
        english: "poison",
        phoneticSymbol: "[ˈpɔɪz(ə)n]",
        chinese: "n. 毒药",
    },
    {
        english: "poisonous",
        phoneticSymbol: "[ˈpɔɪzənəs]",
        chinese: "a. 有毒的，致命的",
    },
    {
        english: "pole",
        phoneticSymbol: "[pəʊl]",
        chinese: "n. 杆，电线杆；",
    },
    {
        english: "police",
        phoneticSymbol: "[pəˈliːs]",
        chinese: "n. 警察，警务人员",
    },
    {
        english: "policeman (policemen)",
        phoneticSymbol: "[pəˈliːsmən]",
        chinese: "n.警察,巡警policewoman ( policewomen) n.女警察",
    },
    {
        english: "policy",
        phoneticSymbol: "[ˈpɔlɪsɪ]",
        chinese: "n. 政策，方针，原则",
    },
    {
        english: "polish",
        phoneticSymbol: "[ˈpɔlɪsɪ]",
        chinese: "v.擦亮 n.擦光剂,亮光剂",
    },
    {
        english: "polite",
        phoneticSymbol: "[pəˈlaɪt]",
        chinese: "a. 有礼貌的,有教养的",
    },
    {
        english: "political",
        phoneticSymbol: "[pəˈlɪtɪk(ə)l]",
        chinese: "a. 政治的",
    },
    {
        english: "politician",
        phoneticSymbol: "[pɔlɪˈtɪʃ(ə)n]",
        chinese: "n. 政治家",
    },
    {
        english: "politics",
        phoneticSymbol: "[ˈpɔlɪtɪks]",
        chinese: "n. 政治",
    },
    {
        english: "pollute",
        phoneticSymbol: "[pəˈluːt]",
        chinese: "vt. 污染",
    },
    {
        english: "pollution",
        phoneticSymbol: "[pəˈluːʃ(ə)n]",
        chinese: "n. 污染",
    },
    {
        english: "pond",
        phoneticSymbol: "[pɔnd]",
        chinese: "n. 池塘",
    },
    {
        english: "pool",
        phoneticSymbol: "[puːl]",
        chinese: "n. 水塘，水池",
    },
    {
        english: "poor",
        phoneticSymbol: "[pʊə(r)]",
        chinese: "a.贫穷；可怜；不好的,差的",
    },
    {
        english: "pop = popular",
        phoneticSymbol: "[pɔp]",
        chinese: "a. (口语) （音乐、艺术等）大众的，通俗的",
    },
    {
        english: "popcorn",
        phoneticSymbol: "[ˈpɔpkɔːn]",
        chinese: "n. 爆米花",
    },
    {
        english: "popular",
        phoneticSymbol: "[ˈpɔpjʊlə(r)]",
        chinese: "a. 流行,大众,受欢迎的",
    },
    {
        english: "population",
        phoneticSymbol: "[pɔpjʊˈleɪʃ(ə)n]",
        chinese: "n. 人口，人数",
    },
    {
        english: "pork",
        phoneticSymbol: "[pɔːk]",
        chinese: "n. 猪肉",
    },
    {
        english: "porridge",
        phoneticSymbol: "[ˈpɔrɪdʒ; (US) ˈpɔːrɪdʒ]",
        chinese: "n. 稀饭，粥",
    },
    {
        english: "port",
        phoneticSymbol: "[pɔːt]",
        chinese: "n. 港口，码头",
    },
    {
        english: "portable",
        phoneticSymbol: "[ˈpɔːtəb(ə)l]",
        chinese: "a.手提的，便携式的",
    },
    {
        english: "porter",
        phoneticSymbol: "[ˈpɔːtə(r)]",
        chinese: "n. （火车站或旅馆处的）搬运工",
    },
    {
        english: "position",
        phoneticSymbol: "[pəˈzɪʃ(ə)n]",
        chinese: "n. 位置",
    },
    {
        english: "positive",
        phoneticSymbol: "[ ˈpɒzətɪv]",
        chinese: "adj. 积极的;确实的，肯定的",
    },
    {
        english: "possess",
        phoneticSymbol: "[pəˈzɪʃ(ə)n]",
        chinese: "vt. 占有；拥有",
    },
    {
        english: "possession",
        phoneticSymbol: "[pəˈzeʃ(ə)n]",
        chinese: "n. 所有，拥有；财产，所有物",
    },
    {
        english: "possibility",
        phoneticSymbol: "[pɔsɪˈbɪlɪtɪ]",
        chinese: "vn. 可能，可能性",
    },
    {
        english: "possible",
        phoneticSymbol: "[ˈpɔsɪb(ə)l]",
        chinese: "a. 可能的",
    },
    {
        english: "post",
        phoneticSymbol: "[pəʊst]",
        chinese: "n. 邮政，邮寄，邮件 v. 投寄； 邮寄",
    },
    {
        english: "postage",
        phoneticSymbol: "[ˈpəʊstɪdʒ]",
        chinese: "n. 邮费",
    },
    {
        english: "postcard",
        phoneticSymbol: "[ˈpəʊstkɑːd]",
        chinese: "n. 明信片",
    },
    {
        english: "postcode",
        phoneticSymbol: "[ˈpəʊstkəʊd]",
        chinese: "n. （英）邮政编码",
    },
    {
        english: "poster",
        phoneticSymbol: "[ˈpəʊstə(r)]",
        chinese: "n. (贴在公共场所的大型)招贴；广告(画)",
    },
    {
        english: "postman",
        phoneticSymbol: "[ˈpəʊstmən]",
        chinese: "n. 邮递员",
    },
    {
        english: "postpone",
        phoneticSymbol: "[pəʊstˈpəʊn]",
        chinese: "vt. 推迟，延期",
    },
    {
        english: "pot",
        phoneticSymbol: "[pɔt]",
        chinese: "n. 锅，壶，瓶，罐",
    },
    {
        english: "potato",
        phoneticSymbol: "[pəˈteɪtəʊ]",
        chinese: "n. 土豆，马铃薯",
    },
    {
        english: "potential",
        phoneticSymbol: "[pəˈtenʃ(ə)l]",
        chinese: "a. 潜在的，可能的",
    },
    {
        english: "pound",
        phoneticSymbol: "[pəˈtenʃ(ə)l]",
        chinese: "n. 磅；英镑",
    },
    {
        english: "pour",
        phoneticSymbol: "[pɔː(r)]",
        chinese: "vi. 倾泻，不断流出",
    },
    {
        english: "powder",
        phoneticSymbol: "[ˈpaʊdə(r)]",
        chinese: "n. 粉，粉末",
    },
    {
        english: "power",
        phoneticSymbol: "[ˈpaʊdə(r)]",
        chinese: "n. 力，动力，电力",
    },
    {
        english: "powerful",
        phoneticSymbol: "[ˈpaʊəfʊl]",
        chinese: "a. 效力大的，强有力的，强大的",
    },
    {
        english: "practical",
        phoneticSymbol: "[ˈpræktɪk(ə)l]",
        chinese: "a. 实际的，适用的",
    },
    {
        english: "practise (Am. practice)",
        phoneticSymbol: "[ˈpræktɪs]",
        chinese: "n. 练习",
    },
    {
        english: "praise",
        phoneticSymbol: "[preɪz]",
        chinese: "n.& vt.赞扬，表扬",
    },
    {
        english: "pray",
        phoneticSymbol: "[preɪ]",
        chinese: "v. 祈祷；祈求",
    },
    {
        english: "prayer",
        phoneticSymbol: "[preə(r)]",
        chinese: "n. 祈祷",
    },
    {
        english: "precious",
        phoneticSymbol: "[ˈpreʃəs]",
        chinese: "a. 宝贵的, 珍贵的",
    },
    {
        english: "precise",
        phoneticSymbol: "[prɪˈsaɪs]",
        chinese: "a. 准确,精确的,确切的",
    },
    {
        english: "predict",
        phoneticSymbol: "[prɪˈdɪkt]",
        chinese: "v. 预言，预告，预报",
    },
    {
        english: "prefer",
        phoneticSymbol: "[prɪˈfɜː(r)]",
        chinese: "vt.宁愿（选择）,更喜欢",
    },
    {
        english: "preference",
        phoneticSymbol: "[ˈprefərəns]",
        chinese: "n. 选择，趋向",
    },
    {
        english: "pregnant",
        phoneticSymbol: "[ˈpreɡnənt]",
        chinese: "a. 怀孕的",
    },
    {
        english: "prejudice",
        phoneticSymbol: "[ˈpredʒʊdɪs]",
        chinese: "n. 偏见，成见",
    },
    {
        english: "premier",
        phoneticSymbol: "[ˈpremɪə(r); (US) priːˈmɪər]",
        chinese: "n. 首相，总理",
    },
    {
        english: "preparation",
        phoneticSymbol: "[prepəˈreɪʃ(ə)n]",
        chinese: "n. 准备",
    },
    {
        english: "prepare",
        phoneticSymbol: "[prɪˈpeə(r)]",
        chinese: "vt. 准备,预备,调制,配制",
    },
    {
        english: "prescription",
        phoneticSymbol: "[prɪˈskrɪpʃ(ə)n]",
        chinese: "n. 处方，药方",
    },
    {
        english: "present",
        phoneticSymbol: "[ˈprez(ə)nt]",
        chinese: "a. 出现的，出席的 n. 礼物，赠品 vt. 呈奉，奉送",
    },
    {
        english: "presentation",
        phoneticSymbol: "[prezənˈteɪʃ(ə)n; (US) priːzenˈteʃn]",
        chinese: "n. 演示，演出",
    },
    {
        english: "preserve",
        phoneticSymbol: "[prezənˈteɪʃ(ə)n; (US) priːzenˈteʃn]",
        chinese: "v.保护，保留，保存",
    },
    {
        english: "president",
        phoneticSymbol: "[ˈprezɪdənt]",
        chinese: "n. 总统；主席",
    },
    {
        english: "press",
        phoneticSymbol: "[ˈprezɪdənt]",
        chinese: "vt.压,按 n.新闻界,出版社",
    },
    {
        english: "pressure",
        phoneticSymbol: "[ˈpreʃə(r)]",
        chinese: "n. 压迫,压力,压强",
    },
    {
        english: "pretend",
        phoneticSymbol: "[ˈpreʃə(r)]",
        chinese: "vi. 假装，装作",
    },
    {
        english: "pretty",
        phoneticSymbol: "[ˈprɪtɪ]",
        chinese: "a. 漂亮的，俊俏的",
    },
    {
        english: "prevent",
        phoneticSymbol: "[prɪˈvent]",
        chinese: "vt. 防止, 预防",
    },
    {
        english: "preview",
        phoneticSymbol: "[ˈpriːvjuː]",
        chinese: "vt. 预习;试演;预展",
    },
    {
        english: "previous",
        phoneticSymbol: "[ˈpri:viəs]",
        chinese: "adj. 先前的;以前的;过早的;（时间上）稍前的",
    },
    {
        english: "price",
        phoneticSymbol: "[praɪs]",
        chinese: "n. 价格，价钱",
    },
    {
        english: "pride",
        phoneticSymbol: "[praɪd]",
        chinese: "n. 自豪，骄傲",
    },
    {
        english: "primary",
        phoneticSymbol: "[ˈpraɪmərɪ]",
        chinese: "a. 初等的；初级的",
    },
    {
        english: "primitive",
        phoneticSymbol: "[ˈprɪmɪtɪv]",
        chinese: "a. 原始的，远古的",
    },
    {
        english: "principle",
        phoneticSymbol: "[ˈprɪnsɪp(ə)l]",
        chinese: "n. 道德原则，法则",
    },
    {
        english: "print",
        phoneticSymbol: "[prɪnt]",
        chinese: "vt. 印刷",
    },
    {
        english: "prison",
        phoneticSymbol: "[ˈprɪz(ə)n]",
        chinese: "n. 监狱",
    },
    {
        english: "prisoner",
        phoneticSymbol: "[ˈprɪznə(r)]",
        chinese: "n. 囚犯",
    },
    {
        english: "private",
        phoneticSymbol: "[ˈpraɪvɪt]",
        chinese: "a. 私人的",
    },
    {
        english: "privilege",
        phoneticSymbol: "[ˈprɪvɪlɪdʒ]",
        chinese: "特权，特殊待遇",
    },
    {
        english: "prize",
        phoneticSymbol: "[praɪz]",
        chinese: "n. 奖赏，奖品",
    },
    {
        english: "probably",
        phoneticSymbol: "[ˈprɔbəb(ə)lɪ]",
        chinese: "ad. 很可能，大概",
    },
    {
        english: "problem",
        phoneticSymbol: "[ˈprɔbləm]",
        chinese: "n. 问题，难题",
    },
    {
        english: "procedure",
        phoneticSymbol: "[prəˈsiːdʒə(r)]",
        chinese: "n. 程序,手续,待遇",
    },
    {
        english: "process",
        phoneticSymbol: "[ˈprəʊses; (US) ˈprɔses]",
        chinese: "n./ v. 过程,加工,处理",
    },
    {
        english: "produce",
        phoneticSymbol: "[prəˈdjuːs; (US) -ˈduːs]",
        chinese: "vt. 生产；制造",
    },
    {
        english: "product",
        phoneticSymbol: "[ˈprɔdʌkt]",
        chinese: "n. 产品，制品",
    },
    {
        english: "production",
        phoneticSymbol: "[prəˈdʌkʃ(ə)n]",
        chinese: "n. 生产；制造",
    },
    {
        english: "profession",
        phoneticSymbol: "[prəˈfeʃ(ə)n]",
        chinese: "n.（需要有高等教育学位的）职业（如医生或律师）",
    },
    {
        english: "professor",
        phoneticSymbol: "[prəˈfesə(r)]",
        chinese: "n. 教授",
    },
    {
        english: "profit",
        phoneticSymbol: "[ˈprɔfɪt]",
        chinese: "n. 利润，收益",
    },
    {
        english: "progress",
        phoneticSymbol: "[ˈprəʊɡres; (US) ˈprɔɡres]",
        chinese: "n.进步,上进vi.进展,进行",
    },
    {
        english: "prohibit",
        phoneticSymbol: "[prəˈhɪbɪt]",
        chinese: "v. 禁止",
    },
    {
        english: "project",
        phoneticSymbol: "[ˈprɔdʒekt]",
        chinese: "n. 工程",
    },
    {
        english: "promise",
        phoneticSymbol: "[ˈprɔmɪs]",
        chinese: "n.& vi. 答应，允诺",
    },
    {
        english: "promote",
        phoneticSymbol: "[prəˈməʊt]",
        chinese: "v.促进,推动,促销,晋升",
    },
    {
        english: "pronounce",
        phoneticSymbol: "[prəˈnaʊns]",
        chinese: "vt. 发音",
    },
    {
        english: "pronunciation",
        phoneticSymbol: "[prənʌnsɪˈeɪʃ(ə)n]",
        chinese: "n. 发音",
    },
    {
        english: "proper",
        phoneticSymbol: "[ˈprɔpə(r)]",
        chinese: "a. 恰当的，合适的",
    },
    {
        english: "properly",
        phoneticSymbol: "[ˈprɔpəlɪ]",
        chinese: "ad. 适当地",
    },
    {
        english: "protect",
        phoneticSymbol: "[prəˈtekt]",
        chinese: "vt. 保护",
    },
    {
        english: "protection",
        phoneticSymbol: "[prəˈtekʃ(ə)n]",
        chinese: "n. 保护",
    },
    {
        english: "proud",
        phoneticSymbol: "[praʊd]",
        chinese: "a. 自豪的；骄傲的",
    },
    {
        english: "prove",
        phoneticSymbol: "[pruːv]",
        chinese: "vt. 证明",
    },
    {
        english: "provide",
        phoneticSymbol: "[prəˈvaɪd]",
        chinese: "vt. 提供",
    },
    {
        english: "province",
        phoneticSymbol: "[ˈprɔvɪns]",
        chinese: "n. 省",
    },
    {
        english: "psychology",
        phoneticSymbol: "[saɪˈkɔlədʒɪ]",
        chinese: "n. 心理学",
    },
    {
        english: "pub",
        phoneticSymbol: "[pʌb]",
        chinese: "n. 酒店，酒吧",
    },
    {
        english: "public",
        phoneticSymbol: "[ˈpʌblɪk]",
        chinese: "a.公共,公众的 n. 公众",
    },
    {
        english: "publish",
        phoneticSymbol: "[ˈpʌblɪʃ]",
        chinese: "t. 出版，发行",
    },
    {
        english: "pull",
        phoneticSymbol: "[pʊl]",
        chinese: "拉，拖 n. 拉力，引力",
    },
    {
        english: "pulse",
        phoneticSymbol: "[pʌls]",
        chinese: "n. 脉搏，（光、能量、波等的）脉动，搏动",
    },
    {
        english: "pump",
        phoneticSymbol: "[ˈpʌmp]",
        chinese: "t. 用泵抽水",
    },
    {
        english: "punctual",
        phoneticSymbol: "[ˈpʌŋktjʊəl]",
        chinese: "a. 准时的",
    },
    {
        english: "punish",
        phoneticSymbol: "[ˈpʌnɪʃ]",
        chinese: "v. 惩罚，处罚",
    },
    {
        english: "punishment",
        phoneticSymbol: "[ˈpʌnɪʃmənt]",
        chinese: "n. 惩罚",
    },
    {
        english: "pupil",
        phoneticSymbol: "[ˈpjuːpɪl]",
        chinese: "n. （小）学生",
    },
    {
        english: "purchase",
        phoneticSymbol: "[ˈpɜːtʃəs]",
        chinese: "v. 购买，采购",
    },
    {
        english: "pure",
        phoneticSymbol: "[pjʊə(r)]",
        chinese: "a. 纯的, 不掺杂的",
    },
    {
        english: "purple",
        phoneticSymbol: "[ˈpɜːp(ə)l]",
        chinese: "n. / a. 紫色",
    },
    {
        english: "purpose",
        phoneticSymbol: "[ˈpɜːpəs]",
        chinese: "n. 目的，意图",
    },
    {
        english: "purse",
        phoneticSymbol: "[pɜːs]",
        chinese: "n. 钱包",
    },
    {
        english: "push",
        phoneticSymbol: "[pʊʃ]",
        chinese: "n.& v. 推",
    },
    {
        english: "put (put, put)",
        phoneticSymbol: "[pʊt]",
        chinese: "vt. 放，摆",
    },
    {
        english: "pyramid",
        phoneticSymbol: "[ˈpɪrəmɪd]",
        chinese: "n. 角锥形，金字塔",
    },
    {
        english: "quake",
        phoneticSymbol: "[kweɪk]",
        chinese: "n.& v. 震动，颤抖",
    },
    {
        english: "qualification",
        phoneticSymbol: "[kwɔlɪfɪˈkeɪʃ(ə)n]",
        chinese: "n. 资格，学历",
    },
    {
        english: "quality",
        phoneticSymbol: "[ˈkwɔlɪtɪ]",
        chinese: "n. 质量，性质",
    },
    {
        english: "quantity",
        phoneticSymbol: "[ˈkwɔntətɪ]",
        chinese: "n. 量，数",
    },
    {
        english: "quarrel",
        phoneticSymbol: "[ˈkwɔrəl; (US) ˈkwɔːrəl]",
        chinese: "vi. 争吵，吵架",
    },
    {
        english: "quarter",
        phoneticSymbol: "[ˈkwɔːtə(r)]",
        chinese: "n. 四分之一，一刻钟",
    },
    {
        english: "queen",
        phoneticSymbol: "[kwiːn]",
        chinese: "n. 皇后，女王",
    },
    {
        english: "question",
        phoneticSymbol: "[ˈkwestʃ(ə)n]",
        chinese: "vt. 询问 n. 问题",
    },
    {
        english: "questionnaire",
        phoneticSymbol: "[kwestʃəˈneə(r)]",
        chinese: "n. 调查表，问卷",
    },
    {
        english: "queue",
        phoneticSymbol: "[kjuː]",
        chinese: "n. 行列，长队",
    },
    {
        english: "quick",
        phoneticSymbol: "[kwɪk]",
        chinese: "a. 快；敏捷的；急剧的 ad. 快地；敏捷地；急剧地",
    },
    {
        english: "quiet",
        phoneticSymbol: "[ˈkwaɪət]",
        chinese: "a. 安静的；寂静的",
    },
    {
        english: "quilt",
        phoneticSymbol: "[kwɪlt]",
        chinese: "n. 被子；被状物",
    },
    {
        english: "quit",
        phoneticSymbol: "[kwɪt]",
        chinese: "v. 离任，离校，戒掉",
    },
    {
        english: "quite",
        phoneticSymbol: "[kwaɪt]",
        chinese: "ad. 完全，十分",
    },
    {
        english: "quiz",
        phoneticSymbol: "[kwɪz]",
        chinese: "n. 测验，小型考试",
    },
    {
        english: "rabbit",
        phoneticSymbol: "[ˈræbɪt]",
        chinese: "n. 兔，家兔",
    },
    {
        english: "race",
        phoneticSymbol: "[reɪs]",
        chinese: "n. 种族，民族 v. （速度）竞赛，比赛 n. 赛跑，竞赛",
    },
    {
        english: "racial",
        phoneticSymbol: "[ˈreɪʃ(ə)l]",
        chinese: "a. 种族的",
    },
    {
        english: "radiation",
        phoneticSymbol: "[reɪdɪˈeɪʃ(ə)n]",
        chinese: "n. 放射，放射物",
    },
    {
        english: "radio",
        phoneticSymbol: "[reɪdɪəʊ]",
        chinese: "n. 无线电，收音机",
    },
    {
        english: "radioactive",
        phoneticSymbol: "[reɪdɪəʊˈæktɪv]",
        chinese: "a. 放射性的",
    },
    {
        english: "radium",
        phoneticSymbol: "[ˈreɪdɪəm]",
        chinese: "n. 镭",
    },
    {
        english: "rag",
        phoneticSymbol: "[ræɡ]",
        chinese: "n. 破布，抹布",
    },
    {
        english: "rail",
        phoneticSymbol: "[reɪl]",
        chinese: "n. 铁路",
    },
    {
        english: "railway",
        phoneticSymbol: "[ˈreɪlweɪ]",
        chinese: "n. 铁路；铁道",
    },
    {
        english: "rain",
        phoneticSymbol: "[reɪn]",
        chinese: "n. 雨，雨水 vi. 下雨",
    },
    {
        english: "rainbow",
        phoneticSymbol: "[ˈreɪnbəʊ]",
        chinese: "n. 虹，彩虹",
    },
    {
        english: "raincoat",
        phoneticSymbol: "[ˈreɪnkəʊt]",
        chinese: "n. 雨衣",
    },
    {
        english: "rainfall",
        phoneticSymbol: "[ˈreɪnfɔːl]",
        chinese: "n. 一场雨； 降雨量",
    },
    {
        english: "rainy",
        phoneticSymbol: "[ˈreɪnɪ]",
        chinese: "a. 下雨的；多雨的",
    },
    {
        english: "raise",
        phoneticSymbol: "[reɪz]",
        chinese: "vt. 使升高； 饲养",
    },
    {
        english: "random",
        phoneticSymbol: "[ˈrændəm]",
        chinese: "a.随意,未经事先考虑的",
    },
    {
        english: "range",
        phoneticSymbol: "[reɪndʒ]",
        chinese: "n./ v. 变化，变动，排序",
    },
    {
        english: "rank",
        phoneticSymbol: "[ræŋk]",
        chinese: "n. 职衔，军衔",
    },
    {
        english: "rapid",
        phoneticSymbol: "[ˈræpɪd]",
        chinese: "a. 快的，迅速的",
    },
    {
        english: "rare",
        phoneticSymbol: "[reə(r)]",
        chinese: "a. 罕见的，稀有的",
    },
    {
        english: "rat",
        phoneticSymbol: "[ræt]",
        chinese: "n. 老鼠",
    },
    {
        english: "rate",
        phoneticSymbol: "[reɪt]",
        chinese: "n./ v. 率，评估，评价",
    },
    {
        english: "rather",
        phoneticSymbol: "[ˈrɑːðə; (US) ˈræðər]",
        chinese: "ad. 相当，宁可",
    },
    {
        english: "raw",
        phoneticSymbol: "[rɔː]",
        chinese: "a.生的,未煮过的,未加工的",
    },
    {
        english: "ray",
        phoneticSymbol: "[reɪ]",
        chinese: "n. 光辉，光线",
    },
    {
        english: "razor",
        phoneticSymbol: "[ˈreɪzə(r)]",
        chinese: "n. 剃须刀",
    },
    {
        english: "reach",
        phoneticSymbol: "[riːtʃ]",
        chinese: "v. 到达，伸手(脚)够到",
    },
    {
        english: "react",
        phoneticSymbol: "[riːˈækt]",
        chinese: "v. 回应，过敏，起物理，化学反应",
    },
    {
        english: "read (read, read)",
        phoneticSymbol: "[riːd]",
        chinese: "v. 读；朗读",
    },
    {
        english: "reading",
        phoneticSymbol: "[ʃɜːt]",
        chinese: "n. 阅读；朗读",
    },
    {
        english: "ready",
        phoneticSymbol: "[ˈredɪ]",
        chinese: "a. 准备好的",
    },
    {
        english: "real",
        phoneticSymbol: "[riːl]",
        chinese: "a. 真实的，确实的",
    },
    {
        english: "reality",
        phoneticSymbol: "[rɪˈælɪtɪ]",
        chinese: "n. 现实",
    },
    {
        english: "realise (美realize)",
        phoneticSymbol: "[ˈrɪəlaɪz]",
        chinese: "vt.认识到,实现",
    },
    {
        english: "really v",
        phoneticSymbol: "[ˈrɪəlɪ]",
        chinese: "ad. 真正地；到底；确实",
    },
    {
        english: "reason",
        phoneticSymbol: "[ˈriːz(ə)n]",
        chinese: "vi.评理,劝说n.理由,原因",
    },
    {
        english: "reasonable",
        phoneticSymbol: "[ˈriːzənəb(ə)l]",
        chinese: "a. 合乎情理的",
    },
    {
        english: "rebuild",
        phoneticSymbol: "[riːˈbɪld]",
        chinese: "vt. 重建",
    },
    {
        english: "receipt",
        phoneticSymbol: "[rɪˈsiːt]",
        chinese: "n. 收据",
    },
    {
        english: "receive",
        phoneticSymbol: "[rɪˈsiːv]",
        chinese: "v. 收到，得到",
    },
    {
        english: "receiver",
        phoneticSymbol: "[rɪˈsiːvə(r)]",
        chinese: "n. 电话听筒",
    },
    {
        english: "recent",
        phoneticSymbol: "[ˈriːsənt]",
        chinese: "a. 近来的，最近的",
    },
    {
        english: "reception",
        phoneticSymbol: "[rɪˈsepʃ(ə)n]",
        chinese: "n. 接待",
    },
    {
        english: "receptionist",
        phoneticSymbol: "[rɪˈsepʃənɪst]",
        chinese: "n. 接待员",
    },
    {
        english: "recipe",
        phoneticSymbol: "[ˈresɪpɪ]",
        chinese: "n. 烹饪法，食谱",
    },
    {
        english: "recite",
        phoneticSymbol: "[rɪˈsaɪt]",
        chinese: "v. 背诵",
    },
    {
        english: "recognise (美recognize)",
        phoneticSymbol: "[ˈrekəɡnaɪz]",
        chinese: "vt.认出",
    },
    {
        english: "recommend",
        phoneticSymbol: "[rekəˈmend]",
        chinese: "v. 推荐",
    },
    {
        english: "record",
        phoneticSymbol: "[ˈrekɔːd; (US) ˈrekərd]",
        chinese: "n. 记录；唱片",
    },
    {
        english: "record holder",
        phoneticSymbol: "[ˈrekɔːd ˈhəʊldə(r)]",
        chinese: "记录保持者",
    },
    {
        english: "record",
        phoneticSymbol: "[ˈrekɔːd; (US) ˈrekərd]",
        chinese: "v. 录制，记录",
    },
    {
        english: "recorder",
        phoneticSymbol: "[rɪˈkɔːdə(r)]",
        chinese: "n. 录音机",
    },
    {
        english: "recover",
        phoneticSymbol: "[rɪˈkʌvə(r)]",
        chinese: "vi. 痊愈；恢复",
    },
    {
        english: "recreation",
        phoneticSymbol: "[rekrɪˈeɪʃ(ə)n]",
        chinese: "n. 娱乐，消遣",
    },
    {
        english: "recycle",
        phoneticSymbol: "[riːˈsaɪk(ə)l]",
        chinese: "vt. 回收；再循环",
    },
    {
        english: "rectangle",
        phoneticSymbol: "[ˈrektæŋɡ(ə)l]",
        chinese: "n. & a.长方形,长方形的",
    },
    {
        english: "red",
        phoneticSymbol: "[red]",
        chinese: "n. 红色 a.红色的",
    },
    {
        english: "reduce",
        phoneticSymbol: "[rɪˈdjuːs; (US) -ˈduːs]",
        chinese: "vt. 减少，缩减",
    },
    {
        english: "refer",
        phoneticSymbol: "[rɪˈfɜː(r)]",
        chinese: "vi. 谈到,提到,涉及,有关",
    },
    {
        english: "referee",
        phoneticSymbol: "[refəˈriː]",
        chinese: "n. 裁判，仲裁，调解员",
    },
    {
        english: "reference",
        phoneticSymbol: "[ˈref(ə)rəns]",
        chinese: "n.提到,涉及,谈及,查询",
    },
    {
        english: "reflect",
        phoneticSymbol: "[rɪˈflekt]",
        chinese: "v. 反映，反射",
    },
    {
        english: "reform",
        phoneticSymbol: "[rɪˈfɔːm]",
        chinese: "v./ n. 改革，改进，改良",
    },
    {
        english: "refresh",
        phoneticSymbol: "[rɪˈfreʃ]",
        chinese: "v. 使恢复精力，提醒",
    },
    {
        english: "refrigerator",
        phoneticSymbol: "[rɪˈfrɪdʒəreɪtə(r)]",
        chinese: "n. 冰箱",
    },
    {
        english: "refuse",
        phoneticSymbol: "[rɪˈfjuːz]",
        chinese: "vi. 拒绝，不愿",
    },
    {
        english: "regard",
        phoneticSymbol: "[rɪˈɡɑːd]",
        chinese: "v. 把……看作",
    },
    {
        english: "regardless",
        phoneticSymbol: "[rɪˈɡɑːdlɪs]",
        chinese: "a. 不顾，不加理会",
    },
    {
        english: "register",
        phoneticSymbol: "[ˈredʒɪstə(r)]",
        chinese: "n. 登记簿，花名册，注册员 v. 登记，注册",
    },
    {
        english: "regret",
        phoneticSymbol: "[rɪˈɡret]",
        chinese: "n./ vt.可惜,遗憾;痛惜;哀悼",
    },
    {
        english: "regular",
        phoneticSymbol: "[ˈreɡjʊlə(r)]",
        chinese: "a. 规则的，经常",
    },
    {
        english: "regulation",
        phoneticSymbol: "[reɡjʊˈleɪʃ(ə)n]",
        chinese: "n. 规则，规章",
    },
    {
        english: "reject",
        phoneticSymbol: "[rɪˈdʒekt]",
        chinese: "v. 拒绝",
    },
    {
        english: "relate",
        phoneticSymbol: "[rɪˈleɪt]",
        chinese: "vi. 有关； 涉及",
    },
    {
        english: "relation",
        phoneticSymbol: "[rɪˈleɪʃ(ə)n]",
        chinese: "n. 关系； 亲属",
    },
    {
        english: "relationship",
        phoneticSymbol: "[rɪˈleɪʃənʃɪp]",
        chinese: "n. 关系",
    },
    {
        english: "relative",
        phoneticSymbol: "[ˈrelətɪv]",
        chinese: "n. 亲属，亲戚",
    },
    {
        english: "relax",
        phoneticSymbol: "[rɪˈlæks]",
        chinese: "v. （使）放松，轻松",
    },
    {
        english: "relay",
        phoneticSymbol: "[ˈriːleɪ]",
        chinese: "n. 接力，接替人，中转 v. 接替，补充；转运",
    },
    {
        english: "reliable",
        phoneticSymbol: "[rɪˈlaɪəb(ə)l]",
        chinese: "a. 可信赖的，可依靠的",
    },
    {
        english: "relief",
        phoneticSymbol: "[rɪˈliːf]",
        chinese: "n. 轻松,解脱,缓和,救济",
    },
    {
        english: "religion",
        phoneticSymbol: "[rɪˈlɪdʒən]",
        chinese: "n. 宗教",
    },
    {
        english: "religious",
        phoneticSymbol: "[rɪˈlɪdʒəs]",
        chinese: "a. 宗教的",
    },
    {
        english: "rely",
        phoneticSymbol: "[rɪˈlaɪ]",
        chinese: "v. 依赖，依靠",
    },
    {
        english: "remain",
        phoneticSymbol: "[rɪˈmeɪn]",
        chinese: "vt.余下,留下vi.保持,仍是",
    },
    {
        english: "remark",
        phoneticSymbol: "[rɪˈmɑːk]",
        chinese: "n. 陈述；话；议论",
    },
    {
        english: "remember",
        phoneticSymbol: "[rɪˈmembə(r)]",
        chinese: "v. 记得，想起",
    },
    {
        english: "remind",
        phoneticSymbol: "[rɪˈmaɪnd]",
        chinese: "vt. 提醒，使记起",
    },
    {
        english: "remote",
        phoneticSymbol: "[rɪˈməʊt]",
        chinese: "a. 偏远的，偏僻的",
    },
    {
        english: "remove",
        phoneticSymbol: "[rɪˈmuːv]",
        chinese: "vt. 移动，拿走，脱掉（衣服等）",
    },
    {
        english: "rent",
        phoneticSymbol: "[rent]",
        chinese: "n.& v. 租金",
    },
    {
        english: "repair",
        phoneticSymbol: "[rɪˈpeə(r)]",
        chinese: "n.& vt. 修理；修补",
    },
    {
        english: "repeat",
        phoneticSymbol: "[rɪˈpiːt]",
        chinese: "vt. 重说，重做",
    },
    {
        english: "replace",
        phoneticSymbol: "[rɪˈpleɪs]",
        chinese: "vt. 取代",
    },
    {
        english: "reply",
        phoneticSymbol: "[rɪˈplaɪ]",
        chinese: "n. 回答，答复",
    },
    {
        english: "report",
        phoneticSymbol: "[rɪˈpɔːt]",
        chinese: "n.& v. 报道，报告",
    },
    {
        english: "reporter",
        phoneticSymbol: "[rɪˈpɔːtə(r)]",
        chinese: "n. 记者，新闻通讯员",
    },
    {
        english: "represent",
        phoneticSymbol: "[reprɪˈzent]",
        chinese: "vt. 代表",
    },
    {
        english: "representative",
        phoneticSymbol: "[reprɪˈzentətɪv]",
        chinese: "n.代表,典型人物",
    },
    {
        english: "republic",
        phoneticSymbol: "[rɪˈpʌblɪk]",
        chinese: "n. 共和国",
    },
    {
        english: "reputation",
        phoneticSymbol: "[repjʊˈteɪʃ(ə)n]",
        chinese: "n. 名声，名誉",
    },
    {
        english: "request",
        phoneticSymbol: "[rɪˈkwest]",
        chinese: "n. 请求，要求的事物",
    },
    {
        english: "require",
        phoneticSymbol: "[rɪˈkwaɪə(r)]",
        chinese: "vt. 需求；要求",
    },
    {
        english: "requirement",
        phoneticSymbol: "[rɪˈkwaɪəmənt]",
        chinese: "n. 需要； 要求； 必要的条件",
    },
    {
        english: "rescue",
        phoneticSymbol: "[ˈreskjuː]",
        chinese: "vt. 营救，援救",
    },
    {
        english: "research",
        phoneticSymbol: "[rɪˈsɜːtʃ]",
        chinese: "n. 研究，调查",
    },
    {
        english: "resemble",
        phoneticSymbol: "[rɪˈzemb(ə)l]",
        chinese: "v. （不用进行时）像，看起来像",
    },
    {
        english: "reservation",
        phoneticSymbol: "[rezəˈveɪʃ(ə)n]",
        chinese: "n. 预定",
    },
    {
        english: "reserve",
        phoneticSymbol: "[rɪˈzɜːv]",
        chinese: "n. & v. 储备；预定",
    },
    {
        english: "resign",
        phoneticSymbol: "[rɪˈzaɪn]",
        chinese: "v. 辞职",
    },
    {
        english: "resist",
        phoneticSymbol: "[rɪˈzɪst]",
        chinese: "v. 抵抗；挡开",
    },
    {
        english: "respect",
        phoneticSymbol: "[rɪˈspekt]",
        chinese: "vt.& n. 尊敬，尊重",
    },
    {
        english: "respond",
        phoneticSymbol: "[rɪˈspekt]",
        chinese: "v.回答,回应,作出反应",
    },
    {
        english: "responsibility",
        phoneticSymbol: "[rɪspɔnsɪˈbɪlɪtɪ]",
        chinese: "n. 责任，负责",
    },
    {
        english: "rest",
        phoneticSymbol: "[rest]",
        chinese: "n. 休息；剩余的部分，其余的人（物） vi. 休息，歇息",
    },
    {
        english: "restaurant",
        phoneticSymbol: "[ˈrestərɔnt; (US) ˈrestərənt]",
        chinese: "n. 饭馆, 饭店",
    },
    {
        english: "restriction",
        phoneticSymbol: "[rɪˈstrɪkʃ(ə)n]",
        chinese: "n. 限制，约束",
    },
    {
        english: "result",
        phoneticSymbol: "[rɪˈzʌlt]",
        chinese: "n. 结果，效果",
    },
    {
        english: "retell",
        phoneticSymbol: "[riːˈtel]",
        chinese: "vt. 重讲，重复，复述",
    },
    {
        english: "retire",
        phoneticSymbol: "[rɪˈtaɪə(r)]",
        chinese: "v. 退休",
    },
    {
        english: "return",
        phoneticSymbol: "[rɪˈtɜːn]",
        chinese: "v. 归还",
    },
    {
        english: "review",
        phoneticSymbol: "[rɪˈvjuː]",
        chinese: "vt. 重新调查； 回顾； 复习 n. 复查；复习；评论",
    },
    {
        english: "revision",
        phoneticSymbol: "[rɪˈvɪʒ(ə)n]",
        chinese: "n. 复习，温习",
    },
    {
        english: "revolution",
        phoneticSymbol: "[revəˈluːʃ(ə)n]",
        chinese: "n. 革命，变革",
    },
    {
        english: "reward",
        phoneticSymbol: "[rɪˈwɔːd]",
        chinese: "n. 奖赏",
    },
    {
        english: "rewind",
        phoneticSymbol: "[riːˈwaɪnd]",
        chinese: "v. 回转（磁带等）",
    },
    {
        english: "rhyme",
        phoneticSymbol: "[raɪm]",
        chinese: "n./ v. 押韵",
    },
    {
        english: "rice",
        phoneticSymbol: "[raɪs]",
        chinese: "n. 稻米；米饭",
    },
    {
        english: "rich",
        phoneticSymbol: "[rɪtʃ]",
        chinese: "a. 富裕的，有钱的",
    },
    {
        english: "rid (rid, rid / ridded, ridded)",
        phoneticSymbol: "[rɪd]",
        chinese: "vt. 使摆脱",
    },
    {
        english: "riddle",
        phoneticSymbol: "[ˈrɪd(ə)l]",
        chinese: "n. 谜(语)",
    },
    {
        english: "ridiculous",
        phoneticSymbol: "[rɪˈdɪkjʊləs]",
        chinese: "a. 荒谬的，愚蠢的",
    },
    {
        english: "ride (rode, ridden)",
        phoneticSymbol: "[raɪd]",
        chinese: "v. 骑（马、自行车）；乘车 n. 乘车旅行",
    },
    {
        english: "right",
        phoneticSymbol: "[raɪt]",
        chinese: "n.权利 a.对,正确的 ad. 正确地,恰恰,完全地 a. 右,右边的",
    },
    {
        english: "ring (rang, rung)",
        phoneticSymbol: "[rɪŋ]",
        chinese:
            "v. （钟、铃等）响；打电话 n. 电话，铃声 n. 环形物（如环、圈、戒指等）",
    },
    {
        english: "rigid",
        phoneticSymbol: "[ˈrɪdʒɪd]",
        chinese: "a. 死板的,僵硬的,固执的",
    },
    {
        english: "ripe",
        phoneticSymbol: "[raɪp]",
        chinese: "a. 成熟的，熟的",
    },
    {
        english: "ripen",
        phoneticSymbol: "[ˈraɪpən]",
        chinese: "v. 成熟",
    },
    {
        english: "rise (rose, risen)",
        phoneticSymbol: "[raɪz]",
        chinese: "vi. 上升，上涨",
    },
    {
        english: "risk",
        phoneticSymbol: "[rɪsk]",
        chinese: "n./ v. 危险，风险，冒险",
    },
    {
        english: "river",
        phoneticSymbol: "[ˈrɪvə(r)]",
        chinese: "n. 江；河；水道；巨流",
    },
    {
        english: "road",
        phoneticSymbol: "[rəʊd]",
        chinese: "n. 路，道路",
    },
    {
        english: "roast",
        phoneticSymbol: "[rəʊst]",
        chinese: "v. 烤（肉）",
    },
    {
        english: "rob",
        phoneticSymbol: "[rɔb]",
        chinese: "v. 抢夺，抢劫",
    },
    {
        english: "robot",
        phoneticSymbol: "[ˈrəʊbɔt]",
        chinese: "n. 机器人",
    },
    {
        english: "rock",
        phoneticSymbol: "[rɔk]",
        chinese: "n.岩石,大石头vt. 摇,摇晃",
    },
    {
        english: "role",
        phoneticSymbol: "[rəʊl]",
        chinese: "n. 角色",
    },
    {
        english: "roll",
        phoneticSymbol: "[rəʊl]",
        chinese: "v. 滚动, 打滚 n. 面包圈，小圆面包；卷状物",
    },
    {
        english: "roof",
        phoneticSymbol: "[ruːf]",
        chinese: "n. 屋顶，顶部",
    },
    {
        english: "room",
        phoneticSymbol: "[rʊm]",
        chinese: "n. 房间,室;空间;地方",
    },
    {
        english: "rooster",
        phoneticSymbol: "[ˈruːstə(r)]",
        chinese: "n. (美)公鸡",
    },
    {
        english: "root",
        phoneticSymbol: "[ruːt]",
        chinese: "n. 根，根源，起源",
    },
    {
        english: "rope",
        phoneticSymbol: "[rəʊp]",
        chinese: "n. 绳，索",
    },
    {
        english: "rose",
        phoneticSymbol: "[rəʊz]",
        chinese: "n. 玫瑰花",
    },
    {
        english: "rot",
        phoneticSymbol: "[rɔt]",
        chinese: "vi. 烂； 腐败",
    },
    {
        english: "rough",
        phoneticSymbol: "[rʌf]",
        chinese: "a. 粗糙的，粗略的",
    },
    {
        english: "round",
        phoneticSymbol: "[raʊnd]",
        chinese: "ad. 转过来 prep. 环绕一周，围着 a.圆的；球形的",
    },
    {
        english: "roundabout",
        phoneticSymbol: "[ˈraʊndəbaʊt]",
        chinese: "a. & n. 绕道的，不直接的；转盘路",
    },
    {
        english: "routine",
        phoneticSymbol: "[ruːˈtiːn]",
        chinese: "n. 常规,正常顺序,无聊",
    },
    {
        english: "row",
        phoneticSymbol: "[rəʊ]",
        chinese: "n.（一）排,（一）行 v.划船",
    },
    {
        english: "royal",
        phoneticSymbol: "[ˈrɔɪəl]",
        chinese: "a. 皇家的，王室的，国王的，女王的",
    },
    {
        english: "rubber",
        phoneticSymbol: "[ˈrʌbə(r)]",
        chinese: "n. 橡胶； 合成橡胶",
    },
    {
        english: "rubbish",
        phoneticSymbol: "[ˈrʌbɪʃ]",
        chinese: "n. 垃圾； 废物",
    },
    {
        english: "rude",
        phoneticSymbol: "[ruːd]",
        chinese: "a. 无理的, 粗鲁的",
    },
    {
        english: "rugby",
        phoneticSymbol: "[ˈrʌɡbɪ]",
        chinese: "n. （英）橄榄球",
    },
    {
        english: "ruin",
        phoneticSymbol: "[ˈruːɪn]",
        chinese: "vt. （使）毁坏；（使） 毁灭 n. (复) 废墟；遗迹",
    },
    {
        english: "rule",
        phoneticSymbol: "[ruːl]",
        chinese: "n. 规则,规定 vt.统治,支配",
    },
    {
        english: "ruler",
        phoneticSymbol: "[ˈruːlə(r)]",
        chinese: "n. 统治者；直尺",
    },
    {
        english: "run (ran, run)",
        phoneticSymbol: "[rʌn]",
        chinese: "vi. 跑，奔跑；（颜色）褪色",
    },
    {
        english: "rush",
        phoneticSymbol: "[rʌʃ]",
        chinese: "vi. 冲，奔跑",
    },
    {
        english: "sacred",
        phoneticSymbol: "[ˈseɪkrɪd]",
        chinese: "a. 害怕，恐惧，担心",
    },
    {
        english: "sacrifice",
        phoneticSymbol: "[ˈsækrɪfaɪs]",
        chinese: "vt. 牺牲",
    },
    {
        english: "sad",
        phoneticSymbol: "[sæd]",
        chinese: "a. （使人）悲伤的",
    },
    {
        english: "sadness",
        phoneticSymbol: "[ˈsædnɪs]",
        chinese: "n. 悲哀，忧伤",
    },
    {
        english: "safe",
        phoneticSymbol: "[seɪf]",
        chinese: "a. 安全的 n. 保险柜",
    },
    {
        english: "safety",
        phoneticSymbol: "[ˈseɪftɪ]",
        chinese: "n. 安全，保险",
    },
    {
        english: "sail",
        phoneticSymbol: "[seɪl]",
        chinese: "n. 航行 v. 航行，开航",
    },
    {
        english: "sailor",
        phoneticSymbol: "[ˈseɪlə(r)]",
        chinese: "n. 水手，海员",
    },
    {
        english: "salad",
        phoneticSymbol: "[ˈsæləd]",
        chinese: "n. 色拉（西餐中的一种菜）",
    },
    {
        english: "salary",
        phoneticSymbol: "[ˈsælərɪ]",
        chinese: "n. 薪金，薪水",
    },
    {
        english: "sale",
        phoneticSymbol: "[seɪl]",
        chinese: "n. 卖，出售",
    },
    {
        english: "salesgirl",
        phoneticSymbol: "[ˈseɪlzɡɜːl]",
        chinese: "n. 女售货员",
    },
    {
        english: "salesman",
        phoneticSymbol: "[ˈseɪlzmən]",
        chinese: "n. 男售货员",
    },
    {
        english: "saleswoman",
        phoneticSymbol: "[seɪlz‚wʊmən]",
        chinese: "n. 女售货员",
    },
    {
        english: "salt",
        phoneticSymbol: "[sɔːlt, sɔlt]",
        chinese: "n. 盐",
    },
    {
        english: "salty",
        phoneticSymbol: "[ˈsɔːltɪ, ˈsɔltɪ]",
        chinese: "a. 盐的，咸的，含盐的",
    },
    {
        english: "salute",
        phoneticSymbol: "[səˈluːt, səˈljuːt]",
        chinese: "v.& n. 敬礼",
    },
    {
        english: "same",
        phoneticSymbol: "[seɪm]",
        chinese: "n.同样的事a同样的,同一",
    },
    {
        english: "sand",
        phoneticSymbol: "[sænd]",
        chinese: "n. 沙，沙子",
    },
    {
        english: "sandwich",
        phoneticSymbol: "[ˈsænwɪdʒ]",
        chinese: "n.三明治（夹心面包片）",
    },
    {
        english: "satellite",
        phoneticSymbol: "[ˈsætəlaɪt]",
        chinese: "n. 卫星",
    },
    {
        english: "satisfaction",
        phoneticSymbol: "[sætɪsˈfækʃ(ə)n]",
        chinese: "n. 满意",
    },
    {
        english: "satisfy",
        phoneticSymbol: "[ˈsætɪsfaɪ]",
        chinese: "vt. 满足，使满意",
    },
    {
        english: "saucer",
        phoneticSymbol: "[ˈsɔːsə(r)]",
        chinese: "n. 茶碟，茶托，小圆盘",
    },
    {
        english: "sausage",
        phoneticSymbol: "[ˈsɔsɪdʒ; (US) ˈsɔːsɪdʒ]",
        chinese: "n. 香肠，腊肠",
    },
    {
        english: "save",
        phoneticSymbol: "[seɪv]",
        chinese: "vt. 救，挽救，节省",
    },
    {
        english: "say (said, said)",
        phoneticSymbol: "[seɪ]",
        chinese: "vt. 说，讲",
    },
    {
        english: "saying",
        phoneticSymbol: "[ˈseɪɪŋ]",
        chinese: "n. 说，俗话，谚语",
    },
    {
        english: "scan",
        phoneticSymbol: "[skæn]",
        chinese: "v. 略读，浏览，扫描",
    },
    {
        english: "scar",
        phoneticSymbol: "[skɑː(r)]",
        chinese: "n. 伤疤，伤痕",
    },
    {
        english: "scare",
        phoneticSymbol: "[skeə(r)]",
        chinese: "v. 使害怕，使恐惧",
    },
    {
        english: "scarf",
        phoneticSymbol: "[skɑːf]",
        chinese: "n. 领巾，围巾",
    },
    {
        english: "scene",
        phoneticSymbol: "[sɪːn]",
        chinese: "n. （戏剧、电影等的）一场，场景，布景",
    },
    {
        english: "scenery",
        phoneticSymbol: "[ˈsiːnərɪ]",
        chinese: "n. 风景，景色，风光",
    },
    {
        english: "sceptical (AmE skeptical)",
        phoneticSymbol: "['skeptɪkl]",
        chinese: "a.怀疑的",
    },
    {
        english: "schedule",
        phoneticSymbol: "[ˈʃedjuːl; (US) ˈskedʒʊl]",
        chinese: "n. 工作计划，日程安排v. 安排时间，预定",
    },
    {
        english: "scholar",
        phoneticSymbol: "[ˈskɔlə(r)]",
        chinese: "n. 学者",
    },
    {
        english: "scholarship",
        phoneticSymbol: "[ˈskɔləʃɪp]",
        chinese: "n. 奖学金",
    },
    {
        english: "schoolbag",
        phoneticSymbol: "['sku:lbæg]",
        chinese: "n. 书包",
    },
    {
        english: "school",
        phoneticSymbol: "[sku:l]",
        chinese: "n. 学校;上学;学院;群",
    },
    {
        english: "schoolboy/girl",
        phoneticSymbol: "[ˈsku:lbɔɪ]",
        chinese: "n. （中小学的）男生;学童/女学生",
    },
    {
        english: "schoolmate",
        phoneticSymbol: "[ˈskuːlmeɪt]",
        chinese: "n. 同校同学",
    },
    {
        english: "science",
        phoneticSymbol: "[ˈsaɪəns]",
        chinese: "n. 科学，自然科学",
    },
    {
        english: "scientific",
        phoneticSymbol: "[saɪənˈtɪfɪk]",
        chinese: "a. 科学的",
    },
    {
        english: "scientist",
        phoneticSymbol: "[ˈsaɪəntɪst]",
        chinese: "n. 科学家",
    },
    {
        english: "scissors",
        phoneticSymbol: "[ˈsɪzəz]",
        chinese: "n. 剪刀，剪子",
    },
    {
        english: "scold",
        phoneticSymbol: "[skəʊld]",
        chinese: "vt. 责骂",
    },
    {
        english: "score",
        phoneticSymbol: "[skɔː(r)]",
        chinese: "n.& v. 得分，分数",
    },
    {
        english: "scratch",
        phoneticSymbol: "[ krætʃ ]",
        chinese: "v./ n. 划破，划痕，划伤",
    },
    {
        english: "scream",
        phoneticSymbol: "[skriːm]",
        chinese: "n. 尖叫",
    },
    {
        english: "screen",
        phoneticSymbol: "[skriːn]",
        chinese: "n. 幕，荧光屏",
    },
    {
        english: "sculpture",
        phoneticSymbol: "[ˈskʌlptʃə(r)]",
        chinese: "n. 雕塑（术），雕刻（术），雕刻作品，雕像",
    },
    {
        english: "sea",
        phoneticSymbol: "[siː]",
        chinese: "n. 海，海洋",
    },
    {
        english: "seagull",
        phoneticSymbol: "[ˈsiːɡʌl]",
        chinese: "n. 海鸥",
    },
    {
        english: "seal",
        phoneticSymbol: "[siːl]",
        chinese: "n. 海豹",
    },
    {
        english: "search",
        phoneticSymbol: "[sɜːtʃ]",
        chinese: "n.& v. 搜寻，搜查",
    },
    {
        english: "seashell",
        phoneticSymbol: "[ˈsiːʃel]",
        chinese: "n. 海贝",
    },
    {
        english: "seaside",
        phoneticSymbol: "[ˈsiːsaɪd]",
        chinese: "n. 海滨",
    },
    {
        english: "season",
        phoneticSymbol: "[ˈsiːz(ə)n]",
        chinese: "n. 季；季节",
    },
    {
        english: "seat",
        phoneticSymbol: "[siːt]",
        chinese: "n. 座位，座",
    },
    {
        english: "seaweed",
        phoneticSymbol: "[ˈsiːwiːd]",
        chinese: "n. 海草,海藻,海带",
    },
    {
        english: "second",
        phoneticSymbol: "[ˈsekənd]",
        chinese: "n.秒 num.第二a.第二的",
    },
    {
        english: "secret",
        phoneticSymbol: "[ˈsiːkrɪt]",
        chinese: "n. 秘密，内情",
    },
    {
        english: "secretary",
        phoneticSymbol: "[ˈsekrətərɪ]",
        chinese: "n. 秘书；书记",
    },
    {
        english: "section",
        phoneticSymbol: "[ˈsekʃ(ə)n]",
        chinese: "n. 段，部分，部门",
    },
    {
        english: "secure",
        phoneticSymbol: "[sɪˈkjʊə(r)]",
        chinese: "a.安心的,有把握的,牢靠的",
    },
    {
        english: "security",
        phoneticSymbol: "[sɪˈkjʊərɪtɪ]",
        chinese: "n. 安全，平安",
    },
    {
        english: "see (saw, seen)",
        phoneticSymbol: "[siː]",
        chinese: "vt. 看见，看到；领会；拜会",
    },
    {
        english: "seed",
        phoneticSymbol: "[siːd]",
        chinese: "n. 种子",
    },
    {
        english: "seek (sought, sought)",
        phoneticSymbol: "[siːk]",
        chinese: "vt.试图;探寻",
    },
    {
        english: "seem",
        phoneticSymbol: "[siːm]",
        chinese: "v. 似乎，好像",
    },
    {
        english: "seize",
        phoneticSymbol: "[siːz]",
        chinese: "vt. 抓住(时机等)",
    },
    {
        english: "seldom",
        phoneticSymbol: "[ˈseldəm]",
        chinese: "ad. 很少，不常",
    },
    {
        english: "select",
        phoneticSymbol: "[sɪˈlekt]",
        chinese: "vt. 选择，挑选，选拔",
    },
    {
        english: "self",
        phoneticSymbol: "[self]",
        chinese: "n. 自己，自我，自身",
    },
    {
        english: "selfish",
        phoneticSymbol: "[ˈselfɪʃ]",
        chinese: "a. 自私的",
    },
    {
        english: "sell (sold, sold)",
        phoneticSymbol: "[sel]",
        chinese: "v. 卖，售",
    },
    {
        english: "semicircle",
        phoneticSymbol: "[ˈsemɪsɜːk(ə)l]",
        chinese: "n. 半圆",
    },
    {
        english: "seminar",
        phoneticSymbol: "[ˈsemin ɜː (r)]",
        chinese: "n. 研讨班，讲习会;研讨小组;研讨会;培训会",
    },
    {
        english: "send (sent, sent)",
        phoneticSymbol: "[send]",
        chinese: "v. 打发，派遣；送，邮寄",
    },
    {
        english: "senior",
        phoneticSymbol: "[ˈsiːnɪə(r)]",
        chinese: "a. 年长的,资深的,高年级的 n. 上级，长辈，高年级生",
    },
    {
        english: "sense",
        phoneticSymbol: "[sens]",
        chinese: "n. 感觉，意识",
    },
    {
        english: "sensitive",
        phoneticSymbol: "[ˈsensɪtɪv]",
        chinese: "a.体贴的,善解人意的",
    },
    {
        english: "sentence",
        phoneticSymbol: "[ˈsent(ə)ns]",
        chinese: "n. 句子",
    },
    {
        english: "separate",
        phoneticSymbol: "[ˈsepərət]",
        chinese: "v. 使分开，使分离a. 单独的，分开的",
    },
    {
        english: "separation",
        phoneticSymbol: "[sepəˈreɪʃ(ə)n]",
        chinese: "n. 分离，隔离",
    },
    {
        english: "serious",
        phoneticSymbol: "[ˈsɪərɪəs]",
        chinese: "a.严肃的,严重的,认真的",
    },
    {
        english: "servant",
        phoneticSymbol: "[ˈsɜːvənt]",
        chinese: "n. 仆人，佣人",
    },
    {
        english: "serve",
        phoneticSymbol: "[sɜːv]",
        chinese: "vt. 招待（顾客等）,服务",
    },
    {
        english: "service",
        phoneticSymbol: "[ˈsɜːvɪs]",
        chinese: "n. 服务",
    },
    {
        english: "session",
        phoneticSymbol: "[ˈseʃ(ə)n]",
        chinese: "n.一场,一节,一段时间",
    },
    {
        english: "set (set, set)",
        phoneticSymbol: "[set]",
        chinese: "vt. 释放，安置 n. 装备，设备",
    },
    {
        english: "settle",
        phoneticSymbol: "[ˈset(ə)l]",
        chinese: "vi. 安家，定居",
    },
    {
        english: "settlement",
        phoneticSymbol: "[ˈsetəlmənt]",
        chinese: "n. 新拓居地；（美）部落，村落",
    },
    {
        english: "settler",
        phoneticSymbol: "[ˈsetlə(r)]",
        chinese: "n. 移居者，开拓者",
    },
    {
        english: "several",
        phoneticSymbol: "[ˈsevr(ə)l]",
        chinese: "pron. 几个,数个 a.若干",
    },
    {
        english: "severe",
        phoneticSymbol: "[sɪˈvɪə(r)]",
        chinese: "a.极为恶劣,十分严重的",
    },
    {
        english: "sew (sewed, sewn 或sewed)",
        phoneticSymbol: "[səʊ]",
        chinese: "vi. 缝, 缝制；缝补；缝纫",
    },
    {
        english: "sex",
        phoneticSymbol: "[seks]",
        chinese: "n. 性，性别",
    },
    {
        english: "shabby",
        phoneticSymbol: "[ˈʃæbɪ]",
        chinese: "a.破旧,破烂,衣衫褴褛的",
    },
    {
        english: "shade",
        phoneticSymbol: "[ʃeɪd]",
        chinese: "n. 阴凉处，树荫处",
    },
    {
        english: "shadow",
        phoneticSymbol: "[ˈʃædəʊ]",
        chinese: "n. 影子, 阴影",
    },
    {
        english: "shake (shook, shak en)",
        phoneticSymbol: "[ʃeɪk]",
        chinese: "v. （使）动摇，震动",
    },
    {
        english: "shall (should)",
        phoneticSymbol: "[ʃæl, ʃ(ə)l]",
        chinese: "v. aux. （表示将来）将要，会；……好吗",
    },
    {
        english: "shallow",
        phoneticSymbol: "[ˈʃæləʊ]",
        chinese: "a. 浅的,不深的,肤浅的",
    },
    {
        english: "shame",
        phoneticSymbol: "[ʃeɪm]",
        chinese: "n. 遗憾的事；羞愧",
    },
    {
        english: "shape",
        phoneticSymbol: "[ʃeɪp]",
        chinese: "n. 形状，外形 v. 使成型，制造，塑造",
    },
    {
        english: "share",
        phoneticSymbol: "[ʃeə(r)]",
        chinese: "vt. 分享，共同使用",
    },
    {
        english: "shark",
        phoneticSymbol: "[ʃɑːk]",
        chinese: "n. 鲨鱼",
    },
    {
        english: "sharp",
        phoneticSymbol: "[ʃɑːp]",
        chinese: "a. 锋利的，尖的",
    },
    {
        english: "sharpen",
        phoneticSymbol: "[ˈʃɑːpən]",
        chinese: "v. （使）变锐利，削尖",
    },
    {
        english: "sharpener",
        phoneticSymbol: "[ˈʃɑːpənə(r)]",
        chinese: "n. 削尖用的器具",
    },
    {
        english: "shave (shaved, shaved 或 shaven)",
        phoneticSymbol: "[ʃeɪv]",
        chinese: "v. 刮（脸，胡子）",
    },
    {
        english: "she",
        phoneticSymbol: "[ʃiː]",
        chinese: "pron. 她",
    },
    {
        english: "sheep (复sheep)",
        phoneticSymbol: "[ʃiːp]",
        chinese: "n. （绵）羊；羊皮；驯服者",
    },
    {
        english: "sheet",
        phoneticSymbol: "[ʃiːt]",
        chinese: "n. 成幅的薄片，薄板",
    },
    {
        english: "shelf (复 shelves)",
        phoneticSymbol: "[ʃelf]",
        chinese: "n. 架子；搁板；格层；礁；陆架",
    },
    {
        english: "shelter",
        phoneticSymbol: "[ˈʃeltə(r)]",
        chinese: "n. 掩蔽；隐蔽处",
    },
    {
        english: "shine",
        phoneticSymbol: "[ʃaɪn]",
        chinese: "n. 光泽；光彩；阳光；晴天；光(亮)",
    },
    {
        english: "shine (shone, shone 或-d, -d)",
        phoneticSymbol: "[ʃaɪn]",
        chinese: "v. 发光；照耀；杰出；擦亮",
    },
    {
        english: "ship",
        phoneticSymbol: "[ʃɪp]",
        chinese: "n. 船，轮船 vi. 用船装运",
    },
    {
        english: "shirt",
        phoneticSymbol: "[ʃɜːt]",
        chinese: "vn. 男衬衫",
    },
    {
        english: "shock",
        phoneticSymbol: "[ʃɔk]",
        chinese: "vt. 使震惊",
    },
    {
        english: "shoe",
        phoneticSymbol: "[ʃuː]",
        chinese: "n. 鞋",
    },
    {
        english: "shoot",
        phoneticSymbol: "[ʃuːt]",
        chinese: "(shot, shot) vt. 射击，射中，发射 n. 嫩枝；苗；芽",
    },
    {
        english: "shop",
        phoneticSymbol: "[ʃɔp]",
        chinese: "vi. 买东西 n. 商店,车间",
    },
    {
        english: "shopkeeper",
        phoneticSymbol: "[ˈʃɔpkiːpə(r)]",
        chinese: "n. 店主，零售商人",
    },
    {
        english: "shopping",
        phoneticSymbol: "[ˈʃɔpɪŋ]",
        chinese: "n. 买东西",
    },
    {
        english: "shore",
        phoneticSymbol: "[ʃɔː(r)]",
        chinese: "n. 滨，岸",
    },
    {
        english: "short",
        phoneticSymbol: "[ʃɔːt]",
        chinese: "a. 短的；矮的",
    },
    {
        english: "shortcoming",
        phoneticSymbol: "[ˈʃɔːtkʌmɪŋ]",
        chinese: "n. 缺点，短处",
    },
    {
        english: "shortly",
        phoneticSymbol: "[ˈʃɔːtlɪ]",
        chinese: "ad. 不久",
    },
    {
        english: "shorts",
        phoneticSymbol: "[ʃɔːts]",
        chinese: "n. 短裤；运动短裤",
    },
    {
        english: "shot",
        phoneticSymbol: "[ʃɔt]",
        chinese: "n. 射击，开枪，开炮，射击声；子弹",
    },
    {
        english: "should",
        phoneticSymbol: "[ʃɔt]",
        chinese: "v. mod. 应当，应该，会 v. aux.会,应该（shall的过去时态）",
    },
    {
        english: "shoulder",
        phoneticSymbol: "[ˈʃəʊldə(r)]",
        chinese: "n. 肩膀,(道路的)路肩",
    },
    {
        english: "shout",
        phoneticSymbol: "[ˈʃəʊldə(r)]",
        chinese: "n.& v. 喊，高声呼喊",
    },
    {
        english: "show",
        phoneticSymbol: "[ʃəʊ]",
        chinese: "n. 展示,展览（会）;演出",
    },
    {
        english: "show",
        phoneticSymbol: "[ʃəʊ]",
        chinese: "(showed, shown 或 showed) v. 给…看,出示,显示",
    },
    {
        english: "shower",
        phoneticSymbol: "[ˈʃaʊə(r)]",
        chinese: "n. 阵雨；淋浴",
    },
    {
        english: "shrink (shrank, shrunk / shrunk, shrunken)",
        phoneticSymbol: "[ʃrɪŋk]",
        chinese: "v. 缩小，收缩，减少",
    },
    {
        english: "shut (shut, shut)",
        phoneticSymbol: "[ʃʌt]",
        chinese: "v. / n. 关上，封闭；禁闭；",
    },
    {
        english: "shuttle",
        phoneticSymbol: "[ˈʃʌt(ə)l]",
        chinese: "vn. 合拢 （往返与两个定点之间的）（火车汽车飞机）班车/机",
    },
    {
        english: "shy",
        phoneticSymbol: "[ʃaɪ]",
        chinese: "a. 害羞的",
    },
    {
        english: "sick",
        phoneticSymbol: "[sɪk]",
        chinese: "a.有病,患病的,（想）呕吐",
    },
    {
        english: "sickness",
        phoneticSymbol: "[ˈsɪknɪs]",
        chinese: "n. 疾病",
    },
    {
        english: "side",
        phoneticSymbol: "[ˈsɪknɪs]",
        chinese: "n. 边，旁边，面，侧面",
    },
    {
        english: "sideways",
        phoneticSymbol: "[ˈsaɪdweɪz]",
        chinese: "ad. 斜向一边的",
    },
    {
        english: "sigh",
        phoneticSymbol: "[saɪ]",
        chinese: "vi. 叹息；叹气",
    },
    {
        english: "sight",
        phoneticSymbol: "[saɪ]",
        chinese: "n. 情景，风景；视力",
    },
    {
        english: "sightseeing",
        phoneticSymbol: "[ˈsaɪtsiːɪŋ]",
        chinese: "n. 游览，观光",
    },
    {
        english: "signal",
        phoneticSymbol: "[ˈsɪɡn(ə)l]",
        chinese: "n. 信号，暗号",
    },
    {
        english: "signature",
        phoneticSymbol: "[ˈsɪɡnətʃə(r)]",
        chinese: "n. 签名",
    },
    {
        english: "significance",
        phoneticSymbol: "[ˈsɪɡnətʃə(r)]",
        chinese: "n. 重要性，意义",
    },
    {
        english: "silence",
        phoneticSymbol: "[ˈsaɪləns]",
        chinese: "n. 安静，沉默",
    },
    {
        english: "silent",
        phoneticSymbol: "[ˈsaɪlənt]",
        chinese: "a. 无声的，无对话的",
    },
    {
        english: "silk",
        phoneticSymbol: "[sɪlk]",
        chinese: "n. （蚕）丝，丝织品",
    },
    {
        english: "silly",
        phoneticSymbol: "[ˈsɪlɪ]",
        chinese: "a. 傻的，愚蠢的",
    },
    {
        english: "silver",
        phoneticSymbol: "[ˈsɪlvə(r)]",
        chinese: "n. 银",
    },
    {
        english: "similar",
        phoneticSymbol: "[ˈsɪmɪlə(r)]",
        chinese: "a. 相似的，像",
    },
    {
        english: "simple",
        phoneticSymbol: "[ˈsɪmp(ə)l]",
        chinese: "a. 简单的，简易的",
    },
    {
        english: "simplify",
        phoneticSymbol: "[ˈsɪmplɪfaɪ]",
        chinese: "v. 使简化，使简易",
    },
    {
        english: "since",
        phoneticSymbol: "[sɪns]",
        chinese: "ad. 从那时以来 conj. 从…以来，…以后，由于 prep. 从…以来",
    },
    {
        english: "sincerely",
        phoneticSymbol: "[sɪn'sɪrlɪ /-'sɪəl-]",
        chinese: "ad. 真诚地",
    },
    {
        english: "sing (sang, sung)",
        phoneticSymbol: "[sɪŋ]",
        chinese: "v. 唱，唱歌",
    },
    {
        english: "single",
        phoneticSymbol: "[ˈsɪŋɡ(ə)l]",
        chinese: "a. 单一的，单个的",
    },
    {
        english: "sink",
        phoneticSymbol: "[sɪŋk]",
        chinese: "n. 洗涤槽；污水槽",
    },
    {
        english: "sink (sank, sunk)",
        phoneticSymbol: "[sɪŋk]",
        chinese: "vi. 下沉；消沉",
    },
    {
        english: "sir",
        phoneticSymbol: "[sɜː(r)]",
        chinese: "n. 先生；阁下",
    },
    {
        english: "sister",
        phoneticSymbol: "[ˈsɪstə(r)]",
        chinese: "n. 姐；妹",
    },
    {
        english: "sit (sat, sat)",
        phoneticSymbol: "[sɪt]",
        chinese: "vi. 坐",
    },
    {
        english: "situation",
        phoneticSymbol: "[sɪtjʊˈeɪʃ(ə)n]",
        chinese: "n. 形势，情况",
    },
    {
        english: "size",
        phoneticSymbol: "[sɪksˈtiːnθ]",
        chinese: "n. 尺寸，大小",
    },
    {
        english: "skate",
        phoneticSymbol: "[sɪksˈtiːnθ]",
        chinese: "vi. 溜冰，滑冰",
    },
    {
        english: "skateboard",
        phoneticSymbol: "[ˈskeɪtbɔːd]",
        chinese: "n. 冰鞋，滑板",
    },
    {
        english: "ski",
        phoneticSymbol: "[skiː]",
        chinese: "n.& vi. 滑雪板；滑雪",
    },
    {
        english: "skill",
        phoneticSymbol: "[skiː]",
        chinese: "n. 技能，技巧",
    },
    {
        english: "skillful",
        phoneticSymbol: "[ˈskɪlf(ə)l]",
        chinese: "a. 熟练,精湛的,灵巧的",
    },
    {
        english: "skin",
        phoneticSymbol: "[skɪn]",
        chinese: "n. 皮，皮肤；兽皮",
    },
    {
        english: "skip",
        phoneticSymbol: "[skɪp]",
        chinese: "v. 蹦蹦跳跳；跳绳",
    },
    {
        english: "skirt",
        phoneticSymbol: "[skɜːt]",
        chinese: "n. 女裙",
    },
    {
        english: "sky",
        phoneticSymbol: "[skaɪ]",
        chinese: "n. 天；天空",
    },
    {
        english: "skyscraper",
        phoneticSymbol: "[ˈskaɪskreɪpə(r)]",
        chinese: "n. 摩天楼",
    },
    {
        english: "slave",
        phoneticSymbol: "[sleɪv]",
        chinese: "n. 奴隶",
    },
    {
        english: "slavery",
        phoneticSymbol: "[ˈsleɪvərɪ]",
        chinese: "n. 奴隶制度",
    },
    {
        english: "sleep",
        phoneticSymbol: "[sliːp]",
        chinese: "n. 睡觉",
    },
    {
        english: "sleep (slept, slept)",
        phoneticSymbol: "[sliːp]",
        chinese: "vi. 睡觉",
    },
    {
        english: "sleepy",
        phoneticSymbol: "[sliːp]",
        chinese: "a. 想睡的,困倦的,瞌睡的",
    },
    {
        english: "sleeve",
        phoneticSymbol: "[sliːv]",
        chinese: "n. 袖子，袖套",
    },
    {
        english: "slice",
        phoneticSymbol: "[sliːv]",
        chinese: "n. 片，切面（薄）片",
    },
    {
        english: "slide",
        phoneticSymbol: "[slaɪd]",
        chinese: "n.幻灯片,滑道 v.滑行,滑动",
    },
    {
        english: "slight",
        phoneticSymbol: "[slaɪt]",
        chinese: "a. 轻微的，细小的",
    },
    {
        english: "slim",
        phoneticSymbol: "[slɪm]",
        chinese: "a. 苗条的，纤细的",
    },
    {
        english: "slip",
        phoneticSymbol: "[slɪp]",
        chinese: "n. 片，条，纸片，纸条",
    },
    {
        english: "slow",
        phoneticSymbol: "[slɪp]",
        chinese: "ad. 慢慢地，缓慢地",
    },
    {
        english: "small",
        phoneticSymbol: "[smɔːl]",
        chinese: "a. 小的，少的",
    },
    {
        english: "smart",
        phoneticSymbol: "[smɑːt]",
        chinese: "a. 灵巧的，伶俐的；（人、服装等）时髦的，帅的",
    },
    {
        english: "smell (smelt, smelt 或smelled,smelled)",
        phoneticSymbol: "[smel]",
        chinese: "v. 嗅，闻到；发气味 n. 气味",
    },
    {
        english: "smile",
        phoneticSymbol: "[smaɪl]",
        chinese: "n.& v. 微笑",
    },
    {
        english: "smog",
        phoneticSymbol: "[smaɪl]",
        chinese: "n. 烟雾(= smoke + fog)",
    },
    {
        english: "smoke",
        phoneticSymbol: "[smaɪl]",
        chinese: "n. 烟 v. 冒烟；吸烟",
    },
    {
        english: "smoker",
        phoneticSymbol: "[ˈsməʊkə(r)]",
        chinese: "n. 吸烟者",
    },
    {
        english: "smoking",
        phoneticSymbol: "[ˈsməʊkɪŋ]",
        chinese: "n. 吸烟,抽烟;冒烟",
    },
    {
        english: "smooth",
        phoneticSymbol: "[ˈsməʊkɪŋ]",
        chinese: "a. 光滑的;平坦的",
    },
    {
        english: "snake",
        phoneticSymbol: "[sneɪk]",
        chinese: "n.蛇v.蛇般爬行;蜿蜒行进",
    },
    {
        english: "sneaker",
        phoneticSymbol: "[sneɪk]",
        chinese: "n. （复）轻便运动鞋（美）",
    },
    {
        english: "sneeze",
        phoneticSymbol: "[sneɪk]",
        chinese: "v. 打喷嚏",
    },
    {
        english: "sniff",
        phoneticSymbol: "[snɪf]",
        chinese: "v. 抽鼻子（哭,患感冒时）",
    },
    {
        english: "snow",
        phoneticSymbol: "[snəʊ]",
        chinese: "n. 雪 vi.下雪",
    },
    {
        english: "snowy",
        phoneticSymbol: "[ˈsnəʊɪ]",
        chinese: "a. 雪(白)的；下雪的；多(积)雪的",
    },
    {
        english: "so",
        phoneticSymbol: "[səʊ]",
        chinese: "ad. 如此，这么；非常；同样 conj. 因此，所以",
    },
    {
        english: "soap",
        phoneticSymbol: "[səʊp]",
        chinese: "n. 肥皂",
    },
    {
        english: "sob",
        phoneticSymbol: "[səʊp]",
        chinese: "n.& v. 抽泣，啜泣",
    },
    {
        english: "soccer",
        phoneticSymbol: "[ˈsɔkə(r)]",
        chinese: "n.英式足球",
    },
    {
        english: "social",
        phoneticSymbol: "[ˈsəʊʃ(ə)l]",
        chinese: "a. 社会的；社交的",
    },
    {
        english: "socialism",
        phoneticSymbol: "[ˈsəʊʃəlɪz(ə)m]",
        chinese: "n. 社会主义",
    },
    {
        english: "socialist",
        phoneticSymbol: "[ˈsəʊʃəlɪst]",
        chinese: "a. 社会主义的",
    },
    {
        english: "society",
        phoneticSymbol: "[səˈsaɪətɪ]",
        chinese: "n. 社会",
    },
    {
        english: "sock",
        phoneticSymbol: "[sɔk]",
        chinese: "n. 短袜",
    },
    {
        english: "socket",
        phoneticSymbol: "[ˈsɔkɪt]",
        chinese: "n. （电源）插座",
    },
    {
        english: "sofa",
        phoneticSymbol: "[ˈsɔkɪt]",
        chinese: "n. （长）沙发",
    },
    {
        english: "soft",
        phoneticSymbol: "[sɔft; (US) sɔːft]",
        chinese: "a. 软的，柔和的",
    },
    {
        english: "software",
        phoneticSymbol: "[sɔft; (US) sɔːft]",
        chinese: "n. 软件",
    },
    {
        english: "soil",
        phoneticSymbol: "[sɔɪl]",
        chinese: "n. 土壤，土地",
    },
    {
        english: "solar",
        phoneticSymbol: "[ˈsəʊlə(r)]",
        chinese: "a. 太阳的",
    },
    {
        english: "soldier",
        phoneticSymbol: "[ˈsəʊldʒə(r)]",
        chinese: "n. 士兵，战士",
    },
    {
        english: "solid",
        phoneticSymbol: "[ˈsɔlɪd]",
        chinese: "a. 结实的,固体的 n.固体",
    },
    {
        english: "some",
        phoneticSymbol: "[sʌm]",
        chinese: "a. 一些，若干；有些；某一 pron. 若干，一些",
    },
    {
        english: "somebody",
        phoneticSymbol: "[ˈsʌmbʌdɪ; ˈsʌmbədɪ]",
        chinese: "pron. 某人；有人；有名气的人",
    },
    {
        english: "something",
        phoneticSymbol: "[ˈsʌmθɪŋ]",
        chinese: "pron. 某事；某物",
    },
    {
        english: "sometimes",
        phoneticSymbol: "[ˈsʌmtaɪmz]",
        chinese: "ad. 有时",
    },
    {
        english: "somewhere",
        phoneticSymbol: "[ˈsʌmtaɪmz]",
        chinese: "ad. 在某处",
    },
    {
        english: "son",
        phoneticSymbol: "[sʌn]",
        chinese: "n. 儿子",
    },
    {
        english: "song",
        phoneticSymbol: "[sʌn]",
        chinese: "n. 歌唱；歌曲",
    },
    {
        english: "soon",
        phoneticSymbol: "[sʌn]",
        chinese: "ad. 不久,很快,一会儿",
    },
    {
        english: "sorrow",
        phoneticSymbol: "[ˈsɔrəʊ]",
        chinese: "n. 悲伤，悲痛",
    },
    {
        english: "sorry",
        phoneticSymbol: "[ˈsɔrɪ]",
        chinese: "a. 对不起,抱歉;难过的",
    },
    {
        english: "sort",
        phoneticSymbol: "[sɔːt]",
        chinese: "vt. 把…分类，拣选 n. 种类，类别",
    },
    {
        english: "soul",
        phoneticSymbol: "[səʊl]",
        chinese: "n. 灵魂；心灵；气魄",
    },
    {
        english: "sound",
        phoneticSymbol: "[saʊnd]",
        chinese: "vi.听起来,发出声音n.声音",
    },
    {
        english: "soup",
        phoneticSymbol: "[suːp]",
        chinese: "n. 汤",
    },
    {
        english: "sour",
        phoneticSymbol: "[ˈsaʊə(r)]",
        chinese: "a. 酸的，馊的",
    },
    {
        english: "south",
        phoneticSymbol: "[ˈsaʊə(r)]",
        chinese:
            "a. 南(方)的；向南的；从南来的 ad. 在南方；向南方；自南方 n. 南；南方；南风；南部",
    },
    {
        english: "southeast",
        phoneticSymbol: "[‚saʊθ'ɪːs]",
        chinese: "n. 东南",
    },
    {
        english: "southern",
        phoneticSymbol: "[ˈsʌð(ə)n]",
        chinese: "a. 南部的，南方的",
    },
    {
        english: "southwest",
        phoneticSymbol: "[sauθ'west]",
        chinese: "n. 西南",
    },
    {
        english: "souvenir",
        phoneticSymbol: "[suːvəˈnɪə(r); (US) ˈsuːvənɪər]",
        chinese: "n.旅游纪念品,纪念物",
    },
    {
        english: "sow (sowed, sown 或-ed)",
        phoneticSymbol: "[səʊ]",
        chinese: "vt.播种",
    },
    {
        english: "space",
        phoneticSymbol: "[speɪs]",
        chinese: "n. 空间",
    },
    {
        english: "spaceship",
        phoneticSymbol: "[ˈspeɪsʃɪp]",
        chinese: "n. 宇宙飞船",
    },
    {
        english: "spade",
        phoneticSymbol: "[speɪd]",
        chinese: "n. 铲子;纸牌中的黑桃",
    },
    {
        english: "spare",
        phoneticSymbol: "[speə(r)]",
        chinese: "a. 空闲,多余的，剩余的",
    },
    {
        english: "sparrow",
        phoneticSymbol: "[ˈspærəʊ]",
        chinese: "n. 麻雀，雀型鸟类",
    },
    {
        english: "speak (spoke, spoken)",
        phoneticSymbol: "[ˈspærəʊ]",
        chinese: "v. 说，讲；谈话；发言",
    },
    {
        english: "speaker",
        phoneticSymbol: "[ˈspiːkə(r)]",
        chinese: "n. 演讲人，演说家",
    },
    {
        english: "spear",
        phoneticSymbol: "[spɪə(r)]",
        chinese: "n. 矛，枪，梭镖",
    },
    {
        english: "special",
        phoneticSymbol: "[ˈspeʃ(ə)l]",
        chinese: "a. 特别的，专门的",
    },
    {
        english: "specialist",
        phoneticSymbol: "[ˈspeʃəlɪst]",
        chinese: "n. （医学）专家，专科医生；专家；专业人员",
    },
    {
        english: "specific",
        phoneticSymbol: "[spɪˈsɪfɪk]",
        chinese: "a.明确的,具体的,独特的",
    },
    {
        english: "speech",
        phoneticSymbol: "[spiːtʃ]",
        chinese: "n. 演讲",
    },
    {
        english: "speed",
        phoneticSymbol: "[spiːd]",
        chinese: "n. 速度 v. （使）加速",
    },
    {
        english: "spell",
        phoneticSymbol: "[spiːd]",
        chinese: "vt. 拼写",
    },
    {
        english: "spelling",
        phoneticSymbol: "[ˈspelɪŋ]",
        chinese: "n. 拼写，拼读",
    },
    {
        english: "spend (spent, spent)",
        phoneticSymbol: "[ˈspelɪŋ]",
        chinese: "v. 度过；花费（钱、时间等）",
    },
    {
        english: "spin",
        phoneticSymbol: "[spɪn]",
        chinese: "v.& n. 纺，（使）快速旋转；旋转，旋转运动",
    },
    {
        english: "spirit",
        phoneticSymbol: "[ˈspɪrɪt]",
        chinese: "n. 精神",
    },
    {
        english: "spiritual",
        phoneticSymbol: "[ˈspɪrɪtʃʊəl]",
        chinese: "a. 精神的； 心灵的",
    },
    {
        english: "spit",
        phoneticSymbol: "[spɪt]",
        chinese: "v. 吐唾沫；吐痰",
    },
    {
        english: "splendid",
        phoneticSymbol: "[ˈsplendɪd]",
        chinese: "a. 灿烂的，辉煌的；（口语）极好的",
    },
    {
        english: "split",
        phoneticSymbol: "[splɪt]",
        chinese: "v. 撕开;切开",
    },
    {
        english: "spoken",
        phoneticSymbol: "[ˈspəʊkən]",
        chinese: "a. 口语的",
    },
    {
        english: "spokesman/ woman (pl. spokesmen/ women)",
        phoneticSymbol: "[ˈspəʊkən mæn]",
        chinese: "n. 发言人",
    },
    {
        english: "sponsor",
        phoneticSymbol: "[ˈspɔnsə(r)]",
        chinese: "n. 赞助者，赞助商",
    },
    {
        english: "spoon",
        phoneticSymbol: "[spuːn]",
        chinese: "n. 匙, 调羹",
    },
    {
        english: "spoonful",
        phoneticSymbol: "[ˈspuːnfʊl]",
        chinese: "n. 一匙（的量）",
    },
    {
        english: "sport",
        phoneticSymbol: "[spɔːt]",
        chinese: "vn. 体育运动，锻炼；(复，英)运动会",
    },
    {
        english: "spot",
        phoneticSymbol: "[spɔt]",
        chinese: "n. 斑点，污点；场所，地点 v. 沾上污渍，弄脏",
    },
    {
        english: "spray",
        phoneticSymbol: "[spreɪ]",
        chinese: "n. / v. 水雾,喷雾(器)喷洒",
    },
    {
        english: "spread",
        phoneticSymbol: "[spred]",
        chinese: "v. 延伸； 展开",
    },
    {
        english: "spring",
        phoneticSymbol: "[sprɪŋ]",
        chinese: "n. 春天,春季 n. 泉水,泉",
    },
    {
        english: "spy",
        phoneticSymbol: "[spaɪ]",
        chinese: "n. 密探,间谍 v.侦探,刺探",
    },
    {
        english: "square",
        phoneticSymbol: "[skweə(r)]",
        chinese: "n. 广场 a. 平方的；方形的，宽而结实的（体格，肩膀）",
    },
    {
        english: "squirrel",
        phoneticSymbol: "[ˈskwɪr(ə)l; (US) ˈskwɜːrəl]",
        chinese: "n. 松鼠",
    },
    {
        english: "stable",
        phoneticSymbol: "[ˈsteɪb(ə)l]",
        chinese: "a. 稳固的，牢固的",
    },
    {
        english: "stadium",
        phoneticSymbol: "[ˈsteɪdɪəm]",
        chinese: "n. （露天）体育场",
    },
    {
        english: "staff",
        phoneticSymbol: "[stɑːf]",
        chinese: "n. 全体职工（雇员）",
    },
    {
        english: "stage",
        phoneticSymbol: "[steɪdʒ]",
        chinese: "n. 舞台；阶段",
    },
    {
        english: "stain",
        phoneticSymbol: "[steɪn]",
        chinese: "n. 污点，污渍，染色剂",
    },
    {
        english: "stainless",
        phoneticSymbol: "[ˈsteɪnlɪs]",
        chinese: "a. 无污点的",
    },
    {
        english: "stair",
        phoneticSymbol: "[steə(r)]",
        chinese: "n. 楼梯",
    },
    {
        english: "stamp",
        phoneticSymbol: "[stæmp]",
        chinese: "n. 邮票",
    },
    {
        english: "stand",
        phoneticSymbol: "[stænd]",
        chinese: "n. 站；立；停止；立场；地位；台；坛；摊",
    },
    {
        english: "stand (stood, stood)",
        phoneticSymbol: "[stænd]",
        chinese: "v. 站；立；起立；坐落；经受；持久",
    },
    {
        english: "standard",
        phoneticSymbol: "[ˈstændəd]",
        chinese: "n. & a. 标准（的）",
    },
    {
        english: "star",
        phoneticSymbol: "[stɑː(r)]",
        chinese: "n. 星，恒星",
    },
    {
        english: "stare",
        phoneticSymbol: "[steə(r)]",
        chinese: "vi. 盯，凝视",
    },
    {
        english: "start",
        phoneticSymbol: "[stɑːt]",
        chinese: "v. 开始，着手；出发",
    },
    {
        english: "starvation",
        phoneticSymbol: "[stɑːˈveɪʃ(ə)n]",
        chinese: "n. 饥饿； 饿死",
    },
    {
        english: "starve",
        phoneticSymbol: "[stɑːv]",
        chinese: "v. 饿死",
    },
    {
        english: "state",
        phoneticSymbol: "[steɪt]",
        chinese: "n. 状态； 情形；国家，（美国的）州",
    },
    {
        english: "station",
        phoneticSymbol: "[ˈsteɪʃ(ə)n]",
        chinese: "n. 站，所，车站；电台",
    },
    {
        english: "statement",
        phoneticSymbol: "[ˈsteɪtmənt]",
        chinese: "n.声明，陈诉，说法",
    },
    {
        english: "statesman/ woman (pl. statesmen/ women)",
        phoneticSymbol: "[ˈsteɪtsmən]",
        chinese: "n. 政治家",
    },
    {
        english: "statistics",
        phoneticSymbol: "[stəˈtɪstɪks]",
        chinese: "n. 统计数字，统计资料，统计学",
    },
    {
        english: "statue",
        phoneticSymbol: "[ˈstætjuː]",
        chinese: "n. 法令，法规，章程",
    },
    {
        english: "status",
        phoneticSymbol: "[ˈsteɪtəs]",
        chinese: "n. 法律地位（身份）",
    },
    {
        english: "stay",
        phoneticSymbol: "[steɪ]",
        chinese: "n.& vi. 停留，逗留，呆",
    },
    {
        english: "steady",
        phoneticSymbol: "[ˈstedɪ]",
        chinese: "a. 稳固的；平稳的",
    },
    {
        english: "steak",
        phoneticSymbol: "[steɪk]",
        chinese: "n. 牛排，肉排，鱼排",
    },
    {
        english: "steal (stole, stolen)",
        phoneticSymbol: "[stiːl]",
        chinese: "vt. 偷, 窃取",
    },
    {
        english: "steam",
        phoneticSymbol: "[stiːm]",
        chinese: "n. 汽，水蒸气",
    },
    {
        english: "steel",
        phoneticSymbol: "[stiːl]",
        chinese: "n. 钢，钢铁",
    },
    {
        english: "steep",
        phoneticSymbol: "[stiːp]",
        chinese: "a. 险峻的； 陡峭的",
    },
    {
        english: "step",
        phoneticSymbol: "[step]",
        chinese: "n.脚步,台阶,梯级 vi.走,跨步",
    },
    {
        english: "steward",
        phoneticSymbol: "[ˈstjuːəd; (US) ˈstuːərd]",
        chinese: "n. (火车、飞机、轮船等)男服务员；男乘务员",
    },
    {
        english: "stewardess",
        phoneticSymbol: "[stjuːəˈdes, ˈstjuːədɪs]",
        chinese: "n.女乘务员,空中小姐",
    },
    {
        english: "stick (stuck, stuck)",
        phoneticSymbol: "[stɪk]",
        chinese: "vi. 粘住，钉住；坚持n. 木棒（棍）,枝条",
    },
    {
        english: "still",
        phoneticSymbol: "[stɪl]",
        chinese: "a.不动的,平静的ad.仍然,还",
    },
    {
        english: "stocking",
        phoneticSymbol: "[ˈstɔkɪŋ]",
        chinese: "n. 长统袜",
    },
    {
        english: "stomach",
        phoneticSymbol: "[ˈstʌmək]",
        chinese: "n. 胃，胃部",
    },
    {
        english: "stone",
        phoneticSymbol: "[stəʊn]",
        chinese: "n. 石头，石料",
    },
    {
        english: "stop",
        phoneticSymbol: "[stɔp]",
        chinese: "n. 停；（停车）站 v. 停，停止，阻止",
    },
    {
        english: "storage",
        phoneticSymbol: "[ˈstɔːrɪdʒ]",
        chinese: "n. 贮藏； 储存",
    },
    {
        english: "store",
        phoneticSymbol: "[stɔː(r)]",
        chinese: "n. 商店 vt. 储藏，存储",
    },
    {
        english: "storm",
        phoneticSymbol: "[stɔːm]",
        chinese: "n. 风暴，暴（风）雨",
    },
    {
        english: "story",
        phoneticSymbol: "[ˈstɔːrɪ]",
        chinese: "n. 故事，小说",
    },
    {
        english: "stout",
        phoneticSymbol: "[staʊt]",
        chinese: "a. 肥壮的，厚实牢固的",
    },
    {
        english: "stove",
        phoneticSymbol: "[stəʊv]",
        chinese: "n. （供烹饪用的 ）火炉，煤炉，电炉",
    },
    {
        english: "straight",
        phoneticSymbol: "[streɪt]",
        chinese: "a. 一直的，直的 ad. 一直地，直地",
    },
    {
        english: "straightforward",
        phoneticSymbol: "[streɪtˈfɔːwəd]",
        chinese: "a./ ad. 简单的，坦率的",
    },
    {
        english: "strait",
        phoneticSymbol: "[streɪt]",
        chinese: "n. 海峡",
    },
    {
        english: "strange",
        phoneticSymbol: "[streɪndʒ]",
        chinese: "a. 奇怪,奇特的,陌生的",
    },
    {
        english: "stranger",
        phoneticSymbol: "[ˈstreɪndʒə(r)]",
        chinese: "n. 陌生人，外人",
    },
    {
        english: "straw",
        phoneticSymbol: "[strɔː]",
        chinese: "n. 稻草",
    },
    {
        english: "strawberry",
        phoneticSymbol: "[ˈstrɔːbərɪ; (US) -berɪ]",
        chinese: "n. 草莓",
    },
    {
        english: "stream",
        phoneticSymbol: "[striːm]",
        chinese: "n. 小河；溪流",
    },
    {
        english: "street",
        phoneticSymbol: "[striːt]",
        chinese: "n. 街，街道",
    },
    {
        english: "strength",
        phoneticSymbol: "[streŋθ]",
        chinese: "n. 力量，力气",
    },
    {
        english: "strengthen",
        phoneticSymbol: "[ˈstreŋθ(ə)n]",
        chinese: "vt. 加强，增强",
    },
    {
        english: "stress",
        phoneticSymbol: "[stres]",
        chinese: "n. 精神压力，心理负担 v. 强调，重读",
    },
    {
        english: "strict",
        phoneticSymbol: "[strɪkt]",
        chinese: "a. 严格的，严密的",
    },
    {
        english: "strike",
        phoneticSymbol: "[straɪk]",
        chinese: "v.（钟）鸣;敲（响）,罢工",
    },
    {
        english: "strike (struck, struck 或stricken)",
        phoneticSymbol: "[straɪk]",
        chinese: "vt. 擦（打）火, 侵袭",
    },
    {
        english: "string",
        phoneticSymbol: "[strɪŋ]",
        chinese: "n. 细绳，线，带",
    },
    {
        english: "strong",
        phoneticSymbol: "[strɔŋ; (US) strɔːɡ]",
        chinese: "a. 强(壮)的；坚固的；强烈的；坚强的",
    },
    {
        english: "struggle",
        phoneticSymbol: "[ˈstrʌɡ(ə)l]",
        chinese: "vi. 斗争",
    },
    {
        english: "stubborn",
        phoneticSymbol: "[ˈstʌbən]",
        chinese: "a. 固执的，倔强的",
    },
    {
        english: "student",
        phoneticSymbol: "[ˈstjuːdənt]",
        chinese: "n. 学生",
    },
    {
        english: "studio",
        phoneticSymbol: "[ˈstjuːdɪəʊ]",
        chinese: "n. 工作室，演播室",
    },
    {
        english: "study",
        phoneticSymbol: "[ˈstʌdɪ]",
        chinese: "v. 学习；研究 n. 书房",
    },
    {
        english: "stupid",
        phoneticSymbol: "[ˈstjuːpɪd]",
        chinese: "a. 愚蠢的，笨的",
    },
    {
        english: "style",
        phoneticSymbol: "[staɪl]",
        chinese: "n. 方式，作风，款式",
    },
    {
        english: "subject",
        phoneticSymbol: "[ˈsʌbdʒɪkt]",
        chinese:
            "a. 隶属的；受支配的；易受…的；在…条件下 vt. 使隶属；使服从；使受到 n. 题目；主题；学科；主语；主体",
    },
    {
        english: "subjective",
        phoneticSymbol: "[səbˈdʒektɪv]",
        chinese: "a. 主观的",
    },
    {
        english: "submit",
        phoneticSymbol: "[səbˈmɪt]",
        chinese: "v. 提交，呈递（文件，建议等）",
    },
    {
        english: "subscribe",
        phoneticSymbol: "[səbˈskraɪb]",
        chinese: "v.订阅,订购（报刊等）",
    },
    {
        english: "substitute",
        phoneticSymbol: "[ˈsʌbstɪtjuːt]",
        chinese: "v. 代替，取代",
    },
    {
        english: "succeed",
        phoneticSymbol: "[səkˈsiːd]",
        chinese: "vi. 成功",
    },
    {
        english: "success",
        phoneticSymbol: "[səkˈses]",
        chinese: "n. 成功",
    },
    {
        english: "successful",
        phoneticSymbol: "[səkˈsesfʊl]",
        chinese: "a. 成功的,有成就的",
    },
    {
        english: "such",
        phoneticSymbol: "[sʌtʃ]",
        chinese: "ad. 那么 pron. （泛指）人，事物 a.这样的，那样的",
    },
    {
        english: "suck",
        phoneticSymbol: "[sʌk]",
        chinese: "vt. 吸吮",
    },
    {
        english: "sudden",
        phoneticSymbol: "[ˈsʌd(ə)n]",
        chinese: "a. 突然的",
    },
    {
        english: "suffer",
        phoneticSymbol: "[ˈsʌfə(r)]",
        chinese: "vi. 受苦，遭受",
    },
    {
        english: "suffering",
        phoneticSymbol: "[ˈsʌfərɪŋ]",
        chinese: "n. 痛苦，苦难",
    },
    {
        english: "sugar",
        phoneticSymbol: "[ˈʃʊɡə(r)]",
        chinese: "n. 糖",
    },
    {
        english: "suggest",
        phoneticSymbol: "[səˈdʒest; (US) səɡˈdʒest]",
        chinese: "vt. 建议，提议",
    },
    {
        english: "suggestion",
        phoneticSymbol: "[səˈdʒestʃ(ə)n]",
        chinese: "n. 建议",
    },
    {
        english: "suit",
        phoneticSymbol: "[suːt, sjuːt]",
        chinese: "vt. 适合 n.一套（衣服）",
    },
    {
        english: "suitable",
        phoneticSymbol: "[ˈsjuːtəb(ə)l]",
        chinese: "a. 合适的，适宜的",
    },
    {
        english: "suitcase",
        phoneticSymbol: "[ˈsjuːtkeɪs]",
        chinese: "n.(旅行用)小提箱,衣箱",
    },
    {
        english: "summary",
        phoneticSymbol: "[ˈsʌmərɪ]",
        chinese: "n. 摘要，概要",
    },
    {
        english: "summer",
        phoneticSymbol: "[ˈsʌmə(r)]",
        chinese: "n. 夏天，夏季",
    },
    {
        english: "sun",
        phoneticSymbol: "[sʌn]",
        chinese: "n. 太阳，阳光",
    },
    {
        english: "sunburnt",
        phoneticSymbol: "[ˈsʌnbɜːnt]",
        chinese: "a. 晒黑的",
    },
    {
        english: "sunlight",
        phoneticSymbol: "[ˈsʌnlaɪt]",
        chinese: "n. 日光，阳光",
    },
    {
        english: "sunny",
        phoneticSymbol: "[ˈsʌnɪ]",
        chinese: "a. 晴朗的;阳光充足的",
    },
    {
        english: "sunshine",
        phoneticSymbol: "[ˈsʌnʃaɪn]",
        chinese: "n. 阳光",
    },
    {
        english: "super",
        phoneticSymbol: "[ˈsuːpə(r), ˈsjuːpə(r)]",
        chinese: "a. 顶好的，超级的",
    },
    {
        english: "superb",
        phoneticSymbol: "[suːˈpɜːb]",
        chinese: "a. 卓越的,质量极高的",
    },
    {
        english: "superior",
        phoneticSymbol: "[suːˈpɪərɪə(r)]",
        chinese: "a. 更胜一筹的 n. 上级，上司",
    },
    {
        english: "supermarket",
        phoneticSymbol: "[ˈsuːpəmɑːkɪt]",
        chinese: "n. 超级市场",
    },
    {
        english: "supper",
        phoneticSymbol: "[ˈsʌpə(r)]",
        chinese: "n. 晚餐，晚饭",
    },
    {
        english: "supply",
        phoneticSymbol: "[səˈplaɪ]",
        chinese: "vt.& n. 供给，供应",
    },
    {
        english: "support",
        phoneticSymbol: "[səˈpɔːt]",
        chinese: "vt.& n. 支持，赞助",
    },
    {
        english: "suppose",
        phoneticSymbol: "[səˈpəʊz]",
        chinese: "vt. 猜想,假定,料想",
    },
    {
        english: "supreme",
        phoneticSymbol: "[suːˈpriːm]",
        chinese: "a.至高无上的,最高的",
    },
    {
        english: "sure",
        phoneticSymbol: "[ʃʊə(r), ʃɔː(r)]",
        chinese: "a. 确信，肯定 ad. (口语)的确，一定，当然",
    },
    {
        english: "surface",
        phoneticSymbol: "[ˈsɜːfɪs]",
        chinese: "n. 表面",
    },
    {
        english: "surgeon",
        phoneticSymbol: "[ˈsɜːdʒ(ə)n]",
        chinese: "n. 外科医生",
    },
    {
        english: "surplus",
        phoneticSymbol: "[ˈsɜːpləs]",
        chinese: "n. 过剩，剩余",
    },
    {
        english: "surprise",
        phoneticSymbol: "[səˈpraɪz]",
        chinese: "vt. 使惊奇,使诧异 n. 惊奇,诧异",
    },
    {
        english: "surround",
        phoneticSymbol: "[səˈraʊnd]",
        chinese: "vt. 围绕；包围",
    },
    {
        english: "surrounding",
        phoneticSymbol: "[səˈraʊndɪŋ]",
        chinese: "a. 周围的",
    },
    {
        english: "survival",
        phoneticSymbol: "[səˈvaɪv(ə)l]",
        chinese: "n. 存活，幸存",
    },
    {
        english: "survive",
        phoneticSymbol: "[səˈvaɪv]",
        chinese: "v.生存，存活，幸免于难",
    },
    {
        english: "suspect",
        phoneticSymbol: "[səˈspekt]",
        chinese: "n. 犯罪嫌疑人",
    },
    {
        english: "suspension",
        phoneticSymbol: "[səˈspenʃ(ə)n]",
        chinese: "n.暂令停职,推迟,延期",
    },
    {
        english: "swallow",
        phoneticSymbol: "[ˈswɔləʊ]",
        chinese: "vt. 吞下；咽下",
    },
    {
        english: "swap",
        phoneticSymbol: "[swɔp]",
        chinese: "v. 交换（东西）",
    },
    {
        english: "swear (swore, sworn)",
        phoneticSymbol: "[sweə(r)]",
        chinese: "v.咒骂.,诅咒",
    },
    {
        english: "sweat",
        phoneticSymbol: "[swet]",
        chinese: "n. 汗，汗水",
    },
    {
        english: "sweater",
        phoneticSymbol: "[ˈswetə(r)]",
        chinese: "n. 厚运动衫，毛衣 ",
    },
    {
        english: "sweep(swept,swept)",
        phoneticSymbol: "[swiːp]",
        chinese: "v. 扫除，扫",
    },
    {
        english: "sweet",
        phoneticSymbol: "[swiːt]",
        chinese: "n.甜食;蜜饯;甜点;糖果;芳香a.甜的;新鲜的;可爱的;亲切的",
    },
    {
        english: "swell (swelled, swollen)",
        phoneticSymbol: "[swel]",
        chinese: "v. 肿胀",
    },
    {
        english: "swift",
        phoneticSymbol: "[swɪft]",
        chinese: "a. 快的，迅速的",
    },
    {
        english: "swim",
        phoneticSymbol: "[swɪm]",
        chinese: "n. 游泳，游",
    },
    {
        english: "swim (swam, swum)",
        phoneticSymbol: "[swɪm]",
        chinese: "vi. 游泳,游",
    },
    {
        english: "swing",
        phoneticSymbol: "[swɪŋ]",
        chinese: "vt. 挥舞，摆动 n. 秋千",
    },
    {
        english: "switch",
        phoneticSymbol: "[swɪtʃ]",
        chinese: "v./ n. 开关,转换,改变",
    },
    {
        english: "sword",
        phoneticSymbol: "[sɔːd]",
        chinese: "n. 剑，刀",
    },
    {
        english: "symbol",
        phoneticSymbol: "[ˈsɪmb(ə)l]",
        chinese: "n. 象征",
    },
    {
        english: "sympathy",
        phoneticSymbol: "[ˈsɪmpəθɪ]",
        chinese: "n. 同情",
    },
    {
        english: "symphony",
        phoneticSymbol: "[ˈsɪmfənɪ]",
        chinese: "n. 交响乐",
    },
    {
        english: "symptom",
        phoneticSymbol: "[ˈsɪmfənɪ]",
        chinese: "n. 症状",
    },
    {
        english: "system",
        phoneticSymbol: "[ˈsɪstəm]",
        chinese: "n. 体系；系统",
    },
    {
        english: "systematic",
        phoneticSymbol: "[sɪstəˈmætɪk]",
        chinese: "a.系统的,有条理的",
    },
    {
        english: "table",
        phoneticSymbol: "[ˈteɪb(ə)l]",
        chinese: "n. 桌子，表格",
    },
    {
        english: "table tennis",
        phoneticSymbol: "[ˈteɪb(ə)l ˈtenɪs]",
        chinese: "n. 乒乓球",
    },
    {
        english: "tail",
        phoneticSymbol: "[teɪl]",
        chinese: "n. (动物的)尾巴",
    },
    {
        english: "tailor",
        phoneticSymbol: "[ˈteɪlə(r)]",
        chinese: "n. 裁缝",
    },
    {
        english: "take (took, taken)",
        phoneticSymbol: "[teɪk]",
        chinese: "vt. 拿；拿走；做；服用；乘坐；花费",
    },
    {
        english: "tale",
        phoneticSymbol: "[teɪl]",
        chinese: "n. 故事, 传说",
    },
    {
        english: "talent",
        phoneticSymbol: "[ˈtælənt]",
        chinese: "n. 天才，天赋",
    },
    {
        english: "talk",
        phoneticSymbol: "[tɔːk]",
        chinese: "n.& v.谈话,讲话,演讲,交谈",
    },
    {
        english: "tall",
        phoneticSymbol: "[tɔːl]",
        chinese: "a. 高的",
    },
    {
        english: "tank",
        phoneticSymbol: "[tæŋk]",
        chinese: "n. 储水容量；坦克",
    },
    {
        english: "tap",
        phoneticSymbol: "[tæp]",
        chinese: "n. (自来水煤气等的)龙头",
    },
    {
        english: "tape",
        phoneticSymbol: "[teɪp]",
        chinese: "n. 磁带；录音带",
    },
    {
        english: "tape recorder",
        phoneticSymbol: "[teɪp rɪˈkɔːdə(r)]",
        chinese: "n. 磁带录音机",
    },
    {
        english: "target",
        phoneticSymbol: "[ˈtɑːɡɪt]",
        chinese: "n./ v. 目标，把…作为攻击目标",
    },
    {
        english: "task",
        phoneticSymbol: "[tɑːsk; (US) tæsk]",
        chinese: "n. 任务, 工作",
    },
    {
        english: "taste",
        phoneticSymbol: "[teɪst]",
        chinese: "n. 品尝, 尝味；味道 vt. 品尝, 尝味",
    },
    {
        english: "tasteless",
        phoneticSymbol: "[ˈteɪstlɪs]",
        chinese: "a. 无滋味的",
    },
    {
        english: "tasty",
        phoneticSymbol: "[ˈteɪstɪ]",
        chinese: "a. 味道好的",
    },
    {
        english: "tax",
        phoneticSymbol: "[tæks]",
        chinese: "n. 税，税款",
    },
    {
        english: "taxi",
        phoneticSymbol: "[ˈtæksɪ]",
        chinese: "n. 出租汽车",
    },
    {
        english: "tea",
        phoneticSymbol: "[tiː]",
        chinese: "n. 茶；茶叶 ",
    },
    {
        english: "teach(taught,taught)",
        phoneticSymbol: "[tiːtʃ]",
        chinese: "v. 教书,教",
    },
    {
        english: "teacher",
        phoneticSymbol: "[ˈtiːtʃə(r)]",
        chinese: "n. 教师，教员",
    },
    {
        english: "team",
        phoneticSymbol: "[tiːm]",
        chinese: "n. 队，组",
    },
    {
        english: "teamwork",
        phoneticSymbol: "[ˈtiːmwɜːk]",
        chinese: "n. 合作，协同工作",
    },
    {
        english: "teapot",
        phoneticSymbol: "[ˈtiːpɔt]",
        chinese: "n. 茶壶",
    },
    {
        english: "tear",
        phoneticSymbol: "[teə(r)]",
        chinese: "n. 眼泪 v. 扯破, 撕开",
    },
    {
        english: "tease",
        phoneticSymbol: "[tiːz]",
        chinese: "v. 取笑，戏弄，寻开心",
    },
    {
        english: "technical",
        phoneticSymbol: "[ˈteknɪk(ə)l]",
        chinese: "a. 技术的，工艺的",
    },
    {
        english: "technique",
        phoneticSymbol: "[ˈteknɪk(ə)l]",
        chinese: "n. 技术;技巧,方法",
    },
    {
        english: "technology",
        phoneticSymbol: "[tekˈnɔlədʒɪ]",
        chinese: "n. 技术",
    },
    {
        english: "teenager",
        phoneticSymbol: "[ˈtiːneɪdʒə(r)]",
        chinese: "n.（13～19岁的）青少年，十几岁的少年",
    },
    {
        english: "telephone",
        phoneticSymbol: "[ˈtelɪɡrɑːf; (US) -ɡræf]",
        chinese: "v. 打电话 n. 电话",
    },
    {
        english: "telescope",
        phoneticSymbol: "[ˈtelɪɡrɑːf; (US) -ɡræf]",
        chinese: "n. 望远镜",
    },
    {
        english: "television",
        phoneticSymbol: "[ˈtelɪɡrɑːf; (US) -ɡræf]",
        chinese: "n. 电视",
    },
    {
        english: "tell (told, told)",
        phoneticSymbol: "[tel]",
        chinese: "vt.告诉,讲述,吩咐",
    },
    {
        english: "temperature",
        phoneticSymbol: "[ˈtemprɪtʃə(r)]",
        chinese: "n. 温度",
    },
    {
        english: "temple",
        phoneticSymbol: "[ˈtemp(ə)l]",
        chinese: "n. 庙宇，寺院",
    },
    {
        english: "temporary",
        phoneticSymbol: "[ˈtempərərɪ]",
        chinese: "a. 短暂的，暂时的",
    },
    {
        english: "tend",
        phoneticSymbol: "[tend]",
        chinese: "v. 往往会，常常就，倾向，趋于",
    },
    {
        english: "tendency",
        phoneticSymbol: "[ˈtendənsɪ]",
        chinese: "n. 倾向，偏好，性情",
    },
    {
        english: "tense",
        phoneticSymbol: "[tens]",
        chinese: "a. 心烦意乱的，紧张的",
    },
    {
        english: "tension",
        phoneticSymbol: "[ˈtenʃ(ə)n]",
        chinese: "n. 紧张局势，矛盾",
    },
    {
        english: "tent",
        phoneticSymbol: "[tent]",
        chinese: "n. 帐篷",
    },
    {
        english: "term",
        phoneticSymbol: "[tɜːm]",
        chinese: "n. 学期;术语;条款;项",
    },
    {
        english: "terrible",
        phoneticSymbol: "[ˈterɪb(ə)l]",
        chinese: "a. 可怕的；糟糕的",
    },
    {
        english: "terrify",
        phoneticSymbol: "[ˈterɪfaɪ]",
        chinese: "vt. 使人感到恐怖",
    },
    {
        english: "terror",
        phoneticSymbol: "[ˈterə(r)]",
        chinese: "n. 恐惧，惊恐",
    },
    {
        english: "test",
        phoneticSymbol: "[test]",
        chinese: "vt.& n. 测试, 考查，试验",
    },
    {
        english: "text",
        phoneticSymbol: "[tekst]",
        chinese: "n. 文本，课文",
    },
    {
        english: "than",
        phoneticSymbol: "[ðen, ðæn]",
        chinese: "conj. 比",
    },
    {
        english: "thank",
        phoneticSymbol: "[θæŋk]",
        chinese: "vt. 感谢，致谢，道谢 n. （复）感谢，谢意",
    },
    {
        english: "thankful",
        phoneticSymbol: "[ˈθæŋkfʊl]",
        chinese: "a. 感谢的，感激的",
    },
    {
        english: "that",
        phoneticSymbol: "[ðæt]",
        chinese:
            "a.& pron.那，那个 conj. 那，那个（引导宾语从句等）ad. 那么，那样",
    },
    {
        english: "the",
        phoneticSymbol: "[ðə, ðɪ, ðiː]",
        chinese:
            "art. 这（那）个,这（那）些（用于特定人或物，序数词，最高级，专有名词，世上独一 无二事物前）",
    },
    {
        english: "theatre (美theater)",
        phoneticSymbol: "['θiətə]",
        chinese: "n. 剧场，戏院",
    },
    {
        english: "theft",
        phoneticSymbol: "[θeft]",
        chinese: "n. 盗窃案",
    },
    {
        english: "their",
        phoneticSymbol: "[ðeə(r)]",
        chinese: "pron. 他(她,它)们的",
    },
    {
        english: "theirs",
        phoneticSymbol: "[ðeəz]",
        chinese: "pron. 他（她,它）们的",
    },
    {
        english: "them",
        phoneticSymbol: "[ð(ə)m, ðem]",
        chinese: "pron. 他/她/它们（宾格）",
    },
    {
        english: "theme",
        phoneticSymbol: "[θiːm]",
        chinese: "n. 主题",
    },
    {
        english: "themselves",
        phoneticSymbol: "[ðəmˈselvz]",
        chinese: "pron.他/她/它们自己",
    },
    {
        english: "then",
        phoneticSymbol: "[ðen]",
        chinese: "ad. 当时,那时,然后,那么",
    },
    {
        english: "theoretical",
        phoneticSymbol: "[θɪəˈretɪk(ə)l]",
        chinese: "a. 理论的",
    },
    {
        english: "theory",
        phoneticSymbol: "[θɪəˈretɪk(ə)l]",
        chinese: "n. 理论",
    },
    {
        english: "there",
        phoneticSymbol: "[ðeə(r)]",
        chinese:
            'int. 那！你瞧（表示引起注意） n. 那里，那儿 ad. 在那里，往那里；（作引导词）表”存在"',
    },
    {
        english: "therefore",
        phoneticSymbol: "[ˈðeəfɔː(r)]",
        chinese: "ad. 因此，所以",
    },
    {
        english: "thermos",
        phoneticSymbol: "[ˈθɜːmɔs]",
        chinese: "n. 热水瓶",
    },
    {
        english: "these",
        phoneticSymbol: "[ˈθɜːmɔs]",
        chinese: "a. & pron. 这些",
    },
    {
        english: "they",
        phoneticSymbol: "[ðeɪ]",
        chinese: "pron. 他（她）们；它们",
    },
    {
        english: "thick",
        phoneticSymbol: "[θɪk]",
        chinese: "a. 厚的",
    },
    {
        english: "thief (复thieves)",
        phoneticSymbol: "[θiːf]",
        chinese: "n. 窃贼, 小偷",
    },
    {
        english: "thin",
        phoneticSymbol: "[θɪn]",
        chinese: "a. 薄的；瘦的；稀的",
    },
    {
        english: "thing",
        phoneticSymbol: "[θɪŋ]",
        chinese: "n. 东西；(复)物品，用品；事情，事件",
    },
    {
        english: "think(thought, thought)",
        phoneticSymbol: "[θɪŋk]",
        chinese: "v. 想；认为；考虑",
    },
    {
        english: "thinking",
        phoneticSymbol: "[ˈθɪŋkɪŋ]",
        chinese: "n. 思索;见解;想法",
    },
    {
        english: "thirst",
        phoneticSymbol: "[θɜːd]",
        chinese: "n. 渴； 口渴",
    },
    {
        english: "this",
        phoneticSymbol: "[ðɪs]",
        chinese: "a.& pron.这，这个",
    },
    {
        english: "thorough",
        phoneticSymbol: "[ˈθʌrə; (US) ˈθʌrəʊ]",
        chinese: "a. 彻底的",
    },
    {
        english: "those",
        phoneticSymbol: "[ðəʊz]",
        chinese: "a.& pron.那些",
    },
    {
        english: "though",
        phoneticSymbol: "[ðəʊ]",
        chinese: "conj. 虽然，可是",
    },
    {
        english: "thought",
        phoneticSymbol: "[θɔːt]",
        chinese: "n. 思考,思想;念头",
    },
    {
        english: "thousand",
        phoneticSymbol: "[ˈθaʊzənd]",
        chinese: "num. 千",
    },
    {
        english: "thread",
        phoneticSymbol: "[θred]",
        chinese: "n. 线",
    },
    {
        english: "thrill",
        phoneticSymbol: "[θrɪl]",
        chinese: "n./ v. 兴奋，激动",
    },
    {
        english: "thriller",
        phoneticSymbol: "[ˈθrɪlə(r)]",
        chinese: "n. 惊险小说",
    },
    {
        english: "throat",
        phoneticSymbol: "[θrəʊt]",
        chinese: "n. 喉咙",
    },
    {
        english: "through",
        phoneticSymbol: "[θruː]",
        chinese: "prep.穿（通）过;从始至终 ad.穿(通)过;自始至终,全部",
    },
    {
        english: "throughout",
        phoneticSymbol: "[θruːˈaʊt]",
        chinese: "prep. 遍及，贯穿",
    },
    {
        english: "throw(threw,thrown)",
        phoneticSymbol: "[θrəʊ]",
        chinese: "v.投,掷,扔",
    },
    {
        english: "thunder",
        phoneticSymbol: "[ˈθʌndə(r)]",
        chinese: "n.& v. 雷声，打雷",
    },
    {
        english: "thunderstorm",
        phoneticSymbol: "[ˈθʌndəstɔːm]",
        chinese: "n.雷电交加暴风雨",
    },
    {
        english: "thus",
        phoneticSymbol: "[ðʌs]",
        chinese: "ad. 这样；因而",
    },
    {
        english: "tick",
        phoneticSymbol: "[tɪk]",
        chinese: "vt. 作记号",
    },
    {
        english: "ticket",
        phoneticSymbol: "[ˈtɪkɪt]",
        chinese: "n. 票；卷",
    },
    {
        english: "tidy",
        phoneticSymbol: "[ˈtɪkɪt]",
        chinese: "a. 整洁的，干净的 vt. 弄整洁，弄干净",
    },
    {
        english: "tie",
        phoneticSymbol: "[taɪ]",
        chinese: "vt. （用绳，线）系，拴，扎 n. 领带，绳子，结；关系",
    },
    {
        english: "tiger",
        phoneticSymbol: "[ˈtaɪɡə(r)]",
        chinese: "n. 老虎",
    },
    {
        english: "tight",
        phoneticSymbol: "[taɪt]",
        chinese: "a. 紧的",
    },
    {
        english: "till",
        phoneticSymbol: "[tɪl]",
        chinese: "conj.& prep.直到,直到…为止",
    },
    {
        english: "time",
        phoneticSymbol: "[taɪm]",
        chinese: "n. 时间;时期;钟点,次,回 vt.测定…的时间,记录…的时间",
    },
    {
        english: "timetable",
        phoneticSymbol: "[ˈtaɪmteɪb(ə)l]",
        chinese: "n. （火车、公共汽车等）时间表；（学校）课表",
    },
    {
        english: "tin",
        phoneticSymbol: "[tɪn]",
        chinese: "n. （英）罐头，听头",
    },
    {
        english: "tiny",
        phoneticSymbol: "[ˈtaɪnɪ]",
        chinese: "adj.  tinier, tiniest  a. 极小的，微小的",
    },
    {
        english: "tip",
        phoneticSymbol: "[tɪp]",
        chinese: "n.& v.顶端，尖端；告诫； 提示 (给)小费",
    },
    {
        english: "tire",
        phoneticSymbol: "[ˈtaɪə(r)]",
        chinese: "vi. 使疲劳",
    },
    {
        english: "tired",
        phoneticSymbol: "[ˈtaɪəd]",
        chinese: "a. 疲劳的，累的",
    },
    {
        english: "tissue",
        phoneticSymbol: "[ˈtɪʃuː, ˈtɪsjuː]",
        chinese: "n. （人，动植物的）组织，纸巾",
    },
    {
        english: "title",
        phoneticSymbol: "[ˈtɪʃuː, ˈtɪsjuː]",
        chinese: "n. 标题，题目",
    },
    {
        english: "to",
        phoneticSymbol: "[tʊ, tuː]",
        chinese:
            "prep. （动词不定式符号，无词义）；（表示接受动作的人或物）给；对，向，到；在…之前",
    },
    {
        english: "toast",
        phoneticSymbol: "[təʊst]",
        chinese: "v./ n. 烤",
    },
    {
        english: "tobacco",
        phoneticSymbol: "[təʊst]",
        chinese: "n. 烟草，烟叶",
    },
    {
        english: "today",
        phoneticSymbol: "[təʊst]",
        chinese: "ad.& n.今天;现在,当前",
    },
    {
        english: "together",
        phoneticSymbol: "[təʊst]",
        chinese: "ad. 一起，共同",
    },
    {
        english: "toilet",
        phoneticSymbol: "[ˈtɔɪlɪt]",
        chinese: "n. 厕所",
    },
    {
        english: "tolerate",
        phoneticSymbol: "[ˈtɔləreɪt]",
        chinese: "v. 容许，允许，忍受",
    },
    {
        english: "tomato",
        phoneticSymbol: "[təˈmɑːtəʊ; (US) təˈmeɪtəʊ]",
        chinese: "n. 西红柿，番茄",
    },
    {
        english: "tomb",
        phoneticSymbol: "[tuːm]",
        chinese: "n. 坟墓",
    },
    {
        english: "tomorrow",
        phoneticSymbol: "[təˈmɔrəʊ]",
        chinese: "ad. & n.明天",
    },
    {
        english: "ton",
        phoneticSymbol: "[təˈmɔrəʊ]",
        chinese: "n. （重量单位）吨",
    },
    {
        english: "tongue",
        phoneticSymbol: "[tʌŋ]",
        chinese: "n. 舌，舌头",
    },
    {
        english: "tonight",
        phoneticSymbol: "[təˈnaɪt]",
        chinese: "ad.& n. 今晚，今夜",
    },
    {
        english: "too",
        phoneticSymbol: "[təˈnaɪt]",
        chinese: "ad.也,还,又,太,过分,很,非常",
    },
    {
        english: "tool",
        phoneticSymbol: "[tuːl]",
        chinese: "n. 工具，器具",
    },
    {
        english: "tooth (复 teeth)",
        phoneticSymbol: "[tuːθ]",
        chinese: "n. 牙齿",
    },
    {
        english: "toothache",
        phoneticSymbol: "[ˈtuːθeɪk]",
        chinese: "n. 牙痛",
    },
    {
        english: "toothbrush",
        phoneticSymbol: "[ˈtuːθbrʌʃ]",
        chinese: "n. 牙刷",
    },
    {
        english: "toothpaste",
        phoneticSymbol: "[ˈtuːθpeɪst]",
        chinese: "n. 牙膏",
    },
    {
        english: "top",
        phoneticSymbol: "[tɔp]",
        chinese: "n. 顶部,（物体的）上面",
    },
    {
        english: "topic",
        phoneticSymbol: "[ˈtɔpɪk]",
        chinese: "n. 题目，话题",
    },
    {
        english: "tortoise",
        phoneticSymbol: "[ˈtɔpɪk]",
        chinese: "n. 乌龟",
    },
    {
        english: "total",
        phoneticSymbol: "[ˈtəʊt(ə)l]",
        chinese: "a. 总数的;总括的;完全的,全然的 n.合计,总计 v.合计为",
    },
    {
        english: "touch",
        phoneticSymbol: "[tʌtʃ]",
        chinese: "vt. 触摸，接触",
    },
    {
        english: "tough",
        phoneticSymbol: "[ˈtɔt(ə)lɪ]",
        chinese: "a. 坚硬的；结实的；棘手的，难解的",
    },
    {
        english: "tour",
        phoneticSymbol: "[tʊə(r)]",
        chinese: "n. 参观, 观光, 旅行",
    },
    {
        english: "tourism",
        phoneticSymbol: "[ˈtʊərɪz(ə)m]",
        chinese: "n. 旅游业；观光",
    },
    {
        english: "tourist",
        phoneticSymbol: "[ˈtʊərɪst]",
        chinese: "vn. 旅行者，观光者",
    },
    {
        english: "tournament",
        phoneticSymbol: "[ˈtʊənəmənt; (US) ˈtɜːrn-]",
        chinese: "n. 锦标赛，联赛",
    },
    {
        english: "toward(s)",
        phoneticSymbol: "[təˈwɔːd]",
        chinese: "prep. 向，朝，对于",
    },
    {
        english: "towel",
        phoneticSymbol: "[ˈtaʊəl]",
        chinese: "n. 毛巾",
    },
    {
        english: "tower",
        phoneticSymbol: "[ˈtaʊə(r)]",
        chinese: "n. 塔",
    },
    {
        english: "town",
        phoneticSymbol: "[taʊn]",
        chinese: "n. 城镇，城",
    },
    {
        english: "toy",
        phoneticSymbol: "[tɔɪ]",
        chinese: "n. 玩具, 玩物",
    },
    {
        english: "track",
        phoneticSymbol: "[træk]",
        chinese: "n. 轨道；田径",
    },
    {
        english: "tractor",
        phoneticSymbol: "[ˈtræktə(r)]",
        chinese: "n. 拖拉机",
    },
    {
        english: "trade",
        phoneticSymbol: "[treɪd]",
        chinese: "n.贸易 vt.用…进行交换",
    },
    {
        english: "tradition",
        phoneticSymbol: "[trəˈdɪʃ(ə)n]",
        chinese: "n. 传统，风俗",
    },
    {
        english: "traditional",
        phoneticSymbol: "[trəˈdɪʃ(ə)n]",
        chinese: "a. 传统的，风俗的",
    },
    {
        english: "traffic",
        phoneticSymbol: "[ˈtræfɪk]",
        chinese: "n. 交通，来往车辆",
    },
    {
        english: "train",
        phoneticSymbol: "[treɪn]",
        chinese: "n. 火车 v. 培训,训练",
    },
    {
        english: "training",
        phoneticSymbol: "[ˈtreɪnɪŋ]",
        chinese: "n. 培训",
    },
    {
        english: "tram",
        phoneticSymbol: "[træm]",
        chinese: "n. 有轨电车",
    },
    {
        english: "transform",
        phoneticSymbol: "[trænsˈfɔːm]",
        chinese: "v.使改变形态,使改观",
    },
    {
        english: "translate",
        phoneticSymbol: "[trænsˈleɪt]",
        chinese: "vt. 翻译",
    },
    {
        english: "translation",
        phoneticSymbol: "[trænsˈleɪʃ(ə)n]",
        chinese: "n. 翻译；译文",
    },
    {
        english: "translator",
        phoneticSymbol: "[træns'leitə]",
        chinese: "n. 翻译家，译者",
    },
    {
        english: "transparent",
        phoneticSymbol: "[ trænsˈpærənt]",
        chinese: "adj. 透明的;清澈的;易识破的;显而易见的",
    },
    {
        english: "transport",
        phoneticSymbol: "[trænsˈpɔːt]",
        chinese: "n.& vt.运输",
    },
    {
        english: "trap",
        phoneticSymbol: "[træp]",
        chinese: "n. 陷阱 vt. 使陷入困境",
    },
    {
        english: "travel",
        phoneticSymbol: "[ˈtræv(ə)l]",
        chinese: "n.& vi.旅行",
    },
    {
        english: "traveller(Am. traveler)",
        phoneticSymbol: "[ˈtrævələ(r)]",
        chinese: "n. 旅行者",
    },
    {
        english: "treasure",
        phoneticSymbol: "[ˈtreʒə(r)]",
        chinese: "n. 金银财宝, 财富",
    },
    {
        english: "treat",
        phoneticSymbol: "[triːt]",
        chinese: "vt. 对待，看待",
    },
    {
        english: "treatment",
        phoneticSymbol: "[ˈtriːtmənt]",
        chinese: "n. 治疗,疗法",
    },
    {
        english: "tree",
        phoneticSymbol: "[triː]",
        chinese: "n. 树",
    },
    {
        english: "tremble",
        phoneticSymbol: "[ˈtremb(ə)l]",
        chinese: "v. 颤抖",
    },
    {
        english: "trend",
        phoneticSymbol: "[trend]",
        chinese: "n. 趋势，倾向，动态",
    },
    {
        english: "trial",
        phoneticSymbol: "[ˈtraɪəl]",
        chinese: "n. 审判；试验；试用",
    },
    {
        english: "triangle",
        phoneticSymbol: "[ˈtraɪæŋɡ(ə)l]",
        chinese: "n.& adj.三角形;三角形的",
    },
    {
        english: "trick",
        phoneticSymbol: "[trɪk]",
        chinese: "n. 诡计，把戏",
    },
    {
        english: "trip",
        phoneticSymbol: "[trɪp]",
        chinese: "n. 旅行，旅程",
    },
    {
        english: "trolleybus",
        phoneticSymbol: "[ˈtrɔlɪ- bʌs]",
        chinese: "n. 无轨电车",
    },
    {
        english: "troop",
        phoneticSymbol: "[truːp]",
        chinese: "n. 部队 vi. 成群结队地走",
    },
    {
        english: "trouble",
        phoneticSymbol: "[ˈtrʌb(ə)l]",
        chinese: "vt. 使苦恼,使忧虑,使麻烦 n.问题,疾病,烦恼,麻烦",
    },
    {
        english: "troublesome",
        phoneticSymbol: "[ˈtrʌb(ə)lsəm]",
        chinese: "a.令人烦恼, 讨厌",
    },
    {
        english: "trousers",
        phoneticSymbol: "[ˈtraʊzəz]",
        chinese: "n. 裤子，长裤",
    },
    {
        english: "truck",
        phoneticSymbol: "[trʌk]",
        chinese: "n. 卡车, 运货车；车皮 v. 装车；用货车运",
    },
    {
        english: "true",
        phoneticSymbol: "[truː]",
        chinese: "a. 真的，真实的；忠诚的",
    },
    {
        english: "truly",
        phoneticSymbol: "[ˈtruːlɪ]",
        chinese: "ad. 真正地，真实地",
    },
    {
        english: "trunk",
        phoneticSymbol: "[trʌŋk]",
        chinese: "n. 树干；大箱子",
    },
    {
        english: "trust",
        phoneticSymbol: "[trʌst]",
        chinese: "vt. 相信，信任，信赖",
    },
    {
        english: "truth",
        phoneticSymbol: "[truːθ]",
        chinese: "n. 真理,事实,真相,实际",
    },
    {
        english: "try",
        phoneticSymbol: "[truːθ]",
        chinese: "v. 试，试图，努力",
    },
    {
        english: "T-shirt",
        phoneticSymbol: "[tiː- ʃɜːt]",
        chinese: "n. T恤衫",
    },
    {
        english: "tube",
        phoneticSymbol: "[tjuːb; (US) tuːb]",
        chinese: "n. 管，管状物",
    },
    {
        english: "tune",
        phoneticSymbol: "[tjuːn; (US) tuːn]",
        chinese: "n. 曲调，曲子",
    },
    {
        english: "turkey",
        phoneticSymbol: "[ˈtɜːkɪ]",
        chinese: "n. 火鸡",
    },
    {
        english: "turn",
        phoneticSymbol: "[tɜːn]",
        chinese: "v. 旋转，翻转，转变，转弯 n. 轮流，（轮流的）顺序",
    },
    {
        english: "turning n",
        phoneticSymbol: "[ˈtɜːnɪŋ]",
        chinese: ". 拐弯处，拐角处",
    },
    {
        english: "tutor",
        phoneticSymbol: "[ˈtjuːtə(r)]",
        chinese: "n. 家庭教师，私人教师，导师",
    },
    {
        english: "TV(缩) = television",
        phoneticSymbol: "[‚tiː'viː]",
        chinese: "n. 电视机",
    },
    {
        english: "twice",
        phoneticSymbol: "[twaɪs]",
        chinese: "ad. 两次；两倍",
    },
    {
        english: "twin",
        phoneticSymbol: "[twɪst]",
        chinese: "n. 双胞胎之一",
    },
    {
        english: "twist",
        phoneticSymbol: "[twɪst]",
        chinese: "v./ n. 使弯曲，转动",
    },
    {
        english: "type",
        phoneticSymbol: "[ˈtaɪp]",
        chinese: "vt. 打字",
    },
    {
        english: "typewriter",
        phoneticSymbol: "[ˈtaɪpraɪtə(r)]",
        chinese: "n. 打字机",
    },
    {
        english: "typical",
        phoneticSymbol: "[ˈtɪpɪk(ə)l]",
        chinese: "a. 典型的，有代表性的，特有的",
    },
    {
        english: "typhoon",
        phoneticSymbol: "[taɪˈfuːn]",
        chinese: "n. 台风",
    },
    {
        english: "typist",
        phoneticSymbol: "[ˈtaɪpɪst]",
        chinese: "n. 打字员",
    },
    {
        english: "tyre (美tire)",
        phoneticSymbol: "[taɪə]",
        chinese: "n. 轮胎",
    },
    {
        english: "ugly",
        phoneticSymbol: "[ˈʌɡlɪ]",
        chinese: "a. 丑陋的；难看的",
    },
    {
        english: "umbrella",
        phoneticSymbol: "[ʌmˈbrelə]",
        chinese: "n. 雨伞",
    },
    {
        english: "unable",
        phoneticSymbol: "[juː ˈən]",
        chinese: "a.不能的，不能胜任的",
    },
    {
        english: "unbearable",
        phoneticSymbol: "[ʌnˈbeərəb(ə)l]",
        chinese: "a.难耐得,无法接受的",
    },
    {
        english: "unbelievable",
        phoneticSymbol: "[ʌnbɪˈliːvəb(ə)l]",
        chinese: "a.难以置信的",
    },
    {
        english: "uncertain",
        phoneticSymbol: "[ˈsɜːt(ə)n]",
        chinese: "a.不确定的",
    },
    {
        english: "uncle",
        phoneticSymbol: "[ˈʌŋk(ə)l]",
        chinese: "n. 叔,伯,舅,姑夫,姨父",
    },
    {
        english: "uncomfortable",
        phoneticSymbol: "[ʌnˈkʌmftəb(ə)l]",
        chinese: "a. 令人不舒服的",
    },
    {
        english: "unconditional",
        phoneticSymbol: "[ʌnkənˈdɪʃən(ə)l]",
        chinese: "a.无条件，绝对的",
    },
    {
        english: "unconscious",
        phoneticSymbol: "[ʌnˈkɔnʃəs]",
        chinese: "a.昏迷,不省人事的",
    },
    {
        english: "under",
        phoneticSymbol: "[ˈʌndə(r)]",
        chinese: "ad.& prep.在…下面，向…下面",
    },
    {
        english: "underground",
        phoneticSymbol: "[ʌndəˈɡraʊnd]",
        chinese: "a.地下的 n. 地铁",
    },
    {
        english: "underline",
        phoneticSymbol: "[ʌndəˈlaɪn]",
        chinese: "v. 在…下划线",
    },
    {
        english: "understand (understood, understood)",
        phoneticSymbol: "[ʌndəˈstænd]",
        chinese: "v. 懂得;明白;理解",
    },
    {
        english: "undertake (undertook, undertaken)",
        phoneticSymbol: "[ʌndəˈteɪk]",
        chinese: "v. 承担，从事，负责",
    },
    {
        english: "underwear",
        phoneticSymbol: "[ˈʌndəweə(r)]",
        chinese: "n. 内衣",
    },
    {
        english: "unemployment",
        phoneticSymbol: "[ʌnɪmˈplɔɪmənt]",
        chinese: "n.失业,失业状态",
    },
    {
        english: "unfair",
        phoneticSymbol: "[ʌnˈfeə(r)]",
        chinese: "a. 不公平的，不公正的",
    },
    {
        english: "unfit",
        phoneticSymbol: "[ʌnˈfɪt]",
        chinese: "a. 不合宜的，不相宜的",
    },
    {
        english: "unfortunate",
        phoneticSymbol: "[ʌnˈfəʊld]",
        chinese: "a. 不幸的",
    },
    {
        english: "uniform",
        phoneticSymbol: "[ˈjuːnɪfɔːm]",
        chinese: "n. 制服",
    },
    {
        english: "unimportant",
        phoneticSymbol: "[ʌnɪmˈpɔːt(e)nt]",
        chinese: "a.不重要的,无意义",
    },
    {
        english: "union",
        phoneticSymbol: "[ˈjuːnjən]",
        chinese: "n. 联合,联盟；工会",
    },
    {
        english: "unique",
        phoneticSymbol: "[jʊˈniːk]",
        chinese: "a. 惟一的,独一无二的",
    },
    {
        english: "unit",
        phoneticSymbol: "[ˈjuːnɪt]",
        chinese: "n. 单元，单位",
    },
    {
        english: "unite",
        phoneticSymbol: "[jʊˈnaɪt]",
        chinese: "v. 联合，团结",
    },
    {
        english: "universal",
        phoneticSymbol: "[juːnɪˈvɜːs(ə)l]",
        chinese: "a. 普遍的，全体的",
    },
    {
        english: "universe",
        phoneticSymbol: "[ˈjuːnɪvɜːs]",
        chinese: "n. 宇宙",
    },
    {
        english: "university",
        phoneticSymbol: "[juːnɪˈvɜːsɪtɪ]",
        chinese: "n. 大学",
    },
    {
        english: "unknown",
        phoneticSymbol: "[juːnɪˈvɜːsɪtɪ]",
        chinese: "a. 不知道的",
    },
    {
        english: "unless",
        phoneticSymbol: "[ʌnˈles]",
        chinese: "conj. 如果不，除非",
    },
    {
        english: "unlike",
        phoneticSymbol: "[ʌnˈlaɪk]",
        chinese: "prep. 不像，和…不同",
    },
    {
        english: "unrest",
        phoneticSymbol: "[ʌnˈrest]",
        chinese: "n. 不安；骚动",
    },
    {
        english: "until",
        phoneticSymbol: "[ʌnˈtɪl]",
        chinese: "prep.& conj.直到…为止",
    },
    {
        english: "untrue",
        phoneticSymbol: "[ʌnˈtruː]",
        chinese: "a. 不真实的，假的",
    },
    {
        english: "unusual",
        phoneticSymbol: "[ʌnˈjuːʒʊəl]",
        chinese: "a. 不平常的，异常的",
    },
    {
        english: "unwilling",
        phoneticSymbol: "[ʌnˈwɪlɪŋ]",
        chinese: "a. 不愿意的，勉强的",
    },
    {
        english: "up",
        phoneticSymbol: "[ʌp]",
        chinese:
            "ad. 向上；在上方；起来；在…以上 a. 上面的，向上的，上行的 n. 上升；上坡；上行；繁荣 v. 举起；拿起；提高 prep. 向(高处)；向(在)……上(面)游",
    },
    {
        english: "update",
        phoneticSymbol: "[ˌʌpˈdeɪt]",
        chinese: "vt. 更新，使现代化;校正，修正",
    },
    {
        english: "upon",
        phoneticSymbol: "[əˈpɔn]",
        chinese: "prep. 在……上面",
    },
    {
        english: "upper",
        phoneticSymbol: "[ˈʌpə(r)]",
        chinese: "a. 较高的，较上的",
    },
    {
        english: "upset",
        phoneticSymbol: "[ʌpˈset]",
        chinese: "a. 心烦的，苦恼的",
    },
    {
        english: "upstairs",
        phoneticSymbol: "[ʌpˈsteəz]",
        chinese: "ad. 在楼上，到楼上",
    },
    {
        english: "upward(s)",
        phoneticSymbol: "[ˈʌpwəd]",
        chinese: "ad. 向上；往上",
    },
    {
        english: "urban",
        phoneticSymbol: "[ˈɜːbən]",
        chinese: "a. 城市的，都市的",
    },
    {
        english: "urge",
        phoneticSymbol: "[ɜːdʒ]",
        chinese: "v. 敦促，催促，力劝",
    },
    {
        english: "urgent",
        phoneticSymbol: "[ˈɜːdʒənt]",
        chinese: "a. 紧急的，紧迫的",
    },
    {
        english: "us",
        phoneticSymbol: "[əs]",
        chinese: "pron. 我们",
    },
    {
        english: "use",
        phoneticSymbol: "[juːz]",
        chinese: "n.& vt.利用,使用,应用",
    },
    {
        english: "useful",
        phoneticSymbol: "[ˈjuːsfʊl]",
        chinese: "a. 有用的，有益的",
    },
    {
        english: "useless",
        phoneticSymbol: "[ˈjuːslɪs]",
        chinese: "a. 无用的",
    },
    {
        english: "user",
        phoneticSymbol: "[ˈjuːzə]",
        chinese: "n. 使用者；用户",
    },
    {
        english: "usual",
        phoneticSymbol: "[ˈjuːʒʊəl]",
        chinese: "a. 通常的，平常的",
    },
    {
        english: "vacation",
        phoneticSymbol: "[vəˈkeɪʃ(ə)n]",
        chinese: "n. 假期，休假",
    },
    {
        english: "vacant",
        phoneticSymbol: "[ˈveɪkənt]",
        chinese: "a. 空缺的，未被占用的",
    },
    {
        english: "vague",
        phoneticSymbol: "[veɪɡ]",
        chinese: "a. 含糊的，紧迫的",
    },
    {
        english: "vain",
        phoneticSymbol: "[veɪn]",
        chinese: "n. 自负的，自视过高的，徒劳的，无效的",
    },
    {
        english: "valid",
        phoneticSymbol: "[ˈvælɪd]",
        chinese: "a.有效的,合理的,有根据的",
    },
    {
        english: "valley",
        phoneticSymbol: "[ˈvælɪ]",
        chinese: "n. 山谷, 溪谷",
    },
    {
        english: "valuable",
        phoneticSymbol: "[ˈvæljʊəb(ə)l]",
        chinese: "a. 值钱的，贵重的",
    },
    {
        english: "value",
        phoneticSymbol: "[ˈvæljuː]",
        chinese: "n. 价值，益处",
    },
    {
        english: "vanilla",
        phoneticSymbol: "[vəˈnɪlə]",
        chinese: "n. 香草",
    },
    {
        english: "variety",
        phoneticSymbol: "[vəˈraɪətɪ]",
        chinese: "n. 种种，种类",
    },
    {
        english: "various",
        phoneticSymbol: "[ˈveərɪəs]",
        chinese: "a. 各种各样的，不同的",
    },
    {
        english: "vase",
        phoneticSymbol: "[vɑːz; (US) veɪs]",
        chinese: "n. （花）瓶；瓶饰",
    },
    {
        english: "vast",
        phoneticSymbol: "[vɑːst; (US) væst]",
        chinese: "a. 巨大的，广阔的",
    },
    {
        english: "vegetable",
        phoneticSymbol: "[ˈvedʒɪtəb(ə)l]",
        chinese: "n. 蔬菜",
    },
    {
        english: "vehicle",
        phoneticSymbol: "[ˈviːɪk(ə)l; (US) ˈviːhɪkl]",
        chinese: "n. 交通工具，车辆",
    },
    {
        english: "version",
        phoneticSymbol: "[ˈvɜːʃ(ə)n; (US) ˈvərʒn]",
        chinese: "n. 变体，变种，改写本",
    },
    {
        english: "vertical",
        phoneticSymbol: "[ˈvɜːtɪk(ə)l]",
        chinese: "a. 垂直的，纵向的",
    },
    {
        english: "very",
        phoneticSymbol: "[ˈverɪ]",
        chinese: "vad. 很，非常",
    },
    {
        english: "vest",
        phoneticSymbol: "[vest]",
        chinese: "n. 背心，内衣",
    },
    {
        english: "via",
        phoneticSymbol: "[ˈvaɪə]",
        chinese: "prep. 经过（某地），通过",
    },
    {
        english: "vice",
        phoneticSymbol: "[vaɪs]",
        chinese: "n. 罪行，不道德行为",
    },
    {
        english: "victim",
        phoneticSymbol: "[ˈvɪktɪm]",
        chinese: "n. 受害者，牺牲品",
    },
    {
        english: "victory",
        phoneticSymbol: "[ˈvɪktərɪ]",
        chinese: "n. 胜利",
    },
    {
        english: "video",
        phoneticSymbol: "[ˈvɪdɪəʊ]",
        chinese: "n. 录像，视频",
    },
    {
        english: "videophone",
        phoneticSymbol: "['vidiəʊfəʊn]",
        chinese: "n. 可视电话",
    },
    {
        english: "view",
        phoneticSymbol: "[vjuː]",
        chinese: "n. 看法,见解;风景,景色",
    },
    {
        english: "village",
        phoneticSymbol: "[ˈvɪlɪdʒ]",
        chinese: "n. 村庄，乡村",
    },
    {
        english: "villager",
        phoneticSymbol: "['vilidʒə]",
        chinese: "n. 村民",
    },
    {
        english: "vinegar",
        phoneticSymbol: "['vilidʒə]",
        chinese: "n. 醋",
    },
    {
        english: "violate",
        phoneticSymbol: "[ˈvaɪəleɪt]",
        chinese: "v. 违反（法律、协议等），侵犯",
    },
    {
        english: "violence",
        phoneticSymbol: "[ˈvaɪələns]",
        chinese: "n. 暴力行为",
    },
    {
        english: "violent",
        phoneticSymbol: "[ˈvaɪələnt]",
        chinese: "a. 暴力的",
    },
    {
        english: "violin",
        phoneticSymbol: "[vaɪəˈlɪn]",
        chinese: "n. 小提琴",
    },
    {
        english: "violinist",
        phoneticSymbol: "[vaɪəˈlɪnɪst]",
        chinese: "n. 提琴家，提琴手",
    },
    {
        english: "virtue",
        phoneticSymbol: "[ˈvɜːtjuː]",
        chinese: "n. 美德,正直的品行,德行",
    },
    {
        english: "virus",
        phoneticSymbol: "[ˈvaɪərəs]",
        chinese: "n.病毒",
    },
    {
        english: "visa",
        phoneticSymbol: "[ˈviːzə]",
        chinese: "n. 签证，背签",
    },
    {
        english: "visit",
        phoneticSymbol: "[ˈviːzə]",
        chinese: "n.& vt. 参观，访问，拜访",
    },
    {
        english: "visitor",
        phoneticSymbol: "[ˈvɪzɪtə(r)]",
        chinese: "n. 访问者，参观者",
    },
    {
        english: "visual",
        phoneticSymbol: "[ˈvɪʒjʊəl]",
        chinese: "a. 视力的，视觉的",
    },
    {
        english: "vital",
        phoneticSymbol: "[ˈvaɪt(ə)l]",
        chinese: "a. 必不可少的，对…极重要的",
    },
    {
        english: "vivid",
        phoneticSymbol: "[ˈvɪvɪd]",
        chinese: "a. 生动，逼真的，鲜明的",
    },
    {
        english: "vocabulary",
        phoneticSymbol: "[vəˈkæbjʊlərɪ]",
        chinese: "n. 词汇, 词汇表",
    },
    {
        english: "voice",
        phoneticSymbol: "[vɔɪs]",
        chinese: "n. 说话声; 语态",
    },
    {
        english: "volcano",
        phoneticSymbol: "[vɔlˈkeɪnəʊ]",
        chinese: "n. 火山",
    },
    {
        english: "volleyball",
        phoneticSymbol: "[vɔlˈkeɪnəʊ]",
        chinese: "n. 排球",
    },
    {
        english: "voluntary",
        phoneticSymbol: "[ˈvɔləntərɪ]",
        chinese: "a. 自愿的，主动的",
    },
    {
        english: "volunteer",
        phoneticSymbol: "[vɔlənˈtɪə(r)]",
        chinese: "n./ v. 义工，自愿者，无偿做",
    },
    {
        english: "vote",
        phoneticSymbol: "[vəʊt]",
        chinese: "vi. 选举，投票",
    },
    {
        english: "voyage",
        phoneticSymbol: "[ˈvɔɪɪdʒ]",
        chinese: "n. 航行，旅行",
    },
    {
        english: "wag",
        phoneticSymbol: "[ˈvɔɪɪdʒ]",
        chinese: "v. 摇动；摆动",
    },
    {
        english: "wage",
        phoneticSymbol: "[weɪdʒ]",
        chinese: "n. 工资，工钱，报酬",
    },
    {
        english: "waist",
        phoneticSymbol: "[weɪst]",
        chinese: "n. 腰，腰部，腰围",
    },
    {
        english: "wait",
        phoneticSymbol: "[weɪt]",
        chinese: "vi. 等，等候",
    },
    {
        english: "waiter",
        phoneticSymbol: "[ˈweɪtə(r)]",
        chinese: "n. （餐厅）男服务员",
    },
    {
        english: "waiting -room",
        phoneticSymbol: "[ˈweɪtɪŋ- rʊm]",
        chinese: "n.候诊室,候车室",
    },
    {
        english: "wake (woke, woken)",
        phoneticSymbol: "[weɪk]",
        chinese: "v.醒来,叫醒",
    },
    {
        english: "walk",
        phoneticSymbol: "[wɔːk]",
        chinese: "n.& v. 步行；散步",
    },
    {
        english: "wall",
        phoneticSymbol: "[wɔːl]",
        chinese: "n. 墙",
    },
    {
        english: "wallet",
        phoneticSymbol: "[ˈwɔlɪt]",
        chinese: "n. (放钱,证件等的)皮夹",
    },
    {
        english: "walnut",
        phoneticSymbol: "[ˈwɔːlnʌt]",
        chinese: "n. 核桃，胡桃",
    },
    {
        english: "wander",
        phoneticSymbol: "[ˈwɔndə(r)]",
        chinese: "vi.漫游,游荡,漫步,流浪",
    },
    {
        english: "want",
        phoneticSymbol: "[wɔnt; (US) wɔːnt]",
        chinese: "vt. 想,想要,需要,必要",
    },
    {
        english: "war",
        phoneticSymbol: "[wɔː(r)]",
        chinese: "n. 战争",
    },
    {
        english: "ward",
        phoneticSymbol: "[wɔːd]",
        chinese: "n. 保卫,看护,病房,收容所",
    },
    {
        english: "warehouse",
        phoneticSymbol: "[ˈweəhaʊs]",
        chinese: "n. 仓库，货栈",
    },
    {
        english: "warm",
        phoneticSymbol: "[wɔːm]",
        chinese: "a. 暖和的,温暖的;热情的",
    },
    {
        english: "warmth",
        phoneticSymbol: "[wɔːmθ]",
        chinese: "n. 暖和，温暖",
    },
    {
        english: "warn",
        phoneticSymbol: "[ wɔ:n]",
        chinese: "vt. 警告，告诫;通知;预告",
    },
    {
        english: "wash",
        phoneticSymbol: "[ˈwɔːnɪŋ]",
        chinese: "n.洗(涤)冲洗,洗剂,泼溅,洗的衣服 v.洗(涤),冲洗,流过,弄湿",
    },
    {
        english: "washroom",
        phoneticSymbol: "[ˈwɔʃrʊm, ˈwɔʃruːm]",
        chinese: "n. 盥洗室",
    },
    {
        english: "waste",
        phoneticSymbol: "[weɪst]",
        chinese: "n.& vt. 浪费",
    },
    {
        english: "watch",
        phoneticSymbol: "[wɔtʃ]",
        chinese: "vt. 观看，注视；当心，注意 n. 手表，表",
    },
    {
        english: "water",
        phoneticSymbol: "[ˈwɔːtə(r)]",
        chinese: "n. 水v. 浇水",
    },
    {
        english: "watermelon",
        phoneticSymbol: "[ˈwɔːtəmelən]",
        chinese: "n. 西瓜",
    },
    {
        english: "wave",
        phoneticSymbol: "[weɪv]",
        chinese: "n. （热、光、声等的）波，波浪 v. 挥手，挥动，波动",
    },
    {
        english: "wax",
        phoneticSymbol: "[wæks]",
        chinese: "n. 蜡",
    },
    {
        english: "way",
        phoneticSymbol: "[weɪ]",
        chinese: "n. 路，路线；方式，手段",
    },
    {
        english: "we",
        phoneticSymbol: "[wiː, wɪ]",
        chinese: "pron. 我们",
    },
    {
        english: "web",
        phoneticSymbol: "[web]",
        chinese: "n. 网，网状物",
    },
    {
        english: "website",
        phoneticSymbol: "[websaɪt]",
        chinese: "n. 网络",
    },
    {
        english: "weak",
        phoneticSymbol: "[wiːk]",
        chinese: "a. 差的，弱的，淡的",
    },
    {
        english: "weakness",
        phoneticSymbol: "[ˈwiːknɪs]",
        chinese: "n. 软弱",
    },
    {
        english: "wealth",
        phoneticSymbol: "[welθ]",
        chinese: "n. 财产，财富",
    },
    {
        english: "wealthy",
        phoneticSymbol: "[ˈwelθɪ]",
        chinese: "a. 富的",
    },
    {
        english: "wear (wore, worn)",
        phoneticSymbol: "[weə(r)]",
        chinese: "v. 穿，戴",
    },
    {
        english: "weather",
        phoneticSymbol: "[weə(r)]",
        chinese: "n. 天气",
    },
    {
        english: "wedding",
        phoneticSymbol: "[ˈwedɪŋ]",
        chinese: "n. 婚礼,结婚",
    },
    {
        english: "weed",
        phoneticSymbol: "[wiːd]",
        chinese: "n. 杂草，野草",
    },
    {
        english: "week",
        phoneticSymbol: "[wiːk]",
        chinese: "n. 星期，周",
    },
    {
        english: "weekday",
        phoneticSymbol: "[ˈwiːkdeɪ]",
        chinese: "n. 平日",
    },
    {
        english: "weekend",
        phoneticSymbol: "[wiːkˈend, ˈwiːkend]",
        chinese: "n. 周末",
    },
    {
        english: "weekly",
        phoneticSymbol: "[ˈwiːklɪ]",
        chinese: "a. 每周的",
    },
    {
        english: "weep",
        phoneticSymbol: "[wiːp]",
        chinese: "v. 哭泣，流泪",
    },
    {
        english: "weigh",
        phoneticSymbol: "[weɪ]",
        chinese: "vt. 称…的重量，重（若干）",
    },
    {
        english: "weight",
        phoneticSymbol: "[weɪt]",
        chinese: "n. 重，重量",
    },
    {
        english: "welcome",
        phoneticSymbol: "[ˈwelkəm]",
        chinese: "int.n. & v.欢迎 a. 受欢迎的",
    },
    {
        english: "welfare",
        phoneticSymbol: "[ˈwelfeə(r)]",
        chinese: "n. 幸福，福利",
    },
    {
        english: "well",
        phoneticSymbol: "[wel]",
        chinese:
            "(better, best) ad. 好,令人满意地,完全地 a.好的,,健康的int. 表示惊讶同意或犹豫等,亦用于接话语;好吧,那么,哎呀 n. 井",
    },
    {
        english: "west",
        phoneticSymbol: "[west]",
        chinese: "a. (在)西；向西,从西来的 ad. 在西方,向西方 n.西部；西方",
    },
    {
        english: "western",
        phoneticSymbol: "[ˈwest(ə)n]",
        chinese: "a. 西方的，西部的",
    },
    {
        english: "westwards",
        phoneticSymbol: "[ˈwestwədz]",
        chinese: "ad. 向西",
    },
    {
        english: "wet",
        phoneticSymbol: "[wet]",
        chinese: "a. 湿的,潮的,多雨的",
    },
    {
        english: "whale",
        phoneticSymbol: "[weɪl; (US) hweɪl]",
        chinese: "n. 鲸",
    },
    {
        english: "what",
        phoneticSymbol: "[wɔt; (US) hwɑt]",
        chinese: "pron. 什么,怎么样 a. 多么，何等；什么",
    },
    {
        english: "whatever",
        phoneticSymbol: "[wɔtˈevə(r)]",
        chinese: "conj. & pron.无论什么，不管什么",
    },
    {
        english: "wheat",
        phoneticSymbol: "[wiːt; (US) hwiːt]",
        chinese: "n. 小麦",
    },
    {
        english: "wheel",
        phoneticSymbol: "[wiːl; (US) hwiːl]",
        chinese: "n. 轮，机轮",
    },
    {
        english: "when",
        phoneticSymbol: "[wen]",
        chinese: "conj. 当…的时候 ad. 什么时候，何时",
    },
    {
        english: "whenever",
        phoneticSymbol: "[wenˈevə(r)]",
        chinese: "conj. 每当，无论何时",
    },
    {
        english: "where",
        phoneticSymbol: "[weə(r); (US) hweər]",
        chinese: "ad. 在哪里；往哪里",
    },
    {
        english: "wherever",
        phoneticSymbol: "[weərˈevə(r)]",
        chinese: "conj. 无论在哪里",
    },
    {
        english: "whether",
        phoneticSymbol: "[ˈweðə(r); (US) ˈhweðər]",
        chinese: "conj. 是否",
    },
    {
        english: "which",
        phoneticSymbol: "[wɪtʃ; (US) hwɪtʃ]",
        chinese:
            "pron. 那(哪)一个；那(哪)一些 a.这(哪)个；这(哪)些；无论哪个(些)",
    },
    {
        english: "whichever",
        phoneticSymbol: "[wɪtʃˈevə(r)]",
        chinese: "pron. 无论哪个;无论哪些",
    },
    {
        english: "while",
        phoneticSymbol: "[waɪl; (US) hwaɪl]",
        chinese: "conj.在…的时候,和…同时 n. 一会儿，一段时间",
    },
    {
        english: "whisper",
        phoneticSymbol: "[ˈwɪspə(r)]",
        chinese: "v. 低语，私下说",
    },
    {
        english: "whistle",
        phoneticSymbol: "[waɪt; (US) hwaɪt]",
        chinese: "n. 口哨，口哨声",
    },
    {
        english: "white",
        phoneticSymbol: "[waɪt; (US) hwaɪt]",
        chinese: "a. 白色的 n. 白色",
    },
    {
        english: "who",
        phoneticSymbol: "[huː]",
        chinese: "pron. 谁",
    },
    {
        english: "whole",
        phoneticSymbol: "[həʊl]",
        chinese: "a. 整个的",
    },
    {
        english: "whom",
        phoneticSymbol: "[huːm]",
        chinese: "pron. (who的宾格 )",
    },
    {
        english: "whose",
        phoneticSymbol: "[huːz]",
        chinese: "pron. 谁的",
    },
    {
        english: "why",
        phoneticSymbol: "[waɪ; (US) hwaɪ]",
        chinese: "ad./ int. 为什么, 你难道不知道（表示反驳、不耐烦等）",
    },
    {
        english: "wide",
        phoneticSymbol: "[weə(r); (US) hweər]",
        chinese: "a. 宽阔的",
    },
    {
        english: "widespread",
        phoneticSymbol: "[ˈwaɪdspred, -ˈspred]",
        chinese: "a.分布广的,普遍的",
    },
    {
        english: "wife",
        phoneticSymbol: "[waɪf]",
        chinese: "n. 妻子",
    },
    {
        english: "wild",
        phoneticSymbol: "[waɪld]",
        chinese: "a. 未开发的，荒凉的；野生的，野的",
    },
    {
        english: "wildlife",
        phoneticSymbol: "[ˈwaɪldlaɪf]",
        chinese: "n. 野生动物",
    },
    {
        english: "will",
        phoneticSymbol: "[wɪl]",
        chinese: "n. 意志, 遗嘱",
    },
    {
        english: "will (would)",
        phoneticSymbol: "[wɪl]",
        chinese: "modal v. 将,会(表示将来)；愿意，要",
    },
    {
        english: "willing",
        phoneticSymbol: "[ˈwɪlɪŋ]",
        chinese: "a. 乐意的； 愿意的",
    },
    {
        english: "win (won, won)",
        phoneticSymbol: "[wɪn]",
        chinese: "n. 获胜，赢得",
    },
    {
        english: "wind",
        phoneticSymbol: "[wɪnd]",
        chinese: "n. 风 ",
    },
    {
        english: "wind(wound,wound)",
        phoneticSymbol: "[wɪnd]",
        chinese: "vt. 缠，连带；蜿蜒，弯曲",
    },
    {
        english: "windbreaker",
        phoneticSymbol: "['wind,breikә]",
        chinese: "n.风衣,防风(皮)夹克",
    },
    {
        english: "window",
        phoneticSymbol: "[ˈwɪndəʊ]",
        chinese: "n. 窗户；计算机的窗",
    },
    {
        english: "windy",
        phoneticSymbol: "[ˈwɪndɪ]",
        chinese: "a. 有风的，多风的",
    },
    {
        english: "wine",
        phoneticSymbol: "[waɪn]",
        chinese: "n. 酒",
    },
    {
        english: "wing",
        phoneticSymbol: "[wɪŋ]",
        chinese: "n. 机翼，翅膀",
    },
    {
        english: "winner",
        phoneticSymbol: "[ˈwɪnə(r)]",
        chinese: "n. 获胜者",
    },
    {
        english: "winter",
        phoneticSymbol: "[ˈwɪntə(r)]",
        chinese: "n. 冬天，冬季",
    },
    {
        english: "wipe",
        phoneticSymbol: "[waɪp]",
        chinese: "v. 擦；擦净；擦干",
    },
    {
        english: "wire",
        phoneticSymbol: "[ˈwaɪə(r)]",
        chinese: "n. 电线",
    },
    {
        english: "wisdom",
        phoneticSymbol: "[ˈwɪzdəm]",
        chinese: "n. 智慧",
    },
    {
        english: "wise",
        phoneticSymbol: "[waɪz]",
        chinese: "a. 聪明,英明的,有见识的",
    },
    {
        english: "wish",
        phoneticSymbol: "[wɪʃ]",
        chinese: "n. 愿望，祝愿 vt. 希望，想要，祝愿",
    },
    {
        english: "with",
        phoneticSymbol: "[wɪʃ]",
        chinese: "prep.关于,带有,以,和,用,有",
    },
    {
        english: "withdraw",
        phoneticSymbol: "[wɪðˈdrɔː]",
        chinese: "v. 撤回，撤离",
    },
    {
        english: "within",
        phoneticSymbol: "[wɪˈðɪn]",
        chinese: "prep. 在……里面",
    },
    {
        english: "without",
        phoneticSymbol: "[wɪˈðaʊt]",
        chinese: "prep. 没有",
    },
    {
        english: "witness",
        phoneticSymbol: "[ˈwɪtnɪs]",
        chinese: "v./ n. 目击者，见证人",
    },
    {
        english: "wolf（复wolves）",
        phoneticSymbol: "[wʊlf]",
        chinese: "n. 狼",
    },
    {
        english: "woman ( 复women)",
        phoneticSymbol: "[ˈwʊmən]",
        chinese: "n.妇女女人",
    },
    {
        english: "wonder",
        phoneticSymbol: "[ˈwʌndə(r)]",
        chinese: "v. 对…疑惑，感到惊奇,想知道 n. 惊讶,惊叹;奇迹",
    },
    {
        english: "wonderful",
        phoneticSymbol: "[ˈwʌndəfʊl]",
        chinese: "a. 美妙的，精彩的；了不起的；太好了",
    },
    {
        english: "wood",
        phoneticSymbol: "[ˈwʌndəfʊl]",
        chinese: "n.木头,木材,(复)树木,森林",
    },
    {
        english: "wool",
        phoneticSymbol: "[wʊl]",
        chinese: "n. 羊毛，羊绒",
    },
    {
        english: "woollen",
        phoneticSymbol: "['wulin]",
        chinese: "a. 羊毛的，羊毛制的",
    },
    {
        english: "word",
        phoneticSymbol: "[wɜːd]",
        chinese: "n. 词，单词；话",
    },
    {
        english: "work",
        phoneticSymbol: "[wɜːk]",
        chinese: "n. 工作,劳动,事情 vi. 工作;(机器、器官等)运转,活动",
    },
    {
        english: "worker",
        phoneticSymbol: "[ˈwɜːkə(r)]",
        chinese: "n. 工人；工作者",
    },
    {
        english: "world",
        phoneticSymbol: "[wɜːld]",
        chinese: "n. 世界",
    },
    {
        english: "worldwide",
        phoneticSymbol: "[ˈwɜːldwaɪd, -ˈwaɪd]",
        chinese: "a. 遍及全球的，世界范围的",
    },
    {
        english: "worm",
        phoneticSymbol: "[wɜːm]",
        chinese: "n. 软体虫,蠕虫(尤指蚯蚓)",
    },
    {
        english: "worn",
        phoneticSymbol: "[wɜrn /wɜːm]",
        chinese: "a. 用坏,用旧的,疲惫的",
    },
    {
        english: "worried",
        phoneticSymbol: "['wɜrɪd /'wʌ-]",
        chinese: "a. 担心的，烦恼的",
    },
    {
        english: "worry",
        phoneticSymbol: "[ˈwʌrɪ]",
        chinese: "n.& v.烦恼,担忧,发怒,困扰",
    },
    {
        english: "worth",
        phoneticSymbol: "[wɜːθ]",
        chinese: "a. 有…的价值,值得…的",
    },
    {
        english: "worthwhile",
        phoneticSymbol: "[wɜːθˈwaɪl]",
        chinese: "a. 值得做的",
    },
    {
        english: "worthy",
        phoneticSymbol: "[wɜːθˈwaɪl]",
        chinese: "a. 值得的",
    },
    {
        english: "would",
        phoneticSymbol: "[wəd, wʊd]",
        chinese: "modal v.（will的过去时）将会，打算，想要，过去常常",
    },
    {
        english: "wound",
        phoneticSymbol: "[wuːnd]",
        chinese: "vt.伤,伤害 n.创伤,伤口",
    },
    {
        english: "wrestle",
        phoneticSymbol: "[ˈres(ə)l]",
        chinese: "v. 摔跤",
    },
    {
        english: "wrinkle",
        phoneticSymbol: "[ˈrɪŋk(ə)l]",
        chinese: "n. 皱纹",
    },
    {
        english: "wrist",
        phoneticSymbol: "[rɪst]",
        chinese: "n. 手腕，腕关节",
    },
    {
        english: "write",
        phoneticSymbol: "[raɪt]",
        chinese: "(wrote, written) v. 写，书写；写作，著述",
    },
    {
        english: "wrong",
        phoneticSymbol: "[rɔŋ; (US) rɔːŋ]",
        chinese: "a.错误,不正常,有毛病的",
    },
    {
        english: "X-ray",
        phoneticSymbol: "[eks-reɪ]",
        chinese: "n. X射线；X光",
    },
    {
        english: "yard",
        phoneticSymbol: "[jɑːd]",
        chinese: "n. 码；院子；场地",
    },
    {
        english: "yawn",
        phoneticSymbol: "[jɔːn]",
        chinese: "v. 打哈欠",
    },
    {
        english: "year",
        phoneticSymbol: "[jɪə(r), jəː(r)]",
        chinese: "n. 年",
    },
    {
        english: "yell",
        phoneticSymbol: "[jel]",
        chinese: "v. 叫喊，吼叫",
    },
    {
        english: "yellow",
        phoneticSymbol: "[ˈjeləʊ]",
        chinese: "a. 黄色的",
    },
    {
        english: "yes",
        phoneticSymbol: "[jes]",
        chinese: "ad. 是，好，同意",
    },
    {
        english: "yesterday",
        phoneticSymbol: "[ˈjestədeɪ]",
        chinese: "n.& ad. 昨天",
    },
    {
        english: "yet",
        phoneticSymbol: "[jet]",
        chinese: "ad. 尚，还，仍然",
    },
    {
        english: "yoghurt",
        phoneticSymbol: "['jɔgət,'jəʊ-]",
        chinese: "n. 酸奶",
    },
    {
        english: "you",
        phoneticSymbol: "[juː, jʊ]",
        chinese: "pron. 你；你们",
    },
    {
        english: "young",
        phoneticSymbol: "[jʌŋ]",
        chinese: "a. 年轻的",
    },
    {
        english: "your",
        phoneticSymbol: "[jʌŋ]",
        chinese: "pron. 你的；你们的",
    },
    {
        english: "yours",
        phoneticSymbol: "[jɔːz, jʊəz]",
        chinese: "pron. 你的；你们的",
    },
    {
        english: "yourself",
        phoneticSymbol: "[jɔːˈself; (US) jʊərˈself]",
        chinese: "pron. 你自己",
    },
    {
        english: "yourselves",
        phoneticSymbol: "[jɔːˈself; (US) jʊərˈself]",
        chinese: "pron. 你们自己",
    },
    {
        english: "youth",
        phoneticSymbol: "[juːθ]",
        chinese: "n. 青春；青年",
    },
    {
        english: "yummy",
        phoneticSymbol: "[ˈjʌmɪ]",
        chinese: "a. 很好吃的",
    },
    {
        english: "zebra",
        phoneticSymbol: "[ˈzebrə, ˈziːbrə]",
        chinese: "n. 斑马",
    },
    {
        english: "zero",
        phoneticSymbol: "[ˈzɪərəʊ]",
        chinese: "n. & num.零,零度,零点",
    },
    {
        english: "zip",
        phoneticSymbol: "[zɪp]",
        chinese: "v.& n.拉开(或扣上)……的拉链；拉链",
    },
    {
        english: "zipper",
        phoneticSymbol: "[ˈzɪpə(r)]",
        chinese: "n. 拉链",
    },
    {
        english: "zone",
        phoneticSymbol: "[zuː]",
        chinese: "n. 区域；范围",
    },
    {
        english: "zoo",
        phoneticSymbol: "[zuː]",
        chinese: "n. 动物园",
    },
    {
        english: "zoom",
        phoneticSymbol: "[zuːm]",
        chinese: "v. 快速移动，迅速前往，猛涨",
    },
    {
        english: "a bit (of)",
        chinese: "有一点，一会儿",
    },
    {
        english: "a few",
        chinese: "一些，少量",
    },
    {
        english: "a great deal",
        chinese: "大量，许多",
    },
    {
        english: "a good/great many",
        chinese: "大量，许多",
    },
    {
        english: "a kind of",
        chinese: "一种，一类",
    },
    {
        english: "a little",
        chinese: "一点，少许",
    },
    {
        english: "a lot of",
        chinese: "许多，大量",
    },
    {
        english: "a number of",
        chinese: "一些，许多",
    },
    {
        english: "a pair of",
        chinese: "一双，一副",
    },
    {
        english: "a piece of",
        chinese: "一块(张，根，片)",
    },
    {
        english: "above all",
        chinese: "首先，首要",
    },
    {
        english: "according to",
        chinese: "根据，按照",
    },
    {
        english: "add up to",
        chinese: "合计达……",
    },
    {
        english: "after all",
        chinese: "毕竟，终究",
    },
    {
        english: "after class",
        chinese: "课后",
    },
    {
        english: "again and again",
        chinese: "反复地，再三地",
    },
    {
        english: "agree to do sth.",
        chinese: "同意做某事",
    },
    {
        english: "agree with sb.",
        chinese: "同意某人的看法，与某人看法一致",
    },
    {
        english: "ahead of",
        chinese: "在……之前",
    },
    {
        english: "all in all",
        chinese: "总的来说，总计",
    },
    {
        english: "all kinds of",
        chinese: "各种各样的",
    },
    {
        english: "all over",
        chinese: "到处，遍及，结束",
    },
    {
        english: "all right",
        chinese: "行,好吧，（病）好了",
    },
    {
        english: "all the best",
        chinese: "一切顺利，万事如意",
    },
    {
        english: "answer for",
        chinese: "对……负责",
    },
    {
        english: "apart from",
        chinese: "除去，除了",
    },
    {
        english: "arrive at (in) a place",
        chinese: "到达某地",
    },
    {
        english: "as a matter of fact",
        chinese: "事实上，其实",
    },
    {
        english: "as a result",
        chinese: "（作为）结果",
    },
    {
        english: "as...as",
        chinese: "像，如同",
    },
    {
        english: "as soon as",
        chinese: "一……就……",
    },
    {
        english: "as far as",
        chinese: "（表示程度，范围）就……；尽……",
    },
    {
        english: "as if",
        chinese: "好像，仿佛",
    },
    {
        english: "as long as",
        chinese: "只要",
    },
    {
        english: "as though",
        chinese: "好像，仿佛",
    },
    {
        english: "as usual",
        chinese: "通常，平常地",
    },
    {
        english: "as well",
        chinese: "也，还有",
    },
    {
        english: "as well as",
        chinese: "除……之外（也）",
    },
    {
        english: "belong to",
        chinese: "属于",
    },
    {
        english: "be proud of",
        chinese: "骄傲，自豪",
    },
    {
        english: "be strict with",
        chinese: "对……严格要求",
    },
    {
        english: "both...and",
        chinese: "两个都，既…又…",
    },
    {
        english: "break away from",
        chinese: "脱离……",
    },
    {
        english: "break down",
        chinese: "损坏; (把化合物等) 分解，（汽车）抛锚",
    },
    {
        english: "break in",
        chinese: "闯入，强行进入，插嘴，打断",
    },
    {
        english: "break off",
        chinese: "打断; 折断",
    },
    {
        english: "break out",
        chinese: "（战争、火灾等）突然发生，爆发",
    },
    {
        english: "break up",
        chinese: "分解；分裂",
    },
    {
        english: "bring in",
        chinese: "引来，引进，吸收",
    },
    {
        english: "bring on",
        chinese: "引起，导致，使前进",
    },
    {
        english: "bring up",
        chinese: "教育，培养",
    },
    {
        english: "build up",
        chinese: "逐步建立",
    },
    {
        english: "by accident",
        chinese: "偶然",
    },
    {
        english: "by air ( bus, train, ship )",
        chinese: "乘飞机（公共汽车，火车，轮船）",
    },
    {
        english: "by and by",
        chinese: "不久以后，逐渐地",
    },
    {
        english: "by day",
        chinese: "日间，在白天",
    },
    {
        english: "by the way",
        chinese: "顺便说",
    },
    {
        english: "call for",
        chinese: "提倡，号召, 需要",
    },
    {
        english: "call in",
        chinese: "召来，召集",
    },
    {
        english: "call on",
        chinese: "拜访，访问",
    },
    {
        english: "call up",
        chinese: "号召，打电话",
    },
    {
        english: "care for",
        chinese: "喜欢；照顾（病人）",
    },
    {
        english: "carry off",
        chinese: "携走，夺走",
    },
    {
        english: "carry on",
        chinese: "继续下去; 继续开展",
    },
    {
        english: "carry out",
        chinese: "开展，执行",
    },
    {
        english: "catch up with",
        chinese: "赶上（或超过）",
    },
    {
        english: "change into",
        chinese: "转换成，把…变成",
    },
    {
        english: "check in",
        chinese: "报到，登记",
    },
    {
        english: "check out",
        chinese: "查明; 结账",
    },
    {
        english: "clear up",
        chinese: "整理，收拾, （天气）放晴",
    },
    {
        english: "come about",
        chinese: "发生，产生",
    },
    {
        english: "come across",
        chinese: "（偶然）遇见（或发现）",
    },
    {
        english: "come back",
        chinese: "回来，想起来",
    },
    {
        english: "come down",
        chinese: "落，下来",
    },
    {
        english: "come from",
        chinese: "出生（于），来自",
    },
    {
        english: "come in",
        chinese: "进入，进来",
    },
    {
        english: "come off",
        chinese: "从…离开，脱落",
    },
    {
        english: "come on",
        chinese: "来吧，赶快",
    },
    {
        english: "come out",
        chinese: "出来,(书)出版，发行",
    },
    {
        english: "come to",
        chinese: "共计，达到",
    },
    {
        english: "come true",
        chinese: "变为现实，成为事实",
    },
    {
        english: "come up",
        chinese: "上来，上升，抬头",
    },
    {
        english: "come up with",
        chinese: "追上，赶上；想出（主意）；找出（答案）",
    },
    {
        english: "compare to",
        chinese: "与……相比",
    },
    {
        english: "compare with",
        chinese: "与……相比",
    },
    {
        english: "congratulate...on",
        chinese: "祝贺……",
    },
    {
        english: "connect to",
        chinese: "连接，相连",
    },
    {
        english: "connect with",
        chinese: "与……相连",
    },
    {
        english: "cut down",
        chinese: "砍倒",
    },
    {
        english: "cut off",
        chinese: "切断",
    },
    {
        english: "cut up",
        chinese: "齐根割掉，切碎",
    },
    {
        english: "day and night",
        chinese: "日日夜夜",
    },
    {
        english: "do one's best",
        chinese: "尽最大的努力",
    },
    {
        english: "deal with",
        chinese: "处理，对付",
    },
    {
        english: "depend on (upon)",
        chinese: "依靠，相信，信赖",
    },
    {
        english: "die out",
        chinese: "消失，灭亡",
    },
    {
        english: "different from",
        chinese: "与……不同",
    },
    {
        english: "divide up",
        chinese: "分配",
    },
    {
        english: "divide...into...",
        chinese: "把……分成……",
    },
    {
        english: "do some cleaning (shopping)",
        chinese: "做扫除（买东西）",
    },
    {
        english: "dozens of",
        chinese: "几十",
    },
    {
        english: "drop in",
        chinese: "顺便走访（某人）",
    },
    {
        english: "due to",
        chinese: "由于，因为",
    },
    {
        english: "each other",
        chinese: "相互",
    },
    {
        english: "earn one's living",
        chinese: "谋生",
    },
    {
        english: "either...or",
        chinese: "或者……或者……",
    },
    {
        english: "enjoy oneself",
        chinese: "过得愉快",
    },
    {
        english: "even if",
        chinese: "即使，尽管",
    },
    {
        english: "even though",
        chinese: "即使，尽管",
    },
    {
        english: "ever since",
        chinese: "自那时起直到现在",
    },
    {
        english: "face to face",
        chinese: "面对面",
    },
    {
        english: "fall asleep",
        chinese: "入睡",
    },
    {
        english: "fall ill",
        chinese: "患病，病倒",
    },
    {
        english: "far away",
        chinese: "遥远的",
    },
    {
        english: "far from",
        chinese: "远离",
    },
    {
        english: "feel like doing",
        chinese: "想要…, 感觉要…",
    },
    {
        english: "figure out",
        chinese: "理解，想明白",
    },
    {
        english: "fill ... with",
        chinese: "用……填充",
    },
    {
        english: "fill in",
        chinese: "填充",
    },
    {
        english: "find out",
        chinese: "查明，发现，了解",
    },
    {
        english: "first of all",
        chinese: "首先",
    },
    {
        english: "for ever",
        chinese: "永远",
    },
    {
        english: "for example",
        chinese: "例如",
    },
    {
        english: "for good",
        chinese: "永远",
    },
    {
        english: "from now on",
        chinese: "从今以后，今后",
    },
    {
        english: "from then on",
        chinese: "从那时起",
    },
    {
        english: "from... to",
        chinese: "从……到……",
    },
    {
        english: "from time to time",
        chinese: "不时，偶尔",
    },
    {
        english: "get along with",
        chinese: "与……相处",
    },
    {
        english: "get away",
        chinese: "逃; 离",
    },
    {
        english: "get back",
        chinese: "返回; 回来; 回家",
    },
    {
        english: "get close (to)",
        chinese: "接近",
    },
    {
        english: "get down",
        chinese: "降下",
    },
    {
        english: "get down to",
        chinese: "开始认真（做某事）",
    },
    {
        english: "get in",
        chinese: "进入, 收获，达到",
    },
    {
        english: "get off",
        chinese: "脱下（衣服等）；下车",
    },
    {
        english: "get on",
        chinese: "上车；过活",
    },
    {
        english: "get on with sb.",
        chinese: "与……相处",
    },
    {
        english: "get through",
        chinese: "通过，拨通（电话）",
    },
    {
        english: "get together",
        chinese: "聚会，联欢",
    },
    {
        english: "get up",
        chinese: "起床",
    },
    {
        english: "give away",
        chinese: "分发",
    },
    {
        english: "give back",
        chinese: "归还；送回",
    },
    {
        english: "give in",
        chinese: "屈服，让步",
    },
    {
        english: "give out",
        chinese: "分发",
    },
    {
        english: "give up",
        chinese: "放?",
    },
    {
        english: "go ahead",
        chinese: "走在前面，领先；干吧，干下去",
    },
    {
        english: "go away",
        chinese: "走开，离去",
    },
    {
        english: "go by",
        chinese: "走过; 经过; 过去",
    },
    {
        english: "go fishing (shopping, skating)",
        chinese: "（去）钓鱼（买东西，滑冰）",
    },
    {
        english: "go for",
        chinese: "主张",
    },
    {
        english: "go for a walk",
        chinese: "散步",
    },
    {
        english: "go in for",
        chinese: "参加，喜欢",
    },
    {
        english: "go off",
        chinese: "走开",
    },
    {
        english: "go on",
        chinese: "继续",
    },
    {
        english: "go on doing...",
        chinese: "继续干某事，不停地干某事",
    },
    {
        english: "go on with",
        chinese: "继续",
    },
    {
        english: "go out",
        chinese: "出去, 熄灭",
    },
    {
        english: "go over",
        chinese: "仔细检查，复习",
    },
    {
        english: "go through",
        chinese: "浏览; 翻阅，通过",
    },
    {
        english: "grow up",
        chinese: "长大成人，成长",
    },
    {
        english: "had better (do)",
        chinese: "最好（做）",
    },
    {
        english: "hand in",
        chinese: "上交; 交纳",
    },
    {
        english: "hand out",
        chinese: "分发",
    },
    {
        english: "have a cold",
        chinese: "患感冒",
    },
    {
        english: "hang on",
        chinese: "（打电话时）不挂断，等待片刻",
    },
    {
        english: "hang up",
        chinese: "挂断电话",
    },
    {
        english: "have a gift for",
        chinese: "对……有天赋",
    },
    {
        english: "have a good time",
        chinese: "玩得高兴，过得愉快",
    },
    {
        english: "have classes",
        chinese: "上课",
    },
    {
        english: "have fun with",
        chinese: "玩得高兴",
    },
    {
        english: "have got to",
        chinese: "不得不；必须",
    },
    {
        english: "have to",
        chinese: "不得不；必须",
    },
    {
        english: "hear of",
        chinese: "听说，知道",
    },
    {
        english: "hear from",
        chinese: "收到……的来信",
    },
    {
        english: "help oneself to",
        chinese: "请随便吃点",
    },
    {
        english: "help sb. with sth.",
        chinese: "帮助某人做某事",
    },
    {
        english: "help...out",
        chinese: "帮助某人解决困难",
    },
    {
        english: "hold on",
        chinese: "等一等（别挂电话）",
    },
    {
        english: "hold one's breath",
        chinese: "不出气,屏住呼吸",
    },
    {
        english: "hold out",
        chinese: "伸出；坚持，维持",
    },
    {
        english: "hold up",
        chinese: "阻挡，使停顿",
    },
    {
        english: "hundreds of",
        chinese: "几百，成百上千",
    },
    {
        english: "hurry up",
        chinese: "赶快，快点",
    },
    {
        english: "in a hurry",
        chinese: "匆忙，很快地",
    },
    {
        english: "in all",
        chinese: "总之",
    },
    {
        english: "in a word",
        chinese: "简言之，总之",
    },
    {
        english: "in common",
        chinese: "共同，共有",
    },
    {
        english: "in debt",
        chinese: "欠债",
    },
    {
        english: "in danger",
        chinese: "处在危险状态",
    },
    {
        english: "in fact",
        chinese: "事实上，实际上",
    },
    {
        english: "in front of",
        chinese: "在……前面",
    },
    {
        english: "in need of",
        chinese: "需要，缺少",
    },
    {
        english: "in order",
        chinese: "按顺序",
    },
    {
        english: "in order that",
        chinese: "为了",
    },
    {
        english: "in order to",
        chinese: "为了",
    },
    {
        english: "in other words",
        chinese: "换句话说",
    },
    {
        english: "in peace",
        chinese: "安静，宁静",
    },
    {
        english: "in public",
        chinese: "当众；公开",
    },
    {
        english: "in surprise",
        chinese: "吃惊，惊讶",
    },
    {
        english: "in the end",
        chinese: "最后，终于",
    },
    {
        english: "in time",
        chinese: "及时，来得及",
    },
    {
        english: "instead of",
        chinese: "代替，而不是",
    },
    {
        english: "join in",
        chinese: "参加，加入",
    },
    {
        english: "join up",
        chinese: "联合起来，联结起来",
    },
    {
        english: "just now",
        chinese: "现在，刚才",
    },
    {
        english: "keep back",
        chinese: "留下",
    },
    {
        english: "keep doing sth.",
        chinese: "继续做某事",
    },
    {
        english: "keep off",
        chinese: "勿踏; 勿踩",
    },
    {
        english: "keep on",
        chinese: "继续（进行）",
    },
    {
        english: "keep one's word",
        chinese: "守信",
    },
    {
        english: "keep up",
        chinese: "保持; 维持; 继续",
    },
    {
        english: "knock at",
        chinese: "敲",
    },
    {
        english: "knock into sb.",
        chinese: "撞上",
    },
    {
        english: "laugh at",
        chinese: "嘲笑",
    },
    {
        english: "lead to",
        chinese: "导致，导向",
    },
    {
        english: "let in",
        chinese: "让……进来，放进",
    },
    {
        english: "let out",
        chinese: "放掉, 泄露",
    },
    {
        english: "live on",
        chinese: "以…为主食，靠…为生",
    },
    {
        english: "look after",
        chinese: "照顾",
    },
    {
        english: "look ahead",
        chinese: "向前看，展望未来",
    },
    {
        english: "look down upon",
        chinese: "看不起，轻视",
    },
    {
        english: "look for",
        chinese: "寻找",
    },
    {
        english: "look forward to",
        chinese: "盼望",
    },
    {
        english: "look into",
        chinese: "向…里面看去; 调查",
    },
    {
        english: "look out",
        chinese: "留神，当心",
    },
    {
        english: "look through",
        chinese: "看穿, 浏览",
    },
    {
        english: "look up",
        chinese: "查找",
    },
    {
        english: "lots of",
        chinese: "许多，大量",
    },
    {
        english: "make a face",
        chinese: "做鬼脸，做苦脸",
    },
    {
        english: "make friends with",
        chinese: "与……交朋友",
    },
    {
        english: "make up",
        chinese: "和解，化装",
    },
    {
        english: "make up of",
        chinese: "由……组成，构成",
    },
    {
        english: "make up one's mind",
        chinese: "下决心",
    },
    {
        english: "millions of",
        chinese: "成百万上千万，数以百万计",
    },
    {
        english: "more or less",
        chinese: "或多或少",
    },
    {
        english: "neither...nor",
        chinese: "既不……也不……",
    },
    {
        english: "next to",
        chinese: "紧接着，相邻，次于",
    },
    {
        english: "no doubt",
        chinese: "无疑地",
    },
    {
        english: "no longer",
        chinese: "不再",
    },
    {
        english: "not any more",
        chinese: "不再",
    },
    {
        english: "not at all",
        chinese: "一点也不，绝非",
    },
    {
        english: "not only ... but also",
        chinese: "不仅…而且…",
    },
    {
        english: "not so...as",
        chinese: "不像，不如",
    },
    {
        english: "not till/until",
        chinese: "直到……才",
    },
    {
        english: "now and then",
        chinese: "不时，偶尔",
    },
    {
        english: "now that",
        chinese: "既然",
    },
    {
        english: "of course",
        chinese: "当然",
    },
    {
        english: "on (the, an) average",
        chinese: "平均，按平均数计算",
    },
    {
        english: "on duty",
        chinese: "值日，值班",
    },
    {
        english: "on foot",
        chinese: "走路，步行",
    },
    {
        english: "on show",
        chinese: "展出，在上演（放映）",
    },
    {
        english: "on time",
        chinese: "准时",
    },
    {
        english: "on/over the radio",
        chinese: "通过收音机",
    },
    {
        english: "once again",
        chinese: "再一次",
    },
    {
        english: "once more",
        chinese: "再一次",
    },
    {
        english: "once upon a time",
        chinese: "从前，很久以前",
    },
    {
        english: "one after another",
        chinese: "一个接一个",
    },
    {
        english: "open up",
        chinese: "开启；开创; 开辟",
    },
    {
        english: "or else",
        chinese: "否则，要不然",
    },
    {
        english: "ought to",
        chinese: "应该",
    },
    {
        english: "out of breath",
        chinese: "上气不接下气",
    },
    {
        english: "out of order",
        chinese: "运转不正常，出毛病",
    },
    {
        english: "out of work",
        chinese: "失业",
    },
    {
        english: "over and over again",
        chinese: "反复，多次重复",
    },
    {
        english: "pass by",
        chinese: "经过",
    },
    {
        english: "pay attention to",
        chinese: "注意",
    },
    {
        english: "pay back",
        chinese: "偿还（借款等）",
    },
    {
        english: "pay for",
        chinese: "付款",
    },
    {
        english: "pay off",
        chinese: "偿清(欠款等)",
    },
    {
        english: "persuade sb. to do",
        chinese: "说服",
    },
    {
        english: "pick out",
        chinese: "选出",
    },
    {
        english: "pick up",
        chinese: "拾起，捡起, 接收；开车去接……",
    },
    {
        english: "point out",
        chinese: "指出",
    },
    {
        english: "point to",
        chinese: "指向",
    },
    {
        english: "prevent ... from",
        chinese: "妨碍,,防止,,预防",
    },
    {
        english: "put away",
        chinese: "储存",
    },
    {
        english: "put down",
        chinese: "记下",
    },
    {
        english: "put off",
        chinese: "推迟",
    },
    {
        english: "put on",
        chinese: "穿，戴上，上演",
    },
    {
        english: "put on a performance",
        chinese: "演出",
    },
    {
        english: "put on weight",
        chinese: "发福，增加体重",
    },
    {
        english: "put out",
        chinese: "扑灭，关熄",
    },
    {
        english: "put up",
        chinese: "挂起，举起, 贴（广告等）",
    },
    {
        english: "put up with",
        chinese: "忍受",
    },
    {
        english: "rather than",
        chinese: "而不，非",
    },
    {
        english: "refer to",
        chinese: "提到，涉及，有关",
    },
    {
        english: "regard... as",
        chinese: "把……看作",
    },
    {
        english: "ring back",
        chinese: "回电话",
    },
    {
        english: "ring off",
        chinese: "挂断电话，停止讲话",
    },
    {
        english: "ring up",
        chinese: "打电话给",
    },
    {
        english: "right away",
        chinese: "立即，马上",
    },
    {
        english: "right now",
        chinese: "立即，马上",
    },
    {
        english: "run away",
        chinese: "逃跑, 失控",
    },
    {
        english: "run out of",
        chinese: "用完",
    },
    {
        english: "save one's life",
        chinese: "挽救某人生命",
    },
    {
        english: "scores of",
        chinese: "许多，大量",
    },
    {
        english: "see...off",
        chinese: "为某人送行",
    },
    {
        english: "sell out",
        chinese: "卖完, 出卖",
    },
    {
        english: "send for",
        chinese: "派人去叫（请）",
    },
    {
        english: "send out",
        chinese: "发出，派遣",
    },
    {
        english: "send up",
        chinese: "发出, 射出",
    },
    {
        english: "sentence...to death",
        chinese: "判处死刑",
    },
    {
        english: "separate...from...",
        chinese: "分开",
    },
    {
        english: "set down",
        chinese: "放下",
    },
    {
        english: "set free",
        chinese: "释放，解放",
    },
    {
        english: "set off",
        chinese: "动身，起程；使爆发",
    },
    {
        english: "set out",
        chinese: "出发; 开始",
    },
    {
        english: "set up settle down",
        chinese: "建立创立 定居，平静下来",
    },
    {
        english: "show off",
        chinese: "炫耀",
    },
    {
        english: "side by side",
        chinese: "肩并肩，一起",
    },
    {
        english: "so as to",
        chinese: "以便，为的是",
    },
    {
        english: "so far",
        chinese: "到目前为止",
    },
    {
        english: "so far as",
        chinese: "（表示程度，范围）就……，尽……",
    },
    {
        english: "so long as",
        chinese: "只要",
    },
    {
        english: "so...that",
        chinese: "太……以至于……",
    },
    {
        english: "sooner or later",
        chinese: "迟早，早晚",
    },
    {
        english: "speed up",
        chinese: "加快速度",
    },
    {
        english: "spend...on",
        chinese: "在……花钱",
    },
    {
        english: "stand for",
        chinese: "代表，象征",
    },
    {
        english: "tick to",
        chinese: "坚持",
    },
    {
        english: "stop doing sth.",
        chinese: "停止做某事",
    },
    {
        english: "stop to do sth.",
        chinese: "停下来做某事",
    },
    {
        english: "struggle against",
        chinese: "同……作斗争",
    },
    {
        english: "such as",
        chinese: "例如",
    },
    {
        english: "take away",
        chinese: "拿走",
    },
    {
        english: "take it easy",
        chinese: "别着急，别紧张",
    },
    {
        english: "take off",
        chinese: "脱下，起飞",
    },
    {
        english: "take one's time",
        chinese: "从容，慢慢行动",
    },
    {
        english: "take out",
        chinese: "取出",
    },
    {
        english: "take place",
        chinese: "发生",
    },
    {
        english: "take sb. in the arms",
        chinese: "搂抱",
    },
    {
        english: "take the place of",
        chinese: "取代，代替",
    },
    {
        english: "take up",
        chinese: "占去，占据（时间、地位等）",
    },
    {
        english: "talk about",
        chinese: "谈论，议论",
    },
    {
        english: "talk of",
        chinese: "谈论，议论",
    },
    {
        english: "the day after tomorrow",
        chinese: "后天",
    },
    {
        english: "the day before yesterday",
        chinese: "前天",
    },
    {
        english: "the more...the more",
        chinese: "越…就越…",
    },
    {
        english: "the other day",
        chinese: "前几天，某日",
    },
    {
        english: "think about",
        chinese: "考虑（是否去做）",
    },
    {
        english: "think of",
        chinese: "想起,考虑,认为,看法",
    },
    {
        english: "thousands of",
        chinese: "成千上万，几千",
    },
    {
        english: "throw away",
        chinese: "扔掉",
    },
    {
        english: "too...to",
        chinese: "太……以至于不……",
    },
    {
        english: "try on",
        chinese: "试穿，试试看",
    },
    {
        english: "try out",
        chinese: "试验",
    },
    {
        english: "turn down",
        chinese: "关小，调低",
    },
    {
        english: "turn off",
        chinese: "关掉（水、电、电视、收音机等）",
    },
    {
        english: "turn on",
        chinese: "打开（水、电视、收音机、灯、煤气等）",
    },
    {
        english: "turn over",
        chinese: "翻动，犁翻（土地）",
    },
    {
        english: "turn up",
        chinese: "到达，来到；开大（声音）",
    },
    {
        english: "up and down",
        chinese: "上下，来回",
    },
    {
        english: "used to sth.",
        chinese: "习惯于",
    },
    {
        english: "used to do sth.",
        chinese: "过去常常",
    },
    {
        english: "wait for",
        chinese: "等候，等待",
    },
    {
        english: "wake up",
        chinese: "醒来",
    },
    {
        english: "work out",
        chinese: "算出，解决",
    },
    {
        english: "worry about",
        chinese: "担心，烦恼",
    },
    {
        english: "wrap up",
        chinese: "包好, 伪装",
    },
    {
        english: "write down",
        chinese: "写下，记下",
    },
    {
        english: "write to",
        chinese: "写信给…",
    },
    {
        english: "acute",
        chinese: "a.剧烈的，急剧的，十分严重的,（病）急性的",
    },
    {
        english: "airline",
        chinese: "n.航空公司；航空系统",
    },
    {
        english: "am/æm/",
        chinese: "v.be的人称形式之一",
        phoneticSymbol: "/æm/",
    },
    {
        english: "analyse/ `ænl,aɪz /",
        chinese: "v.分析",
        phoneticSymbol: "/ `ænl,aɪz /",
    },
    {
        english: "barbershop/ `bɑrbər,ʃɑp /",
        chinese: "n.理发店",
        phoneticSymbol: "/ `bɑrbər,ʃɑp /",
    },
    {
        english: "BC/ˌbiːˈsiː/",
        chinese: "n.公元前",
        phoneticSymbol: "/ˌbiːˈsiː/",
    },
    {
        english: "behaviour/ bɪ`heɪvjər /",
        chinese: "n.行为，举止",
        phoneticSymbol: "/ bɪ`heɪvjər /",
    },
    {
        english: "biochemistry",
        chinese: "n.生物化学",
    },
    {
        english: "body",
        chinese: "n.身体;尸体;团体;物体",
    },
    {
        english: "bored / bɔrd /",
        chinese: "a.（对人，事）厌倦的，烦闷的",
        phoneticSymbol: "/ bɔrd /",
    },
    {
        english: "boring / `bɔrɪŋ /",
        chinese: "a.乏味的，无聊的",
        phoneticSymbol: "/ `bɔrɪŋ /",
    },
    {
        english: "centre (美 center )",
        chinese: "n.中心，中央",
    },
    {
        english: "commericial",
        chinese: "a.贸易的，商业的",
    },
    {
        english: "Dr(缩) = Doctor",
        chinese: "n.医生，大夫；博士",
    },
    {
        english: "everybody pro",
        chinese: "n.每人，人人",
    },
    {
        english: "factory",
        chinese: "n.工厂",
    },
    {
        english: "fantastic",
        chinese: "a.(口语)极好的，美妙的，很棒的",
    },
    {
        english: "headteacher",
        chinese: "n.中小学班主任",
    },
    {
        english: "hopeless",
        chinese: "a.没有希望,不可救药的",
    },
    {
        english: "mad",
        chinese: "a.发疯的；生气的",
    },
    {
        english: "Oceania*",
        chinese: "n.大洋洲",
    },
    {
        english: "parallel",
        chinese: "n.极其相似的人,纬线",
    },
    {
        english: "patience",
        chinese: "n.容忍；耐心",
    },
    {
        english: "pink",
        chinese: "a.粉红色的",
    },
    {
        english: "punctuation",
        chinese: "n.标点符号",
    },
    {
        english: "relevant",
        chinese: "a.紧密相关,有意义的",
    },
    {
        english: "rocket",
        chinese: "n.火箭",
    },
    {
        english: "shaver",
        chinese: "n.电动剃须刀",
    },
    {
        english: "sideroad (AmE sidewalk)",
        chinese: "n.人行道",
    },
    {
        english: "squeeze",
        chinese: "n.挤压，捏，塞",
    },
    {
        english: "tablet",
        chinese: "n.药片",
    },
    {
        english: "taxipayer",
        chinese: "n.纳税人",
    },
    {
        english: "tentative",
        chinese: "a.不确定的，踌躇的",
    },
    {
        english: "terminal",
        chinese: "a.(火车汽车飞机)终点站",
    },
    {
        english: "textbook",
        chinese: "n.课本，教科书",
    },
    {
        english: "tiresome",
        chinese: "a.令人厌倦的",
    },
    {
        english: "used",
        chinese: "a.用过的;旧的;二手的",
    },
    {
        english: "VCD = versatile compact disk",
        chinese: "n.影碟光盘",
    },
    {
        english: "waitress",
        chinese: "n.女服务员",
    },
    {
        english: "programme (Am.program)",
        chinese: "n.节目；项目",
    },
    {
        english: "a.m./A.M.",
        chinese: "n.午前，上午",
    },
    {
        english: "AD",
        chinese: "公元",
    },
    {
        english: "is",
        chinese: "是",
    },
    {
        english: "anchor",
        chinese: "v. / n.锚，抛锚",
    },
];

module.exports = { data };