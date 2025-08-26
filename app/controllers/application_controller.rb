class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  ALLOWED_ORIGINS = ['https://www.fantasysumo.net', 'https://fantasysumo.net', 'https://fs-23-phi.vercel.app']

  before_action :check_origin

  def fallback_index_html
    render file: 'public/index.html'
  end

  def index
    render file: 'public/index.html'
  end

  private

  def check_origin
    origin = request.headers['Origin'] || request.headers['Referer']
    unless origin && ALLOWED_ORIGINS.any? { |allowed| origin.start_with?(allowed) }
    render json: { error: "Forbidden" }, status: :forbidden
  end
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
end
