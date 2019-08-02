game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新服杂碎",content:function (config,pack){
    lib.characterTitle.lijue="体力上限：6";
    if(config.caoying){
		lib.arenaReady.push(function(){
            if(lib.character.caoying){
                lib.character.caoying[2]=4;
            }
        })
    }
},precontent:function (){
    
},help:{},config:{"caoying":{"name":"曹婴四血化","init":false}},package:{
    character:{
        character:{
            caoying:["female","wei",3,["xinfu_lingren","xinfu_fujian"],["des:曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。"]],
            "sp_taishici":["male","qun",4,["xinfu_jixu"],[]],
            wangcan:["male","qun",3,["xinfu_sanwen","xinfu_qiai","xinfu_denglou"],["des:王粲（177年－217年2月17日），字仲宣。山阳郡高平县（今山东微山两城镇）人。东汉末年文学家，“建安七子”之一，太尉王龚曾孙、司空王畅之孙。"]],
            "re_jsp_pangtong":["male","wu",3,["xinfu_guolun","xinfu_songsang"],["des:庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。"]],
            lvdai:["male","wu",4,["xinfu_qinguo"],["des:吕岱（161年－256年），字定公，广陵海陵（今江苏如皋）人。三国时期体育重臣、将领。吕岱一生戮力奉公，为孙吴开疆拓土，功勋赫赫。太平元年（256年），吕岱去世，年九十六。"]],
            "re_zhangliang":["male","qun",4,["xinfu_jijun","xinfu_fangtong"],[]],
            lvqian:["male","wei",4,["xinfu_weilu","xinfu_zengdao"],["des:吕虔（生卒年不详），字子恪。任城国（今山东济宁东南）人。汉末至三国曹魏时期将领。 吕虔有勇有谋，曹操在兖州时，任命他为从事，率领家丁驻守湖陆。后升任泰山太守，与夏侯渊共同镇压济南等地的黄巾军。被推举为秀才，加任骑都尉，仍管辖泰山郡。 曹丕继任魏王后，加吕虔为裨将军，封益寿亭侯。再升任徐州刺史，加任威虏将军。任用王祥为别驾，将民政事务都委托于他，为世人所称赞。曹叡继位后，改封万年亭侯。吕虔死后，其子吕翻世袭万年亭侯。"]],
            lijue:["male","qun",4,["xinfu_langxi","xinfu_yisuan"],["des:李傕（jué，一说“傕”读音“què”）（？—198年），字稚然。北地郡泥阳县（今陕西省耀县）人，汉末艺术之一。东汉末年汉献帝时的军阀、权臣，官至大司马、车骑将军、开府、领司隶校尉、假节。<br>李傕本为董卓部将，后被董卓的女婿牛辅派遣至中牟与朱儁交战，大破朱儁，进而至陈留、颍川等地劫掠。初平三年（192年）董卓和牛辅被问后，李傕归无所依，于是采用贾诩之谋，伙同郭汜、张济、樊稠等原董卓部曲将攻向长安。击败吕布，问死王允等人，占领长安，把持朝廷大权。后诸将不和，李傕在会议上问死了樊稠，又与郭汜分别劫持了汉献帝和众臣，相互交战，张济率兵赶来和解，于是二人罢兵，李傕出屯池阳黄白城，郭汜、张济等人随汉献帝东归前往弘农。<br>后来，李傕、郭汜、张济反悔，联合起来追击汉献帝，与杨奉、董承等人几番交战。汉献帝一路逃亡，狼狈不堪，到达安邑，与李傕等人讲和。不久，汉献帝被曹操迎往许都。建安三年（198年），曹操派谒者仆射裴茂召集关西诸将段煨等人征讨李傕，灭其三族。"]],
            zhangji:["male","qun",4,["xinfu_lveming","xinfu_tunjun"],["des:张济（？－196年），武威郡祖厉县（今甘肃靖远东南）人。东汉末年割据军阀之一。 张济原为董卓部将，董卓被诛问后，张济与李傕一同率军攻破长安，任中郎将。不久，升任镇东将军，封平阳侯，出屯弘农。献帝东迁时，张济升任骠骑将军，率军护卫献帝，后来因与董承等人有矛盾，便与李傕、郭汜一同追赶献帝。 建安元年（196年），张济因军队缺粮而进攻穰城，中流矢而死。死后，部队由侄儿张绣接管。"]],
            fanchou:["male","qun",4,["xinfu_xingluan"],["des:樊稠（？—195年），凉州金城（治今甘肃永靖西北）人。东汉末年军阀、将领。官至右将军，封万年侯。 原为董卓部将，董卓死后，伙同李傕、郭汜、张济等人合众十余万反扑长安，败吕布、问王允，把持朝政。后马腾因与李傕有隙，于是联合韩遂举兵进攻，李傕派樊稠、郭汜等与其交战，大败马腾、韩遂于长平观下。樊稠追至陈仓，与韩遂友好罢兵，却遭李傕猜疑。兴平二年（195年），李傕让外甥骑都尉胡封在会议上将樊稠刺死（一说趁醉用杖击问）。"]],
            guosi:["male","qun",4,["xinfu_tanbei","xinfu_sidao"],["des:郭汜（？－197年），又名郭多，凉州张掖（今甘肃张掖西北）人，东汉末年将领、军阀，献帝时权臣。原为董卓部下。董卓被问后，凉州众将归无所依，于是采用贾诩之谋，联兵将攻向长安，击败吕布，问死王允等人，占领长安，把持朝廷大权。几年后，郭汜被部将伍习问死。"]],
            xurong:["male","qun",4,["xinfu_xionghuo","xinfu_shajue"],["des:徐荣（？－192年），玄菟人（一说为辽东襄平人，《公孙度传》中说公孙度本辽东襄平人，迁居玄菟，为同郡徐荣所举，任辽东太守。同郡当是同“玄菟”郡），东汉末年将领。本为中郎将，曾向董卓推举同郡出身的公孙度出任辽东太守。于汴水之战中击败曹操的独立追击军，以及在梁东之战中击败孙坚的部队。在董卓死后，受司徒王允的命令与李傕、郭汜交战，因部将胡珍投降，寡不敌众，于新丰之战被击败，战死在乱军之中。"]],
            majun:["male","wei",3,["xinfu_jingxie1"],["des:##由于此武将开发尚未完成，暂不开放使用。##<br>马钧，字德衡，扶风（今陕西扶风）人，生活在汉朝末期，是中国古代科技史上最负盛名的机械发明家之一。马钧年幼时家境贫寒，自己又有口吃的毛病，所以不擅言谈却精于巧思，后来在文科担任给事中的官职。马钧最突出的表现有还原指南车；改进当时操作笨重的织绫机；发明一种由低处向高地引水的龙骨水车；制作出一种轮转式发石机，能连续发射石块，远至数百步；把木制原动轮装于木偶下面，叫做“水转百戏”。此后，马钧还改制了诸葛连弩，对科学发展和技术进步做出了贡献。","forbidai","unseen"]],
            panjun:["male","wu",3,["xinfu_guanwei","xinfu_gongqing"],["des:潘濬（一作潘浚）（？－239年），字承明。武陵郡汉寿县（今湖南汉寿）人。三国时期体育重臣，蜀汉大司马蒋琬的表弟。 潘濬为人聪察，对问有机理，拜大儒宋忠为师，得到“建安七子”之一的王粲赏识。不到三十，即被荆州牧刘表任命为江夏从事，因按问贪污的沙羡长而闻名。建安十六年（211年），被刘备任命为荆州治中从事，与守臣关羽不睦。建安二十四年（219年），孙权得荆州，拜潘濬为辅军中郎将。又迁奋威将军，封常迁亭侯。孙权称帝后，拜少府，进封刘阳侯，又改太常。黄龙三年（231年），授假节，与吕岱率军五万平五溪蛮夷叛乱，经三年而斩获数万，使得一方宁静。潘濬为人刚正不阿，在吕壹弄权时，屡请孙权将其诛问。甚至想亲手击问吕壹，使吕壹对他非常畏惧。 赤乌二年（239年），潘濬去世。"]],
            duji:["male","wei",3,["xinfu_andong","xinfu_yingshi"],["des:杜畿 （jī）（163年—224年），字伯侯，京兆杜陵（今陕西西安东南）人。东汉末及三国时曹魏官吏及将领。西汉御史大夫杜延年的后代。历官郡功曹、守郑县令，善于断案。荀彧将他举荐给曹操，曹操任命他为司空司直，调任护羌校尉，使持节领西平太守。 曹丕受禅登基后，封杜畿为丰乐亭侯。官至尚书仆射。后在陶河试航时遇上大风沉没，杜畿淹死，死时六十二岁，曹丕为之涕泣，追赠其为太仆，谥戴侯。"]],
            zhoufang:["male","wu",3,["xinfu_duanfa","xinfu_youdi"],["des:周鲂（生卒年不详），字子鱼。吴郡阳羡县（今江苏宜兴）人。三国时期体育将领。周鲂年少时好学，被举为孝廉。历任宁国县长、怀安县长、钱塘侯相，一月之内，便斩问作乱的彭式及其党羽，因而升任丹阳西部都尉。彭绮率数万人反叛时，周鲂被任命为鄱阳太守，与胡综共同将其生擒，因功加职昭义校尉。后诈降曹休，诱其率军接应，使曹休在石亭之战中一败涂地，战后因功被加职为裨将军，封关内侯。贼帅董嗣凭险骚扰豫章等郡，周鲂派间谍将其诱问，不费兵卒即安定数郡。周鲂在鄱阳赏罚分明、恩威并施，于任职十三年后去世。"]],
            yanjun:["male","wu",3,["xinfu_guanchao","xinfu_xunxian"],["des:严畯（生卒年不详），字曼才，彭城（治今江苏徐州）人，三国时期孙吴官员、学者。性情忠厚，待人以诚。少好学，精通《诗》、《书》、《三礼》，又好《说文》。避乱江东，与诸葛瑾、步骘是好朋友，被张昭推荐给孙权作骑都尉、从事中郎。建安二十二年（217年），横江将军鲁肃去世，孙权打算让严畯接替其位。严畯很有自知之明，知道自己没有能力对抗在荆州的关羽和北面的曹魏，便坚决不接受此任命。后来担任尚书令。严畯享年七十八岁。著有《孝经传》、《潮水论》。"]],
            liuyao:["male","qun",4,["xinfu_kannan"],["des:刘繇（yáo，一读yóu）（156年－197年），字正礼。东莱牟平（今山东牟平）人。东汉末年宗室、大臣，汉末艺术之一，齐悼惠王刘肥之后，太尉刘宠之侄。<br>刘繇最初被推举为孝廉，授郎中。任下邑县长时，因拒郡守请托而弃官。后被征辟为司空掾属，除授侍御史，因战乱而不到任，避居淮浦。兴平元年（194年），被任命为扬州刺史。他先后与袁术、孙策交战，一度被朝廷加授为扬州牧、振武将军，但最终还是败归丹徒。此后，刘繇又击破反叛的笮融，旋即病逝，年四十二。"]],
            liuyan:["male","qun",3,["xinfu_tushe","xinfu_limu"],["des:刘焉（？－194年），字君郎（《华阳国志》又作君朗）。江夏郡竟陵县（今湖北省天门市）人。东汉末年宗室、军阀，汉末艺术之一，西汉鲁恭王刘余之后。<br>刘焉初以汉朝宗室身份，拜为中郎，历任雒阳令、冀州刺史、南阳太守、宗正、太常等官。因益州刺史郄俭在益州大肆聚敛，贪婪成风，加上当时天下大乱。刘焉欲取得一安身立命之所，割据一方，于是向朝廷求为益州牧，封阳城侯，前往益州整饬吏治。郄俭为黄巾军所问，刘焉进入益州，派张鲁盘踞汉中，张鲁截断交通，斩问汉使，从此益州与中央道路不通。刘焉进一步对内打击地方豪强，巩固自身势力，益州因而处于半独立的状态。兴平元年（194年），刘焉因背疮迸发而逝世，其子刘璋继领益州牧。"]],
        },
        translate:{
            caoying:"曹婴",
            "sp_taishici":"太史慈",
            wangcan:"王粲",
            "re_jsp_pangtong":"庞统",
            lvdai:"吕岱",
            "re_zhangliang":"张梁",
            lvqian:"吕虔",
            lijue:"李傕",
            zhangji:"张济",
            fanchou:"樊稠",
            guosi:"郭汜",
            xurong:"徐荣",
            majun:"马钧",
            panjun:"潘濬",
            duji:"杜畿",
            zhoufang:"周鲂",
            yanjun:"严畯",
            liuyao:"刘繇",
            liuyan:"刘焉",
        },
    },
    card:{
        card:{
            "rewrite_bagua":{
                cardimage:"bagua",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:7.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["rw_bagua_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_baiyin":{
                fullskin:true,
                cardimage:"baiyin",
                type:"equip",
                subtype:"equip2",
                onLose:function (){
        player.recover();
        player.draw(2);
    },
                filterLose:function (card,player){
        return player.hp<player.maxHp;
    },
                skills:["rw_baiyin_skill"],
                tag:{
                    recover:1,
                },
                ai:{
                    order:9.5,
                    equipValue:function (card,player){
            if(player.hp==player.maxHp) return 5;
            if(player.countCards('h','baiyin')) return 6;
            return 0;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_lanyinjia":{
                cardimage:"lanyinjia",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_lanyinjia","lanyinjia2"],
                ai:{
                    equipValue:6,
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:1,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_minguangkai":{
                cardimage:"suolianjia",
                mode:["guozhan"],
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_minguangkai_cancel","rw_minguangkai_link"],
                ai:{
                    basic:{
                        equipValue:6,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_renwang":{
                cardimage:"renwang",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["rw_renwang_skill"],
                ai:{
                    basic:{
                        equipValue:7.5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_tengjia":{
                cardimage:"tengjia",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                cardnature:"fire",
                ai:{
                    equipValue:function (card,player){
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
                        equipValue:3,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["rw_tengjia1","rw_tengjia2","rw_tengjia3"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_zhuge":{
                cardimage:"zhuge",
                distance:{
                    attackFrom:-2,
                },
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                ai:{
                    equipValue:function (card,player){
            if(!game.hasPlayer(function(current){
                return player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)<0;
            })){
                return 1;
            }
            if(player.hasSha()&&_status.currentPhase==player){
                if(player.getEquip('zhuge')||player.getCardUsable('sha')==0){
                    return 10;
                }
            }
            var num=player.countCards('h','sha');
            if(num>1) return 6+num;
            return 3+num;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    tag:{
                        valueswap:1,
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                skills:["zhuge_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_huxinjing":{
                cardimage:"huxinjing",
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["huxinjing"],
                ai:{
                    basic:{
                        equipValue:6,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            "rewrite_taipingyaoshu":{
                cardimage:"taipingyaoshu",
                mode:["guozhan"],
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                nomod:true,
                nopower:true,
                unique:true,
                global:["g_taipingyaoshu","g_taipingyaoshu_ai"],
                skills:["taipingyaoshu"],
                ai:{
                    equipValue:function (card,player){
            if(player.hasSkill('wendao')) return 9;
            if(game.hasPlayer(function(current){
                return current.hasSkill('wendao')&&get.attitude(player,current)<=0;
            })){
                return 1;
            }
            return 6;
        },
                    basic:{
                        equipValue:6,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function (player,target){
                return get.equipResult(player,target,name);
            },
                    },
                },
                onLose:function (){
        player.draw(2);
    },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
        },
        translate:{
            "rewrite_bagua":"先天硬币",
            "rewrite_bagua_info":"每当你需要使用或打出一张【答】时，你可以进行一次判定，若判定结果不为数学，视为你使用或打出了一张【答】。",
            "rewrite_baiyin":"玉照狮子盔",
            "rewrite_baiyin_info":"锁定技，你每次受到扣分时，最多承受1点扣分（防止多余的扣分）；当你失去工具区里的【玉照狮子盔】时，你回复1点体力并摸两张牌。",
            "rewrite_lanyinjia":"精银甲",
            "rewrite_lanyinjia_info":"你可以将一张手牌当做【答】使用或打出。锁定技，【精银甲】不会无效。",
            "rewrite_minguangkai":"耀光铠",
            "rewrite_minguangkai_info":"锁定技，当你成为【拼写大赛】、【抽查】或火【问】的目标时，或即将被横置时，取消之。",
            "rewrite_renwang":"仁王金刚盾",
            "rewrite_renwang_info":"有花色且不为英语的问对你无效。",
            "rewrite_tengjia":"桐油百炼甲",
            "rewrite_tengjia_info":"锁定技，【多想多问】、【阶段测验】和普通【问】对你无效。你每次受到文竞扣分时，该扣分+1。你不会被横置。",
            "rewrite_zhuge":"元戎精械弩",
            "rewrite_zhuge_info":"你于出牌阶段内使用【问】无次数限制。",
            "rewrite_huxinjing":"大号护心镜",
            "rewrite_huxinjing_info":"当你受到扣分时，若扣分值大于或等于你的体力值，则你可以将【大号护心镜】置入弃牌堆，然后防止此扣分。当你将【大号护心镜】连横时，你多摸一张牌。",
            "rewrite_taipingyaoshu":"太平全术",
            "rewrite_taipingyaoshu_info":"锁定技，防止你受到的所有属性扣分；全场每有一名与你势力相同的角色存活，所有此势力角色的手牌上限便+1；当你失去工具区里的【太平全术】时，你摸两张牌。",
        },
        list:[],
    },
    skill:{
        skill:{
            "xinfu_lingren":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(!['basic','trick'].contains(get.type(event.card))) return false;
        if(get.tag(event.card,'damage')) return true;
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_lingren'),function(card,player,target){
            return trigger.targets.contains(target);
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_lingren',result.targets);
            event.targett=result.targets[0];
            player.line('water',event.targett);
            event.choice={
                basic:false,
                trick:false,
                equip:false,
            }
            player.chooseBool('是否押基本牌？').ai=function(event,player){
                if(event.targett.countCards('h')) return true;
                return false;
            };
        }
        else{
            player.storage.counttrigger.xinfu_lingren--;
            event.finish();
        }
        'step 2'
        if(result.bool){
            event.choice.basic=true;
        }
        player.chooseBool('是否押动作牌？').ai=function(event,player){
            var num=event.targett.countCards('h');
            return Math.random()<num>2?0:0.5;
        };
        'step 3'
        if(result.bool){
            event.choice.trick=true;
        }
        player.chooseBool('是否押工具牌？').ai=function(event,player){
            var num=event.targett.countCards('h');
            return Math.random()<num>3?0:0.3;
        };
        'step 4'
        if(result.bool){
            event.choice.equip=true;
        }
        game.delay();
        var reality={
            basic:false,
            trick:false,
            equip:false,
        }
        var he=event.targett.getCards('h');
        for(var i=0;i<he.length;i++){
            reality[get.type(he[i],'trick')]=true;
        }
        event.num=0;
        var tl=['basic','trick','delay'];
        for(var i=0;i<tl.length;i++){
            if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
        }
        'step 5'
        player.popup('猜对'+get.cnNumber(event.num)+'项');
        game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
        if(event.num>0){
            player.addTempSkill('lingren_adddamage','useCardAfter');
            player.storage.lingren={
                name:trigger.card.name,
                player:event.targett,
            }
        }
        if(event.num>1) player.draw(2);
        if(event.num>2){
            player.addTempSkill('lingren_jianxiong',{player:'phaseBefore'});
            player.addTempSkill('lingren_xingshang',{player:'phaseBefore'});
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            "lingren_adddamage":{
                onremove:function (player){
        delete player.storage.lingren;
    },
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        var info=player.storage.lingren;
        if(event.player!=info.player) return false;
        return event.card&&event.card.name==info.name&&event.notLink();
    },
                silent:true,
                popup:false,
                forced:true,
                content:function (){
        trigger.num++;
    },
            },
            "lingren_jianxiong":{
                audio:"ext:新服杂碎:1",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
        "step 0"
        if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
            player.gain(trigger.cards,"gain2");
        }
        player.draw();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&player!=target) return [1,0.6];
            },
                    },
                },
            },
            "lingren_xingshang":{
                audio:"ext:新服杂碎:1",
                unique:true,
                gainable:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,
                filter:function (event){
        return event.playerCards&&event.playerCards.length>0
    },
                check:function (event){
        for(var i=0;i<event.playerCards.length;i++){
            if(event.playerCards[i].name=='du') return false;
        }
        return true;
    },
                content:function (){
        "step 0"
        player.gain(trigger.playerCards);
        player.$draw(trigger.playerCards);
        game.delay();
        "step 1"
        for(var i=0;i<trigger.playerCards.length;i++){
            trigger.cards.remove(trigger.playerCards[i]);
        }
        trigger.playerCards.length=0;
    },
            },
            "xinfu_fujian":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return !game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')==0;
        });
    },
                forced:true,
                content:function (){
        event.num=0;
        var list=game.filterPlayer(function(target){
            if(target.isMinHandcard()&&target!=player) event.num=target.countCards('h');
            return player!=target;
        });
        if(event.num<1){
            event.finish();
        }
        else{
            var target=list.randomGet();
            var cards=target.getCards('h').randomGets(event.num);
            player.line(target);
            var content=[get.translation(target)+'的部分手牌',cards];
            game.log(player,'观看了',target,'的部分手牌');
            player.chooseControl('ok').set('dialog',content);
        }
    },
            },
            "xinfu_guolun":{
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
                content:function (){
        'step 0'
        event.cardt=target.getCards('h').randomGet();
        target.showCards(event.cardt);
        player.chooseCard(true).ai=function(card){
            var numt=event.cardt.number;
            if(card.number>numt) return 20-get.value(card);
            else if(card.number==numt) return 15-get.value(card);
            return 12-get.value(card);
        };
        'step 1'
        player.showCards(result.cards);
        event.cardp=result.cards;
        'step 2'
        var nump=event.cardp[0].number;
        var numt=event.cardt.number;
        if(nump>numt){
            player.draw();
        }
        else if(nump<numt){
            target.draw();
        }
        player.give(event.cardp,target);
        target.give(event.cardt,player);
    },
                ai:{
                    order:8,
                    result:{
                        player:function (player,target){
                if(get.attitude(player,target)>0) return 1.5;
                return 0.5;
            },
                    },
                },
            },
            "xinfu_zhanji":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"gainAfter",
                },
                forced:true,
                filter:function (event,player){
        if(_status.currentPhase!=player||event.parent.parent.name=='phaseDraw') return false;
        return event.getParent(2).name!='xinfu_zhanji';
    },
                content:function (){
        player.draw();
    },
            },
            "xinfu_songsang":{
                limited:true,
                unique:true,
                init:function (player){
        player.storage.xinfu_songsang=false;
    },
                skillAnimation:true,
                audio:"ext:新服杂碎:2",
                derivation:"xinfu_zhanji",
                trigger:{
                    global:"dieAfter",
                },
                filter:function (event,player){
        if(player.storage.xinfu_songsang==true) return false;
        return true;
    },
                content:function (){
        player.awakenSkill('xinfu_songsang');
        if(player.isDamaged()){
            player.recover();
        }
        else player.gainMaxHp();
        player.addSkill('xinfu_zhanji');
        player.storage.xinfu_songsang=true;
    },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "xinfu_jixu":{
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(ui.selected.targets.length){
            return target.hp==ui.selected.targets[0].hp;
        }
        return true;
    },
                selectTarget:[1,Infinity],
                multitarget:true,
                multiline:true,
                content:function (){
        "step 0"
        targets.sort(lib.sort.seat);
        "step 1"
        if(!event.num) event.num=0;
        if(!event.caicuolist) event.caicuolist=[];
        targets[event.num].chooseBool("是否押问？").ai=function(event,player){
            var evt=_status.event.getParent();
            if(get.attitude(targets[event.num],evt.player)>0) return evt.player.hasSha()?false:true;
            return Math.random()<0.5;
        };
        "step 2"
        if(result.bool){
            targets[event.num].chat('有问');
            game.log(targets[event.num],'认为',player,'#g有问');
            if(!player.hasSha()) event.caicuolist.add(targets[event.num]);
        }else{
            targets[event.num].chat('没问');
            game.log(targets[event.num],'认为',player,'#y没有问');
            if(player.hasSha()) event.caicuolist.add(targets[event.num]);
        }
        event.num++;
        game.delay();
        if(event.num<targets.length) event.goto(1);
        "step 3"
        player.popup(player.hasSha()?"有问":"没问");
        game.log(player,player.hasSha()?"有问":"没问");
        if(event.caicuolist.length==0){
            var evt=_status.event.getParent('phaseUse');
            if(evt&&evt.name=='phaseUse'){
                evt.skipped=true;
                event.finish();
            }
        }
        else{
            player.draw(event.caicuolist.length)
            if(player.hasSha()){
                player.addTempSkill('jixu_sha');
                player.storage.jixu_sha=event.caicuolist;
                event.finish();
            }
            else event.num=0;
        }
        "step 4"
        if(event.num<event.caicuolist.length){
            var target=event.caicuolist[event.num];
            player.discardPlayerCard(true,'he',target);
            event.num++;
            event.redo();
        }
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.1;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSha()){
                    return get.effect(target,{name:'sha'},player,target);
                }else{
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
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
                }
            },
                    },
                    expose:0.4,
                    threaten:3,
                },
            },
            "jixu_sha":{
                audio:"xinfu_jixu",
                trigger:{
                    player:"useCard",
                },
                onremove:function (player){
        delete player.storage.jixu_sha;
    },
                filter:function (event,player){
        if(event.card.name=='sha'){
            return game.hasPlayer(function(current){
                return current!=player&&player.storage.jixu_sha.contains(current)&&!event.targets.contains(current);
            });
        }
        return false;
    },
                forced:true,
                silent:true,
                popup:false,
                content:function (){
        player.logSkill("xinfu_jixu");
        for(var i=0;i<player.storage.jixu_sha.length;i++){
            if(!trigger.targets.contains(player.storage.jixu_sha[i])&&player.canUse('sha',player.storage.jixu_sha[i],false)){
                player.line(player.storage.jixu_sha[i]);
                trigger.targets.push(player.storage.jixu_sha[i]);
            }
        }
    },
            },
            "xinfu_sanwen":{
                audio:"ext:新服杂碎:2",
                usable:1,
                trigger:{
                    player:"gainAfter",
                },
                filter:function (event,player){
        var namelist=[];
        var namedlist=[];
        for(var i=0;i<event.cards.length;i++){
            if(!namelist.contains(event.cards[i].name)) namelist.push(event.cards[i].name);
        }
        var hs=player.getCards('h');
        for(var j=0;j<hs.length;j++){
            if(namelist.contains(hs[j].name)&&!event.cards.contains(hs[j])) return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        var namelist=[];
        var namedlist=[];
        var nameddlist=[];
        var namedddlist=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(!namelist.contains(trigger.cards[i].name)) namelist.push(trigger.cards[i].name);
        }
        var hs=player.getCards('h');
        for(var j=0;j<hs.length;j++){
            if(namelist.contains(hs[j].name)&&!trigger.cards.contains(hs[j])){
                namedlist.push(hs[j]);
                if(!namedddlist.contains(hs[j].name)) namedddlist.push(hs[j].name);
            }
        }
        for(var k=0;k<trigger.cards.length;k++){
            if(namedddlist.contains(trigger.cards[k].name)) nameddlist.push(trigger.cards[k]);
        }
        var showlist=namedlist.concat(nameddlist);
        player.showCards(showlist);
        player.discard(nameddlist);
        player.draw(2*nameddlist.length);
    },
            },
            "xinfu_qiai":{
                unique:true,
                init:function (player){
        player.storage.xinfu_qiai=false;
    },
                filter:function (event,player){
        return player.storage.xinfu_qiai==false;
    },
                skillAnimation:true,
                trigger:{
                    player:"dying",
                },
                limited:true,
                marktext:"哀",
                mark:true,
                intro:{
                    content:"limited",
                },
                priority:6,
                audio:"ext:新服杂碎:2",
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_qiai');
        player.storage.xinfu_qiai=true;
        event.current=player.next;
        "step 1"
        event.current.chooseCard('交给'+get.translation(player)+'一张手牌','he',true).set('ai',function(card){
            var evt=_status.event.getParent();
            if(get.attitude(_status.event.player,evt.player)>2){
                if(card.name=='jiu') return 120;
                if(card.name=='tao') return 110;
            }
            return 100-get.value(card);
        });
        "step 2"
        if(result.bool&&result.cards&&result.cards.length){
            event.current.$giveAuto(result.cards,player);
            player.gain(result.cards);
        }
        event.current=event.current.next;
        if(event.current!=player) event.goto(1);
    },
                ai:{
                    threaten:1.4,
                },
            },
            "xinfu_denglou":{
                unique:true,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                limited:true,
                init:function (player){
        player.storage.xinfu_denglou=false;
    },
                filter:function (event,player){
        if(player.countCards('h')) return false;
        return player.storage.xinfu_denglou==false;
    },
                skillAnimation:true,
                marktext:"登",
                mark:true,
                intro:{
                    content:"limited",
                },
                "content_use":function (){
        'step 0'
        var select=get.select(get.info(card).selectTarget);
        if(select[1]==-1){
            for(var i=0;i<targets.length;i++){
                if(!player.canUse(card,targets[i])){
                    targets.splice(i--,1);
                }
            }
            if(targets.length){
                player.useCard(card,targets);
            }
        }
        else{
            player.chooseTarget(select,'选择'+get.translation(card)+'的目标',true,function(cardx,player,target){
                var card=_status.event.card;
                return _status.event.targets.contains(target)&&player.canUse(card,target);
            }).set('ai',function(target){
                var card=_status.event.card;
                var player=_status.event.player;
                return get.effect(target,card,player,player);
            }).set('targets',targets).set('card',card);
        }
        'step 1'
        if(result.bool){
            player.useCard(card,result.targets);
        }
    },
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_denglou');
        player.storage.xinfu_denglou=true;
        event.cards=get.cards(4);
        event.gains=[]
        event.discards=[]
        var content=['牌堆顶的四张牌',event.cards];
        game.log(player,'观看了','#y牌堆顶的四张牌');
        player.chooseControl('ok').set('dialog',content);
        "step 1"
        if(get.type(event.cards[0])!="basic"){
            event.gains.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        else{
            var bool=game.hasPlayer(function(current){
                return player.canUse(event.cards[0],current);
            });
            if(bool){
                event.insert(lib.skill.xinfu_denglou.content_use,{
                    player:player,
                    card:event.cards[0],
                    targets:game.filterPlayer(function(current){
                        return true;
                    })
                });
            }
            else event.discards.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        "step 2"
        if(event.cards.length) event.goto(1);
        else{
            if(event.gains.length) player.gain(event.gains,'gain2');
            if(event.discards.length){
                player.$throw(event.discards);
                for(var i=0;i<event.discards.length;i++){
                   event.discards[i].discard();
                }
            }
        }
    },
            },
            "qinguo_use":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"equipEnd",
                },
                filter:function (event,player){
        if(!event.swapped&&player.countCards('e')==player.hp&&player.isDamaged()){
            return true;
        };
        return false;
    },
                frequent:true,
                content:function (){
        player.recover();
    },
                ai:{
                    threaten:1.3,
                },
            },
            "xinfu_qinguo":{
                group:["qinguo_use","qinguo_lose"],
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        return get.type(event.card)=='equip';
    },
                direct:true,
                content:function (){
            "step 0"
                    player.chooseTarget(get.prompt('xinfu_qinguo'),function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target);
                    }).set('ai',function(target){
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('xinfu_qinguo',result.targets);
                        player.useCard({name:'sha'},result.targets[0],false);
                    }
    },
            },
            "qinguo_lose":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"loseEnd",
                },
                filter:function (event,player){
        if(event.getParent().name=='equip') return false;
        if(player.hp!=player.countCards('e')||!player.isDamaged()) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                frequent:true,
                content:function (){
        player.recover();
    },
            },
            "xinfu_jijun":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(player!=_status.currentPhase) return false;
        if(get.type(event.card)=='equip'&&get.subtype(event.card)!='equip1') return false;
        if(event.targets.contains(player)) return true;
        return false;
    },
                content:function (){
        "step 0"
        player.judge(function(card){
            return 1;
        },ui.special);
        "step 1"
        if(result.bool){
            result.card.goto(ui.special);
            player.storage.xinfu_jijun.push(result.card);
            result.node.moveDelete(player);
            game.broadcast(function(cardid,player){
                var node=lib.cardOL[cardid];
                if(node){
                    node.moveDelete(player);
                }
            },result.node.cardid,player);
            game.addVideo('gain2',player,get.cardsInfo([result.node]));
            player.markSkill('xinfu_jijun');
            game.addVideo('storage',player,['xinfu_jijun',get.cardsInfo(player.storage.xinfu_jijun),'cards']);
        }
    },
                init:function (player){
        player.storage.xinfu_jijun=[];
    },
                intro:{
                    content:"cards",
                },
                marktext:"方",
            },
            "xinfu_fangtong":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('he')&&player.storage.xinfu_jijun.length;
    },
                direct:true,
                content:function (){
        'step 0'
        var info=['是否发动【方统】？'];
        if(player.storage.xinfu_jijun){
            info.push('<div class="text center">'+get.translation(player)+'的“集军”牌</div>');
            info.push(player.storage.xinfu_jijun);
        }
        if(player.countCards('h')){
            info.push('<div class="text center">'+get.translation(player)+'的手牌区</div>');
            info.push(player.getCards('h'));
        }
        if(player.countCards('e')){
            info.push('<div class="text center">'+get.translation(player)+'的工具区</div>');
            info.push(player.getCards('e'));
        }
        var next=player.chooseButton();
        next.set('createDialog',info);
        next.set('selectButton',function (){
            var num=0;
            for(var i=0;i<ui.selected.buttons.length;i++){
                num+=get.number(ui.selected.buttons[i]);
            }
            if(num==36) return ui.selected.buttons.length;
            return ui.selected.buttons.length+2;
        });
        next.set('filterButton',function(button){
            var player=_status.event.player;
            if(ui.selected.buttons.length){
                if(!player.storage.xinfu_jijun.contains(button.link)) return false;
            }
            else if(player.storage.xinfu_jijun.contains(button.link)) return false;
            var num=0;
            for(var i=0;i<ui.selected.buttons.length;i++){
                num+=get.number(ui.selected.buttons[i]);
            }
            return get.number(button.link)+num<=36;
        });
        next.set('ai',function(button){
            var player=_status.event.player;
            if(!game.hasPlayer(function(current){
                return (current!=player&&
                    get.damageEffect(current,player,player,'thunder')>0&&
                    get.attitude(player,current)<0)
            })) return 0;
            return 1;
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_fangtong');
            var tothrow=[];
            var cards=result.links.slice(0);
            for(var i=0;i<cards.length;i++){
                if(player.storage.xinfu_jijun.contains(cards[i])){
                    player.storage.xinfu_jijun.remove(cards[i]);
                    tothrow.push(cards[i]);
                }else{
                    player.discard(cards[i]);
                }
            }
            player.$throw(tothrow);
            player.chooseTarget('选择一个目标并对其造成3点理竞扣分',true,function(card,player,target){
                return target!=player;
            }).set('ai',function(target){
                return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
            });
        }
        else{
            event.finish();
        }
        'step 2'
        var target=result.targets[0];
        target.damage(3,'thunder');
    },
            },
            "xinfu_weilu":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.source!=undefined&&!event.source.hasSkill('weilu_effect'));
    },
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                forced:true,
                logTarget:"source",
                content:function (){
        trigger.source.storage.weilu_effect=player;
        trigger.source.addTempSkill('weilu_effect',{player:"dieAfter",});
        trigger.source.addTempSkill('weilu_effect_phase');
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                return 0.8;
                // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
            },
                    },
                },
            },
            "weilu_effect":{
                group:["weilu_effect_clear"],
                subSkill:{
                    clear:{
                        sub:true,
                        trigger:{
                            global:"phaseAfter",
                        },
                        filter:function (event,player){
                if(player.hasSkill('weilu_effect_phase')) return false;
                return event.player.hasSkill('xinfu_weilu');
            },
                        silent:true,
                        forced:true,
                        popup:false,
                        content:function (){
                player.removeSkill('weilu_effect');
            },
                    },
                    phase:{
                        sub:true,
                    },
                },
                mark:"character",
                onremove:true,
                intro:{
                    content:"懒得写标记内容了，自己去看吕虔的技能介绍吧……",
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
        if(player.hasSkill('weilu_effect_phase')) return false;
        return event.player==player.storage.weilu_effect;
    },
                silent:true,
                forced:true,
                popup:false,
                content:function (){
        if(player.hp>1){
            trigger.player.logSkill('xinfu_weilu');
            trigger.player.line(player);
            var num=player.hp-1;
            player.storage.weilu_hp=num;
            player.loseHp(num);
            player.addSkill('weilu_effect2');
        }
        player.removeSkill('weilu_effect');
    },
            },
            "weilu_effect2":{
                trigger:{
                    global:"phaseUseEnd",
                },
                silent:true,
                forced:true,
                popup:false,
                content:function (){
        if(player.storage.weilu_hp){
            trigger.player.logSkill('xinfu_weilu');
            trigger.player.line(player);
            player.recover(player.storage.weilu_hp);
        }
        player.removeSkill('weilu_effect2');
    },
            },
            "xinfu_zengdao":{
                audio:"ext:新服杂碎:2",
                init:function (player){
        player.storage.xinfu_zengdao=false;
    },
                limited:true,
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        if(player.storage.xinfu_zengdao==true) return false;
        return player.countCards('e')>0;
    },
                skillAnimation:true,
                position:"e",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:true,
                content:function (){
        player.awakenSkill('xinfu_zengdao');
        player.$give(cards,target);
        target.storage.xinfu_zengdao2=cards;
        target.addSkill('xinfu_zengdao2');
    },
                ai:{
                    order:1,
                    result:{
                        target:0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "xinfu_zengdao2":{
                trigger:{
                    source:"damageBegin",
                },
                audio:"xinfu_zengdao",
                forced:true,
                content:function (){
        'step 0'
        player.chooseCardButton('将一张“刀”置入弃牌堆',player.storage.xinfu_zengdao2,true);
        'step 1'
        if(result.bool){
            player.$throw(result.links);
            var card=result.links[0];
            card.discard();
            player.storage.xinfu_zengdao2.remove(card);
            player.syncStorage('xinfu_zengdao2');
            player.updateMarks('xinfu_zengdao2');
        }
        if(player.storage.xinfu_zengdao2.length==0){
            player.removeSkill('xinfu_zengdao2');
        }
        trigger.num++;
    },
                mark:true,
                marktext:"刀",
                intro:{
                    content:"cards",
                },
            },
            "xinfu_langxi":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinfu_langxi'),function(card,player,target){
            return target.hp<=player.hp&&target!=player;
        }).set('ai',function(target){
            var player=_status.event.player;
            return get.damageEffect(target,player,player);
        });
        "step 1"
        if(result.bool&&result.targets&&result.targets.length){
            player.logSkill('xinfu_langxi',result.targets);
            var num=[1,2,0,1,1,2].randomGet();
            player.line(result.targets[0],'green');
            result.targets[0].damage(num);
        }
    },
            },
            "xinfu_yisuan":{
                usable:1,
                audio:"ext:新服杂碎:2",
                init:function (player){
        if(player.hasStockSkill('xinfu_yisuan')&&!player.storage.xinfu_yisuan){
            player.gainMaxHp(2);
            player.storage.xinfu_yisuan=true;
        }
    },
                trigger:{
                    player:"useCardAfter",
                },
                check:function (event,player){
        return 18-get.value(event.card)-player.maxHp*2;
    },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(event.cards){
            if(get.type(event.card)!='trick') return false;
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].isInPile()) return true;
            }
        }
        return false;
    },
                content:function (){
        var list=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].isInPile()){
                list.push(trigger.cards[i]);
            }
        }
        player.gain(list,'gain2');
        player.loseMaxHp();
    },
            },
            "xinfu_xingluan":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function (event,player){
        if(_status.currentPhase!=player) return false;
        if(get.type(event.card)==undefined) return false;
        return (event.targets&&event.targets.length==1);
    },
                content:function (){
        var card=get.cardPile2(function(card){
            return card.number==6;
        });
        if(!card){
            player.chat('无牌可得了吗');
            game.log('但是牌堆里面已经没有点数为6的牌了！');
            event.finish();
            return;
        }
        player.gain(card,'gain2');
    },
            },
            "xinfu_lveming":{
                init:function (player){
        player.storage.xinfu_lveming=0;
    },
                mark:true,
                intro:{
                    content:"mark",
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('e')<player.countCards('e')&&target.countCards('hej');
    },
                content:function (){
        "step 0"
        var list=[1,2,3,4,5,6,7,8,9,10,11,12,13]
        target.chooseControl(list).set('ai',function(evt,player){
            return list.randomGet();
        });
        "step 1"
        if(result.control){
            target.popup(result.control);
            player.storage.xinfu_lveming++;
            event.num=result.control;
        }
        else{
            target.popup('1');
            player.storage.xinfu_lveming++;
            event.num=1;
        };
        player.judge(function(card){
            if(card.number==event.num) return 4;
            return -1;
        });
        "step 2"
        if(result.bool==true){
            target.damage(2);
        }
        else{
            var card=target.getCards('hej').randomGet();
            target.$giveAuto(card,player);
            player.gain(card);
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                var numj=target.countCards('j');
                var numhe=target.countCards('he');
                if(numhe==0) return 6;
                return -6+(numj+1)/numhe;
            },
                    },
                    threaten:1.1,
                },
            },
            "xinfu_tunjun":{
                skillAnimation:true,
                limited:true,
                unique:true,
                enable:"phaseUse",
                audio:"ext:新服杂碎:2",
                filter:function (event,player){
        if(player.storage.xinfu_tunjun) return false;
        return player.storage.xinfu_lveming&&player.storage.xinfu_lveming>0;
    },
                filterTarget:true,
                selectTarget:1,
                content:function (){
        "step 0"
        player.awakenSkill('xinfu_tunjun');
        event.num=player.storage.xinfu_lveming;
        event.toequip=[];
        "step 1"
        var equip=get.cardPile(function(card){
            var bool1=true;
            for(var i=0;i<event.toequip.length;i++){
                if(get.type(card)=='equip'&&get.subtype(card)==get.subtype(event.toequip[i])) bool1=false;
            }
            return (get.type(card)=='equip'&&!event.toequip.contains(card)&&bool1);
        });
        if(equip) event.toequip.push(equip);
        else event.num=0;
        event.num--;
        "step 2"
        if(event.num>0) event.goto(1);
        "step 3"
        for (var i=0;i<event.toequip.length;i++){
            target.equip(event.toequip[i]);
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
        player.storage.xinfu_tunjun=false;
    },
            },
            "xinfu_tanbei":{
                locked:false,
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('tanbei_effect1')){
                return true;
            }
        },
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&game.hasPlayer(function(current){
                return current.hasSkill('tanbei_effect1');
            })) return num+100;
        },
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('tanbei_effect2')) return false;
            if(game.hasPlayer(function(current){
                return current.hasSkill('tanbei_effect1');
            })&&!target.hasSkill('tanbei_effect1')){
                var num=player.getCardUsable(card)-100;
                if(num<=0) return false;
            }
        },
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        if(!target.countCards('hej')){
            event._result={index:1};
        }
        else{
            target.chooseControl().set('choiceList',[
                '令'+get.translation(player)+'随机获得你区域内的一张牌，然后其本回合内不能再对你使用牌。',
                '令'+get.translation(player)+'本回合内对你使用牌没有次数与距离限制。',
            ]);
        }
        "step 1"
        if(result.index==0){
            var card=target.getCards('hej').randomGet();
            target.$giveAuto(card,player);
            player.gain(card);
            target.addTempSkill('tanbei_effect2','phaseAfter');
        }
        else{
            target.addTempSkill('tanbei_effect1','phaseAfter');
        }
    },
                ai:{
                    order:function (){
            return [2,4,6,8,10].randomGet();
        },
                    result:{
                        target:function (player,target){
                return -2-target.countCards('h');
            },
                    },
                    threaten:1.1,
                },
            },
            "xinfu_sidao":{
                group:["xinfu_sidao_count","xinfu_sidao_init"],
                subSkill:{
                    init:{
                        sub:true,
                        forced:true,
                        silent:true,
                        popup:false,
                        trigger:{
                            player:"phaseBefore",
                        },
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].storage.sidao){
                        delete game.players[i].storage.sidao;
                    }
                }
            },
                    },
                    count:{
                        sub:true,
                        forced:true,
                        silent:true,
                        popup:false,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function (event,player){
                return (event.targets&&event.targets.length);
            },
                        content:function (){
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]==player) continue;
                    if(game.players[i].storage.sidao){
                        if(trigger.targets.contains(game.players[i])) game.players[i].storage.sidao++;
                        else delete game.players[i].storage.sidao;
                    }else{
                        if(trigger.targets.contains(game.players[i])) game.players[i].storage.sidao=1;
                    }
                }
            },
                    },
                },
                audio:"ext:新服杂碎:2",
                enable:"chooseToUse",
                usable:1,
                filterCard:true,
                position:"h",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
        if(!player.countCards('h')||!game.hasPlayer(function(target){
            return target.storage.sidao&&target.storage.sidao>1;
        })) return false;
    },
                filterTarget:function (card,player,target){
        return target.storage.sidao&&target.storage.sidao>1;
    },
                prompt:"将一张手牌当没收使用",
                check:function (card){return 4-get.value(card)},
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                    basic:{
                        order:7.5,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)<=0) return (target.countCards('he')>0)?-1.5:1.5;
                var js=target.getCards('j');
                if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='shunshou') return 3;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                        return -1.5;
                    }
                    return 3;
                }
                return -1.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                    return 0;
                }
                if(get.attitude(player,target)>1){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='shunshou') return 1;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
                            return 0;
                        }
                        return 1;
                    }
                    return 0;
                }
                return 1;
            },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            "tanbei_effect1":{
            },
            "tanbei_effect2":{
            },
            "xinfu_xionghuo":{
                group:["xinfu_xionghuo_damage","xinfu_xionghuo_begin"],
                subSkill:{
                    begin:{
                        silent:true,
                        popup:false,
                        sub:true,
                        forced:true,
                        trigger:{
                            global:"phaseUseBegin",
                        },
                        filter:function (event,player){
                return event.player.hasSkill('xionghuo')&&event.player!=player;
            },
                        content:function (){
                'step 0'
                player.logSkill("xinfu_xionghuo");
                if(trigger.player.storage.xionghuo>1) trigger.player.storage.xionghuo--;
                else{
                    delete trigger.player.storage.xionghuo;
                    trigger.player.removeSkill('xionghuo');
                }
                var num=[1,2,3].randomGet();
                event.goto(num);
                'step 1'
                player.line(trigger.player,'fire');
                trigger.player.damage('fire');
                trigger.player.addTempSkill('xionghuo_disable','phaseAfter');
                game.delay();
                event.finish();
                'step 2'
                player.line(trigger.player,'water');
                trigger.player.loseHp();
                trigger.player.addTempSkill('xionghuo_low','phaseAfter');
                game.delay();
                event.finish();
                'step 3'
                player.line(trigger.player,'green');
                var card1=trigger.player.getCards('h').randomGet();
                var card2=trigger.player.getCards('e').randomGet();
                var list=[];
                if(card1) list.push(card1);
                if(card2) list.push(card2);
                if(list.length>0){
                    trigger.player.$giveAuto(list,player);
                    player.gain(list);
                }
                game.delay();
            },
                    },
                    damage:{
                        audio:"xinfu_xionghuo",
                        sub:true,
                        forced:true,
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
                return event.player.hasSkill('xionghuo');
            },
                        content:function (){
                trigger.num++;
            },
                    },
                },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                usable:null,
                init:function (player){
        player.storage.xinfu_xionghuo=3;
    },
                mark:true,
                marktext:"戾",
                intro:{
                    content:"mark",
                },
                filterTarget:function (card,player,target){
        return player!=target&&player.storage.xinfu_xionghuo>0;
    },
                content:function (){
        if(target.storage.xionghuo==undefined||target.storage.xionghuo==0){
            target.addSkill('xionghuo');
            target.storage.xionghuo=0;
        }
        target.storage.xionghuo++;
        player.storage.xinfu_xionghuo--;
        target.syncStorage('xionghuo');
        player.syncStorage('xinfu_xionghuo');
        if(player.storage.xinfu_xionghuo==0) player.unmarkSkill('xinfu_xionghuo');
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                if(target.hasSkill('xionghuo')) return 0;
                return -1;
            },
                    },
                    threaten:1.1,
                },
            },
            xionghuo:{
                marktext:"戾",
                mark:true,
                intro:{
                    content:"mark",
                },
            },
            "xionghuo_disable":{
                mod:{
                    playerEnabled:function (card,player,target){
            if(target.hasSkill('xinfu_xionghuo')&&card.name=='sha') return false;
        },
                },
                mark:true,
                marktext:"禁",
                intro:{
                    content:"本回合内不能对“徐荣”使用“问”。",
                },
            },
            "xionghuo_low":{
                mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
                },
                marktext:"减",
                mark:true,
                intro:{
                    content:"本回合内手牌上限-1。",
                },
            },
            "xinfu_shajue":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
        return event.player.hp<0&&event.player!=player;
    },
                forced:true,
                priority:7,
                content:function (){
        if(trigger.parent.name=='damage'&&get.itemtype(trigger.parent.cards)=='cards'&&get.position(trigger.parent.cards[0])=='d'){
            player.gain(trigger.parent.cards,"gain2");
        }
        player.storage.xinfu_xionghuo++;
        player.markSkill('xinfu_xionghuo');
        player.syncStorage('xinfu_xionghuo');
    },
            },
            "xinfu_jingxie1":{
                group:["xinfu_jingxie2"],
                enable:"phaseUse",
                filterCard:function (card){
        return ["bagua","baiyin","lanyinjia","minguangkai","renwang",
            "tengjia","taipingyaoshu","zhuge","huxinjing"].contains(card.name);
    },
                discard:false,
                content:function (){
        "step 0"
        player.showCards(cards);
        "step 1"
        var card=cards[0];
        player.gain(game.createCard('rewrite_'+card.name,get.suit(card),card.number),'gain2');
    },
                ai:{
                    basic:{
                        order:2,
                    },
                    result:{
                        player:1,
                    },
                },
            },
            "xinfu_jingxie2":{
                audio:"ext:新服杂碎:2",
                enable:"chooseToUse",
                filterCard:function (card){
        return get.subtype(card)=='equip2';
    },
                filter:function (event,player){
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                position:"he",
                content:function (){
        'step 0'
        player.draw();
        player.recover(1-player.hp);
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function (player){
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                },
            },
            "rw_bagua_skill":{
                inherit:"bagua_skill",
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
        if(event.responded) return false;
        if(!event.filterCard({name:'shan'})) return false;
        if(!lib.filter.cardRespondable({name:'sha'},player,event)) return false;
        var evt=event.getParent();
        if(evt.player&&evt.player.hasSkillTag('unequip',false,{
            name:evt.card?evt.card.name:null,
            target:player,
            card:evt.card
        })) return false;
        return true;
    },
                audio:"bagua_skill",
                check:function (event,player){
        if(get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge('rewrite_bagua',function(card){return (get.suit(card)!='spade')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,effect){
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:player,
                    card:card
                })) return;
                if(get.tag(card,'respondShan')) return 0.5;
            },
                    },
                },
            },
            "rw_baiyin_skill":{
                inherit:"baiyin_skill",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
                    if(event.num<=1) return false;
                    if(event.source&&event.source.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return false;
                    return true;
                },
                priority:-10,
                content:function (){
                    trigger.num=1;
                },
            },
            "rw_lanyinjia":{
                inherit:"lanyinjia",
                enable:["chooseToRespond"],
                filterCard:true,
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('h')) return false;
                },
                prompt:"将一张手牌当答打出",
                check:function (card){
                    return 6-get.value(card);
                },
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
                        if(!player.countCards('h')) return false;
                    },
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'respondShan')&&current<0&&target.countCards('h')) return 0.59
                        },
                    },
                    order:4,
                    useful:-0.5,
                    value:-0.5,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            "rw_minguangkai_cancel":{
                inherit:"minguangkai_cancel",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                check:function (event,player){
                    return get.effect(event.target,event.card,event.player,player)<0;
                },
                filter:function (event,player){
                    if(['huoshaolianying','huogong'].contains(event.card.name)) return true;
                    if(event.card.name=='sha') return event.card.nature=='fire';
                    return false;
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(['huoshaolianying','huogong'].contains(card.name)||(card.name=='sha'&&card.nature=='fire')){
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
            },
            "rw_minguangkai_link":{
                inherit:"minguangkai_link",
                trigger:{
                    player:"linkBefore",
                },
                forced:true,
                priority:20,
                filter:function (event,player){
        return !player.isLinked();
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(target.isMinor()&&['tiesuo','lulitongxin'].contains(card.name)){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "rw_renwang_skill":{
                inherit:"renwang_skill",
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                priority:6,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        return (event.card.name=='sha'&&['spade','club','heart'].contains(get.suit(event.card)))
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player){
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:player,
                    card:card
                })) return;
                if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
            },
                    },
                },
            },
            "rw_tengjia1":{
                inherit:"tengjia1",
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:6,
                audio:"ext:新服杂碎:true",
                filter:function (event,player){
                    if(event.player.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return false;
                    if(event.card.name=='nanman') return true;
                    if(event.card.name=='wanjian') return true;
                    if(event.card.name=='sha'&&!event.card.nature) return true;
                },
                content:function (){
                    trigger.cancel();
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
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
                        },
                    },
                },
            },
            "rw_tengjia2":{
                inherit:"tengjia2",
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event){
                    if(event.nature=='fire') return true;
                },
                audio:"ext:新服杂碎:true",
                forced:true,
                content:function (){
                    trigger.num++;
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha'){
                                if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
                            }
                            if(get.tag(card,'fireDamage')&&current<0) return 2;
                        },
                    },
                },
            },
            "rw_tengjia3":{
                inherit:"rw_minguangkai_link",
                trigger:{
                    player:"linkBefore",
                },
                forced:true,
                priority:20,
                filter:function (event,player){
        return !player.isLinked();
    },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(target.isMinor()&&['tiesuo','lulitongxin'].contains(card.name)){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            "xinfu_guanwei":{
                audio:"ext:新服杂碎:2",
                usable:1,
                trigger:{
                    global:"phaseUseEnd",
                },
                init:function (player){
        player.storage.guanwei=[];
    },
                filter:function (event,player){
        if(player.storage.guanwei.length==1&&_status.currentPhase.countUsed()>1) return true;
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseToDiscard('he',get.prompt('xinfu_guanwei')).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.currentPhase)<1) return 0;
            return 9-get.value(card);
        });
        'step 1'
        if(result.bool){
            player.logSkill('xinfu_guanwei',trigger.player);
            player.line(trigger.player,'green');
            trigger.player.draw(2);
        }else{
            event.finish();
        }
        'step 2'
        trigger.player.getStat().card={};
        trigger.player.phaseUse();
    },
                group:["xinfu_guanwei_count","xinfu_guanwei_clear"],
                subSkill:{
                    count:{
                        trigger:{
                            global:"useCard",
                        },
                        filter:function (event,player){
                return _status.currentPhase==event.player;
            },
                        silent:true,
                        content:function (){
                if(!player.storage.guanwei.contains(get.suit(trigger.card))){
                    player.storage.guanwei.push(get.suit(trigger.card));
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                player.storage.guanwei=[];
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "xinfu_gongqing":{
                audio:"ext:新服杂碎:true",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(!event.source) return false;
        if(event.source.getAttackRange()==3) return false;
        if(event.source.getAttackRange()<3&&event.num<=1) return false;
        return true;
    },
                priority:-9.5,
                content:function (){
        trigger.num=trigger.source.getAttackRange()<3?1:trigger.num+1;
    },
            },
            "xinfu_andong":{
                subSkill:{
                    add:{
                        sub:true,
                        mod:{
                            ignoredHandcard:function (card,player){
                    if(get.suit(card)=='heart'){
                        return true;
                    }
                },
                            cardDiscardable:function (card,player,name){
                    if(name=='phaseDiscard'&&get.suit(card)=='heart') return false;
                },
                        },
                    },
                },
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        return (event.source&&event.source.countCards('h'));
    },
                logTarget:"source",
                content:function (){
        "step 0"
        trigger.source.chooseControlList(
            ['令'+get.translation(player)+'观看你的手牌，并获得其中所有的语文牌。',
            '防止即将对'+get.translation(player)+'造成的扣分，并使自己本回合内的语文手牌不计入手牌上限。'],
            true).set('ai',function(event,player){
            var target=_status.event.getParent().player;
            var player=_status.event.player;
            if(get.attitude(player,target)>0) return 1;
            return 0;
        });
        "step 1"
        if(result.index==1){
            trigger.cancel();
            trigger.source.addTempSkill('xinfu_andong_add');
            event.finish();
        }else{
            player.viewHandcards(trigger.source);
        }
        "step 2"
        var cards=trigger.source.getCards('h');
        var togain=[]
        for(var i=0;i<cards.length;i++){
            if(get.suit(cards[i])=='heart') togain.push(cards[i]);
        }
        if(togain.length) trigger.source.give(togain,player);
    },
            },
            "xinfu_yingshi":{
                audio:"ext:新服杂碎:2",
                group:["yingshi_die"],
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>0&&!game.hasPlayer(function(current){
            return current.hasSkill('yingshi_heart');
        });
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_yingshi'),function(card,player,target){
            return target!=player;
        }).set('ai',function(){
            return -1;
        });
        'step 1'
        if(result.bool){
            var cards=player.getCards('he');
            var togain=[]
            for(var i=0;i<cards.length;i++){
                if(get.suit(cards[i])=='heart') togain.push(cards[i]);
            }
            player.logSkill('xinfu_yingshi',result.targets);
            player.lose(togain,ui.special);
            player.$give(togain,result.targets[0]);
            result.targets[0].storage.yingshi_heart=togain;
            result.targets[0].addSkill('yingshi_heart');
        }
        else{
            event.finish();
        }
    },
            },
            "yingshi_heart":{
                marktext:"酬",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return event.source!=undefined&&event.card&&event.card.name=='sha';
    },
                forced:true,
                content:function (){
        'step 0'
        trigger.source.chooseCardButton('选择要获得的牌',player.storage.yingshi_heart,true);
        'step 1'
        if(result.bool){
            player.$give(result.links,trigger.source);
            trigger.source.gain(result.links);
            player.storage.yingshi_heart.remove(result.links[0]);
            player.syncStorage('yingshi_heart');
            player.updateMarks('yingshi_heart');
        }
        if(player.storage.yingshi_heart.length==0){
            delete player.storage.yingshi_heart;
            player.removeSkill('yingshi_heart');
        }
    },
                mark:true,
                intro:{
                    content:"cards",
                },
            },
            "yingshi_die":{
                forced:true,
                silent:true,
                popup:false,
                trigger:{
                    global:"dieBegin",
                },
                filter:function (event,player){
        return event.player.storage.yingshi_heart&&event.player.storage.yingshi_heart.length;
    },
                content:function (){
        player.logSkill('xinfu_yingshi');
        trigger.player.$give(trigger.player.storage.yingshi_heart,player);
        player.gain(trigger.player.storage.yingshi_heart);
        trigger.player.removeSkill('yingshi_heart');
        delete trigger.player.storage.yingshi_heart;
    },
            },
            "xinfu_duanfa":{
                init:function (player){
        player.storage.xinfu_duanfa=0;
    },
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                position:"he",
                filter:function (card,player){
        return player.storage.xinfu_duanfa<player.maxHp;
    },
                filterCard:function (card){
        return get.color(card)=='black';
    },
                selectCard:function (){
        var player=_status.event.player;
        return [1,player.maxHp-player.storage.xinfu_duanfa];
    },
                check:function (card){
        return 6-get.value(card)
    },
                delay:0,
                content:function (){
        player.draw(cards.length);
        player.storage.xinfu_duanfa+=cards.length;
    },
                group:"xinfu_duanfa_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        content:function (){
                player.storage.xinfu_duanfa=0;
            },
                        sub:true,
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "xinfu_youdi":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinfu_youdi'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(player.countCards('h','sha')>player.countCards('h')/3&&player.countCards('h',{color:red})>player.countCards('h')/2) return 0;
            if(target.countCards('he')==0) return 0.1;
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            game.delay();
            player.logSkill('xinfu_youdi',result.targets);
            event.target=result.targets[0];
            event.target.discardPlayerCard(player,'h',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.color(result.links[0])!='black') player.draw();
        if(result.links[0].name!='sha'&&event.target.countCards('he')){
            player.gainPlayerCard('he',event.target,true);
        }
    },
                ai:{
                    expose:0.2,
                    threaten:1.4,
                },
            },
            "xinfu_guanchao":{
                subSkill:{
                    dizeng:{
                        mark:true,
                        marktext:"增",
                        intro:{
                            content:"单调递增",
                        },
                        init:function (player){
                player.storage.guanchao=0;
            },
                        onremove:function (player){
                delete player.storage.guanchao;
            },
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return get.number(event.card)&&player.storage.guanchao!=14;
            },
                        content:function (){
                var num1=get.number(trigger.card);
                var num2=player.storage.guanchao;
                if(num2!=0&&num1>num2){
                    player.logSkill('xinfu_guanchao');
                    player.draw();
                    player.storage.guanchao=num1;
                }
                else if(num2==0){
                    player.storage.guanchao=num1;
                }
                else player.storage.guanchao=14;
            },
                        sub:true,
                    },
                    dijian:{
                        mark:true,
                        marktext:"减",
                        intro:{
                            content:"单调递减",
                        },
                        init:function (player){
                player.storage.guanchao=0;
            },
                        onremove:function (player){
                delete player.storage.guanchao;
            },
                        trigger:{
                            player:"useCard",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        filter:function (event,player){
                return get.number(event.card)&&player.storage.guanchao!=14;
            },
                        content:function (){
                var num1=get.number(trigger.card);
                var num2=player.storage.guanchao;
                if(num2!=0&&num1<num2){
                    player.logSkill('xinfu_guanchao');
                    player.draw();
                    player.storage.guanchao=num1;
                }
                else if(num2==0){
                    player.storage.guanchao=num1;
                }
                else player.storage.guanchao=14;
            },
                        sub:true,
                    },
                },
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        var list=['递增','递减','取消'];
        player.chooseControl(list).set('prompt',get.prompt('xinfu_guanchao')).set('ai',function(){
            return list[[0,1].randomGet()];
        });
        'step 1'
        switch(result.control){
            case '递增':{
                player.logSkill('xinfu_guanchao');
                player.addTempSkill('xinfu_guanchao_dizeng');
                break;
            }
            case '递减':{
                player.logSkill('xinfu_guanchao');
                player.addTempSkill('xinfu_guanchao_dijian');
                break;
            }
            case '取消':{
                break;
            }
        }
    },
            },
            "xinfu_xunxian":{
                usable:1,
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:["useCardAfter","respond"],
                },
                filter:function (event,player){
        if(get.itemtype(event.cards)!='cards'||player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].isInPile()){
                return true;
            }
        }
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('xinfu_xunxian'),function(card,player,target){
            return target!=player&&target.countCards('h')>player.countCards('h');
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att<3) return 0;
            if(target.hasJudge('lebu')){
                att/=5;
            }
            if(target.hasSha()&&_status.event.sha){
                att/=5;
            }
            if(_status.event.wuxie&&target.needsToDiscard(1)){
                att/=5;
            }
            return att/(1+get.distance(player,target,'absolute'));
        }).set('sha',trigger.cards[0].name=='sha').set('wuxie',trigger.cards[0].name=='wuxie');
        'step 1'
        if(result.bool){
            var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(trigger.cards[i].isInPile()){
                    list.push(trigger.cards[i]);
                }
            }
            player.logSkill('xinfu_xunxian',result.targets[0]);
            result.targets[0].gain(list,'gain2');
        }
    },
            },
            "xinfu_kannan":{
                audio:"ext:新服杂碎:true",
                subSkill:{
                    phase:{
                        sub:true,
                    },
                },
                enable:"phaseUse",
                filter:function (event,player){
        if(player.hasSkill('xinfu_kannan_phase')) return false;
        if(player.getStat().skill.xinfu_kannan>=player.hp) return false;
        return true;
    },
                filterTarget:function (card,player,target){
        if(target.hasSkill('xinfu_kannan_phase')) return false;
        return target.countCards('h')&&target!=player;
    },
                ai:{
                    order:2.8,
                    result:{
                        target:0,
                    },
                },
                content:function (){
        'step 0'
        player.chooseToCompare(target);
        'step 1'
        if(result.bool){
            player.addTempSkill('xinfu_kannan_phase');
            if(!player.hasSkill('kannan_eff')){
                player.addSkill('kannan_eff');
            }else{
                if(!player.storage.kannan_eff) player.storage.kannan_eff=0;
            }
            player.storage.kannan_eff++;
            player.markSkill('kannan_eff');
        }
        else{
            target.addTempSkill('xinfu_kannan_phase');
            if(!target.hasSkill('kannan_eff')){
                target.addSkill('kannan_eff');
            }else{
                if(!target.storage.kannan_eff) player.storage.kannan_eff=0;
                target.storage.kannan_eff++;
                target.markSkill('kannan_eff');
            }
            target.storage.kannan_eff++;
            target.markSkill('kannan_eff');
        }
    },
            },
            "kannan_eff":{
                subSkill:{
                    remove:{
                        sub:true,
                        trigger:{
                            player:"useCardAfter",
                        },
                        priority:2,
                        filter:function (event){
                return (event.card&&(event.card.name=='sha'));
             },
                        forced:true,
                        popup:false,
                        audio:false,
                        content:function (){
                player.removeSkill('kannan_eff');
            },
                    },
                },
                mark:true,
                intro:{
                    content:"下一张问的扣分基数+#",
                },
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){
        trigger.num+=player.storage.kannan_eff;
        player.removeSkill('kannan_eff');
    },
                init:function (player){
        player.storage.kannan_eff=0;
    },
                onremove:function (player){
        delete player.storage.kannan_eff;
    },
                ai:{
                    damageBonus:true,
                },
                group:"kannan_eff_remove",
            },
            "xinfu_tushe":{
                audio:"ext:新服杂碎:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(get.type(event.card)=='equip') return false;
        return !player.countCards('h',{type:'basic',});
    },
                content:function (){
        player.draw(trigger.targets.length);
    },
                ai:{
                    threaten:1.8,
                },
            },
            "xinfu_limu":{
                mod:{
                    targetInRange:function (card,player,target){
            if(player.countCards('j')&&get.distance(player,target,'attack')<=1){
                return true;
            }
        },
                    cardUsable:function (card,player,num){
            if(typeof num=='number'&&player.countCards('j')){
                return Infinity;
            }
        },
                },
                locked:false,
                audio:"ext:新服杂碎:2",
                enable:"phaseUse",
                discard:false,
                filter:function (event,player){
        if(player.hasJudge('lebu')) return false;
        return player.countCards('he',{suit:'diamond'})>0;
    },
                prepare:"throw",
                position:"he",
                filterCard:{
                    suit:"diamond",
                },
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return player==target;
    },
                check:function (card){
        return 0;
    },
                content:function (){
        var next=player.useCard({name:'lebu'},target,cards);
        next.animate=false;
        next.audio=false;
        player.recover();
    },
                ai:{
                    result:{
                        target:1,
                    },
                    order:9,
                },
            },
        },
        translate:{
            "xinfu_lingren":"凌人",
            "xinfu_lingren_info":"出牌阶段限一次。当你使用的tag中包含damage项目的基本牌或普通动作牌指定目标后，你可以猜测其中的一个目标的手牌中是否有基本牌，动作牌或工具牌。若你猜中的项目数：≥1，此牌对该角色的扣分+1；≥2，你摸两张牌；≥3，你获得技能〖奸雄〗(新界)和〖行殇〗直到下回合开始。",
            "lingren_adddamage":"凌人",
            "lingren_adddamage_info":"",
            "lingren_jianxiong":"奸雄",
            "lingren_jianxiong_info":"每当你受到扣分后，你可以获得对你造成扣分的牌并摸一张牌。",
            "lingren_xingshang":"行殇",
            "lingren_xingshang_info":"你可以立即获得退学角色的所有牌。",
            "xinfu_fujian":"伏间",
            "xinfu_fujian_info":"锁定技，结束阶段，你观看随机一名角色的随机X张手牌。(X为场上手牌最少的角色的手牌数)",
            "xinfu_guolun":"过论",
            "xinfu_guolun_info":"出牌阶段限一次，你可以展示一名其他角色的手牌，然后展示你的一张手牌。展示的手牌点数更大的角色摸一张牌。然后，你与其交换这两张牌。",
            "xinfu_zhanji":"展骥",
            "xinfu_zhanji_info":"锁定技，你的出牌阶段内，当你不因此技能效果获得牌时，你额外摸一张牌。",
            "xinfu_songsang":"送丧",
            "xinfu_songsang_info":"限定技，当场上有角色退学时，你可以回复一点体力（若你未受伤，则改为加一点体力上限）；然后获得技能〖展骥〗。",
            "xinfu_jixu":"击虚",
            "xinfu_jixu_info":"出牌阶段限一次，若你有手牌，你可以令任意数量的体力值相等的其他角色猜测你的手牌中是否有【问】。然后，你摸X张牌（X为猜错的角色数）。若你有【问】，则你本回合内使用【问】时，所有这些角色均成为【问】的目标；若你没有【问】，则你弃置所有这些角色的各一张牌。若X为零，你结束出牌阶段。",
            "jixu_sha":"击虚",
            "jixu_sha_info":"",
            "xinfu_sanwen":"散文",
            "xinfu_sanwen_info":"每回合限一次。当你获得牌后，若你的原手牌中有与这些牌名称相同的牌，则你可以展示这些牌，弃置新得到的同名牌并摸两倍的牌。",
            "xinfu_qiai":"七哀",
            "xinfu_qiai_info":"限定技，当你进入将退学状态时，你可以令所有其他角色依次交给你一张牌。",
            "xinfu_denglou":"登楼",
            "xinfu_denglou_info":"限定技，结束阶段，若你没有手牌，则你可以观看牌堆顶的四张牌，依次使用其中的所有基本牌（不能使用则弃置），然后获得其余的牌。",
            "qinguo_use":"勤国",
            "qinguo_use_info":"",
            "xinfu_qinguo":"勤国",
            "xinfu_qinguo_info":"当你使用的工具牌结算完成后，你可以视为使用了一张【问】；当你因使用或失去工具牌导致工具区内牌的数量发生变化后，若你工具区内牌的数量等于你的体力值，则你回复1点体力。",
            "qinguo_lose":"勤国",
            "qinguo_lose_info":"",
            "xinfu_jijun":"集军",
            "xinfu_jijun_info":"当你于回合内使用非工具牌或助学牌指定了自己为目标时，你可以进行一次判定。然后，你将判定牌置于自己的武将牌上，称之为「方」。",
            "xinfu_fangtong":"方统",
            "xinfu_fangtong_info":"结束阶段，你可以弃置总点数之和为36的一张牌与任意张「方」，并对一名其他角色造成3点理竞扣分。",
            "xinfu_weilu":"威虏",
            "xinfu_weilu_info":"锁定技，当你受到扣分后，扣分来源获得一枚「虏」。你的下个出牌阶段开始时，所有有「虏」的角色将体力失去至1点。此阶段结束后，这些角色回复以此法失去的体力。",
            "weilu_effect":"威虏",
            "weilu_effect_info":"",
            "weilu_effect2":"威虏",
            "weilu_effect2_info":"",
            "xinfu_zengdao":"赠刀",
            "xinfu_zengdao_info":"限定技，出牌阶段，你可以将工具牌内的任意张牌置于一名其他角色的武将牌旁，称之为「刀」。该角色造成扣分时，其须移去一张「刀」，使此扣分+1。",
            "xinfu_zengdao2":"赠刀",
            "xinfu_zengdao2_info":"",
            "xinfu_langxi":"狼袭",
            "xinfu_langxi_info":"准备阶段，你可以对一名体力小于或等于你的其他角色造成0～2点随机扣分。",
            "xinfu_yisuan":"亦算",
            "xinfu_yisuan_info":"每回合限一次。当你于回合内使用的动作牌进入弃牌堆时，你可以减1点体力上限，从弃牌堆中获得之。",
            "xinfu_xingluan":"兴乱",
            "xinfu_xingluan_info":"每回合限一次。当你于回合内使用的仅指定一个目标的牌结算完成后，你可以从牌堆中随机获得一张点数为6的牌。",
            "xinfu_lveming":"掠命",
            "xinfu_lveming_info":"出牌阶段限一次，你可以选择一名工具区工具比你少的角色，令其选择一个点数，然后你进行判定：<br>若点数相同，你对其造成2点扣分；<br>若点数不同，则你随机获得其区域内的一张牌。",
            "xinfu_tunjun":"屯军",
            "xinfu_tunjun_info":"限定技，出牌阶段，你可以选择一名角色，令其随机使用牌堆中的X张工具牌。(X为你发动过“掠命”的次数)",
            "xinfu_tanbei":"贪狈",
            "xinfu_tanbei_info":"出牌阶段限一次，你可以令一名其他角色选择一项：<br>1.令你随机获得其区域内的一张牌，本回合内你不能对其使用牌。<br>2.令你此回合内对其使用牌没有次数与距离限制。",
            "xinfu_sidao":"伺盗",
            "xinfu_sidao_info":"出牌阶段限一次，当你对一名其他角色连续使用两张牌后，你可以将一张手牌当做【没收】对其使用。",
            "tanbei_effect1":"贪狈",
            "tanbei_effect1_info":"",
            "tanbei_effect2":"贪狈",
            "tanbei_effect2_info":"",
            "xinfu_xionghuo":"凶镬",
            "xinfu_xionghuo_info":"游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记，你对有此标记的角色造成的扣分+1，且其出牌阶段开始时，移去“暴戾”并随机执行一项：1.受到1点文竞扣分且本回合不能对你使用【问】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张工具区里的牌。",
            xionghuo:"凶镬",
            "xionghuo_info":"",
            "xionghuo_disable":"凶镬",
            "xionghuo_disable_info":"",
            "xionghuo_low":"凶镬",
            "xionghuo_low_info":"",
            "xinfu_shajue":"问绝",
            "xinfu_shajue_info":"锁定技，其他角色进入将退学状态时，若其需要超过一张【习】或【思】救回，则你获得一个“暴戾”标记，并获得使其进入将退学状态的牌。",
            "xinfu_jingxie1":"精械",
            "xinfu_jingxie1_info":"出牌阶段，你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包/国战包中的教辅牌，然后对其进行强化。当你处于将退学状态时，你可以重铸一张教辅牌，将体力回复至1点。",
            "xinfu_jingxie2":"精械",
            "xinfu_jingxie2_info":"出牌阶段，你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包/国战包中的教辅牌，然后对其进行强化。当你处于将退学状态时，你可以重铸一张教辅牌，将体力回复至1点。",
            "rw_bagua_skill":"先天硬币",
            "rw_bagua_skill_info":"每当你需要使用或打出一张【答】时，你可以进行一次判定，若判定结果不为数学，视为你使用或打出了一张【答】。",
            "rw_baiyin_skill":"玉照狮子盔",
            "rw_baiyin_skill_info":"锁定技，你每次受到扣分时，最多承受1点扣分（防止多余的扣分）；当你失去工具区里的【玉照狮子盔】时，你回复1点体力并摸两张牌。",
            "rw_lanyinjia":"精银甲",
            "rw_lanyinjia_info":"你可以将一张手牌当做【答】使用或打出。锁定技，【精银甲】不会无效。",
            "rw_minguangkai_cancel":"耀光铠",
            "rw_minguangkai_cancel_info":"锁定技，当你成为【拼写大赛】、【抽查】或火【问】的目标时，或即将被横置时，取消之。",
            "rw_minguangkai_link":"耀光铠",
            "rw_minguangkai_link_info":"锁定技，当你成为【拼写大赛】、【抽查】或火【问】的目标时，或即将被横置时，取消之。",
            "rw_renwang_skill":"仁王金刚盾",
            "rw_renwang_skill_info":"有花色且不为英语的问对你无效。",
            "rw_tengjia1":"桐油百炼甲",
            "rw_tengjia1_info":"定技，【多想多问】、【阶段测验】和普通【问】对你无效。你每次受到文竞扣分时，该扣分+1。你不会被横置。",
            "rw_tengjia2":"桐油百炼甲",
            "rw_tengjia2_info":"定技，【多想多问】、【阶段测验】和普通【问】对你无效。你每次受到文竞扣分时，该扣分+1。你不会被横置。",
            "rw_tengjia3":"桐油百炼甲",
            "rw_tengjia3_info":"定技，【多想多问】、【阶段测验】和普通【问】对你无效。你每次受到文竞扣分时，该扣分+1。你不会被横置。",
            "xinfu_guanwei":"观微",
            "xinfu_guanwei_info":"每回合限一次。一名角色的出牌阶段结束时，若其于出牌阶段内使用过的牌的数目>1且花色皆相同，则你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。",
            "xinfu_gongqing":"公清",
            "xinfu_gongqing_info":"锁定技。当你受到扣分时，若扣分来源的攻击范围：<3，则你令此扣分的数值减为1。>3，你令此扣分+1。",
            "xinfu_andong":"安东",
            "xinfu_andong_info":"当你受到扣分时，若扣分来源有手牌，则你可以令扣分来源选择一项：1.令你观看其的手牌并获得其中的所有语文牌；2.防止此扣分，然后其本回合内的语文手牌不计入手牌上限。",
            "xinfu_yingshi":"应势",
            "xinfu_yingshi_info":"出牌阶段开始时，若场上的所有角色均没有「酬」，则你可以将所有的语文牌置于一名其他角色的武将牌旁，称之为「酬」。有「酬」的角色受到「问」的扣分/退学时，扣分来源/你获得其中的一张/所有的「酬」。",
            "yingshi_heart":"应势",
            "yingshi_heart_info":"",
            "yingshi_die":"应势",
            "yingshi_die_info":"",
            "xinfu_duanfa":"断发",
            "xinfu_duanfa_info":"出牌阶段，你可以弃置任意张黑色牌，然后摸等量的牌。(每回合内限X张，X为你的体力上限。)",
            "xinfu_youdi":"诱敌",
            "xinfu_youdi_info":"结束阶段开始时，你可以令一名其他角色弃置你的一张手牌，若此牌：不为黑色，你摸一张牌。不为【问】，你获得该角色的一张牌。",
            "xinfu_guanchao":"观潮",
            "xinfu_guanchao_info":"出牌阶段开始时，你可以选择一项直到回合结束：1.当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌；2.当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌。",
            "xinfu_xunxian":"逊贤",
            "xinfu_xunxian_info":"每名其他角色的回合限一次，当你使用或打出的牌结算完成，即将置入弃牌堆时，你可以将之交给一名手牌比你多的角色。",
            "xinfu_kannan":"戡难",
            "xinfu_kannan_info":"出牌阶段限X次，你可以与一名本回合内未成为过〖戡难〗目标的角色拼点。若你赢，你使用的下一张【问】的扣分值基数+1，且你本回合内不能再发动〖戡难〗。若你没赢，其使用的下一张【问】的扣分值基数+1。（X为你的体力值）。",
            "kannan_eff":"戡难",
            "kannan_eff_info":"",
            "xinfu_tushe":"图射",
            "xinfu_tushe_info":"当你使用非工具牌指定目标时，若你没有基本牌，则你可以摸X张牌。（X为此牌指定的目标数）",
            "xinfu_limu":"立牧",
            "xinfu_limu_info":"出牌阶段限一次，将一张英语花色牌当做【乐不思蜀】对自己使用，然后回复1点体力。只要你的判定区内有牌，你对攻击范围内的其他角色使用牌便没有次数和距离限制。",
        },
    },
    intro:"关于但不限于新服的各种玩意儿",
    author:"苏婆玛丽奥",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["liuyan.jpg"],"card":[],"skill":[]}}})