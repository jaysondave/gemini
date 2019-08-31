require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)
require_relative 'env_variables'

module GeminiStartBackend
  class Application < Rails::Application
    config.secret_key_base = ENV['SECRET_KEY_BASE']
    config.autoload_paths += %W(#{config.root}/lib)

    # Rails 5 CORS Config
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], expose: ['Access-Token', 'Uid', 'Client', 'Content-Type']
      end
    end

    #Mail config
    ActionMailer::Base.smtp_settings = {
        :address => 'smtps.aruba.it',
        :port => 465,
        :domain => 'imap.geminismart.cloud',
        :authentication => 'plain',
        :user_name => 'info@geoplansrl.com',
        :password => 'geminismart',
        :enable_starttls_auto => true,
        :openssl_verify_mode => OpenSSL::SSL::VERIFY_NONE
    }
  end
end
