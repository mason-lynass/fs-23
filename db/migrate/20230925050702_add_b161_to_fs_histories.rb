class AddB161ToFsHistories < ActiveRecord::Migration[7.0]
  def change
    add_column :fs_histories, :b161, :integer
  end
end
