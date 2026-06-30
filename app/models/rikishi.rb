class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202605
    fantasy_sumo_history&.b202605
  end
end
