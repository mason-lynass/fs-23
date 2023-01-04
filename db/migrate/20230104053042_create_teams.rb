class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :r1, null: false
      t.string :r2, null: false
      t.string :r3, null: false
      t.string :r4, null: false
      t.string :r5, null: false
      t.string :r6, null: false
      t.string :r7, null: false
      t.float :basho

      t.timestamps
    end
  end
end
