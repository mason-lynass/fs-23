class TeamsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        render json: Team.all, include: :user
    end

    def show
        render json: Team.find(params[:id])
    end

    def create
        # this stuff is new as of Jan 2025
        existing_team = Team.find_by(user_id: session[:user_id], basho: params[:basho])

        if existing_team
            render json: existing_team, status: :ok
        else
            team = Team.create!(team_params)
            if team.valid? 
                render json: team, status: :created
            else
                render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end

    def destroy
        team = Team.find(params[:id])
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
        params.permit(:user_id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :basho)
    end

    def render_unprocessable_entity_response
        render json: { errors: "Make sure you've picked enough wrestlers!" }, status: :unprocessable_entity
    end
end
