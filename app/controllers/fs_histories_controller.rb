class FsHistoriesController < ApplicationController
    def index 
        render json: FsHistory.all 
    end

    def show
        render json: FsHistory.find_by(params[:id])
    end

    def create 
        history = FsHistory.create!(history_params)
        if history.valid? 
            render json: history, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def history_params
        params.permit(:rikishi, :b150, :b151, :b152, :b153, :b154, :b155, :b156, :b157)
    end

end