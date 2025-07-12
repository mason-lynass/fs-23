# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Rikishi seeds 
# template
# _____ = Rikishi.create(
#     shikona: "",
#     image_url: "",
#     highest_rank: "",
#     current_rank: "",
#     heya: "",
#     height: ,
#     weight: ,
#     birthdate: YYYYMMDD,
#     yusho: ,
#     shukun_sho: ,
#     kanto_sho: ,
#     gino_sho: ,
#     kinboshi: ,
#     FS_history: []
# )

Terunofuji = Rikishi.create(
    shikona: "Terunofuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg",
    highest_rank: "Y",
    current_rank: "Y",
    heya: "Isegahama",
    height: 192,
    weight: 180,
    birthdate: 19911129,
    yusho: 7,
    shukun_sho: 3,
    kanto_sho: 3,
    gino_sho: 3,
    kinboshi: 0,
)

Takakeisho = Rikishi.create(
    shikona: "Takakeisho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140083.jpg",
    highest_rank: "O",
    current_rank: "O",
    heya: "Tokiwayama",
    height: 175,
    weight: 165,
    birthdate: 19960805,
    yusho: 3,
    shukun_sho: 3,
    kanto_sho: 2,
    gino_sho: 2,
    kinboshi: 3,
)

Wakatakakage = Rikishi.create(
    shikona: "Wakatakakage",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20170011.jpg",
    highest_rank: "S",
    current_rank: "S",
    heya: "Arashio",
    height: 183,
    weight: 135,
    birthdate: 19941206,
    yusho: 1,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 4,
    kinboshi: 0,
)

Hoshoryu = Rikishi.create(
    shikona: "Hoshoryu",
    image_url: "http://www.sumo.or.jp/img/sumo_data/rikishi/60x60/20170096.jpg",
    highest_rank: "S",
    current_rank: "S",
    heya: "Tatsunami",
    height: 185,
    weight: 146,
    birthdate: 19990522,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 2,
    kinboshi: 0,
)

Takayasu = Rikishi.create(
    shikona: "Takayasu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20050022.jpg",
    highest_rank: "O",
    current_rank: "S",
    heya: "Tagonoura",
    height: 186,
    weight: 182,
    birthdate: 19900228,
    yusho: 0,
    shukun_sho: 4,
    kanto_sho: 6,
    gino_sho: 2,
    kinboshi: 5,
)

Shodai = Rikishi.create(
    shikona: "Shodai",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140019.jpg",
    highest_rank: "O",
    current_rank: "S",
    heya: "Tokitsukaze",
    height: 182,
    weight: 165,
    birthdate: 19911105,
    yusho: 1,
    shukun_sho: 1,
    kanto_sho: 6,
    gino_sho: 0,
    kinboshi: 1,

)

