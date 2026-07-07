export interface QAData {
  question: string;
  answer: string;
  link?: string;
}

// 选校选专业
export const QAData: QAData[] = [
  {
    question: "学校排名高一定就是好的吗？如何选择适合自己的学校？",
    answer:
      "不一定，每个学校有不同的优势专业，建议每位同学都多多关注各院校的活动，比如艺术祭、校园开放日。我们也会针对同学具体情况，为同学推荐合适的院校。",
  },
  {
    question: "听说东京地区留学生竞争激烈，究竟有多卷？",
    answer:
      "参考2024年考试倍率数据： 多摩美｜学部外国人77/582，编入19/98，大学院163/773； 武藏美｜学部外国人122/715，编入36/203，大学院201/1021。",
  },
  {
    question: "教育部认证的日本大学都有哪些？",
    answer:
      "国立大学：北海道教育大学、室蘭工業大学、東京外国語大学等56所。公立大学：釧路公立大学、公立はこだて未来大学、京都府立大学等70所。私立大学：北翔大学、旭川大学、东京艺术大学等518所。",
  },
  {
    question: "我对地方院校感兴趣，但没有了解途径。",
    answer:
      "可以参照认证校名单，结合QS排名进行搜索，并积极申请参加心仪院校的校园开放日等活动。偏远地区一般会有线上开放日/学科说明会，先了解再决定。",
  },
  {
    question: "热门专业都有哪些？",
    answer: "平面设计、情报设计（信息设计）、媒体艺术、产品设计、ACG方向等。",
  },
  {
    question: "转专业有哪些注意事项？",
    answer:
      "转专业的同学最好和机构联系一下，因为跨专业的话有的学科允许，有的学科的教授不会允许。不是所有专业都可以跨专业考的，建议先确认清楚是否该专业接受跨专业考之后，再准备。日进艺术学院可以提供咨询服务",
  },
  {
    question: "学费最贵的专业都有哪些？为什么贵？",
    answer:
      "纯艺类如日本画、版画、雕塑需要购买材料，设计类中舞台美术类也较为昂贵。",
  },
];

// 学部・大学院考学要求
export const StudyRequirements: QAData[] = [
  {
    question: "学部考试基本要求？",
    answer:
      "日语N2或EJU 240分以上，小论文、专业笔试、素描、面试、作品集等为主要考核内容。",
  },
  {
    question: "大学院考试基本要求？",
    answer:
      "日语N2～N1，EJU 260分以上，作品集、小论文、面试为主要考核内容，部分院校另设专业笔试。",
  },
  {
    question: "编入学和研究生考试是什么？",
    answer:
      "编入学为大学插班生考试，从2・3年级开始就读，研究生考试为预科生考试，可在教授指导下进行学习。",
  },
];

// 赴日准备
export const JapanPreparation: QAData[] = [
  {
    question: "留学费用大概是多少？",
    answer: `国公立院校学费价格本身往往比较统一，基本在50～60万日元（折合人民币2.5～3万）附近波动。不过入学时需要缴纳入学金，这部分各院校会产生差别，15～40万日元的都有（折合人民币7.5千～2万）。
      
    私立艺术类学部（本科）第一年学费平均值约186万日元，折合人民币为8.7万；每年平均学费约166万日元，折合人民币 × 4，四年合计31.1万左右。私立艺术类大学院（硕士）第一年学费平均值约156万日元，折合人民币为7.3万；每年平均学费约147万日元，两年合计13.8万左右。
    
    详细可见 ↓ 
    `,
    link: "https://mp.weixin.qq.com/s/itiqXEqJLhucVQOw4tBZNw",
  },

  {
    question: "一般提前多久开始申请签证？",
    answer:
      "短期旅行签证1-3个月即可，留学签证推荐提前半年到一年申请语言学校，热门学校需更早申请。",
  },
  {
    question: "来日本需要语言基础吗？",
    answer:
      "东京都国际化程度高，不会日语也可以生活学习，但专业基础薄弱的同学需打好日语基础，以提高考试合格率。",
  },
];

