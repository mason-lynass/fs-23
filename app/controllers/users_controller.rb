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
        users = User
          .joins(:old_teams)
          .select(<<-SQL.squish)
            users.*,
            COUNT(old_teams.id) AS old_teams_count,
            ROUND(users.total_percentile::decimal / COUNT(old_teams.id), 2) AS average_percentile,
            ROUND((users.total_percentile::decimal / COUNT(old_teams.id)) + 0.1 * (COUNT(old_teams.id) - 1), 2) AS weighted_average
          SQL
          .group('users.id')
          .order('weighted_average DESC')

        render json: users
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
