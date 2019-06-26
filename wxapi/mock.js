const banners = {
  data: [{
      imgurl: "/assets/images/banner1.jpg",
      idnum: "lb1"
    },
    {
      imgurl: "/assets/images/banner2.jpg",
      idnum: "lb2"
    },
    {
      imgurl: "/assets/images/banner3.jpg",
      idnum: "lb3"
    },
    {
      imgurl: "/assets/images/banner4.jpg",
      idnum: "lb4"
    }
  ]
}

const category = {
  "data": {
    'A': [{
        name: '手机'
      },
      {
        'picture': '//i8.mifile.cn/b2c-mimall-media/86020260a41e530fdc1f2f0b67ed5dd1!120x120.png',
        'desc': '小米8'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/9e83a65a8bd46880870173c43f514b7c!120x120.png',
        'desc': '小米8 SE'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
        'desc': '小米MIX 2S'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/96d88d3beb17fc78fb930afe2f313f14!120x120.png',
        'desc': '小米Max 3'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/32468f88d5ef767f43044d7db46960a2!120x120.png',
        'desc': '小米6X'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/745cd6cbffce6a1c1c1cafbd5abbfed0!120x120.png',
        'desc': '黑鲨游戏手机'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b!120x120.png',
        'desc': '小米MIX 2'
      }, {
        'picture': '//i8.mifile.cn/b2c-mimall-media/88bc9af6c3bd4e7a695060fe628971e8!120x120.png',
        'desc': '小米Max 2'
      }
    ],
    'B': [{
      name: '电视'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/ae525d6481ad090edc97ac64ed93e048!120x120.png',
      'desc': '32-40英寸'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/de645bfe55dd46d3fc5ec78a8755a644!120x120.jpg',
      'desc': '43英寸'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/cf05e214d431795006e1073765aac9c5!120x120.jpg',
      'desc': '49-50英寸'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/07037fbe905f42477d4816ee64d857b5!120x120.jpg',
      'desc': '55英寸'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/bf2dc71cbf6fa8413b7ade09719155a0!120x120.jpg',
      'desc': '65-75英寸'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/39d81eb1904706403a9aa8685c6ab35e!120x120.jpg',
      'desc': '激光投影电视'
    }, ],
    'C': [{
      name: '电脑'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/2e24730eb6fb2963b9b59493a6e5a0c7!120x120.jpg',
      'desc': '平板'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/c03c93d66750dabd664533642b5b2ddd!120x120.png',
      'desc': '八代游戏本'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/ccad3ac9a43a21a606a392cf6a14b091!120x120.jpg',
      'desc': '游戏本'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/0643559b70964014c1d672cc783121d2!120x120.jpg',
      'desc': '笔记本15.6\"'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/8a9485f0-3b11-9d50-cbaa-1ee1cc0936cd!120x120.png',
      'desc': '笔记本13.3\" '
    }, {
      'picture': '//i8.mifile.cn/v1/a1/78e8a82a-1ef7-453b-5a07-d8394081ae2e!120x120.png',
      'desc': '笔记本12.5\"'
    }],
    'D': [{
      name: '家电'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/3f00551566f5b5f08f843403d8688a84!120x120.png',
      'desc': '空调'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/91eae10cc3b97bbb31d17048689a3e64!120x120.jpg',
      'desc': '净化器'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/d7252fb58f592cd9a889ffb795c2936e!120x120.png',
      'desc': '落地扇'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/101e2128-624d-ce9f-973f-50b868f8036a!120x120.png',
      'desc': '扫地机'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/fcc4ecc8a1f9c02387b4bd3658d2dea0!120x120.jpg',
      'desc': '米家投影仪'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/8067837a77601ae4c7c784b97378c352!120x120.jpg',
      'desc': '净水器'
    }],
    'E': [{
      name: '路由器'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/d476bc82dbb8e04cfbd4191bb5099ac0!120x120.jpg',
      'desc': '路由器4C'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/45783652edc68726f36e97c76551da18!120x120.png',
      'desc': '路由器4Q'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/4a2ad549aa584ccca8b2b5b4b3dc141f!120x120.jpg',
      'desc': '路由器4'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/651a9878ffafc9e9a053d430fedddaa1.png?thumb=1&w=120&h=120',
      'desc': '路由器Pro'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/57a598ecdccfd96d2006028d590699e3!120x120.jpg',
      'desc': '小米路由器 HD'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/a2737095b78bc41f0b24e69ab5d50435!120x120.jpg',
      'desc': '小米路由器3A'
    }],
    'F': [{
      name: '出行'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/6c35232de6adf01edf626a01c7947f1c!120x120.png',
      'desc': '平衡车'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/13434bffc3b94eccc70f29ac2ede378a!120x120.jpg',
      'desc': '滑板车'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/942957aeee2db7a21bec24739c9698b5!120x120.jpg',
      'desc': '自行车'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/27758cdd537d224dd6997512c561ec21!120x120.jpg',
      'desc': '智能后视镜'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/50658c6368c4638b15eb692a9c2e31e5!120x120.jpg',
      'desc': '智能记录仪'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/61472c3fcd181959055551e5c73aafec!120x120.jpg',
      'desc': '车载逆变器'
    }],
    'G': [{
      name: '穿戴'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/aba8aeb2ae0b44e46fd9d5ed83bb3a99!120x120.png',
      'desc': '手环'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/d15b7dc7adbf00177677b22166e66a55!120x120.png',
      'desc': '智能手表'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/11d94f5d911f2d9713d5bd5b374c2ae1!120x120.jpg',
      'desc': 'VR'
    }],
    'H': [{
      name: '智能'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60c481917f13192c4c98e1503c967b4a.png?thumb=1&w=120&h=120',
      'desc': '智能家庭'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c97e1f3665ce0d2b1fe33f917c6a38ef.png?thumb=1&w=120&h=120',
      'desc': '无人机'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/39d9e95e0eca92582b61820a7bee39cf!120x120.jpg',
      'desc': '摄像机'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb492da9536e6c4e737e5e74e59f2331.png?thumb=1&w=120&h=120',
      'desc': '照相机'
    }],
    'I': [{
      name: "电源"
    }, {
      'picture': '//i8.mifile.cn/v1/a1/3563cadb-795d-2240-c83d-9aeedd67ff4e!120x120.jpg',
      'desc': '移动电源'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/79de341c267f445286a356c6e898ea8c!120x120.jpg',
      'desc': '随身手电'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/132bd6fa010d6df05e062c05473d3674!120x120.jpg',
      'desc': 'ZMI充电宝'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/f1730220e426bfdd9c0ca0e257a8a35b!120x120.jpg',
      'desc': '电源配件'
    }],
    'J': [{
      name: '个护'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/3f31f669e346a05df76c673bf48378b4!120x120.jpg',
      'desc': '剃须刀'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/fbc14b5b4f7c06b53e1e70af21c5784a!120x120.png',
      'desc': '牙刷'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/4845678454b5190991de94cfd4d99654!120x120.jpg',
      'desc': '体重秤'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/T14BVjB_YT1R4cSCrK!120x120.png',
      'desc': '血压计'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/5304c138850e21ce2586c6658ea712f9!120x120.png',
      'desc': '体温计'
    }],
    'K': [{
      name: '灯具'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/407abb8cd9df8e5b524e43bc2f7048c6!120x120.jpg',
      'desc': '吸顶灯'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/4f1f3423af646b5182dd211ac7be7eaf!120x120.jpg',
      'desc': '台灯'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/015406a29c57c055210fd2364ab06a07!120x120.jpg',
      'desc': '床头灯'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/9280e02454fb1f17ace2c595c2ea6881!120x120.jpg',
      'desc': '夜灯'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/8df34177bd33bc990b90d4505fa0eaf2!120x120.jpg',
      'desc': '筒灯'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/c4ecc8b98846f10c1b36cd503723d405!120x120.jpg',
      'desc': '灯泡'
    }],
    'L': [{
      name: '儿童'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/dbfe1ea1c2c5132eb6b88857798dde89!120x120.jpg',
      'desc': '儿童手表'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/af51d715f00e1fab7b59a62909235116!120x120.jpg',
      'desc': '早教启智'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/553b5c01820c844565abe64e50bba323!120x120.jpg',
      'desc': '遥控电动'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/afd8566fb23e3f9052c8bef885ef57f1!120x120.jpg',
      'desc': '益智积木'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/445fe5c8099b0f238bf8aa173bcfdf17!120x120.jpg',
      'desc': '儿童滑板车'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/2e088409a099ecbc1e305623f79ec8e7!120x120.jpg',
      'desc': '儿童书包'
    }],
    'M': [{
      name: '插线板'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/2f68168635f76716669e70d3b0299b3d!120x120.jpg',
      'desc': '插线板 含USB'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/319cc63ce3fdcd15d0c6ca77c30de4b1!120x120.png',
      'desc': '插线板 '
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/c67b564ee596efda00bfc5ff5b282ad6!120x120.jpg',
      'desc': '转换器'
    }],
    'N': [{
      name: '音频'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/2b68ff304061d1e8bec551b26879db13!120x120.jpg',
      'desc': '小爱音箱'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/11ad3681debb4a8d59a2ed600ef8bb5b!120x120.png',
      'desc': '线控耳机'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/7b45823a-9913-5871-55c1-82b83c92ec32!120x120.jpg',
      'desc': '蓝牙耳机'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/eead143a-3672-f86b-75cc-06dcc1492c33!120x120.jpg',
      'desc': '头戴式耳机'
    }],
    'O': [{
      name: '箱包'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/f8063766da26a8c01c7b49cbe5628e74!120x120.png',
      'desc': '旅行箱'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11a4655745ee2f19fdc356f3fba57648.png?thumb=1&w=120&h=120',
      'desc': '双肩包'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/ca3ca7638dfa0bab1afb8c395d3f6f5d!120x120.jpg',
      'desc': '钱包'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/946a645d030839664a48d2e160a4c7e2!120x120.jpg',
      'desc': '胸包'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/3c6e95af5627c536655e89a5d8f9ad8e!120x120.jpg',
      'desc': '收纳包'
    }],
    'P': [{
      name: '生活'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/6ab0453a9db0f0cd9709fefd08d54e75!120x120.jpg',
      'desc': '驱蚊器'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a8eba1e2d75beba2daad2678cf0718bb.png?thumb=1&w=120&h=120',
      'desc': '眼镜'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/e4fb4c52532c098af5b1015aa4c61aec!120x120.jpg',
      'desc': '雨伞'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/1454d4d897d954649c051d6628021455!120x120.png',
      'desc': '床垫'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/1c27d0d59d56aa38b8518cbf302de0cf!120x120.png',
      'desc': '枕头'
    }],
    'Q': [{
      name: '配件'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/4132366589e457f407b918fe48c89cb1!120x120.jpg',
      'desc': '数据线'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/32f27d7c236023926c69f61fd0660bc9!120x120.jpg',
      'desc': '车充'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/4744f463c5f2b375525bbf61ec5addaa!120x120.png',
      'desc': '充电器'
    }, {
      'picture': '//i8.mifile.cn/v1/a1/4a881b13-d65b-3d63-2bcd-063697074c81!120x120.jpg',
      'desc': '自拍杆'
    }],
    'R': [{
      name: '家装'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/32b41ce4670faa718b9647c48ae65800!120x120.png',
      'desc': '客厅'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/3bccdfec22c2671a2f79edf7a8833417!120x120.png',
      'desc': '餐厅'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/d6bdc953c9b2905e4a57f33b997ad3dd!120x120.png',
      'desc': '主卧'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/a9c118a005778b0cc18f2771c2a9487e!120x120.png',
      'desc': '次卧'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/500a6da09138e29b585a60e22a2dbd11!120x120.png',
      'desc': '厨房'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/2ee7bd8fd5eff33a2fe017c7ca475fb1!120x120.png',
      'desc': '卫生间'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/7468b7d627ea76a6ef9a234023d3dae3!120x120.png',
      'desc': '玄关'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/a39ee4c212bde56e107d9e3e0a5dbff5!120x120.png',
      'desc': '阳台'
    }],
    'S': [{
      name: '礼品'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a168c437a5742f0c155fc240f4380de.png?thumb=1&w=120&h=120',
      'desc': '送长辈'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/de206b80adc6dd2af3bd968e5b5e6ec0.png?thumb=1&w=120&h=120',
      'desc': '送孩子'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/58becaea14744c9ec2d0f576a7413395.png?thumb=1&w=120&h=120',
      'desc': '送男生'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/78da4524339eaca2763fbc591a4fe3c1.png?thumb=1&w=120&h=120',
      'desc': '送女生'
    }],
    'T': [{
      name: '服务'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/fd145936f30c4e3a9a48fa6b728d6aa9!120x120.png',
      'desc': '手机保障服务'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/fdf52f6a86e364b6212f553d6347f5e4!120x120.png',
      'desc': '以旧换新'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/c7038dcf41dfacafedf56beb35075e10!120x120.png',
      'desc': '手机上门维修'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/c943cf55a17f8593db059f16b8b8ce2f!120x120.png',
      'desc': '安装服务'
    }],
    'U': [{
      name: '米粉卡'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/f1c689466a6d309a7dd3d0215c734846!120x120.png',
      'desc': '日租卡'
    }, {
      'picture': '//i8.mifile.cn/b2c-mimall-media/ee289a60160dd1e7fce6c55bc89c30c1!120x120.png',
      'desc': '自由日租卡'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ceaba659be7a72f8da989c5d85a39c9.jpg?thumb=1&w=120&h=120',
      'desc': '吃到饱'
    }, {
      'picture': '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/631f60b5b8cf50ecb04e2c9aadbd7161.jpg?thumb=1&w=120&h=120',
      'desc': '任我行'
    }]
  }
}

