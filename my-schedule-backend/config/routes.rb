Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :schedules
    end
  end

    root to: "home#index"

    get "schedules", controller: :schedules, action: :show
    post "refresh", controller: :refresh, action: :create
    post "signin", controller: :signin, action: :create
    delete "signin", controller: :signin, action: :destroy
    post "signup", controller: :signup, action: :create

end
