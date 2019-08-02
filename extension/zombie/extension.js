game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"zombie",content:function (config,pack){
	if ( lib.brawl ) {
lib.brawl.jiangshimoshi = {
            name:'僵尸模式',
            mode:'identity',			
            intro:[
			'（标准八人身份局）',
			'【寒鸦】:移植神问的僵尸模式，规则略有改动',
			'<span class=\"bluetext\" style=\"color:#EE7621\">规则介绍：</span>',
			'游戏开始时，除班长外的所有角色的势力变为班委（人类）；',
			'班长的第二个回合开始时，夜幕降临；',
			'在夜晚，除班长外的所有角色有15*X%概率变成僵尸,X为角色所在的号位数-1（每局只能有一人因此变为僵尸且必定有一人因此变为僵尸）；',
			'每当有势力为班委（人类）的角色退学时，其弃置所有牌并摸4张牌，然后变为僵尸；',
			'每当有势力为班长（人类）的角色退学时，其选择一名势力为班委（人类）的角色，使其成为班长；',
			'人类们可以互助；',
			'牌堆中增加一张【血清】（【血清】：对任意一名人类角色使用，令其回复一点体力并令其退学后不会变为僵尸）',
			'<span class=\"bluetext\" style=\"color:#EE7621\">获胜条件（满足其一即可获胜）：</span>',
			'（1）班长会在其回合开始时获得一枚"退治"标记。当班长拥有8枚退治标记的时候，班长和班委（人类）赢得胜利；',
			'（2）问光所有僵尸'],
			content:{
                cardPile:function(list){
                    var list2=[];
						for(var i=0;i<list.length;i++){
                        list2.push(list[i]); 
                    }
                        list2.push(["heart","1","xueqing"]);
						return list2;
                },				
                gameStart:function(){
					game.zhu.addSkill('jisuan');
					game.zhu.addSkill('jisuan2');
                    for(var i=0;i<game.players.length;i++){
                        game.players[i].addSkill('huzhu');
                        game.players[i].addSkill('jiangshi');
						game.players[i].addSkill('jiangshi2');
						game.players[i].addSkill('jiangshi9');
                    }
					}
                },
            init:function(){
	game.saveConfig('player_number','8','identity');
	game.saveConfig('identity_mode','normal','identity');
    lib.skill.jiangshi={
				skillAnimation:'epic',
				animationStr:'僵尸模式',
				animationColor:'thunder',
				trigger:{player:'gameDrawAfter'},
				forced:true,
				filter:function(event,player){
					return player==game.zhu;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhu') continue;
						game.players[i].identity='zhong';	
					}
					game.zhu.addSkill('tuizhi');
					game.showIdentity();
				},
				group:['jiangshi3','jiangshi4','jiangshi5','jiangshi6','jiangshi7','jiangshi8']
			}
			lib.translate.jiangshi2='僵尸';
			lib.translate.jiangshi3='僵尸';
			lib.translate.jiangshi4='僵尸';
			lib.translate.jiangshi5='僵尸';
			lib.translate.jiangshi6='僵尸';
			lib.translate.jiangshi7='僵尸';
			lib.translate.jiangshi8='僵尸';
			lib.translate.jiangshi9='僵尸';
			lib.skill.jiangshi9={
				trigger:{player:'dieBegin'},
				forced:true,
				content:function(){
					var pl=trigger.player;
					if(pl.identity=='zhong'){
						pl.draw(4);
						pl.discard(player.get("hej"),99999);
					    pl.revive();
						pl.uninit;
						pl.init(pl.name,'jiangshi');
						pl.maxHp=Math.ceil(trigger.source.maxHp/2);
                        pl.hp=pl.maxHp;
                        
                            if(trigger.source.identity=="nei"){
                                trigger.source.identity="fan";
                                trigger.source.update();
                            }
						pl.identity='nei';
					game.showIdentity();
					trigger.untrigger();
					trigger.finish();
					}
				}
			}
						lib.skill.jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(player.identity!='zhong') return false;
					if(Math.random()>game.zhu.storage.jisuan*0.15) return false;
					if(game.zhu.storage.nojiangshi) return false;
					return !player.storage.tuizhi&&game.zhu.storage.tuizhi==2;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
                        game.players[i].removeSkill('jiangshi2');
                    };
					game.zhu.removeSkill('jisuan');
					game.zhu.removeSkill('jisuan2');
					game.log(player,'变成了【僵尸】失去了理智开始攻击人类！');
					player.next.storage.id=player.next.identity;	
					player.next.identity='nei';
					player.die();
					player.identity='fan';
					player.storage.fh=true;
				}
			}
			lib.skill.jiangshi3={
				trigger:{global:'dieAfter'},
				forced:true,
				forced:true,
				popup:false,
				silent:true,
				content:function(){
					var pl=trigger.player;
					game.delay(2);
					switch(pl.identity){
						case 'fan':
						if(pl.storage.fh){
						pl.revive();
						pl.storage.fh=false;
						pl.uninit;
						pl.init(pl.name,'jiangshi');
						pl.maxHp=5;
						pl.hp=5;
						pl.draw(5);
						pl.next.identity=pl.next.storage.id;
						}break;
						case 'zhong':
						if(pl.storage.js){
						pl.revive();
						pl.uninit;
						pl.init(pl.name,'jiangshi');
						pl.maxHp=Math.ceil((pl.storage.js)/2);
						pl.hp=pl.maxHp;
						pl.identity='nei';
                            
                            if(trigger.source.identity=="nei"){
                                trigger.source.identity="fan";
                                trigger.source.update();
                            }
						pl.update();
						}break;
					}
					game.showIdentity();
					trigger.untrigger();
					trigger.finish();
				}
			}
			lib.skill.jiangshi4={
				trigger:{source:'dieBegin'},
				forced:true,
				popup:false,
				silent:true,
				content:function(){
					var pl=trigger.player;
					if(player.identity=='fan'&&(pl.identity=='zhong'||pl.identity=='zhu')) pl.storage.js=player.maxHp;
					if(player.identity=='nei'&&(pl.identity=='zhong'||pl.identity=='zhu')){
						player.identity='fan';
						pl.storage.js=player.maxHp;
					}
					if(pl.identity=='fan'){
						player.hp=player.maxHp;
					}
					if(pl.identity=='nei'){
						player.draw(3);
						player.hp=player.maxHp;
					}
					game.showIdentity();
				}
			}
			lib.skill.jiangshi5={
				skillAnimation:'epic',
				animationStr:'班长阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage.tuizhi>0;
				},
				content:function(){
                    
                            if(trigger.source.identity=="nei"){
                                trigger.source.identity="fan";
                                trigger.source.update();
                            }
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'退学',event.target,'成为了新的班长！');
						game.zhu=event.target;
						event.target.identity='zhu';
						event.target.addSkill('tuizhi');
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.tuizhi=player.storage.tuizhi-1;
						event.target.markSkill('tuizhi');
						event.target.syncStorage('tuizhi');
						event.target.storage.nojiangshi=true;
						game.showIdentity();
					}
				}
			}
			lib.skill.jiangshi6={
				audio:['jiangshi',2],
				skillAnimation:'epic',
				animationStr:'灵魂、献祭',
				forced:true,		
				trigger:{player:'dieBegin'},
				filter:function(event,player){
					return (player.identity=='fan'&&player.storage.fh==true)||player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂、献祭');
				}
			}
			lib.skill.jiangshi7={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸、灭亡',
				animationColor:'thunder',
				forced:true,		
				trigger:{player:'dieBegin'},
				filter:function(event,player){
					if(!player.storage.js) return false;
					if(player.storage.fh==true) return false;
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸、灭亡');
				}
			}
			lib.skill.jiangshi8={
				skillAnimation:'epic',
				animationStr:'暗夜、降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage.tuizhi==2;
				},
				content:function(){
					game.log('暗夜、降临');
				}
			}
			lib.skill.huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					target.recover();
				}
			}
			lib.translate.huzhu='互助'
			lib.translate.huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【习】令距离一的人类玩家恢复一点体力'
			lib.translate.jisuan='概率'
			lib.translate.jisuan2='概率'
			lib.skill.jisuan={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				content:function(){
					if(player.storage.jisuan==undefined) player.storage.jisuan=0;
					player.markSkill('jisuan');
					player.syncStorage('jisuan');
				},
				intro:{
					content:function (storage){
                    return '下一名角色变为角色的概率为'+storage*15+'%'
},
				},
			}
			lib.skill.jisuan2={
                trigger:{
                global:"phaseEnd",
                },
				forced:true,
				filter:function(event,player){
				return player.storage.tuizhi==2;
				},
				content:function(){
                player.storage.jisuan+=1;
				player.syncStorage('jisuan');
				},
			}			
			lib.skill.tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				content:function(){
					if(player.storage.tuizhi==undefined) player.storage.tuizhi=0;
					player.storage.tuizhi++;
					player.markSkill('tuizhi');
					player.syncStorage('tuizhi');
				},
				intro:{
					content:'mark'
				},
				group:'tuizhi2'
			}
			lib.translate.tuizhi='退治'
			lib.translate.tuizhi_info='班长会在其回合开始时获得一枚"退治"标记。当班长拥有8枚退治标记的时候，班长和班委赢得胜利'
			lib.skill.tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					return game.zhu.storage.tuizhi>=8;
				},
				content:function(){
					if(game.me.identity=='zhu'||game.me.identity=='zhong') game.over(true);
					else game.over(false);
				}
			}
			lib.translate.tuizhi2='退治'
			lib.skill.xunmeng={
				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				forced:true,
				content:function(){
					trigger.num++;
					if(player.hp>1) player.loseHp();
				}
			}
			lib.translate.xunmeng='迅猛'
			lib.translate.xunmeng_info=' 锁定技，你的问造成的扣分+1。你的问造成扣分时，若你体力大于1，你失去1点体力。 '
			lib.skill.zaibian={
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return get.population('zhong')-get.population('fan')-get.population('nei')+2>0;
				},
				forced:true,
				content:function(){
					var num=get.population('zhong')-get.population('fan')-get.population('nei')+2;
					player.draw(num);
				}
			}
			lib.translate.zaibian='灾变'
			lib.translate.zaibian_info=' 锁定技，你的出牌阶段开始时，若人类玩家数-僵尸玩家数+1大于0，则你摸取该数目的牌。 ' 
			lib.skill.ganran={		
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardRespondable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
				},
				enable:['chooseToUse'],
				filterCard:{type:'equip'},
				viewAsFilter:function(player){
					return player.num('h',{type:'equip'})>0;
				},
				viewAs:{name:'tiesuo'},
				check:function(){return 1},
				group:'ganran2',
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			}
			lib.translate.ganran='感染'
			lib.translate.ganran_info=' 锁定技，你的工具牌都视为拉帮结派'
			lib.skill.ganran2={
				enable:'phaseUse',
				filter:function(event,player){
					return player.num('h',{type:'equip'})>0;
				},
				filterCard:{type:'equip'},
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
						ui.discardPile.appendChild(cards[i]);
					}
				},
				ai:{
					order:3.5,
					result:{
						player:1
					}
				}
			}
			lib.translate.ganran2='感染·重铸'
			lib.skill.global.push('jiangshi')
			lib.skill.global.push('huzhu')
		}}			
	}   
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            jiangshi:["male","qun",5,["xunmeng","zaibian","ganran","wansha","paoxiao"],["forbidai","des:僵尸模式配套武将"]],
        },
        translate:{
            jiangshi:"僵尸",
        },
    },
    card:{
        card:{
            xueqing:{
                enable:true,
                filterTarget:function (card,player,target){
        return target.identity=='zhong';
    },
                type:"basic",
                content:function (){
        target.recover();
        target.removeSkill('jiangshi9');
    },
                ai:{
                    order:4,
                    value:[8,3],
                    useful:[6,3],
                    result:{
                        target:function (player,target){
                var eff=ai.get.recoverEffect(target,player,target);
                if(eff<=0) return 0;
                var num=target.maxHp-target.hp;
                if(num<1) return 0;
                if(num==1) return 1;
                if(target.hp==1) return 2.5;
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                    },
                },
                fullimage:true,
            },
        },
        translate:{
            xueqing:"血清",
            "xueqing_info":"对任意一名人类角色使用，令其回复一点体力并令其退学后不会变为僵尸",
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"",
},files:{"character":[],"card":[],"skill":[]}}})