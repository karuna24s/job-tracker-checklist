Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  get 'jobs' => 'jobs#index'
  get 'jobs/:id' => 'jobs#show'
  post 'jobs' => 'jobs#create'
  patch 'jobs/:id' => 'jobs#update'
  delete 'jobs/:id' => 'jobs#destroy'
  post 'jobs/:id/votes' => 'votes#create'

  get 'jobs/:job_id/checklist' => 'checklists#show'

  get 'checklist/:checklist_id/items' => 'items#index'
  get 'items/:id' => 'items#show'
  post 'checklist/:checklist_id/items' => 'items#create'
  delete 'checklist/:checklist_id/items' => 'items#destroy'




end
