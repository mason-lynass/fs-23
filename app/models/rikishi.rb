class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202601
    fantasy_sumo_history&.b202601
  end
end
