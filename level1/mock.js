module.exports = [{
    path: /\/apis/,
    method: 'get',
    data: function(options) {
        return [{ // response data
            id: 1,
            first: '@FIRST',
        }, {
            id: 2,
            first: '@FIRST',
        }, {
            id: 3,
            first: '@FIRST',
        }]
    }
}, {
    path: /\/api/,
    method: 'get',
    data: {
        'list|1-10': [{
            'id|+1': 1
        }]
    }
}, {
    path: /\/cgi/,
    data: {
        "info": {
            "id": "6071",
            "name": "星球大战：原力觉醒",
            "director": "J·J·艾布拉姆斯",
            "actor": "哈里森·福特 / 马克·哈米尔 / 凯丽·费雪 / 亚当·德赖弗 / 黛西·雷德利",
            "coverid": "2njjhmf9tk6rzxx",
            "date": "20160109",
            "country": "美国",
            "remark": "星战再起航，愿原力与你同在 ",
            "tags": "动作/科幻/奇幻/冒险",
            "version": "2D/3D/IMAX/IMAX3D/中国巨幕",
            "longs": "135分钟",
            "score": "74",
            "wantCount": "107761",
            "seenCount": "6610",
            "initScore": "74",
            "simple_remarks": "星战再起航，愿原力与你同在 ",
            "detail": "恩多战役一年后，新共和国与银河帝国在外环沙漠行星贾库爆发了一场大规模战役。在战斗中，由舰长赛恩娜·雷指挥的帝国歼星舰“处罚者号”坠毁在贾库地表。贾库战役以新共和国获胜而告终。\n贾库战役后，帝国再也无力对新共和国发动大规模战役，被迫与新共和国签署一份条约。帝国在核心世界和内环的所有飞船都必须待在条约规定的边界内。\n但银河系出现了两个对立的新政权：”第一秩序“和”抵抗力量“……",
            "will_flag": 0,
            "poster_url": "http://static.wepiao.com/movie/2015/12/1_0/201512010938497156.jpg",
            "poster_url_size3": "http://static.wepiao.com/movie/2015/12/1_0/201512010938330281.jpg",
            "poster_url_size21": "http://static.wepiao.com/movie/2015/12/15_0/201512151726298107.jpg",
            "poster_url_size22": "",
            "poster_url_size23": "",
            "still_list": [{
                "thumbnail_url": "http://static.wepiao.com/movie/2015/10/20_2/201510201214145475.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/10/20_1/201510201214145475.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/10/20_0/201510201214145475.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/10/20_2/201510201214151568.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/10/20_1/201510201214151568.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/10/20_0/201510201214151568.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/10/20_2/201510201214157818.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/10/20_1/201510201214157818.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/10/20_0/201510201214157818.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/10/20_2/201510201214163756.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/10/20_1/201510201214163756.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/10/20_0/201510201214163756.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/10/20_2/201510201214169693.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/10/20_1/201510201214169693.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/10/20_0/201510201214169693.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171541526381.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171541526381.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171541526381.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171541578881.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171541578881.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171541578881.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171542211850.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171542211850.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171542211850.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171542324193.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171542324193.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171542324193.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171542597787.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171542597787.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171542597787.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171544011693.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171544011693.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171544011693.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171544287162.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171544287162.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171544287162.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171544566068.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171544566068.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171544566068.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171545202318.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171545202318.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171545202318.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171545344193.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171545344193.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171545344193.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171546320600.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171546320600.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171546320600.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171547134350.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171547134350.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171547134350.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171547338256.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171547338256.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171547338256.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171548376225.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171548376225.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171548376225.jpg"
            }, {
                "thumbnail_url": "http://static.wepiao.com/movie/2015/11/17_2/201511171548554037.jpg",
                "display_url": "http://static.wepiao.com/movie/2015/11/17_1/201511171548554037.jpg",
                "original_url": "http://static.wepiao.com/movie/2015/11/17_0/201511171548554037.jpg"
            }],
            "videos": [{
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/h01791uazlc_496_280/0",
                "tt": "独家专访哈里森·福特、J.J.艾布拉姆斯：星战不是科幻，是奇幻",
                "vid": "h01791uazlc"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/h017982x9o9_496_280/0",
                "tt": "《星球大战》鹿晗MV震撼首发 劲歌热舞嗨翻天",
                "vid": "h017982x9o9"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/l0179neg2qt_496_280/0",
                "tt": "《星球大战：原力觉醒》获第88届奥斯卡最佳配乐、音响效果等5项提名",
                "vid": "l0179neg2qt"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/r0181fuavs0_496_280/0",
                "tt": "完整版：《星战7》全球票房狂砍17亿美元",
                "vid": "r0181fuavs0"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/b0019st16s6_496_280/0",
                "tt": "《星战》达斯·维德VS甘道夫",
                "vid": "b0019st16s6"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/w0019xixr2p_496_280/0",
                "tt": "《星战》达斯·魔VS蜘蛛侠",
                "vid": "w0019xixr2p"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/x0019g4vivd_496_280/0",
                "tt": "《星战》达斯·维达VS蝙蝠侠+超人",
                "vid": "x0019g4vivd"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/q0019vzhkyw_496_280/0",
                "tt": "星球大战光剑的正确用法",
                "vid": "q0019vzhkyw"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/r0179xgg4a2_496_280/0",
                "tt": "诚实预告片No.4：史上最坑爹的电影没有之一",
                "vid": "r0179xgg4a2"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/l015358rq7r_496_280/0",
                "tt": "12分钟看完12小时的《星球大战1-6集》",
                "vid": "l015358rq7r"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/m0019tksc35_496_280/0",
                "tt": "《星球大战》三分钟看完达斯·维达黑化之路",
                "vid": "m0019tksc35"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/m0019pxtwas_496_280/0",
                "tt": "《星战7》迪斯尼萌物乱入 米老鼠唐老鸭变绝地武士",
                "vid": "m0019pxtwas"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/o0180w4avu3_496_280/0",
                "tt": "完整版：《星战7》北美内地双夺冠",
                "vid": "o0180w4avu3"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/p0019izqr6i_496_280/0",
                "tt": "《星战3：西斯的复仇》结局遭疯狂恶搞",
                "vid": "p0019izqr6i"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/p0175w94dyr_496_280/0",
                "tt": "《星球大战》中国版预告 暴风兵集结震撼空战开启",
                "vid": "p0175w94dyr"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/y0178v5sv6z_496_280/0",
                "tt": "《星球大战7》鹿晗MV预告 战斗场景悉数曝光",
                "vid": "y0178v5sv6z"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/f0019v3l6w1_496_280/0",
                "tt": "《星球大战：原力觉醒》宣传片 鹿晗手持光剑对战凯洛·伦",
                "vid": "f0019v3l6w1"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/d00177rh06o_496_280/0",
                "tt": "星战六部曲独家混剪",
                "vid": "d00177rh06o"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/r0179x91ll1_496_280/0",
                "tt": "3分钟看完《星球大战》前六部",
                "vid": "r0179x91ll1"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/u0179q4boj2_496_280/0",
                "tt": "完整版：《星战7》一句话证明你看过星战系列！",
                "vid": "u0179q4boj2"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/a0179hya236_496_280/0",
                "tt": "完整版 星球大战：看老美如何鬼畜吐槽全系列",
                "vid": "a0179hya236"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/m017948gnrt_496_280/0",
                "tt": "星球大战1-7燃爆混剪",
                "vid": "m017948gnrt"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/n0019grgwji_496_280/0",
                "tt": "星球大战花絮：十佳砍手瞬间",
                "vid": "n0019grgwji"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/i01799gy10g_496_280/0",
                "tt": "第三期：看星战7需要预习功课前六部",
                "vid": "i01799gy10g"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/i0019atzda8_496_280/0",
                "tt": "星球大战恶搞版Let It Go",
                "vid": "i0019atzda8"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/l0018oddjd9_496_280/0",
                "tt": "星球大战花絮：十佳怪兽",
                "vid": "l0018oddjd9"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/n00181oub8e_496_280/0",
                "tt": "星球大战花絮：十佳星际战斗机",
                "vid": "n00181oub8e"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/b0018sae28u_496_280/0",
                "tt": "星球大战花絮：十佳助手",
                "vid": "b0018sae28u"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/s0018gg6et1_496_280/0",
                "tt": "星球大战花絮：汉和莱娅的十佳时刻",
                "vid": "s0018gg6et1"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/q0018t2gkoj_496_280/0",
                "tt": "星球大战花絮：十佳服装",
                "vid": "q0018t2gkoj"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/c00192igjo6_496_280/0",
                "tt": "《星战》专访哈里森·福特 这部经典是我事业的起点",
                "vid": "c00192igjo6"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/k0019wimlxv_496_280/0",
                "tt": "《星战》女主专访 得到角色很困惑",
                "vid": "k0019wimlxv"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/j0019xntdat_496_280/0",
                "tt": "《星战》男主专访 暴风军盔甲戳的肉疼",
                "vid": "j0019xntdat"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/m0019oaw3sx_496_280/0",
                "tt": "《星战》伊萨克专访 试镜半小时就获得了角色",
                "vid": "m0019oaw3sx"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/k00192azoqw_496_280/0",
                "tt": "《星战》专访“布蕾尼“ 我的角色看不出性别",
                "vid": "k00192azoqw"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/i0019nttl3z_496_280/0",
                "tt": "《星战》专访大反派 十字型光剑隐射我性格",
                "vid": "i0019nttl3z"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/v0019v6qeaa_496_280/0",
                "tt": "《星战》导演专访 星战不是科幻是童话",
                "vid": "v0019v6qeaa"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/u0019e3m2er_496_280/0",
                "tt": "《星战》奥斯卡女配专访 Maz的创作以我为灵感",
                "vid": "u0019e3m2er"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/o01775t0i0o_496_280/0",
                "tt": "蘑菇君第19期：星战一触即发 约翰波耶加喊你一起原力觉醒",
                "vid": "o01775t0i0o"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/f0179ub95dv_496_280/0",
                "tt": "《星战7》上海首映 影院上演超级变变变",
                "vid": "f0179ub95dv"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/q0019ru7dmi_496_280/0",
                "tt": "《星球大战7》幕后特辑 千年隼飞船霸气现身",
                "vid": "q0019ru7dmi"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/j00188o4462_496_280/0",
                "tt": "《星球大战：原力觉醒》正式版预告首发 开启太空传奇震撼篇章",
                "vid": "j00188o4462"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/l01747wk0np_496_280/0",
                "tt": "《星球大战》鹿晗任中国大使 邀你看星战",
                "vid": "l01747wk0np"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/q001962lbgp_496_280/0",
                "tt": "《星球大战：原力觉醒》电视预告 风暴兵军队阵仗浩大",
                "vid": "q001962lbgp"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/f0016y2d58f_496_280/0",
                "tt": "《星球大战：原力觉醒》中文全长预告腾讯全球首发 哈里森福特回归登场",
                "vid": "f0016y2d58f"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/w0177g2rhzl_496_280/0",
                "tt": "《星球大战7》上海首映礼热血召集 风暴兵来了",
                "vid": "w0177g2rhzl"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/j00199rli7b_496_280/0",
                "tt": "《星球大战》鹿晗任大使 小鹿参与星战中国宣传",
                "vid": "j00199rli7b"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/e0018gfeia7_496_280/0",
                "tt": "《星球大战：原力觉醒》电视宣传片 机器人BB-8圆润抢镜",
                "vid": "e0018gfeia7"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/e0016ziyy4x_496_280/0",
                "tt": "《星球大战：原力觉醒》导演为上影节影迷送祝福",
                "vid": "e0016ziyy4x"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/u0016eulbvm_496_280/0",
                "tt": "2015星球大战庆典全程回顾 主创齐聚粉丝飙泪",
                "vid": "u0016eulbvm"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/r0016r8iioo_496_280/0",
                "tt": "2015星球大战庆典宣传片",
                "vid": "r0016r8iioo"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/j00150abvit_496_280/0",
                "tt": "《星球大战：原力觉醒》中文预告首发 科幻经典原力觉醒",
                "vid": "j00150abvit"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/z00168c4711_496_280/0",
                "tt": "《星球大战7：原力觉醒》特辑 J·J·艾布拉姆斯问候",
                "vid": "z00168c4711"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/o0016et2f4r_496_280/0",
                "tt": "《星球大战前传1：幽灵的威胁》预告片",
                "vid": "o0016et2f4r"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/p0016kdw5f2_496_280/0",
                "tt": "《星球大战前传2：克隆人的进攻》预告片",
                "vid": "p0016kdw5f2"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/c0016yisv38_496_280/0",
                "tt": "《星球大战前传3：西斯的复仇》预告片",
                "vid": "c0016yisv38"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/c00168adt2l_496_280/0",
                "tt": "《星球大战4：新希望》预告片",
                "vid": "c00168adt2l"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/d0016es340s_496_280/0",
                "tt": "《星球大战5：帝国反击战》预告片",
                "vid": "d0016es340s"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/h0016bwn0na_496_280/0",
                "tt": "《星球大战6：绝地归来》预告片",
                "vid": "h0016bwn0na"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/z0016v6mute_496_280/0",
                "tt": "《星战》系列10大激斗瞬间",
                "vid": "z0016v6mute"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/c0016lrl18r_496_280/0",
                "tt": "愤怒的小鸟版《星球大战》",
                "vid": "c0016lrl18r"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/p00168hvcgz_496_280/0",
                "tt": "皮克斯版《星球大战》",
                "vid": "p00168hvcgz"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/z0016q7f7re_496_280/0",
                "tt": "乐高版《星球大战》",
                "vid": "z0016q7f7re"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/a0015ru4hd7_496_280/0",
                "tt": "《星球大战7》幕后花絮 沃维克·戴维斯确定回归",
                "vid": "a0015ru4hd7"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/k0131envsl0_496_280/0",
                "tt": "《星球大战7》电影布景泄漏，超震撼布景！",
                "vid": "k0131envsl0"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/r0016gr5d9g_496_280/0",
                "tt": "星球大战：原力觉醒",
                "vid": "r0016gr5d9g"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/z0016r716v9_496_280/0",
                "tt": "《星球大战7：原力觉醒》制作特辑",
                "vid": "z0016r716v9"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/g0017s2kvlm_496_280/0",
                "tt": "2015年星战庆典精彩回顾",
                "vid": "g0017s2kvlm"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/b0159km1f6a_496_280/0",
                "tt": "《星球大战：原力觉醒》先导幕后花絮",
                "vid": "b0159km1f6a"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/d00186sigvv_496_280/0",
                "tt": "《星球大战：原力觉醒》发布预告 长城之巅原力觉醒",
                "vid": "d00186sigvv"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/i0178kkqmm8_496_280/0",
                "tt": "《星球大战：原力觉醒》全球IMAX票房横扫纪录",
                "vid": "i0178kkqmm8"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/c0019b38nln_496_280/0",
                "tt": "什么鬼！米老鼠唐老鸭穿越到《星战7》",
                "vid": "c0019b38nln"
            }, {
                "screenshot": "http://shp.qpic.cn/qqvideo_ori/0/a01804i7acv_496_280/0",
                "tt": "内地票房排行榜 《星战7》首周票房3.4亿夺冠",
                "vid": "a01804i7acv"
            }],
            "prevue": {
                "title": "《星球大战》中国版预告 暴风兵集结震撼空战开启",
                "link": "p0175w94dyr"
            }
        }

    }
}];
