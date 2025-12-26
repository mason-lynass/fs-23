class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202511
    fantasy_sumo_history&.b202511
  end
end
