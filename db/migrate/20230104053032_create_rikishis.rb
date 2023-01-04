class CreateRikishis < ActiveRecord::Migration[7.0]
  def change
    create_table :rikishis do |t|
      t.string :shikona
      t.string :image_url
      t.string :highest_rank
      t.string :current_rank
      t.string :heya 
      t.integer :height
      t.integer :weight
      t.date :birthdate
      t.integer :yusho
      t.integer :shukun_sho
      t.integer :kanto_sho
      t.integer :gino_sho
      t.integer :kinboshi
      t.integer :FS_20226
      t.integer :FS_history, array: true

      t.timestamps
    end
    add_index :rikishis, :FS_history
  end
end
