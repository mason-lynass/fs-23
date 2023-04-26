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

ActiveRecord::Schema[7.0].define(version: 2023_04_26_032358) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "fs_histories", "rikishis"
  add_foreign_key "teams", "users"
end
