class RikishisController < ApplicationController
    def index
        render json: Rikishi.includes(:fantasy_sumo_history).all
    end

    def show
        render json: Rikishi.includes(:fantasy_sumo_history).find_by(params[:id])
    end

    def active
        # current_rank in sortArray except "MS"
        active_ranks = ["Y", "O", "S", "K", "M1", "M2", "M3", "M4", "M5", "M6",
                       "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15",
                       "M16", "M17", "M18", "J"]
        render json: Rikishi.includes(:fantasy_sumo_history).where(current_rank: active_ranks)
    end

    def retired
        render json: Rikishi.includes(:fantasy_sumo_history).where(intai: true)
    end

    def fantasy_eligible
        render json: Rikishi.includes(:fantasy_sumo_history).where(has_fantasy_history: true)
    end
end
