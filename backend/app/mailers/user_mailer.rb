class UserMailer < ApplicationMailer

  def register_user(register_params)
    @user_name = "#{register_params[:first_name]} #{register_params[:last_name]}"
    @password = register_params[:password]
    @email = register_params[:email]
    mail(to: @email, subject: 'Register User')
  end

  def test(params)
    print params.inspect
    @user_name = "#{params[:first_name]} #{params[:last_name]}"
    @password = params[:password]

    mail(to: "guix7777@outlook.com", subject: 'Test Mail')
  end
end
