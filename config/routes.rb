Rails.application.routes.draw do
  root 'posts#index'
  get 'index'       => 'posts#index'
  get 'posts/show'  => 'posts#show'
  get 'posts/new'   => 'posts#new'
end
