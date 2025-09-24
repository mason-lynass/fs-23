class UserRankingsSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_percentile, :old_teams_count, :average_percentile, :weighted_average, :old_teams

  def old_teams
    object.old_teams.select(:id, :basho, :percentile, :final_score)
  end
end