const goodDetail = {
  data: [{
        id: "11",
        name: "小米8 SE",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/7da4043a-1b7d-72af-6d1c-c0ffca364f07.webp",
           "//i8.mifile.cn/v1/a1/b523499a-ec22-37fc-8165-a1f5eae1e82c.webp",
           "//i8.mifile.cn/v1/a1/a64944d5-3213-66f0-395d-c11229cfc6f1.webp",
           "//i8.mifile.cn/v1/a1/030d4a21-fd40-a736-9434-2689cd735d7f.webp"
        ],
        brief: [
           "三星 AMOLED 全面屏 小屏旗舰 / 骁龙710处理器 / AI 超感光双摄 / 前置2000万柔光自拍",
           "「4GB+64GB，限时秒杀，立减150元」「6GB+128GB，限时秒杀，立减100元」"
        ],
        defaultData: {
           memory: "4GB+64GB",
           color: "亮蓝",
           vIndex: "0",
           cIndex: "3",
           price: [
              "1699元",
              "1799元"
           ],
           img: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aab2a24e48db1cf40508734620070705.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "5.88英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "双摄像头",
           details: "1200万+500万像素"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "持久待机",
           details: "3120mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "高速",
           details: "4GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "2244×1080"
        }],
        versionData: {
           version: [{
              memory: "4GB+64GB 全网通",
              price: [
                 "1699元",
                 "1799元"
              ]
           }, {
              memory: "6GB+64GB 全网通",
              price: [
                 "1899元",
                 "1799元"
              ]
           }, {
              memory: "6GB+128GB 全网通",
              price: [
                 "2199元",
                 "2299元"
              ]
           }],
           colorImg: [{
                 choose: "金色",
                 src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/456bfe46017c325925983fdc52d5d943.jpg"
              },
              {
                 choose: "深灰",
                 src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/295bcfc6a55be1ab15080cd4e66c6de9.jpg"
              },
              {
                 choose: "亮红",
                 src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a3efe4712c08c5c98bc84f5ff0bbca9.jpg"
              },
              {
                 choose: "亮蓝",
                 src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aab2a24e48db1cf40508734620070705.jpg"
              }
           ]

        },
        details_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ba0bb1f78eec5d7ca245d17d49960f1.jpg?w=1080&h=697&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d845e71e2325944286b1e549ca266479.jpg?w=1080&h=1249&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7aeaa844b56cbbf64948eb1999719d41.jpg?w=1080&h=843&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d5a185f5428b4dc513b3668631d20364.jpg?w=1080&h=697&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d77ff5570dab17aa590f7bd855aa4cf7.jpg?w=1080&h=1173&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/deecc6d5b1bde25aaa744fc490c8f46b.jpg?w=1080&h=641&bg=FFFFFF"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5258c171c19a9adb49bea1f48fe2bd40.jpg?w=1080&h=1359&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8e3e6eb9ded8fa00b34abdaf8f96ae1d.jpg?w=1080&h=922&bg=FFFFFF",
           "//i8.mifile.cn/v1/a1/458b38b1-ac23-8533-cac1-5534920523c4.webp?w=1080&h=1345&bg=F7F7F7",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/113a214dbdc4bfdabfc67672ac5534da.jpg?w=1080&h=1394&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7dc7500024a658c7378a6d45aca16203.jpg?w=1080&h=1492&bg=FFFFFF"
        ]
     },
     {
        id: "12",
        name: "红米Note 5",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/3d57cefd-e811-01ff-ea5d-91e6f538ef45.webp",
           "//i8.mifile.cn/v1/a1/ad1a7b8d-ce3c-6c53-8dc7-ed49c9725288.webp",
           "//i8.mifile.cn/v1/a1/a35d6aa8-b659-317b-555b-c7fedef7ca7d.webp",
           "//i8.mifile.cn/v1/a1/d785fdc2-2c05-5d7c-1427-777730713b5d.webp"
        ],
        brief: [
           "红米国民品质，拍照专家 / AI双摄/5.99”全面屏 / 骁龙636处理器/4000mAh大电量 / 超过10000 项严苛检测，70%以上供应商与苹果供应商重叠",
           "「3GB+32GB，限时秒杀，立省230元」「6GB+128GB，立省250元」"
        ],
        defaultData: {
           memory: "3GB+32GB",
           color: "黑色",
           vIndex: "0",
           cIndex: "1",
           price: [
              "899元",
              "1099元"
           ],
           img: "//i8.mifile.cn/a1/pms_1521164686.19516467.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "5.99英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "双摄像头",
           details: "1200万+500万像素"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "超长待机",
           details: "4000mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "流畅",
           details: "3GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "2160×1080"
        }],
        versionData: {
           version: [{
                 memory: "3GB+32GB 全网通",
                 price: [
                    "899元",
                    "1099元"
                 ]
              }, {
                 memory: "4GB+64GB 全网通",
                 price: [
                    "1129元",
                    "1399元"
                 ]
              }, {
                 memory: "6GB+64GB 全网通",
                 price: [
                    "1399元",
                    "1699元"
                 ]
              }, {
                 memory: "6GB+128GB 全网通",
                 price: [
                    "1499元",
                    "1699元"
                 ]
              }
           ],
           colorImg: [{
                 choose: "金色",
              src: "//i8.mifile.cn/a1/pms_1521164691.57026316.jpg"
              },
              {
                 choose: "黑色",
                 src: "//i8.mifile.cn/a1/pms_1521164686.19516467.jpg"
              },
              {
                 choose: "玫瑰金",
                 src: "//i8.mifile.cn/a1/pms_1521164695.63232423.jpg"
              },
              {
                 choose: "魔力蓝",
                 src: "//i8.mifile.cn/a1/pms_1521164697.6548930.jpg"
              }
           ]

        },
        details_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5fad70967127a4fc6a37663476c8d974.jpg?w=1080&h=1520&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/93066cd5b8b576559f194ce4119e1d4d.jpg?w=1080&h=700&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8c00c1af67eb33d3610c69e756eb50e1.jpg?w=1080&h=1267&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/098fe15f1e0bce0234541719235fe263.jpg?w=1080&h=1400&bg=FFFFFF"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/536ceab7c8029a10c11336f339f98d0e.jpg?w=1080&h=1285&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b42515d76016d5089fa6beaead23edbe.jpg?w=1080&h=889&bg=FFFFFF",
           "//i8.mifile.cn/v1/a1/f7153371-59c2-17ec-dccf-7b66d9f59e62.webp?w=1080&h=1132&bg=F7F7F7",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8d8b860e70c097df419d557ae43a6fe1.jpg?w=1080&h=1648&bg=FFFFFF"
        ]
     },
     {
        id: "13",
        name: "红米6 Pro",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/80186259-f764-ee4b-12f1-37d0a74faa5b.webp",
           "//i8.mifile.cn/v1/a1/3f0f203b-16fc-2e25-c742-7a6dbae3e331.webp",
           "//i8.mifile.cn/v1/a1/f5d37995-a285-1208-43cc-899f8fb29b99.webp",
           "//i8.mifile.cn/v1/a1/fb398c66-67b9-30a3-ae48-e1715fcbb4a1.webp"
        ],
        brief: [
           "高颜值大电量 红米旗舰 / 异形全面屏 19:9 FHD＋ / 后置1200万 AI双摄",
           "「3GB+32GB 限时秒杀，立省130元，加赠小米移动电源2」"
        ],
        defaultData: {
           memory: "3GB+32GB",
           color: "樱花粉",
           vIndex: "0",
           cIndex: "2",
           price: [
              "869元",
              "999元"
           ],
           img: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4949dcc876745c6079ed815578c6f422.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "5.84英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "双摄像头",
           details: "1200万+500万像素"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "超长待机",
           details: "4000mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "流畅",
           details: "3GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "2280×1080"
        }],
        versionData: {
           version: [{
              memory: "3GB+32GB 全网通",
              price: [
                 "899元",
                 "1099元"
              ]
           }, {
              memory: "4GB+32GB 全网通",
              price: [
                 "1199元",
                 ""
              ]
           }, {
              memory: "4GB+64GB 全网通",
              price: [
                 "1249元",
                 "1299元"
              ]
           }
           ],
           colorImg: [{
              choose: "流沙金",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/194db055250e0a3aefd060f120d57696.jpg"
           },
           {
              choose: "曜石黑",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb4641a0857d2871f671247b8818b773.jpg"
           },
           {
              choose: "樱花粉",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4949dcc876745c6079ed815578c6f422.jpg"
           },
           {
              choose: "巴厘蓝",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3b110d7d81271063154a9a0240e819ec.jpg"
           }
           ]

        },
        details_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab53280fe158d09ff2e566ba2bb328d3.jpg?w=1080&h=1909&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d8a6647a13369bd3cbe5549ca8436b97.jpg?w=1080&h=952&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/29d6a1523ab22ddfbe9c8141adb6cf0a.jpg?w=1080&h=445&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b6e632429333a2ea69a87c034b2a7c73.jpg?w=1080&h=1106&bg=FFFFFF"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5a093d416b5618464bf0941df51a2eea.jpg?w=1080&h=957&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/136783164c4f7ec239ac9a2878a547d1.jpg?w=1080&h=1123&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/29b01a76be9df1490c7422df3d618dc0.jpg?w=1080&h=1120&bg=FFFFFF"
        ]
     }, {
        id: "14",
        name: "小米Max 2",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/e0f6d926-d4b9-050f-6e92-47d1dd3a9a62.webp",
           "//i8.mifile.cn/v1/a1/462aff6e-5a0a-3c01-0680-b39f8689e868.webp",
           "//i8.mifile.cn/v1/a1/bb9913f2-968c-f623-3670-accfdd0c9755.webp"
        ],
        brief: [
           "6.44''大屏 / 5300mAh 充电宝级的大电量 / 大像素相机 / 轻薄全金属  / ​4GB 大内存 / 骁龙八核处理器",
           ""
        ],
        defaultData: {
           memory: "4GB+32GB",
           color: "金色",
           vIndex: "0",
           cIndex: "1",
           price: [
              "1199",
              "1399"
           ],
           img: "//i8.mifile.cn/v1/a1/715f581f-cf79-0c92-139e-2eb1f4fe7489.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "6.44英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "高清拍照",
           details: "1200万"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "超长待机",
           details: "5300mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "高通",
           details: "4GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "1920×1080"
        }],
        versionData: {
           version: [{
              memory: "4GB+32GB 全网通",
              price: [
                 "1199元",
                 "1399元"
              ]
           }, {
              memory: "4GB+64GB 全网通",
              price: [
                 "1169元",
                 ""
              ]
           }, {
              memory: "4GB+128GB 全网通",
              price: [
                 "1699元",
                 "1999元"
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//i8.mifile.cn/v1/a1/ad6d2229-ef65-2ac4-4db4-c08f4a8958bc.jpg"
           },
           {
              choose: "金色",
              src: "//i8.mifile.cn/v1/a1/715f581f-cf79-0c92-139e-2eb1f4fe7489.jpg"
           }
           ]
        },
        details_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eb3c78b36400ab8a54ac0ba945f37529.jpg?w=1080&h=1998&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/141c7919974e65737fb39882de834af9.jpg?w=1080&h=1721&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/349b14ea350e50d8c83046da1fec87c6.jpg?w=1080&h=936&bg=FFFFFF"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2f223264ca13c42d7eddd12383d2087c.jpg?w=1080&h=4988&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0d99a9d99e0e55a14a1991e4a4d6c3ee.jpg?w=1080&h=4091&bg=FFFFFF",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e72ec3fea1d84cc312354626c63ec095.jpg?w=1080&h=4654&bg=FFFFFF"
        ]
     }, {
        id: "15",
        name: "黑鲨游戏手机 液冷更快",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/852af429-caf0-4dba-799c-38b327344773.webp",
           "//i8.mifile.cn/v1/a1/7864e400-dab5-4a64-ac0d-2c5f2e8dd89a.webp",
           "//i8.mifile.cn/v1/a1/046a6185-f8f0-40b3-fc8c-0674be0f12f2.webp"
        ],
        brief: [
           "液冷散热 / 独立图像处理芯片 / 一键游戏模式 / 骁龙845处理器 / 18:9全面屏 / 前后2000万摄像头",
           "「6GB+64GB立减100元」「8GB+128GB/8GB+256GB立减300元」「全系赠黑鲨游戏手柄」"
        ],
        defaultData: {
           memory: "6GB+64GB",
           color: "极夜黑",
           vIndex: "0",
           cIndex: "0",
           price: [
              "2899元",
              "2999元"
           ],
           img: "//i8.mifile.cn/a1/pms_1524032263.57473115.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "5.99英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "双摄像头",
           details: "1200万+200万像素"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "超长待机",
           details: "4000mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "极速畅玩",
           details: "6GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "2160×1080"
        }],
        versionData: {
           version: [{
              memory: "6GB+64GB 全网通",
              price: [
                 "899元",
                 "1099元"
              ]
           }, {
              memory: "8GB+128GB 全网通",
              price: [
                 "3199元",
                 "3499元"
              ]
           }, {
              memory: "8GB+256GB 全网通",
              price: [
                 "3699元",
                 "3999元"
              ]
           }
           ],
           colorImg: [{
              choose: "极夜黑",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bef1311b94ccb05cf36e796fb3d1b30.jpg"
           },
           {
              choose: "苍穹灰",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6cb721ddd8ded974dfd4cfa86e6c0582.jpg"
           }
           ]

        },
        details_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7f19a0aa6e5c035acad80615b37abc5d.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f7b6b613b84028866585c791b967d2e0.jpg"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ef213b1266d01ccea80c3250bf20609.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f585f6f17df4edf89fae2439b23801a1.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9bb4bdf710b92c1d629838322e852c6c.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/62a3382a87c544fdbcd68d3d9baa520f.jpg"
        ]
     }, {
        id: "16",
        name: "红米5 Plus",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/4eecee24-5e9f-1a07-f426-f21338b7b577.webp",
           "//i8.mifile.cn/v1/a1/e09ce5be-6e4b-655e-87df-ad7f2e9c4993.webp",
           "//i8.mifile.cn/v1/a1/9b71c0f7-79cf-a654-f0b0-df620064defd.webp",
           "//i8.mifile.cn/v1/a1/a8f56b0f-849a-051c-ab08-32218ae70cf9.webp"
        ],
        brief: [
           "全面屏 / 4000mAh大电量 / 前置柔光自拍 / 14nm骁龙八核处理器",
           ""
        ],
        defaultData: {
           memory: "3GB+32GB",
           color: "金色",
           vIndex: "0",
           cIndex: "2",
           price: [
              "999元",
              ""
           ],
           img: "//i8.mifile.cn/v1/a1/a92fdbbd-9ac8-3f6a-75a2-426d31ca3116.webp"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "大屏",
           details: "5.99英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png",
           param: "高清拍照",
           details: "1200万"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png",
           param: "超长待机",
           details: "4000mAh"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png",
           param: "流畅",
           details: "3GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png",
           param: "运营商网络",
           details: "4G全网通"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "屏幕清晰度",
           details: "2160×1080"
        }],
        versionData: {
           version: [{
              memory: "3GB+32GB 全网通",
              price: [
                 "999元",
                 ""
              ]
           }, {
              memory: "4GB+32GB 全网通",
              price: [
                 "1299元",
                 ""
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//i8.mifile.cn/v1/a1/ddd6e728-83ad-6033-277f-212928ad116a.webp"
           },
           {
              choose: "玫瑰金",
              src: "//i8.mifile.cn/v1/a1/bff920ec-553b-bb55-2fa1-90400e4d951c.webp"
           },
           {
              choose: "金色",
              src: "//i8.mifile.cn/v1/a1/a92fdbbd-9ac8-3f6a-75a2-426d31ca3116.webp"
           },
           {
              choose: "浅蓝色",
              src: "//i8.mifile.cn/v1/a1/fe813ef6-d187-ba5c-8bc6-c3edbead3f5e.webp"
           }
           ]

        },
        details_img: [
           "//i8.mifile.cn/v1/a1/e2595e57-0629-f542-2918-36f68afa1309.webp?w=1080&h=1920&bg=4DB8B1",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6c02e69334bafa6b54b86350f05879d4.jpg?w=1080&h=1200&bg=FFFFFF",
           "//i8.mifile.cn/v1/a1/3c875774-a28d-b9e8-6f70-a34505d9a7cd.webp?w=1080&h=1119&bg=232E39",
           "//i8.mifile.cn/v1/a1/9bdb5582-382e-dcf9-6eeb-8a6099775b16.webp?w=1080&h=1312&bg=58555E"
        ],
        param_img: [
           "//i8.mifile.cn/v1/a1/2416ceb1-7e8f-3675-5b2a-d9d6b22ffd4a.webp?w=1080&h=2202&bg=E2EAE7",
           "//i8.mifile.cn/v1/a1/b619c166-123a-ac03-4af5-15302be73bf9.webp?w=1080&h=1399&bg=FBFBFB",
           "//i8.mifile.cn/v1/a1/43791ee4-7826-d31e-5385-a05809c23f91.webp?w=1080&h=1886&bg=FCFCFC"
        ]
     }, {
        id: "21",
        name: "小米电视4A",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/8bc57432-97b8-2a53-1806-a72b3f58f1f0.webp",
           "//i8.mifile.cn/v1/a1/99c74004-5aa8-2c1f-6fe2-581ea2661a6d.webp",
           "//i8.mifile.cn/v1/a1/8250df68-4252-548c-6352-864e7efedaad.webp"
        ],
        brief: [
           "64位四核处理器 / 1GB+4GB大内存 / 高清液晶屏 / 第6代画质引擎 / 人工智能系统PatchWall / 轻至4kg",
           "【9月28日-10月7日“国庆特惠周”，立省120元！】"
        ],
        defaultData: {
           memory: "32寸",
           color: "黑色",
           vIndex: "0",
           cIndex: "0",
           price: [
              "879元",
              "999元"
           ],
           img: "//i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "屏幕尺寸",
           details: "32英寸"
        }, {
              imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
              param: "分辨率",
              details: "高清"
        }, {
              imgSrc: "https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
              param: "处理器",
              details: "64位四核"
        }, {
              imgSrc: "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
              param: "存储",
              details: "1GB+4GB"
        }, {
              imgSrc: "https://i8.mifile.cn/b2c-mimall-media/133a8f23d38e26f2eabead4695070f71.png",
              param: "HDMI",
              details: "2个"
        }
        ],
        versionData: {
           version: [{
              memory: "32英寸 ",
              price: [
                 "899元",
                 "1099元"
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg"
           }]
        },
        details_img: [
           "//i8.mifile.cn/v1/a1/e3b0c1e1-8495-d944-7f92-38446821d04d.jpg",
           "//i8.mifile.cn/v1/a1/aed99101-8c16-63b0-7734-1f4ad1c0bafe.jpg",
           "//i8.mifile.cn/v1/a1/0bc6d094-e9a0-1f98-7ec4-e2bd2979e047.jpg"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9b9c4bfa4c6fb25e7b043ca807431654.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/514ed4fc6d9dbef6a98e9abaeee06d3b.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aedf11a14342772a9fce172f7d134034.jpg"
        ]
     }, {
        id: "22",
        name: "43\"电视4A",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/9b34c0de-7407-fbba-8dde-ef40947f1ac5.webp",
           "//i8.mifile.cn/v1/a1/67031c46-8c12-133e-25b7-56cbbc277939.webp"
        ],
        brief: [
           "全高清屏 / 人工智能语音 / 1GB+8GB大内存 / 杜比音效 / 海量片源 / PatchWall",
           "【9月28日-10月7日“国庆特惠周”，立省300元！】"
        ],
        defaultData: {
           memory: " 青春版",
           color: "黑色",
           vIndex: "0",
           cIndex: "0",
           price: [
              "1399元",
              "1699元"
           ],
           img: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/48437e4f9e6d65d5adfdd51add78b59b.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "屏幕尺寸",
           details: "43英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "分辨率",
           details: "全高清"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
           param: "处理器",
           details: "64位四核"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
           param: "存储",
           details: "1GB+8GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/133a8f23d38e26f2eabead4695070f71.png",
           param: "HDMI",
           details: "2个"
        }
        ],
        versionData: {
           version: [{
              memory: "青春版",
              price: [
                 "1399元",
                 "1699元"
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/48437e4f9e6d65d5adfdd51add78b59b.jpg"
           }
           ]

        },
        details_img: [
           "//i8.mifile.cn/v1/a1/7a9f3eaf-627c-4350-578e-09c742275803.webp",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3b1d1db33b4b959e1e81ba6aafac52f6.jpg"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/41569458538670e9f2c279342ff60878.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b84d6a0915488517410bfb8835ee8ef0.jpg"
        ]
     }, {
        id: "23",
        name: "小米电视4A ",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/4db66a7a-4cbc-d05a-c3b3-1dbf6b413ecb.webp",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/de841794fcfe9bd6652f24497db805ff.jpg"
        ],
        brief: [
           "4K HDR / 人工智能 / 蓝牙语音遥控器 / 高性能 / 大存储 / 海量片源",
           "【9月28日-10月7日“国庆特惠周”，立省300元！】"
        ],
        defaultData: {
           memory: "50英寸",
           color: "黑色",
           vIndex: "0",
           cIndex: "0",
           price: [
              "1899元",
              "2199元"
           ],
           img: "//i8.mifile.cn/a1/pms_1516011154.79573723.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "屏幕尺寸",
           details: "50英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "分辨率",
           details: "4k超高清"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
           param: "处理器",
           details: "64位四核"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
           param: "存储",
           details: "2GB+8GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/133a8f23d38e26f2eabead4695070f71.png",
           param: "HDMI",
           details: "3个"
        }
        ],
        versionData: {
           version: [{
              memory: "50英寸",
              price: [
                 "1899元",
                 "2199元"
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//i8.mifile.cn/a1/pms_1516011154.79573723.jpg"
           }
           ]

        },
        details_img: [
           "//i8.mifile.cn/v1/a1/11cf6956-8267-2083-197d-33c86f6bebe8.webp",
           "//i8.mifile.cn/v1/a1/f6ae3b83-2702-6395-1c3d-b08770d6b94f.webp",
           "//i8.mifile.cn/v1/a1/2d9e0113-378b-deca-bfc8-654200eec0fa.webp"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6724ca6aa4192d7d7c369fa846876cdc.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/965de8fdc0c0fb7fd98be92a921a4b09.jpg"
        ]
     }, {
        id: "24",
        name: "小米电视4X ",
        swiper_img: [
           "//i8.mifile.cn/v1/a1/a84f02f7-ddf0-417b-eb8b-54b039677840.webp",
           "//i8.mifile.cn/v1/a1/ee70b3f7-8717-a26e-b746-849faec2ad2a.webp"
        ],
        brief: [
           "4K HDR | 超窄边 | 人工智能语音 | 杜比音效 | 钢琴烤漆 | 2GB+8GB 大内存",
           "【9月28日-10月7日“国庆特惠周”，立省500元！】"
        ],
        defaultData: {
           memory: "55英寸",
           color: "黑色",
           vIndex: "0",
           cIndex: "0",
           price: [
              "2299元",
              "2799元"
           ],
           img: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4129babe8bee3dd1c9ddcbb112b319f5.jpg"
        },
        details_param: [{
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png",
           param: "屏幕尺寸",
           details: "55英寸"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png",
           param: "分辨率",
           details: "4k超高清"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png",
           param: "处理器",
           details: "64位四核"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png",
           param: "存储",
           details: "2GB+8GB"
        }, {
           imgSrc: "https://i8.mifile.cn/b2c-mimall-media/133a8f23d38e26f2eabead4695070f71.png",
           param: "HDMI",
           details: "3个"
        }
        ],
        versionData: {
           version: [{
              memory: "55英寸",
              price: [
                 "899元",
                 "1099元"
              ]
           }
           ],
           colorImg: [{
              choose: "黑色",
              src: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4129babe8bee3dd1c9ddcbb112b319f5.jpg"
           }
           ]

        },
        details_img: [
           "//i8.mifile.cn/v1/a1/8dc2a6c0-0c7f-be6a-4173-81881258cc04.webp",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2eef404e93347d5cb468335c16ef9b0b.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f12372be748bf98168f37a24fb84b068.jpg"
        ],
        param_img: [
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4848b0dcbea74a1495594de96a0b5196.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e6fd7a2d136c0f694d1a03b2382419a6.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efcf8fb3cf42496b0b3a21451fcb3e4a.jpg",
           "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5a389e4d1c6fe1e9c399fd584d7d3cfa.jpg"
        ]
     }
  ]
}

