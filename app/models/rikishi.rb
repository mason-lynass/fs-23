class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202607
    fantasy_sumo_history&.b202607
  end
end
