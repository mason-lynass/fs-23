Rails.application.routes.draw do
  resources :old_teams, only: [:index, :show]
  resources :new_teams, only: [:index, :show, :create, :destroy]
  resources :fantasy_sumo_histories, only: [:index]
  resources :rikishis, only: [:index, :show] do
    collection do
      get :active
      get :retired
      get :fantasy_eligible
    end
  end
  resources :users, only: [:index, :show, :create] do
    collection do
      get :rankings
    end
  end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
