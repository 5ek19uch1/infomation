Rails.application.routes.draw do
  root 'posts#index'
  get '/'       => 'posts#index'
  get 'posts/show'  => 'posts#show'
  get 'posts/new'   => 'posts#new'
  post "posts/create" => "posts#create"

end
