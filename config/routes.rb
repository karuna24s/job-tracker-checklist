Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  # get 'jobs' => 'jobs#index'
  # get 'jobs/:id' => 'jobs#show'
  # post 'jobs' => 'jobs#create'
  # patch 'jobs/:id' => 'jobs#update'
  # delete 'jobs/:id' => 'jobs#destroy'

  # get 'jobs/:id/checklists' => 'checklist#index'
  # get 'checklists/:id' => 'checklists#show'
  # post 'jobs/:id/checklists' => 'checklists#create'
  # patch 'jobs/:id/checklists' => 'checklists#update'
  # delete 'jobs/:id/checklists' => 'checklists#destroy'

  # get 'jobs/:id/notes' => 'notes#index'
  # get 'jobs/:id' => 'jobs#show'
  # post 'jobs/:id/notes' => 'notes#create'
  # patch 'jobs/:id' => 'jobs#update'
  # delete 'jobs/:id' => 'jobs#destroy'

  resources :jobs, only: [:index, :create, :show, :update, :destroy] do
    resources :checklists, only: [:index, :create, :show, :update, :destroy]
  end

  resources :checklists, only: [:index, :create, :show, :update, :destroy] do
    resources :items, only: [:index, :create, :show, :update, :destroy]
  end
end