// Japanese FAQ Data (QADataJa)
export const QADataJa: QAData[] = [
  {
    question:
      "学校のランキングが高いと必ず良い学校ですか？自分に合った学校を選ぶにはどうすればいいですか？",
    answer:
      "必ずしもそうではありません。各学校には異なる強みがありますので、各学校の活動、例えばアートフェスティバルやオープンキャンパスに注目することをお勧めします。私たちも学生の具体的な状況に応じて、適切な学校を推薦します。",
  },
  {
    question:
      "東京地区の留学生は競争が激しいと聞いていますが、どのくらい厳しいですか？",
    answer:
      "2024年の試験倍率データを参考にしてください：多摩美術大学｜学部外国人77/582、編入19/98、大学院163/773；武蔵野美術大学｜学部外国人122/715、編入36/203、大学院201/1021。",
  },
  {
    question: "教育部が認定している日本の大学はどこですか？",
    answer:
      "国立大学：北海道教育大学、室蘭工業大学、東京外国語大学など56校。公立大学：釧路公立大学、公立函館未来大学、京都府立大学など70校。私立大学：北翔大学、旭川大学、東京藝術大学など518校。",
  },
  {
    question: "地方の大学に興味がありますが、情報源がありません。",
    answer:
      "認定校リストを参考にし、QSランキングを組み合わせて検索し、希望する学校のオープンキャンパスなどのイベントに積極的に参加してください。遠方の地域では、オンラインオープンデーや学科説明会が行われることが多いので、まずは情報を収集してから決めましょう。",
  },
  {
    question: "人気の専攻は何ですか？",
    answer:
      "グラフィックデザイン、情報デザイン、メディアアート、プロダクトデザイン、ACG関連などです。",
  },
  {
    question: "専攻変更にあたっての注意事項は？",
    answer:
      "専攻変更を考えている学生は、必ず機関に相談してください。なぜなら、専攻を跨ぐ場合は許可される科目もあれば、教授が許可しない科目もあるためです。すべての専攻が跨ぐことができるわけではないので、その専攻が跨ぐ受験を受け入れているかを事前に確認した方が良いです。日進美術学院では相談サービスを提供しています。",
  },
  {
    question: "学費が最も高い専攻は何ですか？なぜ高いのですか？",
    answer:
      "純粋な芸術系（日本画、版画、彫刻）は材料費が必要です。デザイン系の舞台美術も比較的高額です。",
  },
];

// Japanese Study Requirements (StudyRequirementsJa)
export const StudyRequirementsJa: QAData[] = [
  {
    question: "学部入試の基本要件は？",
    answer:
      "日本語N2またはEJU240点以上、小論文、専門筆記試験、デッサン、面接、ポートフォリオなどが主要な評価項目です。",
  },
  {
    question: "大学院入試の基本要件は？",
    answer:
      "日本語N2〜N1、EJU260点以上、ポートフォリオ、小論文、面接が主要な評価項目で、いくつかの学校では専門の筆記試験もあります。",
  },
  {
    question: "編入学と研究生試験とは何ですか？",
    answer:
      "編入学は大学への途中入学試験で、2年生または3年生からの入学を意味します。研究生試験は予科生のための試験で、教授の指導の下で学ぶことができます。",
  },
];

// Japanese Japan Preparation (JapanPreparationJa)
export const JapanPreparationJa: QAData[] = [
  {
    question: "留学費用はどのくらいですか？",
    answer: `国公立大学の学費は基本的に統一されており、約50万〜60万円（中国元で約2.5万〜3万）です。ただし、入学時に入学金が必要で、各学校によって異なり、15万〜40万円（中国元で約7.5千〜2万）かかる場合があります。
    
    私立の芸術系学部（学部）の初年度学費の平均は約186万円（中国元で約8.7万）で、毎年の平均学費は約166万円（中国元で約6.8万）であり、4年間で合計約311万円になります。私立の芸術系大学院（修士）の初年度学費の平均は約156万円（中国元で約7.3万）で、毎年の平均学費は約147万円（中国元で約6.7万）で、2年間の合計は約138万円になります。
      
      詳しくは ↓ 
      `,
    link: "https://mp.weixin.qq.com/s/itiqXEqJLhucVQOw4tBZNw",
  },

  {
    question: "一般的にどのくらい前にビザを申請しますか？",
    answer:
      "短期旅行ビザは1〜3ヶ月前で大丈夫ですが、留学ビザは語学学校のために半年から1年前に申請することをお勧めします。人気のある学校は、さらに早く申請する必要があります。",
  },
  {
    question: "日本に来るのに言語の基礎が必要ですか？",
    answer:
      "東京都は国際化が進んでおり、日本語がなくても生活や学習ができますが、専門的な基礎が弱い学生は日本語の基礎をしっかり身につけて、試験の合格率を上げる必要があります。",
  },
];

