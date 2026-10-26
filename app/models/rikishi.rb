class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202609
    fantasy_sumo_history&.b202609
  end
end
