# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_07_28_083555) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fantasy_sumo_histories", force: :cascade do |t|
    t.bigint "rikishi_id", null: false
    t.integer "b195801"
    t.integer "b195803"
    t.integer "b195805"
    t.integer "b195807"
    t.integer "b195809"
    t.integer "b195811"
    t.integer "b195901"
    t.integer "b195903"
    t.integer "b195905"
    t.integer "b195907"
    t.integer "b195909"
    t.integer "b195911"
    t.integer "b196001"
    t.integer "b196003"
    t.integer "b196005"
    t.integer "b196007"
    t.integer "b196009"
    t.integer "b196011"
    t.integer "b196101"
    t.integer "b196103"
    t.integer "b196105"
    t.integer "b196107"
    t.integer "b196109"
    t.integer "b196111"
    t.integer "b196201"
    t.integer "b196203"
    t.integer "b196205"
    t.integer "b196207"
    t.integer "b196209"
    t.integer "b196211"
    t.integer "b196301"
    t.integer "b196303"
    t.integer "b196305"
    t.integer "b196307"
    t.integer "b196309"
    t.integer "b196311"
    t.integer "b196401"
    t.integer "b196403"
    t.integer "b196405"
    t.integer "b196407"
    t.integer "b196409"
    t.integer "b196411"
    t.integer "b196501"
    t.integer "b196503"
    t.integer "b196505"
    t.integer "b196507"
    t.integer "b196509"
    t.integer "b196511"
    t.integer "b196601"
    t.integer "b196603"
    t.integer "b196605"
    t.integer "b196607"
    t.integer "b196609"
    t.integer "b196611"
    t.integer "b196701"
    t.integer "b196703"
    t.integer "b196705"
    t.integer "b196707"
    t.integer "b196709"
    t.integer "b196711"
    t.integer "b196801"
    t.integer "b196803"
    t.integer "b196805"
    t.integer "b196807"
    t.integer "b196809"
    t.integer "b196811"
    t.integer "b196901"
    t.integer "b196903"
    t.integer "b196905"
    t.integer "b196907"
    t.integer "b196909"
    t.integer "b196911"
    t.integer "b197001"
    t.integer "b197003"
    t.integer "b197005"
    t.integer "b197007"
    t.integer "b197009"
    t.integer "b197011"
    t.integer "b197101"
    t.integer "b197103"
    t.integer "b197105"
    t.integer "b197107"
    t.integer "b197109"
    t.integer "b197111"
    t.integer "b197201"
    t.integer "b197203"
    t.integer "b197205"
    t.integer "b197207"
    t.integer "b197209"
    t.integer "b197211"
    t.integer "b197301"
    t.integer "b197303"
    t.integer "b197305"
    t.integer "b197307"
    t.integer "b197309"
    t.integer "b197311"
    t.integer "b197401"
    t.integer "b197403"
    t.integer "b197405"
    t.integer "b197407"
    t.integer "b197409"
    t.integer "b197411"
    t.integer "b197501"
    t.integer "b197503"
    t.integer "b197505"
    t.integer "b197507"
    t.integer "b197509"
    t.integer "b197511"
    t.integer "b197601"
    t.integer "b197603"
    t.integer "b197605"
    t.integer "b197607"
    t.integer "b197609"
    t.integer "b197611"
    t.integer "b197701"
    t.integer "b197703"
    t.integer "b197705"
    t.integer "b197707"
    t.integer "b197709"
    t.integer "b197711"
    t.integer "b197801"
    t.integer "b197803"
    t.integer "b197805"
    t.integer "b197807"
    t.integer "b197809"
    t.integer "b197811"
    t.integer "b197901"
    t.integer "b197903"
    t.integer "b197905"
    t.integer "b197907"
    t.integer "b197909"
    t.integer "b197911"
    t.integer "b198001"
    t.integer "b198003"
    t.integer "b198005"
    t.integer "b198007"
    t.integer "b198009"
    t.integer "b198011"
    t.integer "b198101"
    t.integer "b198103"
    t.integer "b198105"
    t.integer "b198107"
    t.integer "b198109"
    t.integer "b198111"
    t.integer "b198201"
    t.integer "b198203"
    t.integer "b198205"
    t.integer "b198207"
    t.integer "b198209"
    t.integer "b198211"
    t.integer "b198301"
    t.integer "b198303"
    t.integer "b198305"
    t.integer "b198307"
    t.integer "b198309"
    t.integer "b198311"
    t.integer "b198401"
    t.integer "b198403"
    t.integer "b198405"
    t.integer "b198407"
    t.integer "b198409"
    t.integer "b198411"
    t.integer "b198501"
    t.integer "b198503"
    t.integer "b198505"
    t.integer "b198507"
    t.integer "b198509"
    t.integer "b198511"
    t.integer "b198601"
    t.integer "b198603"
    t.integer "b198605"
    t.integer "b198607"
    t.integer "b198609"
    t.integer "b198611"
    t.integer "b198701"
    t.integer "b198703"
    t.integer "b198705"
    t.integer "b198707"
    t.integer "b198709"
    t.integer "b198711"
    t.integer "b198801"
    t.integer "b198803"
    t.integer "b198805"
    t.integer "b198807"
    t.integer "b198809"
    t.integer "b198811"
    t.integer "b198901"
    t.integer "b198903"
    t.integer "b198905"
    t.integer "b198907"
    t.integer "b198909"
    t.integer "b198911"
    t.integer "b199001"
    t.integer "b199003"
    t.integer "b199005"
    t.integer "b199007"
    t.integer "b199009"
    t.integer "b199011"
    t.integer "b199101"
    t.integer "b199103"
    t.integer "b199105"
    t.integer "b199107"
    t.integer "b199109"
    t.integer "b199111"
    t.integer "b199201"
    t.integer "b199203"
    t.integer "b199205"
    t.integer "b199207"
    t.integer "b199209"
    t.integer "b199211"
    t.integer "b199301"
    t.integer "b199303"
    t.integer "b199305"
    t.integer "b199307"
    t.integer "b199309"
    t.integer "b199311"
    t.integer "b199401"
    t.integer "b199403"
    t.integer "b199405"
    t.integer "b199407"
    t.integer "b199409"
    t.integer "b199411"
    t.integer "b199501"
    t.integer "b199503"
    t.integer "b199505"
    t.integer "b199507"
    t.integer "b199509"
    t.integer "b199511"
    t.integer "b199601"
    t.integer "b199603"
    t.integer "b199605"
    t.integer "b199607"
    t.integer "b199609"
    t.integer "b199611"
    t.integer "b199701"
    t.integer "b199703"
    t.integer "b199705"
    t.integer "b199707"
    t.integer "b199709"
    t.integer "b199711"
    t.integer "b199801"
    t.integer "b199803"
    t.integer "b199805"
    t.integer "b199807"
    t.integer "b199809"
    t.integer "b199811"
    t.integer "b199901"
    t.integer "b199903"
    t.integer "b199905"
    t.integer "b199907"
    t.integer "b199909"
    t.integer "b199911"
    t.integer "b200001"
    t.integer "b200003"
    t.integer "b200005"
    t.integer "b200007"
    t.integer "b200009"
    t.integer "b200011"
    t.integer "b200101"
    t.integer "b200103"
    t.integer "b200105"
    t.integer "b200107"
    t.integer "b200109"
    t.integer "b200111"
    t.integer "b200201"
    t.integer "b200203"
    t.integer "b200205"
    t.integer "b200207"
    t.integer "b200209"
    t.integer "b200211"
    t.integer "b200301"
    t.integer "b200303"
    t.integer "b200305"
    t.integer "b200307"
    t.integer "b200309"
    t.integer "b200311"
    t.integer "b200401"
    t.integer "b200403"
    t.integer "b200405"
    t.integer "b200407"
    t.integer "b200409"
    t.integer "b200411"
    t.integer "b200501"
    t.integer "b200503"
    t.integer "b200505"
    t.integer "b200507"
    t.integer "b200509"
    t.integer "b200511"
    t.integer "b200601"
    t.integer "b200603"
    t.integer "b200605"
    t.integer "b200607"
    t.integer "b200609"
    t.integer "b200611"
    t.integer "b200701"
    t.integer "b200703"
    t.integer "b200705"
    t.integer "b200707"
    t.integer "b200709"
    t.integer "b200711"
    t.integer "b200801"
    t.integer "b200803"
    t.integer "b200805"
    t.integer "b200807"
    t.integer "b200809"
    t.integer "b200811"
    t.integer "b200901"
    t.integer "b200903"
    t.integer "b200905"
    t.integer "b200907"
    t.integer "b200909"
    t.integer "b200911"
    t.integer "b201001"
    t.integer "b201003"
    t.integer "b201005"
    t.integer "b201007"
    t.integer "b201009"
    t.integer "b201011"
    t.integer "b201101"
    t.integer "b201105"
    t.integer "b201107"
    t.integer "b201109"
    t.integer "b201111"
    t.integer "b201201"
    t.integer "b201203"
    t.integer "b201205"
    t.integer "b201207"
    t.integer "b201209"
    t.integer "b201211"
    t.integer "b201301"
    t.integer "b201303"
    t.integer "b201305"
    t.integer "b201307"
    t.integer "b201309"
    t.integer "b201311"
    t.integer "b201401"
    t.integer "b201403"
    t.integer "b201405"
    t.integer "b201407"
    t.integer "b201409"
    t.integer "b201411"
    t.integer "b201501"
    t.integer "b201503"
    t.integer "b201505"
    t.integer "b201507"
    t.integer "b201509"
    t.integer "b201511"
    t.integer "b201601"
    t.integer "b201603"
    t.integer "b201605"
    t.integer "b201607"
    t.integer "b201609"
    t.integer "b201611"
    t.integer "b201701"
    t.integer "b201703"
    t.integer "b201705"
    t.integer "b201707"
    t.integer "b201709"
    t.integer "b201711"
    t.integer "b201801"
    t.integer "b201803"
    t.integer "b201805"
    t.integer "b201807"
    t.integer "b201809"
    t.integer "b201811"
    t.integer "b201901"
    t.integer "b201903"
    t.integer "b201905"
    t.integer "b201907"
    t.integer "b201909"
    t.integer "b201911"
    t.integer "b202001"
    t.integer "b202003"
    t.integer "b202007"
    t.integer "b202009"
    t.integer "b202011"
    t.integer "b202101"
    t.integer "b202103"
    t.integer "b202105"
    t.integer "b202107"
    t.integer "b202109"
    t.integer "b202111"
    t.integer "b202201"
    t.integer "b202203"
    t.integer "b202205"
    t.integer "b202207"
    t.integer "b202209"
    t.integer "b202211"
    t.integer "b202301"
    t.integer "b202303"
    t.integer "b202305"
    t.integer "b202307"
    t.integer "b202309"
    t.integer "b202311"
    t.integer "b202401"
    t.integer "b202403"
    t.integer "b202405"
    t.integer "b202407"
    t.integer "b202409"
    t.integer "b202411"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "total_points"
    t.index ["rikishi_id"], name: "index_fantasy_sumo_histories_on_rikishi_id"
  end

  create_table "fs_histories", force: :cascade do |t|
    t.bigint "rikishi_id", null: false
    t.integer "b1"
    t.integer "b2"
    t.integer "b3"
    t.integer "b4"
    t.integer "b5"
    t.integer "b6"
    t.integer "b7"
    t.integer "b8"
    t.integer "b9"
    t.integer "b10"
    t.integer "b11"
    t.integer "b12"
    t.integer "b13"
    t.integer "b14"
    t.integer "b15"
    t.integer "b16"
    t.integer "b17"
    t.integer "b18"
    t.integer "b19"
    t.integer "b20"
    t.integer "b21"
    t.integer "b22"
    t.integer "b23"
    t.integer "b24"
    t.integer "b25"
    t.integer "b26"
    t.integer "b27"
    t.integer "b28"
    t.integer "b29"
    t.integer "b30"
    t.integer "b31"
    t.integer "b32"
    t.integer "b33"
    t.integer "b34"
    t.integer "b35"
    t.integer "b36"
    t.integer "b37"
    t.integer "b38"
    t.integer "b39"
    t.integer "b40"
    t.integer "b41"
    t.integer "b42"
    t.integer "b43"
    t.integer "b44"
    t.integer "b45"
    t.integer "b46"
    t.integer "b47"
    t.integer "b48"
    t.integer "b49"
    t.integer "b50"
    t.integer "b51"
    t.integer "b52"
    t.integer "b53"
    t.integer "b54"
    t.integer "b55"
    t.integer "b56"
    t.integer "b57"
    t.integer "b58"
    t.integer "b59"
    t.integer "b60"
    t.integer "b61"
    t.integer "b62"
    t.integer "b63"
    t.integer "b64"
    t.integer "b65"
    t.integer "b66"
    t.integer "b67"
    t.integer "b68"
    t.integer "b69"
    t.integer "b70"
    t.integer "b71"
    t.integer "b72"
    t.integer "b73"
    t.integer "b74"
    t.integer "b75"
    t.integer "b76"
    t.integer "b77"
    t.integer "b78"
    t.integer "b79"
    t.integer "b80"
    t.integer "b81"
    t.integer "b82"
    t.integer "b83"
    t.integer "b84"
    t.integer "b85"
    t.integer "b86"
    t.integer "b87"
    t.integer "b88"
    t.integer "b89"
    t.integer "b90"
    t.integer "b91"
    t.integer "b92"
    t.integer "b93"
    t.integer "b94"
    t.integer "b95"
    t.integer "b96"
    t.integer "b97"
    t.integer "b98"
    t.integer "b99"
    t.integer "b100"
    t.integer "b101"
    t.integer "b102"
    t.integer "b103"
    t.integer "b104"
    t.integer "b105"
    t.integer "b106"
    t.integer "b107"
    t.integer "b108"
    t.integer "b109"
    t.integer "b110"
    t.integer "b111"
    t.integer "b112"
    t.integer "b113"
    t.integer "b114"
    t.integer "b115"
    t.integer "b116"
    t.integer "b117"
    t.integer "b118"
    t.integer "b119"
    t.integer "b120"
    t.integer "b121"
    t.integer "b122"
    t.integer "b123"
    t.integer "b124"
    t.integer "b125"
    t.integer "b126"
    t.integer "b127"
    t.integer "b128"
    t.integer "b129"
    t.integer "b130"
    t.integer "b131"
    t.integer "b132"
    t.integer "b133"
    t.integer "b134"
    t.integer "b135"
    t.integer "b136"
    t.integer "b137"
    t.integer "b138"
    t.integer "b139"
    t.integer "b140"
    t.integer "b141"
    t.integer "b142"
    t.integer "b143"
    t.integer "b144"
    t.integer "b145"
    t.integer "b146"
    t.integer "b147"
    t.integer "b148"
    t.integer "b149"
    t.integer "b150"
    t.integer "b151"
    t.integer "b152"
    t.integer "b153"
    t.integer "b154"
    t.integer "b155"
    t.integer "b156"
    t.integer "b157"
    t.integer "b158"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "b159"
    t.integer "b160"
    t.integer "b161"
    t.integer "b162"
    t.integer "b163"
    t.integer "b164"
    t.integer "b165"
    t.index ["rikishi_id"], name: "index_fs_histories_on_rikishi_id"
  end

  create_table "rikishis", force: :cascade do |t|
    t.string "shikona"
    t.string "image_url"
    t.string "highest_rank"
    t.string "current_rank"
    t.string "heya"
    t.integer "height"
    t.integer "weight"
    t.date "birthdate"
    t.integer "yusho"
    t.integer "shukun_sho"
    t.integer "kanto_sho"
    t.integer "gino_sho"
    t.integer "kinboshi"
    t.integer "fs_current"
    t.integer "FS_history", array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "retired"
    t.index ["FS_history"], name: "index_rikishis_on_FS_history"
  end

  create_table "teams", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "r1", null: false
    t.string "r2", null: false
    t.string "r3", null: false
    t.string "r4", null: false
    t.string "r5", null: false
    t.string "r6", null: false
    t.string "r7", null: false
    t.float "basho"
    t.integer "final_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "percentile", precision: 3, scale: 2
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "total_percentile", precision: 3, scale: 2
  end

  add_foreign_key "fantasy_sumo_histories", "rikishis"
  add_foreign_key "fs_histories", "rikishis"
  add_foreign_key "teams", "users"
end
