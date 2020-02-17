Rails.application.routes.draw do
  root "posts#index"
  get 'contact' => 'posts#contact'
  get 'senryu' => 'posts#senryu'
  get 'mercari' => 'posts#mercari'
  get 'game' => 'posts#game'
  get 'isara' => 'posts#isara'
  get 'tetris' => 'posts#tetris'
  get 'stork' => 'posts#stork'

end
