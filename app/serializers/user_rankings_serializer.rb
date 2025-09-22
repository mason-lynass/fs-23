class UserRankingsSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_percentile, :old_teams_count, :average_percentile, :weighted_average
  has_many :old_teams
  has_one :new_team
end