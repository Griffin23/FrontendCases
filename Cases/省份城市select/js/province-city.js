function Dsy() {
    this.Items = {};
}
Dsy.prototype.add = function (id, iArray) {
    this.Items[id] = iArray;
};
Dsy.prototype.Exists = function (id) {
    if (typeof (this.Items[id]) == "undefined") return false;
    return true;
};

var dsy = new Dsy();
//dsy.add("0", ["中国", "AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGUILLA", "ANTIGUAANDBARBUDA", "ARGENTINA", "ARUBA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELARUS", "BELGIUM", "BELIZE", "BERMUDA", "BHUTAN", "BOLIVIA", "BOSNIA-HERZEGOVINA", "BOTSWANA", "BOUVETISLAND", "BRAZIL", "BRITISHANTARCTI", "BRITISHINDIANOCEAN", "BRITISHVIRGINISLAN", "BRUNEI", "BULGARIA", "BURKINAFASO", "BURUNDI", "CAMBODIA", "CAMEROON", "CANADA", "CANTON,ENDERBURYISL", "CAYMANISLANDS", "CENTRALAFRICANREPU", "CHAD", "CHILE", "CHRISTMASISLAND", "COCOSISLANDS", "COLOMBIA", "COMOROS", "CONGO", "COOKISLAND", "COSTARICA", "COTED'LVOIRE", "CROATIA", "CUBA", "CYPRUS", "CZECHREPUBLIC", "CZECHOSLOVAKIA", "DEMOCRATICOFYEMEN", "DEMOCRATICPEOPLE'S", "DENMARK", "DJIBOUTI", "DOMINICA", "DOMINICANREPUBLIC", "ECUADOR", "EGYPT", "EHTIOPIA", "ELSALVADORC.A", "EQUATORIALGUINEA", "ESTONIA", "FALKLANDISLANDS", "FAROEISLANDS", "FIJI", "FINLAND", "FRANCE", "FRENCHGUIANA", "FRENCHPOLYNESIA", "FRENCHSOUTHERNANTA", "GABON", "GAMBIA", "GEORGIA", "GERMANY", "GHANA", "GIBRALTAR", "GREECE", "GREENLAND", "GRENADA", "GUADELOUPE", "GUAM", "GUATEMALA", "GUINEA", "GUINEABISSAU", "GUYANA", "HAITI", "HEARD,MCDONALDISLAN", "HOLLAND", "HONDURAS", "HUNGARY", "ICELAND", "INDEPENDENTSTATEOF", "INDIA", "INDONESIA", "IRAN", "IRAQ", "IRELAND", "ISRAEL", "ITALY", "JAMAICA", "JAPAN", "JORDAN", "KAZAKHSTAN", "KENYA", "KIRIBATI", "KUWAIT", "KYRGYZSTAN", "LAOS", "LATVIA", "LEBANON", "LESOTHO", "LIBERIA", "LIBYANARABJAMAHIRI", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MACEDONIA", "MADAGASCAR", "MALAWI", "MALAYSIA", "MALDIVES", "MALI", "MARTINIQUE", "MAURITANIA", "MAURITIUS", "MAYOTTE", "MEXICO", "MICRONESIA", "MOLDOVA,REPUBLICOF", "MONACO", "MONGOLIA", "MONTSERRAT", "MOROCCO", "MYANMAR", "NAMIBIA", "NAURU", "NEPAL", "NETHERLANDSANTILLES", "NEUTRALZONE", "NEWCALEDONIA", "NEWZEALAND", "NICARAGUE", "NIGER", "NIGERIA", "NIUE", "NORFOLKISLAND", "NORWAY", "OMAN", "PAKISTAN", "PANAMA", "PAPUANEWGUINEA", "PARAGUAY", "PEOPLE'SREPUBLICOF", "PEOPLE'SREPUBLICOF", "PEOPLE'SREPUBLICOF", "PERU", "PITCAIRNISLANDS", "POLAND", "PORTUGALANDAZORES", "PUERTORICO", "QATAR", "REPUBLICOFCAPEVER", "REPUBLICOFKOREA", "REPUBLICOFMALTA", "REPUBLICOFPALAU", "REPUBLICOFPHILIPPI", "REPUBLICOFSURINAM", "REUNION", "ROMANIA", "RUSSIA", "RWANDA", "SAMOA", "SANMARINO", "SAOTOMEANDPRINCIP", "SAUDIARABIA", "SAUDIARABIA", "SENEGAL", "SEYCHELLES", "SIERRALEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOLOMONISLANDS", "SOMALIA", "SOUTHAFRICA", "SPAINANDCANARYISL", "SRILANKA", "ST.HELENA", "ST.KITTSNEVIS", "ST.LUCIA", "ST.PIERREANDMIQUEL", "ST.VINCENT", "SUDAN", "SVALBARDJANMAYEN", "SWAZILAND", "SWEDEN", "SWITZERLAND", "SYRIANARABREPUBLIC", "TAJIKISTAN", "TANZANIA", "THAILAND", "TOGO", "TOKELAU", "TONGA", "TRINIDADANDTOBAGO", "TUNISIA", "TURKEY", "TURKMENISTAN", "TURKSANDCAICOSISL", "TUVALU", "UGANDA", "UKRAINE", "UNITEDARABEMIRATES", "UNITEDKINGDOM", "UNITEDKINGDOM", "UNITEDSTATES", "URUGUAY", "URUGUR", "USSR", "UZBEKISTAN", "VANUATU", "VATICAN", "VENEZUELA", "VIETNAM", "VIETNAM", "VIRGINISLANDS", "WAKEISLAND", "WALLISANDFUTUNAIS", "YEMENREPUBLIC", "YUGOSLAVIA", "ZAIRE", "ZAMBIA", "ZIMBABWE"]);
dsy.add("0_0", ["直辖市", "安徽", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "四川", "西藏", "新疆", "云南", "浙江", "香港特别行政区", "澳门特别行政区", "台湾"]);
dsy.add("0_0_0", ["北京", "天津", "重庆", "上海"]);
dsy.add("0_0_1", ["安庆", "蚌埠", "巢湖", "池州", "滁州", "阜阳", "合肥", "淮北", "淮南", "黄山", "六安", "马鞍山", "宿州", "铜陵", "芜湖", "宣城", "亳州"]);
//dsy.add("0_0_1", ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县"]);
dsy.add("0_0_2", ["福州", "龙岩", "南平", "宁德", "莆田", "泉州", "三明", "厦门", "漳州"]);
dsy.add("0_0_3", ["白银", "定西", "甘南藏族自治州", "嘉峪关", "金昌", "酒泉", "兰州", "临夏回族自治州", "陇南", "平凉", "庆阳", "天水", "武威", "张掖"]);
dsy.add("0_0_4", ["潮州", "东莞", "佛山", "广州", "河源", "惠州", "江门", "揭阳", "茂名", "梅州", "清远", "汕头", "汕尾", "韶关", "深圳", "阳江", "云浮", "湛江", "肇庆", "中山", "珠海"]);
dsy.add("0_0_5", ["百色", "北海", "崇左", "防城港", "桂林", "贵港", "河池", "贺州", "来宾", "柳州", "南宁", "钦州", "梧州", "玉林"]);
dsy.add("0_0_6", ["安顺", "毕节", "贵阳", "六盘水", "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "黔西南布依族苗族自治州", "铜仁", "遵义"]);
dsy.add("0_0_7", ["白沙黎族自治县", "保亭黎族苗族自治县", "昌江黎族自治县", "澄迈县", "定安县", "东方", "海口", "乐东黎族自治县", "临高县", "陵水黎族自治县", "琼海", "琼中黎族苗族自治县", "三亚", "屯昌县", "万宁", "文昌", "五指山", "儋州"]);
dsy.add("0_0_8", ["保定", "沧州", "承德", "邯郸", "衡水", "廊坊", "秦皇岛", "石家庄", "唐山", "邢台", "张家口"]);
dsy.add("0_0_9", ["安阳", "鹤壁", "济源", "焦作", "开封", "洛阳", "南阳", "平顶山", "三门峡", "商丘", "新乡", "信阳", "许昌", "郑州", "周口", "驻马店", "漯河", "濮阳"]);
dsy.add("0_0_10", ["大庆", "大兴安岭", "哈尔滨", "鹤岗", "黑河", "鸡西", "佳木斯", "牡丹江", "七台河", "齐齐哈尔", "双鸭山", "绥化", "伊春"]);
dsy.add("0_0_11", ["鄂州", "恩施土家族苗族自治州", "黄冈", "黄石", "荆门", "荆州", "潜江", "神农架林区", "十堰", "随州", "天门", "武汉", "仙桃", "咸宁", "襄阳", "孝感", "宜昌"]);
dsy.add("0_0_12", ["常德", "长沙", "郴州", "衡阳", "怀化", "娄底", "邵阳", "湘潭", "湘西土家族苗族自治州", "益阳", "永州", "岳阳", "张家界", "株洲"]);
dsy.add("0_0_13", ["白城", "白山", "长春", "吉林", "辽源", "四平", "松原", "通化", "延边朝鲜族自治州"]);
dsy.add("0_0_14", ["常州", "淮安", "连云港", "南京", "南通", "苏州", "宿迁", "泰州", "无锡", "徐州", "盐城", "扬州", "镇江"]);
dsy.add("0_0_15", ["抚州", "赣州", "吉安", "景德镇", "九江", "南昌", "萍乡", "上饶", "新余", "宜春", "鹰潭"]);
dsy.add("0_0_16", ["鞍山", "本溪", "朝阳", "大连", "丹东", "抚顺", "阜新", "葫芦岛", "锦州", "辽阳", "盘锦", "沈阳", "铁岭", "营口"]);
dsy.add("0_0_17", ["阿拉善盟", "巴彦淖尔盟", "包头", "赤峰", "鄂尔多斯", "呼和浩特", "呼伦贝尔", "通辽", "乌海", "乌兰察布盟", "锡林郭勒盟", "兴安盟"]);
dsy.add("0_0_18", ["固原", "石嘴山", "吴忠", "银川"]);
dsy.add("0_0_19", ["果洛藏族自治州", "海北藏族自治州", "海东", "海南藏族自治州", "海西蒙古族藏族自治州", "黄南藏族自治州", "西宁", "玉树藏族自治州"]);
dsy.add("0_0_20", ["滨州", "德州", "东营", "菏泽", "济南", "济宁", "莱芜", "聊城", "临沂", "青岛", "日照", "泰安", "威海", "潍坊", "烟台", "枣庄", "淄博"]);
dsy.add("0_0_21", ["长治", "大同", "晋城", "晋中", "临汾", "吕梁", "朔州", "太原", "忻州", "阳泉", "运城"]);
dsy.add("0_0_22", ["安康", "宝鸡", "汉中", "商洛", "铜川", "渭南", "西安", "咸阳", "延安", "榆林"]);
//dsy.add("0_0_23", ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"]);
dsy.add("0_0_23", ["阿坝藏族羌族自治州", "巴中", "成都", "达州", "德阳", "甘孜藏族自治州", "广安", "广元", "乐山", "凉山彝族自治州", "眉山", "绵阳", "南充", "内江", "攀枝花", "遂宁", "雅安", "宜宾", "资阳", "自贡", "泸州"]);
//dsy.add("0_0_25", ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟　县"]);
dsy.add("0_0_24", ["阿里", "昌都", "拉萨", "林芝", "那曲", "日喀则", "山南"]);
dsy.add("0_0_25", ["阿克苏", "阿拉尔", "巴音郭楞蒙古自治州", "博尔塔拉蒙古自治州", "昌吉回族自治州", "哈密", "和田", "喀什", "克拉玛依", "克孜勒苏柯尔克孜自治州", "石河子", "图木舒克", "吐鲁番", "乌鲁木齐", "五家渠", "伊犁哈萨克自治州"]);
dsy.add("0_0_26", ["保山", "楚雄彝族自治州", "大理白族自治州", "德宏傣族景颇族自治州", "迪庆藏族自治州", "红河哈尼族彝族自治州", "昆明", "丽江", "临沧", "怒江傈傈族自治州", "曲靖", "思茅", "文山壮族苗族自治州", "西双版纳傣族自治州", "玉溪", "昭通"]);
dsy.add("0_0_27", ["杭州", "湖州", "嘉兴", "金华", "丽水", "宁波", "绍兴", "台州", "温州", "舟山", "衢州"]);
//dsy.add("0_0_30", ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠　县", "开　县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "江津市", "合川市", "永川市", "南川市"]);
dsy.add("0_0_28", ["中西区", "东区", "南区", "湾仔区", "九龙城区", "观塘区", "深水埗区", "黄大仙区", "油尖旺区", "离岛区", "葵青区", "北区", "西贡区", "沙田区", "大埔区", "荃湾区", "屯门区", "元朗区"]);
dsy.add("0_0_29", ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区"]);
dsy.add("0_0_30", ["台北", "台中", "嘉义", "桃园", "丰原", "斗六", "凤山", "台东", "高雄", "台南", "宜兰", "苗栗", "南投", "新营", "马东", "基隆", "新竹", "板桥", "竹北", "彰化", "太保", "屏东", "花莲"]);