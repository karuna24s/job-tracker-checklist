Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  get 'jobs' => 'jobs#index'
  get 'jobs/:id' => 'jobs#show'
  post 'jobs' => 'jobs#create'
  patch 'jobs/:id' => 'jobs#update'
  delete 'jobs/:id' => 'jobs#destroy'

  get 'jobs/:job_id/checklist' => 'checklists#show'

  get 'checklist/:id/items' => 'items#index'
  get 'items/:id' => 'items#show'
  post 'checklist/:id/items' => 'items#create'
  patch 'checklist/:id/items' => 'items#update'
  delete 'checklist/:id/items' => 'items#destroy'

  # get 'jobs/:id/notes' => 'notes#index'
  # get 'jobs/:id' => 'jobs#show'
  # post 'jobs/:id/notes' => 'notes#create'
  # patch 'jobs/:id' => 'jobs#update'
  # delete 'jobs/:id' => 'jobs#destroy'

  # resources :jobs, only: [:index, :create, :show, :update, :destroy] do
  #   resources :checklists, only: [:index, :create, :show, :update, :destroy]
  # end
  #
  # resources :checklists, only: [:index, :create, :show, :update, :destroy] do
  #   resources :items, only: [:index, :create, :show, :update, :destroy]
  # end
end
