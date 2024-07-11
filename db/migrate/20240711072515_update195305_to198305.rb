class Update195305To198305 < ActiveRecord::Migration[7.0]
  def change
    rename_column :fantasy_sumo_histories, :b195305, :b198305
  end
end
