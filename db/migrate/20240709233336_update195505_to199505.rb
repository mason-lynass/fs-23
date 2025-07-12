class Update195505To199505 < ActiveRecord::Migration[7.0]
  def change
        rename_column :fantasy_sumo_histories, :b195505, :b199505
  end
end
