class RikishisController < ApplicationController
    def index
        render json: Rikishi.all
    end

    def show
        render json: Rikishi.find_by(params[:id])
    end
end
