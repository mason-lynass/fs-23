class UsersController < ApplicationController
    def index 
        render json: User.includes(:old_teams).all 
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def rankings
        users = User.includes(:old_teams)
          .where('EXISTS (SELECT 1 FROM old_teams WHERE old_teams.user_id = users.id)')
          .select(<<-SQL.squish)
            users.*,
            (SELECT COUNT(*) FROM old_teams WHERE old_teams.user_id = users.id) as old_teams_count,
            CASE WHEN total_percentile > 0
              THEN ROUND(total_percentile::decimal / (SELECT COUNT(*) FROM old_teams WHERE old_teams.user_id = users.id), 2)
              ELSE 0
            END as average_percentile,
            CASE WHEN total_percentile > 0
              THEN ROUND((total_percentile::decimal / (SELECT COUNT(*) FROM old_teams WHERE old_teams.user_id = users.id)) + 0.1 * ((SELECT COUNT(*) FROM old_teams WHERE old_teams.user_id = users.id) - 1), 2)
              ELSE 0
            END as weighted_average
          SQL
        render json: users
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
