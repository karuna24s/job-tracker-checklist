Rails.application.routes.draw do
  resources :items
  resources :checklists
  resources :jobs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#hello'
end
