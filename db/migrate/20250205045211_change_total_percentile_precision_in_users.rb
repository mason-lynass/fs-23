class ChangeTotalPercentilePrecisionInUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :total_percentile, :decimal, precision: 4, scale: 2
  end
end