// English FAQ Data (QADataEn)
export const QADataEn: QAData[] = [
  {
    question:
      "Is a higher school ranking always better? How do I choose the right school for myself?",
    answer:
      "Not necessarily; each school has its own strengths in different majors. It is advisable for students to pay attention to various institutions' activities, such as art festivals and open campus days. We can also recommend suitable schools based on students' specific circumstances.",
  },
  {
    question:
      "I’ve heard that competition among international students in Tokyo is fierce. How competitive is it?",
    answer:
      "Referencing the 2024 exam ratio data: Tama Art University: Undergraduate foreign students 77/582, transfer students 19/98, graduate students 163/773; Musashino Art University: Undergraduate foreign students 122/715, transfer students 36/203, graduate students 201/1021.",
  },
  {
    question:
      "Which Japanese universities are certified by the Ministry of Education?",
    answer:
      "National universities: 56 institutions, including Hokkaido University of Education, Muroran Institute of Technology, and Tokyo University of Foreign Studies. Public universities: 70 institutions, including Kushiro Public University, Hakodate Future University, and Kyoto Prefectural University. Private universities: 518 institutions, including Hokushou University, Asahikawa University, and Tokyo University of the Arts.",
  },
  {
    question:
      "I am interested in local colleges but don't know how to find information.",
    answer:
      "You can refer to the list of accredited schools and search in conjunction with QS rankings, as well as actively apply to participate in open campus days at your desired schools. Remote areas generally offer online open days or subject explanation sessions, so it’s best to gather information before making a decision.",
  },
  {
    question: "What are the popular majors?",
    answer:
      "Graphic design, information design, media arts, product design, ACG (Animation, Comics, Games), etc.",
  },
  {
    question: "What are the considerations for changing majors?",
    answer:
      "Students wishing to change majors should consult with the institution, as some disciplines allow for changes while others do not. Not all majors permit transfers, so it’s advisable to confirm whether a specific major accepts transfer students before preparing. NISSIN Art Academy can provide consulting services.",
  },
  {
    question:
      "Which majors have the highest tuition fees, and why are they expensive?",
    answer:
      "Majors in pure arts, such as Japanese painting, printmaking, and sculpture, require material purchases. Among design disciplines, stage design is also relatively expensive.",
  },
];

// English Study Requirements (StudyRequirementsEn)
export const StudyRequirementsEn: QAData[] = [
  {
    question: "What are the basic requirements for undergraduate exams?",
    answer:
      "Japanese proficiency at N2 or EJU score of 240 or above; major assessment content includes essays, professional written exams, drawing, interviews, and portfolios.",
  },
  {
    question: "What are the basic requirements for graduate exams?",
    answer:
      "Japanese proficiency at N2 to N1, EJU score of 260 or above; primary assessment content includes portfolios, essays, and interviews, with some institutions requiring a professional written exam as well.",
  },
  {
    question: "What are transfer and graduate entrance exams?",
    answer:
      "Transfer exams allow students to enter universities in their second or third year, while graduate entrance exams are for preparatory students studying under the guidance of a professor.",
  },
];

// English Japan Preparation (JapanPreparationEn)
export const JapanPreparationEn: QAData[] = [
  {
    question: "What are the approximate costs of studying abroad?",
    answer: `Tuition fees for national and public universities in Japan are generally consistent, typically ranging from 500,000 to 600,000 yen (approximately 25,000 to 30,000 RMB). However, there is an entrance fee that varies by institution, ranging from 150,000 to 400,000 yen (approximately 7,500 to 20,000 RMB). 
      
      For private art undergraduate programs, the average first-year tuition is about 1,860,000 yen (approximately 87,000 RMB), with an average annual tuition of around 1,660,000 yen, totaling approximately 3,110,000 yen (about 310,000 RMB) over four years. For private art graduate programs, the average first-year tuition is about 1,560,000 yen (approximately 73,000 RMB), with an average annual tuition of around 1,470,000 yen, totaling approximately 2,780,000 yen (about 138,000 RMB) over two years. For more details, 
      
      see: `,
    link: "https://mp.weixin.qq.com/s/itiqXEqJLhucVQOw4tBZNw",
  },

  {
    question: "How far in advance should I apply for a visa?",
    answer:
      "For a short-term travel visa, 1-3 months is usually sufficient. For a student visa, it is recommended to apply 6 months to a year in advance for language schools, especially popular ones, which may require even earlier applications.",
  },
  {
    question: "Do I need a language foundation to come to Japan?",
    answer:
      "Tokyo is highly internationalized, so it’s possible to live and study without knowing Japanese. However, students with weak foundational knowledge in their majors should strengthen their Japanese skills to improve their chances of passing exams.",
  },
];
