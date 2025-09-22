class AddHasFantasyHistoryToRikishis < ActiveRecord::Migration[7.0]
  def change
    add_column :rikishis, :has_fantasy_history, :boolean, default: false
  end
end
