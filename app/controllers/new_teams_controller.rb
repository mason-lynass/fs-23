class NewTeamsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index 
      render json: NewTeam.all, include: :user
  end

  def show
      render json: NewTeam.find(params[:id])
  end

  def create
      # this stuff is new as of Jan 2025
      existing_team = NewTeam.find_by(user_id: session[:user_id], basho: params[:basho])

      if existing_team
          render json: existing_team, status: :ok
      else
          team = NewTeam.create!(team_params)
          if team.valid? 
              render json: team, status: :created
          else
              render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
      end
  end

  def destroy
      team = NewTeam.find(params[:id])
      user = User.find_by(id: session[:user_id])
      if (user.id == team.user_id)
          team.destroy
          head :no_content
      else 
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end        
  end

  private
  
  def team_params
      params.permit(:user_id, :r1_id, :r2_id, :r3_id, :r4_id, :r5_id, :r6_id, :r7_id, :basho)
  end

  def render_unprocessable_entity_response
      render json: { errors: "Make sure you've picked enough wrestlers!" }, status: :unprocessable_entity
  end
end
