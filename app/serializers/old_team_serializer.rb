class OldTeamSerializer < ActiveModel::Serializer
  attributes :id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :basho, :final_score, :percentile
  belongs_to :user
end
