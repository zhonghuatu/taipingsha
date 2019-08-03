'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'guozhan',
		connect:true,
		card:{
			minguangkai:{
				mode:['guozhan'],
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				cardimage:'suolianjia',
				skills:['minguangkai_cancel','minguangkai_link'],
				ai:{
					basic:{
						equipValue:6
					}
				}
			},
			dinglanyemingzhu:{
				mode:['guozhan'],
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				nomod:true,
				nopower:true,
				unique:true,
				global:'g_dinglanyemingzhu_ai',
				skills:['dinglanyemingzhu_skill'],
				ai:{
					equipValue:function(card,player){
						if(player.hasSkill('jubao')) return 8;
						if(player.hasSkill('gzzhiheng')) return 6;
						if(game.hasPlayer(function(current){
							return current.hasSkill('jubao')&&get.attitude(player,current)<=0;
						})){
							return 0;
						}
						return 7;
					},
					basic:{
						equipValue:6.5
					}
				}
			},
			feilongduofeng:{
				mode:['guozhan'],
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				nomod:true,
				nopower:true,
				unique:true,
				global:'g_feilongduofeng_ai',
				distance:{attackFrom:-1},
				skills:['feilongduofeng','feilongduofeng2'],
				ai:{
					equipValue:function(card,player){
						if(player.hasSkill('zhangwu')) return 9;
						if(game.hasPlayer(function(current){
							return current.hasSkill('zhangwu')&&get.attitude(player,current)<=0;
						})){
							return 1;
						}
						return 8;
					},
					basic:{
						equipValue:7
					}
				}
			},
			taipingyaoshu:{
				mode:['guozhan'],
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				nomod:true,
				nopower:true,
				unique:true,
				global:['g_taipingyaoshu','g_taipingyaoshu_ai'],
				skills:['taipingyaoshu'],
				ai:{
					equipValue:function(card,player){
						if(player.hasSkill('wendao')) return 9;
						if(game.hasPlayer(function(current){
							return current.hasSkill('wendao')&&get.attitude(player,current)<=0;
						})){
							return 1;
						}
						return 6;
					},
					basic:{
						equipValue:6
					}
				},
				onLose:function(){
					'step 0'
					player.loseHp();
					'step 1'
					player.draw(2);
				}
			},
			yuxi:{
				mode:['guozhan'],
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				skills:['yuxi_skill'],
				ai:{
					equipValue:9
				}
			},
			xietianzi:{
				fullskin:true,
				type:'trick',
				enable:function(card,player,event){
					if(get.mode()=='guozhan'&&!player.isMajor()) return false;
					if(player.hasSkill('xietianzi')) return false;
					if(_status.currentPhase!=player) return false;
					return (event||_status.event).getParent().name=='phaseUse';
				},
				filterTarget:function(card,player,target){
					return player==target;
				},
				selectTarget:-1,
				content:function(){
					var evt=_status.event.getParent('phaseUse');
					if(evt&&evt.name=='phaseUse'){
						evt.skipped=true;
					}
					target.insertEvent('xietianzi',lib.card.xietianzi.content_phase);
					// target.addSkill('xietianzi');
				},
				content_phase:function(){
					"step 0"
					player.removeSkill('xietianzi');
					if(player.countCards('he')>0){
						player.chooseToDiscard('he','是否弃置一张牌并获得一个额外回合？').set('ai',function(card){
							return 10-get.value(card);
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool){
						player.insertPhase();
					}
				},
				ai:{
					order:0.5,
					value:4,
					useful:2,
					tag:{
						norepeat:1
					},
					result:{
						target:function(player,target){
							if(target.countCards('he')>=2) return 1;
							return 0;
						}
					}
				}
			},
			shuiyanqijunx:{
				fullskin:true,
				type:'trick',
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('e')>0;
				},
				enable:true,
				content:function(){
					'step 0'
					if(!target.countCards('e',function(card){
						return lib.filter.cardDiscardable(card,target);
					})){
						target.damage('thunder');
						event.finish();
						return;
					}
					target.chooseControl('discard_card','take_damage',function(event,player){
						if(get.damageEffect(player,event.player,player,'thunder')>=0){
							return 'take_damage';
						}
						if(player.hp>=3&&player.countCards('e')>=2){
							return 'take_damage';
						}
						return 'discard_card';
					});
					'step 1'
					if(result.control=='discard_card'){
						target.discard(target.getCards('e'));
					}
					else{
						target.damage('thunder');
					}
				},
				ai:{
					order:7,
					value:4,
					useful:2,
					tag:{
						damage:1,
						thunderDamage:1,
						natureDamage:1
					},
					result:{
						target:function(player,target){
							return -target.countCards('e');
						}
					}
				}
			},
			lulitongxin:{
				fullskin:true,
				type:'trick',
				enable:function(card,player){
					return game.hasPlayer(function(current){
						return current.isMajor();
					});
				},
				mode:['guozhan'],
				filterTarget:true,
				chongzhu:true,
				changeTarget:function(player,targets){
					var target=targets[0];
					game.filterPlayer(function(current){
						return current.isMajor()==target.isMajor()&&current!=target&&!current.hasSkill('diaohulishan');
					},targets);
				},
				content:function(){
					if(target.isLinked()){
						target.draw();
					}
					else{
						target.link();
					}
				},
				ai:{
					order:7.5,
					value:4,
					useful:2,
					wuxie:function(){
						return 0;
					},
					result:{
						player:function(player,target){
							return game.countPlayer(function(current){
								if(target.isMajor()==current.isMajor()){
									if(current.isLinked()){
										return get.attitude(player,target);
									}
									else{
										return -get.attitude(player,target)*0.8;
									}
								}
							});
						}
					}
				}
			},
			lianjunshengyan:{
				fullskin:true,
				type:'trick',
				enable:function(card,player){
					return !player.isUnseen();
				},
				mode:['guozhan'],
				filterTarget:function(card,player,target){
					return target.identity!='unknown'&&(target.identity!=player.identity||target.identity=='ye');
				},
				changeTarget:function(player,targets){
					var target=targets[0];
					targets.push(player);
					if(target.identity!='ye'){
						game.filterPlayer(function(current){
							return target!=current&&target.identity==current.identity&&!current.hasSkill('diaohulishan');
						},targets);
					}
				},
				content:function(){
					'step 0'
					if(target==player){
						target.draw(targets.length-1);
						event.finish();
					}
					else{
						target.chooseDrawRecover(true);
					}
					'step 1'
					target.link(false);
				},
				ai:{
					order:3,
					value:4,
					useful:2,
					result:{
						player:0.8,
						target:1
					}
				}
			},
			chiling:{
				fullskin:true,
				type:'trick',
				enable:true,
				mode:['guozhan'],
				filterTarget:function(card,player,target){
					return target.isUnseen();
				},
				selectTarget:-1,
				chooseai:function(event,player){
					if(_status.event.controls.contains('选项三')){
						return Math.random()<0.5?'选项一':'选项三';
					}
					else{
						if(_status.event.getParent().nomingzhi){
							if(_status.event.controls.contains('选项二')) return '选项二';
							return '选项一';
						}
						if(player.hasSkillTag('maixie_hp')||player.hp<=2) return '选项一';
						return Math.random()<0.5?'选项一':'选项二';
					}
				},
				content:function(){
					'step 0'
					var choiceList=['明置一张武将牌，然后摸一张牌','失去1点体力'];
					event.nomingzhi=target.hasSkillTag('nomingzhi',false,null,true);
					if(event.nomingzhi){
						choiceList.shift();
					}
					if(target.countCards('he',{type:'equip'})){
						choiceList.push('弃置一张工具牌');
					}
					target.chooseControl(lib.card.chiling.chooseai).set('prompt','反省大会').set('choiceList',choiceList);
					'step 1'
					var index=result.index;
					if(event.nomingzhi){
						index++;
					}
					if(index==0){
						target.chooseControl('主将','副将',function(){
							return Math.floor(Math.random()*2);
						}).set('prompt','选择要明置的武将牌');
					}
					else if(index==1){
						target.loseHp();
						event.finish();
					}
					else{
						target.chooseToDiscard('he',{type:'equip'},true);
						event.finish();
					}
					'step 2'
					if(result.index==0){
						target.showCharacter(0);
					}
					else{
						target.showCharacter(1);
					}
					target.draw();
				},
				ai:{
					order:6,
					result:{
						target:-1
					},
					tag:{
						multitarget:1,
						multineg:1,
					}
				}
			},
			diaohulishan:{
				fullskin:true,
				type:'trick',
				enable:true,
				global:'g_diaohulishan',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:[1,2],
				content:function(){
					target.addTempSkill('diaohulishan');
				},
				ai:{
					order:10,
					value:4,
					useful:[2,1],
					wuxie:function(){
						return 0;
					},
					result:{
						player:function(player,target){
							var att=get.attitude(player,target);
							if(target.hp==1&&att<0) return 0;
							if(game.hasPlayer(function(current){
								return get.attitude(player,current)<att;
							})){
								var num=1;
								if(target==player.next||target==player.previous){
									num+=0.5;
								}
								return num;
							}
							return 0;
						}
					}
				}
			},
			huxinjing:{
				fullskin:true,
				type:"equip",
				subtype:"equip2",
				skills:['huxinjing'],
				ai:{
					basic:{
						equipValue:6
					},
				},
			},
			huoshaolianying:{
				fullskin:true,
				type:'trick',
				filterTarget:function(card,player,target){
					if(get.mode()=='guozhan'){
						var next=player.getNext();
						if(!next) return false;
						return target==next||target.inline(next);
					}
					if(player==target) return false;
					if(game.hasPlayer(function(current){
						return current.isLinked()&&current!=player;
					})){
						if(!target.isLinked()) return false;
						var distance=get.distance(player,target,'absolute');
						return !game.hasPlayer(function(current){
							if(target!=current&&current!=player&&current.isLinked()){
								var dist=get.distance(player,current,'absolute');
								if(dist<distance){
									return true;
								}
								if(dist==distance&&parseInt(current.dataset.position)<parseInt(target.dataset.position)){
									return true;
								}
							}
						});
					}
					else{
						var dist=get.distance(player,target);
						return !game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)<dist
						});
					}
				},
				enable:true,
				selectTarget:-1,
				modTarget:true,
				content:function(){
					target.damage('fire');
				},
				ai:{
					order:5,
					value:6,
					tag:{
						damage:1,
						natureDamage:1,
						fireDamage:1,
					},
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')||target.hasSkillTag('nodamage')) return 0;
							if(target.hasSkill('xuying')&&target.countCards('h')==0) return 0;
							if(!target.isLinked()){
								return get.damageEffect(target,player,target,'fire');
							}
							return game.countPlayer(function(current){
								if(current.isLinked()){
									return get.sgn(get.damageEffect(current,player,target,'fire'));
								}
							});
						}
					}
				}
			},
			yuanjiao:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:function(card,player){
					if(get.mode()=='guozhan'&&player.isUnseen()) return false;
					return true;
				},
				filterTarget:function(card,player,target){
					if(get.mode()!='guozhan') return player!=target;
					if(target.identity=='unknown'||player.identity=='unknown') return false;
					if(player==target) return false;
					if(player.identity=='ye') return true;
					return player.identity!=target.identity;
				},
				content:function(){
					game.asyncDraw([target,player],[1,get.mode()=='guozhan'?3:1]);
				},
				ai:{
					basic:{
						useful:4,
						value:8,
						order:9
					},
					result:{
						target:1,
						player:3,
					},
				},
			},
			zhibi:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				chongzhu:true,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return (target.countCards('h')||target.isUnseen(2));
				},
				content:function(){
					"step 0"
					if(!player.storage.zhibi){
						player.storage.zhibi=[];
					}
					player.storage.zhibi.add(target);
					var controls=[];
					if(target.countCards('h')) controls.push('手牌');
					if(target.isUnseen(0)) controls.push('主将');
					if(target.isUnseen(1)) controls.push('副将');
					if(controls.length>1){
						player.chooseControl(controls);
					}
					if(controls.length==0) event.finish();
					"step 1"
					var content;
					var str=get.translation(target)+'的';
					if(result.control){
						if(result.control=='手牌'){
							content=[str+'手牌',target.getCards('h')];
							game.log(player,'观看了',target,'的手牌');
						}
						else if(result.control=='主将'){
							content=[str+'主将',[[target.name1],'character']];
							game.log(player,'观看了',target,'的主将');
						}
						else{
							content=[str+'副将',[[target.name2],'character']];
							game.log(player,'观看了',target,'的副将');
						}
					}
					else if(target.countCards('h')){
						content=[str+'手牌',target.getCards('h')];
						game.log(player,'观看了',target,'的手牌');
					}
					else if(target.isUnseen(0)){
						content=[str+'主将',[[target.name1],'character']];
						game.log(player,'观看了',target,'的主将');
					}
					else{
						content=[str+'副将',[[target.name2],'character']];
						game.log(player,'观看了',target,'的副将');
					}
					player.chooseControl('ok').set('dialog',content);
				},
				mode:['guozhan'],
				ai:{
					order:9.5,
					wuxie:function(){
						return 0;
					},
					result:{
						player:function(player,target){
							if(player.countCards('h')<=player.hp) return 0;
							if(player.storage.zhibi&&player.storage.zhibi.contains(target)) return 0;
							return target.isUnseen()?1:0;
						}
					}
				}
			},
			yiyi:{
				audio:true,
				fullskin:true,
				type:'trick',
				enable:true,
				filterTarget:function(card,player,target){
					if(get.mode()=='guozhan'){
						if(player.identity=='unknown'||player.identity=='ye') return player==target;
						return player.identity==target.identity;
					}
					else if(get.is.versus()){
						return player.side==target.side;
					}
					else{
						return true;
					}
				},
				selectTarget:function(){
					if(get.mode()=='guozhan') return -1;
					return [1,3];
				},
				content:function(){
					target.draw(2);
					target.chooseToDiscard(2,'he',true).ai=get.disvalue;
				},
				ai:{
					wuxie:function(){
						return 0;
					},
					basic:{
						useful:3,
						value:3,
						order:5
					},
					result:{
						target:function(player,target){
							var hs=target.getCards('h');
							if(hs.length<=1){
								if(target==player&&hs[0].name=='yiyi'){
									return 0;
								}
								return 0.3;
							}
							return Math.sqrt(target.countCards('he'));
						},
					},
					tag:{
						loseCard:1,
						discard:1,
						norepeat:1
					}
				},
			},
			wuliu:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				global:'g_wuliu_skill',
				distance:{attackFrom:-1},
				ai:{
					equipValue:function(card,player){
						if(player.identity=='unknown'||player.identity=='ye') return 2.5;
						return 2+game.countPlayer(function(current){
							return current.identity==player.identity;
						})/2;
					},
					basic:{
						equipValue:3
					}
				},
				skills:['wuliu_skill'],
				mode:['guozhan'],
			},
			sanjian:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['sanjian_skill']
			},
			jingfanma:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
				distance:{globalFrom:-1},
			},
		},
		skill:{
			minguangkai_cancel:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:15,
				check:function(event,player){
					return get.effect(event.target,event.card,event.player,player)<0;
				},
				filter:function(event,player){
					if(['huoshaolianying','huogong'].contains(event.card.name)) return true;
					if(event.card.name=='sha') return event.card.nature=='fire';
					return false;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(['huoshaolianying','huogong'].contains(card.name)||(card.name=='sha'&&card.nature=='fire')){
								return 'zeroplayertarget';
							}
						},
					}
				}
			},
			minguangkai_link:{
				trigger:{player:'linkBefore'},
				forced:true,
				priority:20,
				filter:function(event,player){
					return player.isMinor()&&!player.isLinked();
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(target.isMinor()&&['tiesuo','lulitongxin'].contains(card.name)){
								return 'zeroplayertarget';
							}
						},
					}
				}
			},
			dinglanyemingzhu_skill:{
				inherit:'gzzhiheng',
				filter:function(event,player){
					return !player.hasSkill('gzzhiheng');
				},
				selectCard:function(){
					var player=_status.event.player;
					return [1,player.maxHp];
				},
				prompt:'出牌阶段限一次，你可以弃置至多X张牌（X为你的体力上限），然后摸等量的牌'
			},
			g_dinglanyemingzhu_ai:{
				ai:{
					effect:{
						player:function(card,player){
							if(player.hasSkill('jubao')) return;
							if(card.name=='dinglanyemingzhu'&&game.hasPlayer(function(current){
								return current.hasSkill('jubao')&&get.attitude(player,current)<=0;
							})){
								return [0,0,0,0];
							}
						}
					}
				}
			},
			g_feilongduofeng_ai:{
				ai:{
					effect:{
						player:function(card,player){
							if(player.hasSkill('zhangwu')) return;
							if(card.name=='feilongduofeng'&&game.hasPlayer(function(current){
								return current.hasSkill('zhangwu')&&get.attitude(player,current)<=0;
							})){
								return [0,0,0,0];
							}
						}
					}
				}
			},
			g_taipingyaoshu_ai:{
				ai:{
					effect:{
						player:function(card,player){
							if(player.hasSkill('wendao')) return;
							if(card.name=='taipingyaoshu'&&game.hasPlayer(function(current){
								return current.hasSkill('wendao')&&get.attitude(player,current)<=0;
							})){
								return [0,0,0,0];
							}
						}
					}
				}
			},
			feilongduofeng:{
				trigger:{player:'shaBegin'},
				priority:5,
				logTarget:'target',
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				filter:function(event,player){
					return event.target.countCards('he');
				},
				content:function(){
					trigger.target.chooseToDiscard('he',true);
				},
			},
			feilongduofeng2:{
				trigger:{source:'dieAfter'},
				filter:function(event,player){
					if(event.reason&&event.reason.card&&event.reason.card.name=='sha'){
						return event.player.isDead()&&lib.group.contains(player.identity)&&player.isMinor();
					}
					return false;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<_status.characterlist.length;i++){
						var info=lib.character[_status.characterlist[i]];
						if(info[4]&&info[4].contains('jun')) continue;
						if(info[1]==player.identity){
							list.push(_status.characterlist[i]);
						}
					}
					event.identity=event.player.identity;
					if(trigger.player==game.me&&!_status.auto){
						event.dialog=ui.create.dialog('是否选择一名角色重新加入游戏？',[list,'character']);
						event.filterButton=function(){return true};
						event.player=game.me;
						event.custom.replace.confirm=function(){
							if(!ui.selected.buttons.length){
								event.directresult='refuse';
							}
							else{
								event.directresult=ui.selected.buttons[0].link;
							}
							event.dialog.close();
							if(ui.confirm) ui.confirm.close();
							delete event.player;
							game.resume();
						}
						event.switchToAuto=function(){
							event.directresult=list.randomGet();
							event.dialog.close();
							if(ui.confirm) ui.confirm.close();
							delete event.player;
						};
						game.check();
						game.pause();
					}
					else if(trigger.player.isOnline()){
						trigger.player.send(function(player,list){
							if(_status.auto){
								_status.event._result=list.randomGet();
							}
							else{
								var next=game.createEvent('replacePlayer');
								next.source=player;
								next.list=list;
								next.setContent(function(){
									event.dialog=ui.create.dialog('是否选择一名角色重新加入游戏？',[event.list,'character']);
									event.filterButton=function(){return true};
									event.player=event.source;
									event.custom.replace.confirm=function(){
										if(!ui.selected.buttons.length){
											event.result='refuse';
										}
										else{
											event.result=ui.selected.buttons[0].link;
										}
										event.dialog.close();
										if(ui.confirm) ui.confirm.close();
										delete event.player;
										game.resume();
										game.uncheck();
									}
									event.switchToAuto=function(){
										event.result=list.randomGet();
										event.dialog.close();
										if(ui.confirm) ui.confirm.close();
										delete event.player;
										game.uncheck();
									};
									game.check();
									game.pause();
								});
							}
							game.resume();
						},trigger.player,list);
						trigger.player.wait();
						game.pause();
					}
					else{
						event.directresult=list.randomGet();
					}
					event.list=list;
					'step 1'
					game.uncheck();
					if(!event.directresult){
						if(event.resultOL){
							event.directresult=event.resultOL[trigger.player.playerid];
						}
						if(!event.directresult||event.directresult=='ai'){
							event.directresult=event.list.randomGet();
						}
					}
					if(event.directresult=='refuse'){
						game.log(trigger.player,'拒绝重新加入游戏');
						return;
					}
					game.log(trigger.player,'重新加入游戏');
					var name=event.directresult;
					game.log(trigger.player,'将主将替换为','#b'+name);
					_status.characterlist.remove(name);
					game.broadcastAll(function(source,name,identity){
						source.revive(2,false);
						source.identity=identity;
						source._group=identity;
						source.setIdentity();
						if(source==game.me){
							ui.arena.classList.remove('selecting');
						}
					},trigger.player,name,event.identity);
					trigger.player.draw();
					trigger.player.reinit(trigger.player.name1,name,false);
					trigger.player.removeCharacter(1);
					trigger.getParent('damage').untrigger(false,trigger.player);
					game.addVideo('setIdentity',trigger.player,event.identity);
				}
			},
			taipingyaoshu:{
				trigger:{player:'damageBefore'},
				filter:function(event,player){
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					if(event.nature) return true;
				},
				forced:true,
				content:function(){
					trigger.cancel();
				},
				ai:{
					nofire:true,
					nothunder:true,
					effect:{
						target:function(card,player,target,current){
							if(player.hasSkillTag('unequip',false,{
								name:card?card.name:null,
								target:player,
								card:card
							})) return;
							if(get.tag(card,'natureDamage')) return 'zerotarget';
							if(card.name=='tiesuo'){
								return [0,0];
							}
						}
					}
				}
			},
			g_taipingyaoshu:{
				mod:{
					maxHandcard:function(player,num){
						var source=game.findPlayer(function(current){
							return current.hasSkill('taipingyaoshu')&&current.isFriendOf(player);
						});
						if(source){
							if(source.hasSkill('huangjintianbingfu')){
								num+=source.storage.huangjintianbingfu.length;
							}
							return num+game.countPlayer(function(current){
								return current.isFriendOf(source);
							});
						}
					}
				},
			},
			yuxi_skill:{
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				filter:function(event,player){
					return !player.isUnseen();
				},
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.3
				},
				group:'yuxi_skill2'
			},
			yuxi_skill2:{
				trigger:{player:'phaseUseBegin'},
				forced:true,
				filter:function(event,player){
					if(player.isUnseen()) return false;
					return game.hasPlayer(function(current){
						return player.canUse('zhibi',current);
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget('袁首之脑：选择打探明细的目标',function(card,player,target){
						return player.canUse({name:'zhibi'},target);
					},true).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'zhibi'},player,player);
					});
					'step 1'
					if(result.bool){
						player.useCard({name:'zhibi'},result.targets);
					}
				}
			},
			xietianzi:{
				trigger:{player:'phaseAfter'},
				filter:function(event,player){
					return player.hasSkill('xietianzi');
				},
				toself:true,
				forced:true,
				popup:false,
				priority:-50,
				content:function(){
					"step 0"
					player.removeSkill('xietianzi');
					if(player.countCards('he')>0){
						player.chooseToDiscard('he','是否弃置一张牌并获得一个额外回合？').set('ai',function(card){
							return 10-get.value(card);
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool){
						player.insertPhase();
					}
				},
			},
			_chiling1:{
				mode:['guozhan'],
				trigger:{player:'discardAfter'},
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].name=='chiling'&&get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				},
				forced:true,
				popup:false,
				content:function(){
					var cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].name=='chiling'&&get.position(trigger.cards[i])=='d'){
							cards.push(trigger.cards[i]);
						}
					}
					if(cards.length){
						for(var i=0;i<cards.length;i++){
							cards[i].remove();
						}
						_status.chiling=true;
						player.popup('反省大会');
					}
				},
			},
			_chiling2:{
				mode:['guozhan'],
				trigger:{player:'judgeAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(event.result.card.parentNode.id!='discardPile') return false;
					return event.result.card.name=='chiling';
				},
				content:function(){
					_status.chiling=true;
					trigger.result.card.remove();
					player.popup('反省大会');
				}
			},
			_chiling3:{
				mode:['guozhan'],
				trigger:{player:'phaseAfter'},
				forced:true,
				popup:false,
				filter:function(){
					return _status.chiling;
				},
				content:function(){
					'step 0'
					_status.chiling=false;
					var targets=game.filterPlayer(function(target){
						return target.isUnseen();
					});
					targets.sort(lib.sort.seat);
					event.targets=targets;
					'step 1'
					if(event.targets.length){
						var target=event.targets.shift();
						event.current=target;
						var choiceList=['明置一张武将牌，然后摸一张牌','失去1点体力'];
						if(target.countCards('he',{type:'equip'})){
							choiceList.push('弃置一张工具牌');
						}
						target.chooseControl(lib.card.chiling.chooseai).set('prompt','反省大会').set('choiceList',choiceList);
					}
					else{
						event.finish();
					}
					'step 2'
					var target=event.current;
					if(result.control=='选项一'){
						target.chooseControl('主将','副将',function(){
							return Math.floor(Math.random()*2);
						}).set('prompt','选择要明置的武将牌');
					}
					else if(result.control=='选项二'){
						target.loseHp();
						event.goto(1);
					}
					else{
						target.chooseToDiscard('he',{type:'equip'},true);
						event.goto(1);
					}
					'step 3'
					var target=event.current;
					if(result.index==0){
						target.showCharacter(0);
					}
					else{
						target.showCharacter(1);
					}
					target.draw();
					event.goto(1);
				}
			},
			g_diaohulishan:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.card.name=='diaohulishan';
				},
				content:function(){
					player.draw();
				}
			},
			diaohulishan:{
				mod:{
					cardEnabled:function(){
						return false;
					},
					cardSavable:function(){
						return false;
					},
					targetEnabled:function(){
						return false;
					}
				},
				mark:true,
				intro:{
					content:'不计入距离的计算且不能使用牌且不是牌的合法目标'
				},
				group:'undist'
			},
			huxinjing:{
				trigger:{player:'damageBefore'},
				// forced:true,
				filter:function(event,player){
					if(event.source&&event.source.hasSkillTag('unequip',false,{
						name:event.card?event.card.name:null,
						target:player,
						card:event.card
					})) return false;
					return event.num>=player.hp;
				},
				content:function(){
					trigger.cancel();
					var e2=player.getEquip('huxinjing');
					if(e2){
						player.discard(e2);
					}
				}
			},
			huxinjing2:{
				trigger:{player:['damageEnd','damageZero']},
				priority:10,
				forced:true,
				popup:false,
				content:function(){
					var card=player.getEquip('huxinjing');
					if(card){
						player.discard(card);
					}
					player.removeSkill('huxinjing2');
				}
			},
			wuliu_skill:{},
			g_wuliu_skill:{
				mod:{
					attackFrom:function(from,to,distance){
						return distance-game.countPlayer(function(current){
							if(current==from) return false;
							if(current.identity=='unknown'||current.identity=='ye') return false;
							if(current.identity!=from.identity) return false;
							if(current.hasSkill('wuliu_skill')) return true;
						});
					}
				}
			},
			sanjian_skill:{
				audio:true,
				trigger:{source:'damageAfter'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('h')==0) return false;
					if(!event.card) return false;
					if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
						return current!=event.player&&get.distance(event.player,current)<=1;
					});
				},
				content:function(){
					"step 0"
					var damaged=trigger.player;
					player.chooseCardTarget({
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							var damaged=_status.event.damaged;
							return get.distance(damaged,target)<=1&&target!=damaged;
						},
						ai1:function(card){
							return 9-get.value(card);
						},
						ai2:function(target){
							var player=_status.event.player;
							return get.damageEffect(target,player,player);
						},
						prompt:get.prompt('sanjian')
					}).set('damaged',damaged);
					"step 1"
					if(result.bool){
						player.logSkill('sanjian_skill',result.targets);
						player.discard(result.cards);
						result.targets[0].damage();
					}
				}
			},
		},
		translate:{
			minguangkai:'玄武青甲',
			minguangkai_cancel:'玄武青甲',
			minguangkai_link:'玄武青甲',
			minguangkai_info:'锁定技，当你成为【拼写大赛】、【抽查】或火【问】的目标时，取消之；若你是小势力角色，你不会被横置。',
			dinglanyemingzhu:'明智之猪',
			dinglanyemingzhu_bg:'猪',
			dinglanyemingzhu_info:'锁定技，你视为拥有技能“制衡”，若你已经有“制衡”，则改为取消弃置牌数的限制。',
			dinglanyemingzhu_skill:'制衡',
			dinglanyemingzhu_skill_info:'出牌阶段限一次，你可以弃置至多X张牌（X为你的体力上限），然后摸等量的牌',
			feilongduofeng:'雄辩之剑',
			feilongduofeng2:'雄辩之剑',
			feilongduofeng_info:'当你使用【问】指定一名角色为目标后，你可令该角色弃置一张牌。你使用【问】问死一名角色后，若你所属的势力是全场最少的（或之一），你可令该角色的使用者选择是否从未使用的武将牌中选择一张与你势力相同的武将牌重新加入游戏',
			taipingyaoshu:'五星级寝室',
			taipingyaoshu_info:'锁定技，防止你受到的所有属性扣分；全场每有一名与你势力相同的角色存活，所有此势力角色的手牌上限便+1；当你失去工具区里的【五星级寝室】时，你失去1点体力，然后摸两张牌',
			yuxi_skill:'袁首之脑',
			yuxi_skill2:'袁首之脑',
			yuxi:'袁首之脑',
			yuxi_info:'锁定技，若你有明置的武将牌，你的势力视为唯一的大势力；锁定技，摸牌阶段，若你有明置的武将牌，你多摸一张牌；锁定技，出牌阶段开始时，若你有明置的武将牌，你视为使用【打探明细】',
			xietianzi:'深思熟虑',
			xietianzi_info:'出牌阶段，对自己使用。你结束出牌阶段，若如此做，此回合结束时，你可以弃置一张牌，获得一个额外的回合',
			xietianzi_info_guozhan:'出牌阶段，对为大势力角色的你使用。你结束出牌阶段，若如此做，此回合结束时，你可以弃置一张牌，获得一个额外的回合',
			shuiyanqijunx:'晨跑',
			shuiyanqijunx_info:'出牌阶段，对一名工具区里有牌的其他角色使用。目标角色选择一项：1、弃置工具区里的所有牌；2、受到你造成的1点理竞扣分',
			lulitongxin:'誓师大会',
			lulitongxin_info:'出牌阶段，对所有大势力角色或所有小势力角色使用。若目标角色：不处于“结派状态”，其横置；处于“结派状态”，其摸一张牌',
			lianjunshengyan:'香泡晚宴',
			lianjunshengyan_info:'出牌阶段，对你和你选择的除你的势力外的一个势力的所有角色。若目标角色：为你，你摸X张牌（X为该势力的角色数）；不为你，其选择一项：1、回复1点体力；2、摸一张牌，然后重置',
			chiling:'反省大会',
			chiling_info:'出牌阶段，对所有没有势力的角色使用。目标角色选择一项：1、明置一张武将牌，然后摸一张牌；2、弃置一张工具牌；3、失去1点体力。当【反省大会】因判定或弃置而置入弃牌堆时，系统将之移出游戏，然后系统于当前回合结束后视为对所有没有势力的角色使用【反省大会】',
			diaohulishan:'因事征用',
			diaohulishan_info:'出牌阶段，对至多两名其他角色使用。目标角色于此回合结束之前不计入距离的计算且不能使用牌且不是牌的合法目标。此牌结算结束时，你摸一张牌',
			huoshaolianying:'拼写大赛',
			huoshaolianying_bg:'拼',
			huoshaolianying_info_guozhan:'出牌阶段，对你的下家和与其处于同一队列的角色使用，每名角色受到一点文竞扣分',
			huoshaolianying_info:'对离你最近的一名横置角色使用（若无横置角色则改为对距离你最近的所有角色使用），对目标造成一点文竞扣分',
			yuanjiao:'集思广益',
			yuanjiao_info_guozhan:'对一名不同势力的角色使用，对方摸一张牌，然后你摸3张牌',
			yuanjiao_info:'对一名其他角色使用，你与其各摸一张牌',
			yuanjiao_bg:'集',
			zhibi:'打探明细',
			zhibi_info:'出牌阶段对一名其他角色使用，观看其手牌或武将牌',
			yiyi:'学习小组',
			yiyi_info_guozhan:'对与自己势力相同的所有角色使用，摸两张牌然后弃置两张牌',
			yiyi_info_combat:'对所有友方角色使用，摸两张牌然后弃置两张牌',
			yiyi_info:'对与任意三名角色使用，摸两张牌然后弃置两张牌',
			yiyi_bg:'组',
			wuliu:'特长生',
			wuliu_info:'其他与工具者势力相同的角色攻击范围+1',
			sanjian:'一石二鸟',
			sanjian_info:'当你使用问造成扣分后，可以弃置1张手牌对一名距离受扣分角色1以内的其他角色造成1点扣分',
			wuliu_skill:'特长生',
			sanjian_skill:'一石二鸟',
			jingfanma_bg:'前三',
			jingfanma:'长河之梦',
			jingfanma_info:'你的进攻距离+1',
			huxinjing_bg:'逃',
			huxinjing:'临阵脱逃',
			huxinjing_info:'当你受到扣分时，若扣分值大于或等于你的体力值，则你可以将【临阵脱逃】置入弃牌堆，然后防止此扣分。',
		},
		list:[
			['heart',9,'yuanjiao'],
			['club',3,'zhibi'],
			['club',4,'zhibi'],
			['diamond',4,'yiyi'],
			['heart',11,'yiyi'],
			['diamond',6,'wuliu'],
			['diamond',12,'sanjian'],
			['heart',3,'jingfanma'],
			["spade",4,'shunshou'],
			["spade",12,'guohe'],
			["spade",11,'wuxie'],
			['spade',3,'huoshaolianying','fire'],
			['club',11,'huoshaolianying','fire'],
			['heart',12,'huoshaolianying','fire'],
			['club',2,'huxinjing'],
			['heart',2,'diaohulishan'],
			['diamond',10,'diaohulishan'],
			['heart',1,'lianjunshengyan'],
			['club',3,'chiling'],
			['spade',12,'lulitongxin'],
			['club',10,'lulitongxin'],
			['club',12,'shuiyanqijunx'],
			['heart',13,'shuiyanqijunx'],
			['spade',1,'xietianzi'],
			['diamond',1,'xietianzi'],
			['diamond',4,'xietianzi'],
			['club',1,'yuxi'],
		],
	}
});
