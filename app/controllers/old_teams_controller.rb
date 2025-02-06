class OldTeamsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index 
      render json: NewTeam.all, include: :user
  end

  def show
      render json: NewTeam.find(params[:id])
  end
  
end
