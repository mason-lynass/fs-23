class OldTeamsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index 
      render json: OldTeam.all, include: :user
  end

  def show
      render json: OldTeam.find(params[:id])
  end

end
