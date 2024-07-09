class FantasySumoHistoriesController < ApplicationController
    def index 
        render json: FantasySumoHistory.all 
    end

    def show
        render json: FantasySumoHistory.find_by(params[:id])
    end

    # def create 
    #     history = FantasySumoHistory.create!(history_params)
    #     if history.valid? 
    #         render json: history, status: :created
    #     else
    #         render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

end
