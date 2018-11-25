'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'diy',
		connect:true,
		character:{
			liangyue: ['male', 'shen', 4, ['tps_wudi', 'tps_shoucuo', 'tps_duoluo'], ['des:太平吉安人际关系中心，爱好编程，但学习成绩并不稳定']],
			yaohuangshen: ['male', 'wu', 3, [], ['des:机灵鬼一个，身手矫健，爱耍小聪明。']],
			chenhongliang: ['male', 'wu', 6, ['tps_zifu'], ['des:此货人际关系较广，不过许多都叫他欠债还钱。因为其举止有些粗鲁，一度被称为尸比（屁）。不过打架的话最好别找他。']],
			rechenhongliang: ['male', 'wu', 4, ['tps_lumang'], ['des:此货人际关系较广，不过许多都叫他欠债还钱。因为其举止有些粗鲁，一度被称为尸比（屁）。不过打架的话最好别找他。']],
			panhaotian: ['male', 'shu', 3, ['tps_wulai','tps_yinshang'], ['des:潘皓天，太平吉安中不太突出的一个人物，喜欢阅读。']],
			chenzhenbo: ['male', 'shu', 4, ['liangong', 'tps_juehou'], ['des:陈桢博，反低效学习小组创始人之一，是反低效学习小组中最有发言权的人，不仅如此，他还因为日人功夫了得而被太平吉安成员熟知。']],
			yuanyuxuan: ['male', 'shu', 3, ['shensi', 'tiba'], ['des:袁雨轩，是太平吉安总部最强大的刷题者，不仅作业刷的快，还有令人羡慕的好成绩。就是有时候老是被姚皇燊上。']],
			wumengxiang: ['male', 'wu', 8, ['benghuai'],['des:吴孟祥，虽然很胖但打篮球很灵活，现已离开东南。']],
			shiao: ['male', 'shu', 4, ['tps_bufa', 'tps_bangtou'],['des:施敖是最有天分也是最不守纪律的一个，初一初二从不写作业，经常带着他们寝室的人违纪。']],
			huanghaojun: ['male', 'wei', 4, ['tps_siren'],['des:黄浩峻对德意志第三帝国爱得深沉，因经常被葛大爷骂被誉为“死人”。']],
			zhengqihang: ['male', 'shu', 3, ['tps_zilian', 'tps_qianshui'],['des:在寿老师的眼里，郑启航就是个半吊子。不过同学们对他的了解不限于此。']],
			chenkaihao: ['male', 'wei', 3, ['tps_jinze', 'tps_renqing']],
			xujingyi: ['male', 'wei', 3, ['xinjianxiong', 'tps_weigui']],
			xusichen: ['male', 'qun', 3, ['tps_bangtou', 'tps_gaizi']],
			xusichens: ['male', 'qun', 2, ['juejing', 'tps_baofa']],
			maozihao: ['male', 'shu', 3, ['tps_wanji', 'tps_gaile']],
			zhanglingkai: ['male', 'shu', 4, ['tps_huashui', 'tps_tianshi']],
			zhangyihe: ['female', 'shen', 3, ['huashen', 'xinsheng']],
			liuchun: ['female', 'wu', 3, ['tps_jiwei', 'tps_jianguan']],
			wanglina: ['female', 'qun', 3, ['tps_zuobi']],
			xuqingyi: ['female', 'wei', 4, ['tps_zaoli']],
			luxinting: ['female', 'wei', 3, ['tps_qinxue']],
			wangjing: ['female', 'qun', 3, ['tps_jianguan','zhiheng','jiuyuan'], ['zhu']],
			mouminzi: ['female', 'wei', 3, ['tps_tianwen', 'tps_miaobi']],
			laileshang: ['female', 'wei', 3, ['tps_bili']],
			zhangche: ['female', 'wei', 3, ['tps_tianwen', 'tps_wencai']],
			laimeixi: ['female', 'wu', 3, ['beige', 'lijian']],
			wanghongge: ['male', 'shu', 4, ['tps_jinye']],
			renyanguo: ['male', 'shu', 3, ['tps_fanxing', 'tps_gaile', 'tps_jianguan','songwei'], ['zhu']],
			zhangjingchao: ['female', 'wei', 3, ['tps_jianguan', 'tps_guanban', 'tps_yali', 'tps_weiwang'], ['zhu']],
			dingjianxin: ['female', 'qun', 3, ['tps_kuanrong']],
			zhouxiaoyan: ['female', 'qun', 3, ['tps_chaqin']],
			huzhichao: ['male', 'shu', 4, ['tps_chachu','baonue'], ['zhu']],
			zhujianglu: ['female', 'shu', 3, ['tps_laoshou', 'tps_laolian']],
			liujiqing: ['male', 'shu', 3, ['tps_jingxin']],
			zhoulinghang: ['male', 'wu', 3, ['tps_yifen']],
			'tps_xuheng': ['male', 'wu', 3, ['tps_bier']],
			hushiqun: ['male', 'wu', 4, ['tps_yuanhuo', 'jiuchi']],
			wangguiyang: ['male', 'wu', 3, ['guhuo']],
			shouxintao: ['male', 'shen', 4, ['jiang', 'tps_youxiu', 'zhiba'], ['zhu']],
			gechenqi: ['male', 'wu', 4, [/*'tps_baohou', */'reganglie']],
			chenzhanhao: ['male', 'wu', 4, ['tps_shigu', 'tps_zhuangzhuang']],
		},
		characterFilter:{
			
		},
		characterIntro:{
		},
		characterTitle:{
		},
		perfectPair:{
		},
		skill:{
			shensi:{
                audio:"luoshen",
                alter:true,
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                    "step 0"
                    if(event.cards==undefined) event.cards=[];
                    player.judge(function(card){
                        if(get.color(card)=='black') return 1.5;
                        return -1.5;
                    },ui.special);
                    "step 1"
                    if(result.judge>0){
                        event.cards.push(result.card);
                        if(lib.config.autoskilllist.contains('shensi')){
                            player.chooseBool('是否再次发动【神思】？');
                        }
                        else{
                            event._result={bool:true};
                        }
                    }
                    else{
                        for(var i=0;i<event.cards.length;i++){
                            if(get.position(event.cards[i])!='s'){
                                event.cards.splice(i,1);i--;
                            }
                        }
                        player.gain(event.cards,'gain2');
                        player.storage.shensi=event.cards.slice(0);
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        event.goto(0);
                    }
                    else{
                        if(event.cards.length){
                            player.gain(event.cards,'gain2');
                            player.storage.shensi=event.cards.slice(0);
                        }
                    }
                },
                mod:{
                    ignoredHandcard:function (card,player){
                        if(get.is.altered('shensi')&&player.storage.shensi&&player.storage.shensi.contains(card)){
                            return true;
                        }
                    },
                },
                group:"shensi_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                            delete player.storage.shensi;
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            tiba:{
                audio:2,
                enable:["chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                    suit:"club",
                    number:2,
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{color:'black'})) return false;
    },
                prompt:"将一张理科手牌当闪打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('h',{color:'black'})) return false;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0) return 0.6
            },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            liangong:{
                trigger:{
                    player:"shaMiss",
                },
                direct:true,
                filter:function (event,player){
        if(get.mode()=='guozhan') return false;
        return player.canUse('sha',event.target)&&player.hasSha();
    },
                content:function (){
        "step 0"
        if(player.hasSkill('jiu')){
            game.broadcastAll(function(player){
                player.removeSkill('jiu');
            },player);
            event.jiu=true;
        }
        player.chooseToUse(get.prompt('liangong'),{name:'sha'},trigger.target,-1).set('addCount',false).logSkill='liangong';
        "step 1"
        if(result.bool);
        else if(event.jiu){
            player.addSkill('jiu');
        }
    },
            },
            tps_bufa:{
                audio:1,
                filter:function (event,player){
        return player.countCards('he',{suit:'club'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"shandian",
                    suit:"club",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":7,"name":"nanman","cardid":"4295341268","clone":{"name":"nanman","suit":"club","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1242},"original":"j","viewAs":"shandian","_transform":"translateX(0px)","timeout":1229}],
                },
                prompt:"将一张科学牌当午休讲话使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                },
            },
            tps_bangtou:{
                group:["lianhuan3","lianhuan2","lianhuan4"],
            },
            tps_siren:{
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.tps_siren==undefined) player.storage.tps_siren=[];
        player.storage.tps_siren.push(event.card);
        player.syncStorage('tps_siren');
        player.showCards(player.storage.tps_siren,'死人')
        player.markSkill('tps_siren');
        "step 1"
        for(var i=0;i<player.storage.tps_siren.length-1;i++){
            if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.tps_siren[i])) return;
        }
        trigger.cancel();
        if(player.hp<=0){
            player.hp=1;
            player.update();
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            if(player.storage.tps_siren&&player.storage.tps_siren.length) return num-player.hp+player.storage.tps_siren.length;
        },
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    storage[i].discard();
                }
                delete player.storage.tps_siren;
            }
        },
                },
            },
            tps_zilian:{
                audio:2,
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{color:'black'})>0;
    },
                viewAs:{
                    name:"wuxie",
                    suit:"club",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":3,"name":"sha","cardid":"4789576256","clone":{"name":"sha","suit":"club","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":223},"timeout":184,"original":"h"}],
                },
                prompt:"将一张理科手牌当我很优秀使用",
                check:function (card){return 8-get.value(card)},
                threaten:1.2,
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            tps_jinze:{
                forced:true,
                locked:true,
                group:["wushuang1"],
            },
            tps_baofa:{
                group:["longhun1","longhun2","longhun3","longhun4"],
                ai:{
                    skillTagFilter:function (player,tag){
            switch(tag){
                case 'respondSha':{
                    if(player.countCards('he',{suit:'diamond'})<Math.max(1,player.hp)) return false;
                    break;
                }
                case 'respondShan':{
                    if(player.countCards('he',{suit:'club'})<Math.max(1,player.hp)) return false;
                    break;
                }
                case 'save':{
                    if(player.countCards('he',{suit:'heart'})<Math.max(1,player.hp)) return false;
                    break;
                }
            }
        },
                    maixie:true,
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'recover')&&target.hp>=1) return [0,0];
                if(!target.hasFriend()) return;
                if((get.tag(card,'damage')==1||get.tag(card,'loseHp'))&&target.hp>1) return [0,1];
            },
                    },
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },
                },
            },
            tps_gaizi:{
                group:["longdan_sha","longdan_shan","longdan_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                if(!get.zhu(player,'shouyue')) return false;
                return event.skill=='longdan_sha'||event.skill=='longdan_shan';
            },
                        content:function (){
                player.draw();
                player.storage.fanghun2++;
            },
                        sub:true,
                    },
                    sha:{
                        audio:2,
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                if(!player.countCards('h','shan')) return false;
            },
                        prompt:"将一张闪当杀使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','shan')) return false;
                },
                            order:function (){
                    return get.order({name:'sha'})+0.1;
                },
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            result:{
                                target:function (player,target){
                        if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                            if(get.attitude(player,target)>0){
                                return -6;
                            }
                            else{
                                return -3;
                            }
                        }
                        return -1.5;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function (card){
                        if(card.nature=='poison') return;
                        return 1;
                    },
                                natureDamage:function (card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function (card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function (card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                poisonDamage:function (card,nature){
                        if(card.nature=='poison') return 1;
                    },
                            },
                        },
                        sub:true,
                    },
                    shan:{
                        audio:2,
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张杀当闪打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                if(!player.countCards('h','sha')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                    if(!player.countCards('h','sha')) return false;
                },
                            effect:{
                                target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:4,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                        },
                        sub:true,
                    },
                },
            },
            tps_gaile:{
                audio:2,
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('tps_gaile'),'he').set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result-get.value(card)/2;
            }
            else{
                return -result-get.value(card)/2;
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.bool){
            player.respond(result.cards,'highlight');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.logSkill('tps_gaile');
            if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function(card){
                    if(card.clone){
                        card.clone.classList.remove('thrownhighlight');
                    }
                },trigger.player.judging[0]);
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
            }
            trigger.player.judging[0].discard();
            trigger.player.judging[0]=result.cards[0];
            if(!get.owner(result.cards[0],'judge')){
                trigger.position.appendChild(result.cards[0]);
            }
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
            game.delay(2);
        }
    },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            tps_wanji:{
                audio:2,
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{color:'black'})>0;
    },
                viewAs:{
                    name:"wuxie",
                    suit:"spade",
                    number:2,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":2,"name":"bagua","cardid":"3932937265","clone":{"name":"bagua","suit":"spade","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":617},"timeout":593,"original":"h"}],
                },
                prompt:"将一张理科手牌当我很优秀使用",
                check:function (card){return 8-get.value(card)},
                threaten:1.2,
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            tps_zifu:{
                audio:1,
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                position:"he",
                viewAs:{
                    name:"taoyuan",
                    suit:"diamond",
                    number:11,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":11,"name":"shan","cardid":"9840757267","clone":{"name":"shan","suit":"diamond","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":791},"timeout":737,"original":"h"}],
                },
                prompt:"将一张英语牌当反思大会使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                        recover:0.5,
                        multitarget:1,
                    },
                },
            },
            tps_yixue:{
                unique:true,
                forbid:["guozhan"],
                init:function (player){
        player.storage.tps_yixue={
            list:[],
            shown:[],
            owned:{},
            player:player,
        }
    },
                get:function (player,num){
        if(typeof num!='number') num=1;
        var list=[];
        while(num--){
            var name=player.storage.tps_yixue.list.randomRemove();
            var skills=lib.character[name][3].slice(0);
            for(var i=0;i<skills.length;i++){
                var info=lib.skill[skills[i]];
                if(info.unique&&!info.gainable){
                    skills.splice(i--,1);
                }
            }
            player.storage.tps_yixue.owned[name]=skills;
            // player.popup(name);
            game.log(player,'获得了一个易学');
            list.push(name);
        }
        if(player.isUnderControl(true)){
            var cards=[];
            for(var i=0;i<list.length;i++){
                var cardname='tps_yixue_card_'+list[i];
                lib.card[cardname]={
                    fullimage:true,
                    image:'character:'+list[i]
                }
                lib.translate[cardname]=lib.translate[list[i]];
                cards.push(game.createCard(cardname,'',''));
            }
            player.$draw(cards);
        }
    },
                group:["tps_yixue1","tps_yixue2"],
                intro:{
                    content:function (storage,player){
            var str='';
            var slist=storage.owned;
            var list=[];
            for(var i in slist){
                list.push(i);
            }
            if(list.length){
                str+=get.translation(list[0]);
                for(var i=1;i<list.length;i++){
                    str+='、'+get.translation(list[i]);
                }
            }
            var skill=player.additionalSkills.tps_yixue[0];
            if(skill){
                str+='<p>当前技能：'+get.translation(skill);
            }
            return str;
        },
                    mark:function (dialog,content,player){
            var slist=content.owned;
            var list=[];
            for(var i in slist){
                list.push(i);
            }
            if(list.length){
                dialog.addSmall([list,'character']);
            }
            if(!player.isUnderControl(true)){
                for(var i=0;i<dialog.buttons.length;i++){
                    if(!content.shown.contains(dialog.buttons[i].link)){
                        dialog.buttons[i].node.group.remove();
                        dialog.buttons[i].node.hp.remove();
                        dialog.buttons[i].node.intro.remove();
                        dialog.buttons[i].node.name.innerHTML='未<br>知';
                        dialog.buttons[i].node.name.dataset.nature='';
                        dialog.buttons[i].style.background='';
                        dialog.buttons[i]._nointro=true;
                        dialog.buttons[i].classList.add('menubg');
                    }
                }
            }
            if(player.additionalSkills.tps_yixue){
                var skill=player.additionalSkills.tps_yixue[0];
                if(skill){
                    dialog.add('<div><div class="skill">【'+get.translation(skill)+
                    '】</div><div>'+lib.translate[skill+'_info']+'</div></div>');
                }
            }
        },
                },
                mark:true,
            },
            tps_nixue:{
                audio:2,
                unique:true,
                forbid:["guozhan"],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event,player){
        return player.storage.tps_yixue&&player.storage.tps_yixue.list&&
            player.storage.tps_yixue.list.length>0;
    },
                content:function (){
        for(var i=0;i<trigger.num;i++){
            lib.skill.tps_yixue.get(player);
        }
    },
                ai:{
                    "maixie_hp":true,
                },
            },
            tps_jiwei:{
                audio:1,
                enable:"phaseUse",
                usable:1,
                discard:false,
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>0;
    },
                prepare:"throw",
                position:"he",
                filterCard:{
                    suit:"diamond",
                },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(target.hasJudge('lebu')) return true;
        return lib.filter.targetEnabled({name:'lebu'},player,target);
    },
                check:function (card){
        return 7-get.value(card);
    },
                content:function (){
        if(target.hasJudge('lebu')){
            target.discard(target.getJudge('lebu'));
        }
        else{
            var next=player.useCard({name:'lebu'},target,cards);
            next.animate=false;
            next.audio=false;
        }
        player.draw();
    },
                ai:{
                    result:{
                        target:function (player,target){
                if(target.hasJudge('lebu')) return -get.effect(target,{name:'lebu'},player,target);
                return get.effect(target,{name:'lebu'},player,target);
            },
                    },
                    order:9,
                },
            },
            tps_jianguan:{
                audio:1,
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                position:"he",
                viewAs:{
                    name:"lebu",
                    suit:"diamond",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":6,"name":"sha","cardid":"9102639275","clone":{"name":"sha","suit":"diamond","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"fixed":true,"timeout":471},"original":"h","_transform":"translateY(0px)","viewAs":"lebu"}],
                },
                prompt:"将一张英语牌当罚站使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                },
            },
            tps_zuobi:{
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
                zhuSkill:true,
            },
            tps_zaoli:{
                audio:4,
                forbid:["boss"],
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
        return event.source&&event.source.isIn();
    },
                content:function (){
        trigger.source.die();
    },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 0.2;
            return 1.5;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
                    },
                },
            },
            tps_qinxue:{
                audio:2,
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
        trigger.num+=3;
    },
                ai:{
                    threaten:1.3,
                },
            },
            tps_tianwen:{
                mod:{
                    suit:function (card,suit){
            if(suit=='diamond') return 'heart';
        },
                },
            },
            tps_miaobi:{
                audio:2,
                enable:["chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='red';
    },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{color:'red'})) return false;
    },
                prompt:"将一张文科手牌当刷作业打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
            if(!player.countCards('h',{color:'red'})) return false;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0) return 0.6
            },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            tps_bili:{
                audio:2,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target).set('small',true);
        "step 1"
        if(result.bool){
            if(!target.hasSkill('fengyin')){
                target.addTempSkill('fengyin');
            }
            target.addTempSkill('yijue2');
            event.finish();
        }
        else if(target.hp<target.maxHp){
            player.chooseBool('是否让目标回复一点体力？').ai=function(event,player){
                return get.recoverEffect(target,player,player)>0;
            };
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            target.recover();
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;
                if(target.countCards('h')>target.hp+1&&get.recoverEffect(target)>0){
                    return 1;
                }
                if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
                },
            },
            tps_wencai:{
                audio:2,
                trigger:{
                    target:"shaBefore",
                },
                direct:true,
                priority:5,
                filter:function (event,player){
        if(player.countCards('he')==0) return false;
        return game.hasPlayer(function(current){
            return get.distance(player,current,'attack')<=1&&current!=event.player&&
                current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
        });
    },
                content:function (){
        "step 0"
        var next=player.chooseCardTarget({
            position:'he',
            filterCard:lib.filter.cardDiscardable,
            filterTarget:function(card,player,target){
                var trigger=_status.event.getTrigger();
                if(get.distance(player,target,'attack')<=1&&
                    target!=trigger.player&&target!=player){
                    if(player.canUse(trigger.card,target)) return true;
                }
                return false;
            },
            ai1:function(card){
                return get.unuseful(card)+9;
            },
            ai2:function(target){
                if(_status.event.player.countCards('h','shan')){
                    return -get.attitude(_status.event.player,target);
                }
                if(get.attitude(_status.event.player,target)<5){
                    return 6-get.attitude(_status.event.player,target);
                }
                if(_status.event.player.hp==1&&player.countCards('h','shan')==0){
                    return 10-get.attitude(_status.event.player,target);
                }
                if(_status.event.player.hp==2&&player.countCards('h','shan')==0){
                    return 8-get.attitude(_status.event.player,target);
                }
                return -1;
            },
            prompt:get.prompt('tps_wencai')
        });
        "step 1"
        if(result.bool){
            player.discard(result.cards);
            player.logSkill(event.name,result.targets);
            trigger.target=result.targets[0];
            trigger.targets.remove(player);
            trigger.targets.push(result.targets[0]);
        }
        else{
            event.finish();
        }
        "step 2"
        trigger.untrigger();
        trigger.trigger('useCardToBefore');
        trigger.trigger('shaBefore');
        game.delay();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('he')==0) return;
                if(card.name!='sha') return;
                var min=1;
                var friend=get.attitude(player,target)>0;
                var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(player!=players[i]&&
                        get.attitude(target,players[i])<0&&
                        target.canUse(card,players[i])){
                        if(!friend) return 0;
                        if(get.effect(players[i],vcard,player,player)>0){
                            if(!player.canUse(card,players[0])){
                                return [0,0.1];
                            }
                            min=0;
                        }
                    }
                }
                return min;
            },
                    },
                },
            },
            tps_jinye:{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            tps_fanxing:{
                audio:1,
                filter:function (event,player){
        return player.countCards('he',{suit:'club'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"taoyuan",
                },
                prompt:"将一张科学牌当集体补课使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                        recover:0.5,
                        multitarget:1,
                    },
                },
            },
            tps_guanban:{
                forced:true,
                locked:true,
                group:["wushuang1","wushuang2"],
            },
            tps_kuanrong:{
                audio:2,
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                check:function (card){
        return 9-get.value(card)
    },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp) return false;
        return true;
    },
                content:function (){
        target.recover();
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            tps_chaqin:{
                audio:4,
                enable:"chooseToUse",
                filterCard:function (card){
        return true;
    },
                position:"he",
                viewAs:{
                    name:"guohe",
                    suit:"club",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":12,"name":"jiedao","cardid":"1499923260","clone":{"name":"jiedao","suit":"club","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":311},"timeout":288,"original":"h"}],
                },
                viewAsFilter:function (player){
        return true;
    },
                prompt:"将一张任意牌当查寝使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            tps_chachu:{
                audio:1,
                filter:function (event,player){
        return player.countCards('he',{suit:'club'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                position:"he",
                viewAs:{
                    name:"huogong",
                    suit:"club",
                    number:1,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":1,"name":"baiyin","cardid":"7286903264","clone":{"name":"baiyin","suit":"club","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1156},"original":"e","timeout":1113}],
                },
                prompt:"将一张科学牌当抽查使用",
                check:function (card){return 6-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.countCards('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                        player:function (player){
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
                    },
                    tag:{
                        skip:"phaseUse",
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                    },
                    wuxie:function (target,card,player,current,state){
                        if(get.attitude(current,player)>=0&&state>0) return false;
                    },
                },
            },
            tps_laoshou:{
                audio:2,
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                content:function (){
        trigger.num++;
    },
                ai:{
                    threaten:1.3,
                },
            },
            tps_laolian:{
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
            },
            tps_huashui:{
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(target.countCards('h')==0){
                if(card.name=='sha'||card.name=='juedou') return false;
            }
        },
                },
                group:"kongcheng1",
                ai:{
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }
        },
                },
            },
            tps_wudi:{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                unique:true,
                content:function (){
player.maxHp=Infinity;
player.hp=player.maxHp;
player.update(); 
        player.draw(4);
},
            },
            tps_shoucuo:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                audio:2,
                content:function (){
        player.chooseToDiscard('h',true,2);
    },
                ai:{
                },
            },
            tps_duoluo:{
                skillAnimation:true,
                audio:2,
                unique:true,
                priority:-10,
                derivation:"guanxing",
                trigger:{
                    player:"phaseBeginStart",
                },
                forced:true,
                filter:function (event,player){
        if(player.storage.tps_duoluo) return false;
        return player.countCards('h')==0;
    },
                content:function (){
        "step 0"
        player.awakenSkill('tps_duoluo');
        player.die();
    },
            },
            tps_yali:{
                audio:"luanji",
                enable:"phaseUse",
                viewAs:{
                    name:"wanjian",
                },
                filterCard:function (card,player){
        if(!player.storage.reluanji) return true;
        return !player.storage.reluanji.contains(get.suit(card));
    },
                selectCard:2,
                check:function (card){
        var player=_status.event.player;
        var targets=game.filterPlayer(function(current){
            return player.canUse('wanjian',current);
        });
        var num=0;
        for(var i=0;i<targets.length;i++){
            var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
            if(targets[i].hp==1){
                eff*=1.5;
            }
            num+=eff;
        }
        if(!player.needsToDiscard(-1)){
            if(targets.length>=7){
                if(num<2) return 0;
            }
            else if(targets.length>=5){
                if(num<1.5) return 0;
            }
        }
        return 6-get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                group:["reluanji_count","reluanji_reset","reluanji_respond"],
                subSkill:{
                    reset:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        silent:true,
                        filter:function (event,player){
                return player.storage.reluanji?true:false;
            },
                        content:function (){
                delete player.storage.reluanji;
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        filter:function (event){
                return event.skill=='reluanji';
            },
                        content:function (){
                if(!player.storage.reluanji){
                    player.storage.reluanji=[];
                }
                for(var i=0;i<trigger.cards.length;i++){
                    player.storage.reluanji.add(get.suit(trigger.cards[i]));
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    respond:{
                        trigger:{
                            global:"respond",
                        },
                        silent:true,
                        filter:function (event){
                return event.getParent(2).skill=='reluanji'&&event.player.isDamaged();
            },
                        content:function (){
                trigger.player.draw();
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            tps_weiwang:{
                mod:{
                    maxHandcard:function (player,num){
            if(player.hasZhuSkill('xueyi')){
                return num+game.countPlayer(function(current){
                    if(player!=current&&current.group=='wei') return 2;
                });
            }
            return num;
        },
                },
                zhuSkill:true,
            },
            tps_jingxin:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                if(card.name=='lebu'||card.name=='bingliang') return false;
        },
                },
                ai:{
                },
            },
            tps_yifen:{
                audio:4,
                forbid:["boss"],
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
        return event.source&&event.source.isIn();
    },
                content:function (){
        trigger.source.damage(3,"thunder");
    },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 0.2;
            return 1.5;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(!target.hasFriend()) return;
                if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
            },
                    },
                },
            },
            tps_bier:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                if(card.name=='sha') return false;
        },
                },
                ai:{
                },
            },
            tps_weigui:{
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
            tps_yuanhuo:{
                trigger:{
                    player:"useCardToBefore",
                },
                priority:7,
                forced:true,
                filter:function (event,player){
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                audio:true,
                check:function (event,player){
        var att=get.attitude(player,event.target);
        if(event.target.hasSkillTag('nofire')){
            return att>0;
        }
        return att<=0;
    },
                content:function (){
        trigger.card.nature='fire';
        player.addSkill('zhuque_skill2');
        player.storage.zhuque_skill=trigger.card;
    },
            },
			tps_qianshui: {
				mod: {
					targetEnabled: function (card) {
						if ((get.type(card) == 'trick' || get.type(card) == 'delay') &&
							get.color(card) == 'black')
							return false;
					},
				},
			},
			tps_renqing: {
				trigger: {
					player: "damageBegin",
				},
				forced: true,
				audio: true,
				filter: function (event, player) {
					if (event.num <= 1)
						return false;
					if (event.source && event.source.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card
						}))
						return false;
					return true;
				},
				priority: -10,
				content: function () {
					trigger.num = 1;
				},
			},
			tps_baohou: {
				audio: 2,
				unique: true,
				enable: "phaseUse",
				limited: true,
				skillAnimation: "epic",
				animationColor: "thunder",
				filterTarget: function (card, player, target) {
					return target != player;
				},
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				content: function () {
					"step 0"
					player.awakenSkill('luanwu');
					event.current = player.next;
					"step 1"
					event.current.animate('target');
					event.current.chooseToUse('暴吼：使用一张发作业或流失一点体力', {
						name: 'sha'
					}, function (card, player, target) {
						if (player == target)
							return false;
						if (!player.canUse('sha', target))
							return false;
						if (get.distance(player, target) <= 1)
							return true;
						if (game.hasPlayer(function (current) {
								return current != player && get.distance(player, current) < get.distance(player, target);
							})) {
							return false;
						}
						return true;
					});
					"step 2"
					if (result.bool == false)
						event.current.loseHp();
					if (event.current.next != player) {
						event.current = event.current.next;
						game.delay(0.5);
						event.goto(1);
					}
				},
				ai: {
					order: 1,
					result: {
						player: function (player) {
							if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
								if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2)
									return 1;
							}
							var num = 0;
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								var att = get.attitude(player, players[i]);
								if (att > 0)
									att = 1;
								if (att < 0)
									att = -1;
								if (players[i] != player && players[i].hp <= 3) {
									if (players[i].countCards('h') == 0)
										num += att / players[i].hp;
									else if (players[i].countCards('h') == 1)
										num += att / 2 / players[i].hp;
									else if (players[i].countCards('h') == 2)
										num += att / 4 / players[i].hp;
								}
								if (players[i].hp == 1)
									num += att * 1.5;
							}
							if (player.hp == 1) {
								return -num;
							}
							if (player.hp == 2) {
								return -game.players.length / 4 - num;
							}
							return -game.players.length / 3 - num;
						},
					},
				},
				mark: true,
				intro: {
					content: "limited",
				},
				init: function (player) {
					player.storage[i] = false;
				},
			},
			tps_juehou: {
				trigger: {
					player: "shaHit",
				},
				direct: true,
				audio: true,
				filter: function (event) {
					return true;
				},
				content: function () {
					"step 0"
					player.chooseBool('是否发动【绝后】？').set('logSkill', 'tps_juehou');
					"step 1"
					if (result.bool) {
						trigger.target.turnOver();
						trigger.untrigger();
						trigger.unhurt = true;
					}
				},
			},
			tps_youxiu: {
				trigger: {
					target: "shaBefore",
				},
				forced: true,
				priority: 6,
				audio: true,
				filter: function (event, player) {
					return (event.card.name == 'sha' && get.color(event.card) == 'black')
				},
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player) {
							if (card.name == 'sha' && get.color(card) == 'black')
								return 'zerotarget';
						},
					},
				},
			},
			tps_shigu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				check: function (card) {
					return 8 - get.value(card);
				},
				position: "he",
				content: function () {
					player.loseHp();
				},
				ai: {
					order: 8,
					result: {
						player: function (player) {
							if (player.hp <= 2)
								return player.countCards('h') == 0 ? 1 : 0;
							if (player.countCards('h', {
									name: 'sha',
									color: 'red'
								}))
								return 1;
							return player.countCards('h') <= player.hp ? 1 : 0;
						},
					},
					effect: function (card, player, target) {
						if (get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target))
								return [1, 1];
							return 1.2;
						}
						if (get.tag(card, 'loseHp')) {
							if (player.hp <= 1)
								return;
							return [0, 0];
						}
					},
				},
			},
			tps_zhuangzhuang: {
				trigger: {
					player: ["loseHpEnd","damageEnd"],
				},
				forced: true,
				audio: 2,
				content: function () {
					player.draw(3);
					if (_status.currentPhase == player) {
						player.addTempSkill('tps_zhuangzhuang2', {
							player: 'phaseAfter'
						});
					} else {
						game.trySkillAudio('zhaxiang', player);
					}
				},
				ai: {
					maihp: true,
				},
			},
			tps_zhuangzhuang2: {
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
				enable: ["chooseToUse", "chooseToRespond", "chooseToDiscard"],
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
				enable: ["chooseToUse", "chooseToRespond", "chooseToDiscard"],
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
			tps_yinshang: {
				audio: 2,
				audioname: ["boss_qinglong"],
				trigger: {
					player: "respond",
				},
				filter: function (event, player) {
					return event.card.name == 'shan';
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt('tps_yinshang')).ai = function (target) {
						if (target.hasSkill('hongyan'))
							return 0;
						return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
					};
					"step 1"
					if (result.bool) {
						player.logSkill('tps_yinshang', result.targets, 'thunder');
						event.target = result.targets[0];
						event.target.judge(function (card) {
							var suit = get.suit(card);
							if (suit == 'spade')
								return -4;
							if (suit == 'club')
								return -2;
							return 0;
						});
					} else {
						event.finish();
					}
					"step 2"
					if (result.suit == 'club') {
						event.target.damage('thunder');
						player.recover();
					} else if (result.suit == 'spade') {
						event.target.damage(2, 'thunder');
					}
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
			tps_wulai: {
				audio: 2,
				trigger: {
					global: "judge",
				},
				filter: function (event, player) {
					return player.countCards('he', {
						color: 'black'
					}) > 0;
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
						get.translation(trigger.player.judging[0]) + '，' + get.prompt('tps_wulai'), 'he', function (card) {
						return get.color(card) == 'black';
					}).set('ai', function (card) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						var judging = _status.event.judging;
						var result = trigger.judge(card) - trigger.judge(judging);
						var attitude = get.attitude(player, trigger.player);
						if (attitude == 0 || result == 0)
							return 0;
						if (attitude > 0) {
							return result;
						} else {
							return -result;
						}
					}).set('judging', trigger.player.judging[0]);
					"step 1"
					if (result.bool) {
						player.respond(result.cards, 'highlight');
					} else {
						event.finish();
					}
					"step 2"
					if (result.bool) {
						player.logSkill('tps_wulai');
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						if (!get.owner(result.cards[0], 'judge')) {
							trigger.position.appendChild(result.cards[0]);
						}
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai: {
					tag: {
						rejudge: 1,
					},
				},
			},/*
			tps_tianshi:{
    audio:"guanxing",
    alter:true,
    trigger:{
        player:["phaseBegin","phaseEnd"],
    },
    frequent:true,
    filter:function(event,player,name){
        if(name=='phaseEnd'){
            return player.hasSkill('xinguanxing_on');
        }
        return true;
    },
    content:function(){
        'step 0'
        if(get.is.altered('xinguanxing')){
            event.num=game.countPlayer()<4?3:5;
        }
        else{
            event.num=Math.min(5,game.countPlayer());
        }
        event.cards=get.cards(event.num);
        event.chosen=[];
        event.num1=0;
        event.num2=0;
        event.bottom=-1;
        'step 1'
        var js=player.getCards('j');
        var pos;
        var choice=-1;
        var getval=function(card,pos){
            if(js[pos]){
                return (get.judge(js[pos]))(card);
            }
            else if(event.triggername=='phaseEnd'&&get.attitude(player,player.getNext())<=0){
                return 11.5-get.value(card,player);
            }
            else{
                return get.value(card,player);
            }
        };
        event.discard=false;
        var minval=6;
        for(pos=0;pos<event.cards.length;pos++){
            var max=getval(event.cards[pos],pos);
            for(var j=pos+1;j<event.cards.length;j++){
                var current=getval(event.cards[j],pos);
                if(current>max){
                    choice=j;
                    max=current;
                }
            }
            if(event.bottom<0){
                if(!js[pos]){
                    if(max<minval){
                        event.bottom=pos;
                    }
                }
                else if(max<0){
                    event.bottom=pos;
                }
            }
            if(event.bottom>=0&&event.bottom<=pos){
                choice=pos;
                event.discard=true;break;
            }
            if(choice!=-1){
                break;
            }
        }
        player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
            return !_status.event.chosen.contains(button.link);
        }).set('chosen',event.chosen).set('ai',function(button){
            return button.link==_status.event.choice?1:0;
        }).set('choice',event.cards[choice]);
        event.pos=pos;
        'step 2'
        if(result.bool){
            var card=result.links[0];
            var index=event.cards.indexOf(card);
            event.card=card;
            event.chosen.push(card);
            event.cards.remove(event.card);
            var controlai=event.pos||0;
            if(event.discard){
                controlai=event.cards.length+1;
            }
            var buttons=event.cards.slice(0);
            player.chooseControl(function(){
                return _status.event.controlai;
            }).set('controlai',controlai).set('sortcard',buttons).set('tosort',card);
        }
        else{
            event.goto(4);
        }
        'step 3'
        if(typeof result.index=='number'){
            if(result.index>event.cards.length){
                ui.cardPile.appendChild(event.card);
                event.num2++;
            }
            else{
                event.cards.splice(result.index,0,event.card);
            }
            event.num--;
            if(event.num>0){
                event.goto(1);
            }
        }
        'step 4'
        while(event.cards.length){
            ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
            event.num1++;
        }
        var js=player.getCards('j');
        if(js.length==1){
            if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
                player.addTempSkill('guanxing_fail');
            }
        }
        player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
        game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
        if(event.triggername=='phaseBegin'&&get.is.altered('xinguanxing')&&event.num1==0){
            player.addTempSkill('xinguanxing_on');
        }
    },
    subSkill:{
        on:{
            sub:true,
        },
    },
},*/
        },
		translate:{
			liangyue:"梁越",
            yaohuangshen:"姚皇燊",
			rechenhongliang:"界陈泓亮",
            chenhongliang:"陈泓亮",
            panhaotian:"潘皓天",
            chenzhenbo:"陈桢博",
            yuanyuxuan:"袁雨轩",
            wumengxiang:"吴孟祥",
            shiao:"施敖",
            huanghaojun:"黄浩峻",
            zhengqihang:"郑启航",
            chenkaihao:"陈凯豪",
            xujingyi:"徐憬怿",
            xusichen:"徐思辰",
            xusichens:"界徐思辰",
            maozihao:"毛子豪",
            zhanglingkai:"张凌凯",
            zhangyihe:"章易禾",
            liuchun:"刘纯",
            wanglina:"王丽娜",
            xuqingyi:"徐晴宜",
            luxinting:"卢鑫廷",
            wangjing:"王晶",
            mouminzi:"牟旻紫",
            laileshang:"赖乐商",
            zhangche:"张彻",
            laimeixi:"来美羲",
            wanghongge:"老王",
            renyanguo:"任老板",
            zhangjingchao:"超姐",
            dingjianxin:"丁老师",
            zhouxiaoyan:"周老师",
            huzhichao:"超哥",
            zhujianglu:"小天使",
            liujiqing:"柳季青",
            zhoulinghang:"周凌航",
            tps_xuheng:"徐衡",
            hushiqun:"胡识群",
            wangguiyang:"王贵炀",
			shouxintao: "寿鑫涛",
			gechenqi: "葛辰启",
			chenzhanhao: "陈占豪",
			
			tiba:"题霸",
            tiba_info:"你可以将一张理科手牌当[闪]使用或打出",
            shensi:"神思",
            shensi_info:"准备阶段，你可以进行一定判定，若为理科则可以继续判定，直到出现文科。然后你获得所有理科的判定牌。",
            shensi_info_alter:"准备阶段，你可以进行一定判定，若为理科则可以继续判定，直到出现文科。然后你获得所有理科的判定牌。你通过神思获得的牌，不计入当前回合的手牌上限",
            liangong:"连攻",
            liangong_info:"每当你使用的【发作业】被目标角色使用的【刷作业】抵消时，你可以对其使用一张【发作业】（无距离限制）。",
            tps_bufa:"不法",
            tps_bufa_info:"你可以将一张科学花色的手牌当[午休讲话]使用",
            tps_bangtou:"帮头",
            tps_bangtou_info:"你可以将一张科学手牌当【结派】使用，若以此法使用的【结派】仅指定一个目标，你摸一张牌；你可以重做科学牌",
            tps_siren:"死人",
            tps_siren_info:"锁定技，在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的角色牌上，若此牌的点数与你角色牌上已有的牌点数均不同，则你回复至1体力。只要你的角色牌上有牌，你的手牌上限便与这些牌数量相等",
            tps_zilian:"自恋",
            tps_zilian_info:"你可以将你的任意一张♠或♣手牌当【我很优秀】使用。",
            tps_jinze:"尽责",
            tps_jinze_info:"锁定技，你使用的【发作业】需要两张【刷作业】响应",
            tps_baofa:"爆发",
            tps_baofa_info:"你可以将同花色的X张牌按下列规则使用或打出：语文当【补作业】，方块当具年级焰扣分的【杀】，科学当【闪】，数学当【我很优秀】（X为你当前的体力值且至少为1）",
            tps_gaizi:"改字",
            tps_gaizi_info:"你可以将[发作业]当[刷作业]，或[刷作业]当[发作业]使用或打出",
            tps_gaile:"改了",
            tps_gaile_info:"在任意角色的判定牌生效前，你可以打出一张牌代替之",
            tps_wanji:"完击",
            tps_wanji_info:"你可以将你的任意一张♠或♣手牌当【我很优秀】使用。",
            tps_zifu:"自负",
            tps_zifu_info:"你可以将一张英语花色的手牌当[罚站]使用",
            tps_yixue:"易学",
            tps_yixue_info:"所有人都展示角色牌后，你随机获得两张未加入游戏的角色牌，选一张置于你面前并声明该角色的一项技能，你拥有该技能且同时将性别和势力属性变成与该角色相同知道该易学被替换。在你的每个准备阶段和结束后，你可以替换易学牌，你须为新的易学重新声明一项技能（你不可声明限定技、觉醒技或班长技）。",
            tps_nixue:"逆学",
            tps_nixue_info:"你每受到1点扣分，可获得一张新易学牌。",
            tps_jiwei:"纪委",
            tps_jiwei_info:"出牌阶段限一次，你可以选择一项：将一张英语花色牌当做【罚站】使用；或弃置一张英语花色牌并弃置场上的一张【罚站】。选择完成后，你摸一张牌。",
            tps_jianguan:"监管",
            tps_jianguan_info:"你可以将一张英语花色的手牌当[罚站]使用",
            tps_zuobi:"作弊",
            tps_zuobi_info:"你的手牌上限+2。",
            tps_zaoli:"早离",
            tps_zaoli_info:"锁定技，杀死你的角色立即死亡。",
            tps_qinxue:"勤学",
            tps_qinxue_info:"摸牌阶段，你可以额外摸三张牌",
            tps_tianwen:"偏文",
            tps_tianwen_info:"锁定技，你的英语牌均视为语文",
            tps_miaobi:"妙笔",
            tps_miaobi_info:"你可以将一张文科科手牌当[刷作业]使用或打出",
            tps_bili:"比离",
            tps_bili_info:"出牌阶段限一次，你可以与一名其他角色排名，若你赢，则直到回合结束，该角色不能使用或打出手牌且其非锁定技失效，若你没赢，你可令该角色回复一点体力。",
            tps_wencai:"文采",
            tps_wencai_info:"当你成为[发作业]的目标时，可以弃置一张牌将其转移给攻击范围内的一名其他角色，此角色不能是[发作业]的使用者",
            tps_jinye:"敬业",
            tps_jinye_info:"出牌阶段，你使用[发作业]无数量限制",
            tps_fanxing:"反省",
            tps_fanxing_info:"你可以将一张科学花色的手牌当[集体补课]使用",
            tps_guanban:"管班",
            tps_guanban_info:"锁定技，你使用的【发作业】或【核对作业】需要两张【刷作业】或【发作业】响应",
            tps_kuanrong:"宽容",
            tps_kuanrong_info:"出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次",
            tps_chaqin:"查寝",
            tps_chaqin_info:"你可以将一张任意牌当[查寝]使用",
            tps_chachu:"查处",
            tps_chachu_info:"你可以将一张科学花色的手牌当[抽查]使用",
            tps_laoshou:"老手",
            tps_laoshou_info:"摸牌阶段，你可以额外摸一张牌",
            tps_laolian:"老练",
            tps_laolian_info:"你的手牌上限+1。",
            tps_huashui:"滑水",
            tps_huashui_info:"锁定技，当你没有手牌时，不能成为[发作业]或[核对作业]的目标",
            tps_wudi:"无敌",
            tps_wudi_info:"锁定技，游戏开始时，你的血量变为无限，且你多摸4张牌。",
            tps_shoucuo:"受挫",
            tps_shoucuo_info:"锁定技 每当你失去1点体力后，你弃两张牌。",
            tps_duoluo:"堕落",
            tps_duoluo_info:"觉醒技，准备阶段，若你没有手牌，你立即死亡。",
            tps_yali:"压力",
            tps_yali_info:"你可以将两张与你本回合以此法转化的花色均不相同的手牌当【上晚自习】使用，然后当一名已受伤的角色因响应此牌而打出【闪】时，该角色摸一张牌",
            tps_weiwang:"威望",
            tps_weiwang_info:"班长技，场上每有一名其他文科角色存活，你的手牌上限便+2。",
            tps_jingxin:"静心",
            tps_jingxin_info:"锁定技，当你没有手牌时，不能成为[资料漏发]或[罚站]的目标",
            tps_yifen:"遗愤",
            tps_yifen_info:"锁定技，杀死你的角色受到3点校级扣分。",
            tps_bier:"闭耳",
            tps_bier_info:"锁定技，你不能成【发作业】目标",
            tps_weigui:"违规",
            tps_weigui_info:"每当你使用【发作业】指定一名目标角色后，你无视其助刷。",
            tps_yuanhuo:"怨火",
            tps_yuanhuo_info: "你可以将【发作业】当【年级作业】使用或打出。",
			tps_tianshi: "天师",
			tps_tianshi_info: "锁定技，准备阶段，你观看牌堆的X张牌(X为场上存活人数)并且任意移动Y张牌(Y为你当前体力值)",
			tps_qianshui: "潜水",
			tps_qianshui_info: "你不能成为理科动作的目标。",
			tps_renqing: "人情",
			tps_renqing_info: "锁定技，你每次收到扣分时你只收到1点扣分（防止多余的扣分）。",
			tps_baohou: "暴吼",
			tps_baohou_info: "限定技，出牌阶段，可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【发作业】，无法如此做者失去1点体力。",
			tps_juehou: "绝后",
			tps_juehou_info: "每当你使用发作业命中目标后，你可以防止扣分，改为令目标旷课状态。",
			tps_youxiu: "优秀",
			tps_youxiu_info: "锁定技，理科的发作业对你无效",
			tps_shigu: "事故",
			tps_shigu_info: "出牌阶段限一次，你可以弃置一张牌，然后失去1点分数。",
			tps_zhuangzhuang: "壮壮",
			tps_zhuangzhuang2: "壮壮",
			tps_zhuangzhuang_info: "锁定技 每当你失去1点体力后，你摸三张牌。然后若此时是你的出牌阶段，则直到回合结束，你使用文科【发作业】无距离限制且不能被【刷作业】响应，你可以额外使用一张【发作业】。",
			tps_lumang: "鲁莽",
			tps_lumang_info: "锁定技，准备阶段，你进行一次判定，若为文科牌，则直到回合结束，你使用文科【发作业】无距离限制且不能被【刷作业】响应，你可以额外使用一张【发作业】；否则直到下回合开始，你的所有文科手牌视为【刷作业】，所有理科手牌视为【发作业】。",
			tps_lumang1: "鲁莽-攻",
			tps_lumang1_info: "锁定技，直到回合结束，你使用文科【发作业】无距离限制且不能被【刷作业】响应，你可以额外使用一张【发作业】",
			tps_lumang3: "鲁莽-文",
			tps_lumang3_info: "锁定技，直到下回合开始，你的所有文科手牌视为【刷作业】。",
			tps_lumang2: "鲁莽-理",
			tps_lumang2_info: "锁定技，直到下回合开始，你的所有理科手牌视为【发作业】。",
			tps_yinshang: "阴伤",
			tps_yinshang_info: "每当你使用或打出一张【刷作业】，可令任意一名角色进行一次判定，若结果为科学，其受到一点校级扣分，然后你回复一点分数；若结果为数学，其受到两点校级扣分",
			tps_wulai: "无赖",
			tps_wulai_info: "任意一名角色的判定生效前，你可以打出一张理科牌替换之",
			tps_jianlou: "捡漏",
			tps_jianlou_info: "其他角色使用或打出一张【刷作业】时，你可在结算完成后弃置一张牌并获得之。",
		},
	};
});
