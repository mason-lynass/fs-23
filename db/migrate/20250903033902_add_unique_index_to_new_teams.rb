class AddUniqueIndexToNewTeams < ActiveRecord::Migration[7.0]
  def change
    add_index :new_teams, [:user_id, :basho], unique: true
  end
end
