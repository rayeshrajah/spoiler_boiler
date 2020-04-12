Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create, :new]
  resources :videos, only: [:index]
  resources :comments, only: [:index, :create, :new]

  post '/users' => 'users#create'
end
