class Add20233ToRikishi < ActiveRecord::Migration[7.0]
  def change
    # add_column :rikishis, :FS_20233, :integer
    remove_column :rikishis, :FS_20226
    remove_column :rikishis, :FS_20231
  end
end
