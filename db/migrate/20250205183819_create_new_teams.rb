class CreateNewTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :new_teams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.references :r1, null: false, foreign_key: { to_table: :rikishis }
      t.references :r2, null: false, foreign_key: { to_table: :rikishis }
      t.references :r3, null: false, foreign_key: { to_table: :rikishis }
      t.references :r4, null: false, foreign_key: { to_table: :rikishis }
      t.references :r5, null: false, foreign_key: { to_table: :rikishis }
      t.references :r6, null: false, foreign_key: { to_table: :rikishis }
      t.references :r7, null: false, foreign_key: { to_table: :rikishis }
      t.float :basho
      t.integer :final_score
      t.decimal :percentile, precision: 3, scale: 2

      t.timestamps
    end
  end
end
