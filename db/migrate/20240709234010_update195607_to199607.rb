class Update195607To199607 < ActiveRecord::Migration[7.0]
  def change
      rename_column :fantasy_sumo_histories, :b195607, :b199607
  end
end