const goodList = {
  one:{
    url: "/assets/images/maojin.jpg",
    name: "最生活毛巾AIR",
    brief: "阿瓦提长绒棉/阿瓦提长绒棉/阿瓦提长绒棉/阿瓦提长绒棉/阿瓦提长绒棉/阿瓦提长绒棉/阿瓦提长绒棉/",
    price: "16.9",
    oldPrice: ""
  },
  section: [{
        id: "11",
        url: "//i8.mifile.cn/v1/a1/685330bb-cb82-c3c3-e3cf-106c9b9a70e6!360x360.webp",
        name: "小米平板 4",
        brief: "超长续航，骁龙660AIE",
        price: "1099元起",
        oldPrice: "",
        is_new: false,
        hasDiscount: false,
        discountUrl: ""
     },
     {
        id: "12",
        url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3ba9490bd6d7dec5d29e45435692b4fe.jpg?thumb=1&w=360&h=360",
        name: "红米Note 5",
        brief: "红米国民品质，拍照专家",
        price: "999元起",
        oldPrice: "1099元",
        is_new: false,
        hasDiscount: true,
        discountUrl: "//i8.mifile.cn/v1/a1/8e7dc797-6746-7467-d87b-932f7be41425.webp?w=180&h=48"
     },
     {
        id: "13",
        url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8461f6647dcbae7617b7783bd85396d.jpg?thumb=1&w=360&h=360",
        name: "红米6 Pro ",
        brief: "高颜值大电量 红米旗舰",
        price: "949元起",
        oldPrice: "999元",
        is_new: false,
        hasDiscount: true,
        discountUrl: "//i8.mifile.cn/v1/a1/ac9d1f9b-8615-09e0-4303-d2b43e971d03.webp?w=180&h=48"
     },
     {
        id: "14",
        url: "//i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70!360x360.webp",
        name: "小米Max 2",
        brief: "6.44\"大屏，5300mAh大电量",
        price: "1199元",
        oldPrice: "1399元",
        is_new: false,
        hasDiscount: true,
        discountUrl: "//i8.mifile.cn/v1/a1/b5c39dca-4ea6-90fd-ed3b-c807409c050b.webp?w=180&h=48"
     },
     {
        id: "15",
        url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ee44583e8167f3d250186069a26c1384.jpg?thumb=1&w=360&h=360",
        name: "黑鲨游戏手机 液冷更快",
        brief: "液冷散热，独立图像处理芯片",
        price: "2899元起",
        oldPrice: "2999元",
        is_new: false,
        hasDiscount: true,
        discountUrl: "//i8.mifile.cn/v1/a1/c9d1a2a8-624c-df83-9ee1-239bbe02e580.webp?w=180&h=48"
     },
     {
        id: "16",
        url: "//i8.mifile.cn/v1/a1/e7853ea5-1260-6cb2-91ed-2c539a87db0a!360x360.webp",
        name: "红米5 Plus",
        brief: "全面屏，4000mAh大电量",
        price: "999元起",
        oldPrice: "",
        is_new: false,
        hasDiscount: true,
        discountUrl: "//i8.mifile.cn/v1/a1/8e7dc797-6746-7467-d87b-932f7be41425.webp?w=180&h=48"
     }
  ]
}