Kiribayama = Rikishi.create(
    shikona: "Kiribayama",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150034.jpg",
    highest_rank: "K",
    current_rank: "K",
    heya: "Michinoku",
    height: 185,
    weight: 142,
    birthdate: 19960424,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Kotonowaka = Rikishi.create(
    shikona: "Kotonowaka",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150081.jpg",
    highest_rank: "K",
    current_rank: "K",
    heya: "Sadogatake",
    height: 189,
    weight: 172,
    birthdate: 19971119,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 3,
    gino_sho: 0,
    kinboshi: 0,

)

Meisei = Rikishi.create(
    shikona: "Meisei",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110029.jpg",
    highest_rank: "S",
    current_rank: "K",
    heya: "Tatsunami",
    height: 180,
    weight: 158,
    birthdate: 19950724,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Wakamotoharu = Rikishi.create(
    shikona: "Wakamotoharu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110065.jpg",
    highest_rank: "K",
    current_rank: "K",
    heya: "Arashio",
    height: 186,
    weight: 146,
    birthdate: 19931005,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Tobizaru = Rikishi.create(
    shikona: "Tobizaru",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150005.jpg",
    highest_rank: "K",
    current_rank: "M1",
    heya: "Oitekaze",
    height: 174,
    weight: 130,
    birthdate: 19920424,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 1,

)

Daieisho = Rikishi.create(
    shikona: "Daieisho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20120003.jpg",
    highest_rank: "S",
    current_rank: "M1",
    heya: "Oitekaze",
    height: 182,
    weight: 165,
    birthdate: 19931110,
    yusho: 1,
    shukun_sho: 4,
    kanto_sho: 1,
    gino_sho: 1,
    kinboshi: 3,

)

Mitakeumi = Rikishi.create(
    shikona: "Mitakeumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150032.jpg",
    highest_rank: "O",
    current_rank: "M2",
    heya: "Dewanoumi",
    height: 179,
    weight: 174,
    birthdate: 19921225,
    yusho: 3,
    shukun_sho: 6,
    kanto_sho: 1,
    gino_sho: 3,
    kinboshi: 2,

)

Tamawashi = Rikishi.create(
    shikona: "Tamawashi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20040005.jpg",
    highest_rank: "S",
    current_rank: "M2",
    heya: "Kataonami",
    height: 189,
    weight: 174,
    birthdate: 19841116,
    yusho: 1,
    shukun_sho: 2,
    kanto_sho: 1,
    gino_sho: 1,
    kinboshi: 7,

)

Abi = Rikishi.create(
    shikona: "Abi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130059.jpg",
    highest_rank: "S",
    current_rank: "M3",
    heya: "Shikoroyama",
    height: 187,
    weight: 159,
    birthdate: 19940504,
    yusho: 1,
    shukun_sho: 1,
    kanto_sho: 4,
    gino_sho: 0,
    kinboshi: 3,

)

Midorifuji = Rikishi.create(
    shikona: "Midorifuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160082.jpg",
    highest_rank: "M1",
    current_rank: "M3",
    heya: "Isegahama",
    height: 171,
    weight: 117,
    birthdate: 19960830,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 1,
    kinboshi: 0,

)

Nishikifuji = Rikishi.create(
    shikona: "Nishikifuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160081.jpg",
    highest_rank: "M4",
    current_rank: "M4",
    heya: "Isegahama",
    height: 184,
    weight: 155,
    birthdate: 19960722,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Sadanoumi = Rikishi.create(
    shikona: "Sadanoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20030054.jpg",
    highest_rank: "M1",
    current_rank: "M4",
    heya: "Sakaigawa",
    height: 182,
    weight: 144,
    birthdate: 19870511,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 2,
    gino_sho: 0,
    kinboshi: 1,

)

Ryuden = Rikishi.create(
    shikona: "Ryuden",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20060023.jpg",
    highest_rank: "K",
    current_rank: "M5",
    heya: "Takadagawa",
    height: 187,
    weight: 157,
    birthdate: 19901110,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 1,
    kinboshi: 0,

)

Nishikigi = Rikishi.create(
    shikona: "Nishikigi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20060025.jpg",
    highest_rank: "M2",
    current_rank: "M5",
    heya: "Isenoumi",
    height: 184,
    weight: 179,
    birthdate: 19900825,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 1,

)

Hokutofuji = Rikishi.create(
    shikona: "Hokutofuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150042.jpg",
    highest_rank: "K",
    current_rank: "M6",
    heya: "Hakkaku",
    height: 184,
    weight: 163,
    birthdate: 19920715,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 2,
    kinboshi: 7,

)

Myogiryu = Rikishi.create(
    shikona: "Myogiryu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090065.jpg",
    highest_rank: "S",
    current_rank: "M6",
    heya: "Sakaigawa",
    height: 189,
    weight: 157,
    birthdate: 19861022,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 6,
    kinboshi: 6,

)

Ichinojo = Rikishi.create(
    shikona: "Ichinojo",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130077.jpg",
    highest_rank: "S",
    current_rank: "M7",
    heya: "Minato",
    height: 192,
    weight: 211,
    birthdate: 19930407,
    yusho: 1,
    shukun_sho: 3,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 8,
    retired: true,

)

Ura = Rikishi.create(
    shikona: "Ura",
    image_url: "https://www.sumo.or.jp/img/sumo_data/rikishi/60x60/20150028.jpg",
    highest_rank: "M1",
    current_rank: "M7",
    heya: "Kise",
    height: 173,
    weight: 148,
    birthdate: 19920622,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 1,
    kinboshi: 2,

)

Onosho = Rikishi.create(
    shikona: "Onosho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130005.jpg",
    highest_rank: "K",
    current_rank: "M8",
    heya: "Onomatsu",
    height: 178,
    weight: 165,
    birthdate: 19960704,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 3,
    gino_sho: 0,
    kinboshi: 2,

)

Oho = Rikishi.create(
    shikona: "Oho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20180002.jpg",
    highest_rank: "M8",
    current_rank: "M8",
    heya: "Otake",
    height: 189,
    weight: 179,
    birthdate: 20000214,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Takanosho = Rikishi.create(
    shikona: "Takanosho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20100039.jpg",
    highest_rank: "S",
    current_rank: "M9",
    heya: "Tokiwayama",
    height: 184,
    weight: 167,
    birthdate: 19941114,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 1,

)

Endo = Rikishi.create(
    shikona: "Endo",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130036.jpg",
    highest_rank: "K",
    current_rank: "M9",
    heya: "Oitekaze",
    height: 183,
    weight: 150,
    birthdate: 19901019,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 4,
    kinboshi: 6,

)

Aoiyama = Rikishi.create(
    shikona: "Aoiyama",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090067.jpg",
    highest_rank: "S",
    current_rank: "M10",
    heya: "Kasugano",
    height: 190,
    weight: 184,
    birthdate: 19860619,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 3,
    gino_sho: 1,
    kinboshi: 1,

)

Hiradoumi = Rikishi.create(
    shikona: "Hiradoumi",
    image_url: "https://www.sumo.or.jp/img/sumo_data/rikishi/60x60/20160042.jpg",
    highest_rank: "M10",
    current_rank: "M10",
    heya: "Sakaigawa",
    height: 178,
    weight: 138,
    birthdate: 20000420,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Chiyoshoma = Rikishi.create(
    shikona: "Chiyoshoma",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090066.jpg",
    highest_rank: "M2",
    current_rank: "M11",
    heya: "Kokonoe",
    height: 183,
    weight: 137,
    birthdate: 19910720,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Tochinoshin = Rikishi.create(
    shikona: "Tochinoshin",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20060028.jpg",
    highest_rank: "O",
    current_rank: "M11",
    heya: "Kasugano",
    height: 192,
    weight: 182,
    birthdate: 19871013,
    yusho: 1,
    shukun_sho: 2,
    kanto_sho: 6,
    gino_sho: 3,
    kinboshi: 2,

)

Kagayaki = Rikishi.create(
    shikona: "Kagayaki",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20100029.jpg",
    highest_rank: "M4",
    current_rank: "M12",
    heya: "Takadagawa",
    height: 193,
    weight: 156,
    birthdate: 19940601,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Okinoumi = Rikishi.create(
    shikona: "Okinoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20050003.jpg",
    highest_rank: "S",
    current_rank: "M12",
    heya: "Hakkaku",
    height: 189,
    weight: 161,
    birthdate: 19850729,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 4,
    gino_sho: 0,
    kinboshi: 4,

)

Kotoshoho = Rikishi.create(
    shikona: "Kotoshoho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20170094.jpg",
    highest_rank: "M3",
    current_rank: "M13",
    heya: "Sadogatake",
    height: 189,
    weight: 163,
    birthdate: 19990826,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Kotoeko = Rikishi.create(
    shikona: "Kotoeko",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20070057.jpg",
    highest_rank: "M4",
    current_rank: "M13",
    heya: "Sadogatake",
    height: 176,
    weight: 128,
    birthdate: 19911120,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Ichiyamamoto = Rikishi.create(
    shikona: "Ichiyamamoto",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20170002.jpg",
    highest_rank: "M13",
    current_rank: "M14",
    heya: "Nishonoseki",
    height: 187,
    weight: 146,
    birthdate: 19931001,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Azumaryu = Rikishi.create(
    shikona: "Azumaryu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20080097.jpg",
    highest_rank: "M14",
    current_rank: "M14",
    heya: "Tamanoi",
    height: 191,
    weight: 162,
    birthdate: 19870512,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Tsurugisho = Rikishi.create(
    shikona: "Tsurugisho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140002.jpg",
    highest_rank: "M7",
    current_rank: "M15",
    heya: "Oitekaze",
    height: 184,
    weight: 200,
    birthdate: 19910727,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Mitoryu = Rikishi.create(
    shikona: "Mitoryu",
    image_url: "https://www.sumo.or.jp/img/sumo_data/rikishi/60x60/20170047.jpg",
    highest_rank: "M15",
    current_rank: "M15",
    heya: "Nishikido",
    height: 190,
    weight: 197,
    birthdate: 19940425,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Takarafuji = Rikishi.create(
    shikona: "Takarafuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090004.jpg",
    highest_rank: "S",
    current_rank: "M16",
    heya: "Isegahama",
    height: 186,
    weight: 171,
    birthdate: 19870218,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 3,

)

Chiyomaru = Rikishi.create(
    shikona: "Chiyomaru",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20070085.jpg",
    highest_rank: "M5",
    current_rank: "M16",
    heya: "Kokonoe",
    height: 178,
    weight: 169,
    birthdate: 19910417,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

# Juryo

Akua = Rikishi.create(
    shikona: "Akua",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20100090.jpg",
    highest_rank: "M10",
    current_rank: "J",
    heya: "Tatsunami",
    height: 182,
    weight: 167,
    birthdate: 19901106,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Bushozan = Rikishi.create(
    shikona: "Bushozan",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140006.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Fujishima",
    height: 172,
    weight: 182,
    birthdate: 19951206,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Hokuseiho = Rikishi.create(
    shikona: "Hokuseiho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20200054.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Miyagino",
    height: 200,
    weight: 182,
    birthdate: 20011112,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Daiamami = Rikishi.create(
    shikona: "Daiamami",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160002.jpg",
    highest_rank: "M11",
    current_rank: "J",
    heya: "Oitekaze",
    height: 184,
    weight: 190,
    birthdate: 19921215,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Atamifuji = Rikishi.create(
    shikona: "Atamifuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20200074.jpg",
    highest_rank: "M15",
    current_rank: "J",
    heya: "Isegahama",
    height: 185,
    weight: 177,
    birthdate: 20020903,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Oshoma = Rikishi.create(
    shikona: "Oshoma",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20210053.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Naruto",
    height: 189,
    weight: 159,
    birthdate: 19970409,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Tohakuryu = Rikishi.create(
    shikona: "Tohakuryu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20190059.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Tamanoi",
    height: 181,
    weight: 134,
    birthdate: 19960417,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Enho = Rikishi.create(
    shikona: "Enho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20170053.jpg",
    highest_rank: "M4",
    current_rank: "J",
    heya: "Miyagino",
    height: 167,
    weight: 105,
    birthdate: 19941018,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 1,
    kinboshi: 0,

)

Kinbozan = Rikishi.create(
    shikona: "Kinbozan",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20210057.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Kise",
    height: 192,
    weight: 179,
    birthdate: 19970624,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Kotokuzan = Rikishi.create(
    shikona: "Kotokuzan",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090080.jpg",
    highest_rank: "M16",
    current_rank: "J",
    heya: "Arashio",
    height: 181,
    weight: 168,
    birthdate: 19940311,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Churanoumi = Rikishi.create(
    shikona: "Churanoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160048.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Kise",
    height: 177,
    weight: 137,
    birthdate: 19930506,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Daishoho = Rikishi.create(
    shikona: "Daishoho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130002.jpg",
    highest_rank: "M9",
    current_rank: "J",
    heya: "Oitekaze",
    height: 185,
    weight: 187,
    birthdate: 19940828,
    yusho: 0,
    shukun_sho:0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Chiyonokuni = Rikishi.create(
    shikona: "Chiyonokuni",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20060071.jpg",
    highest_rank: "M1",
    current_rank: "J",
    heya: "Kokonoe",
    height: 181,
    weight: 151,
    birthdate: 19900710,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Tochimusashi = Rikishi.create(
    shikona: "Tochimusashi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20210009.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Kasugano",
    height: 183,
    weight: 157,
    birthdate: 19990111,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Shimanoumi = Rikishi.create(
    shikona: "Shimanoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20120047.jpg",
    highest_rank: "M3",
    current_rank: "J",
    heya: "Kise",
    height: 180,
    weight: 164,
    birthdate: 19890711,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Kitanowaka = Rikishi.create(
    shikona: "Kitanowaka",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20190026.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Hakkaku",
    height: 190,
    weight: 148,
    birthdate: 20001112,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Roga = Rikishi.create(
    shikona: "Roga",
    image_url:"http://sumo.or.jp/img/sumo_data/rikishi/60x60/20180068.jpg" ,
    highest_rank: "J",
    current_rank: "J",
    heya: "Futagoyama",
    height: 184,
    weight: 160,
    birthdate: 19990302,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Hidenoumi = Rikishi.create(
    shikona: "Hidenoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20120049.jpg",
    highest_rank: "M6",
    current_rank: "J",
    heya: "Kise",
    height: 186,
    weight: 160,
    birthdate: 19890611,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Gonoyama = Rikishi.create(
    shikona: "Gonoyama",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20210023.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Takekuma",
    height: 177,
    weight: 154,
    birthdate: 19980407,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Terutsuyoshi = Rikishi.create(
    shikona: "Terutsuyoshi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20100052.jpg",
    highest_rank: "M3",
    current_rank: "J",
    heya: "Isegahama",
    height: 169,
    weight: 107,
    birthdate: 19950117,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 0,

)

Chiyosakae = Rikishi.create(
    shikona: "Chiyosakae",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090012.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Kokonoe",
    height: 180,
    weight: 161,
    birthdate: 19900712,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Shimazuumi = Rikishi.create(
    shikona: "Shimazuumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20120033.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Hanaregoma",
    height: 175,
    weight: 166,
    birthdate: 19960518,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Takakento = Rikishi.create(
    shikona: "Takakento",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140003.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Tokiwayama",
    height: 180,
    weight: 169,
    birthdate: 19960210,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Asanoyama = Rikishi.create(
    shikona: "Asanoyama",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160019.jpg",
    highest_rank: "O",
    current_rank: "J",
    heya: "Takasago",
    height: 189,
    weight: 174,
    birthdate: 19940301,
    yusho: 1,
    shukun_sho: 2,
    kanto_sho: 3,
    gino_sho: 1,
    kinboshi: 1,

)

Shonannoumi = Rikishi.create(
    shikona: "Shonannoumi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140051.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Takadagawa",
    height: 193,
    weight: 186,
    birthdate: 19980408,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Kaisho = Rikishi.create(
    shikona: "Kaisho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130038.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Asakayama",
    height: 180,
    weight: 161,
    birthdate: 19950128,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0,

)

Tsushimanada = Rikishi.create(
    shikona: "Tsushimanada",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20160072.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Sakaigawa",
    height: 185,
    weight: 144,
    birthdate: 19930627,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho:0 ,
    gino_sho: 0,
    kinboshi: 0,

)

Hakuyozan = Rikishi.create(
    shikona: "Hakuyozan",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110026.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Takadagawa",
    height: 186,
    weight: 165,
    birthdate: 19950413,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho:0 ,
    gino_sho: 0,
    kinboshi: 0,

)

Tokushoryu = Rikishi.create(
    shikona: "Tokushoryu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090002.jpg",
    highest_rank: "M2",
    current_rank: "J",
    heya: "Kise",
    height: 182,
    weight: 191,
    birthdate: 19860822,
    yusho: 1,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 1,

)

FantasySumoHistory.create(
    rikishi_id: 1,
    b202509: 20,
    b202505: 15
)

FantasySumoHistory.create(
    rikishi_id: 2,
    b202511: 2,
    b202503: 5
)

FantasySumoHistory.create(
    rikishi_id: 3,
    b202503: 10,
    b202505: 12
)

FantasySumoHistory.create(
    rikishi_id: 4,
    b202505: 10,
    b202507: 15
)

FantasySumoHistory.create(
    rikishi_id: 5,
    b202507: 22,
    b202509: 5
)

FantasySumoHistory.create(
    rikishi_id: 6,
    b202509: 13,
    b202511: 8
)


puts "seeded!"