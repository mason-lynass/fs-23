class AddB162ToFsHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :fs_histories, :b162, :integer
  end
end
