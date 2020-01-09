Rails.application.routes.draw do
  get 'posts/index'

  root "posts#index"
  get 'contact' => 'posts#contact'
end
