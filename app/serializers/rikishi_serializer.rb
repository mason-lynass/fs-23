class RikishiSerializer < ActiveModel::Serializer
  attributes :id, :shikona, :image_url, :birthdate, :highest_rank, :current_rank, :heya, :height, :weight, :yusho, :kinboshi, :shukun_sho, :gino_sho, :kanto_sho, :fs_current, :retired, :b202511
end
