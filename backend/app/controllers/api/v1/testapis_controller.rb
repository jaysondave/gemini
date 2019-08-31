# encoding: utf-8

module Api
  module V1
    class TestapisController < Api::V1::ApiController
      def send_mail
        UserMailer.test(:first_name => "Gwang", :last_name => "Li", :password => "123456").deliver_now
        json_response({ send: 'success' })
      end
      end
  end
end
