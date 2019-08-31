source 'https://rubygems.org'

ruby '2.3.3'

gem 'rails', '~> 5.1.7'
gem 'puma', '~> 3.7'
gem 'jbuilder', '~> 2.5'
gem 'pg', '~> 0.18.2'
gem 'devise'
gem 'devise_token_auth'
gem 'rack-cors'
gem 'letter_opener', '~> 1.4.1'
# Uploads
gem 'carrierwave'
gem 'fog', require: 'fog/aws'
gem 'aws-sdk'
# Image processing
gem 'mini_magick'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :assets do
  gem 'uglifier', '>= 1.3.0'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
