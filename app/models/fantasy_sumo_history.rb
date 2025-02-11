class FantasySumoHistory < ApplicationRecord
    belongs_to :rikishi

    def avg_fantasy_sumo_score
        # Get only the non-null bXXXXXX columns present in the object
        bashos = (self[:data] || {}).select { |k, v| k.match?(/^b\d{6}$/) && !v.nil? }.values

        return nil if bashos.empty?

        (bashos.sum(0.0) / bashos.size).round(2)
    end

end
