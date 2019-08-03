'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'extra',
		connect:true,
		card:{
			jiu:{
				audio:true,
				fullskin:true,
				type:"basic",
				toself:true,
				enable:function(event,player){
					//return !player.hasSkill('jiu');
					return true;
				},
				lianheng:true,
				logv:false,
				savable:function(card,player,dying){
					return dying==player;
				},
				usable:1,
				selectTarget:-1,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					if(target.isDying()){
						target.recover();
						if(_status.currentPhase==target){
							target.getStat().card.jiu--;
						}
					}
					else{
						if(cards&&cards.length){
							card=cards[0];
						}
						if(!player.storage.jiu) player.storage.jiu=0;
						player.storage.jiu++;
						game.broadcastAll(function(target,card,gain2){
							target.addSkill('jiu');
							if(!target.node.jiu&&lib.config.jiu_effect){
								target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
								target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
							}
							if(gain2&&card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								card.clone.moveDelete(target);
							}
						},target,card,target==targets[0]&&cards.length==1);
						if(target==targets[0]&&cards.length==1){
							if(card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								game.addVideo('gain2',target,get.cardsInfo([card]));
							}
						}
					}
				},
				ai:{
					basic:{
						useful:function(card,i){
							if(_status.event.player.hp>1){
								if(i==0) return 4;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
						value:function(card,player,i){
							if(player.hp>1){
								if(i==0) return 5;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
					},
					order:function(){
						return get.order({name:'sha'})+0.2;
					},
					result:{
						target:function(player,target){
							if(target&&target.isDying()) return 2;
							if(lib.config.mode=='stone'&&!player.isMin()){
								if(player.getActCount()+1>=player.actcount) return 0;
							}
							var shas=player.getCards('h','sha');
							if(shas.length>1&&player.getCardUsable('sha')>1){
								return 0;
							}
							var card;
							if(shas.length){
								for(var i=0;i<shas.length;i++){
									if(lib.filter.filterCard(shas[i],target)){
										card=shas[i];break;
									}
								}
							}
							else if(player.hasSha()&&player.needsToDiscard()){
								if(player.countCards('h','hufu')!=1){
									card={name:'sha'};
								}
							}
							if(card){
								if(game.hasPlayer(function(current){
									return (get.attitude(target,current)<0&&
										target.canUse(card,current,true,true)&&
										!current.getEquip('baiyin')&&
										get.effect(current,card,target)>0);
								})){
									return 1;
								}
							}
							return 0;
						},
					},
					tag:{
						save:1
					}
				}
			},
			huogong:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				cardnature:'fire',
				filterTarget:function(card,player,target){
					if(player!=game.me&&player.countCards('h')<2) return false;
					return target.countCards('h')>0;
				},
				content:function(){
					"step 0"
					if(target.countCards('h')==0){
						event.finish();
						return;
					}
					target.chooseCard(true).ai=function(card){
						if(_status.event.getRand()<0.5) return Math.random();
						return get.value(card);
					};
					"step 1"
					event.dialog=ui.create.dialog(get.translation(target)+'展示的手牌',result.cards);
					event.videoId=lib.status.videoId++;

					game.broadcast('createDialog',event.videoId,get.translation(target)+'展示的手牌',result.cards);
					game.addVideo('cardDialog',null,[get.translation(target)+'展示的手牌',get.cardsInfo(result.cards),event.videoId]);
					event.card2=result.cards[0];
					game.log(target,'展示了',event.card2);
					player.chooseToDiscard({suit:get.suit(event.card2)},function(card){
						var evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.player,'fire')>0){
							return 7-get.value(card,evt.player);
						}
						return -1;
					}).prompt=false;
					game.delay(2);
					"step 2"
					if(result.bool){
						target.damage('fire');
					}
					else{
						target.addTempSkill('huogong2');
					}
					event.dialog.close();
					game.addVideo('cardDialog',null,event.videoId);
					game.broadcast('closeDialog',event.videoId);
				},
				ai:{
					basic:{
						order:4,
						value:[3,1],
						useful:1,
					},
					wuxie:function(target,card,player,current,state){
						if(get.attitude(current,player)>=0&&state>0) return false;
					},
					result:{
						player:function(player){
							var nh=player.countCards('h');
							if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'})){
									return -10;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -10;
									if(viewAs&&viewAs.name=='huogong') return -10;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
							if(player.countCards('h')<=1) return 0;
							if(target==player){
								if(typeof _status.event.filterCard=='function'&&
									_status.event.filterCard({name:'huogong'})){
									return -1.5;
								}
								if(_status.event.skill){
									var viewAs=get.info(_status.event.skill).viewAs;
									if(viewAs=='huogong') return -1.5;
									if(viewAs&&viewAs.name=='huogong') return -1.5;
								}
								return 0;
							}
							return -1.5;
						}
					},
					tag:{
						damage:1,
						fireDamage:1,
						natureDamage:1,
						norepeat:1
					}
				}
			},
			tiesuo:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:true,
				selectTarget:[1,2],
				content:function(){
					target.link();
				},
				chongzhu:true,
				ai:{
					wuxie:function(){
						if(_status.event.getRand()<0.5) return 0;
					},
					basic:{
						useful:4,
						value:4,
						order:7
					},
					result:{
						target:function(player,target){
							if(target.isLinked()){
								if(target.hasSkillTag('link')) return 0;
								var f=target.hasSkillTag('nofire');
								var t=target.hasSkillTag('nothunder');
								if(f&&t) return 0;
								if(f||t) return 0.5;
								return 2;
							}
							if(get.attitude(player,target)>=0) return -0.9;
							if(ui.selected.targets.length) return -0.9;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<=-1&&current!=target&&!current.isLinked();
							})){
								return -0.9;
							}
							return 0;
						}
					},
					tag:{
						multitarget:1,
						multineg:1,
						norepeat:1
					}
				}
			},
			bingliang:{
				audio:true,
				fullskin:true,
				type:'delay',
				range:{global:1},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				judge:function(card){
					if(get.suit(card)=='club') return 0;
					return -3;
				},
				effect:function(){
					if(result.bool==false){
						player.skip('phaseDraw');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:4,
					},
					result:{
						target:function(player,target){
							if(target.hasJudge('caomu')) return 0;
							return -1.5/Math.sqrt(target.countCards('h')+1);
						}
					},
					tag:{
						skip:'phaseDraw'
					}
				}
			},
			hualiu:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				distance:{globalTo:1},
			},
			zhuque:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				cardnature:'fire',
				distance:{attackFrom:-3},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['zhuque_skill']
			},
			guding:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
				ai:{
					basic:{
						equipValue:2
					}
				},
				skills:['guding_skill']
			},
			tengjia:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				cardnature:'fire',
				ai:{
					equipValue:function(card,player){
						if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
						if(player.hasSkillTag('noDirectDamage')) return 10;
						if(get.damageEffect(player,player,player,'fire')>=0) return 10;
						var num=3-game.countPlayer(function(current){
							return get.attitude(current,player)<0;
						});
						if(player.hp==1) num+=4;
						if(player.hp==2) num+=1;
						if(player.hp==3) num--;
						if(player.hp>3) num-=4;
						return num;
					},
					basic:{
						equipValue:3
					},
				},
				skills:['tengjia1','tengjia2','tengjia3']
			},
			baiyin:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				onLose:function(){
					player.recover();
				},
				filterLose:function(card,player){
					return player.hp<player.maxHp;
				},
				skills:['baiyin_skill'],
				tag:{
					recover:1,
				},
				ai:{
					order:9.5,
					equipValue:function(card,player){
						if(player.hp==player.maxHp) return 5;
						if(player.countCards('h','baiyin')) return 6;
						return 0;
					},
					basic:{
						equipValue:5
					}
				}
			},
		},
		skill:{
			huogong2:{},
			jiu:{
				trigger:{player:'useCard'},
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				forced:true,
				content:function(){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.jiu;
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
				},
				temp:true,
				vanish:true,
				silent:true,
				popup:false,
				onremove:function(player){
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
					delete player.storage.jiu;
				},
				ai:{
					damageBonus:true
				},
				group:'jiu2'
			},
			jiu2:{
				trigger:{player:'useCardAfter',global:'phaseAfter'},
				priority:2,
				filter:function(event){
					if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
					return true;
				},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
				},
			},
			guding_skill:{
				audio:true,
				trigger:{source:'damageBegin'},
				filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(event.player.countCards('h')==0) return true;
					}
					return false;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&target.countCards('h')==0) return [1,-2];
						}
					}
				}
			},
			tengjia1:{
				trigger:{target:['useCardToBefore']},
				forced:true,
				priority:6,
				audio:true,
				filter:function(event,player){
					if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})) return;
							if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
							if(card.name=='sha'){
								var equip1=player.getEquip(1);
								if(equip1&&equip1.name=='zhuque') return 2;
								if(equip1&&equip1.name=='qinggang') return 1;
								if(!card.nature) return 'zerotarget';
							}
						}
					}
				}
			},
			tengjia2:{
				trigger:{player:'damageBegin'},
				filter:function(event){
					if(event.nature=='fire') return true;
				},
				audio:true,
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				}
			},
			tengjia3:{
			    audio:'tengjia1',
			    trigger:{target:'shaBegin'},
			    filter:function(event,player){
			        if(event.player.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.card.name=='sha'&&!event.card.nature) return true;
					return false;
			    },
			    content:function(){
			        trigger.cancel();
			    },
			},
			baiyin_skill:{
				trigger:{player:'damageBegin'},
				forced:true,
				audio:true,
				filter:function(event,player){
					if(event.num<=1) return false;
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return true;
				},
				priority:-10,
				content:function(){
					trigger.num=1;
				}
			},
			zhuque_skill:{
				trigger:{player:'useCardToBefore'},
				priority:7,
				filter:function(event,player){
					if(event.card.name=='sha'&&!event.card.nature) return true;
				},
				audio:true,
				check:function(event,player){
					var att=get.attitude(player,event.target);
					if(event.target.hasSkillTag('nofire')){
						return att>0;
					}
					return att<=0;
				},
				content:function(){
					trigger.card.nature='fire';
					player.addSkill('zhuque_skill2');
					player.storage.zhuque_skill=trigger.card;
				}
			},
			zhuque_skill2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				content:function(){
					delete player.storage.zhuque_skill.nature;
				}
			},
			huogon2:{},
		},
		translate:{
			jiu:'思',
			jiu_info:'出牌阶段，对自己使用，令自己的下一张使用的【问】造成的扣分+1（每回合限使用1次）；将退学阶段，对自己使用，回复1点体力',
			huogong:'抽查',
			tiesuo:'拉帮结派',
			tiesuo_info:'出牌阶段使用，选择1至2个角色，分别横置或重置这些角色',
			huogong_bg:'抽',
			huogong_info:'目标角色展示一张手牌，然后若你能弃掉一张与所展示牌相同花色的手牌，则抽查对该角色造成1点文竞扣分。',
			tiesuo_bg:'派',
			bingliang:'作业没带',
			hualiu:'长河之梦',
			zhuque:'朱雀羽扇',
			bingliang_bg:'落',
			bingliang_info:'目标角色判定阶段进行判定：若判定结果不为科学，则跳过该角色的摸牌阶段。',
			hualiu_bg:'前八',
			hualiu_info:'你的防御距离+1',
			zhuque_bg:'组',
			zhuque_skill:'文竞组长',
			zhuque_info:'你可以将一张普通【问】当具文竞扣分的【问】使用。',
			guding:'加急作业',
			guding_info:'锁定技，当你使用【问】对目标角色造成扣分时，若其没有手牌，此扣分+1。',
			guding_skill:'加急作业',
			tengjia:'勺式忽略',
			tengjia_info:'锁定技，【多想多问】、【阶段测验】和普通【问】对你无效。你每次受到文竞扣分时，该扣分+1。',
			tengjia1:'勺式忽略',
			tengjia2:'勺式忽略',
			tengjia3:'勺式忽略',
			baiyin:'人情珍贵',
			baiyin_info:'锁定技，你每次受到扣分时，最多承受1点扣分（防止多余的扣分）；当你失去工具区里的【人情珍贵】时，你回复1点体力。',
			baiyin_skill:'人情珍贵',
		},
		list:[
			["heart",4,"sha","fire"],
			["heart",7,"sha","fire"],
			["heart",10,"sha","fire"],
			["diamond",4,"sha","fire"],
			["diamond",5,"sha","fire"],
			["spade",4,"sha","thunder"],
			["spade",5,"sha","thunder"],
			["spade",6,"sha","thunder"],
			["spade",7,"sha","thunder"],
			["spade",8,"sha","thunder"],
			["club",5,"sha","thunder"],
			["club",6,"sha","thunder"],
			["club",7,"sha","thunder"],
			["club",8,"sha","thunder"],
			["heart",8,"shan"],
			["heart",9,"shan"],
			["heart",11,"shan"],
			["heart",12,"shan"],
			["diamond",6,"shan"],
			["diamond",7,"shan"],
			["diamond",8,"shan"],
			["diamond",10,"shan"],
			["diamond",11,"shan"],
			["heart",5,"tao"],
			["heart",6,"tao"],
			["diamond",2,"tao"],
			["diamond",3,"tao"],
			["diamond",9,"jiu"],
			["spade",3,"jiu"],
			["spade",9,"jiu"],
			["club",3,"jiu"],
			["club",9,"jiu"],

			["diamond",13,"hualiu"],
			["club",1,"baiyin"],
			["spade",2,"tengjia",'fire'],
			["club",2,"tengjia",'fire'],
			["spade",1,"guding"],
			["diamond",1,"zhuque",'fire'],

			["heart",2,"huogong","fire"],
			["heart",3,"huogong","fire"],
			["diamond",12,"huogong","fire"],
			["spade",11,"tiesuo"],
			["spade",12,"tiesuo"],
			["club",10,"tiesuo"],
			["club",11,"tiesuo"],
			["club",12,"tiesuo"],
			["club",13,"tiesuo"],
			["heart",13,"wuxie"],
			["heart",13,"wuxie"],
			["spade",13,"wuxie"],
			["spade",10,"bingliang"],
			["club",4,"bingliang"],
		],
	}
});
