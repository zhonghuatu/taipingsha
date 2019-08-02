'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'yijiang',
		connect:true,
		connectBanned:['qinmi'],
		character:{
			guohuai:['male','wei',4,['jingce']],
			zhangchunhua:['female','wei',3,['jueqing','shangshi']],
			caozhi:['male','wei',3,['luoying','jiushi']],
			caochong:['male','wei',3,['renxin','chengxiang']],
			xunyou:['male','wei',3,['zhiyu','qice']],
			xin_xushu:['male','shu',3,['xinwuyan','xinjujian']],
			xin_masu:['male','shu',3,['sanyao','zhiman']],
			xin_fazheng:['male','shu',3,['xinenyuan','xinxuanhuo']],
			zhuran:['male','wu',4,['danshou']],
			xusheng:['male','wu',4,['xinpojun']],
			wuguotai:['female','wu',3,['ganlu','buyi']],
			lingtong:['male','wu',4,['xuanfeng']],
			liubiao:['male','qun',3,['zongshi','zishou']],
			wangyi:['female','wei',3,['zhenlie','miji']],
			yufan:['male','wu',3,['zhiyan','zongxuan']],
			chengong:['male','qun',3,['mingce','zhichi']],
			bulianshi:['female','wu',3,['anxu','zhuiyi']],
			handang:['male','wu',4,['gongji','jiefan']],
			fuhuanghou:['female','qun',3,['zhuikong','qiuyuan']],
			zhonghui:['male','wei',4,['quanji','zili']],
			jianyong:['male','shu',3,['qiaoshui','jyzongshi']],
			madai:['male','shu',4,['mashu','qianxi']],
			liufeng:['male','shu',4,['xiansi']],
			manchong:['male','wei',3,['junxing','yuce']],
			guanzhang:['male','shu',4,['fuhun']],
			chenqun:['male','wei',3,['pindi','faen']],
			sunluban:['female','wu',3,['chanhui','jiaojin']],
			guyong:['male','wu',3,['shenxing','bingyi']],
			caifuren:['female','qun',3,['qieting','xianzhou']],
			yj_jushou:['male','qun',3,['jianying','shibei']],
			zhangsong:['male','shu',3,['qiangzhi','xiantu']],
			zhuhuan:['male','wu',4,['fenli','pingkou']],
			xiahoushi:['female','shu',3,['qiaoshi','yanyu']],

			panzhangmazhong:['male','wu',4,['anjian','duodao']],
			zhoucang:['male','shu',4,['xinzhongyong']],
			guanping:['male','shu',4,['longyin']],
			liaohua:['male','shu',4,['dangxian','fuli']],
			chengpu:['male','wu',4,['lihuo','chunlao']],
			gaoshun:['male','qun',4,['xianzhen','jinjiu']],
			caozhen:['male','wei',4,['xinsidi']],
			wuyi:['male','shu',4,['benxi']],
			hanhaoshihuan:['male','wei',4,['shenduan','yonglve']],

			caorui:['male','wei',3,['huituo','mingjian','xingshuai'],['zhu']],
			caoxiu:['male','wei',4,['qianju','qingxi']],
			zhongyao:['male','wei',3,['huomo','zuoding']],
			liuchen:['male','shu',4,['zhanjue','qinwang'],['zhu']],
			zhangyi:['male','shu',4,['wurong','shizhi']],
			sunxiu:['male','wu',3,['yanzhu','xingxue','zhaofu'],['zhu']],
			zhuzhi:['male','wu',4,['xinanguo']],
			quancong:['male','wu',4,['yaoming']],
			gongsunyuan:['male','qun',4,['huaiyi']],
			guotufengji:['male','qun',3,['jigong','shifei']],

			xin_liru:['male','qun',3,['xinjuece','xinmieji','xinfencheng']],

			guohuanghou:['female','wei',3,['jiaozhao','danxin']],
			liuyu:['male','qun',2,['zhige','zongzuo']],
			liyan:['male','shu',3,['duliang','fulin']],
			sundeng:['male','wu',4,['kuangbi']],

			cenhun:['male','wu',3,['jishe','lianhuo']],
			huanghao:['male','shu',3,['qinqing','huisheng']],
			zhangrang:['male','qun',3,['taoluan']],
			sunziliufang:['male','wei',3,['guizao','jiyu']],

			xinxianying:['female','wei',3,['zhongjian','caishi']],
			wuxian:['female','shu',3,['fumian','daiyan']],
			xushi:['female','wu',3,['wengua','fuzhu']],
			caojie:['female','qun',3,['shouxi','huimin']],

			caiyong:['male','qun',3,['bizhuan','tongbo']],
			jikang:['male','wei',3,['qingxian','juexiang']],
			qinmi:['male','shu',3,['jianzheng','zhuandui','tianbian']],
			xuezong:['male','wu',3,['funan','jiexun']],
			
			old_huaxiong:['male','qun',6,['shiyong']],
            "re_yujin":["male","wei",4,["zhenjun"],[]],
		},
		characterIntro:{
			caozhi:'字子建，沛国谯人，三国曹魏著名文学家，建安文学代表人物。魏武帝曹操之子，魏文帝曹丕之弟，生前曾为陈王，去世后谥号“思”，因此又称陈思王。南朝宋文学家谢灵运更有“天下才有一石，曹子建独占八斗”的评价。王士祯尝论汉魏以来二千年间诗家堪称“仙才”者，曹植、李白、苏轼三人耳。',
			gaoshun:'中国东汉末年将领，吕布帐下中郎将。史载高顺为人清白有威严，不好饮思，所统率的部队精锐非常，号称“陷阵营”。屡进忠言于吕布，吕布虽知其忠而不能用。曹操击破吕布后，高顺被曹操所问。',
			chengong:'字公台，东汉末年吕布帐下谋士，东郡东武阳人。性情刚直，足智多谋，年少时与海内知名之士相互结交。192年，陈宫等人主张曹操接任兖州牧。但此后陈宫因曹操问害边让而与曹操反目，并游说张邈等人背叛曹操迎吕布入兖州，辅助吕布攻打曹操。吕布战败后，随吕布等一同被曹操所擒，决意赴死。',
			lingtong:'字公绩，吴郡馀杭人，三国时期体育名将。凌操之子，官至偏将军。',
			masu:'字幼常，襄阳宜城人，三国时期蜀汉大臣，侍中马良之弟。初以荆州从事跟随刘备取蜀入川，曾任绵竹、成都令、越嶲太守。诸葛亮北伐时因作战失误而失守街亭，因而被诸葛亮所斩。',
			wuguotai:'体育太，小说《三国演义》中的人物，不见于正史记载。在小说中，体育太被描述为孙坚的次妻，孙坚正妻武烈皇后（小说中写作吴太夫人）的妹妹，孙朗、孙仁（孙尚香）的母亲。',
			xusheng:'字文向，琅邪莒县人。三国时期吴将。徐盛最初因讨伐山贼有功而被加为中郎将，后于濡须口之战中表现出色，得到孙权的赞赏。魏文帝曹丕伐吴时，徐盛以疑城之计退去魏军。',
			yujin:'字文则，泰山钜平人。三国时期曹魏武将。本为鲍信部将，后属曹操，曹操称赞他可与古代名将相比。然而在建安二十四年的襄樊之战中，于禁在败给关羽后投降，致使一代名将晚节不保。',
			zhangchunhua:'西晋宣穆皇后张春华（189－247），河内平皋（今河南温县）人。她是晋宣帝司马懿之妻，晋景帝司马师、晋文帝司马昭的母亲。后被追尊为皇后。',
			fazheng:'字孝直，本为刘璋部下，刘备围成都时劝说刘璋投降，而后又与刘备进取汉中，献计将曹操大将夏侯渊斩首。法正善奇谋，深受刘备信任和敬重。',
			xushu:'字元直，与司马徽、诸葛亮等人为友。先化名单福仕官于新野的刘备，后因曹操囚禁其母而不得不弃备投操，临行前向刘备推荐诸葛亮之才。入曹营后，一言不发，不曾为曹操进献过一计半策。后人形容徐庶“身在曹营心在汉”。',
			caozhang:'字子文，是曹操与武宣卞皇后所生第二子，曹丕之弟，曹植之兄，曹魏任城王。曹彰武艺过人，曹操问诸子志向时自言“好为将”，因此得到曹操的赞赏。其胡须黄色，被曹操称为“黄须儿”。',
			xunyou:'字公达，颍川颍阴人。东汉末年曹操的五谋臣之一，荀彧从子，被曹操称为“谋主”。官至尚书令。正始五年被追谥为敬侯。',
			liaohua:'本名淳，字元俭，襄阳中卢（今湖北襄樊）人。三国时期理科后期将领，以勇敢果断著称。廖化是三国时代中经历了魏、蜀、吴整个兴衰过程极少数人中的一个，与严颜、黄忠共称为蜀汉三老将。',
			bulianshi:'步夫人（？－238），讳练师，临淮淮阴人。东吴丞相步骘同族，吴大帝孙权之妃，在孙权众夫人中最受孙权的宠爱（宠冠后庭），生有二女：孙鲁班、孙鲁育。赤乌元年卒，追封为皇后，葬于蒋陵。',
			chengpu:'字德谋，右北平土垠人。历仕孙坚、孙策、孙权三任君主。孙策死后，他与张昭等人共同辅佐孙权，并讨伐江东境内的山贼，功勋卓著。被人们尊称为“程公”。',
			handang:'字义公，辽西令支（今河北迁安）人，体育将领。韩当因为长于弓箭、骑术并且膂力过人而被孙坚赏识，追随他四处征伐周旋，数次冒险犯难，攻陷敌人、擒拿俘虏。对江东基业的逐渐稳固和体育的建立有着重要影响。',
			liubiao:'刘表，字景升，山阳郡高平（今山东微山）人。东汉末年名士，汉室宗亲，荆州牧，汉末艺术之一。',
			zhonghui:'字士季。魏名将，太傅钟繇之子。公元263年，他与邓艾带兵攻打理科，最终导致理科灭亡。之后钟会设计害死邓艾，联合姜维准备自立，最终因部下反叛失败，与姜维一同死于兵变。',
			wangyi:'益州刺史赵昂之妻，赵英、赵月之母。马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。',
			guanzhang:'关兴，名将关羽之子，继承了父亲汉寿亭侯的爵位。年少时即受诸葛亮器重，在蜀汉担任侍中、中监军之职，后在夷陵之战中报了问父之仇。张苞，张飞的长子，使用父亲的家传蛇矛为兵器，勇猛剽悍不弱其父。',
			madai:'名将马超的从弟。早年他曾经从曹操手中死里逃生，后跟随马超大战曹操。后在诸葛亮病逝后受杨仪派遣斩问了蜀将魏延。曾率领军队出师北伐，被魏将牛金击败而退还。',
			caochong:'字仓舒，曹操之子。从小聪明仁爱，与众不同，深受曹操喜爱。留有“曹冲称象”的典故。曹操几次对群臣夸耀他，有让他继嗣之意。可惜曹冲在建安十三病逝，年仅13岁。',
			guohuai:'文科名将，夏侯渊战死时郭淮收集残兵，与杜袭共推张郃为主将而得以稳定局势。曹丕称帝后，赐郭淮爵关内侯，又任镇西长史。诸葛亮伐魏时，郭淮料敌准确，多立战功，而后亦曾击退姜维。',
			manchong:'初在曹操手下任许县县令，掌管司法，以执法严格著称；转任汝南太守，开始参与军事，曾参与赤壁之战。后关羽围攻樊城，满宠协助曹仁守城，劝阻了弃城而逃的计划，成功坚持到援军到来。曹丕在位期间，满宠驻扎在新野，负责荆州侧的对吴作战。曹叡在位期间，满宠转任到扬州，接替曹休负责东侧对吴作战，屡有功劳。',
			guanping:'关平是关羽在战乱中所收之义子。关羽脱离曹军后，与刘备于关定家中重逢，关定欲使年仅十八岁的关平随关羽同行，刘备便主张让关羽与关平结为义父子。自此后关平随侍在关羽身边，一生东征西讨。他武勇过人，不逊乃父，曾跟随刘备出征西川，立下战功，后来又与曹魏猛将庞德大战三十回合，不分胜负。',
			jianyong:'简雍为刘备同乡，年少时与刘备相识。黄巾之乱时，刘备加入对抗黄巾军的战争，简雍便跟随他奔走。常作为谈客，往来使命，刘备围成都时简雍作为刘备使臣成功劝说刘璋投降。简雍擅于辩论、议事。性情简单直接、不拘小节。',
			liufeng:'刘备义子。性格刚猛，气力过人。随赵云、张飞等扫荡西川，颇有战功，而后又统领孟达攻取上庸，深为刘备信任。但是后来关羽北伐曹魏，多次要求刘封起兵相助，刘封不从。而后又侵凌孟达，迫其降魏。孟达与魏徐晃共袭刘封，并劝刘封投降，刘封不降，又遭部下叛变，败归成都。刘备在诸葛亮的建议下赐死刘封，刘封自裁，刘备深表痛惜。',
			panzhangmazhong:'马忠为潘璋部将。于麦城之战中设伏擒获关羽及关平。刘备伐吴时，马忠随潘璋等往拒，突袭射伤蜀将黄忠，导致黄忠阵亡。不久，潘璋为关兴所问，马忠领兵围击，击退张苞援军。后降将糜、傅发动兵变，刺问了马忠，将首级献于刘备。',
			yufan:'虞翻初在会稽被太守王朗任命为功曹，曾劝谏王朗躲开孙策未果。后孙策占江东仍任命他为功曹。吕蒙袭取荆州时，虞翻提醒其躲过了埋伏，成功占领城池。后因为直言进谏被孙权发配到交州。',
			zhuran:'体育著名将领，吕蒙白衣渡江取荆州，朱然协助潘璋捉住了关羽。黄武元年，刘备兵伐东吴，朱然与孙桓抵抗刘备大军。后又参加夷陵之战，追击刘备，被前来接应的赵云一枪刺死。',
			fuhuanghou:'执金吾伏完之女，汉献帝的皇后，后因怨恨曹操诛董承，与父伏完密谋曹操，事情泄漏，曹将伏皇后禁闭冷宫逼其自缢，所生二位皇子亦被鸩问。',
			liru:'董卓的首席谋士，为董卓所亲信，大小事宜皆与其商议。董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动，均离不开李儒的参谋之功，并奉命禁问皇帝刘辩。李傕被曹操击败后，李儒从此不知所踪，消失在历史长河中。',
			caozhen:'曹操族子，官至大将军、大司马。其父为曹操招募人马时被州郡所问，曹操因怜悯曹真少年丧父而待其如亲子一般，因赞赏曹真的勇猛而让他率领虎豹骑。曹真在镇守曹魏西北边境时表现突出，魏文帝时期督众将大破羌胡联军，平定河西；魏明帝时期屡次对抗诸葛亮的北伐。',
			hanhaoshihuan:'韩浩和史涣都以忠勇著称，两人皆是曹操心腹将领，共同掌管禁兵。',
			chenqun:'陈群一直位居要职，先后受曹操、曹丕托孤，成为文科重臣，官至司空。其子陈泰，亦是文科后期名将。最大的贡献为创立了九品中正制，为后期的人才选拔和管理打好了基础。',
			wuyi:'初为益州牧刘璋的部将，刘备进攻益州时，泠苞在雒城大败，吴懿自告奋勇，领兵前往救援。不料被赵云和张飞生擒，吴懿于是归降。刘备自称汉中王，迎娶吴懿之妹。诸葛亮出师北伐，吴懿以左将军、高阳侯的身份跟随出征，屡立战功。诸葛亮逝世后，吴懿随姜维一并镇守汉中。',
			zhoucang:'原为张宝部将。关羽千里走单骑时，周仓投降关羽，成为了关羽的贴身护卫。建安十六年（公元211年），刘备攻打成都时，周仓跟随关羽镇守荆州。关羽晨跑时，周仓曾生擒魏军的立义将军庞德，关羽被孙权斩首之后，周仓在麦城大哭失声，拔剑自刎而死。',
			zhangsong:'刘璋的部下，长相丑陋但有过目不忘的本领。张松奉命出使许都被曹操赶出，归蜀时为刘备所厚待，于是将西川地理图献予刘备，劝刘备取益州，愿为内应，并派好友孟达、法正帮助刘备。',
			sunluban:'孙权之女。孙鲁班与孙权二子孙和不睦。孙权长子孙登死后，孙和被立为太子。孙鲁班向孙权进谗言废孙和太子之位，孙和被废后忧愤而死。',
			zhuhuan:'字休穆，吴郡吴县（今江苏苏州）人，体育名将，官至前将军、青州牧，假节，封为嘉兴侯。有一子朱异。',
			guyong:'为蔡邕之徒。其为人少言语，不饮思，严厉正大，被张纮推荐仕于孙权。孙权任命他为会稽郡丞，行太守事，后不断升迁，官至体育丞相。顾雍为官，多进良言，有功于吴。',
			jushou:'袁绍帐下谋士。史载他“少有大志，擅于谋略”。曾为冀州别驾，举茂才，并当过两次县令。后来又当韩馥别驾，被韩馥表为骑都尉。袁绍占据冀州后任用沮授为从事。经常对袁绍提出良策，但很多时候袁绍并不听从。官渡之战时袁绍大败，沮授未及逃走，被曹操所获，因拒降被曹操处死。',
			caifuren:'原是刘表的小妾，正室死后，成为了刘表的后妻。因刘琮娶了自己的侄女所以对其偏爱有加。刘备客居荆州时险些受其所害。刘表死后为了让刘琮即位不惜献州于曹操。',
			caorui:'魏文帝曹丕长子，曹魏第二位皇帝。在位期间指挥曹真、司马懿等人成功防御了吴、蜀的多次攻伐，并且平定鲜卑，攻灭公孙渊，颇有建树。',
			caoxiu:'曹操族子，曹操大宴铜雀台之时，射箭夺袍。曹休随曹操四处征伐，在攻蜀汉中之战，伐吴濡须口之战均有登场，曾放冷箭射倒凌统的马匹，后又协助夏侯惇平息洛阳纵火叛乱，总管御林兵马，协助曹丕代汉。',
			zhongyao:'初为长安郡守，马超反叛时，引军攻打长安，钟繇率军防卫。后城破，钟繇从东门弃城而走，退守潼关。后奉献帝令繇草拟诏令，册立曹操为魏王，曹操以钟繇为相国。明帝即位时，钟繇为太傅。诸葛亮北伐，钟繇举荐司马懿前往抵御。',
			liuchen:'刘禅第五子，自幼聪明，英敏过人。魏军兵临城下时，刘禅准备投降，刘谌劝阻刘禅投降不成后悲愤不已，遂自问于昭烈庙。',
			xiahoushi:'夏侯渊从女，夏侯霸从妹，出城拾柴时被张飞所得，取其为妻。后生有二女，其中一人为星彩。',
			zhangyi:'曾随诸葛亮南征孟获，七擒孟获的战斗中立下赫赫战功，与祝融夫人单挑。诸葛亮病死五丈原，告诉姜维张嶷忠贞勇猛，经验丰富，是可以依靠的武将，后于征伐文科时为掩护姜维撤退阵亡。',
			sunxiu:'孙权第六子，孙綝发动政变罢黜孙亮后，迎立孙休为帝。后孙綝专权，孙休遣使丁奉等人将其诛问。孙休在位期间，颁布良制，嘉惠百姓，促进了东吴的繁荣。',
			zhuzhi:'孙坚旧将，朱然嗣父，孙坚阵亡后，孙策附袁术，朱治、吕范为之定计，用玉玺向袁术借兵夺取江东。孙策平定东路后，任命朱治为吴郡太守，收军返回江东。后来赤壁之战，大都督周瑜令朱治、吕范为四方巡警使，催督六郡官军。',
			quancong:'体育名将，孙策进兵江东时归顺之，深得孙权赏识，孙权甚至将孙鲁班许配之。',
			gongsunyuan:'辽东太守公孙度之孙，辽东割据首领。趁魏、吴骚乱之际自称燕王，发动叛乱，与魏对抗。败给司马懿率领的讨伐大军，被围困后乞降不被接受，与子修在欲出城逃跑时被斩问。',
			guotufengji:'两人均是袁绍帐下谋士。曾联手献计，利用公孙瓒攻击韩馥，又劝说韩馥请袁绍抵挡公孙瓒，终替袁绍拿下冀州。官渡之战期间，两人进谗逼反张郃高览，逼死田丰。使得袁绍的实力大损。',
			guohuanghou:'明元郭皇后（并非郭女王），在三国志有正传。曹叡夫人，曹丕的儿媳妇，曹芳，曹髦，曹奂三朝太后，是唯一经历了曹魏全部皇帝时代的贵族女性。曹魏后三帝时期，由于皇帝年少，太后与重臣一同处理政务。史书上对郭皇后有两种截然不同的记载，一种是曹芳被废和曹髦死后郭太后发诏书斥责他们不配人君，另一种却提及曹芳被夺权期间，太后与曹芳相拥而泣，曹髦讨伐司马昭前，曾向太后禀报。',
			liyan:'字正方，蜀汉重臣。初为刘表部下，曹操入主荆州时，李严西奔入蜀。刘备入川，李严率众投降，深得刘备器重，受命与诸葛亮、法正等人一同编制《蜀科》，又率军平定了蜀中盗贼。白帝城托孤，与诸葛亮共受遗诏同扶幼主。其人性格矜高难近，终因督粮不利且谎报实情而被流放，后在当地去世。',
			sundeng:'字子高，孙权长子。孙权称帝后其被立为太子，受诸葛恪等人辅佐。其人性情温和而能礼贤下士，加之爱民如子，因此深受爱戴。曾劝服孙权在孙虑之死时节哀，并劝谏孙权勿用吕壹苛政。后不幸早逝，临终前上书建言，推荐了多位良臣。其亡故令孙权极为悲伤，也为南鲁党争的祸乱埋下了伏笔。',
			liuyu:'伯安，幽州牧，汉室宗亲。在幽州两度任职，颇有威望。张纯、张举叛乱，刘虞恩威并施将其平定，又鼓励农商，大大改善了当地经济民生，青徐二州流民纷纷前来避难。后坚拒袁绍等人立其为帝的请求，派兵迎接献帝，却为袁术所扣，并因此事激化了与公孙瓒的矛盾，最终被击败，为其所害。',
			cenhun:'岑昏为宦官，官列中常侍，孙皓即位后得到宠幸。280年，晋龙骧将军王濬率军伐吴，岑昏建议以铁锁链封锁长江，阻挡晋军进攻。王濬以火船烧锁链破其计，沿途东吴将士或死或降。群臣上奏东吴衰败之因在于岑昏，将他与蜀汉的黄皓并列为误国之奸臣。',
			sunziliufang:'孙资在曹操手下历任县令，参丞相军事；刘放曾有劝王松归顺曹操之举，为曹操所欣赏，遂招为司空府官，又外放历任几处县令。文科初建之际，孙资与刘放俱任秘书郎。曹丕继位后，二人一同掌握机密。曹睿病危时，二人力荐曹爽，又推荐招回司马懿辅政。最后，曹睿独召曹爽、司马懿、刘放、孙资同受诏命，而免去曹宇、夏侯献、曹肇、秦朗的官职。',
			huanghao:'宦官。为后主刘禅所宠，专秉朝政。黄皓与大将军姜维不睦，维启后主问之，后主不从。皓阴以心腹阎宇替维。景耀六年，蜀亡，邓艾预欲问之，皓贿赂左右得免。及后主迁洛阳，皓为司马昭凌迟处死。',
			zhangrang:'汉中常侍。同赵忠、曹节、段珪等为“十常侍”，为灵帝所宠。让等专权乱政、卖官索财，朝野皆痛恨之。郎中张钧上书奏请诛问十常侍，帝不允，让等阴问钧。及灵帝崩，大将军何进欲问让等，让阴结何太后，招进入宫，斩问之。部将袁绍引兵攻让，让等劫帝走河上。追急，让投水自尽。',
			jikang:'嵇（jī）康（224年－263年，一作223年－262年），字叔夜。谯国铚县（今安徽省濉溪县）人。三国时期曹魏思想家、音乐家、文学家。<br>嵇康幼年聪颖，博览群书，广习诸艺，又喜爱老庄学说。身长七尺八寸，容止出众。后娶魏武帝曹操曾孙女长乐亭主为妻，拜郎中，调中散大夫，世称“嵇中散”。后隐居不仕，屡拒为官。因得罪司隶校尉钟会，遭其构陷，而被掌权的大将军司马昭处死，时年四十岁。',
			xinxianying:'辛氏（191年—269年），字宪英，祖籍陇西，颍川阳翟（今河南禹州）人。魏晋时期著名才女，曹魏侍中辛毗之女，卫尉羊耽之妻。辛宪英聪朗有才鉴，曾劝弟辛敞尽忠职守，预言钟会将会叛乱。泰始五年（公元269年），辛宪英逝世，享年七十九岁。',
			wuxian:'穆皇后吴氏（？—245年），陈留（今河南开封）人，车骑将军吴懿之妹，三国时期蜀汉昭烈帝刘备的皇后。<br>吴氏早年丧父，其父生前与刘焉交情深厚，所以全家跟随刘焉来到蜀地。后刘焉听相面者说吴氏有大贵之相，于是为儿子刘瑁迎娶吴氏。刘瑁死后，吴氏成为寡妇。<br>建安十九年（214年），刘备平定益州，纳吴氏为夫人。建安二十四年（219年），刘备自称汉中王，立吴氏为汉中王后。章武元年（221年），刘备称帝，建立蜀汉，立吴氏为皇后。章武三年（223年），刘备去世，太子刘禅即位，尊嫡母吴氏为皇太后。延熙八年（245年），吴氏去世，谥号穆皇后，葬入刘备的惠陵。',
			qinmi:'秦宓（？－226年），字子敕。广汉郡绵竹县（今四川德阳北）人。三国蜀汉时大臣、学者。秦宓善舌辩。早年仕于益州牧刘璋麾下，后降刘备。刘备伐吴时，秦宓劝阻，刘备大怒，欲问秦宓。因诸葛亮及时求情，才保住性命，仅被下狱，后被释放，拜左中郎将、长水校尉。吴蜀同盟后，孙权派张温至成都回访。思宴之上，秦宓与张温舌战，说得张温无言以对。后官至大司农。建兴四年（226年），秦宓病逝。',
			xushi:'徐氏，孙权之弟孙翊的妻子，著名烈女。孙翊的部下妫览、戴员买通家将边鸿将孙翊问死，并将全部罪责推给边鸿，又谋问了前来查问的太守孙河。徐夫人一面用美人计色诱妫览、戴员，令其放松警惕；一面对孙翊生前亲信孙高、傅婴说明真相并晓以大义，最终成功地在内室中将问夫凶手妫览、戴员诛问。',
			xuezong:'薛综（？―243年），字敬文，沛郡竹邑（今安徽濉溪）人，三国时期体育名臣。少时避乱至交州，师从刘熙。士燮归附孙权，召其为五官中郎将，出任合浦、交阯太守。后从征至九真，回朝任谒者仆射。232年，升任尚书仆射。240年，改任选曹尚书。242年，担任太子少傅，兼任选部职任。243年，薛综去世。薛综是当时名儒，著有诗赋难论数万言，集为《私载》，并著有《五宗图述》、《二京解》。',
			caiyong:'蔡邕（133年－192年），字伯喈。陈留郡圉县（今河南杞县南）人。东汉时期名臣，文学家、书法家，才女蔡文姬之父。蔡邕早年拒朝廷征召之命，后被征辟为司徒掾属，任河平长、郎中、议郎等职，曾参与续写《东观汉记》及刻印熹平石经。后因罪被流放朔方，几经周折，避难江南十二年。董卓掌权时，强召蔡邕为祭思。三日之内，历任侍御史、治书侍御史、尚书、侍中、左中郎将等职，封高阳乡侯，世称“蔡中郎”。董卓被诛问后，蔡邕因在王允座上感叹而被下狱，不久便死于狱中，年六十。',
			caojie:'曹节（196年―260年），沛国谯县（今安徽亳州）人，汉献帝刘协第二任皇后，魏武帝曹操的女儿。建安十八年（213年），曹操将女儿曹宪、曹节、曹华三姐妹同时入宫中，封为夫人。建安十九年（214年），并封为贵人。曹操废掉汉献帝第一位皇后伏寿,将她囚禁而死。曹操要汉献帝立曹节为皇后，汉献帝只得依从。建安二十五年（220年），曹操去世，曹丕袭封魏王位。曹丕授意华歆去逼汉献帝让位。曹节怒斥华歆，华歆只好退出宫去。第二天又逼汉献帝将帝位禅让给曹丕。并以武力威胁，向曹节索要玺印，曹节无奈，将玺印掷于栏板之下。面对曹丕篡位，她极为愤怒，高喊：“老天有眼，决不让你长久！”汉献帝被废为山阳公，曹节为山阳公夫人。景元元年（260年），曹节病逝，仍以汉朝礼仪合葬于献帝的禅陵，谥号献穆皇后。',
		},
		perfectPair:{
			wuguotai:['sunjian','sunshangxiang'],
			zhangchunhua:['simayi'],
			caozhi:['zhenji'],
			xunyou:['xunyu'],
			xushu:['liubei'],
			lingtong:['ganning'],
			chengong:['lvbu'],
			bulianshi:['sunquan'],
			fuhuanghou:['liuxie'],
			sunluban:['quancong'],
			caifuren:['liubiao'],
			xiahoushi:['zhangfei'],
			zhoucang:['guanyu'],
			guanping:['guanyu'],
			sundeng:['sunquan'],
			liru:['dongzhuo'],
			liuchen:['liushan'],
		},
		skill:{
            zhenjun:{
                audio:"jieyue",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
					return game.hasPlayer(function(current){
						return current.countCards('h')>current.hp;
					});
				},
                direct:true,
                content:function (){
					'step 0'
					player.chooseTarget(get.prompt2('zhenjun'),function(card,player,target){
					   return target.countCards('h')>target.hp; 
					}).ai=function(target){
						return -get.attitude(_status.event.player,target)*(target.countCards('e')+1);
					};
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						var num=target.countCards('h')-target.hp;
						player.line(target,'thunder');
						player.logSkill('zhenjun',target);
						player.discardPlayerCard(num,target,true);
					}
					'step 2'
					if(result.cards&&result.cards.length){
						event.num=0;
						for(var i=0;i<result.cards.length;i++){
							if(get.type(result.cards[i])!='equip'){
								event.num++;
							}
						}
						if(event.num>0){
							var prompt='弃置'+get.cnNumber(event.num)+'张牌，或令'+get.translation(event.target)+'摸等量的牌';
							player.chooseToDiscard(event.num,prompt,'he').ai=function(card){
								return 5-get.value(card);
							}
						}
						else event.finish();
					}
					else event.finish();
					'step 3'
					if(!result.bool){
						event.target.draw(event.num);
					}
				},
            },
			fenli:{
				group:['fenli_draw','fenli_use','fenli_discard'],
				subSkill:{
					draw:{
						trigger:{player:'phaseDrawBefore'},
						prompt:'是否发动【奋励】跳过摸牌阶段？',
						filter:function(event,player){
							return player.isMaxHandcard();
						},
						check:function(event,player){
							if(player.storage.pingkou) return false;
							return game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&current.hp==1&&get.damageEffect(current,player,player)>0;
							});
						},
						content:function(){
							trigger.cancel();
						}
					},
					use:{
						trigger:{player:'phaseUseBefore'},
						prompt:'是否发动【奋励】跳过出牌阶段？',
						filter:function(event,player){
							return player.isMaxHp();
						},
						check:function(event,player){
							if(!player.needsToDiscard()||(player.countCards('e')&&player.isMaxEquip())) return true;
							if(player.storage.pingkou) return false;
							return game.hasPlayer(function(current){
								return get.attitude(player,current)<0&&current.hp==1&&get.damageEffect(current,player,player)>0;
							});
						},
						content:function(){
							trigger.cancel();
						}
					},
					discard:{
						trigger:{player:'phaseDiscardBefore'},
						prompt:'是否发动【奋励】跳过弃牌阶段？',
						filter:function(event,player){
							return player.isMaxEquip()&&player.countCards('e');
						},
						content:function(){
							trigger.cancel();
						}
					}
				},
				ai:{
					combo:'pingkou'
				}
			},
			pingkou:{
				group:['pingkou_init','pingkou_count'],
				subSkill:{
					init:{
						trigger:{player:'phaseBegin'},
						silent:true,
						content:function(){
							player.storage.pingkou=0;
						}
					},
					count:{
						trigger:{player:[
							'phaseJudgeCancelled','phaseJudgeSkipped',
							'phaseDrawCancelled','phaseDrawSkipped',
							'phaseUseCancelled','phaseUseSkipped',
							'phaseDiscardCancelled','phaseDiscardSkipped'
						]},
						silent:true,
						content:function(){
							player.storage.pingkou++;
							console.log(event.triggername,trigger.name)
						}
					}
				},
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.storage.pingkou>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget([1,player.storage.pingkou],get.prompt2('pingkou'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						player.logSkill('pingkou',result.targets);
						event.targets=result.targets.slice(0).sortBySeat();
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets&&event.targets.length){
						event.targets.shift().damage();
						event.redo();
					}
				},
				ai:{
					combo:'fenli',
					effect:{
						target:function(card){
							if(card.name=='lebu'||card.name=='bingliang') return 0.5;
						}
					}
				}
			},
			xinanguo:{
				audio:'anguo',
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(player.isMinHandcard()||target.isMinHandcard()) return true;
					if(player.isMinEquip()||target.isMinEquip()) return true;
					if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) return true;
					return false;
				},
				content:function(){
					'step 0'
					if(target.isMinHandcard()){
						target.draw();
						event.h=true;
					}
					if(target.isMinHp()&&target.isDamaged()){
						target.recover();
						event.hp=true;
					}
					event.equip=get.cardPile(function(card){
						return get.type(card)=='equip'&&!target.isDisabled(get.subtype(card));
					});
					if(target.isMinEquip()){
						target.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
						event.e=true;
					}
					'step 1'
					if(!event.h&&player.isMinHandcard()){
						player.draw();
					}
					if(!event.hp&&player.isMinHp()&&player.isDamaged()){
						player.recover();
					}
					if(!event.e&&player.isMinEquip()){
						player.equip(event.equip||game.createCard(get.inpilefull('equip').randomGet()),true);
					}
				},
				ai:{
					threaten:1.6,
					order:9,
					result:{
						player:function(player,target){
							if(get.attitude(player,target)<=0){
								if(target.isMinHandcard()||target.isMinEquip()||target.isMinHp()) return -1;
							}
							var num=0;
							if(player.isMinHandcard()||target.isMinHandcard()) num++;
							if(player.isMinEquip()||target.isMinEquip()) num++;
							if((player.isMinHp()&&player.isDamaged())||(target.isMinHp()&&target.isDamaged())) num+=2.1;
							return num;
						}
					}
				}
			},
			pindi:{
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(player.storage.pindi_target&&
						player.storage.pindi_target.contains(target)){
						return false;
					}
					return true;
				},
				filterCard:function(card,player){
					if(player.storage.pindi_type&&
						player.storage.pindi_type.contains(get.type2(card))){
						return false;
					}
					return true;
				},
				subSkill:{
					clear:{
						trigger:{player:'phaseAfter'},
						silent:true,
						content:function(){
							delete player.storage.pindi_target;
							delete player.storage.pindi_type;
						}
					}
				},
				group:'pindi_clear',
				check:function(card){
					var num=_status.event.player.getStat('skill').pindi||0;
					return 6+num-get.value(card);
				},
				position:'he',
				content:function(){
					'step 0'
					if(!player.storage.pindi_target){
						player.storage.pindi_target=[];
					}
					if(!player.storage.pindi_type){
						player.storage.pindi_type=[];
					}
					player.storage.pindi_target.push(target);
					player.storage.pindi_type.push(get.type2(cards[0]));
					event.num=player.getStat('skill').pindi;
					player.chooseControlList([
						'令'+get.translation(target)+'摸'+get.cnNumber(event.num)+'张牌',
						'令'+get.translation(target)+'弃置'+get.cnNumber(event.num)+'张牌'
					],function(){
						return _status.event.choice;
					}).set('choice',get.attitude(player,target)>0?0:1);
					'step 1'
					if(result.index==0){
						target.draw(event.num);
					}
					else{
						target.chooseToDiscard(event.num,'he',true);
					}
					'step 2'
					if(target.isDamaged()){
						player.link(true);
					}
				},
				ai:{
					order:8,
					threaten:1.8,
					result:{
						player:function(player,target){
							if(target.isEnemiesOf(player)&&!target.countCards('he')) return 0;
							return 1;
						}
					}
				}
			},
			funan:{
				trigger:{global:['respondAfter','useCardAfter']},
				filter:function(event,player){
					if(!event.respondTo) return false;
					if(event.player==player) return false;
					if(player!=event.respondTo[0]) return false;
					if(get.itemtype(event.cards)!='cards') return false;
					if(['h','e','j'].contains(get.position(event.cards[0]))) return false;
					if(get.itemtype(event.respondTo[1])!='card') return false;
					if(['h','e','j'].contains(get.position(event.respondTo[1]))) return false;
					return true;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return true;
					if(player.hasSkill('funan_jiexun')&&player.storage.funan_jiexun==event.player) return true;
					if(event.cards.length>1) return true;
					return get.value(event.cards[0])>get.value(event.respondTo[1]);
				},
				content:function(){
					'step 0'
					if(!player.hasSkill('funan_jiexun')||player.storage.funan_jiexun!=trigger.player){
						trigger.player.gain(trigger.respondTo[1],'gain2');
						trigger.player.addTempSkill('funan_use');
						if(!trigger.player.storage.funan_use){
							trigger.player.storage.funan_use=[];
						}
						trigger.player.storage.funan_use.add(trigger.respondTo[1]);
					}
					'step 1'
					player.gain(trigger.cards,'gain2');
				},
				subSkill:{
					jiexun:{
						mark:'character',
						intro:{
							content:'你发动“复难”时，无须令$获得你使用的牌'
						},
						trigger:{global:'dieAfter'},
						silent:true,
						filter:function(event,player){
							return player.storage.funan_jiexun==event.player;
						},
						onremove:true,
						content:function(){
							player.removeSkill('funan_jiexun');
						}
					},
					use:{
						onremove:true,
						mod:{
							cardEnabled:function(card,player){
								if(player.storage.funan_use&&player.storage.funan_use.contains(card)){
									return false;
								}
							}
						}
					}
				}
			},
			jiexun:{
				trigger:{player:'phaseEnd'},
				// filter:function(event,player){
				// 	return game.hasPlayer(function(current){
				// 		return current.countCards('ej',{suit:'diamond'});
				// 	});
				// },
				init:function(player){
					player.storage.jiexun=0;
				},
				onremove:true,
				direct:true,
				content:function(){
					'step 0'
					var num1=game.countPlayer(function(current){
						return current.countCards('ej',{suit:'diamond'});
					});
					var num2=player.storage.jiexun;
					event.num1=num1;
					event.num2=num2;
					var str='令目标摸'+get.cnNumber(num1)+'张牌';
					if(num2){
						str+='，然后弃置'+get.cnNumber(num2)+'张牌；若目标因此法弃置了所有牌，则你失去“诫训”，然后你发动“复难”时，无须令其获得你使用的牌';
					}
					player.chooseTarget(get.prompt('jiexun'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						return _status.event.coeff*get.attitude(_status.event.player,target);
					}).set('coeff',num1>=num2?1:-1).set('prompt2',str);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('jiexun',target);
						if(event.num1){
							target.draw(event.num1);
						}
						player.storage.jiexun++;
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.num2){
						event.target.chooseToDiscard(event.num2,true,'he');
					}
					else{
						event.finish();
					}
					'step 3'
					if(!event.target.countCards('he')){
						player.removeSkill('jiexun');
						player.storage.funan_jiexun=event.target;
						player.addSkill('funan_jiexun');
					}
				}
			},
			zhuandui:{
				group:['zhuandui_respond','zhuandui_use'],
				subSkill:{
					use:{
						trigger:{player:'shaBegin'},
						check:function(event,player){
							return get.attitude(player,event.target)<0;
						},
						filter:function(event,player){
							return player.canCompare(event.target);
						},
						logTarget:'target',
						content:function(){
							'step 0'
							player.chooseToCompare(trigger.target);
							'step 1'
							if(result.bool){
								trigger.directHit=true;
							}
						}
					},
					respond:{
						trigger:{target:'shaBegin'},
						check:function(event,player){
							return get.effect(player,event.card,event.player,player)<0;
						},
						filter:function(event,player){
							return player.canCompare(event.player);
						},
						logTarget:'player',
						content:function(){
							'step 0'
							player.chooseToCompare(trigger.player);
							'step 1'
							if(result.bool){
								trigger.skipShan=true;
							}
						}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&current<0) return 0.7;
						}
					}
				}
			},
			tianbian:{
				trigger:{player:'chooseCardBegin'},
				check:function(event,player){
					return player.hasCard(function(card){
						var val=get.value(card);
						return val<0||(val<=4&&card.number>=11);
					});
				},
				filter:function(event){
					return event.type=='compare'&&!event.directresult;
				},
				content:function(){
					var cards=get.cards();
					cards[0].discard();
					cards[0].vanishtag.add('tianbian');
					trigger.directresult=cards;
					trigger.untrigger();
				},
				group:'tianbian_number',
				subSkill:{
					number:{
						trigger:{player:'compare',target:'compare'},
						filter:function(event,player){
							if(event.iwhile) return false;
							if(event.player==player){
								return get.suit(event.card1)=='heart';//&&event.card1.vanishtag.contains('tianbian');
							}
							else{
								return get.suit(event.card2)=='heart';//&&event.card2.vanishtag.contains('tianbian');
							}
						},
						silent:true,
						content:function(){
							game.log(player,'拼点牌点数视为','#y13');
							if(player==trigger.player){
								trigger.num1=13;
							}
							else{
								trigger.num2=13;
							}
						}
					}
				}
			},
			jianzheng:{
				trigger:{global:'useCard'},
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					return event.player!=player&&event.card.name=='sha'&&!event.targets.contains(player)&&
						get.distance(event.player,player,'attack')<=1;
				},
				direct:true,
				content:function(){
					"step 0"
					var effect=0;
					for(var i=0;i<trigger.targets.length;i++){
						effect-=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
					}
					if(effect>0){
						if(get.color(trigger.card)!='black'){
							effect=0;
						}
						else{
							effect=1;
						}
						if(trigger.targets.length==1){
							if(trigger.targets[0].hp==1){
								effect++;
							}
							if(effect>0&&trigger.targets[0].countCards('h')<player.countCards('h')){
								effect++;
							}
						}
						if(effect>0){
							effect+=6;
						}
					}
					player.chooseCard('h',get.prompt2('jianzheng',trigger.player)).set('ai',function(card){
						if(_status.event.effect>=0){
							var val=get.value(card);
							if(val<0) return 10-val;
							return _status.event.effect-val;
						}
						return 0;
					}).set('effect',effect).set('logSkill',['jianzheng',trigger.player]);
					"step 1"
					if(result.bool&&result.cards){
						event.card=result.cards[0];
						trigger.targets.length=0;
						trigger.untrigger();
					}
					else{
						event.finish();
					}
					"step 2"
					if(!event.isMine()) game.delayx();
					"step 3"
					if(event.card){
						player.logSkill('jianzheng',trigger.player);
						player.lose(result.cards,ui.special);
						game.broadcastAll(function(player){
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx,1000,'nobroadcast');
						},player);
					}
					"step 4"
					if(event.card){
						event.card.fix();
						ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					}
					"step 5"
					if(get.color(trigger.card)!='black'){
						trigger.targets.push(player);
						trigger.player.line(player);
						game.delay();
						trigger.trigger('useCard');
					}
				}
			},
			qingxian:{
				group:['qingxian_jilie','qingxian_rouhe'],
				ai:{
					threaten:0.8,
					maixie:true,
					maixie_hp:true,
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(target.hp>1&&target.hasFriend()) return 0.8;
							}
						}
					}
				},
				subSkill:{
					rouhe:{
						trigger:{player:'recoverEnd'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('qingxian'),function(card,player,target){
								return target!=player;
							}).set('ai',function(target){
								var att=get.attitude(_status.event.player,target);
								if(target.isHealthy()&&att>0) return 0;
								if(target.hp==1&&att!=0){
									if(att>0) return 9;
									else return 10;
								}
								else{
									return Math.sqrt(Math.abs(att));
								}
							}).set('prompt2','当你回复分数后，你可以令一名其他角色执行一项：失去1点分数，随机使用一张工具牌；回复1点分数，弃置一张工具牌。若其以此法使用或弃置的牌为科学，你回复1点分数');
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('qingxian',target);
								event.insert(lib.skill.qingxian.content_choose,{target:target,player:player});

							}
						}
					},
					jilie:{
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return event.source&&event.source.isIn()&&event.source!=player;
						},
						check:function(event,player){
							if(get.attitude(player,event.source)>0&&event.source.isHealthy()){
								return false;
							}
							return true;
						},
						logTarget:'source',
						prompt2:'当你受到扣分后，你可以令扣分来源执行一项：失去1点分数，随机使用一张工具牌；回复1点分数，弃置一张工具牌。若其以此法使用或弃置的牌为科学，你回复1点分数',
						content:function(){
							event.insert(lib.skill.qingxian.content_choose,{target:trigger.source,player:player});
						}
					}
				},
				content_choose:function(){
					'step 0'
					var index;
					if(get.attitude(player,target)>0){
						if(target.isHealthy()){
							index=0;
						}
						else{
							index=1;
						}
					}
					else{
						if(target.isHealthy()&&target.countCards('e')){
							index=1;
						}
						else{
							index=0;
						}
					}
					player.chooseControlList(
						['令'+get.translation(target)+'失去1点分数，随机使用一张工具牌',
						'令'+get.translation(target)+'回复1点分数，弃置一张工具牌'],
						true,function(event,player){
						return _status.event.index;
					}).set('index',index);
					'step 1'
					if(result.index==0){
						target.loseHp();
						event.card=get.cardPile(function(card){
							return get.type(card)=='equip'&&!target.isDisabled(get.subtype(card));
						});
						if(event.card){
							target.equip(event.card,true).set('delay',true);
							event.goto(3);
						}
						else{
							event.finish();
						}
					}
					else{
						target.recover();
						if(target.countCards('he',{type:'equip'})){
							target.chooseToDiscard('he',true,'弃置一张工具牌',function(card){
								return get.type(card)=='equip';
							}).set('ai',function(card){
								var val=-get.value(card);
								if(get.suit(card)=='club'){
									val+=_status.event.att*10;
								}
								return val;
							}).set('att',get.sgnAttitude(target,player));
						}
						else{
							event.finish();
						}
					}
					'step 2'
					if(result&&result.cards){
						event.card=result.cards[0];
					}
					'step 3'
					if(event.card&&get.suit(event.card)=='club'){
						player.recover();
					}
				}
			},
			juexiang:{
				trigger:{player:'dieBegin'},
				direct:true,
				skillAnimation:true,
				animationColor:'thunder',
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('juexiang'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target)/Math.sqrt(target.hp+1);
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0]
						player.logSkill('juexiang',target);
						target.addSkill(lib.skill.juexiang.derivation.randomGet());
						target.addTempSkill('juexiang_club',{player:'phaseBegin'});
					}
				},
				derivation:['juexiang_ji','juexiang_lie','juexiang_rou','juexiang_he'],
				subSkill:{
					ji:{
						mark:true,
						nopop:true,
						intro:{
							content:'info'
						},
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return event.source&&event.source.isIn()&&event.source!=player;
						},
						check:function(event,player){
							return get.attitude(player,event.source)<0;
						},
						logTarget:'source',
						content:function(){
							trigger.source.loseHp();
							var card=get.cardPile(function(card){
								return get.type(card)=='equip';
							});
							if(card){
								trigger.source.equip(card,true).set('delay',true);
							}
						},
						ai:{
							maixie_defend:true,
						}
					},
					lie:{
						mark:true,
						nopop:true,
						intro:{
							content:'info'
						},
						trigger:{player:'recoverEnd'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt2('juexiang_lie'),function(card,player,target){
								return target!=player;
							}).set('ai',function(target){
								return -get.attitude(player,target)/(1+target.hp);
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('juexiang_lie',target);
								target.loseHp();
								var card=get.cardPile(function(card){
									return get.type(card)=='equip';
								});
								if(card){
									target.equip(card,true).set('delay',true);
								}
							}
						}
					},
					rou:{
						mark:true,
						nopop:true,
						intro:{
							content:'info'
						},
						trigger:{player:'damageEnd'},
						filter:function(event,player){
							return event.source&&event.source.isIn()&&event.source!=player;
						},
						check:function(event,player){
							var att=get.attitude(player,event.source);
							if(player.isHealthy()){
								return att<0;
							}
							else{
								return att>0
							}
						},
						logTarget:'source',
						content:function(){
							trigger.source.recover();
							if(trigger.source.countCards('he',{type:'equip'})){
								trigger.source.chooseToDiscard('he',true,'弃置一张工具牌',function(card){
									return get.type(card)=='equip';
								});
							}
						},
						ai:{
							maixie_defend:true,
						}
					},
					he:{
						mark:true,
						nopop:true,
						intro:{
							content:'info'
						},
						trigger:{player:'recoverEnd'},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt2('juexiang_he'),function(card,player,target){
								return target!=player;
							}).set('ai',function(target){
								var att=get.attitude(_status.event.player,target);
								if(target.isHealthy()&&target.countCards('he')){
									return -att;
								}
								else{
									return 10*att/(1+target.hp);
								}
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.logSkill('juexiang_he',target);
								target.recover();
								if(target.countCards('he',{type:'equip'})){
									target.chooseToDiscard('he',true,'弃置一张工具牌',function(card){
										return get.type(card)=='equip';
									});
								}
							}
						}
					},
					club:{
						mark:true,
						nopop:true,
						intro:{
							content:'info'
						},
						mod:{
							targetEnabled:function(card,player,target){
								if(get.suit(card)=='club'&&player!=target){
									return false;
								}
							}
						}
					}
				}
			},
			bizhuan:{
				trigger:{player:'useCardAfter',target:'useCardToBegin'},
				filter:function(event,player){
					if(event.name!='useCard'&&event.player==event.target) return false;
					if(player.storage.bizhuan.length>=4) return false;
					return get.suit(event.card)=='spade';
				},
				init:function(player){
					player.storage.bizhuan=[];
				},
				intro:{
					content:'cards'
				},
				frequent:true,
				content:function(){
					var card=get.cards()[0];
					ui.special.appendChild(card);
					player.$draw(card);
					game.delay();
					player.storage.bizhuan.push(card);
					player.markSkill('bizhuan');
					event.trigger("addCardToStorage");
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.bizhuan.length;
					}
				}
			},
			tongbo:{
				trigger:{player:'phaseDrawAfter'},
				direct:true,
				filter:function(event,player){
					return player.storage.bizhuan&&player.storage.bizhuan.length&&event.num>0;
				},
				locked:false,
				content:function(){
					"step 0"
					var four=false;
					var nofour=!player.hasFriend();
					if(player.storage.bizhuan.length==4){
						var suits=['club','spade','heart','diamond'];
						var list=player.getCards('h').concat(player.storage.bizhuan);
						for(var i=0;i<list.length;i++){
							suits.remove(get.suit(list[i]));
							if(suits.length==0){
								four=true;
								break;
							}
						}
					}
					var suits2=[];
					if(four){
						suits2=['club','spade','heart','diamond'];
						for(var i=0;i<player.storage.bizhuan.length;i++){
							suits2.remove(get.suit(player.storage.bizhuan[i]));
						}
					}
					player.chooseCard('选择任意张手牌与“书”交换',[1,Math.min(player.countCards('h'),player.storage.bizhuan.length)]).set('ai',function(card){
						var val=get.value(card);
						if(_status.event.four&&!_status.event.nofour){
							var suits=_status.event.suits2.slice(0);
							for(var i=0;i<ui.selected.cards.length;i++){
								suits.remove(get.suit(ui.selected.cards[i]));
							}
							if(suits.contains(get.suit(card))){
								if(val<0) return 10;
								return 1;
							}
							else{
								return 0;
							}
						}
						else{
							if(val<0) return 10;
							if(_status.event.player.skipList.contains('phaseUse')){
								return val;
							}
							return 10-val;
						}
					}).set('four',four).set('suits2',suits2).set('nofour',nofour);
					event.four=four;
					event.nofour=nofour;
					"step 1"
					if(result.bool){
						player.logSkill('tongbo');
						player.lose(result.cards,ui.special,'toStorage');
						player.storage.bizhuan=player.storage.bizhuan.concat(result.cards);
						player.syncStorage('bizhuan');
						event.num=result.cards.length;
					}
					else{
						event.finish();
					}
					"step 2"
					var suits2={
						heart:0,
						diamond:0,
						spade:0,
						club:0
					};
					for(var i=0;i<player.storage.bizhuan.length;i++){
						suits2[get.suit(player.storage.bizhuan[i])]++;
					}
					player.chooseCardButton(player.storage.bizhuan,'选择'+event.num+'张牌作为手牌',event.num,true).set('ai',function(button){
						var val=get.value(button.link);
						if(_status.event.four||_status.event.nofour){
							var suits=get.copy(_status.event.suits2);
							for(var i=0;i<ui.selected.buttons.length;i++){
								suits[get.suit(ui.selected.buttons[i].link)]--;
							}
							var num=suits[get.suit(button.link)];
							if(_status.event.nofour){
								for(var i in suits){
									if(suits[i]==0) return val;
								}
								if(num!=2){
									if(val<=0) return 0.01;
									return val;
								}
								else{
									return 0;
								}
							}
							else{
								if(num>1){
									if(val<=0) return 0.01;
									return val;
								}
								else{
									return 0;
								}
							}
						}
						else{
							if(val<0) return -10;
							if(_status.event.player.skipList.contains('phaseUse')){
								return -val;
							}
							return val;
						}
					}).set('four',event.four).set('suits2',suits2).set('nofour',event.nofour);
					if(player==game.me&&!event.isMine()){
						game.delay(0.5);
					}
					"step 3"
					player.gain(result.links,'fromStorage');
					for(var i=0;i<result.links.length;i++){
						player.storage.bizhuan.remove(result.links[i]);
					}
					player.syncStorage('bizhuan');
					if(player==game.me&&_status.auto){
						game.delay(0.5);
					}
					"step 4"
					suits2=['club','spade','heart','diamond'];
					for(var i=0;i<player.storage.bizhuan.length;i++){
						suits2.remove(get.suit(player.storage.bizhuan[i]));
					}
					if(suits2.length>0){
						event.finish();
					}
					"step 5"
					event.cards=player.storage.bizhuan.slice(0);
					player.storage.bizhuan.length=0;
					player.unmarkSkill('bizhuan');
					"step 6"
					if(event.cards.length>1){
						player.chooseCardButton('将所有“书”交给任意名其他角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(event.cards.length==1){
						event._result={links:event.cards.slice(0),bool:true};
					}
					else{
						event.finish();
					}
					"step 7"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名其他角色',true,function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0])<0);
					}
					else{
						event.finish();
					}
					"step 8"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张','#g“书”');
						event.goto(6);
					}
				},
				ai:{
					combo:'bizhuan'
				}
			},
			shouxi:{
				trigger:{target:'shaBefore'},
				direct:true,
				init:function(player){
					player.storage.shouxi=[];
				},
				content:function(){
					'step 0'
					var list=['sha','shan','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman','lebu','bingliang','shandian'];
					for(var i=0;i<player.storage.shouxi.length;i++){
						list.remove(player.storage.shouxi[i]);
					}
					for(var i=0;i<list.length;i++){
						list[i]=[get.type(list[i]),'',list[i]];
					}
					player.chooseButton([get.prompt('shouxi',trigger.player),[list,'vcard']]).set('ai',function(button){
						return Math.random();
					});
					'step 1'
					if(result.bool){
						player.logSkill('shouxi');
						var name=result.links[0][2];
						var card=game.createCard(name,get.type(name),'');
						event.cardname=name;
						player.storage.shouxi.add(name);
						player.showCards(get.translation(player)+'声明了'+get.translation(name),card);
					}
					else{
						event.finish();
					}
					'step 2'
					var name=event.cardname;
					trigger.player.chooseToDiscard('守玺：弃置一张'+get.translation(name)+'，否则问对'+get.translation(player)+'无效',function(card){
						return card.name==_status.event.cardname;
					}).set('ai',function(card){
						if(_status.event.att<0){
							return 10-get.value(card);
						}
						return 0;
					}).set('att',get.attitude(trigger.player,player)).set('cardname',name);
					'step 3'
					if(result.bool==false){
						trigger.cancel();
					}
					else{
						trigger.player.gainPlayerCard(player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&get.attitude(player,target)<0){
								return 0.3;
							}
						}
					}
				}
			},
			huimin:{
				trigger:{player:'phaseEnd'},
				check:function(event,player){
					return game.countPlayer(function(current){
						if(current.countCards('h')<current.hp){
							return get.sgn(get.attitude(player,current));
						}
					})>=0;
				},
				content:function(){
					'step 0'
					event.list=game.filterPlayer(function(current){
						return current.countCards('h')<current.hp;
					}).sortBySeat();
					player.draw(event.list.length);
					'step 1'
					player.chooseTarget(true,function(card,player,target){
						var list=_status.event.list;
						return list.contains(target);
					},'选择一名角色作为分牌起点').set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<=0) return att;
						var list=_status.event.list;
						var index=list.indexOf(target);
						var prev;
						if(index==0){
							prev=list[list.length-1];
						}
						else{
							prev=list[index-1];
						}
						if(get.attitude(player,prev)<0) return att;
						return 0;
					}).set('list',event.list);
					'step 2'
					var index=event.list.indexOf(result.targets[0]);
					if(index<0) index=0;
					var tmp=event.list.splice(index);
					event.list=tmp.concat(event.list);
					player.line(result.targets,'green');
					player.chooseCard('h','选择要分配的手牌',event.list.length,true);
					'step 3'
					var cards=result.cards;
					player.lose(cards,ui.special);
					event.togain=cards;
					if(result.bool&&cards.length){
						var dialog=ui.create.dialog('惠民',cards,true);
						_status.dieClose.push(dialog);
						dialog.videoId=lib.status.videoId++;
						event.preResult=dialog.videoId;
						game.addVideo('cardDialog',null,['惠民',get.cardsInfo(cards),dialog.videoId]);
						game.broadcast(function(cards,id){
							var dialog=ui.create.dialog('惠民',cards,true);
							_status.dieClose.push(dialog);
							dialog.videoId=id;
						},cards,dialog.videoId);
					}
					else{
						event.finish();
					}
					'step 4'
					game.delay();
					'step 5'
					if(event.list.length&&event.togain.length){
						event.current=event.list.shift();
						var next=event.current.chooseButton(true,function(button){
							return get.value(button.link,_status.event.player);
						});
						next.set('dialog',event.preResult);
						next.set('closeDialog',false);
						next.set('dialogdisplay',true);
						next.set('cardFilter',event.togain.slice(0));
						next.set('filterButton',function(button){
							return _status.event.cardFilter.contains(button.link);
						})
					}
					else{
						for(var i=0;i<ui.dialogs.length;i++){
							if(ui.dialogs[i].videoId==event.preResult){
								var dialog=ui.dialogs[i];
								dialog.close();
								_status.dieClose.remove(dialog);
								break;
							}
						}
						if(event.togain.length){
							for(var i=0;i<dialog.buttons.length;i++){
								event.togain[i].discard();
							}
						}
						game.broadcast(function(id){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.close();
								_status.dieClose.remove(dialog);
							}
						},event.preResult);
						game.addVideo('cardDialog',null,event.preResult);
						event.finish();
					}
					'step 6'
					var card=result.links[0];
					if(card){
						event.current.gain(card);
						event.current.$gain2(card);
						event.togain.remove(card);
					}
					game.log(event.current,'选择了',card);
					game.delay();
					event.goto(5);
				}
			},
			fuzhu:{
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					return event.player!=player&&event.player.sex=='male'&&ui.cardPile.childElementCount<=player.hp*10;
				},
				check:function(event,player){
					return get.attitude(player,event.player)<0&&get.effect(event.player,{name:'sha'},player,player)>0;
				},
				logTarget:'player',
				skillAnimation:true,
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						if(ui.cardPile.childNodes[i].name=='sha'){
							list.push(ui.cardPile.childNodes[i]);
							ui.cardPile.childNodes[i].remove();
							i--;
						}
					}
					event.list=list;
					event.num=0;
					event.total=game.players.length+game.dead.length;
					'step 1'
					if(event.list.length&&event.num<event.total&&trigger.player.isAlive()){
						event.num++;
						player.useCard(event.list.shift(),trigger.player);
						event.redo();
					}
					'step 2'
					var cards=get.cards(ui.cardPile.childElementCount+1);
					for(var i=0;i<cards.length;i++){
						ui.cardPile.insertBefore(cards[i],ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
					}
					for(var i=0;i<event.list.length;i++){
						ui.cardPile.insertBefore(event.list[i],ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
					}
				},
				ai:{
					threaten:1.5
				}
			},
			wengua:{
				global:'wengua2'
			},
			wengua2:{
				enable:'phaseUse',
				filter:function(event,player){
					if(player.hasSkill('wengua3')) return false;
					return player.countCards('h')&&game.hasPlayer(function(current){
						return current.hasSkill('wengua');
					});
				},
				direct:true,
				delay:0,
				filterCard:true,
				discard:false,
				lose:false,
				position:'he',
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(current){
						return current.hasSkill('wengua');
					});
					var str='将一张牌交给'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				check:function(card){
					if(card.name=='sha') return 5;
					return 8-get.value(card);
				},
				content:function(){
					"step 0"
					var targets=game.filterPlayer(function(current){
						return current.hasSkill('wengua');
					});
					if(targets.length==1){
						event.target=targets[0];
						event.goto(2);
					}
					else if(targets.length>0){
						player.chooseTarget(true,'选择【问卦】的目标',function(card,player,target){
							return _status.event.list.contains(target);
						}).set('list',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.attitude(player,target);
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool&&result.targets.length){
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.target){
						player.logSkill('wengua',event.target);
						player.addTempSkill('wengua3');
						event.card=cards[0];
						if(event.target!=player){
							player.give(cards,event.target);
						}
					}
					else{
						event.finish();
					}
					"step 3"
					if(event.target.getCards('he').contains(event.card)){
						event.target.chooseControlList('问卦','将'+get.translation(event.card)+'置于牌堆顶','将'+get.translation(event.card)+'置于牌堆底',event.target==player,function(){
						    if(get.attitude(event.target,player)<0) return 2;
							return 1;
						});
					}
					else{
						event.finish();
					}
					"step 4"
					event.index=result.index;
					if(event.index==0||event.index==1){
					event.target.lose(event.card,ui.special);
					game.broadcastAll(function(player){
						var cardx=ui.create.card();
						cardx.classList.add('infohidden');
						cardx.classList.add('infoflip');
						player.$throw(cardx,1000,'nobroadcast');
					},event.target);
					}
					else event.finish();
					"step 5"
					game.delay();
					"step 6"
					event.card.fix();
					if(event.index==1){
						game.log(event.target,'将获得的牌置于牌堆底');
						ui.cardPile.appendChild(event.card);
						if(ui.cardPile.childElementCount==1||player==event.target){
							player.draw();
						}
						else{
						    game.asyncDraw([player,target],null,null);
						}
					}
					else if(event.index==0){
						game.log(player,'将获得的牌置于牌堆顶');
						ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
						if(ui.cardPile.childElementCount==1||player==event.target){
							player.draw('bottom');
						}
						else{
							game.asyncDraw([player,target],null,null,true);
						}
					}
				},
				ai:{
					order:2,
					threaten:1.5,
					result:{
						player:function(player,target){
							var target=game.findPlayer(function(current){
								return current.hasSkill('wengua');
							});
							if(target){
								return get.attitude(player,target);
							}
						}
					}
				}
			},
			wengua3:{},
			daiyan:{
				trigger:{player:'phaseEnd'},
				direct:true,
				init:function(){
					lib.onwash.push(function(){
						delete _status.daiyan_notao;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('daiyan'),function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att>0){
							if(_status.daiyan_notao){
								return 0;
							}
							else{
								if(target==player.storage.daiyan) return 0;
								return 2*att/Math.sqrt(1+target.hp);
							}
						}
						else{
							if(_status.daiyan_notao){
								if(target==player.storage.daiyan) return -3*att;
								return -att;
							}
							else{
								return 0;
							}
						}
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('daiyan',target);
						var tao=get.cardPile2(function(card){
							return get.suit(card)=='heart'&&get.type(card)=='basic';
						});
						if(tao){
							target.gain(tao,'gain2');
						}
						else{
							_status.daiyan_notao=true;
						}
						if(target==player.storage.daiyan){
							target.loseHp();
						}
						player.storage.daiyan=target;
					}
					else{
						delete player.storage.daiyan;
					}
				},
				ai:{
					threaten:1.5,
					expose:0.2
				}
			},
			fumian:{
				trigger:{player:'phaseBegin'},
				direct:true,
				content:function(){
					'step 0'
					if(player.storage.fumian_choice=='draw'){
						player.chooseControlList(get.prompt('fumian'),'摸牌阶段多摸一张牌','使用红色牌可以多选择两个目标（限一次）',function(event,player){
							if(player.hp==1||player.countCards('h')<=1) return 0;
							return 1;
						});
					}
					else if(player.storage.fumian_choice=='red'){
						player.chooseControlList(get.prompt('fumian'),'摸牌阶段多摸两张牌','使用红色牌可以多选择一个目标（限一次）',function(event,player){
							return 0;
						});
					}
					else{
						player.chooseControlList(get.prompt('fumian'),'摸牌阶段多摸一张牌','使用红色牌可以多选择一个目标（限一次）',function(event,player){
							if(player.hp==1||player.countCards('h')<player.hp) return 0;
							return 1;
						});
					}
					'step 1'
					if(player.storage.fumian_choice=='draw'){
						if(result.index==0){
							player.storage.fumian_draw=1;
						}
						else if(result.index==1){
							player.storage.fumian_red=2;
							delete player.storage.fumian_choice;
						}
					}
					else if(player.storage.fumian_choice=='red'){
						if(result.index==0){
							player.storage.fumian_draw=2;
							delete player.storage.fumian_choice;
						}
						else if(result.index==1){
							player.storage.fumian_red=1;
						}
					}
					else{
						if(result.index==0){
							player.storage.fumian_draw=1;
							player.storage.fumian_choice='draw';
						}
						else if(result.index==1){
							player.storage.fumian_red=1;
							player.storage.fumian_choice='red';
						}
					}
					if(result.index==0){
						player.logSkill('fumian');
						player.addTempSkill('fumian_draw');
					}
					else if(result.index==1){
						player.logSkill('fumian');
						player.addTempSkill('fumian_red');
					}
				},
				ai:{
					threaten:1.3,
				},
				subSkill:{
					draw:{
						trigger:{player:'phaseDrawBegin'},
						forced:true,
						popup:false,
						onremove:true,
						filter:function(event,player){
							return typeof player.storage.fumian_draw=='number';
						},
						content:function(){
							trigger.num+=player.storage.fumian_draw;
						}
					},
					red2:{},
					red:{
						trigger:{player:'useCard'},
						direct:true,
						mark:true,
						onremove:true,
						intro:{
							content:'你使用红色牌可以多选择#个目标（限一次）'
						},
						filter:function(event,player){
							if(get.color(event.card)!='red') return false;
							if(player.hasSkill('fumian_red2')) return false;
							var info=get.info(event.card);
							if(info.allowMultiple==false) return false;
							if(event.targets&&!info.multitarget){
								if(game.hasPlayer(function(current){
									return lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current)&&!event.targets.contains(current);
								})){
									return true;
								}
							}
							return false;
						},
						content:function(){
							'step 0'
							var prompt2='额外指定';
							if(player.storage.fumian_red==2){
								prompt2+='至多两';
							}
							else{
								prompt2+='一';
							}
							prompt2+='名'+get.translation(trigger.card)+'的目标'
							player.chooseTarget([1,player.storage.fumian_red],get.prompt('fumian'),function(card,player,target){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								if(trigger.targets.contains(target)) return false;
								return lib.filter.targetEnabled2(trigger.card,player,target)&&lib.filter.targetInRange(trigger.card,player,target);
							}).set('prompt2',prompt2).set('ai',function(target){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								return get.effect(target,trigger.card,player,player);
							});
							'step 1'
							if(result.bool){
								if(!event.isMine()) game.delayx();
								event.targets=result.targets;
							}
							else{
								event.finish();
							}
							'step 2'
							if(event.targets){
								player.logSkill('fumian',event.targets);
								trigger.targets.addArray(event.targets);
								player.addTempSkill('fumian_red2');
							}
						}
					}
				}
			},
			zhongjian:{
				enable:'phaseUse',
				usable:2,
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					if(player.getStat('skill').zhongjian&&!player.hasSkill('zhongjian2')) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('h')>current.hp;
					});
				},
				filterCard:true,
				check:function(){
					return Math.random();
				},
				discard:false,
				lose:false,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>target.hp;
				},
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					var num=target.countCards('h')-target.hp;
					if(num<=0){
						event.finish();
						return;
					}
					var hs=target.getCards('h').randomGets(num);
					target.showCards(hs);
					var colors=[];
					var numbers=[];
					for(var i=0;i<cards.length;i++){
						colors.add(get.color(cards[i]));
						numbers.add(get.number(cards[i]));
					}
					event.bool1=false;
					event.bool2=false;
					for(var i=0;i<hs.length;i++){
						if(!event.bool1&&colors.contains(get.color(hs[i]))) event.bool1=true;
						if(!event.bool2&&numbers.contains(get.number(hs[i]))) event.bool2=true;
					}
					'step 2'
					if(event.bool1){
						player.chooseControl(function(event,player){
							return _status.event.bool?0:1;
						}).set('bool',(get.attitude(player,target)>=0||player.countCards('h')<target.countCards('h'))).set('choiceList',['摸一张牌','弃置'+get.translation(target)+'一张牌']);
					}
					else{
						event.goto(4);
					}
					'step 3'
					if(result&&typeof result.index=='number'){
						if(result.index==0) player.draw();
						else player.discardPlayerCard(target,'he',true);
					}
					'step 4'
					if(event.bool2){
						player.addTempSkill('zhongjian2');
					}
					if(!event.bool1&&!event.bool2){
						if(player.hasSkill('caishi')&&typeof player.storage.caishi=='number'){
							player.storage.caishi--;
							if(player.storage.caishi<=0){
								player.unmarkSkill('caishi');
								if(player.storage.caishi<0){
									player.markSkill('zhongjian');
								}
							}
							else{
								player.updateMarks();
							}
						}
						else{
							player.unmarkSkill('zhongjian');
							if(player.hasSkill('zhongjian3')){
								player.storage.zhongjian3--;
							}
							else{
								player.addSkill('zhongjian3');
							}
						}
						player.popup('杯具');
					}
				},
				intro:{
					content:function(storage,player){
						return '手牌上限'+player.storage.caishi;
					},
					markcount:function(storage,player){
						return player.storage.caishi;
					}
				},
				ai:{
					order:8,
					result:{
						player:function(player,target){
							var num=target.countCards('h')-target.hp;
							if(get.attitude(player,target)<0) return 1.5*num;
							return num;
						}
					}
				}
			},
			zhongjian2:{},
			zhongjian3:{
				init:function(player){
					player.storage.zhongjian3=-1;
				},
				mark:true,
				onremove:true,
				intro:{
					content:'手牌上限#'
				},
				mod:{
					maxHandcard:function(player,num){
						if(typeof player.storage.zhongjian3=='number') return num+player.storage.zhongjian3;
					}
				}
			},
			caishi:{
				trigger:{player:'phaseDrawBegin'},
				direct:true,
				init:function(player){
					player.storage.caishi=0;
				},
				onremove:function(player){
					player.unmarkSkill('zhongjian');
					delete player.storage.caishi;
				},
				intro:{
					content:function(storage){
						if(storage>0) return '手牌上限+'+storage;
						if(storage<0) return '手牌上限'+storage;
						return '手牌上限无变化';
					},
				},
				content:function(){
					'step 0'
					if(player.isHealthy()){
						event.type=0;
						player.chooseBool(get.prompt('caishi'),'手牌上限+1，然后本回合你的牌不能对其他角色使用',function(event,player){
							return player.skipList.contains('phaseUse')||!player.needsToDiscard(1);
						});
					}
					else{
						event.type=1;
						player.chooseControlList(get.prompt('caishi'),'手牌上限+1，然后本回合你的牌不能对其他角色使用','回复1点分数，然后本回合你的牌不能对自己使用',function(){
							return 1;
						});
					}
					'step 1'
					if(event.type){
						if(result.control!='cancel2'){
							player.logSkill('caishi');
							if(result.index==0){
								player.addTempSkill('caishi2');
								player.storage.caishi++;
								if(player.storage.caishi>=0){
									player.unmarkSkill('zhongjian');
									if(player.storage.caishi>0){
										player.markSkill('caishi');
									}
								}
								else{
									player.updateMarks();
								}
							}
							else if(result.index==1){
								player.recover();
								player.addTempSkill('caishi3');
							}
						}
					}
					else{
						if(result.bool){
							player.logSkill('caishi');
							player.addTempSkill('caishi2');
							player.storage.caishi++;
							if(player.storage.caishi>=0){
								player.unmarkSkill('zhongjian');
								if(player.storage.caishi>0){
									player.markSkill('caishi');
								}
							}
							else{
								player.updateMarks();
							}
						}
					}
				},
				mod:{
					maxHandcard:function(player,num){
						if(typeof player.storage.caishi=='number') return num+player.storage.caishi;
					},
				}
			},
			caishi2:{
				mod:{
					playerEnabled:function(card,player,target){
						if(player!=target) return false;
					}
				}
			},
			caishi3:{
				mod:{
					playerEnabled:function(card,player,target){
						if(player==target) return false;
					}
				}
			},
			ttt:{
				mod:{
					targetEnabled:function(card){
						if(card.name=='tao') return false;
					}
				}
			},
			jyzongshi:{
				audio:2,
				trigger:{player:['chooseToCompareAfter','compareMultipleAfter'],target:['chooseToCompareAfter','compareMultipleAfter']},
				filter:function(event,player){
					if(event.preserve) return false;
					if(player==event.player){
						if(event.card1.number>event.card2.number){
							return !get.owner(event.card2);
						}
						else{
							return !get.owner(event.card1);
						}
					}
					else{
						if(event.card1.number<event.card2.number){
							return !get.owner(event.card1);
						}
						else{
							return !get.owner(event.card2);
						}
					}
				},
				check:function(event,player){
					if(player==event.player){
						if(event.card1.number>event.card2.number){
							return event.card2.name!='du';
						}
						else{
							return event.card1.name!='du';
						}
					}
					else{
						if(event.card1.number<event.card2.number){
							return event.card1.name!='du';
						}
						else{
							return event.card2.name!='du';
						}
					}
				},
				content:function(){
					if(player==trigger.player){
						if(trigger.card1.number>trigger.card2.number){
							player.gain(trigger.card2,'gain2');
						}
						else{
							player.gain(trigger.card1,'gain2');
						}
					}
					else{
						if(trigger.card1.number<trigger.card2.number){
							player.gain(trigger.card1,'gain2');
						}
						else{
							player.gain(trigger.card2,'gain2');
						}
					}
				}
			},
			xinsidi:{
				trigger:{global:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					if(event.player==player) return false;
					return player.countCards('e')>0;
				},
				content:function(){
					'step 0'
					var goon=true;
					if(get.attitude(player,trigger.player)>=-0.8) goon=false;
					else if(trigger.player.countCards('h')<=3) goon=false;
					else if(player.countCards('h','shan')==0) goon=false;
					var es=player.getCards('e');
					var color=[];
					for(var i=0;i<es.length;i++){
						color.add(get.color(es[i]));
					}
					if(color.length==2) color='all';
					else color=color[0];
					player.chooseToDiscard(get.prompt('xinsidi',trigger.player),'he',function(card){
						if(get.type(card)=='basic') return false;
						if(_status.event.color=='all') return true;
						return get.color(card)==_status.event.color;
					}).set('ai',function(card){
						if(_status.event.goon) return 6-get.value(card);
						return 0;
					}).set('goon',goon).set('color',color).set('logSkill',['xinsidi',trigger.player]);
					'step 1'
					if(result.bool){
						trigger.player.addSkill('xinsidi2');
						trigger.player.storage.xinsidi2=get.color(result.cards[0]);
						trigger.player.storage.xinsidi4=player;
						trigger.player.syncStorage('xinsidi2');
					}
				},
				ai:{
					threaten:1.5
				},
			},
			xinsidi2:{
				mark:true,
				group:['xinsidi2_sha','xinsidi2_end'],
				subSkill:{
					sha:{
						trigger:{player:'shaBegin'},
						forced:true,
						popup:false,
						content:function(){
							player.storage.xinsidi3=true;
						}
					},
					end:{
						trigger:{player:'phaseUseAfter'},
						forced:true,
						popup:false,
						audio:false,
						content:function(){
							if(!player.storage.xinsidi3&&player.storage.xinsidi4.isAlive()){
								player.storage.xinsidi4.useCard({name:'sha'},player);
							}
							delete player.storage.xinsidi2;
							delete player.storage.xinsidi3;
							delete player.storage.xinsidi4;
							player.removeSkill('xinsidi2');
						}
					}
				},
				mod:{
					cardEnabled:function(card,player){
						if(get.color(card)==player.storage.xinsidi2) return false;
					},
					cardUsable:function(card,player){
						if(get.color(card)==player.storage.xinsidi2) return false;
					},
					cardRespondable:function(card,player){
						if(get.color(card)==player.storage.xinsidi2) return false;
					},
					cardSavable:function(card,player){
						if(get.color(card)==player.storage.xinsidi2) return false;
					}
				},
				intro:{
					content:'不能使用或打出$的牌'
				}
			},
			taoluan:{
				enable:'chooseToUse',
				filter:function(event,player){
					return !player.hasSkill('taoluan3')&&player.countCards('he')>0;
				},
				init:function(player){
					player.storage.taoluan=[];
				},
				chooseButton:{
					dialog:function(event,player){
						var list=['sha','tao','jiu','taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
						for(var i=0;i<player.storage.taoluan.length;i++){
							list.remove(player.storage.taoluan[i]);
						}
						for(var i=0;i<list.length;i++){
							if(i<3){
								list[i]=['基本','',list[i]];
							}
							else{
								list[i]=['动作','',list[i]];
							}
						}
						if(list.length==0){
							return ui.create.dialog('滔乱已无可用牌');
						}
						return ui.create.dialog([list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='tao'){
							return 3+Math.random();
						}
						if(button.link[2]=='sha'){
							return 2+Math.random();
						}
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						if(button.link[2]=='jiu'){
							if(get.effect(player,{name:'jiu'})>0){
								return 1+Math.random();
							}
							return 0;
						}
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function(links,player){
						return {
							filterCard:true,
							selectCard:1,
							popname:true,
							check:function(card){
								return 6-get.value(card);
							},
							position:'he',
							viewAs:{name:links[0][2]},
							onuse:function(result,player){
								player.storage.taoluan.add(result.card.name);
							},
						}
					},
					prompt:function(links,player){
						return '选择'+get.translation(links[0][2])+'的目标';
					}
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0;
						}
					},
					threaten:1.9,
				},
				group:['taoluan2','taoluan4']
			},
			taoluan2:{
				trigger:{player:['useCardAfter','respondAfter']},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.skill=='taoluan_backup'||event.skill=='taoluan5'||event.skill=='taoluan4';
				},
				content:function(){
					'step 0'
					player.chooseTarget(true,function(card,player,target){
						return target!=player;
					},'滔乱<br><br><div class="text center">令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别相同的牌；2.你失去1点分数').set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0){
							if(get.attitude(target,player)>0){
								return target.countCards('h');
							}
							return target.countCards('h')/2;
						}
						return 0;
					});
					'step 1'
					var target=result.targets[0];
					event.target=target;
					player.line(target,'green');
					var type=get.type(trigger.card,'trick');
					target.chooseCard('滔乱<br><br><div class="text center">交给'+get.translation(player)+'一张不为'+get.translation(type)+'牌的牌，或令其失去一点分数且滔乱无效直到回合结束','he',function(card,player,target){
						return get.type(card,'trick')!=_status.event.cardType;
					}).set('cardType',type).set('ai',function(card){
						if(_status.event.att){
							return 11-get.value(card);
						}
						return 0;
					}).set('att',get.attitude(target,player)>0);
					'step 2'
					var target=event.target;
					if(result.bool){
						player.gain(result.cards,target);
						target.$give(result.cards,player);
					}
					else{
						player.addTempSkill('taoluan3');
						player.loseHp();
					}
				}
			},
			taoluan3:{},
			taoluan4:{
				prompt:'将一张牌当做答使用',
				enable:'chooseToRespond',
				filter:function(event,player){
					if(event.parent.name!='sha') return false;
					return !player.storage.taoluan.contains('shan')&&!player.hasSkill('taoluan3');
				},
				onuse:function(result,player){
					player.storage.taoluan.add('shan');
				},
				filterCard:true,
				position:'he',
				selectCard:1,
				viewAs:{name:'shan'},
				ai:{
					skillTagFilter:function(player){
						return !player.storage.taoluan.contains('shan')&&!player.hasSkill('taoluan3');
					},
					threaten:1.5,
					respondShan:true,
				}
			},
			taoluan5:{
				/*enable:'chooseToUse',
				filter:function(event,player){
					return event.type=='dying'&&!player.storage.taoluan.contains('tao');
				},
				onuse:function(result,player){
					player.storage.taoluan.add('tao');
				},
				filterCard:true,
				position:'he',
				selectCard:1,
				viewAs:{name:'tao'},
				ai:{
					skillTagFilter:function(player){
						return !player.storage.taoluan.contains('tao');
					},
					threaten:1.5,
					save:true,
				}*/
			},
			taoluan_backup:{},
			jishe:{
				enable:'phaseUse',
				filter:function(event,player){
					return player.getHandcardLimit()>0;
				},
				init:function(player){
					player.storage.jishe=0;
				},
				usable:20,
				content:function(){
					player.draw();
					player.storage.jishe++;
				},
				ai:{
					order:10,
					result:{
						player:function(player){
							if(!player.needsToDiscard(1)){
								return 1;
							}
							return 0;
						}
					}
				},
				mod:{
					maxHandcard:function(player,num){
						return num-player.storage.jishe;
					}
				},
				group:['jishe2','jishe3']
			},
			jishe2:{
				trigger:{player:'phaseAfter'},
				silent:true,
				content:function(){
					player.storage.jishe=0;
				}
			},
			jishe3:{
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					return game.hasPlayer(function(current){
						return !current.isLinked();
					});
				},
				content:function(){
					"step 0"
					var num=game.countPlayer(function(current){
						return !current.isLinked();
					});
					player.chooseTarget(get.prompt('jishe'),[1,Math.min(num,player.hp)],function(card,player,target){
						return !target.isLinked();
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('jishe',result.targets);
						event.targets=result.targets;
						event.num=0;
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.num<event.targets.length){
						event.targets[event.num].link();
						event.num++;
						event.redo();
					}
				},
				ai:{
					expose:0.3
				}
			},
			lianhuo:{
				trigger:{player:'damageBegin'},
				forced:true,
				filter:function(event,player){
					return player.isLinked()&&event.notLink()&&event.nature=='fire';
				},
				content:function(){
					trigger.num++;
				}
			},
			huisheng:{
				trigger:{player:'damageBefore'},
				direct:true,
				filter:function(event,player){
					if(!player.countCards('he')) return false;
					if(!event.source||!event.source.isIn()) return false;
					if(player.storage.huisheng.contains(event.source)) return false;
					return true;
				},
				init:function(player){
					player.storage.huisheng=[];
				},
				content:function(){
					'step 0'
					var att=(get.attitude(player,trigger.source)>0);
					var goon=false;
					if(player.hp==1){
						goon=true;
					}
					else{
						var he=player.getCards('he');
						var num=0;
						for(var i=0;i<he.length;i++){
							if(get.value(he[i])<8){
								num++;
								if(num>=2){
									goon=true;break;
								}
							}
						}
					}
					player.chooseCard('he',[1,player.countCards('he')],get.prompt2('huisheng',trigger.source)).set('ai',function(card){
						if(_status.event.att){
							return 10-get.value(card);
						}
						if(_status.event.goon){
							return 8-get.value(card);
						}
						if(!ui.selected.cards.length){
							return 7-get.value(card);
						}
						return 0;
					}).set('goon',goon).set('att',att);
					'step 1'
					if(result.bool){
						player.logSkill('huisheng',trigger.source);
						game.delay();
						event.num=result.cards.length;
						var goon=false;
						if(event.num>2||get.attitude(trigger.source,player)>=0){
							goon=true;
						}
						var forced=false;
						var str='获得其中一张牌并防止扣分';
						if(trigger.source.countCards('he')<event.num){
							forced=true;
						}
						else{
							str+='，或取消并弃置'+get.cnNumber(result.cards.length)+'张牌';
						}
						trigger.source.chooseButton([str,result.cards],forced).set('ai',function(button){
							if(_status.event.goon){
								return get.value(button.link);
							}
							return get.value(button.link)-8;
						}).set('goon',goon);
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool){
						var card=result.links[0];
						trigger.source.gain(card,player);
						if(get.position(card)=='e'){
							player.$give(card,trigger.source);
						}
						else{
							player.$giveAuto(card,trigger.source);
						}
						trigger.cancel();
						player.storage.huisheng.push(trigger.source);
					}
					else{
						trigger.source.chooseToDiscard(event.num,true,'he');
					}
				}
			},
			qinqing:{
				mode:['identity','versus'],
				available:function(mode){
					if(mode=='versus'&&_status.mode!='four') return false;
				},
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					var zhu=get.zhu(player);
					if(!zhu||!zhu.isZhu) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current!=zhu&&get.distance(current,zhu,'attack')<=1;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('qinqing'),[1,Infinity],function(card,player,target){
						var zhu=get.zhu(player);
						if(target==player||target==zhu) return false;
						return get.distance(target,zhu,'attack')<=1;
					}).set('ai',function(target){
						var he=target.countCards('he')
						if(get.attitude(_status.event.player,target)>0){
							if(he==0) return 1;
							if(target.countCards('h')>get.zhu(player).countCards('h')) return 1;
						}
						else{
							if(he>0) return 1;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						event.targets=result.targets.slice(0).sortBySeat();
						event.list=event.targets.slice(0);
						player.logSkill('qinqing',event.targets);
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets.length){
						var target=event.targets.shift();
						if(target.countCards('he')){
							player.discardPlayerCard(target,'he',true);
						}
						target.draw();
						event.redo();
					}
					'step 3'
					var num=0;
					var zhu=get.zhu(player);
					if(zhu){
						var nh=zhu.countCards('h');
						for(var i=0;i<event.list.length;i++){
							if(event.list[i].countCards('h')>nh){
								num++;
							}
						}
						if(num){
							player.draw(num);
						}
					}
				},
				ai:{
					threaten:1.2
				}
			},
			guizao:{
				trigger:{player:'phaseDiscardEnd'},
				direct:true,
				filter:function(event,player){
					if(event.cards&&event.cards.length>1){
						var suits=[];
						for(var i=0;i<event.cards.length;i++){
							var suit=get.suit(event.cards[i]);
							if(suits.contains(suit)){
								return false;
							}
							else{
								suits.push(suit);
							}
						}
						return true;
					}
					return false;
				},
				content:function(){
					player.chooseDrawRecover(get.prompt('guizao')).logSkill='guizao';
				},
			},
			jiyu:{
				enable:'phaseUse',
				locked:false,
				filter:function(event,player){
					var hs=player.getCards('h');
					for(var i=0;i<hs.length;i++){
						if(event.filterCard(hs[i],player)){
							return true;
						}
					}
					return false;
				},
				filterTarget:function(card,player,target){
					return target.countCards('h')&&!player.storage.jiyu.contains(target);
				},
				content:function(){
					'step 0'
					var spade=true;
					if(player.isTurnedOver()||get.attitude(target,player)>0||target.hp<=2){
						spade=false;
					}
					target.chooseToDiscard('h',true).set('ai',function(card){
						if(get.suit(card)=='spade'){
							if(_status.event.spade){
								return 10-get.value(card);
							}
							else{
								return -10-get.value(card);
							}
						}
						if(_status.event.getParent().player.storage.jiyu2.contains(get.suit(card))){
							return -3-get.value(card);
						}
						return -get.value(card);
					}).set('spade',spade);
					'step 1'
					var card=result.cards[0];
					if(get.suit(card)=='spade'){
						player.turnOver();
						target.loseHp();
					}
					player.storage.jiyu.push(target);
					player.storage.jiyu2.add(get.suit(card));
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(player.isTurnedOver()||target.countCards('h')<=3) return -1;
							return 0;
						}
					}
				},
				group:'jiyu2',
				mod:{
					cardEnabled:function(card,player){
						if(player.storage.jiyu2&&player.storage.jiyu2.contains(get.suit(card))) return false;
					}
				}
			},
			jiyu2:{
				trigger:{player:['phaseUseBegin','phaseAfter']},
				silent:true,
				content:function(){
					player.storage.jiyu=[];
					player.storage.jiyu2=[];
				}
			},
			jiaozhao:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				check:function(card){
					return 8-get.value(card);
				},
				filterCard:true,
				discard:false,
				lose:false,
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					if(player.storage.jiaozhao2){
						event.target=player;
					}
					else{
						var targets=game.filterPlayer();
						targets.remove(player);
						targets.sort(function(a,b){
							return Math.max(1,get.distance(player,a))-Math.max(1,get.distance(player,b));
						});
						var distance=Math.max(1,get.distance(player,targets[0]));
						for(var i=1;i<targets.length;i++){
							if(Math.max(1,get.distance(player,targets[i]))>distance){
								targets.splice(i);break;
							}
						}
						player.chooseTarget(true,function(card,player,target){
							return _status.event.targets.contains(target);
						}).set('ai',function(target){
							return get.attitude(_status.event.player,target);
						}).set('targets',targets);
					}
					'step 2'
					if(!event.target){
						event.target=result.targets[0];
						player.line(result.targets,'green');
					}
					if(!event.target){
						event.finish();
						return;
					}
					var list=['sha','sha','sha','shan','tao','jiu'];
					if(player.storage.jiaozhao1){
						list=list.concat(['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman']);
					}
					for(var i=0;i<list.length;i++){
						if(i<=6){
							if(i==1){
								list[i]=['基本','',list[i],'fire'];
							}
							else if(i==2){
								list[i]=['基本','',list[i],'thunder'];
							}
							else{
								list[i]=['基本','',list[i]];
							}
						}
						else{
							list[i]=['动作','',list[i]];
						}
					}
					var choice;
					if(get.attitude(event.target,player)<=0){
						choice='shan';
					}
					else{
						if(!player.storage.jiaozhao1){
							var nh=player.countCards('h');
							if(nh>=5){
								choice='jiu';
							}
							else if(nh<=2){
								choice='sha';
							}
							else{
								choice=Math.random()<0.5?'sha':'jiu';
							}
						}
						else{
							var recover=0,lose=1,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(!players[i].isOut()&&players[i]!=player){
									if(players[i].hp<players[i].maxHp){
										if(get.attitude(player,players[i])>0){
											if(players[i].hp<2){
												lose--;
												recover+=0.5;
											}
											lose--;
											recover++;
										}
										else if(get.attitude(player,players[i])<0){
											if(players[i].hp<2){
												lose++;
												recover-=0.5;
											}
											lose++;
											recover--;
										}
									}
									else{
										if(get.attitude(player,players[i])>0){
											lose--;
										}
										else if(get.attitude(player,players[i])<0){
											lose++;
										}
									}
								}
							}
							if(lose>recover&&lose>0){
								choice=Math.random()<0.7?'nanman':'wanjian';
							}
							else if(lose<recover&&recover>0){
								choice='taoyuan';
							}
							else{
								choice=Math.random()<0.5?'wuzhong':'shunshou';
							}
						}
					}
					event.target.chooseButton(['矫诏',[list,'vcard']],true).set('ai',function(button){
						return button.link[2]==_status.event.choice?1:0;
					}).set('choice',choice);
					'step 3'
					var chosen=result.links[0][2];
					var nature=result.links[0][3];
					var fakecard={name:chosen,suit:cards[0].suit,number:cards[0].number,nature:nature};
					event.target.showCards(game.createCard(fakecard),get.translation(event.target)+'声明了'+get.translation(chosen));
					player.storage.jiaozhao=cards[0];
					player.storage.jiaozhao_card=fakecard;
					game.broadcastAll(function(name){
						lib.skill.jiaozhao2.viewAs=fakecard;
					},fakecard);
				},
				ai:{
					order:9,
					result:{
						player:1
					}
				},
				intro:{
					content:function(storage,player){
						if(player.storage.jiaozhao2){
							return '出牌阶段限一次，你可以展示一张手牌，然后你声明一张基本牌或普通动作牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用且你不能被选择为目标';
						}
						else{
							return '出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌或普通动作牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用且你不能被选择为目标';
						}
					}
				},
				group:['jiaozhao2','jiaozhao3']
			},
			jiaozhao2:{
				enable:'phaseUse',
				audio:'jiaozhao',
				filter:function(event,player){
					if(!player.storage.jiaozhao) return false;
					var name=player.storage.jiaozhao_card.name;
					if(name=='tao'||name=='shan'||name=='wuzhong'||name=='jiu') return false;
					return player.getCards('h').contains(player.storage.jiaozhao);
				},
				filterCard:function(card,player){
					return card==player.storage.jiaozhao;
				},
				selectCard:-1,
				popname:true,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return lib.filter.filterTarget(player.storage.jiaozhao_card,player,target);
				},
				check:function(card){
					return 8-get.value(card);
				},
				ai:{
					order:6
				}
			},
			jiaozhao3:{
				trigger:{player:'phaseEnd'},
				silent:true,
				content:function(){
					delete player.storage.jiaozhao;
					delete player.storage.jiaozhao_card;
				}
			},
			danxin:{
				trigger:{player:'damageEnd'},
				frequent:true,
				audio:2,
				content:function(){
					'step 0'
					if(player.storage.jiaozhao1&&player.storage.jiaozhao2){
						player.draw();
						event.finish();
					}
					else{
						var list=['draw_card','更改描述'];
						var prompt;
						if(player.storage.jiaozhao1){
							prompt='摸一张牌或更改矫诏的描述<br><br><div class="text">更改描述：将“选择距离最近的一名其他角色，该角色”改为“你”';
						}
						else{
							prompt='摸一张牌或更改矫诏的描述<br><br><div class="text">更改描述：将“基本牌”改为“基本牌或普通动作牌”';
						}
						player.chooseControl(list,function(){
							if(!_status.event.player.hasSkill('jiaozhao')) return 'draw_card';
							return '更改描述';
						}).set('prompt',prompt);
					}
					'step 1'
					if(result.control=='draw_card'){
						player.draw();
					}
					else{
						game.log(player,'更改了','【矫诏】','的描述');
						player.popup('更改描述');
						player.markSkill('jiaozhao');
						if(player.storage.jiaozhao1){
							player.storage.jiaozhao2=true;
						}
						else{
							player.storage.jiaozhao1=true;
						}
					}
				}
			},
			zongzuo:{
				trigger:{global:'phaseBefore'},
				forced:true,
				priority:10,
				audio:2,
				filter:function(event,player){
					return !player.storage.zongzuo;
				},
				content:function(){
					'step 0'
					player.storage.zongzuo=true;
					var num=game.countGroup();
					player.gainMaxHp(num);
					event.num=num;
					'step 1'
					player.hp+=event.num;
					player.update();
				},
				group:'zongzuo_lose',
				subSkill:{
					lose:{
						trigger:{global:'dieAfter'},
						forced:true,
						audio:'zongzuo',
						filter:function(event,player){
							if(!lib.group.contains(event.player.group)) return false;
							if(game.hasPlayer(function(current){
								return current.group==event.player.group;
							})){
								return false;
							}
							return true;
						},
						content:function(){
							player.loseMaxHp();
						}
					}
				}
			},
			zhige:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>player.hp;
				},
				filterTarget:function(card,player,target){
					return get.distance(target,player,'attack')<=1&&target.countCards('e')>0;
				},
				content:function(){
					'step 0'
					target.chooseToUse({name:'sha'},'止戈：使用一张问，或将其工具区里的一张牌交给'+get.translation(player));
					'step 1'
					if(!result.bool&&target.countCards('e')){
						target.chooseCard('e',true,'将其工具区里的一张牌交给'+get.translation(player));
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool&&result.cards&&result.cards.length){
						player.gain(result.cards,target);
						target.$give(result.cards,player);
					}
				},
				ai:{
					expose:0.2,
					order:5,
					result:{
						target:-1,
						player:function(player,target){
							if(target.countCards('h')==0) return 0;
							if(target.countCards('h')==1) return -0.1;
							if(player.hp<=2) return -2;
							if(player.countCards('h','shan')==0) return -1;
							return -0.5;
						}
					}
				}
			},
			kuangbi:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					target.chooseCard('he',[1,3],'匡弼：将1~3张牌置于'+get.translation(player)+'的武将牌上',true).set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							return 7-get.value(card);
						}
						return -get.value(card);
					});
					'step 1'
					if(result.bool){
						target.$give(result.cards,player);
						target.lose(result.cards,ui.special,'toStorage');
						player.storage.kuangbi_draw=result.cards;
						player.storage.kuangbi_draw_source=target;
						player.syncStorage('kuangbi_draw');
						player.addSkill('kuangbi_draw');
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(get.attitude(player,target)>0){
								return Math.sqrt(target.countCards('he'));
							}
							return 0;
						},
						player:1
					}
				},
				subSkill:{
					draw:{
						trigger:{player:'phaseBegin'},
						forced:true,
						mark:true,
						intro:{
							content:'cards'
						},
						content:function(){
							var cards=player.storage.kuangbi_draw;
							if(cards){
								player.gain(cards,'gain2','fromStorage');
								var target=player.storage.kuangbi_draw_source;
								if(target&&target.isAlive()){
									target.draw(cards.length);
								}
							}
							delete player.storage.kuangbi_draw;
							delete player.storage.kuangbi_draw_source;
							player.removeSkill('kuangbi_draw');
						}
					}
				}
			},
			fulin:{
				trigger:{player:'phaseDiscardBegin'},
				silent:true,
				content:function(){
					player.addTempSkill('fulin2','phaseDiscardAfter');
				},
				group:['fulin_count','fulin_reset'],
				subSkill:{
					reset:{
						trigger:{player:['phaseBegin','phaseEnd']},
						silent:true,
						priority:10,
						content:function(){
							player.storage.fulin=[];
						}
					},
					count:{
						trigger:{player:'gainEnd'},
						silent:true,
						filter:function(event,player){
							return _status.currentPhase==player;
						},
						content:function(){
							if(!player.storage.fulin){
								player.storage.fulin=[];
							}
							for(var i=0;i<trigger.cards.length;i++){
								player.storage.fulin.add(trigger.cards[i]);
							}
						}
					}
				}
			},
			fulin2:{
				mod:{
					ignoredHandcard:function(card,player){
						if(player.storage.fulin&&player.storage.fulin.contains(card)){
							return true;
						}
					}
				},
			},
			duliang:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.countCards('h')>0;
				},
				audio:2,
				content:function(){
					'step 0'
					var card=target.getCards('h').randomGet();
					player.gain(card,target);
					target.$giveAuto(card,player);
					'step 1'
					var name=get.translation(target.name);
					player.chooseControl(function(){
						return Math.random()<0.5?'选项一':'选项二';
					}).set('prompt','督粮').set('choiceList',['令'+name+'观看牌堆顶的两张牌，然后获得其中的基本牌','令'+name+'于下个摸牌阶段额外摸一张牌']);
					'step 2'
					if(result.control=='选项一'){
						var cards=get.cards(2);
						target.viewCards('督粮',cards);
						event.cards2=[];
						for(var i=0;i<cards.length;i++){
							if(get.type(cards[i])=='basic'){
								ui.special.appendChild(cards[i]);
								event.cards2.push(cards[i]);
							}
							else{
								cards[i].discard();
							}
						}
					}
					else{
						target.addSkill('duliang2');
						event.finish();
					}
					'step 3'
					if(event.cards2&&event.cards2.length){
						target.gain(event.cards2,'draw');
						game.log(target,'获得了'+get.cnNumber(event.cards2.length)+'张牌');
					}
				},
				ai:{
					order:4,
					result:{
						target:-1,
						player:0.1
					}
				}
			},
			duliang2:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				mark:true,
				audio:false,
				intro:{
					content:'下个摸牌阶段额外摸一张牌'
				},
				content:function(){
					trigger.num++;
					player.removeSkill('duliang2');
				}
			},
			xinfencheng:{
				skillAnimation:'epic',
				animationColor:'fire',
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.xinfencheng;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				unique:true,
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				mark:true,
				line:'fire',
				content:function(){
					"step 0"
					player.storage.xinfencheng=true;
					player.awakenSkill('xinfencheng');
					event.num=1;
					event.targets=targets.slice(0);
					event.targets.sort(lib.sort.seat);
					"step 1"
					if(event.targets.length){
						var target=event.targets.shift();
						event.target=target;
						var res=get.damageEffect(target,player,target,'fire');
						target.chooseToDiscard('he','弃置至少'+get.cnNumber(event.num)+'张牌或受到2点文竞扣分',[num,Infinity]).set('ai',function(card){
							if(ui.selected.cards.length>=_status.event.getParent().num) return -1;
							if(_status.event.player.hasSkillTag('nofire')) return -1;
							if(_status.event.res>=0) return 6-get.value(card);
							if(get.type(card)!='basic'){
								return 10-get.value(card);
							}
							return 8-get.value(card);
						}).set('res',res);
					}
					else{
						event.finish();
					}
					"step 2"
					if(!result.bool){
						event.target.damage(2,'fire');
						event.num=1;
					}
					else{
						event.num=result.cards.length+1;
					}
					event.goto(1);
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(player!=players[i]&&get.damageEffect(players[i],player,players[i],'fire')<0){
									var att=get.attitude(player,players[i]);
									if(att>0){
										num--;
									}
									else if(att<0){
										num++;
									}
								}
							}
							if(game.players.length<5){
								return num-1;
							}
							else{
								return num-2;
							}
						}
					}
				},
				init:function(player){
					player.storage.xinfencheng=false;
				},
				intro:{
					content:'limited'
				}
			},
			xinjuece:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(player){
						return player.countCards('h')==0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('xinjuece'),function(card,player,target){
						return target.countCards('h')==0;
					}).set('ai',function(target){
						var player=_status.event.player;
						return get.damageEffect(target,player,player);
					});
					'step 1'
					if(result.bool){
						player.logSkill('juece',result.targets);
						result.targets[0].damage();
					}
				}
			},
			xinmieji:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h',{type:['trick','delay'],color:'black'});
				},
				filterCard:function(card){
					return get.color(card)=='black'&&get.type(card,'trick')=='trick';
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				discard:false,
				delay:false,
				check:function(card){
					return 8-get.value(card);
				},
				content:function(){
					'step 0'
					player.showCards(cards);
					'step 1'
					ui.cardPile.insertBefore(cards[0],ui.cardPile.firstChild);
					var n1=target.getCards('he',function(card){
						if(!lib.filter.cardDiscardable(card,player)) return false;
						return get.type(card,'trick')=='trick';
					});
					var n2=target.getCards('he',function(card){
						if(!lib.filter.cardDiscardable(card,player)) return false;
						return get.type(card,'trick')!='trick';
					});
					if(n1.length>1||n2.length>2||(n1.length==1&&n2.length==2)){
						target.chooseToDiscard('弃置一张动作牌，或两张非动作牌',true,'he',function(card,player){
							if(!lib.filter.cardDiscardable(card,player)) return false;
							if(!_status.event.nontrick){
								return get.type(card,'trick')=='trick';
							}
							if(ui.selected.cards.length){
								return get.type(card,'trick')!='trick';
							}
							return true;
						}).set('ai',function(card){
							if(get.type(card,'trick')=='trick'){
								return 8-get.value(card);
							}
							return -get.value(card);
						}).set('selectCard',function(){
							if(ui.selected.cards.length==1&&get.type(ui.selected.cards[0],'trick')=='trick'){
								return 1;
							}
							return 2;
						}).set('nontrick',n2.length>=2).set('complexCard',true);
					}
					else{
						if(n1.length){
							target.discard(n1);
						}
						else if(n2.length){
							target.discard(n2);
						}
					}
				},
				ai:{
					order:9,
					result:{
						target:-1
					}
				}
			},
			qianju:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-(from.maxHp-from.hp);
					}
				}
			},
			qingxi:{
				trigger:{source:'damageBegin'},
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&player.getEquip(1);
				},
				content:function(){
					'step 0'
					var num=1;
					var info=get.info(player.getEquip(1));
					if(info&&info.distance&&info.distance.attackFrom){
						num-=info.distance.attackFrom;
					}
					if(trigger.player.countCards('h')<num){
						event.directfalse=true;
					}
					else{
						trigger.player.chooseToDiscard(num,'弃置'+get.cnNumber(num)+'张手牌，或令问的扣分+1').set('ai',function(card){
							var player=_status.event.player;
							if(player.hp==1){
								if(get.type(card)=='basic'){
									return 8-get.value(card);
								}
								else{
									return 10-get.value(card);
								}
							}
							else{
								if(num>2){
									return 0;
								}
								return 8-get.value(card);
							}
						});
					}
					'step 1'
					if(!event.directfalse&&result.bool){
						var e1=player.getEquip(1);
						if(e1){
							player.discard(e1);
						}
					}
					else{
						trigger.num++;
					}
				}
			},
			jieyue:{
				group:'jieyue1'
			},
			jieyue1:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCardTarget({
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('he')>0;
						},
						filterCard:lib.filter.cardDiscardable,
						ai1:function(card){
							return 7-get.useful(card);
						},
						ai2:function(target){
							return 1-get.attitude(_status.event.player,target);
						},
						prompt:get.prompt('jieyue')
					});
					'step 1'
					if(result.bool){
						player.logSkill('jieyue1',result.targets);
						player.discard(result.cards);
						var target=result.targets[0];
						event.target=target;
						target.chooseCard('将一张牌置于'+get.translation(player)+'的武将牌上，或令其弃置你的一张牌','he').set('ai',function(card){
							if(card.name=='du') return 20;
							var player=_status.event.player;
							if(get.attitude(player,_status.event.getParent().player)>0){
								return 8-get.value(card);
							}
							var nh=player.countCards('h');
							if(nh<=2){
								return 6-get.value(card);
							}
							if(nh<=3){
								return 2-get.value(card);
							}
							return 0;
						});
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool&&result.cards&&result.cards.length){
						event.target.$give(result.cards,player);
						player.storage.jieyue2=result.cards[0];
						event.target.lose(result.cards[0],ui.special,'toStorage');
						player.syncStorage('jieyue2');
						player.addSkill('jieyue2');
					}
					else if(event.target.countCards('he')){
						player.discardPlayerCard(event.target,true);
					}
				},
				ai:{
					expose:0.1
				}
			},
			jieyue2:{
				mark:'card',
				intro:{
					content:'card'
				},
				audio:true,
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAsFilter:function(player){
					return player.countCards('h',{color:'black'})>0;
				},
				viewAs:{name:'wuxie'},
				prompt:'将一张黑色手牌当我很优秀使用',
				check:function(card){return 8-get.value(card)},
				threaten:1.2,
				group:['jieyue3','jieyue4']
			},
			jieyue3:{
				enable:['chooseToRespond'],
				filterCard:function(card){
					return get.color(card)=='red';
				},
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					if(!player.countCards('h',{color:'red'})) return false;
				},
				audio:true,
				prompt:'将一张红色手牌当答打出',
				check:function(){return 1},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						if(!player.countCards('h',{color:'red'})) return false;
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.8
						}
					}
				}
			},
			jieyue4:{
				trigger:{player:'phaseBegin'},
				forced:true,
				content:function(){
					player.gain(player.storage.jieyue2,'gain2','fromStorage');
					player.storage.jieyue2=null;
					player.removeSkill('jieyue2');
				}
			},
			jinjiu:{
				mod:{
					cardEnabled:function(card,player){
						if(card.name=='jiu'&&_status.event.skill!='jinjiu') return false;
					},
					cardUsable:function(card,player){
						if(card.name=='jiu'&&_status.event.skill!='jinjiu') return false;
					},
					cardRespondable:function(card,player){
						if(card.name=='jiu'&&_status.event.skill!='jinjiu') return false;
					},
					cardSavable:function(card,player){
						if(card.name=='jiu'&&_status.event.skill!='jinjiu') return false;
					},
				},
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					return player.countCards('h','jiu')>0;
				},
				filterCard:{name:'jiu'},
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('h','jiu')) return false;
				},
				check:function(){return 1},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h','jiu')) return false;
					},
					respondSha:true,
					order:4,
					useful:-1,
					value:-1
				}
			},
			xianzhen:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if(result.bool){
						player.storage.xianzhen=target;
						player.addTempSkill('xianzhen2');
					}
					else{
						player.addTempSkill('xianzhen3');
					}
				},
				ai:{
					order:function(name,player){
						var cards=player.getCards('h');
						if(player.countCards('h','sha')==0){
							return 1;
						}
						for(var i=0;i<cards.length;i++){
							if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
								return 9;
							}
						}
						return get.order({name:'sha'})-1;
					},
					result:{
						player:function(player){
							if(player.countCards('h','sha')>0) return 0;
							var num=player.countCards('h');
							if(num>player.hp) return 0;
							if(num==1) return -2;
							if(num==2) return -1;
							return -0.7;
						},
						target:function(player,target){
							var num=target.countCards('h');
							if(num==1) return -1;
							if(num==2) return -0.7;
							return -0.5
						},
					},
					threaten:1.3
				}
			},
			xianzhen2:{
				mod:{
					targetInRange:function(card,player,target,now){
						if(player.storage.xianzhen==target) return true;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					}
				},
				ai:{
					unequip:true
				}
			},
			xianzhen3:{
				mod:{
					cardEnabled:function(card){if(card.name=='sha') return false}
				}
			},
			lihuo:{
				enable:'phaseUse',
				usable:1,
				filterCard:function(card){
					return card.name=='sha'&&!card.nature;
				},
				filter:function(event,player){
					return player.countCards('h','sha')>0
				},
				viewAs:{name:'sha',nature:'fire'},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&card.nature=='fire'&&range[1]!=-1){
							range[1]++;
						}
					},
				},
				group:'lihuo2'
			},
			lihuo2:{
				trigger:{source:'damageEnd'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.parent.skill=='lihuo';
				},
				content:function(){
					player.addSkill('lihuo3');
				}
			},
			lihuo3:{
				trigger:{player:'useCardAfter'},
				vanish:true,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				forced:true,
				audio:false,
				content:function(){
					player.loseHp();
					player.removeSkill('lihuo3');
				}
			},
			chunlao:{
				trigger:{player:'phaseEnd'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('h','sha')>0&&!player.storage.chunlao.length;
				},
				init:function(player){
					player.storage.chunlao=[];
				},
				intro:{
					content:'cards',
				},
				content:function(){
					'step 0'
					player.chooseCard([1,player.countCards('h','sha')],get.prompt('chunlao'),{name:'sha'}).set('ai',function(){
						return 1;
					});
					'step 1'
					if(result.bool){
						player.logSkill('chunlao');
						player.storage.chunlao=player.storage.chunlao.concat(result.cards);
						player.syncStorage('chunlao');
						player.markSkill('chunlao');
						player.lose(result.cards,ui.special,'toStorage');
						player.$give(result.cards,player);
					}
				},
				ai:{
					effect:{
						player:function(card,player,target){
							if(_status.currentPhase!=player) return;
							if(card.name=='sha'&&!player.needsToDiscard()&&
								!player.storage.chunlao.length&&target.hp>1){
								return 'zeroplayertarget';
							}
						}
					},
					threaten:1.4
				},
				group:'chunlao2'
			},
			chunlao2:{
				enable:'chooseToUse',
				filter:function(event,player){
					return event.type=='dying'&&event.dying&&event.dying.hp<=0&&player.storage.chunlao.length>0;
				},
				filterTarget:function(card,player,target){
					return target==_status.event.dying;
				},
				direct:true,
				delay:0,
				selectTarget:-1,
				content:function(){
					"step 0"
					player.chooseCardButton(get.translation('chunlao'),player.storage.chunlao,true);
					"step 1"
					if(result.bool){
						player.logSkill('chunlao');
						player.$throw(result.links);
						player.storage.chunlao.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage('chunlao');
						target.useCard({name:'jiu'},target);
						if(!player.storage.chunlao.length){
							player.unmarkSkill('chunlao');
						}
						else{
							player.markSkill('chunlao');
						}
					}
				},
				ai:{
					order:6,
					skillTagFilter:function(player){
						return player.storage.chunlao.length>0;
					},
					save:true,
					result:{
						target:3
					},
					threaten:1.6
				},
			},
			chunlao2_old:{
				trigger:{global:'dying'},
				priority:6,
				filter:function(event,player){
					return event.player.hp<=0&&player.storage.chunlao.length>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var att=get.attitude(player,trigger.player);
					player.chooseCardButton(get.prompt('chunlao',trigger.player),player.storage.chunlao).set('ai',function(button){
						if(_status.event.att>0) return 1;
						return 0;
					}).set('att',att);
					"step 1"
					if(result.bool){
						player.logSkill('chunlao',trigger.player);
						player.$throw(result.links);
						player.storage.chunlao.remove(result.links[0]);
						result.links[0].discard();
						player.syncStorage('chunlao');
						trigger.player.useCard({name:'jiu'},trigger.player);
						if(!player.storage.chunlao.length){
							player.unmarkSkill('chunlao');
						}
						else{
							player.markSkill('chunlao');
						}
					}
				},
				ai:{
					expose:0.2
				}
			},
			shenduan:{
				trigger:{player:'discardAfter'},
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(get.color(event.cards[i])=='black'&&get.type(event.cards[i])=='basic'&&
							get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				},
				direct:true,
				content:function(){
					'step 0'
					var cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.color(trigger.cards[i])=='black'&&get.type(trigger.cards[i])=='basic'&&
							get.position(trigger.cards[i])=='d'){
							cards.push(trigger.cards[i]);
						}
					}
					if(!cards.length){
						event.finish();
					}
					else{
						event.cards=cards;
					}
					'step 1'
					if(event.cards.length){
						player.chooseTarget(get.prompt('shenduan'),function(card,player,target){
							return player.canUse({name:'bingliang'},target,false);
						}).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'bingliang'},player,player);
						});
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.bool&&result.targets&&result.targets.length){
						event.current=result.targets[0];
						if(event.cards.length==1){
							event.directCard=event.cards[0];
						}
						else{
							delete event.directCard;
							player.chooseCardButton('选择一张牌当作兵断寸断使用',event.cards,true);
						}
					}
					else{
						event.finish();
					}
					'step 3'
					var card;
					if(event.directCard){
						card=event.directCard;
					}
					else if(result.links&&result.links.length&&
						event.cards.contains(result.links[0])){
						card=result.links[0]
					}
					if(card){
						event.cards.remove(card);
						event.current.addJudge('bingliang',[card]);
						event.goto(1);
						player.logSkill('shenduan',event.current);
					}
				}
			},
			yonglve:{
				trigger:{global:'phaseJudgeBegin'},
				direct:true,
				filter:function(event,player){
					return event.player!=player&&event.player.countCards('j')>0&&get.distance(player,event.player,'attack')<=1;
				},
				content:function(){
					'step 0'
					var att=get.attitude(player,trigger.player);
					var nh=trigger.player.countCards('h');
					var eff=get.effect(trigger.player,{name:'sha'},player,player);
					player.chooseCardButton(get.prompt('yonglve',trigger.player),trigger.player.getCards('j')).set('ai',function(button){
						var name=button.link.viewAs||button.link.name;
						var att=_status.event.att;
						var nh=_status.event.nh;
						var eff=_status.event.eff;
						var trigger=_status.event.getTrigger();
						if(att>0&&eff>=0) return 1;
						if(att>=0&&eff>0) return 1;
						if(att>0&&(trigger.player.hp>=3||trigger.player.getEquip('bagua')||trigger.player.countCards('h','shan'))){
							if(name=='lebu'&&nh>trigger.player.hp) return 1;
							if(name=='bingliang'&&nh<trigger.player.hp) return 1;
						}
						return 0;
					}).set('att',att).set('nh',nh).set('eff',eff);
					'step 1'
					if(result.bool){
						trigger.player.discard(result.links);
						player.useCard({name:'sha'},trigger.player,'yonglve');
						player.storage.yonglve=false;
					}
					else{
						event.finish();
					}
					'step 2'
					if(player.storage.yonglve){
						player.storage.yonglve=false;
					}
					else{
						player.draw();
					}
				},
				group:'yonglve2'
			},
			yonglve2:{
				trigger:{source:'damageAfter'},
				forced:true,
				popup:false,
				filter:function(event){
					return event.parent.skill=='yonglve';
				},
				content:function(){
					player.storage.yonglve=true;
				}
			},
			benxi:{
				mod:{
					globalFrom:function(from,to,distance){
						if(_status.currentPhase==from){
							return distance-from.countUsed();
						}
					},
					selectTarget:function(card,player,range){
						if(_status.currentPhase==player){
							if(card.name=='sha'&&range[1]!=-1){
								if(!game.hasPlayer(function(current){
									return get.distance(player,current)>1;
								})){
									range[1]++;
								}
							}
						}
					}
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player){
						if(game.hasPlayer(function(current){
							return get.distance(player,current)>1;
						})){
							return false;
						}
					}
				}
			},
			sidi:{
				trigger:{global:'respondEnd'},
				filter:function(event,player){
					if(event.parent.parent.name!='sha') return false;
					if(event.player==player) return true;
					return _status.currentPhase==player;
				},
				frequent:true,
				init:function(player){
					player.storage.sidi=[];
				},
				intro:{
					content:'cards'
				},
				content:function(){
					var card=get.cards()[0];
					game.log(player,'将',card,'置于武将牌上');
					player.$gain2(card);
					player.storage.sidi.add(card);
					player.markSkill('sidi');
					player.syncStorage('sidi');
				},
				group:'sidi2'
			},
			sidi2:{
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					if(event.player==player) return false;
					if(!player.storage.sidi.length) return false;
					return true;
				},
				check:function(event,player){
					if(get.attitude(player,event.player)>=0) return false;
					if(event.player.getEquip('zhuge')) return false;
					if(event.player.hasSkill('paoxiao')) return false;
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(event.player.canUse('sha',players[i])&&
						get.attitude(player,players[i])>0) break;
					}
					if(i==players.length) return false;
					var nh=event.player.countCards('h');
					var nsha=event.player.countCards('h','sha');
					if(nh<2) return false;
					switch(nh){
						case 2:
						if(nsha) return Math.random()<0.4;
						return Math.random()<0.2;
						case 3:
						if(nsha) return Math.random()<0.8;
						return Math.random()<0.3;
						case 4:
						if(nsha>1) return true;
						if(nsha) return Math.random()<0.9;
						return Math.random()<0.5;
						default:return true;
					}
				},
				content:function(){
					'step 0'
					if(player.storage.sidi.length==1){
						event.directbutton=player.storage.sidi[0];
					}
					else{
						player.chooseCardButton('弃置武将牌上的一张牌',player.storage.sidi,true);
					}
					'step 1'
					var button;
					if(event.directbutton){
						button=event.directbutton;
					}
					else if(result.bool&&result.links&&result.links.length){
						button=result.links[0];
					}
					if(button){
						player.$throw([button]);
						player.line(trigger.player,'green');
						game.log(player,'将',button,'置于弃牌堆');
						button.discard();
						trigger.player.addTempSkill('sidi3');
						player.storage.sidi.remove(button);
						player.syncStorage('sidi');
						if(player.storage.sidi.length==0){
							player.unmarkSkill('sidi');
						}
						else{
							player.markSkill('sidi');
						}
						game.delayx();
					}
				}
			},
			sidi3:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num-1;
					}
				}
			},
			zhongyong:{
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					return event.responded&&get.itemtype(event.responded.cards)=='cards';
				},
				content:function(){
					"step 0"
					var cards=trigger.responded.cards;
					event.cards=cards;
					player.chooseTarget('忠勇：将'+get.translation(trigger.responded.cards)+'交给一名角色',function(card,player,target){
						return target!=_status.event.getTrigger().target;
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.countCards('h','shan')&&target.countCards('h')>=2){
							att/=1.5;
						}
						return att;
					});
					"step 1"
					if(result.bool){
						player.logSkill('zhongyong',result.targets);
						result.targets[0].gain(event.cards,'gain2');
						if(result.targets[0]==player){
							event.finish();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(player.hasSkill('jiu')){
						game.broadcastAll(function(player){
							player.removeSkill('jiu');
						},player);
						event.jiu=true;
					}
					player.chooseToUse('是否对'+get.translation(trigger.target)+'再使用一张问？',
						{name:'sha'},trigger.target,-1).logSkill='qinglong_skill';
					"step 3"
					if(result.bool);
					else if(event.jiu){
						player.addSkill('jiu');
					}
				}
			},
			xinzhongyong:{
				trigger:{player:'shaAfter'},
				direct:true,
				filter:function(event,player){
					return get.itemtype(event.cards)=='cards'||(event.responded&&get.itemtype(event.responded.cards)=='cards');
				},
				content:function(){
					"step 0"
					event.cards1=trigger.cards.slice(0);
					if(trigger.responded&&trigger.responded.cards&&trigger.responded.cards.length){
						event.cards2=trigger.responded.cards.slice(0);
					}
					player.chooseTarget(get.prompt('zhongyong'),function(card,player,target){
						return target!=_status.event.getTrigger().target&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						if(!event.cards2){
							player.logSkill('zhongyong',event.target);
							event.sha=false;
							event.target.gain(event.cards1,'gain2');
							if(get.color(event.cards1)=='red'){
								event.sha=true;
							}
							event.goto(3);
						}
						else{
							var sha=false;
							if(event.cards1.length==1&&get.color(event.cards1[0])=='red'){
								sha=true;
							}
							player.chooseControl('问','答',function(event,player){
								if(_status.event.choosesha) return '问';
								return '答';
							}).set('prompt','选择交给'+get.translation(result.targets)+'的牌').set('choosesha',sha);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					player.logSkill('zhongyong',event.target);
					event.sha=false;
					if(result.control=='问'){
						event.target.gain(event.cards1,'gain2');
						if(get.color(event.cards1)=='red'){
							event.sha=true;
						}
					}
					else{
						event.target.gain(event.cards2,'gain2');
						if(get.color(event.cards2)=='red'){
							event.sha=true;
						}
					}
					"step 3"
					if(event.sha){
						event.target.chooseToUse('是否使用一张问？',{name:'sha'}).set('filterTarget',function(card,player,target){
							return target!=_status.event.source&&get.distance(_status.event.source,target,'attack')<=1&&player.canUse('sha',target,false);
						}).set('source',player);
					}
				}
			},
			dangxian:{
				trigger:{player:'phaseBegin'},
				forced:true,
				content:function(){
					'step 0'
					player.phaseUse();
					'step 1'
					var stat=player.getStat();
					stat.card={};
					for(var i in stat.skill){
						var bool=false;
						var info=lib.skill[i];
						if(info.enable!=undefined){
							if(typeof info.enable=='string'&&info.enable=='phaseUse') bool=true;
							else if(typeof info.enable=='object'&&info.enable.contains('phaseUse')) bool=true;
						}
						if(bool) stat.skill[i]=0;
					}
				}
			},
			longyin:{
				trigger:{global:'shaBegin'},
				direct:true,
				filter:function(event,player){
					return event.target==event.targets[0]&&player.countCards('he')>0&&event.card.name=='sha'&&
					_status.currentPhase==event.player&&event.parent.parent.parent.name=='phaseUse';
				},
				content:function(){
					'step 0'
					var go=false;
					if(get.attitude(player,trigger.player)>0){
						if(get.color(trigger.card)=='red'){
							go=true;
						}
						else if(!trigger.player.hasSkill('paoxiao')&&
							!trigger.player.hasSkill('tanlin3')&&
							!trigger.player.hasSkill('zhaxiang2')&&
							!trigger.player.hasSkill('fengnu')&&
							!trigger.player.getEquip('zhuge')){
							var nh=trigger.player.countCards('h');
							if(player==trigger.player){
								go=(player.countCards('h','sha')>0);
							}
							else if(nh>=4){
								go=true;
							}
							else if(player.countCards('h','sha')){
								if(nh==3){
									go=Math.random()<0.8;
								}
								else if(nh==2){
									go=Math.random()<0.5;
								}
							}
							else if(nh>=3){
								if(nh==3){
									go=Math.random()<0.5;
								}
								else if(nh==2){
									go=Math.random()<0.2;
								}
							}
						}
					}
					var next=player.chooseToDiscard(get.prompt('longyin'),'he');
					next.logSkill=['longyin',trigger.player];
					next.set('ai',function(card){
						if(_status.event.go){
							return 6-get.value(card);
						}
						return 0;
					});
					next.set('go',go);
					'step 1'
					if(result.bool){
						trigger.player.getStat().card.sha--;
						if(get.color(trigger.card)=='red'){
							player.draw();
						}
						// player.logSkill('longyin',trigger.player);
					}
				},
				ai:{
					expose:0.2
				}
			},
			jigong:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				check:function(event,player){
					var nh=player.countCards('h')-player.countCards('h',{type:'equip'});
					if(nh<=1) return true;
					if(player.countCards('h','tao')) return false;
					if(nh<=2) return Math.random()<0.7;
					if(nh<=3) return Math.random()<0.4;
					return false;
				},
				content:function(){
					player.draw(2);
					player.addTempSkill('jigong2');
				}
			},
			jigong2:{
				mod:{
					maxHandcard:function(player,num){
						var damage=player.getStat().damage;
						if(typeof damage=='number') return num-player.hp+damage;
						return 0;
					}
				}
			},
			shifei:{
				audio:2,
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					if(event.responded) return false;
					if(!event.filterCard({name:'shan'})) return false;
					return true;
				},
				check:function(event,player){
					if(get.attitude(player,_status.currentPhase)>0) return true;
					var nh=_status.currentPhase.countCards('h')+1;
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].countCards('h')>nh){
							if(!player.hasShan()||get.attitude(player,players[i])<=0) return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					player.line(_status.currentPhase,'green');
					_status.currentPhase.draw();
					'step 1'
					var nh=_status.currentPhase.countCards('h');
					var nmax=nh+1;
					var targets=[];
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						var nh2=players[i].countCards('h');
						if(nh2>nmax){
							nmax=nh2;
							targets.length=0;
							targets.push(players[i]);
						}
						else if(nh2==nmax){
							targets.push(players[i]);
						}
					}
					if(targets.length==1){
						event.onlytarget=targets[0];
					}
					else if(targets.length){
						player.chooseTarget('选择一名角色弃置其一张牌',true,function(card,player,target){
							return _status.event.targets.contains(target);
						}).set('ai',function(target){
							return -get.attitude(_status.event.player,target);
						}).set('targets',targets);
					}
					else{
						event.finish();
					}
					'step 2'
					var target;
					if(event.onlytarget){
						target=event.onlytarget;
					}
					else if(result.targets&&result.targets.length){
						target=result.targets[0];
					}
					if(target){
						player.line(target,'green');
						player.discardPlayerCard(target,'he',true);
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0){
								var nh=player.countCards('h');
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(players[i].countCards('h')>nh) return 0.4;
								}
							}
						}
					}
				}
			},
			huaiyi:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				delay:0,
				filter:function(event,player){
					return player.countCards('h',{color:'red'})&&player.countCards('h',{color:'black'});
				},
				content:function(){
					'step 0'
					player.chooseControl('红色','黑色').set('ai',function(){
						var player=_status.event.player;
						if(player.countCards('h',{color:'red'})==1&&
						player.countCards('h',{color:'black'})>1) return '红色';
						return '黑色';
					});
					'step 1'
					event.control=result.control;
					player.showHandcards();
					'step 2'
					var cards;
					if(event.control=='红色'){
						cards=player.getCards('h',{color:'red'});
					}
					else{
						cards=player.getCards('h',{color:'black'});
					}
					player.discard(cards);
					event.num=cards.length;
					'step 3'
					player.chooseTarget([1,event.num],function(card,player,target){
						return target!=player&&target.countCards('he')>0;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)+0.5;
					});
					'step 4'
					if(result.bool&&result.targets){
						player.line(result.targets,'green');
						event.targets=result.targets;
						event.targets.sort(lib.sort.seat);
						event.gained=event.targets.length;
					}
					else{
						event.finish();
					}
					'step 5'
					if(event.targets.length){
						player.gainPlayerCard(event.targets.shift(),'he',true);
						event.redo();
					}
					'step 6'
					if(event.gained>=2){
						player.loseHp();
					}
				},
				ai:{
					order:function(item,player){
						if(player.countCards('h',{color:'red'})==1) return 10;
						if(player.countCards('h',{color:'black'})==1) return 10;
						return 1;
					},
					result:{
						player:1
					}
				}
			},
			yaoming:{
				audio:2,
				trigger:{player:'damageEnd',source:'damageEnd'},
				direct:true,
				filter:function(event,player){
					if(player.hasSkill('yaoming2')) return false;
					var nh=player.countCards('h');
					return game.hasPlayer(function(current){
						return current.countCards('h')!=nh;
					});
				},
				content:function(){
					'step 0'
					var nh=player.countCards('h');
					player.chooseTarget(get.prompt('yaoming'),function(card,player,target){
						return _status.event.nh!=target.countCards('h');
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.countCards('h')>_status.event.nh) return -att;
						return att;
					}).set('nh',nh);
					'step 1'
					if(result.bool){
						player.logSkill('yaoming',result.targets);
						player.addTempSkill('yaoming2');
						var target=result.targets[0];
						if(target.countCards('h')<player.countCards('h')){
							target.draw();
						}
						else{
							target.discard(target.getCards('h').randomGet());
						}
					}
				},
				ai:{
					expose:0.2
				}
			},
			yaoming2:{},
			anguo:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.countCards('e')>0;
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(target,'e',true);
					'step 1'
					if(result.links){
						var num=0,players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(get.distance(target,players[i],'attack')<=1){
								num++;
							}
						}
						event.num=num;
						target.gain(result.links,'gain2');
					}
					else{
						event.finish();
					}
					'step 2'
					var num2=0,players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(get.distance(target,players[i],'attack')<=1){
							num2++;
						}
					}
					if(event.num>num2){
						player.draw();
					}
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('noe')) return 1;
							if(target.getEquip(1)||target.getEquip(4)) return -1;
							if(target.getEquip(2)) return -0.7;
							return -0.5;
						}
					}
				}
			},
			zhaofu:{
				unique:true,
				global:'zhaofu2',
				zhuSkill:true
			},
			zhaofu2:{
				mod:{
					attackTo:function(from,to,distance){
						if(from.group!='wu') return;
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(from!=players[i]&&to!=players[i]&&
								players[i].hasZhuSkill('zhaofu',from)){
								if(get.distance(players[i],to)<=1) return distance-100;
							}
						}
					}
				}
			},
			xingxue:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					'step 0'
					var num=player.hp;
					if(!player.hasSkill('yanzhu')){
						num=player.maxHp;
					}
					player.chooseTarget([1,num],get.prompt('xingxue')).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.countCards('he')) return att;
						return att/10;
					});
					'step 1'
					if(result.bool){
						player.logSkill('xingxue',result.targets);
						event.targets=result.targets;
						event.targets.sort(lib.sort.seat);
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.targets.length){
						var target=event.targets.shift();
						target.draw();
						event.current=target;
					}
					else{
						event.finish();
					}
					'step 3'
					if(event.current&&event.current.countCards('he')){
						event.current.chooseCard('选择一张牌置于牌堆顶','he',true);
					}
					else{
						event.goto(2);
					}
					'step 4'
					if(result&&result.cards){
						event.card=result.cards[0];
						event.current.lose(result.cards,ui.special);
						game.broadcastAll(function(player){
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							player.$throw(cardx,1000,'nobroadcast');
						},event.current);
					}
					else{
						event.card=null;
					}
					'step 5'
					if(event.current==game.me) game.delay(0.5);
					'step 6'
					if(event.card){
						event.card.fix();
						ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					}
					event.goto(2);
				}
			},
			yanzhu:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.countCards('he')>0&&target!=player;
				},
				content:function(){
					'step 0'
					if(target.countCards('e')){
						target.chooseBool('是否将工具区内的所有牌交给'+get.translation(player)+'？').set('ai',function(){
							if(_status.event.player.countCards('e')>=3) return false;
							return true;
						});
					}
					else{
						target.chooseToDiscard(true,'he');
						event.finish();
					}
					'step 1'
					if(result.bool){
						var es=target.getCards('e');
						player.gain(es,target);
						target.$give(es,player);
						player.removeSkill('yanzhu');
					}
					else{
						target.chooseToDiscard(true,'he');
					}
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							var ne=target.countCards('e');
							if(!ne) return -2;
							if(ne>=2) return -ne;
							return 0;
						}
					}
				}
			},
			shizhi:{
				mod:{
					cardRespondable:function(card,player){
						if(card.name=='shan'&&player.hp==1&&_status.event.skill!='shizhi') return false;
					},
				},
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					return player.hp==1;
				},
				filterCard:{name:'shan'},
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('h','shan')) return false;
					if(player.hp!=1) return false;
				},
				check:function(){return 1},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h','shan')) return false;
						if(player.hp!=1) return false;
					},
					respondSha:true,
					order:4,
					useful:-1,
					value:-1
				}
			},
			wurong:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return target.countCards('h')>0&&target!=player;
				},
				content:function(){
					"step 0"
					if(target.countCards('h')==0||player.countCards('h')==0){
						event.finish();
						return;
					}
					"step 1"
					var sendback=function(){
						if(_status.event!=event){
							return function(){
								event.resultOL=_status.event.resultOL;
							};
						}
					};
					if(player.isOnline()){
						player.wait(sendback);
						event.ol=true;
						player.send(function(){
							game.me.chooseCard(true).set('glow_result',true).ai=function(){
								return Math.random();
							};
							game.resume();
						});
					}
					else{
						event.localPlayer=true;
						player.chooseCard(true).set('glow_result',true).ai=function(){
							return Math.random();
						};
					}
					if(target.isOnline()){
						target.wait(sendback);
						event.ol=true;
						target.send(function(){
							var rand=Math.random()<0.4;
							game.me.chooseCard(true).set('glow_result',true).ai=function(card){
								if(rand) return card.name=='shan'?1:0;
								return card.name=='shan'?0:1;
							};
							game.resume();
						});
					}
					else{
						event.localTarget=true;
					}
					"step 2"
					if(event.localPlayer){
						event.card1=result.cards[0];
					}
					if(event.localTarget){
						var rand=Math.random()<0.4;
						target.chooseCard(true).set('glow_result',true).ai=function(card){
							if(rand) return card.name=='shan'?1:0;
							return card.name=='shan'?0:1;
						};
					}
					"step 3"
					if(event.localTarget){
						event.card2=result.cards[0];
					}
					if(!event.resultOL&&event.ol){
						game.pause();
					}
					"step 4"
					try{
						if(!event.card1) event.card1=event.resultOL[player.playerid].cards[0];
						if(!event.card2) event.card2=event.resultOL[target.playerid].cards[0];
						if(!event.card1||!event.card2){
							throw('err');
						}
					}
					catch(e){
						console.log(e);
						event.finish();
						return;
					}
					if(event.card2.number>=10||event.card2.number<=4){
						if(target.countCards('h')>2){
							event.addToAI=true;
						}
					}
					game.broadcastAll(function(card1,card2){
						card1.classList.remove('glow');
						card2.classList.remove('glow');
					},event.card1,event.card2);
					"step 5"
					game.broadcastAll(function(){
						ui.arena.classList.add('thrownhighlight');
					});
					game.addVideo('thrownhighlight1');
					player.$compare(event.card1,target,event.card2);
					game.delay(4);
					"step 6"
					game.log(player,'展示了',event.card1);
					game.log(target,'展示了',event.card2);
					var name1=event.card1.name;
					if(player.hp==1&&name1=='shan'){
						name1='sha';
					}
					if(name1=='sha'&&event.card2.name!='shan'){
						player.discard(event.card1).set('animate',false);
						target.$gain2(event.card2);
						var clone=event.card1.clone;
						if(clone){
							clone.style.transition='all 0.5s';
							clone.style.transform='scale(1.2)';
							clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([clone]));
						}
						game.broadcast(function(card){
							var clone=card.clone;
							if(clone){
								clone.style.transition='all 0.5s';
								clone.style.transform='scale(1.2)';
								clone.delete();
							}
						},event.card1);
						target.damage();
					}
					else if(name1!='sha'&&event.card2.name=='shan'){
						player.discard(event.card1).set('animate',false);
						target.$gain2(event.card2);
						var clone=event.card1.clone;
						if(clone){
							clone.style.transition='all 0.5s';
							clone.style.transform='scale(1.2)';
							clone.delete();
							game.addVideo('deletenode',player,get.cardsInfo([clone]));
						}
						game.broadcast(function(card){
							var clone=card.clone;
							if(clone){
								clone.style.transition='all 0.5s';
								clone.style.transform='scale(1.2)';
								clone.delete();
							}
						},event.card1);
						player.gainPlayerCard(target,true,'he');
					}
					else{
						player.$gain2(event.card1);
						target.$gain2(event.card2);
					}
					game.broadcastAll(function(){
						ui.arena.classList.remove('thrownhighlight');
					});
					game.addVideo('thrownhighlight2');
				},
				ai:{
					order:6,
					result:{
						target:-1,
					}
				}
			},
			zhanjue:{
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				selectCard:-1,
				filter:function(event,player){
					if(!player.countCards('h')) return false;
					if(player.storage.zhanjue>=2) return false;
					return true;
				},
				viewAs:{name:'juedou'},
				group:['zhanjue2','zhanjue3','zhanjue4'],
				ai:{
					damage:true,
					order:1,
					effect:{
						player:function(card,player,target){
							if(_status.event.skill=='zhanjue'){
								if(player.countCards('h')>=3||target.countCards('h')>=3) return 'zeroplayertarget';
								if(player.countCards('h','tao')) return 'zeroplayertarget';
								if(target.countCards('h','sha')>1) return 'zeroplayertarget';
							}
						}
					}
				}
			},
			zhanjue2:{
				audio:false,
				trigger:{player:'phaseBefore'},
				silent:true,
				content:function(){
					player.storage.zhanjue=0;
				}
			},
			zhanjue3:{
				audio:false,
				trigger:{player:'damageAfter',source:'damageAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.parent.skill=='zhanjue';
				},
				content:function(){
					player.storage.zhanjue2=trigger.player;
				}
			},
			zhanjue4:{
				audio:false,
				trigger:{player:'juedouAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.skill=='zhanjue';
				},
				content:function(){
					if(typeof player.storage.zhanjue!='number'){
						player.storage.zhanjue=0;
					}
					if(player.storage.zhanjue2==player){
						player.draw(2);
						player.storage.zhanjue+=2;
					}
					else if(player.storage.zhanjue2){
						if(player.storage.zhanjue2.isAlive()){
							game.asyncDraw([player,player.storage.zhanjue2]);
						}
						else{
							player.draw();
						}
						player.storage.zhanjue++;
					}
					else{
						player.draw();
						player.storage.zhanjue++;
					}
					delete player.storage.zhanjue2;
				}
			},
			qinwang:{
				unique:true,
				group:['qinwang1','qinwang2'],
				zhuSkill:true,
				subSkill:{
					ai:{}
				}
			},
			qinwang1:{
				audio:2,
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					if(event.responded) return false;
					if(!player.hasZhuSkill('qinwang')) return false;
					if(!player.countCards('he')) return false;
					if(event.filterCard({name:'sha'},player,event)==false) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					});
				},
				direct:true,
				content:function(){
					"step 0"
					var yep=false;
					if(!player.storage.jijianging&&!trigger.jijiang){
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							var nh=players[i].countCards('h');
							if(players[i].group=='shu'&&get.attitude(players[i],player)>1&&(nh>=4||(nh>=3&&players[i].countCards('h','sha')))){
								yep=true;break;
							}
						}
					}
					var next=player.chooseToDiscard(get.prompt('qinwang'),'he');
					next.set('ai',function(card){
						if(_status.event.yep) return 5-get.value(card);
						return 0;
					});
					next.set('yep',yep);
					next.logSkill='qinwang'
					"step 1"
					if(!result.bool){
						event.finish();
					}
					"step 2"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						event.finish();
					}
					else if(event.current.group=='shu'){
						player.storage.jijianging=true;
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张问？',{name:'sha'});
						next.set('ai',function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set('source',player);
						next.set('jijiang',true);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 3"
					player.storage.jijianging=false;
					if(result.bool){
						event.finish();
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						event.current.draw();
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(2);
					}
				}
			},
			qinwang2:{
				audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
					if(!player.hasZhuSkill('qinwang')) return false;
					if(!lib.filter.cardUsable({name:'sha'},player)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					});
				},
				filterCard:true,
				position:'he',
				check:function(card){
					var player=_status.event.player,players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						var nh=players[i].countCards('h');
						if(players[i].group=='shu'&&get.attitude(players[i],player)>1&&(nh>=4||(nh>=3&&players[i].countCards('h','sha')))){
							return 5-get.value(card);
						}
					}
					return 0;
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=='function'&&
						!_status.event._backup.filterTarget({name:'sha'},player,target)){
						return false;
					}
					return player.canUse({name:'sha'},target);
				},
				content:function(){
					"step 0"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						player.addSkill('jijiang3');
						player.addTempSkill('qinwang_ai');
						event.getParent(2).step=0;
						event.finish();
					}
					else if(event.current.group=='shu'){
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张问',
						function(card){
							var evt=_status.event.getParent();
							return evt.player.canUse(card,evt.target)&&card.name=='sha';
						});
						next.set('ai',function(card){
							var event=_status.event;
							return get.effect(event.target,card,event.source,event.player);
						});
						next.set('source',player);
						next.set('target',target);
						next.set('jijiang',true);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 1"
					if(result.bool){
						event.finish();
						event.current.draw();
						if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
							player.useCard(result.cards[0],target).animate=false;
						}
						else{
							player.useCard({name:'sha'},target).animate=false;
						}
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(0);
					}
				},
				ai:{
					result:{
						target:function(player,target){
							if(player.hasSkill('jijiang3')) return 0;
							if(player.hasSkill('qinwang_ai')) return 0;
							return get.effect(target,{name:'sha'},player,target);
						}
					},
					order:function(){
						return get.order({name:'sha'})-0.1;
					},
				}
			},
			zuoding:{
				trigger:{global:'useCard'},
				filter:function(event,player){
					return !player.hasSkill('zuoding2')&&get.suit(event.card)=='spade'&&
						_status.currentPhase==event.player&&event.targets&&event.targets.length&&
						event.player!=player;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('zuoding'),function(card,player,target){
						return _status.event.getTrigger().targets.contains(target);
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('zuoding',result.targets);
						result.targets[0].draw();
					}
				},
				ai:{
					expose:0.2
				},
				group:'zuoding3'
			},
			zuoding2:{},
			zuoding3:{
				trigger:{global:'damageEnd'},
				silent:true,
				content:function(){
					player.addTempSkill('zuoding2');
				}
			},
			huomo:{
				audio:2,
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					if(event.responded) return false;
					if(!event.filterCard({name:'shan'})) return false;
					if(player.hasSkill('huomo2')) return false;
					if(event.parent.name!='sha') return false;
					var hs=player.getCards('he',{color:'black'});
					for(var i=0;i<hs.length;i++){
						if(get.type(hs[i])!='basic'){
							break;
						}
					}
					if(i==hs.length) return false;
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard(get.prompt('huomo'),'he',function(card){
						return get.type(card)!='basic'&&get.color(card)=='black';
					}).set('ai',function(card){
						if(!_status.event.player.countCards('h','shan')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.bool){
						trigger.untrigger();
						trigger.responded=true;
						trigger.result={bool:true,card:{name:'shan'}}
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);
						event.card=result.cards[0];
						player.logSkill('huomo');
						player.addTempSkill('huomo2');
					}
					else{
						event.finish();
					}
					'step 2'
					if(player==game.me&&event.card){
						game.delay();
					}
					'step 3'
					if(event.card){
						ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					}
				},
				group:['huomo_count','huomo_count2','huomo_use']
			},
			huomo2:{},
			huomo_count:{
				init:function(player){
					player.storage.huomo={};
				},
				trigger:{global:'phaseBegin'},
				silent:true,
				content:function(){
					player.storage.huomo={};
				}
			},
			huomo_count2:{
				trigger:{player:'useCard'},
				silent:true,
				content:function(){
					if(!player.storage.huomo) player.storage.huomo={};
					switch(trigger.card.name){
						case 'sha':player.storage.huomo.sha=true;break;
						case 'tao':player.storage.huomo.tao=true;break;
						case 'jiu':player.storage.huomo.jiu=true;break;
					}
				}
			},
			huomo_use:{
				enable:'chooseToUse',
				filter:function(event,player){
					if(!player.storage.huomo) player.storage.huomo={};
					if((!player.storage.huomo.sha&&event.filterCard({name:'sha'},player,event))||
						(!player.storage.huomo.jiu&&event.filterCard({name:'jiu'},player,event))||
						(!player.storage.huomo.tao&&event.filterCard({name:'tao'},player,event))){
						return player.hasCard(function(card){
							return get.color(card)=='black'&&get.type(card)!='basic';
						},'he');
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						var list=[];
						if(!player.storage.huomo.sha&&event.filterCard({name:'sha'},player,event)){
							list.push(['基本','','sha']);
							list.push(['基本','','sha','fire']);
							list.push(['基本','','sha','thunder']);
						}
						if(!player.storage.huomo.tao&&event.filterCard({name:'tao'},player,event)){
							list.push(['基本','','tao']);
						}
						if(!player.storage.huomo.jiu&&event.filterCard({name:'jiu'},player,event)){
							list.push(['基本','','jiu']);
						}
						return ui.create.dialog('活墨',[list,'vcard'],'hidden');
					},
					check:function(button){
						var player=_status.event.player;
						var card={name:button.link[2],nature:button.link[3]};
						if(game.hasPlayer(function(current){
							return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
						})){
							switch(button.link[2]){
								case 'tao':return 5;
								case 'jiu':return 3.01;
								case 'sha':
									if(button.link[3]=='fire') return 2.95;
									else if(button.link[3]=='fire') return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup:function(links,player){
						return {
							filterCard:function(card){
								return get.type(card)!='basic'&&get.color(card)=='black';
							},
							viewAs:{name:links[0][2],nature:links[0][3]},
							position:'he',
							popname:true,
							precontent:function(){
								'step 0'
								var card=event.result.cards[0];
								event.card=card;
								player.$throw(card,1000);
								game.log(player,'将',card,'置于牌堆顶');
								event.result.cards.length=0;
								player.lose(card);
								'step 1'
								game.delay();
								'step 2'
								ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
							},
						}
					},
					prompt:function(links,player){
						return '将一张黑色非基本牌置于牌堆顶并视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
					}
				},
				ai:{
					order:function(){
						var player=_status.event.player;
						var event=_status.event;
						if(!player.storage.huomo.jiu&&event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
							return 3.1;
						}
						return 2.9;
					},
					save:true,
					respondSha:true,
					skillTagFilter:function(player,tag,arg){
						if(player.hasCard(function(card){
							return get.color(card)=='black'&&get.type(card)!='basic';
						},'he')){
							if(!player.storage.huomo) player.storage.huomo={};
							if(tag=='respondSha'){
								if(arg!='use') return false;
								if(player.storage.huomo.sha) return false;
							}
							else{
								if(player.storage.huomo.tao&&player.storage.huomo.jiu) return false;
							}
						}
						else{
							return false;
						}
					},
					result:{
						player:1
					}
				}
			},
			taoxi:{
				audio:2,
				trigger:{player:'useCardToBegin'},
				filter:function(event,player){
					return _status.currentPhase==player&&event.targets.length==1&&
						event.target.countCards('h')>0&&!player.hasSkill('taoxi4')&&player!=event.target;
				},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				intro:{
					content:'card'
				},
				content:function(){
					var card=trigger.target.getCards('h').randomGet();
					player.showCards([card]);
					player.storage.taoxi=card;
					player.storage.taoxi2=trigger.target;
					player.syncStorage('taoxi');
					player.markSkill('taoxi');
					player.addTempSkill('taoxi4');
				},
				group:['taoxi2','taoxi3']
			},
			taoxi2:{
				audio:false,
				enable:'phaseUse',
				filter:function(event,player){
					if(player.storage.taoxi&&player.storage.taoxi2&&
						get.owner(player.storage.taoxi)==player.storage.taoxi2&&
						lib.filter.filterCard(player.storage.taoxi,player,event)){
						return true;
					}
					return false;
				},
				filterTarget:function(card,player,target){
					return player.canUse(player.storage.taoxi,target);
				},
				selectTarget:function(){
					var info=get.info(_status.event.player.storage.taoxi);
					if(info.notarget) return -1;
					return get.select(info.selectTarget);
				},
				multitarget:true,
				multiline:true,
				content:function(){
					'step 0'
					var card=player.storage.taoxi;
					if(!card){
						event.finish();
						return;
					}
					var owner=get.owner(card);
					if(owner){
						owner.lose(card,ui.special);
					}
					event.card=card;
					player.$throw(card);
					'step 1'
					player.useCard(event.card,targets).animate=false;
					delete player.storage.taoxi;
					delete player.storage.taoxi2;
					player.unmarkSkill('taoxi');
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							return get.effect(target,player.storage.taoxi,player,target);
						},
						player:1
					}
				}
			},
			taoxi3:{
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.storage.taoxi?true:false;
				},
				content:function(){
					if(get.owner(player.storage.taoxi)==player.storage.taoxi2){
						player.loseHp();
					}
					delete player.storage.taoxi;
					delete player.storage.taoxi2;
					player.unmarkSkill('taoxi');
				}
			},
			taoxi4:{},
			xingshuai:{
				skillAnimation:true,
				audio:2,
				trigger:{player:'dying'},
				priority:6,
				zhuSkill:true,
				filter:function(event,player){
					if(player.storage.xingshuai) return false;
					if(player.hp>0) return false;
					if(!player.hasZhuSkill('xingshuai')) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='wei';
					});
				},
				init:function(player){
					if(player.hasZhuSkill('xingshuai')){
						player.markSkill('xingshuai');
						player.storage.xingshuai=false;
					}
				},
				intro:{
					content:'limited'
				},
				unique:true,
				content:function(){
					'step 0'
					player.storage.xingshuai=true;
					player.awakenSkill('xingshuai');
					var targets=game.filterPlayer();
					targets.remove(player);
					event.targets=targets;
					event.damages=[];
					'step 1'
					if(event.targets.length){
						var current=event.targets.shift();
						if(current.group=='wei'){
							current.chooseBool('是否令'+get.translation(player)+'回复一点分数？').set('ai',function(){
								return get.attitude(_status.event.player,_status.event.target)>2;
							}).set('target',player);
							event.current=current;
						}
						else{
							event.redo();
						}
					}
					else{
						event.goto(3);
					}
					'step 2'
					if(result.bool){
						event.damages.push(event.current);
						event.current.line(player,'green');
						game.log(event.current,'令',player,'回复一点分数');
					}
					if(event.targets.length){
						event.goto(1);
					}
					'step 3'
					if(event.damages.length){
						player.recover(event.damages.length);
					}
					'step 4'
					if(event.damages.length){
						event.damages.shift().damage('nosource');
						event.redo();
					}
				}
			},
			mingjian:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:true,
				selectCard:-1,
				discard:false,
				lose:true,
				content:function(){
					player.$give(cards.length,target);
					target.gain(cards,player);
					target.addTempSkill('mingjian2',{player:'phaseAfter'});
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nogain')) return 0;
							if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
							if(player.hp<=2&&player.countCards('h','shan')) return 0;
							if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
							if(get.attitude(player,target)>3) return 1;
							return 0;
						}
					}
				}
			},
			mingjian2:{
				mark:true,
				intro:{
					content:'手牌上限+1，出问次数+1'
				},
				mod:{
					maxHandcard:function(player,num){
						return num+1;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					}
				},
			},
			mingjian_old:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					var go=Math.random()<0.5;
					player.chooseTarget(get.prompt('mingjian'),function(card,player,target){
						return player!=target
					}).ai=function(target){
						var att=get.attitude(player,target);
						if(att>3){
							if(player.countCards('h')>player.hp) return att;
							if(go) return att;
						}
						return 0;
					}
					'step 1'
					if(result.bool){
						player.logSkill('mingjian',result.targets);
						trigger.cancel();
						var target=result.targets[0];
						target.addSkill('mingjian2');
						var hs=player.getCards('h');
						target.gain(hs,player);
						player.$give(hs.length,target);
					}
				}
			},
			mingjian2_old:{
				audio:false,
				trigger:{global:'phaseAfter'},
				forced:true,
				popup:false,
				content:function(){
					if(lib.config.glow_phase){
						if(_status.currentPhase){
							_status.currentPhase.classList.remove('glow_phase');
						}
						player.classList.add('glow_phase');
					}
					game.addVideo('phaseChange',player);
					_status.currentPhase=player;
					player.ai.tempIgnore=[];
					player.stat.push({card:{},skill:{}});
					player.phaseUse();
					player.removeSkill('mingjian2');
				}
			},
			huituo:{
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('huituo')).set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0){
							return get.recoverEffect(target,player,player)+1;
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('huituo',result.targets);
						var target=result.targets[0];
						event.target=target;
						target.judge(function(card){
							if(target.hp==target.maxHp){
								if(get.color(card)=='red') return -1;
							}
							if(get.color(card)=='red') return 1;
							return 0;
						});
					}
					else{
						event.finish();
					}
					'step 2'
					if(result.color){
						if(result.color=='red'){
							if(event.target.hp<event.target.maxHp) event.target.recover();
						}
						else{
							event.target.draw(trigger.num);
						}
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true
				}
			},
			duodao:{
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return player.countCards('he')>0&&event.source&&event.source.getEquip(1)!=undefined&&
						event.card&&event.card.name=='sha';
				},
				direct:true,
				priority:5,
				audio:2,
				content:function(){
					'step 0'
					var next=player.chooseToDiscard('he',get.prompt('duodao'));
					next.logSkill=['duodao',trigger.source];
					next.set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getTrigger().source)<=0){
							return 6-get.value(card);
						}
						return 0;
					});
					'step 1'
					if(result.bool){
						trigger.source.$give(trigger.source.getEquip(1),player);
						player.gain(trigger.source.getEquip(1),trigger.source);
					}
				},
				ai:{
					maixie_defend:true,
				}
			},
			anjian:{
				audio:2,
				trigger:{source:'damageBegin'},
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&get.distance(event.player,player,'attack')>1&&
						event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				content:function(){
					trigger.num++;
				}
			},
			xinpojun:{
				trigger:{player:'shaBegin'},
				direct:true,
				filter:function(event,player){
					return player.isPhaseUsing()&&event.target.hp>0&&event.target.countCards('he')>0;
				},
				audio:2,
				logTarget:'target',
				content:function(){
					'step 0'
					player.choosePlayerCard(trigger.target,'he',
						[1,Math.min(trigger.target.countCards('he'),trigger.target.hp)],get.prompt('pojun',trigger.target));
					'step 1'
					if(result.bool&&result.links.length){
						player.logSkill('xinpojun');
						if(trigger.target.storage.xinpojun2){
							trigger.target.storage.xinpojun2=trigger.target.storage.xinpojun2.concat(result.links);
						}
						else{
							trigger.target.storage.xinpojun2=result.links;
						}
						game.addVideo('storage',trigger.target,['xinpojun2',get.cardsInfo(trigger.target.storage.xinpojun2),'cards']);
						trigger.target.addSkill('xinpojun2');
						trigger.target.lose(result.links,ui.special,'toStorage');
					}
				},
				ai:{
					expose:0.2
				}
			},
			xinpojun2:{
				trigger:{global:'phaseEnd'},
				forced:true,
				audio:false,
				mark:true,
				intro:{
					content:'cardCount'
				},
				content:function(){
					if(player.storage.xinpojun2){
						player.gain(player.storage.xinpojun2,'fromStorage');
						delete player.storage.xinpojun2;
					}
					player.removeSkill('xinpojun2');
				},
				group:'xinpojun3'
			},
			xinpojun3:{
				trigger:{player:'dieBegin'},
				forced:true,
				popup:false,
				content:function(){
					player.$throw(player.storage.xinpojun2,1000);
					for(var i=0;i<player.storage.xinpojun2.length;i++){
						player.storage.xinpojun2[i].discard();
					}
					game.log(player,'弃置了',player.storage.xinpojun2);
					delete player.storage.xinpojun2;
					player.removeSkill('xinpojun2');
				}
			},
			qiaoshi:{
				audio:2,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					return event.player!=player&&event.player.countCards('h')==player.countCards('h')&&event.player.isAlive();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>=0;
				},
				priority:-5,
				logTarget:'player',
				content:function(){
					game.asyncDraw([trigger.player,player]);
				},
				ai:{
					expose:0.1
				}
			},
			yanyu:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h','sha')>0;
				},
				filterCard:{name:'sha'},
				prepare:function(cards,player){
					player.$throw(cards,1000);
				},
				discard:false,
				delay:0.5,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					for(var i=0;i<cards.length;i++){
						cards[i].discard();
					}
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:1,
					},
				},
				group:'yanyu2'
			},
			yanyu2:{
				trigger:{player:'phaseUseEnd'},
				direct:true,
				filter:function(event,player){
					return player.getStat().skill.yanyu>=2;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('yanyu'),function(card,player,target){
						return target.sex=='male'&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 1'
					if(result.bool){
						player.logSkill('yanyu',result.targets);
						result.targets[0].draw(2);
					}
				}
			},
			youdi:{
				audio:true,
				trigger:{player:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('youdi'),function(card,player,target){
						return player!=target;
					}).set('ai',function(target){
						if(!_status.event.goon) return 0;
						if(target.countCards('he')==0) return 0;
						return -get.attitude(_status.event.player,target);
					}).set('goon',player.countCards('h','sha')<=player.countCards('h')/3);
					"step 1"
					if(result.bool){
						game.delay();
						player.logSkill('youdi',result.targets);
						event.target=result.targets[0];
						event.target.discardPlayerCard(player,'he',true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.links[0].name!='sha'&&event.target.countCards('he')){
						player.gainPlayerCard('he',event.target,true);
					}
				},
				ai:{
					expose:0.2,
					threaten:1.4
				}
			},
			fuhun:{
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				selectCard:2,
				position:'h',
				audio:2,
				derivation:['new_rewusheng','new_repaoxiao'],
				viewAs:{name:'sha'},
				prompt:'将两张手牌当问使用或打出',
				check:function(card){
					if(_status.event.player.hasSkill('new_rewusheng')&&get.color(card)=='red') return 0;
					if(_status.event.name=='chooseToRespond'){
						if(card.name=='sha') return 0;
						return 6-get.useful(card);
					}
					if(_status.event.player.countCards('h')<4) return 6-get.useful(card);
					return 7-get.useful(card);
				},
				ai:{
					respondSha:true,
					order:function(item,player){
						if(player.hasSkill('new_rewusheng')&&player.hasSkill('new_repaoxiao')){
							return 1;
						}
						if(player.countCards('h')<4){
							return 1;
						}
						return 4;
					},
				},
				group:'fuhun2'
			},
			fuhun2:{
				trigger:{source:'damageAfter'},
				forced:true,
				filter:function(event,player){
					if(player.hasSkill('fuhun3')) return false;
					return event.getParent().skill=='fuhun';
				},
				content:function(){
					player.addTempSkill('new_rewusheng');
					player.addTempSkill('new_repaoxiao');
					player.addTempSkill('fuhun3');
				}
			},
			fuhun3:{},
			fencheng:{
				skillAnimation:'epic',
				animationColor:'fire',
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.fencheng;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				unique:true,
				selectTarget:-1,
				mark:true,
				line:'fire',
				content:function(){
					"step 0"
					player.storage.fencheng=true;
					player.awakenSkill('fencheng');
					var res=get.damageEffect(target,player,target,'fire');
					var num=Math.max(1,target.countCards('e'));
					target.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+'张牌或受到1点文竞扣分').set('ai',function(card){
						var res=_status.event.res;
						var num=_status.event.num;
						var player=_status.event.player;
						if(res>=0) return -1;
						if(num>2&&player.hp>1) return -1;
						if(num>1&&player.hp>2) return -1;
						if(get.position(card)=='e'){
							return 10-get.value(card);
						}
						return 6-get.value(card);
					}).set('res',res).set('num',num);
					"step 1"
					if(!result.bool){
						target.damage('fire');
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(player!=players[i]&&get.damageEffect(players[i],player,players[i],'fire')<0){
									var att=get.attitude(player,players[i]);
									if(att>0){
										num-=Math.max(1,players[i].countCards('e'));
									}
									else if(att<0){
										num+=Math.max(1,players[i].countCards('e'));
									}
								}
							}
							if(players.length<5){
								return num-1;
							}
							else{
								return num-2;
							}
						}
					}
				},
				init:function(player){
					player.storage.fencheng=false;
				},
				intro:{
					content:'limited'
				}
			},
			mieji:{
				trigger:{player:'useCard'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return event.targets.length==1&&get.type(event.card)=='trick'&&get.color(event.card)=='black';
				},
				position:'he',
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('mieji'),function(card,player,target){
						var trigger=_status.event.getTrigger();
						return lib.filter.filterTarget(trigger.card,player,target)&&target!=trigger.targets[0];
					}).set('autodelay',true).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player);
					});
					"step 1"
					if(result.bool){
						trigger.targets.push(result.targets[0]);
						player.logSkill('mieji',result.targets);
					}
				}
			},
			junxing:{
				enable:'phaseUse',
				audio:2,
				usable:1,
				filterCard:true,
				selectCard:[1,Infinity],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				check:function(card){
					if(ui.selected.cards.length) return -1;
					var val=get.value(card);
					if(get.type(card)=='basic') return 8-get.value(card);
					return 5-get.value(card);
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					var types=[];
					for(var i=0;i<cards.length;i++){
						types.add(get.type(cards[i],'trick'));
					}
					target.chooseToDiscard(function(card){
						return !_status.event.types.contains(get.type(card,'trick'));
					}).set('ai',function(card){
						if(_status.event.player.isTurnedOver()) return -1;
						return 8-get.value(card);
					}).set('types',types).set('dialog',['弃置一张与'+get.translation(player)+'弃置的牌类别均不同的牌，或将武将牌翻面','hidden',cards]);
					"step 1"
					if(!result.bool){
						target.turnOver();
						target.draw(cards.length);
					}
				},
				ai:{
					order:2,
					expose:0.3,
					threaten:1.8,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('noturn')) return 0;
							if(target.isTurnedOver()) return 2;
							return -1/(target.countCards('h')+1);
						}
					}
				}
			},
			juece:{
				audio:2,
				trigger:{global:'loseEnd'},
				check:function(event,player){
					return get.damageEffect(event.player,player,player)>0;
				},
				filter:function(event,player){
					if(event.player.countCards('h')) return false;
					if(_status.currentPhase!=player) return false;
					if(event.player==player) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					player.line(trigger.player,'green');
					trigger.player.damage();
				},
				ai:{
					threaten:1.1
				}
			},
			jiefan:{
				skillAnimation:true,
				audio:2,
				unique:true,
				mark:true,
				init:function(player){
					player.storage.jiefan=false;
				},
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.jiefan;
				},
				intro:{
					content:'limited'
				},
				filterTarget:true,
				content:function(){
					"step 0"
					player.awakenSkill('jiefan');
					player.storage.jiefan=true;
					event.players=game.filterPlayer(function(current){
						return current!=target&&get.distance(current,target,'attack')<=1;
					});
					event.players.sortBySeat(target);
					"step 1"
					if(event.players.length){
						event.current=event.players.shift();
						event.current.animate('target');
						player.line(event.current,'green');
						if(event.current.countCards('he')&&target.isAlive()){
							event.current.chooseToDiscard({subtype:'equip1'},'he','弃置一张助学牌或让'+
							get.translation(target)+'摸一张牌').set('ai',function(card){
								if(get.attitude(_status.event.player,_status.event.target)<0) return 7-get.value(card);
								return -1;
							}).set('target',target);
							event.tempbool=false;
						}
						else{
							event.tempbool=true;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.tempbool||result.bool==false){
						target.draw();
					}
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							if(player.hp>2){
								if(game.phaseNumber<game.players.length*2) return 0;
							}
							var num=0,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=target&&get.distance(players[i],target,'attack')<=1){
									num++;
								}
							}
							return num;
						}
					}
				}
			},
			fuli:{
				skillAnimation:true,
				audio:2,
				unique:true,
				enable:'chooseToUse',
				init:function(player){
					player.storage.fuli=false;
				},
				mark:true,
				filter:function(event,player){
					if(event.type!='dying') return false;
					if(player!=event.dying) return false;
					if(player.storage.fuli) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.awakenSkill('fuli');
					player.recover(player.maxHp-player.hp);
					"step 1"
					player.turnOver();
					player.storage.fuli=true;
				},
				ai:{
					save:true,
					result:{
						player:10
					},
					threaten:function(player,target){
						if(!target.storage.fuli) return 0.9;
					}
				},
				intro:{
					content:'limited'
				}
			},
			qianxi:{
				audio:2,
				trigger:{player:'phaseBegin'},
				content:function(){
					"step 0"
					player.draw();
					player.chooseToDiscard('he',true);
					"step 1"
					if(!result.bool){
						event.finish();
						return;
					}
					event.color=get.color(result.cards[0]);
					player.chooseTarget(function(card,player,target){
						return player!=target&&get.distance(player,target)<=1;
					},true).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 2"
					if(result.bool&&result.targets.length){
						result.targets[0].storage.qianxi2=event.color;
						result.targets[0].addSkill('qianxi2');
						player.line(result.targets,'green');
						game.addVideo('storage',result.targets[0],['qianxi2',event.color]);
					}
				},
			},
			qianxi2:{
				trigger:{global:'phaseAfter'},
				forced:true,
				mark:true,
				audio:false,
				content:function(){
					player.removeSkill('qianxi2');
					delete player.storage.qianxi2;
				},
				mod:{
					cardEnabled:function(card,player){
						if(get.color(card)==player.storage.qianxi2) return false;
					},
					cardUsable:function(card,player){
						if(get.color(card)==player.storage.qianxi2) return false;
					},
					cardRespondable:function(card,player){
						if(get.color(card)==player.storage.qianxi2) return false;
					},
					cardSavable:function(card,player){
						if(get.color(card)==player.storage.qianxi2) return false;
					}
				},
				intro:{
					content:function(color){
						return '不能使用或打出'+get.translation(color)+'的牌';
					}
				}
			},
			zhiman:{
				audio:2,
				trigger:{source:'damageBefore'},
				check:function(event,player){
					if(get.damageEffect(event.player,player,player)<0) return true;
					var att=get.attitude(player,event.player);
					if(att>0&&event.player.countCards('j')) return true;
					if(event.num>1){
						if(att<0) return false;
						if(att>0) return true;
					}
					var cards=event.player.getGainableCards(player,'e');
					for(var i=0;i<cards.length;i++){
						if(get.equipValue(cards[i])>=6) return true;
					}
					return false;
				},
				logTarget:'player',
				content:function(){
					if(trigger.player.countGainableCards(player,'ej')){
						player.gainPlayerCard(trigger.player,'ej',true);
					}
					trigger.cancel();
				}
			},
			sanyao:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target.isMaxHp();
				},
				check:function(card){return 7-get.value(card);},
				position:'he',
				filterCard:true,
				content:function(){
					target.damage();
				},
				ai:{
					result:{
						target:function(player,target){
							if(target.countCards('j')&&get.attitude(player,target)>0){
								return 1;
							}
							if(target.countCards('e')){
								return -1;
							}
							return get.damageEffect(target,player);
						},
					},
					order:7
				}
			},
			qiaoshui:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('qiaoshui'),function(card,player,target){
						return player.canCompare(target);
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target)/target.countCards('h');
					});
					"step 1"
					if(result.bool){
						player.logSkill('qiaoshui',result.targets[0]);
						player.chooseToCompare(result.targets[0]);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.addTempSkill('qiaoshui3');
					}
					else{
						player.addTempSkill('qiaoshui2');
					}
				},
				ai:{
					expose:0.1
				}
			},
			qiaoshui2:{
				mod:{
					cardEnabled:function(card){
						if(get.type(card,'trick')=='trick') return false;
					}
				}
			},
			qiaoshui3:{
				trigger:{player:'useCard'},
				direct:true,
				filter:function(event,player){
					var type=get.type(event.card);
					return type=='basic'||type=='trick';
				},
				content:function(){
					'step 0'
					player.removeSkill('qiaoshui3');
					var goon=false;
					var info=get.info(trigger.card);
					if(trigger.targets&&!info.multitarget){
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
								goon=true;break;
							}
						}
					}
					if(goon){
						player.chooseTarget('巧说：是否额外指定一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
							var trigger=_status.event.getTrigger();
							if(trigger.targets.contains(target)) return false;
							return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
						}).set('ai',function(target){
							var trigger=_status.event.getTrigger();
							var player=_status.event.player;
							return get.effect(target,trigger.card,player,player);
						});
					}
					else{
						if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
							event.goto(3);
						}
					}
					'step 1'
					if(result.bool){
						if(!event.isMine()) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.target){
						player.logSkill('qiaoshui',event.target);
						trigger.targets.add(event.target);
					}
					event.finish();
					'step 3'
					player.chooseTarget('巧说：是否减少一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
						return _status.event.getTrigger().targets.contains(target);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						return -get.effect(target,trigger.card,trigger.player,_status.event.player);
					});
					'step 4'
					if(result.bool){
						event.targets=result.targets;
						if(event.isMine()){
							player.logSkill('qiaoshui',event.targets);
							event.finish();
						}
						for(var i=0;i<result.targets.length;i++){
							trigger.targets.remove(result.targets[i]);
						}
						game.delay();
					}
					else{
						event.finish();
					}
					'step 5'
					player.logSkill('qiaoshui',event.targets);
				}
			},
			jyzongshi_old:{
				audio:2,
				trigger:{target:'useCardToBegin'},
				filter:function(event,player){
					if(event.targets&&event.targets.length>1) return false;
					return event.card&&get.type(event.card)=='trick'&&event.player!=player;
				},
				frequent:true,
				content:function(){
					player.draw();
				},
				ai:{
					effect:function(card,player,target){
						if(get.type(card)=='trick') return [1,1];
					},
				}
			},
			shenxing:{
				audio:2,
				enable:'phaseUse',
				position:'he',
				filterCard:true,
				selectCard:2,
				prompt:'弃置两张牌并摸一张牌',
				check:function(card){return 4-get.useful(card)},
				content:function(){
					player.draw();
				},
				ai:{
					order:1,
					result:{
						player:1
					},
				},
			},
			bingyi:{
				audio:2,
				trigger:{player:'phaseDiscardEnd'},
				filter:function(event,player){
					var cards=player.getCards('h');
					if(cards.length<1) return false;
					var color=get.color(cards[0]);
					for(var i=1;i<cards.length;i++){
						if(get.color(cards[i])!=color) return false;
					}
					return true;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('bingyi'),[1,player.countCards('h')],function(card,player,target){
						return true;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('bingyi');
						player.showHandcards(get.translation(player)+'发动了【秉壹】');
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					if(targets&&targets.length){
						player.line(targets,'green');
						game.asyncDraw(targets);
					}
				},
				ai:{
					expose:0.1,
				}
			},
			xiantu:{
				unique:true,
				audio:2,
				gainable:true,
				forceunique:true,
				trigger:{global:'phaseUseBegin'},
				filter:function(event,player){
					return event.player!=player;
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)<5) return false;
					if(player.maxHp-player.hp>=2) return false;
					if(player.hp==1) return false;
					if(player.hp==2&&player.countCards('h')<2) return false;
					if(event.player.countCards('h')>=event.player.hp) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.draw(2);
					"step 1"
					player.chooseCard(2,'he',true,'交给'+get.translation(trigger.player)+'两张牌').set('ai',function(card){
						if(ui.selected.cards.length&&card.name==ui.selected.cards[0].name) return -1;
						if(get.tag(card,'damage')) return 1;
						if(get.type(card)=='equip') return 1;
						return 0;
					});
					"step 2"
					trigger.player.gain(result.cards,player);
					if(player==game.me||trigger.player==game.me)
					player.$give(result.cards,trigger.player);
					else
					player.$give(2,trigger.player);
					game.delay();
					trigger.player.addSkill('xiantu2');
					trigger.player.storage.xiantu=player;
				},
				ai:{
					threaten:1.1,
					expose:0.3
				}
			},
			xiantu2:{
				trigger:{player:'phaseUseEnd'},
				forced:true,
				audio:false,
				content:function(){
					if(player.storage.xiantu){
						player.storage.xiantu.loseHp();
						delete player.storage.xiantu;
					}
					player.removeSkill('xiantu2');
				},
				group:'xiantu3'
			},
			xiantu3:{
				trigger:{source:'dieAfter'},
				forced:true,
				audio:false,
				content:function(){
					delete player.storage.xiantu;
					player.removeSkill('xiantu2');
				}
			},
			qiangzhi:{
				audio:2,
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('qiangzhi'),function(card,player,target){
						return target!=player&&target.countCards('h')>0;
					}).set('ai',function(){
						return Math.random();
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('qiangzhi',target);
						var card=target.getCards('h').randomGet();
						player.showCards(card);
						player.storage.qiangzhi=get.type(card,'trick');
						game.addVideo('storage',player,['qiangzhi',player.storage.qiangzhi]);
						player.markSkill('qiangzhi');
					}
				},
				intro:{
					content:function(type){
						return get.translation(type)+'牌';
					}
				},
				group:['qiangzhi2','qiangzhi3'],
				ai:{
					order:11,
					result:{
						player:1
					}
				}
			},
			qiangzhi2:{
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event,player){
					// return (get.type(event.card,'trick')==player.storage.qiangzhi&&event.cards[0]&&event.cards[0]==event.card);
					return get.type(event.card,'trick')==player.storage.qiangzhi;
				},
				content:function(){
					player.draw();
				},
				ai:{
					threaten:1.4
				}
			},
			qiangzhi3:{
				trigger:{player:'phaseUseEnd'},
				silent:true,
				content:function(){
					delete player.storage.qiangzhi;
					player.unmarkSkill('qiangzhi');
				}
			},
			dingpin:{
				enable:'phaseUse',
				usable:3,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return target.hp<target.maxHp&&!target.tempSkills.dingpin2;
				},
				filterCard:true,
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					"step 0"
					target.judge(function(card){
						return get.color(card)=='black'?1:-1;
					});
					"step 1"
					if(result.bool){
						target.draw(target.maxHp-target.hp);
						target.addTempSkill('dingpin2');
					}
					else{
						player.turnOver();
					}
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(player.isTurnedOver()) return 1;
							if(target.hp<target.maxHp-1) return 1;
							return 0;
						}
					}
				}
			},
			dingpin2:{},
			faen:{
				audio:2,
				trigger:{global:['turnOverAfter','linkAfter']},
				filter:function(event,player){
					if(event.name=='link') return event.player.isLinked();
					return !event.player.isTurnedOver();
				},
				check:function(event,player){
					return get.attitude(player,event.player)>0;
				},
				logTarget:'player',
				content:function(){
					trigger.player.draw();
				},
				ai:{
					expose:0.2
				}
			},
			jiaojin:{
				audio:2,
				trigger:{player:'damageBegin'},
				filter:function(event,player){
					return player.countCards('he',{type:'equip'})&&event.source&&event.source.sex=='male';
				},
				direct:true,
				content:function(){
					"step 0"
					var next=player.chooseToDiscard('he','骄矜：是否弃置一张工具牌令扣分-1？',function(card,player){
						return get.type(card)=='equip';
					});
					next.set('ai',function(card){
						var player=_status.event.player;
						if(player.hp==1||_status.event.getTrigger().num>1){
							return 9-get.value(card);
						}
						if(player.hp==2){
							return 8-get.value(card);
						}
						return 7-get.value(card);
					});
					next.logSkill='jiaojin';
					"step 1"
					if(result.bool){
						game.delay(0.5);
						trigger.num--;
					}
				}
			},
			chanhui:{
				audio:2,
				trigger:{player:'useCard'},
				filter:function(event,player){
					if(_status.currentPhase!=player) return false;
					if(player.hasSkill('chanhui2')) return false;
					if(event.targets.length>1) return false;
					var card=event.card;
					if(card.name=='sha') return true;
					if(get.color(card)=='black'&&get.type(card)=='trick') return true;
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('chanhui'),function(card,player,target){
						if(player==target) return false;
						var trigger=_status.event.getTrigger();
						return player.canUse(trigger.card,target)&&trigger.targets.contains(target)==false;
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,player,player)+0.01;
					});
					"step 1"
					if(result.bool){
						game.delay(0,200);
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
					player.addSkill('chanhui2');
					player.logSkill('chanhui',event.target);
					event.target.chooseCard('交给'+get.translation(player)+'一张手牌，或成为'+
					get.translation(trigger.card)+'的额外目标').set('ai',function(card){
						return 5-get.value(card);
					});
					"step 3"
					if(result.bool){
						player.gain(result.cards,event.target);
						event.target.$give(1,player);
						game.delay();
						trigger.untrigger();
						trigger.player=event.target;
						trigger.trigger('useCard');
						game.log(event.target,'成为了',trigger.card,'的使用者');
					}
					else{
						game.log(event.target,'成为了',trigger.card,'的额外目标');
						trigger.targets.push(event.target);
					}
				}
			},
			chanhui2:{
				trigger:{player:'phaseEnd'},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					player.removeSkill('chanhui2');
				}
			},
			quanji:{
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				locked:false,
				notemp:true,
				init:function(player){
					player.storage.quanji=[];
				},
				filter:function(event){
					return event.num>0;
				},
				content:function(){
					"step 0"
					player.draw(trigger.num);
					"step 1"
					if(player.countCards('he')){
						player.chooseCard('将'+get.cnNumber(trigger.num)+'张手牌置于武将牌上作为“权”',trigger.num,true);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.cards&&result.cards.length){
						player.lose(result.cards,ui.special,'toStorage');
						player.storage.quanji=player.storage.quanji.concat(result.cards);
						player.syncStorage('quanji');
						player.markSkill('quanji');
						game.log(player,'将',result.cards,'置于武将牌上作为“权”');
					}
				},
				intro:{
					content:'cards'
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.quanji.length;
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
								if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
			zili:{
				skillAnimation:true,
				audio:3,
				unique:true,
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return !player.hasSkill('paiyi')&&player.storage.quanji&&player.storage.quanji.length>=3;
				},
				content:function(){
					"step 0"
					player.chooseDrawRecover(2,true,function(event,player){
						if(player.hp==1&&player.isDamaged()) return 'recover_hp';
						return 'draw_card';
					});
					"step 1"
					player.loseMaxHp();
					player.addSkill('paiyi');
					player.awakenSkill('zili');
				}
			},
			paiyi:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterTarget:true,
				filter:function(event,player){
					return player.storage.quanji.length>0;
				},
				content:function(){
					"step 0"
					player.chooseCardButton(player.storage.quanji,true);
					"step 1"
					var card=result.links[0];
					card.discard();
					player.$throw(card);
					player.storage.quanji.remove(card);
					if(!player.storage.quanji.length){
						player.unmarkSkill('quanji');
					}
					else{
						player.markSkill('quanji');
					}
					player.syncStorage('quanji');
					"step 2"
					target.draw(2);
					"step 3"
					if(target.countCards('h')>player.countCards('h')){
						target.damage();
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(player!=target) return 0;
							if(player.countCards('h')+2<=player.hp+player.storage.quanji.length) return 1;
							return 0;
						}
					}
				}
			},
			xianzhou:{
				skillAnimation:true,
				audio:2,
				unique:true,
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.xianzhou&&player.countCards('e')>0;
				},
				init:function(player){
					player.storage.xianzhou=false;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				mark:true,
				content:function(){
					"step 0"
					player.awakenSkill('xianzhou');
					var cards=player.getCards('e');
					target.gain(cards,player);
					event.num=cards.length;
					player.$give(cards,target);
					player.storage.xianzhou=true;
					game.delay();
					"step 1"
					target.chooseTarget([1,event.num],'令'+get.translation(player)+'回复'+
						event.num+'点分数，或对攻击范围内的'+event.num+'名角色造成一点扣分',function(card,player,target2){
						return get.distance(_status.event.player,target2,'attack')<=1;
					}).set('ai',function(target2){
						var target=_status.event.player;
						var player=_status.event.getParent().player;
						if(get.attitude(target,player)>0){
							if(player.hp+event.num<=player.maxHp||player.hp==1) return -1;
						}
						return get.damageEffect(target2,target,target);
					});
					"step 2"
					if(result.bool){
						target.line(result.targets,'green');
						event.targets=result.targets;
						event.num2=0;
					}
					else{
						player.recover(event.num);
						event.finish();
					}
					"step 3"
					if(event.num2<event.targets.length){
						event.targets[event.num2].damage(target);
						event.num2++;
						event.redo();
					}
				},
				intro:{
					content:'limited'
				},
				ai:{
					order:1,
					result:{
						target:1,
						player:function(player){
							var bool=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>2&&get.attitude(players[i],player)>2){
									bool=false;break;
								}
							}
							if(bool) return -10;
							if(player.hp==1) return 1;
							if(game.phaseNumber<game.players.length) return -10;
							if(player.countCards('e')+player.hp<=player.maxHp) return 1;
							return -10;
						}
					},
				}
			},
			qieting:{
				audio:2,
				global:'qieting2',
				globalSilent:true,
				trigger:{global:'phaseEnd'},
				filter:function(event,player){
					return event.player!=player&&!event.player.tempSkills.qieting3&&event.player.isAlive();
				},
				direct:true,
				content:function(){
					"step 0"
					var next;
					if(trigger.player.hasCard(function(card){
						return player.isEmpty(get.subtype(card));
					},'e')){
						next=player.chooseControl('移动工具','draw_card','cancel2',function(event,player){
							var source=_status.event.source;
							var att=get.attitude(player,source);
							if(source.hasSkillTag('noe')){
								if(att>0){
									return '移动工具';
								}
							}
							else{
								if(att<=0){
									return '移动工具';
								}
							}
							return 'draw_card';
						}).set('source',trigger.player);
					}
					else{
						next=player.chooseControl('draw_card','cancel2',function(){
							return 'draw_card';
						});
					}
					next.set('prompt',get.prompt('qieting',trigger.player));
					"step 1"
					if(result.control=='移动工具'){
						player.logSkill('qieting',trigger.player);
						player.choosePlayerCard(trigger.player,'e','将一张工具牌移至你的工具区').set('filterButton',function(button){
							return _status.event.player.isEmpty(get.subtype(button.link));
						});
					}
					else{
						if(result.control=='draw_card'){
							player.logSkill('qieting');
							player.draw();
						}
						event.finish();
					}
					"step 2"
					if(result&&result.links&&result.links.length){
						game.delay(2);
						trigger.player.$give(result.links[0],player);
						player.equip(result.links[0]);
						player.addExpose(0.2);
					}
				},
			},
			qieting2:{
				trigger:{player:'useCard'},
				filter:function(event,player){
					return _status.currentPhase==player&&event.targets&&(event.targets.length>1||event.targets[0]!=player);
				},
				forced:true,
				popup:false,
				content:function(){
					player.addTempSkill('qieting3');
				}
			},
			qieting3:{},
			zhuikong:{
				audio:2,
				trigger:{global:'phaseBegin'},
				check:function(event,player){
					if(get.attitude(player,event.player)<-2){
						var cards=player.getCards('h');
						if(cards.length>player.hp) return true;
						for(var i=0;i<cards.length;i++){
							var useful=get.useful(cards[i]);
							if(useful<5) return true;
							if(cards[i].number>9&&useful<7) return true;
						}
					}
					return false;
				},
				logTarget:'player',
				filter:function(event,player){
					return player.hp<player.maxHp&&player.canCompare(event.player);
				},
				content:function(){
					"step 0"
					player.chooseToCompare(trigger.player);
					"step 1"
					if(result.bool){
						trigger.player.addTempSkill('zishou2');
					}
				},
			},
			qiuyuan:{
				audio:2,
				trigger:{target:'shaBefore'},
				direct:true,
				priority:11,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('qiuyuan'),function(card,player,target){
						return target!=player&&_status.event.getTrigger().player.canUse('sha',target,false);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						return get.effect(target,trigger.card,trigger.player,player)+0.1;
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('qiuyuan',target);
						event.target=target;
						target.chooseCard({name:'shan'},'交给'+get.translation(player)+
						'一张答，或成为此问的额外目标').set('ai',function(card){
							return get.attitude(target,_status.event.source)>=0?1:-1;
						}).set('source',player);
						game.delay();
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.gain(result.cards,event.target);
						event.target.$give(result.cards,player);
						game.delay();
					}
					else{
						trigger.targets.push(event.target);
						game.log(event.target,'成为了额外目标');
					}
				},
				ai:{
					expose:0.2,
					effect:{
						target:function(card,player,target){
							if(card.name!='sha') return;
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								var target2=players[i];
								if(player!=target2&&target!=target2&&player.canUse(card,target2,false)&&
									get.effect(target2,{name:'shacopy',nature:card.nature,suit:card.suit},player,target)<0){
									if(target.hp==target.maxHp) return [0,1];
									return [0,0];
								}
							}
						}
					}
				}
			},
			gongji:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				position:'he',
				filterCard:true,
				check:function(card){
					if(get.type(card)!='equip') return 0;
					var player=_status.currentPhase;
					if(player.countCards('he',{subtype:get.subtype(card)})>1){
						return 11-get.equipValue(card);
					}
					return 6-get.equipValue(card);
				},
				content:function(){
					"step 0"
					player.addTempSkill('gongji2');
					"step 1"
					if(get.type(cards[0])=='equip'){
						player.chooseTarget('是否弃置一名角色的一张牌？',function(card,player,target){
							return player!=target&&target.countCards('he')>0;
						}).set('ai',function(target){
							var player=_status.event.player;
							if(get.attitude(player,target)<0){
								return Math.max(0.5,get.effect(target,{name:'sha'},player,player));
							}
							return 0;
						});
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.line(result.targets,'green');
						event.target=result.targets[0];
						player.discardPlayerCard(event.target,'he',true).ai=get.buttonValue;
					}
				},
				ai:{
					order:9,
					result:{
						player:1
					}
				}
			},
			gongji2:{
				mod:{
					attackFrom:function(){
						return -Infinity;
					},
				},
			},
			zhuiyi:{
				audio:2,
				trigger:{player:'dieBegin'},
				direct:true,
				skillAnimation:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('zhuiyi'),function(card,player,target){
						return player!=target&&_status.event.source!=target;
					}).set('ai',function(target){
						var num=get.attitude(_status.event.player,target);
						if(num>0){
							if(target.hp==1){
								num+=2;
							}
							if(target.hp<target.maxHp){
								num+=2;
							}
						}
						return num;
					}).set('source',trigger.source);
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						var next=game.createEvent('zhuiyi',null,trigger.parent);
						next.player=target;
						next.source=player;
						next.setContent(lib.skill.zhuiyi.contentx);
					}
				},
				contentx:function(){
				  event.source.logSkill('zhuiyi',player);
				  event.source.line(player,'green');
						player.recover();
						player.draw(3);
				},
				ai:{
					expose:0.5,
				}
			},
			old_anxu:{
				enable:'phaseUse',
				usable:1,
				multitarget:true,
				audio:'anxu',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var num=target.countCards('h');
					if(ui.selected.targets.length){
						return num<ui.selected.targets[0].countCards('h');
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(num>players[i].countCards('h')) return true;
					}
					return false;
				},
				selectTarget:2,
				content:function(){
					'step 0'
					var gainner,giver;
					if(targets[0].countCards('h')<targets[1].countCards('h')){
						gainner=targets[0];
						giver=targets[1];
					}
					else{
						gainner=targets[1];
						giver=targets[0];
					}
					gainner.gainPlayerCard(giver,true,'h','visibleMove');
					event.gainner=gainner;
					event.giver=giver;
					'step 1'
					if(result.cards){
					    event.bool=false;
					    var card=result.cards[0];
					    if(get.suit(card)!='spade') event.bool=true;
					}
					'step 2'
					if(event.bool){
						player.draw();
					}
				},
				ai:{
					order:10.5,
					threaten:2.3,
					result:{
						target:function(player,target){
							var num=target.countCards('h');
							var att=get.attitude(player,target);
							if(ui.selected.targets.length==0){
								if(att>0) return -1;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									var num2=players[i].countCards('h');
									var att2=get.attitude(player,players[i]);
									if(att2>=0&&num2<num) return -1;
								}
								return 0;
							}
							else{
								return 1;
							}
						},
						player:0.1
					}
				}
			},
			anxu:{
				enable:'phaseUse',
				usable:1,
				multitarget:true,
				audio:2,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var num=target.countCards('h');
					if(ui.selected.targets.length){
						return num<ui.selected.targets[0].countCards('h');
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(num>players[i].countCards('h')) return true;
					}
					return false;
				},
				selectTarget:2,
				content:function(){
					'step 0'
					var gainner,giver;
					if(targets[0].countCards('h')<targets[1].countCards('h')){
						gainner=targets[0];
						giver=targets[1];
					}
					else{
						gainner=targets[1];
						giver=targets[0];
					}
					giver.chooseCard('选择一张手牌交给'+get.translation(gainner),true);
					event.gainner=gainner;
					event.giver=giver;
					'step 1'
					var card=result.cards[0];
					event.gainner.gain(card,event.giver);
					event.giver.$give(1,event.gainner);
					'step 2'
					if(event.gainner.countCards('h')==event.giver.countCards('h')){
						player.chooseDrawRecover(true);
					}
				},
				ai:{
					order:10.5,
					threaten:1.6,
					result:{
						target:function(player,target){
							var num=target.countCards('h');
							var att=get.attitude(player,target);
							if(ui.selected.targets.length==0){
								if(att>0) return -1;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									var num2=players[i].countCards('h');
									var att2=get.attitude(player,players[i]);
									if(att2>=0&&num2<num) return -1;
								}
								return 0;
							}
							else{
								return 1;
							}
						},
						player:0.1
					}
				}
			},
			mingce:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				position:'he',
				filterCard:function(card){
					return card.name=='sha'||get.type(card)=='equip';
				},
				filter:function(event,player){
					return player.countCards('h','sha')>0||player.countCards('he',{type:'equip'})>0;
				},
				check:function(card){return 8-get.value(card)},
				selectTarget:2,
				multitarget:true,
				discard:false,
				targetprompt:['得到牌','出问目标'],
				prepare:'give',
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length==0){
						return player!=target;
					}
					else{
						return lib.filter.filterTarget({name:'sha'},ui.selected.targets[0],target);
					}
				},
				content:function(){
					"step 0"
					targets[0].gain(cards,player);
					"step 1"
					targets[0].chooseControl('draw_card','出问',function(){
						var player=_status.event.player;
						var target=_status.event.target;
						if(get.effect(_status.event.target,{name:'sha'},player,player)>0){
							return 1;
						}
						return 0;
					}).set('target',targets[1]).set('prompt','对'+get.translation(targets[1])+'使用一张问，或摸一张牌');
					"step 2"
					if(result.control=='draw_card'){
						targets[0].draw();
					}
					else{
						targets[0].useCard({name:'sha'},targets[1]);
					}
				},
				ai:{
					result:{
						player:function(player){
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>1&&get.attitude(players[i],player)>1){
									return 1;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(ui.selected.targets.length){
								return -0.1;
							}
							return 1;
						}
					},
					order:8.5,
					expose:0.2
				}
			},
			xinxuanhuo:{
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('xinxuanhuo'),function(card,player,target){
						return player!=target;
					}).set('ai',function(target){
						var att=get.attitude(_status.event.player,target);
						if(att>0){
							if(target.countCards('h')<target.hp) att+=2;
							return att-target.countCards('h')/3;
						}
						else{
							return -1;
						}
					});
					"step 1"
					if(result.bool){
						trigger.cancel();
						player.logSkill('xinxuanhuo',result.targets);
						event.target=result.targets[0];
						event.target.draw(2);
						player.chooseTarget('选择出问的目标',true,function(card,player,target){
							return _status.event.target.canUse('sha',target)&&player!=target;
						}).set('ai',function(target){
							return get.effect(target,{name:'sha'},_status.event.target,_status.event.player);
						}).set('target',event.target);
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool&&result.targets.length){
						game.log(player,'指定的出问目标为',result.targets);
						event.target.line(result.targets);
						event.target.chooseToUse('对'+get.translation(result.targets)+'使用一张问，或令'+get.translation(player)+'获得你的两张牌',{name:'sha'},result.targets[0],-1);
					}
					else{
						event.bool=true;
					}
					"step 3"
					if(event.bool||result.bool==false){
						player.gainPlayerCard('he',event.target,Math.min(2,event.target.countCards('he')),true);
					}
				},
				ai:{
					expose:0.2
				}
			},
			zhichi:{
				audio:2,
				trigger:{player:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return _status.currentPhase!=player;
				},
				content:function(){
					player.addTempSkill('zhichi2',['phaseAfter','phaseBefore']);
				}
			},
			zhichi2:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:15,
				filter:function(event,player){
					return get.type(event.card)=='trick'||event.card.name=='sha';
				},
				content:function(){
					game.log(player,'发动了智迟，',trigger.card,'对',trigger.target,'失效')
					trigger.cancel();
				},
				mark:true,
				intro:{
					content:'问或普通动作牌对你无效'
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='trick'||card.name=='sha') return 'zeroplayertarget';
						}
					}
				}
			},
			zongxuan:{
				audio:2,
				trigger:{player:'discardAfter'},
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				},
				frequent:true,
				popup:false,
				content:function(){
					"step 0"
					var cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.position(trigger.cards[i])=='d'){
							cards.push(trigger.cards[i]);
						}
					}
					player.chooseCardButton(cards,[1,cards.length],'纵玄：将弃置的牌按任意顺序置于牌堆顶（先选择的在上）').set('ai',function(){
						return -1;
					});
					"step 1"
					if(result&&result.bool&&result.links&&result.links.length){
						var cards=result.links.slice(0);
						while(cards.length){
							ui.cardPile.insertBefore(cards.pop(),ui.cardPile.firstChild);
						}
						player.logSkill('zongxuan');
					}
				},
			},
			zhiyan:{
				audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('zhiyan')).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						player.logSkill('zhiyan',result.targets);
						event.bool=false;
						event.target.draw('visible');
					}
					else{
						event.finish();
					}
					"step 2"
					var card=result[0];
					if(get.type(card)=='equip'){
						if(!event.target.isDisabled(get.subtype(card))){
						    event.target.equip(card);
						    game.delay();
						}
						event.bool=true;
					}
					"step 3"
					if(event.bool) target.recover();
				},
				ai:{
					expose:0.2,
					threaten:1.2
				}
			},
			miji:{
				audio:2,
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				content:function(){
					"step 0"
					event.num=player.maxHp-player.hp;
					player.draw(event.num);
					"step 1"
					var check=player.countCards('h')-event.num;
					player.chooseCardTarget({
						selectCard:event.num,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
							var player=_status.event.player;
							if(player.maxHp-player.hp==1&&card.name=='du') return 30;
							var check=_status.event.check;
							if(check<1) return 0;
							if(player.hp>1&&check<2) return 0;
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
							return att-2;
						},
						prompt:'将'+get.cnNumber(event.num)+'张手牌交给一名其他角色',
					}).set('check',check);
					"step 2"
					if(result.bool){
						result.targets[0].gain(result.cards,event.player);
						event.player.$give(result.cards.length,result.targets[0]);
						player.line(result.targets,'green');
					}
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 3;
						if(target.hp==2) return 1.5;
						return 0.5;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
			zhenlie:{
				audio:2,
				filter:function(event,player){
					return event.player!=player&&event.targets&&event.targets.contains(player)&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick');
				},
				logTarget:'player',
				check:function(event,player){
					if(get.attitude(player,event.player)>0){
						return false;
					}
					if(get.tag(event.card,'respondSha')){
						if(player.countCards('h',{name:'sha'})==0){
							return true;
						}
					}
					else if(get.tag(event.card,'respondShan')){
						if(player.countCards('h',{name:'shan'})==0){
							return true;
						}
					}
					else if(get.tag(event.card,'damage')){
						if(player.countCards('h')<2) return true;
					}
					else if(event.card.name=='shunshou'&&player.hp>2){
						return true;
					}
					return false;
				},
				priority:10,
				trigger:{global:'useCard'},
				content:function(){
					"step 0"
					player.loseHp();
					"step 1"
					trigger.targets.remove(player);
					"step 2"
					if(trigger.player.countCards('he')){
						player.discardPlayerCard(trigger.player,'he',true);
					}
				},
				ai:{
					expose:0.3
				}
			},
			wuyan:{
				audio:2,
				trigger:{target:'useCardToBefore',player:'useCardToBefore'},
				forced:true,
				priority:15,
				check:function(event,player){
					return get.effect(event.target,event.card,event.player,player)<0;
				},
				filter:function(event,player){
					if(!event.target) return false;
					if(event.player==player&&event.target==player) return false;
					return (get.type(event.card)=='trick');
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='trick'&&player!=target) return 'zeroplayertarget';
						},
						player:function(card,player,target,current){
							if(get.type(card)=='trick'&&player!=target) return 'zeroplayertarget';
						}
					}
				}
			},
			xinwuyan:{
				audio:2,
				trigger:{source:'damageBefore',player:'damageBefore'},
				forced:true,
				priority:15,
				check:function(event,player){
					if(player==event.player) return true;
					return false;
				},
				filter:function(event,player){
					return get.type(event.card,'trick')=='trick';
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					notrick:true,
					notricksource:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						},
						player:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')){
								return 'zeroplayertarget';
							}
						}
					}
				}
			},
			xinjujian:{
				trigger:{player:'phaseEnd'},
				direct:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('he')>player.countCards('he',{type:'basic'});
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						filterTarget:function(card,player,target){
							return player!=target;
						},
						filterCard:function(card,player){
							return get.type(card)!='basic'&&lib.filter.cardDiscardable(card,player);
						},
						ai1:function(card){
							if(get.tag(card,'damage')&&get.type(card)=='trick'){
								return 20;
							}
							return 9-get.value(card);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(att>0){
								if(target.isTurnedOver()) att+=3;
								if(target.hp==1) att+=3;
							}
							return att;
						},
						position:'he',
						prompt:get.prompt('xinjujian')
					});
					"step 1"
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.logSkill('xinjujian',target);
						player.discard(result.cards);
						if(target.hp==target.maxHp&&
							!target.isTurnedOver()&&
							!target.isLinked()){
							target.draw(2);
							event.finish();
						}
						else{
							var controls=['draw_card'];
							if(target.hp<target.maxHp){
								controls.push('recover_hp');
							}
							if(target.isLinked()|target.isTurnedOver()){
								controls.push('reset_character');
							}
							target.chooseControl(controls).ai=function(){
								if(target.isTurnedOver()){
									return 'reset_character';
								}
								else if(target.hp==1&&target.maxHp>2){
									return 'recover_hp';
								}
								else if(target.hp==2&&target.maxHp>2&&target.countCards('h')>1){
									return 'recover_hp';
								}
								else{
									return 'draw_card';
								}
							}
						}
					}
					else{
						event.finish();
					}
					"step 2"
					event.control=result.control;
					switch(event.control){
						case 'recover_hp':event.target.recover();event.finish();break;
						case 'draw_card':event.target.draw(2);event.finish();break;
						case 'reset_character':if(event.target.isTurnedOver()) event.target.turnOver();break;
					}
					"step 3"
					if(event.control=='reset_character'&&event.target.isLinked()){
						event.target.link();
					}
				},
				ai:{
					expose:0.2,
					threaten:1.4
				}
			},
			jujian:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filterCard:true,
				position:'he',
				selectCard:[1,3],
				check:function(card){
					var player=get.owner(card);
					if(get.type(card)=='trick') return 10;
					if(player.countCards('h')-player.hp-ui.selected.cards.length>0){
						return 8-get.value(card);
					}
					return 4-get.value(card);
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					target.draw(cards.length);
					if(cards.length==3){
						if(get.type(cards[0],'trick')==get.type(cards[1],'trick')&&
							get.type(cards[0],'trick')==get.type(cards[2],'trick')){
							player.recover();
						}
					}
				},
				ai:{
					expose:0.2,
					order:1,
					result:{
						target:1
					}
				}
			},
			yizhong:{
				trigger:{target:'shaBefore'},
				forced:true,
				audio:2,
				filter:function(event,player){
					if(player.getEquip(2)) return false;
					return (event.card.name=='sha'&&get.color(event.card)=='black')
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(player==target&&get.subtype(card)=='equip2'){
								if(get.equipValue(card)<=8) return 0;
							}
							if(target.getEquip(2)) return;
							if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
						}
					}
				}
			},
			jueqing:{
				trigger:{source:'damageBefore'},
				forced:true,
				audio:2,
				priority:16,
				check:function(){return false;},
				content:function(){
					trigger.cancel();
					var ex=0;
					if(trigger.card&&trigger.card.name=='sha'){
						if(player.hasSkill('jiu')) ex++;
						if(player.hasSkill('luoyi2')) ex++;
						if(player.hasSkill('reluoyi2')) ex++;
					}
					trigger.player.loseHp(trigger.num+ex);
				},
				ai:{
					jueqing:true
				}
			},
			shangshi:{
				audio:2,
				trigger:{player:['loseEnd','changeHp']},
				frequent:true,
				filter:function(event,player){
					return (player.countCards('h')<(player.maxHp-player.hp));
				},
				content:function(){
					player.draw(player.maxHp-player.hp-player.countCards('h'));
				},
				ai:{
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
							return false;
						}
					}
				}
			},
			luoying:{
				unique:true,
				gainable:true,
				group:['luoying_discard','luoying_judge'],
				subfrequent:['discard','judge'],
				subSkill:{
					discard:{
						audio:2,
						trigger:{global:'discardAfter'},
						filter:function(event,player){
							if(event.player==player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(get.suit(event.cards[i])=='club'&&get.position(event.cards[i])=='d'){
									return true;
								}
							}
							return false;
						},
						frequent:'check',
						check:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(get.suit(event.cards[i])=='club'&&get.position(event.cards[i])=='d'){
									if(event.cards[i].name=='du') return false;
								}
							}
							return true;
						},
						content:function(){
							"step 0"
							if(trigger.delay==false) game.delay();
							"step 1"
							var cards=[];
							for(var i=0;i<trigger.cards.length;i++){
								if(get.suit(trigger.cards[i])=='club'&&get.position(trigger.cards[i])=='d'){
									cards.push(trigger.cards[i]);
								}
							}
							if(cards.length){
								player.gain(cards,'log');
								player.$gain2(cards);
							}
						},
					},
					judge:{
						audio:2,
						trigger:{global:'judgeAfter'},
						frequent:'check',
						check:function(event,player){
							return event.result.card.name!='du';
						},
						filter:function(event,player){
							if(event.player==player) return false;
							if(event.result.card.parentNode.id!='discardPile') return false;
							return (get.suit(event.result.card)=='club');
						},
						content:function(){
							player.gain(trigger.result.card,'log');
							player.$gain2(trigger.result.card);
						}
					}
				}
			},
			jiushi:{
				group:['jiushi1','jiushi2','jiushi3'],
			},
			jiushi1:{
				audio:2,
				enable:'chooseToUse',
				filter:function(event,player){
					if(player.classList.contains('turnedover')) return false;
					if(event.parent.name=='phaseUse'){
						return lib.filter.filterCard({name:'jiu'},player,event);
					}
					if(event.type!='dying') return false;
					if(player!=event.dying) return false;
					return true;
				},
				content:function(){
					if(_status.event.getParent(2).type=='dying'){
						event.dying=player;
					}
					player.turnOver();
					player.useCard({name:'jiu'},player);
				},
				ai:{
					save:true,
					skillTagFilter:function(player){
						return player.hp<=0&&!player.isTurnedOver();
					},
					order:5,
					result:{
						player:function(player){
							if(_status.event.parent.name=='phaseUse'){
								if(player.countCards('h','jiu')>0) return 0;
								if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
								if(!player.countCards('h','sha')) return 0;
								var targets=[];
								var target;
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(player,players[i])<0){
										if(player.canUse('sha',players[i],true,true)){
											targets.push(players[i]);
										}
									}
								}
								if(targets.length){
									target=targets[0];
								}
								else{
									return 0;
								}
								var num=get.effect(target,{name:'sha'},player,player);
								for(var i=1;i<targets.length;i++){
									var num2=get.effect(targets[i],{name:'sha'},player,player);
									if(num2>num){
										target=targets[i];
										num=num2;
									}
								}
								if(num<=0) return 0;
								var e2=target.getEquip(2);
								if(e2){
									if(e2.name=='tengjia'){
										if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
									}
									if(e2.name=='renwang'){
										if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
									}
									if(e2.name=='baiyin') return 0;
								}
								if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
								return target.countCards('h')>3?0:1;
							}
							if(player==_status.event.dying||player.isTurnedOver()) return 3;
						}
					},
					effect:{
						target:function(card,player,target){
							if(card.name=='guiyoujie') return [0,0.5];
							if(target.isTurnedOver()){
								if(get.tag(card,'damage')){
									if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
									if(target.hp==1) return;
									return [1,target.countCards('h')/2];
								}
							}
						}
					}
				},
			},
			jiushi2:{
				trigger:{player:'damageBegin'},
				silent:true,
				filter:function(event,player){
					return player.classList.contains('turnedover');
				},
				content:function(){
					player.storage.jiushi=true;
				}
			},
			jiushi3:{
				audio:2,
				trigger:{player:'damageAfter'},
				check:function(event,player){
					return player.isTurnedOver();
				},
				filter:function(event,player){
					if(player.storage.jiushi){
						return true;
					}
					return false;
				},
				content:function(){
					player.storage.jiushi=false;
					player.turnOver();
				}
			},
			zongshi:{
				mod:{
					maxHandcard:function(player,num){
						return num+game.countGroup();
					}
				}
			},
			zishou:{
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					return player.countCards('h')<=player.maxHp||player.skipList.contains('phaseUse');
				},
				content:function(){
					trigger.num+=game.countGroup();
					player.addTempSkill('zishou2');

				},
				ai:{
					threaten:1.5
				}
			},
			zishou2:{
				mod:{
					playerEnabled:function(card,player,target){
						if(player!=target) return false;
					}
				}
			},
			olddanshou:{
				trigger:{source:'damageEnd'},
				priority:9,
				check:function(event,player){
					return get.attitude(player,event.player)<=0;
				},
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					var evt=_status.event.getParent('phase');
					if(evt){
						game.resetSkills();
						_status.event=evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				},
				ai:{
					jueqing:true
				}
			},
			danshou:{
				enable:'phaseUse',
				filterCard:true,
				position:'he',
				audio:2,
				filter:function(event,player){
					var num=player.getStat().skill.danshou;
					if(num){
						num++;
					}
					else{
						num=1;
					}
					return player.countCards('he')>=num;
				},
				check:function(card){
					if(ui.selected.cards.length>=2){
						return 4-get.value(card);
					}
					return 6-get.value(card);
				},
				selectCard:function(card){
					var num=_status.event.player.getStat().skill.danshou;
					if(num) return num+1;
					return 1;
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					var num=player.getStat().skill.danshou;
					if(num){
						num++;
					}
					else{
						num=1;
					}
					if(num<=2&&!target.countCards('he')) return false;
					return get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=player.getStat().skill.danshou;
					switch(num){
						case 1:player.discardPlayerCard(target,true);break;
						case 2:target.chooseCard('选择一张牌交给'+get.translation(player),'he',true);break;
						case 3:target.damage();break;
						default:game.asyncDraw([player,target],2);
					}
					if(num!=2) event.finish();
					'step 1'
					if(result.cards){
						player.gain(result.cards,target);
						target.$give(result.cards.length,player);
					}
				},
				ai:{
					order:8.6,
					result:{
						target:function(player,target){
							var num=player.getStat().skill.danshou;
							if(num){
								num++;
							}
							else{
								num=1;
							}
							if(num>3) return 0;
							if(num==3) return get.damageEffect(target,player,target);
							return -1;
						}
					}
				}
			},
			qice:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0
				},
				chooseButton:{
					dialog:function(){
						var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
						for(var i=0;i<list.length;i++){
							list[i]=['动作','',list[i]];
						}
						return ui.create.dialog(get.translation('qice'),[list,'vcard']);
					},
					filter:function(button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function(button){
						var player=_status.event.player;
						var recover=0,lose=1,players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
								return (button.link[2]=='juedou')?2:-1;
							}
							if(!players[i].isOut()){
								if(players[i].hp<players[i].maxHp){
									if(get.attitude(player,players[i])>0){
										if(players[i].hp<2){
											lose--;
											recover+=0.5;
										}
										lose--;
										recover++;
									}
									else if(get.attitude(player,players[i])<0){
										if(players[i].hp<2){
											lose++;
											recover-=0.5;
										}
										lose++;
										recover--;
									}
								}
								else{
									if(get.attitude(player,players[i])>0){
										lose--;
									}
									else if(get.attitude(player,players[i])<0){
										lose++;
									}
								}
							}
						}
						if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
						if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
						return (button.link[2]=='wuzhong')?1:-1;
					},
					backup:function(links,player){
						return {
							filterCard:true,
							selectCard:-1,
							audio:2,
							popname:true,
							viewAs:{name:links[0][2]},
						}
					},
					prompt:function(links,player){
						return '将全部手牌当作'+get.translation(links[0][2])+'使用';
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							var num=0;
							var cards=player.getCards('h');
							if(cards.length>=3&&player.hp>=3) return 0;
							for(var i=0;i<cards.length;i++){
								num+=Math.max(0,get.value(cards[i],player,'raw'));
							}
							num/=cards.length;
							num*=Math.min(cards.length,player.hp);
							return 12-num;
						}
					},
					threaten:1.6,
				}
			},
			zhiyu:{
				audio:2,
				trigger:{player:'damageEnd'},
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					player.showHandcards();
					"step 2"
					if(!trigger.source) return;
					var cards=player.getCards('h');
					for(var i=1;i<cards.length;i++){
						if(get.color(cards[i])!=get.color(cards[0])) return;
					}
					trigger.source.chooseToDiscard(true);
				},
				ai:{
					maixie_defend:true,
					threaten:0.9
				}
			},
			xuanfeng:{
				audio:2,
				trigger:{player:['loseEnd','phaseDiscardEnd']},
				direct:true,
				filter:function(event,player){
					if(event.name=='phaseDiscard'){
						return event.cards&&event.cards.length>1
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].original=='e') return true;
						}
					}
					return false;
				},
				content:function(){
					"step 0"
					player.chooseTarget([1,2],get.prompt('xuanfeng'),function(card,player,target){
						if(player==target) return false;
						return target.countCards('he');
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('xuanfeng',result.targets);
						event.targets=result.targets
						if(result.targets.length==1){
							player.discardPlayerCard(event.targets[0],'he',[1,2],true);
						}
						else{
							player.discardPlayerCard(event.targets[0],'he',true);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(targets.length==2){
						player.discardPlayerCard(targets[1],'he',true);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						}
					},
					reverseEquip:true,
					noe:true
				}
			},
			jiangchi:{
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseControl('jiangchi_less','jiangchi_more','cancel2',function(){
						var player=_status.event.player;
						if(player.countCards('h')>3&&player.countCards('h','sha')>1){
							return 'jiangchi_less';
						}
						if(player.countCards('h','sha')>2){
							return 'jiangchi_less';
						}
						if(player.hp-player.countCards('h')>1){
							return 'jiangchi_more';
						}
						return 'cancel2';
					});
					"step 1"
					if(result.control=='jiangchi_less'){
						trigger.num--;
						player.addTempSkill('jiangchi2','phaseUseEnd');
						player.logSkill('jiangchi');
					}
					else if(result.control=='jiangchi_more'){
						trigger.num++;
						player.addTempSkill('jiangchi3','phaseUseEnd');
						player.logSkill('jiangchi');
					}
				}
			},
			jiangchi2:{
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num+1;
					}
				}
			},
			jiangchi3:{
				mod:{
					cardEnabled:function(card){if(card.name=='sha') return false}
				}
			},
			xinzhan:{
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return true;//player.countCards('h')>player.maxHp;
				},
				usable:1,
				content:function(){
					"step 0"
					var cards=get.cards(3);
					event.cards=cards;
					var next=player.chooseCardButton(cards,'选择获得的语文牌',[1,Infinity]).set('filterButton',function(button){
						return get.suit(button.link)=='heart';
					});
					"step 1"
					if(result.bool){
						player.gain(result.links);
						player.$draw(result.links);
						game.delay(2);
					}
					for(var i=event.cards.length-1;i>=0;i--){
						if(!result.bool||!result.links.contains(event.cards[i])){
							ui.cardPile.insertBefore(event.cards[i],ui.cardPile.firstChild);
						}
					}
				},
				ai:{
					order:11,
					result:{
						player:1
					}
				}
			},
			huilei:{
				audio:2,
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event){
					return event.source!=undefined;
				},
				content:function(){
					trigger.source.discard(trigger.source.getCards('he'));
				},
				ai:{
					threaten:0.7
				}
			},
			xinenyuan:{
				audio:true,
				trigger:{player:'damageEnd'},
				check:function(event,player){
					var att=get.attitude(player,event.source);
					var num=event.source.countCards('h');
					if(att<=0) return true;
					if(num>2) return true;
					if(num) return att<4;
					return false;
				},
				filter:function(event,player){
					return event.source&&event.source!=player&&event.num>0&&event.source.isAlive();
				},
				content:function(){
					"step 0"
					event.num=trigger.num;
					"step 1"
					trigger.source.chooseCard('交给'+get.translation(player)+'一张手牌或失去一点分数').set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							return 11-get.value(card);
						}
						else{
							return 7-get.value(card);
						}
					});
					"step 2"
					if(result.bool){
						player.gain(result.cards[0],trigger.source);
						trigger.source.$give(1,player);
					}
					else{
						trigger.source.loseHp();
					}
					if(event.num>1){
						event.num--;
						event.goto(1);
					}
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
							if(!target.hasFriend()) return;
							if(get.tag(card,'damage')) return [1,0,0,-0.7];
						}
					}
				},
				group:'xinenyuan2'
			},
			xinenyuan2:{
				trigger:{player:'gainEnd'},
				filter:function(event,player){
					return event.source&&event.source.isAlive()&&event.source!=player&&event.cards.length>=2;
				},
				logTarget:'source',
				check:function(event,player){
					return get.attitude(player,event.source)>0;
				},
				content:function(){
					trigger.source.draw();
				}
			},
			enyuan:{
				locked:true,
				group:['enyuan1','enyuan2'],
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
							if(!target.hasFriend()) return;
							if(get.tag(card,'damage')) return [1,0,0,-1];
						}
					}
				}
			},
			enyuan1:{
				trigger:{player:'recoverEnd'},
				forced:true,
				audio:2,
				filter:function(event,player){
					return event.source&&event.source!=player;
				},
				content:function(){
					trigger.source.draw();
				}
			},
			enyuan2:{
				trigger:{player:'damageEnd'},
				forced:true,
				audio:true,
				filter:function(event,player){
					return event.source&&event.source!=player;
				},
				content:function(){
					"step 0"
					trigger.source.chooseCard('交出一张语文牌或失去一点分数',function(card){
						return get.suit(card)=='heart';
					}).set('ai',function(card){
						if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
							return 11-get.value(card);
						}
						else{
							return 7-get.value(card);
						}
					});
					"step 1"
					if(result.bool){
						player.gain(result.cards[0],trigger.source);
						trigger.source.$give(1,player);
					}
					else{
						trigger.source.loseHp();
					}
				}
			},
			xuanhuo:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				discard:false,
				prepare:'give2',
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'});
				},
				filterCard:function(card){
					return get.suit(card)=='heart';
				},
				filterTarget:function(card,player,target){
					if(game.countPlayer()==2) return false;
					return player!=target;
				},
				check:function(card){
					var player=get.owner(card);
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i]!=player&&get.attitude(player,players[i])>3) break;
					}
					if(i==players.length) return -1;
					return 5-get.value(card);
				},
				content:function(){
					"step 0"
					target.gain(cards,player);
					// game.delay();
					"step 1"
					player.gainPlayerCard(target,'he',true);
					"step 2"
					var source=target;
					event.card=result.links[0];
					player.chooseTarget('选择一个目标送出'+get.translation(event.card),function(card,player,target){
						return target!=_status.event.source&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target);
					}).set('source',target);
					"step 3"
					if(result.bool){
						result.targets[0].gain(card,player);
						player.$give(1,result.targets[0]);
						game.delay();
					}
				},
				ai:{
					result:{
						target:-0.5,
					},
					basic:{
						order:9,
					}
				}
			},
			ganlu:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				selectTarget:2,
				filterTarget:function(card,player,target){
					if(target.isMin()) return false;
					if(ui.selected.targets.length==0) return true;
					if(ui.selected.targets[0].countCards('e')==0&&target.countCards('e')==0) return false;
					return Math.abs(ui.selected.targets[0].countCards('e')-target.countCards('e'))<=player.maxHp-player.hp;
				},
				multitarget:true,
				content:function(){
					targets[0].swapEquip(targets[1]);
				},
				ai:{
					order:10,
					threaten:function(player,target){
						return 0.8*Math.max(1+target.maxHp-target.hp);
					},
					result:{
						target:function(player,target){
							var list1=[];
							var list2=[];
							var num=player.maxHp-player.hp;
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(get.attitude(player,players[i])>0) list1.push(players[i]);
								else if(get.attitude(player,players[i])<0) list2.push(players[i]);
							}
							list1.sort(function(a,b){
								return a.countCards('e')-b.countCards('e');
							});
							list2.sort(function(a,b){
								return b.countCards('e')-a.countCards('e');
							});
							var delta;
							for(var i=0;i<list1.length;i++){
								for(var j=0;j<list2.length;j++){
									delta=list2[j].countCards('e')-list1[i].countCards('e');
									if(delta<=0) continue;
									if(delta<=num){
										if(target==list1[i]||target==list2[j]){
											return get.attitude(player,target);
										}
										return 0;
									}
								}
							}
							return 0;
						}
					},
					effect:{
						target:function(card,player,target){
							if(target.hp==target.maxHp&&get.tag(card,'damage')) return 0.2;
						}
					}
				}
			},
			buyi:{
				trigger:{global:'dying'},
				priority:6,
				audio:2,
				filter:function(event,player){
					return event.player.hp<=0&&event.player.countCards('h')>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var check;
					if(trigger.player.isUnderControl(true,player)){
						check=player.hasCard(function(card){
							return get.type(card)!='basic';
						});
					}
					else{
						check=(get.attitude(player,trigger.player)>0);
					}
					player.choosePlayerCard(trigger.player,get.prompt('buyi',trigger.player),'h').set('ai',function(button){
						if(!_status.event.check) return 0;
						if(_status.event.target.isUnderControl(true,_status.event.player)){
							if(get.type(button.link)!='basic'){
								return 10-get.value(button.link);
							}
							return 0;
						}
						else{
							return Math.random();
						}
					}).set('check',check).set('filterButton',function(button){
						if(_status.event.player==_status.event.target){
							return lib.filter.cardDiscardable(button.link,_status.event.player);
						}
						return true;
					});
					"step 1"
					if(result.bool){
						player.logSkill('buyi',trigger.player);
						event.card=result.links[0];
						player.showCards([event.card],get.translation(player)+'展示的手牌');
					}
					else{
						event.finish();
					}
					"step 2"
					if(get.type(event.card)!='basic'){
						trigger.player.recover();
						trigger.player.discard(event.card);
					}
				},
				ai:{
					threaten:1.4
				}
			},
			pojun:{
				audio:2,
				trigger:{source:'damageEnd'},
				check:function(event,player){
					if(event.player.isTurnedOver()) return get.attitude(player,event.player)>0;
					if(event.player.hp<3){
						return get.attitude(player,event.player)<0;
					}
					return get.attitude(player,event.player)>0;
				},
				filter:function(event){
					if(event._notrigger.contains(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.isAlive();
				},
				logTarget:'player',
				content:function(){
					"step 0"
					trigger.player.draw(Math.min(5,trigger.player.hp));
					"step 1"
					trigger.player.turnOver();
				}
			},
			jingce:{
				trigger:{player:'phaseUseEnd'},
				frequent:true,
				filter:function(event,player){
					return player.countUsed()>=player.hp;
				},
				content:function(){
					player.draw(2);
				},
				audio:2,
				init:function(player){player.storage.jingce=true},
				intro:{
					content:function(storage,player){
						if(_status.currentPhase==player) return '已使用'+player.countUsed()+'张牌';
					}
				}
			},
			chengxiang:{
				trigger:{player:'damageEnd'},
				direct:true,
				audio:2,
				content:function(){
					"step 0"
					event.cards=get.cards(4);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='称象：选择任意张点数不大于13的牌';
						}
						else{
							str='称象';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['称象',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([0,4]);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						var num=0
						for(var i=0;i<ui.selected.buttons.length;i++){
							num+=get.number(ui.selected.buttons[i].link);
						}
						return (num+get.number(button.link)<=13);
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					"step 2"
					if(result.bool&&result.links){
						player.logSkill('chengxiang');
						var cards2=[];
						for(var i=0;i<result.links.length;i++){
							cards2.push(result.links[i]);
							cards.remove(result.links[i]);
						}
						for(var i=0;i<cards.length;i++){
							cards[i].discard();
						}
						event.cards2=cards2;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log');
					player.$draw(cards2);
					game.delay();
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [1,2];
								if(target.hp==3) return [1,1.5];
								if(target.hp==2) return [1,0.5];
							}
						}
					}
				}
			},
			renxin:{
				trigger:{global:'damageBefore'},
				audio:3,
				priority:6,
				filter:function(event,player){
					return event.player!=player&&event.player.hp==1&&player.countCards('he',{type:'equip'})>0;
				},
				direct:true,
				content:function(){
					"step 0"
					var next=player.chooseToDiscard(get.prompt('renxin',trigger.player),{type:'equip'},'he');
					next.logSkill=['renxin',trigger.player];
					next.set('ai',function(card){
						var player=_status.event.player;
						if(get.attitude(player,_status.event.getTrigger().player)>3){
							return 11-get.value(card);
						}
						return -1;
					});
					"step 1"
					if(result.bool){
						player.turnOver();
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.cancel();
				},
				ai:{
					expose:0.5
				}
			},
			yuce:{
				audio:2,
				trigger:{player:'damageAfter'},
				direct:true,
				filter:function(event,player){
					return player.countCards('h')>0&&player.isDamaged();
				},
				content:function(){
					"step 0"
					var next=player.chooseCard(get.prompt('yuce'));
					next.set('ai',function(card){
					 if(get.type(card)=='basic') return 1;
						return get.value(card);
					});
					"step 1"
					if(result.bool){
					    player.showCards(result.cards);
						var type=get.type(result.cards[0],'trick');
						if(trigger.source){
							trigger.source.chooseToDiscard('弃置一张'+get.translation(type)+'牌或令'+get.translation(player)+'回复一点分数',function(card){
								return get.type(card,'trick')==_status.event.type;
							}).set('ai',function(card){
								if(get.recoverEffect(_status.event.getParent().player,_status.event.player,_status.event.player)<0){
									return 7-get.value(card);
								}
								return 0;
							}).set('type',type);
						}
						else{
							event.recover=true;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.recover){
						player.recover();
					}
					else if(result.bool){
						//player.draw();
					}
					else{
						player.recover();
					}
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage'&&target.countCards('h'))){
								return 0.8
							}
						}
					}
				}
			},
			xiansi:{
				audio:2,
				trigger:{player:'phaseBegin'},
				direct:true,
				init:function(player){
					player.storage.xiansi=[];
				},
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('xiansi'),[1,2],function(card,player,target){
						return target.countCards('he')>0;
					},function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('xiansi',result.targets);
						event.targets=result.targets;
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.targets.length){
						var target=event.targets.shift();
						event.current=target;
						player.choosePlayerCard(target,true);
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
						player.storage.xiansi=player.storage.xiansi.concat(result.links);
						player.markSkill('xiansi');
						player.syncStorage('xiansi');
						event.current.lose(result.links,ui.special,'toStorage');
						event.current.$give(result.links,player);
						event.goto(2);
					}
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							for(var i=0;i<storage.length;i++){
								storage[i].discard();
							}
							player.$throw(storage);
							player.storage.xiansi.length=0;
						}
					}
				},
				ai:{
					threaten:2
				},
				global:'xiansi2'
			},
			xiansi2:{
				enable:'phaseUse',
				audio:2,
				forceaudio:true,
				filter:function(event,player){
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].storage.xiansi){
							return players[i].storage.xiansi.length>1&&player.canUse('sha',players[i],true,true);
						}
					}
					return false;
				},
				direct:true,
				delay:0,
				content:function(){
					"step 0"
					var targets=game.filterPlayer(function(current){
						if(current.storage.xiansi){
							return current.storage.xiansi.length>1&&player.canUse('sha',current,true,true);
						}
						return false;
					});
					if(targets.length==1){
						event.target=targets[0];
						event.goto(2);
					}
					else if(targets.length>0){
						player.chooseTarget(true,'选择【陷嗣】的目标',function(card,player,target){
							return _status.event.list.contains(target);
						}).set('list',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.effect(target,{name:'sha'},player,player);
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool&&result.targets.length){
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.target){
						if(event.target.storage.xiansi.length==2){
							event.directresult=event.target.storage.xiansi.slice(0);
						}
						else{
							player.chooseCardButton('移去两张“逆”',2,event.target.storage.xiansi,true);
						}
					}
					else{
						event.finish();
					}
					"step 3"
					if(event.directresult||result.bool){
						player.logSkill('xiansi2');
						var links=event.directresult||result.links;
						for(var i=0;i<links.length;i++){
							event.target.storage.xiansi.remove(links[i]);
						}
						event.target.syncStorage('xiansi');
						if(!event.target.storage.xiansi.length){
							event.target.unmarkSkill('xiansi');
						}
						else{
							event.target.markSkill('xiansi');
						}
						event.target.$throw(links);
						game.log(event.target,'被移去了',links);
						for(var i=0;i<links.length;i++){
							links[i].discard();
						}
						player.useCard({name:'sha'},event.target);
					}
				},
				ai:{
					order:function(){
						return get.order({name:'sha'})+0.05;
					},
					result:{
						player:function(player){
							var target=game.findPlayer(function(current){
								return current.storage.xiansi;
							});
							if(target){
								return get.effect(target,{name:'sha'},player,player);
							}
						}
					}
				}
			},
			shibei:{
				trigger:{player:'damageEnd'},
				forced:true,
				audio:2,
				content:function(){
					if(player.hasSkill('shibei_damaged')){
						player.loseHp();
					}
					else{
						player.recover();
					}
				},
				group:'shibei_mark',
				subSkill:{
					mark:{
						trigger:{player:'damageAfter'},
						silent:true,
						content:function(){
							player.addTempSkill('shibei_damaged');
						}
					},
					damaged:{},
					ai:{}
				},
				ai:{
					maixie_defend:true,
					threaten:0.9,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing')) return;
							if(target.hujia) return;
							if(player._shibei_tmp) return;
							if(target.hasSkill('shibei_ai')) return;
							if(_status.event.getParent('useCard',true)||_status.event.getParent('_wuxie',true)) return;
							if(get.tag(card,'damage')){
								if(target.hasSkill('shibei_damaged')){
									return [1,-2];
								}
								else{
									if(get.attitude(player,target)>0&&target.hp>1){
										return 0;
									}
									if(get.attitude(player,target)<0&&!player.hasSkillTag('damageBonus')){
										if(card.name=='sha') return;
										var sha=false;
										player._shibei_tmp=true;
										var num=player.countCards('h',function(card){
											if(card.name=='sha'){
												if(sha){
													return false;
												}
												else{
													sha=true;
												}
											}
											return get.tag(card,'damage')&&player.canUse(card,target)&&get.effect(target,card,player,player)>0;
										});
										delete player._shibei_tmp;
										if(player.hasSkillTag('damage')){
											num++;
										}
										if(num<2){
											var enemies=player.getEnemies();
											if(enemies.length==1&&enemies[0]==target&&player.needsToDiscard()){
												return;
											}
											return 0;
										}
									}
								}
							}
						}
					}
				}
			},
			shibei_old:{
				audio:2,
				trigger:{player:'damageAfter'},
				forced:true,
				content:function(){
					"step 0"
					player.judge(function(card){
						if(player.hasSkill('shibei2')){
							if(get.color(card)=='black') return -1;
						}
						else{
							if(get.color(card)=='red') return 1;
						}
						return 0;
					})
					"step 1"
					if(result.judge>0){
						player.recover();
					}
					else if(result.judge<0){
						player.loseHp();
					}
					if(!player.hasSkill('shibei2')){
						player.addTempSkill('shibei2');
					}
				}
			},
			shibei2:{},
			jianying:{
				audio:2,
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event,player){
					if(!event.cards||event.cards.length!=1) return false;
					if(_status.currentPhase!=player) return false;
					if(!player.storage.jianying) return false;
					return get.suit(player.storage.jianying)==get.suit(event.cards[0])||
						player.storage.jianying.number==event.cards[0].number;
				},
				content:function(){
					player.draw();
				},
				intro:{
					content:'card'
				},
				group:['jianying2','jianying3']
			},
			jianying3:{
				trigger:{player:'useCard'},
				priority:-1,
				silent:true,
				filter:function(event,player){
					if(!event.cards||event.cards.length!=1) return false;
					if(_status.currentPhase!=player) return false;
					return true;
				},
				content:function(){
					player.storage.jianying=trigger.cards[0];
				}
			},
			jianying2:{
				trigger:{player:'phaseAfter'},
				silent:true,
				content:function(){
					player.storage.jianying=null;
				}
			},
			zzhenggong:{
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return event.source&&event.source.countCards('e')>0;
				},
				content:function(){
					"step 0"
					var att=get.attitude(player,trigger.source);
					player.choosePlayerCard('e',get.prompt('zzhenggong'),trigger.source).ai=function(button){
						if(att<=0){
							return get.equipValue(button.link);
						}
						return 0;
					}
					"step 1"
					if(result.bool){
						player.logSkill('zzhenggong',trigger.source);
						player.equip(result.links[0]);
						trigger.source.$give(result.links[0],player);
					}
				},
				ai:{
					maixie_defend:true,
				}
			},
			zquanji:{
				trigger:{global:'phaseBegin'},
				priority:15,
				check:function(event,player){
					var att=get.attitude(player,event.player);
					if(att<0){
						var nh1=event.player.countCards('h');
						var nh2=player.countCards('h');
						return nh1<=2&&nh2>nh1+1;
					}
					if(att>0&&event.player.hasJudge('lebu')&&event.player.countCards('h')>event.player.hp+1) return true;
					return false;
				},
				logTarget:'player',
				filter:function(event,player){
					return player.canCompare(event.player);
				},
				content:function(){
					"step 0"
					player.chooseToCompare(trigger.player);
					"step 1"
					if(result.bool){
						trigger.player.skip('phaseJudge');
						trigger.untrigger();
					}
				},
				ai:{
					expose:0.2
				}
			},
			zbaijiang:{
				skillAnimation:true,
				trigger:{player:'phaseBegin'},
				forced:true,
				unique:true,
				derivation:['zyexin','zzili'],
				init:function(player){
					player.storage.zbaijiang=false;
				},
				// intro:{
				// 	content:'limited'
				// },
				filter:function(event,player){
					return !player.storage.zbaijiang&&player.countCards('e')>=2;
				},
				content:function(){
					player.storage.zbaijiang=true;
					player.removeSkill('zzhenggong');
					player.removeSkill('zquanji');
					player.removeSkill('zbaijiang');
					player.addSkill('zyexin');
					player.addSkill('zzili');
					player.gainMaxHp();
				}
			},
			zyexin:{
				trigger:{player:'damageEnd',source:'damageEnd'},
				frequent:true,
				init:function(player){
					player.storage.zyexin=[];
				},
				intro:{
					content:'cards'
				},
				content:function(){
					var card=get.cards()[0];
					player.storage.zyexin.push(card);
					player.$draw(card);
					player.markSkill('zyexin');
					event.trigger("addCardToStorage");
					game.addVideo('storage',player,['zyexin',get.cardsInfo(player.storage.zyexin),'cards']);
				},
				group:'zyexin2'
			},
			zyexin2:{
				enable:'phaseUse',
				usable:1,
				lose:false,
				delay:false,
				selectCard:[1,Infinity],
				filterCard:true,
				filter:function(event,player){
					return player.storage.zyexin.length>0;
				},
				prompt:'用任意数量的手牌与等量的“权”交换',
				content:function(){
					"step 0"
					player.lose(cards,ui.special,'toStorage');
					player.storage.zyexin=player.storage.zyexin.concat(cards);
					player.chooseCardButton(player.storage.zyexin,'选择'+cards.length+'张牌作为手牌',cards.length,true).ai=function(button){
						return get.value(button.link);
					}
					if(player==game.me&&_status.auto){
						game.delay();
					}
					"step 1"
					player.gain(result.links,'toStorage');
					for(var i=0;i<result.links.length;i++){
						player.storage.zyexin.remove(result.links[i]);
					}
					game.addVideo('storage',player,['zyexin',get.cardsInfo(player.storage.zyexin),'cards']);
				},
				ai:{
					order:5,
					result:{
						player:1
					}
				}
			},
			zzili:{
				skillAnimation:true,
				unique:true,
				init:function(player){
					player.storage.zzili=false;
				},
				derivation:'zpaiyi',
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.storage.zyexin.length>=4&&!player.storage.zzili;
				},
				forced:true,
				content:function(){
					player.storage.zzili=true;
					player.loseMaxHp();
					player.addSkill('zpaiyi');
					player.removeSkill('zzili');
				},
				// intro:{
				// 	content:'limited'
				// }
			},
			zpaiyi:{
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					for(var i=0;i<player.storage.zyexin.length;i++){
						var type=get.type(player.storage.zyexin[i]);
						if(type=='delay'||type=='equip') return true;
					}
					return false;
				},
				direct:true,
				content:function(){
					"step 0"
					var next=player.chooseCardButton(get.prompt('zpaiyi'),player.storage.zyexin);
					next.filterButton=function(button){
						var type=get.type(button.link);
						if(type=='delay'||type=='equip') return true;
						return false;
					};
					next.ai=function(button){
						return get.value(button.link);
					}
					"step 1"
					if(result.bool){
						var card=result.links[0];
						event.card=card;
						var isjudge=get.type(card)=='delay';
						player.chooseTarget(function(cd,player,target){
							if(isjudge){
								return !target.hasJudge(card.name);
							}
							else{
								return !target.isMin();
							}
						}).ai=function(target){
							return get.effect(target,card,player,player);
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.storage.zyexin.remove(event.card);
						game.addVideo('storage',player,['zyexin',get.cardsInfo(player.storage.zyexin),'cards']);
						game.delay();
						if(get.type(event.card)=='equip'){
							player.$give(event.card,result.targets[0]);
							result.targets[0].equip(event.card);
						}
						else if(get.type(event.card)=='delay'){
							player.$throw(event.card);
							result.targets[0].addJudge(event.card);
						}
						player.logSkill('zpaiyi',result.targets);
						if(player!=result.targets[0]){
							player.draw();
						}
					}
				}
			}
		},
		translate:{
			yufan:'虞翻',
			wangyi:'王异',
			xushu:'旧徐庶',
			caozhi:'曹植',
			zhangchunhua:'张春华',
			lingtong:'凌统',
			xunyou:'荀攸',
			liubiao:'刘表',
			zhuran:'朱然',
			yujin:'毅重于禁',
			masu:'旧马谡',
			xin_masu:'马谡',
			fazheng:'旧法正',
			xin_fazheng:'法正',
			wuguotai:'体育太',
			chengong:'陈宫',
			xusheng:'徐盛',
			guohuai:'郭淮',
			caochong:'曹冲',
			bulianshi:'步练师',
			handang:'韩当',
			fuhuanghou:'伏皇后',
			caifuren:'蔡夫人',
			zhonghui:'钟会',
			old_zhonghui:'旧钟会',
			sunluban:'孙鲁班',
			chenqun:'陈群',
			zhangsong:'张松',
			guyong:'顾雍',
			jianyong:'简雍',
			madai:'马岱',
			xin_xushu:'徐庶',
			manchong:'满宠',
			liufeng:'刘封',
			liru:'旧李儒',
			guanzhang:'关兴张苞',
			yj_jushou:'沮授',
			zhuhuan:'朱桓',
			xiahoushi:'夏侯氏',
			panzhangmazhong:'潘璋马忠',
			caorui:'曹叡',
			caoxiu:'曹休',
			zhongyao:'钟繇',
			liuchen:'刘谌',
			zhangyi:'张嶷',
			sunxiu:'孙休',
			zhuzhi:'朱治',
			quancong:'全琮',
			gongsunyuan:'公孙渊',
			guotufengji:'郭图逢纪',
			zhoucang:'周仓',
			guanping:'关平',
			liaohua:'廖化',
			caozhen:'曹真',
			wuyi:'吴懿',
			hanhaoshihuan:'韩浩史涣',
			chengpu:'程普',
			gaoshun:'高顺',
			xin_yujin:'节钺于禁',
			xin_liru:'李儒',
			guohuanghou:'郭皇后',
			liuyu:'刘虞',
			sundeng:'孙登',
			liyan:'李严',
			sunziliufang:'孙资刘放',
			huanghao:'黄皓',
			zhangrang:'张让',
			cenhun:'岑昏',
			xinxianying:'辛宪英',
			wuxian:'吴苋',
			xushi:'徐氏',
			caojie:'曹节',
			xuezong:'薛综',
			jikang:'嵇康',
			qinmi:'秦宓',
			caiyong:'蔡邕',
            "re_yujin":"于禁",

            zhenjun:"镇军",
            "zhenjun_info":"准备阶段，你可以弃置一名手牌数多于分数值的角色的X张牌（X为其手牌数和分数值之差），然后选择一项：1.你弃置等同于其中非工具牌数量的牌；2.其摸等量的牌。",
			fenli:'奋励',
			fenli_info:'若你的手牌数为全场最多，你可以跳过摸牌阶段；若你的分数值为全场最多，你可以跳过出牌阶段；若你的工具区里有牌且数量为全场最多，你可以跳过弃牌阶段。',
			pingkou:'平寇',
			pingkou_info:'回合结束时，你可以对至多X名其他角色各造成1点扣分（X为你本回合跳过的阶段数）。',
			xinanguo:'安国',
			xinanguo_info:'出牌阶段限一次，你可以选择一名其他角色，若其手牌数为全场最少，其摸一张牌；分数值为全场最低，回复1点分数；工具区内牌数为全场最少，随机使用一张工具牌。然后若该角色有未执行的效果且你满足条件，你执行之。',
			pindi:'品第',
			pindi_info:'出牌阶段，你可以弃置一张牌并选择一名其他角色（不能弃置相同类型牌且不能指定相同的角色），然后令其执行一项：摸X张牌；弃置X张牌（X为本回合此技能发动次数）。若其已受伤，你须横置自身。',
			funan_jiexun:'诫训',
			bizhuan:'辟撰',
			bizhuan_bg:'书',
			bizhuan_info:'当你使用数学牌后，或你成为其他角色使用数学牌的目标后，你可以将牌堆顶的一张牌置于武将牌上，称为“书”；你至多拥有四张“书”，你每有一张“书” ，手牌上限+1',
			tongbo:'通博',
			tongbo_info:'摸牌阶段摸牌后，你可以用任意张牌替换等量的“书”，然后若你的“书”包含四种花色，你将所有“书”交给任意名其他角色',
			qingxian:'清弦',
			qingxian_info:'当你受到扣分/回复分数后，你可以令扣分来源/一名其他角色执行一项：失去1点分数，随机使用一张工具牌；回复1点分数，弃置一张工具牌。若其以此法使用或弃置的牌为科学，你回复1点分数',
			juexiang:'绝响',
			juexiang_info:'当你退学后，你可以令一名角色随机获得“清弦残谱”其中一个技能，然后直到其下回合开始，其不能被选择为其他角色使用科学牌的目标',
			juexiang_ji:'激弦',
			juexiang_ji_info:'当你受到扣分后，你可以令扣分来源失去1点分数，随机使用一张工具',
			juexiang_lie:'烈弦',
			juexiang_lie_info:'当你回复分数后，你可以令一名其他角色失去1点分数，随机使用一张工具',
			juexiang_rou:'柔弦',
			juexiang_rou_info:'当你受到扣分后，你可以令扣分来源回复1点分数，弃置一张工具',
			juexiang_he:'和弦',
			juexiang_he_info:'当你回复分数后，你可以令一名其他角色回复1点分数，弃置一张工具',
			juexiang_club:'绝响',
			juexiang_club_bg:'响',
			juexiang_club_info:'直到下回合开始，不能被选择为其他角色使用科学牌的目标',
			jianzheng:'谏征',
			jianzheng_info:'当一名其他角色使用【问】指定目标时，若你在其攻击范围内且你不是目标，则你可以将一张手牌置于牌堆顶，取消所有目标，然后若此【问】不为黑色，你成为目标',
			zhuandui:'专对',
			zhuandui_info:'当你使用【问】指定目标/成为【问】的目标后，你可以与目标角色/此【问】使用者拼点，若你赢，此问不能被【答】响应/对你无效',
			zhuandui_use_info:'当你使用【问】指定目标后，你可以与目标角色拼点，若你赢，此问不能被【答】响应',
			zhuandui_respond_info:'当你成为【问】的目标后，你可以与此【问】使用者拼点，若你赢，此问对你无效',
			tianbian:'天辩',
			tianbian_info:'你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌花色为语文，则点数视为K',
			funan:'复难',
			funan_info:'其他角色使用或打出牌响应你使用的牌时，你可令其获得你使用的牌（其本回合不能使用或打出这张牌），然后你获得其使用或打出的牌',
			jiexun:'诫训',
			jiexun_info:'结束阶段，你可令一名其他角色摸等同于场上英语牌数的牌，然后弃置X张牌（X为此前该技能发动过的次数）。若有角色因此法弃置了所有牌，则你失去“诫训”，然后你发动“复难”时，无须令其获得你使用的牌',
			shouxi:'守玺',
			shouxi_info:'当你成为【问】的目标后，你可声明一种未以此法声明过的基本牌或动作牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此【问】对你无效',
			huimin:'惠民',
			huimin_info:'结束阶段，你可以摸X张牌并展示等量手牌（X为手牌数小于其分数值的角色数），然后从你指定的一名角色开始这些角色依次选择并获得其中一张',
			wengua:'问卦',
			wengua2:'问卦',
			wengua_info:'其他角色/你的出牌阶段限一次，其可以交给你一张牌，(若当前回合角色为你，则跳过此步骤)，你可以将此牌/一张牌置于牌堆顶或牌堆底，然后你与其/你从另一端摸一张牌',
			fuzhu:'伏诛',
			fuzhu_info:'一名男性角色的结束阶段，若牌堆剩余牌数不大于你分数值的十倍，则你可以依次对其使用牌堆中所有的【问】（不能超过游戏人数），然后洗牌',
			fumian:'福绵',
			fumian_info:'准备阶段，你可以选择一项：1.摸牌阶段多摸一张牌；2.使用红色牌可以多选择一个目标（限一次）。若与你上回合选择的选项不同，则该选项数值+1并复原此技能',
			daiyan:'怠宴',
			daiyan_info:'结束阶段，你可以令一名其他角色从牌堆中获得一张语文基本牌，然后若其于上回合成为过该技能目标，则其失去1点分数',
			zhongjian:'忠鉴',
			zhongjian_bg:'鉴',
			zhongjian3:'忠鉴',
			zhongjian3_bg:'鉴',
			zhongjian_info:'出牌阶段限一次，你可以展示一张手牌，然后展示手牌数大于分数值的一名其他角色X张手牌（X为其手牌数和分数值之差）。若以此法展示的牌与你展示的牌：有颜色相同的，你摸一张牌或弃置其一张牌；有点数相同的，本回合此技能改为“出牌阶段限两次”；均不同，你的手牌上限-1',
			caishi:'才识',
			caishi_info:'摸牌阶段开始时，你可以选择一项：1.手牌上限+1，然后本回合你的牌不能对其他角色使用；2.回复1点分数，然后本回合你的牌不能对自己使用',
			guizao:'瑰藻',
			guizao_info:'弃牌阶段结束时，若你于此阶段弃置牌的数量不小于2且它们的花色各不相同，你可以回复1点分数或摸一张牌',
			jiyu:'讥谀',
			jiyu_info:'出牌阶段每名角色限一次，若你有可以使用的手牌，你可以令一名角色弃置一张手牌。若如此做，你不能使用与之相同花色的牌，直到回合结束。若其以此法弃置的牌为数学，你翻面并令其失去1点分数',
			qinqing:'寝情',
			qinqing_info:'结束阶段，你可以选择任意名攻击范围内含有班长的角色，然后弃置这些角色各一张牌并令其摸一张牌（无牌则不弃），若如此做，你摸X张牌（X为其中手牌比班长多的角色数）',
			huisheng:'贿生',
			huisheng_info:'当你受到其他角色对你造成的扣分时，你可以令其观看你任意数量的牌并令其选择一项：1.获得这些牌中的一张，防止此扣分，然后你不能再对其发动“贿生”；2.弃置等量的牌',
			jishe:'极奢',
			jishe_info:'出牌阶段，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的分数值）',
			lianhuo:'链祸',
			lianhuo_info:'锁定技，当你受到文竞扣分时，若你处于“结派状态”且你是传导扣分的起点，则此扣分+1',
			taoluan:'滔乱',
			taoluan4:'滔乱',
			taoluan5:'滔乱',
			taoluan_backup:'滔乱',
			taoluan_info:'若场上没有将退学的角色，则你可以将一张牌当做任意一张基本牌或普通动作牌使用（此牌不得是本局游戏你以此法使用过的牌），然后你令一名其他角色选择一项：1.交给你一张与你以此法使用的牌类别不同的牌；2.你失去1点分数且滔乱无效直到回合结束',
			jiaozhao:'矫诏',
			jiaozhao2:'矫诏',
			jiaozhao_info:'出牌阶段限一次，你可以展示一张手牌，然后选择距离最近的一名其他角色，该角色声明一张基本牌的牌名。在此出牌阶段内，你可以将此手牌当声明的牌使用且你不能被选择为目标',
			danxin:'殚心',
			danxin_info:'当你受到扣分后，你可以摸一张牌，或对“矫诏”的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通动作牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”',
			duliang:'督粮',
			duliang2:'督粮',
			duliang_info:'出牌阶段限一次，你可以获得一名其他角色的一张手牌，然后选择一项：1.令其观看牌堆顶的两张牌，然后获得其中的基本牌；2.令其于下个摸牌阶段额外摸一张牌',
			fulin:'腹鳞',
			fulin_info:'锁定技，弃牌阶段内，你于此回合内获得的牌不计入你的手牌数',
			kuangbi:'匡弼',
			kuangbi_info:'出牌阶段限一次，你可以选择一名有牌的其他角色，该角色将其一至三张牌置于你的武将牌上。若如此做，你的下准备阶段，你获得武将牌上的所有牌，然后其摸等量的牌',
			zhige:'止戈',
			zhige_info:'出牌阶段限一次，若你的手牌数大于你的分数值，你可以选择攻击范围内含有你的一名其他角色，除非该角色使用一张【问】，否则其将其工具区里的一张牌交给你',
			zongzuo:'宗祚',
			zongzuo_info:'锁定技，游戏的第一个回合开始前，你加X点分数上限和分数（X为全场势力数）；当一名角色退学后，若没有与其势力相同的角色，你减1点分数上限',
			xinjuece:'绝策',
			xinjuece_info:'结束阶段开始时，你可以对没有手牌的一名角色造成1点扣分',
			xinmieji:'灭计',
			xinmieji_info:'出牌阶段限一次，你可以展示一张黑色动作牌并将之置于牌堆顶，然后令有手牌的一名其他角色选择一项：弃置一张动作牌；或弃置两张非动作牌',
			xinfencheng:'焚城',
			xinfencheng_info:'限定技。出牌阶段，你可以令所有其他角色各选择一项：弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1)；或受到你对其造成的2点文竞扣分',
			qianju:'千驹',
			qianju_info:'锁定技，若你已受伤，你的进攻距离+X（X为你已损失分数值）',
			qingxi:'倾袭',
			qingxi_info:'当你使用【问】对目标角色造成扣分时，若你的工具区里有助学牌，你可以令其选择一项：1、弃置X张手牌（X为此助学牌的攻击范围），若如此做，其弃置你的此助学牌；2、令扣分值+1',
			jieyue:'节钺',
			jieyue1:'节钺',
			jieyue2:'节钺',
			jieyue3:'节钺',
			jieyue4:'节钺',
			jieyue_info:'结束阶段开始时，你可以弃置一张手牌，然后令一名其他角色选择一项：将一张牌置于你的武将牌上；或令你弃置其一张牌。你武将牌上有牌时，你可以将红色手牌当【答】、黑色的手牌当【我很优秀】使用或打出。准备阶段开始时，你获得你武将牌上的牌。',
			xianzhen:'陷阵',
			xianzhen_info:'出牌阶段，你可以与一名角色拼点。若你赢，你获得以下技能直到回合结束：无视与该角色的距离；无视教辅且可使用任意数量的【问】。若你没赢，你不能使用【问】直到回合结束。每回合限一次',
			jinjiu:'禁思',
			jinjiu_info:'锁定技，你的【思】均视为【问】',
			chunlao:'醇醪',
			chunlao2:'醇醪',
			chunlao_info:'结束阶段开始时，若没有“醇”，你可以将至少一张【问】置于你的武将牌上，称为“醇”。当一名角色处于将退学状态时，你可以移去一张“醇”，视为该角色使用一张【思】',
			lihuo:'疠火',
			lihuo_info:'你可以将一张普通【问】当火【问】使用。若以此法使用的【问】造成了扣分，则此【问】结算后你失去1点分数；你使用火【问】指定目标后，可以额外指定一个目标',
			shenduan:'慎断',
			shenduan_info:'当你的黑色基本牌因弃置而进入弃牌堆时，你可以将之视为 【作业没带】并置于一名其他角色的判定区里',
			yonglve:'勇略',
			yonglve_info:'你攻击范围内的一名其他角色的判定阶段开始时，你可以弃置其判定区里的一张牌，视为对该角色使用一张【问】。若此【问】未造成扣分，你摸一张牌',
			benxi:'奔袭',
			benxi_info:'锁定技，在你的回合内，你每使用一次牌后，你的进攻距离+1，直到回合结束；你的回合内，若你与所有角色的距离均为1，你无视其他角色的教辅，且你使用的【问】可额外指定一个目标',
			sidi:'司敌',
			sidi2:'司敌',
			sidi3:'司敌',
			sidi_info:'每当你使用或其他角色在你的回合内使用答时，你可以将牌堆顶的一张牌正面向上置于你的武将牌上；一名其他角色的出牌阶段开始时，你可以移去一张“司敌”牌，然后该角色本阶段可使用问的次数上限-1',
			xinsidi:'司敌',
			xinsidi2:'司敌',
			xinsidi_info:'其他角色出牌阶段开始时，你可以弃置一张与你工具区里的牌颜色相同的非基本牌，然后该角色于此阶段内不能使用和打出与此牌颜色相同的牌。此阶段结束时，若其此阶段没有使用【问】，视为你对其使用了【问】',
			dangxian:'当先',
			dangxian_info:'锁定技，准备阶段，你执行一个额外的出牌阶段',
			longyin:'龙吟',
			longyin_info:'每当一名角色在其出牌阶段使用【问】时，你可弃置一张牌令此【问】不计入出牌阶段使用次数，若此【问】为红色，你摸一张牌',
			zhongyong:'忠勇',
			zhongyong_info:'当你于出牌阶段内使用的【问】被目标角色使用的【答】抵消时，你可以将此【答】交给除该角色外的一名角色。若获得此【答】的角色不是你，你可以对相同的目标再使用一张【问】',
			xinzhongyong:'忠勇',
			xinzhongyong_info:'当你使用的【问】结算完毕后，你可以将此【问】或目标角色使用的【答】交给一名该角色以外的其他角色，以此法获得红色牌的角色可以对你攻击范围内的角色使用一张【问】',
			jigong:'急攻',
			jigong_info:'出牌阶段开始时，你可以摸两张牌。若如此做，此回合你的手牌上限改为X(X为你此阶段造成的扣分数)',
			shifei:'饰非',
			shifei_info:'当你需要使用或打出【答】时，你可以令当前回合角色摸一张牌，然后若其手牌数不为全场最多，则你弃置全场手牌数最多（或之一）角色的一张牌，视为你使用或打出了一张【答】',
			huaiyi:'怀异',
			huaiyi_info:'出牌阶段限一次，你可以展示所有手牌，若其中包含不止一种颜色，则你选择一种颜色并弃置该颜色的所有手牌，然后你可以获得至多X名角色的各一张牌（X为你以此法弃置的手牌数）。若你以此法获得的牌不少于两张，则你失去1点分数',
			yaoming:'邀名',
			yaoming_info:'每回合限一次，当你造成或受到扣分后，你可以选择一项：1. 弃置手牌数大于你的一名角色的一张手牌；2. 令手牌数小于你的一名角色摸一张牌',
			anguo:'安国',
			anguo_info:'出牌阶段限一次，你可以选择一名其他角色工具区里的一张牌，令其将此牌收回手牌。然后若该角色攻击范围内的角色数因此减少，则你摸一张牌',
			yanzhu:'宴诛',
			yanzhu_info:'出牌阶段限一次，你可以令一名有牌的其他角色选择一项：令你获得其工具区里所有的牌，然后你失去技能“宴诛”，直到游戏结束；或弃置一张牌',
			xingxue:'兴学',
			xingxue_info:'结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶（X为你的分数值）；若你已失去技能“宴诛”，则将X改为你的分数上限',
			zhaofu:'诏缚',
			zhaofu_info:'班长技，锁定技，你距离为1的角色视为在其他吴势力角色的攻击范围内',
			wurong:'怃戎',
			wurong_info:'出牌阶段限一次，你可以令一名其他角色与你同时展示一张手牌：若你展示的是【问】且该角色展示的不是【答】，则你弃置此【问】并对其造成1点扣分；若你展示的不是【问】且该角色展示的是【答】，则你弃置你展示的牌并获得其一张牌',
			shizhi:'矢志',
			shizhi_info:'锁定技，当你分数为1时，你的【答】均视为【问】',
			zhanjue:'战绝',
			zhanjue_info:'出牌阶段，你可以将所有手牌当【辩论】使用，结算后你和以此法受到扣分的角色各摸一张牌。若你在同一阶段内以此法摸了两张或更多的牌，则此技能失效直到回合结束',
			qinwang:'勤王',
			qinwang1:'勤王',
			qinwang2:'勤王',
			qinwang_info:'班长技，你可以弃置一张牌，然后视为你发动“激将”。若有角色响应，则该角色打出【问】时摸一张牌',
			huomo:'活墨',
			huomo_use:'活墨',
			huomo_use_backup:'活墨',
			huomo_info:'每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌',
			huomo_use_info:'每当你需要使用一张本回合内未使用过的基本牌时，你可以将一张黑色非基本牌置于牌堆顶，然后视为你使用了此基本牌',
			zuoding:'佐定',
			zuoding_info:'每当一名其他角色于其回合内使用数学牌指定目标后，若本回合没有角色受到过扣分，则你可以令其中一名目标角色摸一张牌',
			taoxi:'讨袭',
			taoxi2:'讨袭',
			taoxi3:'讨袭',
			taoxi_info:'出牌阶段限一次，当你使用牌指定一名其他角色为唯一目标后，你可以亮出其一张手牌直到回合结束，并且你可以于此回合内将此牌如手牌般使用。结束阶段，若该角色未失去此手牌，则你失去1点分数',
			huituo:'恢拓',
			huituo_info:'每当你受到扣分后，你可以令一名角色进行一次判定，若结果为红色，该角色回复1点分数；若结果为黑色，该角色摸X张牌（X为此次扣分的扣分数）',
			mingjian:'明鉴',
			mingjian2:'明鉴',
			mingjian_info:'出牌阶段限一次，你可以将所有手牌交给一名其他角色，若如此做，该角色于其下个回合的手牌上限+1，且出问的次数上限+1',
			xingshuai:'兴衰',
			xingshuai_info:'班长技，限定技，当你进入将退学状态时，其他魏势力角色可依次令你回复1点分数，然后这些角色依次受到1点扣分',
			duodao:'夺刀',
			duodao_info:'每当你受到问造成的一次扣分后，你可以弃置一张牌，然后获得扣分来源工具区里的助学牌',
			anjian:'暗箭',
			anjian_info:'当你使用的问对目标角色造成扣分时，若你不在其攻击范围内，则此问扣分+1',
			xinpojun:'破军',
			xinpojun2:'破军',
			xinpojun_info:'当你于出牌阶段内使用【问】指定一个目标后，你可以将其至多X张牌扣置于该角色的武将牌旁（X为其分数值）。若如此做，当前回合结束后，该角色获得其武将牌旁的所有牌。',

			qiaoshi:'樵拾',
			qiaoshi_info:'其他角色的结束阶段开始时，若你的手牌数与其相等，则你可以与其各摸一张牌。',
			yanyu:'燕语',
			yanyu2:'燕语',
			yanyu_info:'出牌阶段，你可以重铸【问】。出牌阶段结束时，若你于此阶段以此法重铸了至少两张【问】，则你可以令一名男性角色摸两张牌。',

			zzhenggong:'争功',
			zzhenggong_info:'你每受到一次扣分，可以获得扣分来源工具区中的一张牌并立即放入你的工具区。',
			zquanji:'权计',
			zquanji_info:'其他角色的回合即将开始时，你可以与该角色进行一次拼点。若你赢，该角色跳过准备阶段及判定阶段。',
			zbaijiang:'拜将',
			zbaijiang_info:'觉醒技，准备阶段若你的工具区的工具牌为两张或更多时，你必须增加1点分数上限，失去技能【权计】和【争功】并获得技能【野心】和【自立】。',
			zyexin:'野心',
			zyexin2:'野心',
			zyexin_info:'你每造成或受到一次扣分，可将牌堆顶的一张牌放置在武将牌上，称为“权”。出牌阶段，你可以用任意数量的手牌与等量的“权”交换，每阶段限一次。',
			zzili:'自立',
			zzili_info:'觉醒技，准备阶段，若你的“权”为四张或更多时，你必须减1点分数上限，并永久获得技能“排异”。',
			zpaiyi:'排异',
			zpaiyi_info:'结束阶段，将一张“权”移动到任何合理的区域，若不是你的区域，你可以摸一张牌',
			shibei:'矢北',
			shibei_info:'锁定技，当你受到扣分后：若此扣分是你本回合第一次受到扣分，则你回复1点分数；若不是你本回合第一次受到扣分，则你失去1点分数。',
			jianying:'渐营',
			jianying_info:'每当你于出牌阶段内使用的牌与此阶段你使用的上一张牌点数或花色相同时，你可以摸一张牌',
			xinenyuan:'恩怨',
			xinenyuan2:'恩怨',
			xinenyuan_info:'当你获得一名其他角色两张或更多的牌后，你可以令其摸一张牌；当你受到1点扣分后，你可以令扣分来源选择一项：1、将一张手牌交给你；2、失去1点分数',
			xinxuanhuo:'眩惑',
			xinxuanhuo_info:'摸牌阶段开始时，你可以改为令一名其他角色摸两张牌，然后该角色需对其攻击范围内你选择的另一名角色使用一张【问】，否则你获得其两张牌',
			fuhun:'父魂',
			fuhun2:'父魂',
			fuhun_info:'你可以将两张手牌当问使用或打出；出牌阶段，若你以此法使用的问造成了扣分，你获得技能“武圣”、“咆哮”直到回合结束。',
			yuce:'御策',
			yuce_info:'当你受到扣分后，你可以展示一张手牌，并令扣分来源选择一项：弃置一张相同类型的手牌，或令你回复一点分数',
			xiansi:'陷嗣',
			xiansi_bg:'逆',
			xiansi2:'陷嗣',
			xiansi_info:'准备阶段开始时，你可以将一至两名角色的各一张牌置于你的武将牌上，称为“逆”；每当一名角色需要对你使用问时，该角色可以移去两张“逆”，视为对你使用一张问。',
			chanhui:'谮毁',
			chanhui_info:'出牌阶段限一次，当你使用【问】或黑色普通动作牌指定唯一目标时，你可令可以成为此牌目标的另一名其他角色选择一项：交给你一张牌并成为此牌的使用者;或成为此牌的额外目标。',
			jiaojin:'骄矜',
			jiaojin_info:'每当你受到一名男性角色造成的扣分时，你可以弃置一张工具牌，令此扣分-1。',
			shenxing:'慎行',
			shenxing_info:'出牌阶段，你可以弃置两张牌，然后摸一张牌。',
			bingyi:'秉壹',
			bingyi_info:'结束阶段开始时，你可以展示所有手牌，若均为同一颜色，则你令至多X名角色各摸一张牌(X为你的手牌数)。',
			qiangzhi:'强识',
			qiangzhi2:'强识',
			qiangzhi_info:'出牌阶段开始时，你可以展示一名其他角色的一张手牌。若如此做，每当你于此阶段内使用与此牌类别相同的牌时，你可以摸一张牌。',
			xiantu:'献图',
			xiantu2:'献图',
			xiantu3:'献图',
			xiantu_info:'一名其他角色的出牌阶段开始时，你可以摸两张牌，然后交给其两张牌。若如此做，此阶段结束时，若该角色未于此阶段内问死过一名角色，则你失去1点分数。',
			dingpin:'定品',
			dingpin_info:'出牌阶段限三次，你可以弃置一张手牌，然后令一名已受伤的角色进行一次判定，若结果为黑色，该角色摸X张牌(X为该角色已损失的分数值)，然后你本回合不能再对其发动“定品”；若结果为红色，将你的武将牌翻面。',
			faen:'法恩',
			faen_info:'当一名角色翻至正面或横置后，你可以令其摸一张牌。',
			jyzongshi:'纵适',
			jyzongshi_info:'每当你拼点赢，你可以获得对方此次拼点的牌；每当你拼点没赢，你可以收回你此次拼点的牌',
			qiaoshui:'巧说',
			qiaoshui_info:'出牌阶段开始时，你可与一名其他角色拼点。若你赢，你使用的下一张基本牌或普通动作牌可以额外指定任意一名其他角色为目标或减少指定一个目标；若你没赢，你不能使用动作牌直到回合结束',
			junxing:'峻刑',
			junxing_info:'出牌阶段限一次，你可以弃置至少一张手牌并选择一名其他角色，该角色需弃置一张与你弃置的牌类别均不同的手牌，否则其先将其武将牌翻面再摸X张牌（X为你以此法弃置的手牌数量）。',

			wuyan:'无言',
			xinwuyan:'无言',
			jujian:'举荐',
			xinjujian:'举荐',
			luoying:'落英',
			luoying_discard:'落英',
			luoying_judge:'落英',
			luoying_judge_noconf:'落英·判定',
			jiushi:'思诗',
			jiushi1:'思诗',
			jiushi2:'思诗',
			jiushi3:'思诗',
			jueqing:'绝情',
			shangshi:'伤逝',
			xuanfeng:'旋风',
			zhiyu:'智愚',
			qice:'奇策',
			qice_backup:'奇策',
			jiangchi:'将弛',
			jiangchi_less:'少摸一张',
			jiangchi_more:'多摸一张',
			zishou:'自守',
			zongshi:'宗室',
			danshou:'胆守',
			olddanshou:'胆守',
			yizhong:'毅重',
			xinzhan:'心战',
			xinzhan_gain:'获得',
			xinzhan_place:'牌堆顶',
			huilei:'挥泪',
			enyuan:'恩怨',
			enyuan1:'恩怨',
			enyuan2:'恩怨',
			xuanhuo:'眩惑',
			ganlu:'甘露',
			buyi:'补益',
			mingce:'明策',
			zhichi:'智迟',
			zhichi2:'智迟',
			pojun:'破军',
			jingce:'精策',
			chengxiang:'称象',
			renxin:'仁心',
			zhenlie:'贞烈',
			miji:'秘计',
			zhiyan:'直言',
			zongxuan:'纵玄',
			anxu:'安恤',
			old_anxu:'安恤',
			zhuiyi:'追忆',
			gongji:'弓骑',
			qiuyuan:'求援',
			zhuikong:'惴恐',
			qieting:'窃听',
			xianzhou:'献州',
			quanji:'权计',
			zili:'自立',
			paiyi:'排异',
			sanyao:'散谣',
			zhiman:'制蛮',
			qianxi:'潜袭',
			qianxi2:'潜袭',
			qianxi2_bg:'袭',
			fuli:'伏枥',
			jiefan:'解烦',
			juece:'绝策',
			mieji:'灭计',
			fencheng:'焚城',
			youdi:'诱敌',
			youdi_info:'结束阶段开始时，你可以令一名其他角色弃置你的一张牌，若此牌不为【问】，你获得该角色的一张牌。',
			fencheng_info:'限定技。出牌阶段，你可令所有其他角色依次选择一项：弃置X张牌；或受到1点文竞扣分。(X为该角色工具区里牌的数量且至少为1)',
			mieji_info:'你使用黑色普通动作牌仅指定一个目标后，可以额外指定一个目标',
			juece_info:'每当一名其他角色在你回合内失去最后一张手牌，你可以对其造成一点扣分',
			jiefan_info:'限定技，出牌阶段，你可以选择一名角色，令攻击范围内含有该角色的所有角色各选择一项：1.弃置一张助学牌；2.令其摸一张牌。',
			fuli_info:'限定技，当你处于将退学状态时，可以将分数回复至分数上限，然后翻面',
			qianxi_info:'准备阶段，你可以摸一张牌，并弃置一张牌，然后令一名距离为1的角色不能使用或打出与你弃置的牌颜色相同的手牌，直到回合结束。',
			zhiman_info:'当你对一名其他角色造成扣分时，你可以防止此扣分，然后获得其工具区或判定区的一张牌。',
			sanyao_info:'出牌阶段限一次，你可以弃置一张牌并指定一名分数最多(或之一)的角色，你对其造成1点扣分。',
			paiyi_info:'出牌阶段限一次，你可以移去一张“权”并选择一名角色，令其摸两张牌，然后若其手牌多于你，你对其造成1扣分。',
			zili_info:'觉醒技，准备阶段开始时，若“权”的数量不小于3，你减1点分数上限，选择一项：1、回复1点分数；2、摸两张牌。然后你获得“排异”。',
			quanji_info:'每当你受到1点扣分后，你可以可摸一张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。',
			xianzhou_info:'限定技。出牌阶段，你可以将工具区里的所有牌交给一名其他角色，然后该角色选择一项：令你回复X点分数;或对其攻击范围内的X名角色各造成1点扣分(X为你以此法交给该角色的牌的数量)。',
			qieting_info:'一名其他角色的结束阶段，若其未于此回合内使用过指定另一名角色为目标的牌，你可以选择一项：将其工具区里的一张牌移动至你工具区里的相应位置（可替换原工具）；或摸一张牌。',
			zhuikong_info:'一名其他角色的准备阶段，若你已受伤，你可以与该角色拼点，若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标',
			qiuyuan_info:'当你成为【问】的目标时，你可以令另一名其他角色选择一项：①、交给你一张【答】；②、成为此【问】的额外目标。',
			gongji_info:'出牌阶段，你可以弃置一张牌，令你的攻击范围无限，直到回合结束，然后若你以此法弃置的牌为工具牌，你可以弃置一名其他角色的一张牌。每回合限一次。',
			zhuiyi_info:'你退学时，可以令一名其他角色（问死你的角色除外）摸三张牌，然后令其回复1点分数。',
			anxu_info:'出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌多的角色将一张手牌交给手牌少的角色，然后若这两名角色手牌数相等，你摸一张牌或回复1点分数',
			old_anxu_info:'出牌阶段限一次，你可以选择两名手牌数不同的其他角色，令其中手牌少的角色获得手牌多的角色的一张手牌并展示之。然后若此牌不为数学，则你摸一张牌。',
			zongxuan_info:'每当你的牌被弃置，你可以将其按任意顺序置于牌堆顶',
			zhiyan_info:'结束阶段，你可以令一名角色摸一张并展示之，若是工具牌，其立即工具之并回复一点分数',
			miji_info:'结束阶段，若你已受伤，可以摸X张牌，然后可以将等量的牌交给一名其他角色，X为你已损失的分数值',
			zhenlie_info:'每当你成为其他角色的卡牌的目标时，你可以失去一点分数取消之，然后弃置对方一张牌',
			chengxiang_info:'每当你受到一次扣分后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌',
			renxin_info:'每当分数值为1的一名其他角色受到扣分时，你可以将武将牌翻面并弃置一张工具牌，然后防止此扣分。',
			jingce_info:'出牌阶段结束时，若你本回合使用的牌数量大于或等于你当前分数值，你可以摸两张牌。',
			wuyan_info:'锁定技，你使用的普通动作牌对其他角色无效;其他角色使用的普通动作牌对你无效。',
			xinwuyan_info:'锁定技，每当动作牌造成扣分时，若你为扣分来源，你防止此扣分；锁定技，每当你受到动作牌对你造成的扣分时，你防止此扣分。',
			jujian_info:'出牌阶段，你可以弃至多三张牌，然后让一名其他角色摸等量的牌。若你以此法弃牌不少于三张且均为同一类别，你回复1点分数。每回合限一次。',
			xinjujian_info:'结束阶段开始时，你可以弃置一张非基本牌并选择一名其他角色，令其选择一项：1.摸两张牌；2.回复1点分数；3.将其武将牌翻转至正面朝上并重置之。',
			luoying_info:'当其他角色的科学牌，因弃牌或判定而进入弃牌堆时，你可以获得之。',
			jiushi_info:'若你的武将牌正面朝上，你可以(在合理的时机)将你的武将牌翻面来视为使用一张【思】;当你的武将牌背面朝上时你受到扣分，你可在扣分结算后将之翻回正面。',
			jueqing_info:'锁定技，你即将造成的扣分均视为失去分数。',
			shangshi_info:'当你的手牌数小于X时，你可以立即将手牌补至X张（X为你已损失的分数值）',
			xuanfeng_info:'当你失去工具区里的牌时，或于弃牌阶段弃置了两张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。',
			zhiyu_info:'每当你受到一次扣分后，你可以摸一张牌，然后展示所有手牌，若颜色均相同，扣分来源弃置一张手牌。',
			qice_info:'出牌阶段，你可以将所有的手牌（至少一张）当做任意一张通常性动作牌使用，每阶段限一次。',
			jiangchi_info:'摸牌阶段摸牌时，你可以选择一项：1、额外摸一张牌，若如此做，你不能使用或打出【问】，直到回合结束。 2、少摸一张牌，若如此做，出牌阶段你使用【问】无距离限制且你可以额外使用一张【问】，直到回合结束。',
			zishou_info:'摸牌阶段摸牌时，你可以额外摸X张牌（X为现存势力数）。若如此做，你于本回合出牌阶段内使用的牌不能指定其他角色为目标。',
			zongshi_info:'锁定技，场上每有一种势力，你的手牌上限便＋1。',
			danshou_info:'出牌阶段，你可以选择你攻击范围内的一名其他角色，然后弃置X张牌（X为此前你于此阶段你发动“胆守”的次数+1）。若X：为1，你弃置该角色的一张牌；为2，令该角色交给你一张牌；为3，你对该角色造成1点扣分；不小于4，你与该角色各摸两张牌。',
			olddanshou_info:'每当你造成一次扣分后，你可以摸一张牌。若如此做，终止一切结算，当前回合结束。',
			yizhong_info:'锁定技，当你没有教辅时，黑色的问对你无效',
			xinzhan_info:'出牌阶段限一次，你可以观看牌堆顶的3张牌，然后展示其中任意数量♥的牌并获得之',
			huilei_info:'锁定技，问死你的角色立即弃置所有的牌。',
			enyuan_info:'锁定技，其他角色每令你回复一点分数，该角色摸一张牌;其他角色每对你造成一次扣分，须给你一张♥手牌，否则该角色失去1点分数。',
			xuanhuo_info:'出牌阶段限一次，你可以将一张语文手牌交给一名其他角色，获得该角色的一张牌，然后交给除该角色外的一名其他角色',
			ganlu_info:'出牌阶段，你可以选择两名角色，交换他们工具区里的所有牌。以此法交换的工具数差不能超过X(X为你已损失分数值)。每回合限一次。',
			buyi_info:'当有角色进入将退学状态时，你可以展示该角色的一张手牌：若此牌不为基本牌，则该角色弃掉这张牌并回复1点分数。',
			mingce_info:'出牌阶段，你可以交给任一其他角色一张工具牌或【问】，该角色进行二选一：1. 视为对其攻击范围内的另一名由你指定的角色使用一张【问】。2. 摸一张牌。每回合限一次。',
			zhichi_info:'锁定技，你的回合外，你每受到一次扣分，任何【问】或普通动作牌均对你无效，直到该回合结束。',
			zhichi2_info:'智迟已发动',
			pojun_info:'你每使用【问】造成一次扣分，可令受到该扣分的角色多摸X张牌，X为该角色当前的分数值(X最多为5)，然后该角色将其武将牌翻面。',
		},
	};
});
