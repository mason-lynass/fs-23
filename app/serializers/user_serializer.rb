class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :total_percentile
  has_many :teams
end