const navdata = {
  data: [ { url:'/assets/images/phone.png',word: '手机'},
  { url: '/assets/images/tv.png', word: '电视'},
  { url: '/assets/images/pc.png', word: '电脑'},
  { url: '/assets/images/intelligent.png', word: '智能'},
  { url: '/assets/images/news.png', word: '新品' },
  { url:'/assets/images/phone.png',word: '手机'},
  { url: '/assets/images/tv.png', word: '电视'},
  { url: '/assets/images/pc.png', word: '电脑'},
  { url: '/assets/images/intelligent.png', word: '智能'},
  { url: '/assets/images/news.png', word: '新品' }
  ]
}

const findData = {
  navData: [
    {
      navUrl: '',
      imgSrc: '/assets/images/findH.png',
      text: '新品预约'
   }, {
      navUrl: '',
         imgSrc: '/assets/images/findA.png',
      text: '活动频道'
   }, {
      navUrl: '',
         imgSrc: '/assets/images/findS.png',
      text: '线下门店'
   }
  ],
  subjectsData: [
    {
      subjectUrl:'',
      subjectSrc:'/assets/images/findSO.jpg',
      text:'你所向往的智慧生活，小米为你实现',
      num: '3'
   },
   {
      subjectUrl:'',
      subjectSrc:'/assets/images/findSO.jpg',
      text:'你所向往的智慧生活，小米为你实现',
      num: '20'
   },
   {
      subjectUrl:'',
      subjectSrc:'/assets/images/findSO.jpg',
      text:'你所向往的智慧生活，小米为你实现',
      num: '15'
   },
   {
      subjectUrl:'',
      subjectSrc:'/assets/images/findSO.jpg',
      text:'你所向往的智慧生活，小米为你实现',
      num: ''
   },
  ]
}

const userData = {
  "goods": [
    {
      "img": "/assets/images/team.png",
      "text": "小米精品推荐",
      "state": "内测"
    }],
  "result":[
    {
      "img": "/assets/images/order.png",
      "text": "我的订单",
      "state": ""
    },
    {
      "img": "/assets/images/vip.png",
      "text": "会员中心",
      "state": ""
    },
    {
      "img": "/assets/images/coupon.png",
      "text": "我的有优惠码",
      "state": ""
    },
    {
      "img": "/assets/images/fcode.png",
      "text": "我的F码",
      "state": ""
    }],
  "setUp":[
  {
    "img": "/assets/images/setting.png",
    "text": "设置",
    "state": ""
  }]
}
export {
  banners,
  category,
  goodDetail,
  goodList,
  navdata,
  findData,
  userData
}