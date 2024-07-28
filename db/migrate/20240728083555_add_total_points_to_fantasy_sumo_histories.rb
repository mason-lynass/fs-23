class AddTotalPointsToFantasySumoHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :fantasy_sumo_histories, :total_points, :integer
  end
end
