class Rikishi < ApplicationRecord
  has_one :fantasy_sumo_history

  def b202603
    fantasy_sumo_history&.b202603
  end
end
