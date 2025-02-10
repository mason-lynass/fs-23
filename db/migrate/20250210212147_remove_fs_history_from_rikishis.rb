class RemoveFsHistoryFromRikishis < ActiveRecord::Migration[7.0]
  def change
    remove_column :rikishis, :FS_history, :integer, array: true
  end
end
