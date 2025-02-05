class Add2025ToFantasySumoHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :fantasy_sumo_histories, :b202501, :integer
    add_column :fantasy_sumo_histories, :b202503, :integer
    add_column :fantasy_sumo_histories, :b202505, :integer
    add_column :fantasy_sumo_histories, :b202507, :integer
    add_column :fantasy_sumo_histories, :b202509, :integer
    add_column :fantasy_sumo_histories, :b202511, :integer
  end
end
