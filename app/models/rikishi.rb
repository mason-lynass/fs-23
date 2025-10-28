class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202509
    fantasy_sumo_history&.b202509
  end
end
