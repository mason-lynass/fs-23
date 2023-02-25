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

ActiveRecord::Schema[7.0].define(version: 2023_02_24_224057) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.integer "FS_history", array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "FS_20233"
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

  add_foreign_key "teams", "users"
end