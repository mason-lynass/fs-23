class Add2026ToFantasySumoHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :fantasy_sumo_histories, :b202601, :integer
    add_column :fantasy_sumo_histories, :b202603, :integer
    add_column :fantasy_sumo_histories, :b202605, :integer
    add_column :fantasy_sumo_histories, :b202607, :integer
    add_column :fantasy_sumo_histories, :b202609, :integer
    add_column :fantasy_sumo_histories, :b202611, :integer
  end
end
