class TeamSerializer < ActiveModel::Serializer
  attributes :id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :basho
  belongs_to :user
end
