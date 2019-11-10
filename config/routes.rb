Rails.application.routes.draw do
  root 'posts#index'
  get 'posts/index' => 'posts#index'
  get 'posts/show'  => 'posts#show'
end
