class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_percentile
  has_many :teams
  has_many :old_teams
  has_one :new_team
end
