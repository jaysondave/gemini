Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: '/api/v1/users', controllers: {
      registrations:  'api/v1/registrations',
      sessions:  'api/v1/sessions',
      passwords:  'api/v1/passwords'
  }
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      devise_scope :user do
        get :status, to: 'api#status'
        resources :users, only: [:index, :show]
        resource :user, only: :create
        resources :categories
        resources :building_types
        resources :buildings
        resources :body_types
        resources :bodies
        resources :components
        resources :sub_components
        resources :outdoors
        resources :targets, only: [:show, :index]
        resources :floors
        resources :contract_types, only: [:show, :index]
        resources :registration_tax_types, only: [:show, :index]
        resources :payment_frequencies, only: [:show, :index]
        resources :rents
        resources :body_systems
        resources :document_types
        resources :compliances
        resources :documents
        resources :certificate_types
        resources :certificates
        resources :cadastral_kinds
        resources :cadastrals
        resources :insurances
        resources :maintenance_groups
        resources :maintenance_components
        resources :maintenance_operations

        get :test_mail, to: 'testapis#send_mail'
      end
    end
  end

  mount ActionCable.server => '/cable'
end
