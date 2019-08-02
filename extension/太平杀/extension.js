game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"太平杀",content:function (config,pack){
    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            liangyue:["male","shu",4,["tps_wudi"],["zhu","des:太平吉安人际关系中心，爱好编程，但学习成绩并不稳定"]],
            yaohuangshen:["male","wu",3,[],["des:机灵鬼一个，身手矫健，爱耍小聪明。"]],
            chenhongliang:["male","wu",6,["tps_zifu"],["des:此货人际关系较广，不过许多都叫他欠债还钱。因为其举止有些粗鲁，一度被称为尸比（屁）。不过打架的话最好别找他。"]],
            panhaotian:["male","shu",3,[],["des:潘皓天，太平吉安中不太突出的一个人物，喜欢阅读。"]],
            chenzhenbo:["male","shu",4,["liangong"],["des:陈桢博，反低效学习小组创始人之一，是反低效学习小组中最有发言权的人，不仅如此，他还因为日人功夫了得而被太平吉安成员熟知。"]],
            yuanyuxuan:["male","shu",3,["shensi","tiba"],["des:袁雨轩，是太平吉安总部最强大的刷题者，不仅作业刷的快，还有令人羡慕的好成绩。就是有时候老是被姚皇燊上。"]],
            wumengxiang:["male","wu",8,["benghuai"],[]],
            shiao:["male","shu",4,["tps_bufa","tps_bangtou"],[]],
            huanghaojun:["male","wei",4,["tps_siren"],[]],
            zhengqihang:["male","shu",3,["tps_zilian"],[]],
            chenkaihao:["male","wei",3,["tps_jinze"],[]],
            xujingyi:["male","wei",3,["xinjianxiong"],[]],
            xusichen:["male","qun",3,["tps_bangtou","tps_gaizi"],[]],
            xusichens:["male","qun",2,["juejing","tps_baofa"],[]],
            maozihao:["male","shu",3,["tps_wanji","tps_gaile"],[]],
            zhanglingkai:["male","shu",4,["tps_huashui"],[]],
            zhangyihe:["female","shen",3,["huashen","xinsheng"],[]],
            liuchun:["female","wu",3,["tps_jiwei","tps_jianguan"],[]],
            wanglina:["female","qun",3,["tps_zuobi"],[]],
            xuqingyi:["female","wei",4,["tps_zaoli"],[]],
            luxinting:["female","wei",3,["tps_qinxue"],[]],
            wangjing:["female","qun",3,["tps_jianguan"],[]],
            mouminzi:["female","wei",3,["tps_tianwen","tps_miaobi"],[]],
            laileshang:["female","wei",3,["tps_bili"],[]],
            zhangche:["female","wei",3,["tps_tianwen","tps_wencai"],[]],
            laimeixi:["female","wu",3,["beige"],[]],
            wanghongge:["male","shu",4,["tps_jinye"],[]],
            renyanguo:["male","shu",3,["tps_fanxing","tps_gaile","tps_jianguan"],[]],
            zhangjingchao:["female","wei",3,["tps_jianguan","tps_guanban"],["zhu"]],
            dingjianxin:["female","qun",3,["tps_kuanrong"],[]],
            zhouxiaoyan:["female","qun",3,["tps_chaqin"],[]],
            huzhichao:["male","shu",4,["tps_chachu"],["zhu"]],
            zhujianglu:["female","shu",3,["tps_laoshou","tps_laolian"],[]],
        },
        translate:{
            liangyue:"梁越",
            yaohuangshen:"姚皇燊",
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
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
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
                audio:"ext:太平杀:2",
                enable:["chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                    suit:"club",
                    number:13,
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{color:'black'})) return false;
    },
                prompt:"将一张理科手牌当答打出",
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
            "tps_bufa":{
                audio:"ext:太平杀:1",
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
                },
                prompt:"将一张科学牌当就寝讲话使用",
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
            "tps_bangtou":{
                group:["lianhuan3","lianhuan2","lianhuan4"],
            },
            "tps_siren":{
                audio:"ext:太平杀:2",
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
            "tps_zilian":{
                audio:"ext:太平杀:2",
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
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"nanman","cardid":"1604323284","clone":{"name":"nanman","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":984},"timeout":934,"original":"h"}],
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
            "tps_jinze":{
                forced:true,
                locked:true,
                group:["wushuang1"],
            },
            "tps_baofa":{
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
            "tps_gaizi":{
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
                        prompt:"将一张答当问使用或打出",
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
                        prompt:"将一张问当答打出",
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
            "tps_gaile":{
                audio:"ext:太平杀:2",
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
            player.logSkill('reguicai');
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
            "tps_wanji":{
                audio:"ext:太平杀:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAsFilter:function (player){
        return player.countCards('h',{color:'black'})>0;
    },
                viewAs:{
                    name:"wuxie",
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
            "tps_zifu":{
                audio:"ext:太平杀:1",
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
                    number:1,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":1,"name":"zhuge","cardid":"6392380256","clone":{"name":"zhuge","suit":"diamond","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"fixed":true,"timeout":8671},"original":"h"}],
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
            "tps_yixue":{
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
            "tps_nixue":{
                audio:"ext:太平杀:2",
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
            "tps_jiwei":{
                audio:"ext:太平杀:1",
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
            "tps_jianguan":{
                audio:"ext:太平杀:1",
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
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":5,"name":"shan","cardid":"1129080359","clone":{"name":"shan","suit":"diamond","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"cardid":"78149861244","_transitionEnded":true,"timeout":9971},"original":"j","_transform":"translateY(0px)","viewAs":"lebu","timeout":7481}],
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
            "tps_zuobi":{
                mod:{
                    maxHandcard:function (player,num){
            return num+2;
        },
                },
                zhuSkill:true,
            },
            "tps_zaoli":{
                audio:"ext:太平杀:4",
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
            "tps_qinxue":{
                audio:"ext:太平杀:2",
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
            "tps_tianwen":{
                mod:{
                    suit:function (card,suit){
            if(suit=='diamond') return 'heart';
        },
                },
            },
            "tps_miaobi":{
                audio:"ext:太平杀:2",
                enable:["chooseToRespond"],
                filterCard:function (card){
        return get.color(card)=='black';
    },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{color:'red'})) return false;
    },
                prompt:"将一张文科手牌当答打出",
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
            "tps_bili":{
                audio:"ext:太平杀:2",
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
            "tps_wencai":{
                audio:"ext:太平杀:2",
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
            "tps_jinye":{
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
            "tps_fanxing":{
                audio:"ext:太平杀:1",
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
            "tps_guanban":{
                forced:true,
                locked:true,
                group:["wushuang1","wushuang2"],
            },
            "tps_kuanrong":{
                audio:"ext:太平杀:2",
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
            "tps_chaqin":{
                audio:"ext:太平杀:4",
                enable:"chooseToUse",
                filterCard:function (card){
        return true;
    },
                position:"he",
                viewAs:{
                    name:"guohe",
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
            "tps_chachu":{
                audio:"ext:太平杀:1",
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
            "tps_laoshou":{
                audio:"ext:太平杀:2",
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
            "tps_laolian":{
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
            },
            "tps_huashui":{
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
            "tps_wudi":{
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                unique:true,
                content:function (){
player.maxHp=Infinity;
player.hp=player.maxHp;
player.update(); 
},
            },
        },
        translate:{
            tiba:"题霸",
            "tiba_info":"你可以将一张理科手牌当[答]使用或打出",
            shensi:"神思",
            "shensi_info":"准备阶段，你可以进行一定判定，若为理科则可以继续判定，直到出现文科。然后你获得所有理科的判定牌。",
            "shensi_info_alter":"准备阶段，你可以进行一定判定，若为理科则可以继续判定，直到出现文科。然后你获得所有理科的判定牌。你通过神思获得的牌，不计入当前回合的手牌上限",
            liangong:"连攻",
            "liangong_info":"每当你使用的【问】被目标角色使用的【答】抵消时，你可以对其使用一张【问】（无距离限制）。",
            "tps_bufa":"不法",
            "tps_bufa_info":"你可以将一张科学花色的手牌当[就寝讲话]使用",
            "tps_bangtou":"帮头",
            "tps_bangtou_info":"你可以将一张科学手牌当【结派】使用，若以此法使用的【结派】仅指定一个目标，你摸一张牌；你可以重做科学牌",
            "tps_siren":"死人",
            "tps_siren_info":"锁定技，在你退学前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的角色牌上，若此牌的点数与你角色牌上已有的牌点数均不同，则你回复至1体力。只要你的角色牌上有牌，你的手牌上限便与这些牌数量相等",
            "tps_zilian":"自恋",
            "tps_zilian_info":"你可以将你的任意一张数学或科学手牌当【我很优秀】使用。",
            "tps_jinze":"尽责",
            "tps_jinze_info":"锁定技，你使用的【问】需要两张【答】响应",
            "tps_baofa":"爆发",
            "tps_baofa_info":"你可以将同花色的X张牌按下列规则使用或打出：语文当【习】，英语当具年级焰扣分的【问】，科学当【答】，数学当【我很优秀】（X为你当前的体力值且至少为1）",
            "tps_gaizi":"改字",
            "tps_gaizi_info":"你可以将[问]当[答]，或[答]当[问]使用或打出",
            "tps_gaile":"改了",
            "tps_gaile_info":"在任意角色的判定牌生效前，你可以打出一张牌代替之",
            "tps_wanji":"完击",
            "tps_wanji_info":"你可以将你的任意一张数学或科学手牌当【我很优秀】使用。",
            "tps_zifu":"自负",
            "tps_zifu_info":"你可以将一张英语花色的手牌当[罚站]使用",
            "tps_yixue":"易学",
            "tps_yixue_info":"所有人都展示角色牌后，你随机获得两张未加入游戏的角色牌，选一张置于你面前并声明该角色的一项技能，你拥有该技能且同时将性别和势力属性变成与该角色相同知道该易学被替换。在你的每个准备阶段和结束后，你可以替换易学牌，你须为新的易学重新声明一项技能（你不可声明限定技、觉醒技或班长技）。",
            "tps_nixue":"逆学",
            "tps_nixue_info":"你每受到1点扣分，可获得一张新易学牌。",
            "tps_jiwei":"纪委",
            "tps_jiwei_info":"出牌阶段限一次，你可以选择一项：将一张英语花色牌当做【罚站】使用；或弃置一张英语花色牌并弃置场上的一张【罚站】。选择完成后，你摸一张牌。",
            "tps_jianguan":"监管",
            "tps_jianguan_info":"你可以将一张英语花色的手牌当[罚站]使用",
            "tps_zuobi":"作弊",
            "tps_zuobi_info":"你的手牌上限+2。",
            "tps_zaoli":"早离",
            "tps_zaoli_info":"锁定技，问死你的角色立即退学。",
            "tps_qinxue":"勤学",
            "tps_qinxue_info":"摸牌阶段，你可以额外摸三张牌",
            "tps_tianwen":"偏文",
            "tps_tianwen_info":"锁定技，你的英语牌均视为语文",
            "tps_miaobi":"妙笔",
            "tps_miaobi_info":"你可以将一张文科科手牌当[答]使用或打出",
            "tps_bili":"比离",
            "tps_bili_info":"出牌阶段限一次，你可以与一名其他角色排名，若你赢，则直到回合结束，该角色不能使用或打出手牌且其非锁定技失效，若你没赢，你可令该角色回复一点体力。",
            "tps_wencai":"文采",
            "tps_wencai_info":"当你成为[问]的目标时，可以弃置一张牌将其转移给攻击范围内的一名其他角色，此角色不能是[问]的使用者",
            "tps_jinye":"敬业",
            "tps_jinye_info":"出牌阶段，你使用[问]无数量限制",
            "tps_fanxing":"反省",
            "tps_fanxing_info":"你可以将一张科学花色的手牌当[集体补课]使用",
            "tps_guanban":"管班",
            "tps_guanban_info":"锁定技，你使用的【问】或【辩论】需要两张【答】或【问】响应",
            "tps_kuanrong":"宽容",
            "tps_kuanrong_info":"出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次",
            "tps_chaqin":"查寝",
            "tps_chaqin_info":"你可以将一张任意牌当[查寝]使用",
            "tps_chachu":"查处",
            "tps_chachu_info":"你可以将一张科学花色的手牌当[抽查]使用",
            "tps_laoshou":"老手",
            "tps_laoshou_info":"摸牌阶段，你可以额外摸一张牌",
            "tps_laolian":"老练",
            "tps_laolian_info":"你的手牌上限+1。",
            "tps_huashui":"滑水",
            "tps_huashui_info":"锁定技，当你没有手牌时，不能成为[问]或[辩论]的目标",
            "tps_wudi":"无敌",
            "tps_wudi_info":"锁定技，游戏开始时，你的血量变为无限",
        },
    },
    intro:"",
    author:"种花兔",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["zhujianglu.jpg"],"card":[],"skill":[]}}})