'use strict';
game.import('character',
	function (lib, game, ui, get, ai, _status) {
	return {
		name: 'retps',
		connect: true,
		character: {
		    re_liujiqing:['male','shen',3,["tps_lianzhi","tps_re_jingxin","tps_school_2z"],["shu","tps"]],
		    re_xiaohong:['male','shen',3,['tps_zhuangbi','tps_bici',"tps_school_2z"],['shu']],
		    zhoulinghang: ['male', 'wu', 3, ['tps_pengzhang','tps_yifen','tps_school_xj']],
		    re_hezihang: ['male', 'qun', 3, ['tps_re_caiyi','tps_fuyou','tps_school_xj']],
			wangzile: ['male', 'qun', 2, ['tps_xingyun', 'tps_laolian','tps_school_14']],
			wangguiyang: ['male', 'wu', 3, ['tps_xiabi']],
			wumengxiang: ['male', 'wu', 6, ['benghuai','tps_qingui']],
		    re_shiao: ['male', 'shu', 4, ['tps_re_bufa', 'tps_bangtou','tps_langxing','tps_school_xj']],
			xuheng: ['male', 'wu', 3, ['tps_bier','tps_school_xj']],
			re_huanghaojun: ['male', 'wei', 4, ['tps_siren','tps_zuosi','tps_re_shangjin']],
		    re_zhengqihang:['male','shu',4,['tps_re_qianshui','tps_tuoqiao','tps_school_xj']],
			re_chenkaihao: ['male', 'wei', 3, ['tps_jinze', 'tps_renqing'], ['des:陈凯豪可谓是初三四班最帅的之一，作为一个语文课代表，<s>他非常的尽职</s>。']],
			xujingyi: ['male', 'wei', 3, ['xinjianxiong', 'tps_weigui'], ['des:徐憬怿作为秦王能面不改色地应对比他高一个头的荆轲（贵炀兄），违起纪来跟写一篇美妙的诗歌一样，而且他在这两个方面都做得很好。']],
			hushiqun: ['male', 'wu', 3, ['tps_jinji','tps_guanlan','tps_tujin']],
			re_lujunyu: ['male', 'qun', 3, ['tps_re_mensao']],
			re_shouxintao:['male','shen',0,['tps_guoren','tps_school_xj'],['wu']],
			re_xusichen: ['male', 'qun', 2, ['tps_zuobishen', 'tps_baofa', 'tps_school_hg']],
			maozihao: ['male', 'shu', 3, ['tps_wanji', 'tps_gaile','tps_school_14']],
			zhanglingkai: ['male', 'shu', 3, ['tps_huashui', 'xinguanxing','tps_shuipi']],
			re_gechenqi: ['male', 'wu', 4, ['tps_nudui','reganglie']],
			chenzhenbo: ['male', 'shu', 4, ['liangong', 'tps_juehou'], ['des:陈桢博，反低效学习小组创始人之一，是反低效学习小组中最有发言权的人，不仅如此，他还因为日人功夫了得而被太平吉安成员熟知。']],
			yuanyuxuan: ['male', 'shu', 3, ['shensi', 'tiba',"tps_school_2z"], ['des:袁雨轩，是太平吉安总部最强大的刷题者，不仅作业刷的快，还有令人羡慕的好成绩。就是有时候老是被姚皇燊上。']],
			re_chenhongliang: ['male', 'wu', 4, ['tps_lumang']],
			re_panhaotian: ['male', 'shu', 3, ['tps_yonglan','tps_shicai','tps_cunmu','tps_school_xj'], ['des:潘皓天，太平吉安中不太突出的一个人物，喜欢阅读。']],
			liangyue: ['male', 'shen', Infinity, ['tps_wudi', 'tps_shoucuo', 'tps_duoluo','tps_school_14'], ['des:太平吉安人际关系中心，爱好编程，但学习成绩并不稳定','shu']],
			yaohuangshen: ['male', 'wu', 3, ['tps_huyou','tps_yuanhuo', 'jiuchi','tps_school_xj'], ['des:机灵鬼一个，身手矫健，爱耍小聪明。']],
			re_zhangyihe: ['female', 'shen', 3, ['tps_nixue',"tps_school_2z"],['wei']],
			re_fangyiyuan: ['female', 'qun', 3, ['tps_feili','tps_mengtai']],
			chengjingya: ['female', 'qun', 4, ['tps_juai','tps_huoai','tps_school_xj']],
			luxinting: ['female', 'wei', 3, ['tps_qinxue']],
			liuchun: ['female', 'wu', 3, ['tps_jiwei']],
			re_wangjing: ['female', 'qun', 3, ['xinzhiheng','tps_chadao','jiuyuan','tps_school_14'],['zhu']],
			//re_zhangjiahui:['female','wu',3,['xiaoji','xinjieyin']],
			mouminzi: ['female', 'wei', 3, ['tps_tianwen', 'tps_miaobi', 'tps_shenghua']],
			re_chenyimiao: ['female', 'shen', 3, ['tps_re_qiangpo','tps_re_zhuanzhu', 'tps_school_hg'],['wei']],
			re_laileshang: ['female', 'wei', 3, ['tps_bihu','tps_bili']],
			re_wangchenxiao: ['female', 'shu', 3, ['tps_shushen', 'tps_zeyou', 'tps_school_hg']],
			re_zhangche: ['female', 'wei', 3, ['tps_pianwen', 'tps_re_wencai', 'tps_school_hg']],
			jiangxiyu:['female','qun',3,['tps_fanren','tps_school_xj']],
			re_liufangfei: ['female', 'qun', 4, ['tps_gemo','hyunshen']],
			re_yuruijia: ['female', 'shu', 3, ['tps_shushen','tps_school_14']],
			laimeixi: ['female', 'qun', 3, ['lijian','beige']],
			
			re_wangjie: ['female', 'shu', 3,['tps_jiexin','tps_jiesi','tps_liuji']]
		},
		characterFilter: {},
		characterIntro: {
		    re_liujiqing:"<strong>作为杭州市的中考状元之一</strong>，“柳季青一直是一个规范的孩子”，这是大部分老师对他一致的评价。规范的排版，规范的学习方法，规范的……",
		    re_xiaohong:"装逼的小红像太阳，照耀着四班的大地，摧毁者同学的希望，小红的留级是不可战胜的力量。",
		    zhoulinghang:"阳光四班最活跃也最爱打篮球的数学课代表，这三年来不仅他的数学成绩频频令大家叹为观止，他的感情生活也收获颇丰。",
		    re_hezihang:"他是阳光四班初一初二时的“泥哥”，也是初三上时最为耀眼的黑马，东南的磨练使他从才艺到学习方面的潜力统统爆发。",
		    wangzile:"113和一些女生眼中当之无愧的携带食品担当，通过自己老油条一样的违纪技术，他很少被发现。",
		    wangguiyang:"作为全东南闻名遐迩的戏精和全年级闻名的杠精，王贵炀有着一个不一样的脑子和浪费灵魂和无心。",
		    wumengxiang:"吴孟祥，虽然很胖但打篮球很灵活，<strong>现已离开东南</strong>。",
		    re_shiao:'施敖是最有天分也是最不守纪律的一个，初一初二从不写作业，经常带着他们寝室的人违纪。',
		    xuheng:"他虽目光呆滞，但其分数惊人；他虽其貌不扬，却是一个投实心球的好手。",
		    re_huanghaojun:"黄浩峻对德意志第三帝国爱得深沉，因经常被葛大爷骂被誉为“死人”而得称号。",
		    re_zhengqihang:"郑同学因为自己写自己的名字写的像个“郑**”而获得了“**”的称号，委婉来说就是“鳖”或“王九”。总想用自己的一套“利益论”解释问题。",
			re_shouxintao:'寿鑫涛，阳光四班大名鼎鼎的名誉班长，看似中上徘徊的成绩，却直夺<strong>学军保送生考试第二名（据某副校长言，不过寿自己也不知道）</strong>；看似放浪的学习态度，却拿下校四模年级第一。',
			re_xusichen:'你可不能小瞧短小精悍的徐思辰，这人既能作弊被抓，又能名列前茅。',
			re_chenhongliang:'此货人际关系较广，不过许多都叫他欠债还钱。因为其举止有些粗鲁，一度被称为尸比（屁）。不过打架的话最好别找他。',
			re_zhangyihe:'作为阳光四班当之无愧的学神，她的年级第一次数雄霸年级第一，作为<strong>二中的保送生</strong>，她有一个美好的未来。',
			re_zhangche:"她可以说是一个能与牟旻紫有一拼的写作好手，优美的文章备受老师们的青睐，她在其他方面的努力也正在被大家所认可。",
			jiangxiyuL:"(暂无)",
			re_yuruijia:"她是女生中最为规范的人之一，无论是老王还是老朱都认可她的答题规范，她安静地学习，安静地做人。",
			laimeixi:'阳光四班全职抄写课表人，并作为一名持续进步的好榜样留在阳光四班的人心中。',
		},
		characterTitle: {},
		perfectPair: {},
		skill: {
		    tps_lumang: {
				audio: true,
				forced: true,
				trigger: {
					player: "phaseBegin",
				},
				content: function () {
					"step 0"
					player.judge(function (card) {
						if (get.color(card) == 'red')
							return 1.5;
						return -1.5;
					}, ui.special);
					"step 1"
					if (result.judge > 0) {
						player.addTempSkill('tps_lumang1', {
							player: 'phaseAfter'
						});
					} else {
						player.addTempSkill('tps_lumang2', {
							player: 'phaseBegin'
						});
						player.addTempSkill('tps_lumang3', {
							player: 'phaseBegin'
						});
					}
					event.finish();
				},
			},
			tps_lumang1: {
			    group:['tps_lumang4','tps_lumang5'],
				mod: {
					targetInRange: function (card, player, target, now) {
						if (card.name == 'sha' && get.color(card) == 'red')
							return true;
					},
					cardUsable: function (card, player, num) {
						if (card.name == 'sha')
							return num + 1;
					}
				},
				trigger: {
					player: 'shaBegin'
				},
				forced: true,
				filter: function (event, player) {
					return event.card && get.color(event.card) == 'red';
				},
				content: function () {
					trigger.directHit = true;
				}
			},
			tps_lumang2: {
				mod: {
					cardEnabled: function (card, player) {
						if (_status.event.skill != 'tps_lumang2' && card.name != 'sha' && get.color(card) == 'black')
							return false;
					},
					cardUsable: function (card, player) {
						if (_status.event.skill != 'tps_lumang2' && card.name != 'sha' && get.color(card) == 'black')
							return false;
					},
					cardRespondable: function (card, player) {
						if (_status.event.skill != 'tps_lumang2' && card.name != 'sha' && get.color(card) == 'black')
							return false;
					},
					cardSavable: function (card, player) {
						if (_status.event.skill != 'tps_lumang2' && card.name != 'sha' && get.color(card) == 'black')
							return false;
					},
				},
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				filterCard: {
					color: "black",
				},
				viewAs: {
					name: "sha",
				},
				check: function () {
					return 1
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, 'respondSha') && current < 0)
								return 0.6
						},
					},
					respondSha: true,
					order: 4,
					useful: -1,
					value: -1,
					basic: {
						useful: [5, 1],
						value: [5, 1],
					},
					result: {
						target: function (player, target) {
							if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
								if (get.attitude(player, target) > 0) {
									return -6;
								} else {
									return -3;
								}
							}
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison')
								return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature)
								return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire')
								return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder')
								return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison')
								return 1;
						},
					},
				},
			},
			tps_lumang3: {
				mod: {
					cardEnabled: function (card, player) {
						if (_status.event.skill != 'tps_lumang3' && card.name != 'shan' && get.color(card) == 'red')
							return false;
					},
					cardUsable: function (card, player) {
						if (_status.event.skill != 'tps_lumang3' && card.name != 'shan' && get.color(card) == 'red')
							return false;
					},
					cardRespondable: function (card, player) {
						if (_status.event.skill != 'tps_lumang3' && card.name != 'shan' && get.color(card) == 'red')
							return false;
					},
					cardSavable: function (card, player) {
						if (_status.event.skill != 'tps_lumang3' && card.name != 'shan' && get.color(card) == 'red')
							return false;
					},
				},
				audio: 2,
				enable: ["chooseToUse", "chooseToRespond"],
				filterCard: function (card) {
					return get.color(card) == 'red';
				},
				viewAs: {
					name: "shan",
				},
				viewAsFilter: function (player) {
					if (!player.countCards('h', {
							color: 'red'
						}))
						return false;
				},
				check: function () {
					return 1;
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, 'respondShan') && current < 0)
								return 0.6
						},
					},
					respondShan: true,
					order: 4,
					useful: -1,
					value: -1,
					basic: {
						useful: [5, 1],
						value: [5, 1],
					},
					result: {
						target: function (player, target) {
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison')
								return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature)
								return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire')
								return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder')
								return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison')
								return 1;
						},
					},
				},
			},
			tps_lumang4:{
				audio:1,
				filter:function(event,player){
					return player.countCards('he',{color:'red'})>0;
				},
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'shan'},
				prompt:'将一张文科牌当答使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					threaten:1.5
				}
			},
			tps_lumang5:{
				audio:1,
				filter:function(event,player){
					return player.countCards('he',{color:'red'})>0;
				},
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'sha'},
				prompt:'将一张理科牌当问使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					threaten:1.5
				}
			},
			tps_baofa: {
				group: ["tps_baofa1", "tps_baofa2", "tps_baofa3", "tps_baofa4"],
				ai: {
					skillTagFilter: function (player, tag) {
						switch (tag) {
						case 'respondSha': {
								if (player.countCards('he') < Math.max(1, player.hp))
									return false;
								break;
							}
						case 'respondShan': {
								if (player.countCards('he') < Math.max(1, player.hp))
									return false;
								break;
							}
						case 'save': {
								if (player.countCards('he') < Math.max(1, player.hp))
									return false;
								break;
							}
						}
					},
					maixie: true,
					save: true,
					respondSha: true,
					respondShan: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'recover') && target.hp >= 1)
								return [0, 0];
							if (!target.hasFriend())
								return;
							if ((get.tag(card, 'damage') == 1 || get.tag(card, 'loseHp')) && target.hp > 1)
								return [0, 1];
						},
					},
					threaten: function (player, target) {
						if (target.hp == 1)
							return 2;
						return 0.5;
					},
				},
			},
			tps_baofa1:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张牌当作习使用';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'tao'},
				filter:function(event,player){
					return player.countCards('he')>=player.hp;
				},
				filterCard:function(card){
					return true;
				}
			},
			tps_baofa2:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张牌当作年级问使用或打出';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'sha',nature:'fire'},
				filter:function(event,player){
					return player.countCards('he')>=player.hp;
				},
				filterCard:function(card){
					return true;
				}
			},
			tps_baofa3:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张牌当作我很优秀使用';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 7-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'wuxie'},
				viewAsFilter:function(player){
					return player.countCards('he')>=player.hp;
				},
				filterCard:function(card){
					return true;
				}
			},
			tps_baofa4:{
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张当作答打出';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'shan'},
				filterCard:function(card){
					return true;
				}
			},
			tps_nixue:{
				unique:true,
				trigger:{player:'damageEnd',global:'gameStart'},
				direct:true,
				init:function(player){
					player.storage.tps_nixue=[];
					// player.storage.tps_nixue2=0;
				},
				intro:{
					content:'characters'
				},
				content:function(){
					'step 0'
					event.num=trigger.num;
					// if(player.storage.tps_nixue2<1){
					// 	player.storage.tps_nixue2++;
					// 	event.finish();
					// }
					// else{
					// 	player.storage.tps_nixue2=0;
					// }
					'step 1'
					player.logSkill('tps_nixue');
					var list=[];
					var list2=[];
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						list2.add(players[i].name);
						list2.add(players[i].name1);
						list2.add(players[i].name2);
					}
					for(var i in lib.character){
						if(lib.character[i][4].contains('boss')) continue;
						if(lib.character[i][4].contains('minskin')) continue;
						if(player.storage.tps_nixue.contains(i)) continue;
						if(list2.contains(i)) continue;
						list.push(i);
					}
					var name=list.randomGet();
					player.storage.tps_nixue.push(name);
					player.markSkill('tps_nixue');
					var skills=lib.character[name][3];
					for(var i=0;i<skills.length;i++){
						player.addSkill(skills[i]);
					}
					event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【逆学】',[[name],'character']);
					game.delay(2);
					'step 2'
					event.dialog.close();
					event.num--;
					if(event.num>0){
					    event.goto(1);
					}
				}
			},/*
			tps_jiexin: {
				audio: 2,
				trigger: {
					global: "phaseDrawBegin",
				},
				init:function(player){
					player.changeHujia(3);
				},
				forced: true,
				filter:function(event){
					return _status.currentPhase.hujia>0; 
				},
				content: function () {
					trigger.num += 1;
				},
				ai: {
					threaten: 1.3,
				},
			},
			tps_jiesi:{
				audio:true,
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
				    'step 0'
				    if(player.hujia && player.hujia>0){
				        player.chooseControl('失去1个护甲','失去1点分数').ai=function(event,player){
					    	//if(player.storage.tps_jiexin>1) return 'tps_jiexin_mark';
				    		//if(player.hp<player.maxHp-1||player.hp<=2) return 'baonue_maxHp';
			    			return '失去1点分数';
		    			};
				    }
		    	    'step 1'
		    	    //game.log(result.control);
		    		if(!player.hujia || player.hujia==0 || result.control=='失去1点分数'){
		    			   player.loseHp();
		    		}else{
		    		    player.changeHujia(-1);
		    		}
		    		//console.log(result);
		   			target.changeHujia(1);
				},
				ai:{
					order:5.5,
					result:{
						player:function(player){
							if(player.hp<3) return -4;
							if(player.hujia>1) return 2;
							//if(player.countCards('e')>1) return 1;
							return 0;
						},
						target:3
					},
					threaten:2,
				}
			},
			tps_zhuangbi: {
				audio: 2,
				trigger: {
					player: "phaseDrawBegin",
				},
				filter:function(event,player){
				    //console.log(event);
					return event.player.hujia==0; 
				},
				content: function () {
					trigger.cancel();
		            player.changeHujia(1);
				},
				ai: {
					threaten: 1.3,
				},
			},*/
			"tps_jiexin": {
                marktext: "洁",
                init: function(player) {
                    player.storage.tps_jiexin = 0;
                },
                intro: {
                    content: function(storage) {
                        return '当前有' + storage + '个“洁”';
                    },
                },
                mark: true,
                audio: 2,
                trigger: {
                    global: 'gameStart'
                },
                forced: true,
                content: function() {
                    player.storage.tps_jiexin += 3;
                    player.syncStorage('tps_jiexin');
                    game.log(player, '获得了3个“洁”');
                },
            },
            "_tps_jiexin": {
                audio: 2,
                trigger: {
                    player: 'damageBefore'
                },
                forced: true,
                filter: function(event, player) {
                    return player.storage.tps_jiexin > 0;
                },
                content: function() {
                    trigger.cancel();
                    player.storage.tps_jiexin--;
                    player.syncStorage('tps_jiexin');
                    if (player.storage.tps_jiexin <= 0) player.unmarkSkill('tps_jiexin');
                    game.log(player, '移去了1个“洁”');
                },
            },
            "_tps_jiexin1": {
                audio: 2,
                trigger: {
                    player: 'phaseDrawBegin'
                },
                forced: true,
                filter: function(event, player) {
                    return player.storage.tps_jiexin > 0;
                },
                content: function() {
                    trigger.num++;
                },
            },
            "tps_jiesi": {
                audio: 2,
                enable:'phaseUse',
                content: function() {
                    'step 0'
                    player.chooseTarget(get.prompt('tps_jiesi'), function(card, player, target) {
                        return target != player
                    }).ai = function(target) {
                        if (player.storage.tps_jiexin > 1) return get.attitude(player, target);
                        return -1;
                    };
                    'step 1'
                    if (result.bool) {
                        event.target = result.targets[0];
                        var list = ['失去一点分数'];
                        if (player.storage.tps_jiexin > 0) list.push('移去一个“洁”');
                        player.chooseControl(list).set('ai', function() {
                            if (player.storage.tps_jiexin > 0) return '移去一个“洁”';
                            return '失去一点分数';
                        });
                    } else {
                        event.finish();
                    };
                    'step 2'
                    if (result.control == '移去一个“洁”') {
                        player.storage.tps_jiexin--;
                        player.syncStorage('tps_jiexin');
                        if (player.storage.tps_jiexin <= 0) player.unmarkSkill('tps_jiexin');
                        game.log(player, '移去了1个“洁”');
                    } else {
                        player.loseHp();
                    };
                    player.line(event.target);
                    player.logSkill('tps_jiexin');
                    if (event.target.storage.tps_jiexin == undefined) event.target.storage.tps_jiexin = 0;
                    event.target.markSkill('tps_jiexin');
                    event.target.storage.tps_jiexin++;
                    event.target.syncStorage('tps_jiexin');
                    game.log(event.target, '获得了1个“洁”');
                },
            },
            "tps_liuji": {
                audio: 2,
                trigger: {
                    player: 'phaseDrawBefore'
                },
                filter: function(event, player) {
                    return player.storage.tps_jiexin == undefined || player.storage.tps_jiexin == 0;
                },
                check: function(event, player) {
                    return player.countCards('h') >= 2 || player.skipList.contains('phaseUse');
                },
                content: function() {
                    trigger.cancel();
                    if (player.storage.tps_jiexin == undefined) player.storage.tps_jiexin = 0;
                    player.markSkill('tps_jiexin');
                    player.storage.tps_jiexin++;
                    player.syncStorage('tps_jiexin');
                    game.log(player, '获得了1个“洁”');
                },
            },
			tps_zuobishen:{
				mod:{
					maxHandcard:function(player,num){
						return 2+num;
					}
				},
				audio:true,
				trigger:{player:'phaseDrawBegin'},
				priority:-5,
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				forced:true,
				content:function(){
					trigger.num=2+player.maxHp-player.hp;
				}
			},
			tps_re_bufa:{
			    group:['tps_re_bufa1','tps_re_bufa2'],
				trigger:{global:'damageBefore'},
				forced:true,
				filter:function(event,player){
					return (event.card&&(event.card.name=='shandian' || event.card.viewAs=='shandian' || event.card.name=='fulei' || event.card.viewAs=='fulei'));
				},
				content:function(){
					trigger.source=player;
				}
			},
			tps_re_bufa1:{
				trigger:{global:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return (event.card&&(event.card.name=='shandian' || event.card.viewAs=='shandian' || event.card.name=='fulei' || event.card.viewAs=='fulei'));
				},
				content:function(){
					player.draw(trigger.num);
				}
			},
			tps_re_bufa2:{
				audio:2,
				trigger:{global:'judgeEnd'},
				forced:true,
				filter:function(event,player){
				    //console.log(event);
					return (event.card&&(event.card.name=='shandian' || event.card.viewAs=='shandian' || event.card.name=='fulei' || event.card.viewAs=='fulei'));
				},
				content:function(){
					player.draw();
					player.chooseToDiscard('he',true);
				}
			},
            tps_langxing:{
                init:function(player){
					player.storage.tps_langxing=false;
				},
                mark:true,
                intro:{
					mark:function(dialog,content,player){
						if(player.storage.tps_langxing) return '转换技状态：<strong>阳</strong>';
						return '转换技状态：<strong>阴</strong>';
					},
				},
				audio:1,
				enable:'phaseUse',
				usable:1,
				discard:false,
				filter:function(event,player){
					return player.countCards('he',{suit:'club'})>0;
				},
				prepare:'throw',
				position:'he',
				filterCard:{suit:'club'},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(player.storage.tps_langxing){
					    if(target.hasJudge('fulei')) return false;
					    return lib.filter.targetEnabled({name:'fulei'},target,target);
					}else{
					    if(target.hasJudge('shandian')) return false;
				    	return lib.filter.targetEnabled({name:'shandian'},target,target);
					}
				},
				check:function(card){
					return 7-get.value(card);
				},
				content:function(){
					if(player.storage.tps_langxing){
						var next=target.useCard({name:'fulei'},target,cards);
						next.animate=false;
						next.audio=false;
					}
					else{
						var next=target.useCard({name:'shandian'},target,cards);
						next.animate=false;
						next.audio=false;
					}
					player.storage.tps_langxing=!player.storage.tps_langxing;
				},
				ai:{
					result:{
						target:function(player,target){
						    if(player.storage.tps_langxing){
							    if (get.attitude(player,target)){
							        return get.effect(target,{name:'fulei'},target,target);
							    }else{
							        return -get.effect(target,{name:'fulei'},target,target);
							    }
						    }else{
						        if (get.attitude(player,target)){
							        return get.effect(target,{name:'shandian'},target,target);
							    }else{
							        return -get.effect(target,{name:'shandian'},target,target);
							    }
						    }
						}
					},
					order:9,
				}
            },
            tps_guoren:{
				audio:2,
				trigger:{global:'gameDrawAfter'},
				forced:true,
				unique:true,
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]==player) continue;
						player.maxHp+=game.players[i].maxHp;
						//if(player.maxHp<game.players[i].maxHp)player.maxHp=game.players[i].maxHp;
						if(!game.players[i].name||!lib.character[game.players[i].name]) continue;
						var skills=lib.character[game.players[i].name][3];
						for(var j=0;j<skills.length;j++){
							if(!lib.skill[skills[j]].forceunique){
								player.addSkill(skills[j]);
							}
						}
					}
					player.maxHp=Math.ceil(player.maxHp/game.players.length)-1;
					player.hp=player.maxHp;
					player.update();
				},
				//group:['huanhua3','huanhua4'],
				ai:{
					threaten:0.8,
				}
			},
			tps_lianzhi: {
                audio: 2,
                trigger: {
                    player: 'phaseJudgeBefore'
                },
                filter: function(event, player) {
                    return true;
                },
				forced:true,
                content: function() {
                    trigger.cancel();
                }
            },
            tps_re_jingxin: {
                audio: 2,
                trigger: {
                    player: ['recoverAfter','damageEnd','loseHpEnd']
                },
                filter: function(event, player) {
                    return event.num > 0;
                },
                content: function() {
                    "step 0"
                    player.moveCard();
                    player.draw();
                },
                ai: {
                    expose: 0.2
                }
            },
			tps_re_qianshui: {
			    group:['tps_re_qianshui1'],
				audio: 2,
				unique: true,
				trigger: {
					player: 'damageBegin'
				},
				limited: true,
				forced:true,
				filter:function(event,player){
				    if(player.storage.tps_re_qianshui) return false;
				    return true;
				},
				content: function () {
				    trigger.cancel();
					player.storage.tps_re_qianshui=true;
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player) {
					player.storage.tps_re_qianshui=false;
				},
			},
			tps_re_qianshui1: {
				audio: 2,
				trigger: {
					player: 'damageBegin'
				},
				forced:true,
				filter: function (event, player) {
					if(!player.storage.tps_re_qianshui) return false;
					if(!(event.num>0)) return false;
					if(!event.nature) return false;
				    return true;
				},
				content: function () {
					if(trigger.nature=="thunder"){
					    trigger.num*=2;
					}else if(trigger.nature=="fire"){
					    trigger.cancel();
					}
				},
				ai: {
					expose: 0.4
				}
			},
			tps_tuoqiao:{
				skillAnimation:true,
				audio:2,
				unique:true,
				derivation:['tps_xiujia'],
				trigger:{player:'damageBegin'},
				forced:true,
				filter:function(event,player){
					if(player.storage.tps_tuoqiao) return false;
					if(player.hp<player.maxHp && event.nature=="thunder") return false;
					return false;
				},
				content:function(){
				    player.awakenSkill('tps_tuoqiao');
					player.storage.tps_tuoqiao=true;
					trigger.cancel();
					player.loseMaxHp();
					target.removeSkill('tps_re_qianshui');
					player.addSkill('tps_xiujia');
				}
			},
			tps_xiujia: {
				audio: 2,
				enable: "phaseUse",
				filterCard: function (card) {
					return get.name(card)=="shan"
				},
				check: function (card) {
					return 5 - get.value(card)
				},
				content: function () {
					player.changeHujia(1);
				},
				ai: {
					order: 9,
					result: {
						player:4,
					},
					threaten: 2,
				},
			},
			tps_re_caiyi: {
				audio: 2,
				trigger: {
					player: "respond",
				},
				filter: function (event, player) {
					return event.card.name == 'shan';
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt('tps_re_caiyi'),[1,2]).ai = function (target) {
						if (target.hasSkill('hongyan'))
							return 0;
						return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
					};
					"step 1"
					if (result.bool) {
						player.logSkill('tps_re_caiyi', result.targets, 'thunder');
						event.target = result.targets;
					} else {
						event.finish();
					}
					"step 2"
					
                    var next = player.useCard({
						name: 'sha'
					}, event.target, cards);
					next.animate = false;
					next.audio = false;
                    return 0;
				},
				ai: {
					useShan: true,
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, 'respondShan')) {
								var hastarget = game.hasPlayer(function (current) {
										return get.attitude(target, current) < 0;
									});
								var be = target.countCards('e', {
										color: 'black'
									});
								if (target.countCards('h', 'shan') && be) {
									if (!target.hasSkill('tps_wulai'))
										return 0;
									return [0, hastarget ? target.countCards('he') / 2 : 0];
								}
								if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
									if (!target.hasSkill('tps_wulai'))
										return 0;
									return [0, hastarget ? target.countCards('h') / 4 : 0];
								}
								if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
									return [0, 0];
								}
								if (target.countCards('h') == 0) {
									return [1.5, 0];
								}
								if (target.countCards('h') == 1 && !be) {
									return [1.2, 0];
								}
								if (!target.hasSkill('tps_wulai'))
									return [1, 0.05];
								return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
							}
						},
					},
				},
			},
			tps_re_shangjin: {
				audio: 2,
				unique: true,
				enable: "phaseUse",
				limited: true,
				skillAnimation: "epic",
				animationColor: "thunder",
				content: function () {
					"step 0"
					player.awakenSkill('tps_re_shangjin');
					"step 1"
					if(!player.storage.tps_siren ||player.storage.tps_siren == undefined)return;
					player.storage.discard(player.storage.tps_siren);
					game.addVideo('throw',player,['tps_re_shangjin',get.cardsInfo(player.storage.tps_siren),'cards']);
					delete player.storage.tps_siren;
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
						    if(!player.storage.tps_siren || player.storage.tps_siren == undefined)return -1;
							return player.storage.tps_siren.length-5;
						},
					},
				},
			},
			tps_shushen:{
				audio:2,
				trigger:{source:'damageBefore',player:'damageBefore'},
				priority:15,
				check:function(event,player){
					if(player==event.player) return true;
					return -(get.attitude(player,event.player));
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
							if(get.type(card)=='trick'&&get.tag(card,'damage')&&get.attitude(player,target)){
								return 0;
							}
						},
						player:function(card,player,target,current){
							if(get.type(card)=='trick'&&get.tag(card,'damage')&&get.attitude(current,player)){
								return 0;
							}
						}
					}
				}
			},
			tps_pianwen: {
				forced:true,
				mod: {
					suit: function (card, suit) {
						if (suit == 'diamond')
							return 'heart';
					},
				},
			},
			tps_re_wencai: {
                trigger: {
                    global: 'useCardAfter'
                },
                frequest:true,
                filter: function(event, player) {
                    return (event.card.suit == 'heart' && _status.currentPhase==player);
                },
                content: function() {
                    player.draw();
                }
            },
            tps_sijin:{
				audio:2,
				trigger:{target:'useCardToBegin'},
				priority:5,
				filter:function(event,player){
					if(event.name=='judge') return false;
					if(!event.targets||event.targets.length<2) return false;
					//if(event.targets.indexOf(player)) return true;
					if(event.card&&get.type(event.card)=='trick'&&event.player!=player) return true;
				},
				direct:true,
				frequest:true,
				content:function(){
					"step 0"
					trigger.targets.remove(player);
					player.draw();
				},
				intro:{
					content:'limited'
				}
			},
			tps_zeyou: {
				trigger: {
					global: "phaseEnd",
				},
				forced: true,
				audio: 2,
				content: function () {
					trigger.current = player.next;
					if(!player.isLinked() && player.sex=="female"){
				        player.link();
				        player.draw();
				    }
				    if(player.isLinked() && player.sex=="male"){
				        player.link();
				        trigger.current.chooseToDiscard('he', true);
				    }
					while(trigger.current!=player){
					    if (trigger.current.sex=="male" && trigger.current.isLinked()){
					        trigger.current.animate('target');
				        	trigger.current.link();
				        	trigger.current.chooseToDiscard('he', true);
				    	}
				    	if (trigger.current.sex=="female" && !trigger.current.isLinked()){
				    	    trigger.current.animate('target');
			    	    	trigger.current.link();
			    	    	trigger.current.draw();
				    	}
						trigger.current = trigger.current.next;
						game.delay(0.5);
					}
				},
			},
            tps_bihu: {
                audio: 2,
                trigger: {
                    target: 'useCardToBefore'
                },
                forced: true,
                filter: function(event, player) {
                    //if(event.)
                    //console.log(event);
                    return get.color(event.card) == 'black';
                },
                content: function() {
                    "step 0"
                    var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                    trigger.player.chooseToDiscard('庇护：弃置一张文科牌，否则'+get.translation(trigger.card)+'对' + get.translation(player) + '无效', function(card) {
                        return get.color(card) == 'red';
                    }).set('ai', function(card) {
                        if (_status.event.eff > 0) {
                            return 10 - get.value(card);
                        }
                        return 0;
                    }).set('eff', eff);
                    "step 1"
                    if (result.bool == false) {
                        trigger.cancel();
                    }
                },
                ai: {
                    effect: {
                        target: function(card, player, target, current) {
                            if (get.color(card) == 'black' && get.attitude(player, target) < 0) {
                                if (_status.event.name == 'tps_bihu') return;
                                var bs = player.getCards('h', {
                                    color: 'red'
                                });
                                if (bs.length < 2) return 0;
                                return [1, 0, 1, -0.5];
                            }
                        }
                    }
                }
            },
			tps_re_qiangpo:{
				trigger:{global:'useCard'},
				direct:true,
				priority:5.5,
				filter:function(event,player){
					if(get.type(event.card)=='trick'&&event.cards.length==1&&event.cards[0]==event.card){
						if(event.player==player) return false;
						if(!player.countCards('he',{suit:get.suit(event.card)})) return false;
						return true;
					}
					return false;
				},
				content:function(){
					'step 0'
					var att=get.attitude(player,trigger.player);
					var suit=get.suit(trigger.card);
					player.chooseToDiscard('he',get.prompt2('tps_re_qiangpo',trigger.player),function(card){
						return get.suit(card)==suit;
					}).set('autodelay',true).set('logSkill',['tps_re_qiangpo',trigger.player]).ai=function(card){
						if(att<0){
							return 8-get.value(card);
						}
						return 0;
					};
					'step 1'
					if(result.bool){
						trigger.cancel();
					}
				}
			},
			tps_re_zhuanzhu:{
				trigger:{player:'useCardAfter'},
				filter:function(event,player){
					if(event.parent.name=='tps_re_zhuanzhu') return false;
					if(!event.targets||!event.card) return false;
					if(event.card&&event.card.name=='wuxie') return false;
					var type=get.type(event.card);
					if(type!='trick') return false;
					var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
					var targets=event._targets||event.targets;
					for(var i=0;i<targets.length;i++){
						if(!targets[i].isIn()) return false;
						if(!player.canUse({name:event.card.name},targets[i],false,false)){
							return false;
						}
					}
					return true;
				},
				check:function(event,player){
					if(event.card.name=='tiesuo') return false;
					return true;
				},
				content:function(){
				    "step 0"
				    //get.suit(card)==get.suit(event.card)
				    player.chooseCard({
				        prompt:get.prompt('tps_re_zhuanzhu'),
                        filterCard: function(event, card, player) {
                            return get.suit(card) == get.suit(event.card)
                        },
				    }).set('ai',function(card){
						return 5-get.value(card);
					});
				    "step 1"
					//var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
					if(result.bool){
					    player.useCard({
					        name: trigger.card.name,
					        nature: trigger.card.nature
					    },(trigger._targets||trigger.targets).slice(0),result.cards);
					}
				},
				ai:{
					threaten:1.3
				},
			},
			tps_zhuangbi:{
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h')>0;
				},
				selectTarget:[1,3],
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					player.chooseToCompare(targets).callback=lib.skill.tps_zhuangbi.callback;
				},
				init:function(player){
					player.storage.tps_zhuangbi=0;
				},
				intro:{
					name:'饶逼',
					content:'mark'
				},
				chat:['粗鄙之语','天地不容','谄谀之臣','皓首匹夫，苍髯老贼','二臣贼子','断脊之犬','我从未见过有如此厚顔无耻之人！'],
				callback:function(){
					'step 0'
					if(event.num1>event.num2){
						target.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
							if(_status.event.goon) return 6-get.value(card);
							return 0;
						}).set('goon',get.attitude(target,player)<0);
					}
					else{
						target.chat(lib.skill.tps_zhuangbi.chat[player.storage.tps_zhuangbi]);
						game.delay();
						player.storage.tps_zhuangbi++;
						player.markSkill('tps_zhuangbi');
						if(player.storage.tps_zhuangbi>=7){
							player.die();
						}
						else{
							// player.chooseToDiscard('弃置一张牌，或摸一张牌').set('ai',function(){return -1;});
							event.finish();
						}
					}
					'step 1'
					if(!result.bool){
						player.draw();
					}
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var num=game.countPlayer(function(current){
								return get.attitude(player,current)<0&&current!=player&&current.countCards('h');
							});
							if(num>3) num=3;
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=6){
									switch(hs[i].number){
										case 13:return -1;
										case 12:if(player.storage.tps_zhuangbi+num<=8) return -1;break;
										case 11:if(player.storage.tps_zhuangbi+num<=7) return -1;break;
										default:if(hs[i].number>5&&player.storage.tps_zhuangbi+num<=6) return -1;
									}
								}
							}
							return 0;
						},
					}
				}
			},
			tps_bici:{
				trigger:{player:'compare'},
				filter:function(event,player){
					return event.getParent().name=='tps_zhuangbi'&&!event.iwhile&&event.num1<=player.storage.tps_zhuangbi;
				},
				content:function(){
					if(trigger.num1<player.storage.tps_zhuangbi){
						trigger.num1+=player.storage.tps_zhuangbi;
					}
					else{
						player.getStat().skill.tps_zhuangbi--;
					}
				}
			},
			tps_chadao:{
				trigger:{global:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return event.player.isAlive()&&event.player.getStat('damage')&&
					lib.filter.targetEnabled({name:'sha'},player,event.player)&&player.countCards("h");
				},
				check:function(event,player){
					return get.effect(event.player, {
									name: 'sha'
								}, player, event.player);
				},
				content:function(){
				    "step 0"
				    console.log(get.effect(event.player, {
									name: 'sha'
								}, player, event.player));
					player.chooseCard('插刀：是否对'+get.translation(trigger.player)+'使用一张问？').set('logSkill','tps_chadao');
					"step 1"
					if(result.bool){
					    player.useCard({
					        name: "sha"
					    },trigger.player,result.cards);
					}
				}
			},
			tps_mengtai:{
				trigger:{target:'shaBegin'},
				priority:5,
				audio:true,
				logTarget:'source',
				filter:function(event,player){
				    console.log(event);
					if(player.sex=='male'&&event.player.sex=='female') return true;
					if(player.sex=='female'&&event.player.sex=='male') return true;
					return false;
				},
				content:function(){
					"step 0"
					console.log(trigger);
					trigger.player.chooseToDiscard('弃置一张手牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
						var trigger=_status.event.getTrigger();
						return -get.attitude(trigger.player,player)-get.value(card);
					});
					"step 1"
					if(result.bool==false) player.draw();
				}
			},
            "tps_yonglan": {
                mark: true,
                locked: true,
                marktext: '成',
                intro: {
                    content: function(storage, player, skill) {
                        if (player.storage.tps_yonglan == true) return '出牌阶段限一次，你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制';
                        return '出牌阶段限一次，你可以摸一张牌，然后弃置两张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制';
                    },
                },
                enable: "phaseUse",
                usable: 1,
                audio: 2,
                filter: function(event, player) {
                    var num = 1;
                    if (player.storage.tps_yonglan == true) num = 0;
                    return player.countCards('h') >= num;
                },
                content: function() {
                    'step 0'
                    if (player.storage.tps_yonglan == true) {
                        player.storage.tps_yonglan = false;
                        player.draw(2);
                        player.chooseToDiscard('h', true);
                    } else {
                        player.storage.tps_yonglan = true;
                        player.draw();
                        player.chooseToDiscard('h', 2, true);
                    };
                    'step 1'
                    if (result.bool) {
                        player.storage.tps_yonglan1 = result.cards;
                        player.addTempSkill('tps_yonglan1', {
                            player: 'phaseAfter'
                        });
                    };
                },
                ai: {
                    order: 13,
                    result: {
                        player: function(player) {
                            if ((player.storage.tps_yonglan == undefined || player.storage.tps_yonglan == false) && player.countCards('h') < 3) return 0;
                            return 1;
                        },
                    },
                },
            },
			"tps_yonglan1":{
				mod:{
					cardUsable:function(card,player){
						var cards=player.storage.tps_yonglan1;
						for(var i=0;i<cards.length;i++){
							if(get.suit(cards[i])==get.suit(card)) return Infinity;
						};
					},
					targetInRange:function(card,player){
						var cards=player.storage.tps_yonglan1;
						for(var i=0;i<cards.length;i++){
							if(get.suit(cards[i])==get.suit(card)) return true;
						};
					}
				},
			},
            "tps_shicai": {
                group: ["tps_shicai_1", "tps_shicai_2", "tps_shicai_3"],
                subSkill: {
                    "1": {
                        trigger: {
                            global: 'phaseBefore'
                        },
                        forced: true,
                        popup: false,
                        content: function() {
                            player.storage.tps_shicai = [];
                        },
                    },
                    "2": {
                        audio: 2,
                        trigger: {
                            global: 'useCardAfter'
                        },
                        filter: function(event, player) {
                            return player.storage.tps_shicai != undefined && !player.storage.tps_shicai.contains(get.type(event.card));
                        },
                        check: function(event, player) {
                            return get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
                        },
                        content: function() {
                            player.storage.tps_shicai.push(get.type(trigger.card));
                            for (var i = 0; i < trigger.cards.length; i++) {
                                ui.cardPile.insertBefore(trigger.cards[i], ui.cardPile.firstChild);
                                if (ui.cardPileNumber) ui.cardPileNumber.innerHTML = game.roundNumber + '轮 剩余牌: ' + ui.cardPile.childNodes.length;
                                game.log(player, '将', trigger.cards[i], '置于牌堆顶');
                                player.lose(trigger.cards[i], ui.special);
                            };
                            player.draw();
                        },
                    },
                    "3": {
                        trigger: {
                            global: 'phaseAfter'
                        },
                        forced: true,
                        popup: false,
                        content: function() {
                            delete player.storage.tps_shicai;
                        },
                    },
                },
            },
            "tps_cunmu": {
                audio: 2,
                trigger: {
                    player: 'drawBegin'
                },
                forced: true,
                content: function() {
                    'step 0'
                    trigger.cancel();
                    event.list = [];
                    event.num = 0;
                    'step 1'
                    event.list.push(ui.cardPile.removeChild(ui.cardPile.lastChild));
                    event.num++;
                    if (event.num < trigger.num) event.redo();
                    'step 2'
                    if (ui.cardPileNumber) ui.cardPileNumber.innerHTML = game.roundNumber + '轮 剩余牌: ' + ui.cardPile.childNodes.length;
                    player.gain(event.list);
                    player.$draw(trigger.num);
                    game.log(player, '从牌堆底摸' + get.cnNumber(trigger.num) + '张牌');
                },
            },
			tps_re_mensao: {
                audio: 2,
                trigger: {
                    target: 'useCardToBefore'
                },
                forced: true,
                filter: function(event, player) {
                    //if(event.)
                    //console.log(event);
                    return get.type(event.card) == 'trick' && event.player != player;
                },
                content: function() {
                    "step 0"
                    trigger.cancel();
                    trigger.player.useCard({
                        name:"sha",
                        suit:get.suit(event.card),
                        number:get.number(event.card)
                    },player,trigger.card);
                },
                ai: {
                    effect: {
                        target: function(card, player, target, current) {
                            if (get.type(card) == 'trick' && get.attitude(player, target) < 0) {
                                return get.effect(player, {name:'sha'}, target, player);
                                //return [1, 0, 1, -0.5];
                            }
                        },
                    }
                }
            },
			tps_huibi:{
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					return player.countCards('h')<=player.maxHp||player.skipList.contains('phaseUse');
				},
				content:function(){
					trigger.num+=game.countGroup();
					player.addTempSkill('tps_huibi2');

				},
				ai:{
					threaten:1.5
				}
			},
			tps_huibi2:{
				mod:{
					playerEnabled:function(card,player,target){
						if(player!=target) return false;
					}
				}
			},
			tps_school_hg:{
				group:['tps_school_hg1']
			},
			tps_school_hg1:{/*
				mark:true,
				intro:{
					content:function(dialog,content,player){
						return '作为一个杭高人，当你拥有杭高梦想时，你就可以像【杭高林欢】一样装逼：结束阶段开始时，你可以摸等同于你手牌数的牌，若如此做，你须展示你的手牌，然后每当你受到一点扣分时，你必须选择一项：1.失去一点体力，2.弃两张牌';
					}
				},*/
				trigger:{player:"phaseEnd"},
                filter: function(event, player) {
					if(!lib.config.schoolMod)return false;
                    return player.getEquip(4)&&player.getEquip(4).name=="chitu";
				},
				check: true,
				content:function(){
					player.draw(player.countCards("h"));
					player.showHandcards();
					player.addTempSkill('tps_school_hg2', {
						player: 'phaseBegin'
					});
				}
			},
			tps_school_hg2:{
				forced:true,
				trigger:{player:"damageEnd"},
                filter: function(event, player) {
                    return player.getEquip(4)&&player.getEquip(4).name=="chitu";
                },
				content:function(){
					"step 0"
					event.num=trigger.num;
					event.num2 = 0;
					"step 1"
					if(player.countCards('h')>=2)
						player.chooseControl('失去1点分数','弃两张手牌').set('prompt',"对不起，林欢同学，你必须为你的行为付出代价<br/><strong>注意：</strong>你还需再完成 "+(event.num-1).toString()+" 次选择").ai=function(){
							return 1;
						};
					"step 2"
					if(player.countCards('h')>=2){
						if(result.control=='弃两张手牌'){
							player.chooseToDiscard('h', true, 2);
						}else{
							event.num2 ++;
						}
					}else{
						event.num2 ++;
					}
					event.num--;
					if(event.num==0){
						player.loseHp(event.num2);
						event.finish();
					}
					"step 3"
					event.goto(1);
				}
			},
			tps_school_2z:{
				group:['tps_school_2z1']
			},
			/*tps_school_2z1:{
				trigger:{player:"phaseEnd"},
                filter: function(event, player) {
					if(!lib.config.schoolMod)return false;
                    return player.getEquip(3)&&player.getEquip(3).name=="hualiu";
				},
				check: true,
				content:function(){
					player.addTempSkill('tps_school_2z2', {
						player: 'phaseEnd'
					});
				}
			},
			tps_school_2z2:{
				//group:["tps_school_2z_3"],
				forced:true,
				mod: {
					suit: function (card, suit) {
						return "diamond";
					},
					nature: function (card, nature) {
						return 'thunder';
					},
					globalFrom:function(from,to,current){
						if(to.hp<from.hp)
						return 1;
					},
					globalTo:function(from,to,current){
						if(to.hp<from.hp)
						return current*2;
					},
				},
			},
			tps_school_2z3:{
				forced:true,
				trigger:{target:'compare'},
				filter:function(event,player){
					return player.getEquip(3)&&player.getEquip(3).name=="hualiu"&&!event.iwhile;
				},
				content:function(){
					trigger.num1=13;
				}
			},*/
			tps_school_2z1:{
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				filter:function(event,player){
					if(!lib.config.schoolMod)return false;
					return player.getEquip(3)&&player.getEquip(3).name=="hualiu"&&!event.iwhile;
				},
				filterTarget:function(card,player,target){
					return player!=target&&!target.hasSkill('tps_school_2z2');
				},
				prepare:'throw',
				discard:false,
				content:function(){
					target.$gain2(cards);
					target.storage.tps_school_2z2=cards[0];
					target.addSkill('tps_school_2z2');
					target.storage.tps_school_2z13=player;
					ui.special.appendChild(cards[0]);
					target.syncStorage('tps_school_2z2');
				},
				check:function(card){
					return 6-get.value(card)
				},
				ai:{
					expose:0.1,
					order:4,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('maixie')) return 0;
							return -1;
						}
					}
				},
				group:['tps_school_2z1_die','tps_school_2z1_gain'],
				subSkill:{
					die:{
						trigger:{player:'dieBegin'},
						silent:true,
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].hasSkill('tps_school_2z2')&&game.players[i].storage.tps_school_2z13==player){
									game.players[i].removeSkill('tps_school_2z2');
								}
							}
						}
					},
					gain:{
						trigger:{player:'phaseBegin'},
						silent:true,
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].hasSkill('tps_school_2z2')&&game.players[i].storage.tps_school_2z13==player){
									var card=game.players[i].storage.tps_school_2z2;
									game.players[i].removeSkill('tps_school_2z2');
									game.players[i].$give(card,player);
									player.gain(card);
								}
							}
						}
					}
				}
			},
			tps_school_2z2:{
				trigger:{player:'respondAfter'},
				forced:true,
				priority:10,
				mark:'card',
				popup:false,
				filter:function(event,player){
					return event.card&&event.card.name=='shan'&&player.storage.tps_school_2z13&&player.storage.tps_school_2z13.isIn();
				},
				content:function(){
					'step 0'
					player.storage.tps_school_2z13.logSkill('tps_school_2z1',player);
					player.judge(function(card){
						var suit=get.suit(card);
						if(suit=='heart'||suit=='diamond'){
							return -1;
						}
						else{
							return 0;
						}
					});
					'step 1'
					var source=player.storage.tps_school_2z13;
					if(result.suit=='diamond'){
						player.damage('fire',source);
						if(player.countCards('h')){
							player.randomDiscard('h');
						}
					}
					else if(result.suit=='heart'){
						player.damage('fire',2,source);
					}
				},
				intro:{
					content:'card'
				},
				onremove:function(player){
					player.storage.tps_school_2z2.discard();
					delete player.storage.tps_school_2z2;
					delete player.storage.tps_school_2z13;
				},
				ai:{
					noShan:true
				}
			},
            tps_nudui:{
				group:["tps_nudui1"],
				audio:2,
				trigger:{global:'gameDrawAfter'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('tps_nudui'),function(card, player, target) {
                        return target != player
                    },1).ai = function (player,target) {
						if (target.hasSkill('hongyan'))
							return 0;
						return !get.attitude(player,target);
					};
					"step 1"
					if(result.bool){
						result.targets[0].addSkill("tps_nudui2");
					}
				},
				ai:{
					threaten:0.8,
				}
			},
            tps_nudui1:{
				audio:2,
				trigger:{global:'dieAfter'},
				filter:function(event,player){
					return event.player.hasSkill("tps_nudui2");
				},
				content:function(){
					"step 0"
					player.draw(3);
					"step 1"
					console.log(event);
					if(trigger.source==player){
						player.chooseTarget(get.prompt('tps_nudui1'),function(card, player, target) {
							return target != player
						},1).ai = function (player,target) {
							if (target.hasSkill('hongyan'))
								return 0;
							return !get.attitude(player,target);
						};
					}
					"step 2"
					if(trigger.source==player && result.bool){
						result.targets[0].addSkill("tps_nudui2");
					}
				},
				ai:{
					threaten:0.8,
				}
			},
			tps_nudui2:{
				mark:true,
				intro:{
					content:function(dialog,content,player){
						return '你成为了怒怼的对象，所有来自拥有“怒怼”技能的角色对你的伤害×2。';
					}
				},
				audio: 2,
				trigger: {
					player: 'damageBefore'
				},
				forced: true,
				filter: function(event, player) {
					return event.source.hasSkill('tps_nudui');
				},
				content: function() {
					"step 0"
					trigger.source.chooseToDiscard(get.prompt('tps_nudui1'),'he',1);
					"step 1"
					if(result.bool){
						trigger.num*=2;
					}
				},
			},
			tps_school_xj:{
				group:['tps_school_xj1']
			},
			tps_school_xj1:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					if(!lib.config.schoolMod)return false;
					return player.getEquip(4)&&player.getEquip(4).name=="zixin"&&!event.iwhile;
				},
				selectTarget:1,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					var card = player.getEquip(4);
					game.swapSeat(player,target);
					player.$gain2(card);
					player.storage.tps_school_xj2=card;
					player.addSkill('tps_school_xj2');
					ui.special.appendChild(card);
					player.syncStorage('tps_school_xj2');
				},
				ai:{
					order:5,
					result:{
						player:function(player,target){
							var att=get.attitude(player,target);
							if(target==player.previous&&att>0) return att;
							if(target==player.next&&att<0) return -att;
							var att2=get.attitude(player,player.next);
							if(target==player.next.next&&att<0&&att2<0) return -att-att2;
							return 0;
						}
					}
				},
			},
			tps_school_xj2:{
				mark:'card',
				intro:{
					content:'card'
				},
				//group:["tps_school_2z_3"],
				forced:true,
				mod: {
					globalFrom:function(from,to,current){
						return current-Math.min(from.hp,3)+1;
					},
				},
			},
			tps_school_14:{
				group:['tps_school_141','tps_school_142']
			},
			tps_school_141: {
				filter:function(event,player){
					if(!lib.config.schoolMod)return false;
					return player.getEquip(4)&&player.getEquip(4).name=="dawan";
				},
				audio: 2,
				trigger: {
					player: "phaseDrawBegin",
				},
				content: function () {
					trigger.num++;
				},
				ai: {
					threaten: 1.3,
				},
			},
			tps_school_142:{
				audio:2,
				trigger:{player:'loseEnd'},
				filter:function(event,player){
					if(!lib.config.schoolMod)return false;
					if(!player.getEquip(4)||player.getEquip(4).name!="dawan") return false;
					if(player.countCards('h')||player==_status.currentPhase) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					player.draw(2);
				},
				ai:{
					threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					}
				}
			},
		},
		translate: {
		    re_liujiqing:"柳季青",
		    re_xiaohong:"肖泓",
			zhoulinghang: "周凌航",
			re_hezihang: "贺梓航",
			wangzile: "王梓乐",
			wangguiyang: "王贵炀",
			wumengxiang: "吴孟祥",
		    re_shiao:"施敖",
			xuheng: "徐珩",
			re_huanghaojun:"黄浩峻",
		    re_zhengqihang:"郑启航",
		    re_chenkaihao:"陈凯豪",
			xujingyi: "徐憬怿",
			hushiqun: "胡识群",
		    re_lujunyu:"卢俊羽",
		    re_shouxintao:"寿鑫涛",
			re_xusichen: "徐思辰",
			maozihao: "毛子豪",
			zhanglingkai: "张凌凯",
			re_gechenqi: "葛辰启",
			chenzhenbo: "陈桢博",
			yuanyuxuan: "袁雨轩",
			re_chenhongliang: "陈泓亮",
			re_panhaotian: "潘皓天",
			liangyue: "梁越",
			yaohuangshen: "姚皇燊",
			re_fangyiyuan: "方易圆",
			re_zhangyihe: "章易禾",
			chengjingya: "程竞雅",
			liuchun: "刘纯",
			luxinting: "卢鑫廷",
			re_wangjing: "王晶",
			//re_zhangjiahui: "张佳慧",
			mouminzi: "牟旻紫",
			re_chenyimiao: "陈轶淼",
			re_laileshang: "赖乐商",
			re_wangchenxiao: "汪晨筱",
			re_zhangche: "张彻",
			jiangxiyu: "蒋习羽",
			re_liufangfei: "刘芳菲",
			re_yuruijia: "俞瑞佳",
			laimeixi: "来美羲",
			
			re_wangjie:'王洁',
            
            tps_lumang: "鲁莽",
			tps_lumang_info: "锁定技，准备阶段，你进行一次判定，若为文科牌，则直到回合结束，你使用文科【问】无距离限制且不能被【答】响应，你可以额外使用一张【问】，你可将一张文科牌当【答】、理科手牌当【问】使用或打出；否则直到下回合开始，你的所有文科手牌视为【答】，所有理科手牌视为【问】。",
			tps_lumang1: "鲁莽-攻",
			tps_lumang1_info: "锁定技，直到回合结束，你使用文科【问】无距离限制且不能被【答】响应，你可以额外使用一张【问】，你可将一张文科牌当【答】、理科手牌当【问】使用或打出。",
			tps_lumang3: "鲁莽-文",
			tps_lumang3_info: "锁定技，直到下回合开始，你的所有文科手牌视为【答】。",
			tps_lumang2: "鲁莽-理",
			tps_lumang2_info: "锁定技，直到下回合开始，你的所有理科手牌视为【问】。",
			tps_lumang4: "鲁莽-守",
			tps_lumang5: "鲁莽-攻",
			tps_baofa: "爆发",
			tps_baofa1:'爆习︎',
			tps_baofa2:'爆问︎',
			tps_baofa3:'爆很优秀︎',
			tps_baofa4:'爆答︎',
			tps_zuobishen:'弊神',
			tps_zuobishen_info:'锁定技，摸牌阶段，你摸牌的数量改为你已损失的分数值+2；你的手牌上限+2。',
			tps_baofa_info: "你可以将X张牌当【习】，当具年级焰扣分的【问】，当【答】，或当【我很优秀】使用或打出（X为你当前的分数值且至少为1）",
			tps_nixue: "逆学",
			tps_nixue_info: "游戏开始或你每受到1点扣分时，可获得随机一名未上场角色的全部技能。",
			tps_guoren:'过人',
			tps_guoren_info:'锁定技，所有人展示自己的角色牌后，你获得其他所有玩家的技能，分数上限为全场其他角色分数上限平均值向上取整后-1。',
		    tps_jiexin:'洁心',
		    tps_jiexin_mark:'王洁的庇护',
		    tps_jiexin2:'洁心',
		    tps_jiexin_bg:'洁',
		    tps_jiexin_info:'锁定技，游戏开始时，你获得三个护甲标记；有护甲的角色受到一次扣分时，弃置一枚护甲，然后取消此扣分；有护甲的角色摸牌阶段额外摸一张牌。',
		    tps_jiesi:'捷思',
			tps_jiesi_info:'出牌阶段，你可弃置一个护甲或失去一点分数以令一名其他角色获得一枚护甲。',
		    tps_liuji:'留级',
			tps_liuji_info:'摸牌阶段开始，若你没有护甲，你可跳过摸牌阶段并获得一个护甲。',
			tps_re_bufa:'不法',
			tps_re_bufa1:'不法',
			tps_re_bufa2:'不法',
			tps_re_bufa_info:'锁定技，当【就寝讲话】和【迟到】判定生效后，你摸一张牌，然后若造成扣分，你成为扣分来源，并摸X张牌（X为最终造成的扣分数量）。',
			tps_langxing:'浪星',
			tps_langxing_info:'转换技，出牌阶段，【阴】你可指定一名角色并指定一张科学手牌，然后视为该角色将此牌当【就寝讲话】使用；【阳】你可指定一名角色并指定一张科学手牌，然后视为该角色将此牌当【迟到】使用。',
			tps_re_jingxin:"静心",
			tps_re_jingxin_info:"每当你的分数值发生变化时，你可以移动场上的一张牌，若如此做，你摸一张牌。",
			tps_lianzhi:"敛智",
			tps_lianzhi_info:"锁定技，你没有判定阶段。",
			tps_re_qianshui:"潜水",
			tps_re_qianshui1:"潜水",
			tps_re_qianshui_info:"锁定技，你在本场游戏中收到的第一次扣分取消之，后面的年级扣分取消之，校级扣分数量×2。",
			tps_tuoqiao:"脱壳",
			tps_tuoqiao_info:"觉醒技，当你受到校级扣分时，若你没有满分，你免去此扣分，失去“潜水”和一点分数上限，然后获得“修甲”。",
			tps_xiujia:"修甲",
			tps_xiujia_info:"出牌阶段，你可以弃置一张【答】然后获得一点护甲。",
			tps_re_caiyi: "才艺",
			tps_re_caiyi_info: "每当你使用或打出一张【答】，可视为对至多两名其他角色出一张【问】",
			tps_re_shangjin:"上进",
			tps_re_shangjin_info:"限定计，出牌阶段，你可弃置你角色牌上所有的牌。",
			tps_shushen:"淑慎",
			tps_shushen_info:"每当动作牌造成扣分时，若你为扣分来源，你可防止此扣分；每当你受到动作牌对你造成的扣分时，你可防止此扣分。",
			tps_pianwen:"偏文",
			tps_pianwen_info:"锁定技，你的英语牌视为语文牌。",
			tps_re_wencai:"文采",
			tps_re_wencai_info:"每当你于回合内使用或打出一张语文牌时，你摸一张牌。",
			tps_sijin:"思进",
			tps_sijin_info:"每当你成为一张非延时动作牌的目标时，若该牌指定了不止一个目标，你可以令其无法指定你为目标并摸一张牌。",
			tps_zeyou:'择友',
			tps_zeyou_info:'锁定技，每名回合的结束阶段开始时，所有女性角色被结派，所有男性角色解除结派，然后所有被解除结派的角色各弃置一张牌，所有被增加结派的角色各摸一张牌。',
            tps_bihu: '庇护',
            tps_bihu_info: '锁定技，当其他玩家使用理科牌指定你为目标时，需额外弃掉一张文科牌，否则该理科牌对你无效。',
            tps_re_qiangpo:'强迫',
			tps_re_qiangpo_info:'当一名其他角色使用一张非转化的普通动作牌时，你可以弃置一张与之花色相同的牌取消之，然后你视为使用该动作牌',
			tps_re_zhuanzhu:'专注',
			tps_re_zhuanzhu_info:'你可弃置一张与之相同花色的牌令你的普通动作牌额外结算一次',
			tps_zhuangbi:'装逼',
			tps_zhuangbi_bg:'逼',
			tps_zhuangbi_info:'出牌阶段限一次，你可以用一张手牌与至多三名角色同时排名，然后依次结算排名结果，若你赢，对方选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶逼”标记（你有7个饶逼标记时，你退学）',
			tps_bici:'逼词',
			tps_bici_info:'当你发动“装逼”排名的牌亮出后，若点数小于X，你可令点数+X；若点数等于X，你可令你本回合发动“装逼”的次数上限+1（X为你“饶逼”标记的数量）',
			tps_chadao:'插刀',
			tps_chadao1:'插刀',
			tps_chadao_info:'一名其他角色的结束阶段开始时，若该角色本回合造成过扣分，你可以对其使用一张【问】',
			tps_mengtai:'萌态',
			tps_mengtai_info:'每当你成为一名异性指定的【问】目标角色后，你可以令其选择一项：1.弃置一张手牌；2.令你摸一张牌。',
            "tps_yonglan1": "慵懒",
            "tps_yonglan": "慵懒",
            "tps_yonglan_info": "转换技，出牌阶段限一次，①你可以摸一张牌，然后弃置两张手牌。②你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制",
            "tps_shicai": "恃才",
            "tps_shicai_info": "当你使用一张牌结算后，若此牌与你本回合使用的牌类型均不同（包括工具牌），你可以将此牌置于牌堆顶，然后摸一张牌",
            "tps_cunmu": "寸目",
            "tps_cunmu_info": "锁定技，当你摸牌时，改为从牌堆底摸牌",
			tps_re_mensao:'闷骚',
			tps_re_mensao_info:'每当你成为一张其他角色指定的动作牌目标时，你可以取消之，然后视为该角色对你使用一张【问】。',
			tps_huibi:"回避",
			tps_huibi_info:'摸牌阶段摸牌时，你可以额外摸X张牌（X为现存势力数）。若如此做，你于本回合出牌阶段内使用的牌不能指定其他角色为目标。',
			tps_nudui:"怒怼",
			tps_nudui1:"怒怼",
			tps_nudui2:"怒怼",
			tps_nudui2_mark:"怼",
			tps_nudui_info:'锁定技，当所有玩家展示其角色，或你杀死一名有“怼”标记的角色时，你可指定一名玩家。若如此做，其获得一个“怼”标记，且受到来自你的伤害时，你可弃置一张牌使该伤害×2；有“怼”标记的玩家退学后，你摸3张牌。',
			
			tps_school_hg:"杭高林欢",
			tps_school_hg1:"杭高林欢",
			tps_school_hg1_info:"作为一个杭高人，当你拥有杭高梦想时，你就可以像【杭高林欢】一样装逼：结束阶段开始时，你可以摸等同于你手牌数的牌，若如此做，你须展示你的手牌，然后直到你的下一回合开始，每当你受到一点扣分时，你必须选择一项：1.失去一点体力，2.弃两张手牌（你的手牌数必须大于等于2）",
			tps_school_hg2:"林欢",
			tps_school_hg2_info:"直到你的下一回合开始，每当你受到一点扣分时，若你装备有【杭高梦想】，你必须选择一项：1.失去一点体力，2.弃两张手牌（你的手牌数必须大于等于2）。",
			
			tps_school_2z:"饿中制霸",
			tps_school_2z1:"饿中制霸",
			tps_school_2z1_info:"出牌阶段限一次，若你装备有【二中之梦】，你可将一张手牌置于一名武将牌上没有“饿”的角色的武将牌上，称为“饿”，若如此做，其回合外使用或打出【答】时，你可令其判定，若结果为：语文，你对其造成2点文竞扣分；英语，你弃置其一张手牌，然后对其造成1点文竞扣分。你的下个回合开始时，你获得其武将牌上的“饿”。",
			tps_school_2z2:"饿符",
			tps_school_2z2_info:"你回合外使用或打出【答】时，其可令你判定，若结果为：语文，其对你造成2点文竞扣分；英语，其弃置你一张手牌，然后对你造成1点文竞扣分。",
			
			tps_school_xj:"学车高人",
			tps_school_xj1:"学车高人",
			tps_school_xj1_info:"出牌阶段，若你装备有【学军之梦】，你可以与一名玩家交换座位；若如此做，你将【学军之梦】置于你的角色牌顶，然后你拥有以下效果：锁定技，你与其他角色的距离-(X-1)（X为你的分数值且至多为3）。",
			tps_school_xj2:"学车",
			tps_school_xj2_info:"锁定技，你与其他角色的距离-(X-1)（X为你的分数值且至多为3）。",
			
			tps_school_14:"菊中蒟蒻",
			tps_school_141:"菊中蒟蒻",
			tps_school_141_info:"摸牌阶段，若你装备有【十四之梦】，你可以多摸一张牌。",
			tps_school_142:"菊中蒟蒻",
			tps_school_142_info:"你的回合外，若你装备有【十四之梦】，每当你失去最后一张手牌时，你摸两张牌。"
			/*
			debug_lmk1:"乱码-科1",
			debug_lmk1_info:"乱码-科1",
			debug_lmk2:"乱码-科2",
			debug_lmk2_info:"乱码-科2",
			debug_lmk3:"乱码-科3",
			debug_lmk3_info:"乱码-科3",
			debug_lmk4:"乱码-科4",
			debug_lmk4_info:"乱码-科4",
			debug_lmk5:"乱码-科5",
			debug_lmk5_info:"乱码-科5",
			debug_lmy1:"乱码-英1",
			debug_lmy1_info:"乱码-英1",
			debug_lmy2:"乱码-英2",
			debug_lmy2_info:"乱码-英2",
			debug_lmy3:"乱码-英3",
			debug_lmy3_info:"乱码-英3",
			debug_lmy4:"乱码-英4",
			debug_lmy4_info:"乱码-英4",
			debug_lmy5:"乱码-英5",
			debug_lmy5_info:"乱码-英5",*/
		},
	};
});
