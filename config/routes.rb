Rails.application.routes.draw do
  get '/'           => 'posts#index'
  get 'posts/index' => 'posts#index'
  get 'posts/show'  => 'posts#show'
end
