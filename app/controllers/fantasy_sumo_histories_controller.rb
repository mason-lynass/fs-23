class FantasySumoHistoriesController < ApplicationController
    def index
        histories = FantasySumoHistory
        .select("id, rikishi_id, total_points, jsonb_strip_nulls(to_jsonb(fantasy_sumo_histories.*)) as data")
        .includes(:rikishi) # Eager load Rikishi association
    
        formatted_histories = histories.map do |history|
            history_data = history.data.to_h # Convert JSONB to Hash

            history_data.except!("created_at", "updated_at", "rikishi_id", "id")
        
            # Merge data fields into the top-level response to flatten the JSON
            history_data.merge!(
                # "id" => history.id,
                # "rikishi_id" => history.rikishi_id,
                "total_points" => history.total_points,
                "avg_fantasy_sumo_score" => history.avg_fantasy_sumo_score,
                "rikishi" => history.rikishi.as_json() # Ensure `rikishi` is serialized properly
            )
        
            history_data
        end
        render json: formatted_histories, adapter: nil
        # render json: FantasySumoHistory.all
    end

end
