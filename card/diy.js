'use strict';
game.import('card',function(lib,game,ui,get,ai,_status){
	return {
		name:'diy',
		connect:true,
		card:{
			xiangpao:{
				fullskin:true,
				type:'basic',
				cardcolor:'red',
				toself:true,
				enable:function(card,player){
					return player.hp<player.maxHp;
				},
				savable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player&&target.hp<target.maxHp;
				},
				modTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				content:function(){
					target.recover(target.maxHp-target.hp);
					target.draw((target.maxHp-target.hp)*2);
				},
				ai:{
					basic:{
						order:function(card,player){
							if(player.hasSkillTag('pretao')) return 5;
							return 2;
						},
						useful:[8,6.5,5,4],
						value:[8,6.5,5,4],
					},
					result:{
						target:function(player,target){
							// if(player==target&&player.hp<=0) return 2;
							var nd=player.needsToDiscard();
							var keep=false;
							if(nd<=0){
								keep=true;
							}
							else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
								keep=true;
							}
							var mode=get.mode();
							if(target.hp>=2&&keep&&target.hasFriend()){
								if(target.hp>2||nd==0) return 0;
								if(target.hp==2){
									if(game.hasPlayer(function(current){
										if(target!=current&&get.attitude(target,current)>=3){
											if(current.hp<=1) return true;
											if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
										}
									})){
										return 0;
									}
								}
							}
							if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
							var att=get.attitude(player,target);
							if(att<3&&att>=0&&player!=target) return 0;
							var tri=_status.event.getTrigger();
							if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
									var num=game.countPlayer(function(current){
										if(current.identity=='fan'){
											return current.countCards('h','tao');
										}
									});
									if(num>1&&player==target) return 2;
									return 0;
								}
							}
							if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
									return 0;
								}
							}
							if(mode=='stone'&&target.isMin()&&
							player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
							tri.source!=target.getEnemy()){
								return 0;
							}
							return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
					}
				}
			},
			huolongguo:{
				fullskin:true,
				type:'basic',
				cardcolor:'red',
				toself:true,
				enable:function(card,player){
					return player.hp<player.maxHp;
				},
				savable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player&&target.hp<target.maxHp;
				},
				modTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				content:function(){
					target.recover(2);
					target.draw(2);
				},
				ai:{
					basic:{
						order:function(card,player){
							if(player.hasSkillTag('pretao')) return 5;
							return 2;
						},
						useful:[8,6.5,5,4],
						value:[8,6.5,5,4],
					},
					result:{
						target:function(player,target){
							// if(player==target&&player.hp<=0) return 2;
							var nd=player.needsToDiscard();
							var keep=false;
							if(nd<=0){
								keep=true;
							}
							else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
								keep=true;
							}
							var mode=get.mode();
							if(target.hp>=2&&keep&&target.hasFriend()){
								if(target.hp>2||nd==0) return 0;
								if(target.hp==2){
									if(game.hasPlayer(function(current){
										if(target!=current&&get.attitude(target,current)>=3){
											if(current.hp<=1) return true;
											if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
										}
									})){
										return 0;
									}
								}
							}
							if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
							var att=get.attitude(player,target);
							if(att<3&&att>=0&&player!=target) return 0;
							var tri=_status.event.getTrigger();
							if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
									var num=game.countPlayer(function(current){
										if(current.identity=='fan'){
											return current.countCards('h','tao');
										}
									});
									if(num>1&&player==target) return 2;
									return 0;
								}
							}
							if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
									return 0;
								}
							}
							if(mode=='stone'&&target.isMin()&&
							player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
							tri.source!=target.getEnemy()){
								return 0;
							}
							return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
					}
				}
			},
			ganzhe:{
				fullskin:true,
				type:'basic',
				cardcolor:'red',
				toself:true,
				enable:function(card,player){
					return player.hp<player.maxHp;
				},
				savable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player&&target.hp<target.maxHp;
				},
				modTarget:function(card,player,target){
					return target.hp<target.maxHp;
				},
				content:function(){
					target.recover(1);
					target.draw(1);
				},
				ai:{
					basic:{
						order:function(card,player){
							if(player.hasSkillTag('pretao')) return 5;
							return 2;
						},
						useful:[8,6.5,5,4],
						value:[8,6.5,5,4],
					},
					result:{
						target:function(player,target){
							// if(player==target&&player.hp<=0) return 2;
							var nd=player.needsToDiscard();
							var keep=false;
							if(nd<=0){
								keep=true;
							}
							else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
								keep=true;
							}
							var mode=get.mode();
							if(target.hp>=2&&keep&&target.hasFriend()){
								if(target.hp>2||nd==0) return 0;
								if(target.hp==2){
									if(game.hasPlayer(function(current){
										if(target!=current&&get.attitude(target,current)>=3){
											if(current.hp<=1) return true;
											if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
										}
									})){
										return 0;
									}
								}
							}
							if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
							var att=get.attitude(player,target);
							if(att<3&&att>=0&&player!=target) return 0;
							var tri=_status.event.getTrigger();
							if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
									var num=game.countPlayer(function(current){
										if(current.identity=='fan'){
											return current.countCards('h','tao');
										}
									});
									if(num>1&&player==target) return 2;
									return 0;
								}
							}
							if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
								if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
									return 0;
								}
							}
							if(mode=='stone'&&target.isMin()&&
							player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
							tri.source!=target.getEnemy()){
								return 0;
							}
							return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
					}
				}
			},
		},
		translate:{
			xiangpao:'香泡',
			xiangpao_info:'出牌阶段，对自己使用，将分数加至分数上上限并摸回复分数*2的牌；任何玩家将退学阶段，对其使用，将分数加至分数上上限并摸回复分数*2的牌',
			huolongguo:'火龙果',
			huolongguo_info:'出牌阶段，对自己使用，回复2点分数并摸4张牌；任何玩家将退学阶段，对其使用，回复2点分数并摸2张牌',
			ganzhe:'甘蔗',
			ganzhe_info:'出牌阶段，对自己使用，回复1点分数并摸2张牌；任何玩家将退学阶段，对其使用，回复1点分数并摸1张牌',
		},
		list:[/*
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
			["diamond",3,"tao"],*/
			
			["heart",13,"xiangpao"],
			["heart",12,"huolongguo"],
			["heart",11,"huolongguo"],
			["heart",10,"ganzhe"],
			["heart",9,"ganzhe"],
			["heart",8,"ganzhe"],
			["spade",1,'fulei','thunder'],
		],
	}
});
