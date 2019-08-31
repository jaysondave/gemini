# encoding: utf-8

module Api
  module V1
    class UsersController < Api::V1::ApiController
      before_action :authenticate_user!

      helper_method :user

      def show
        json_response({user: user})
      end

      def index
        users = User.where.not(user_type: 'admin').sort_by_id_asc
        if params[:user_type]
          users = users.by_type(params[:user_type])
          json_response({users: users}, include)
        else
          agencies = users.by_type('agency')
          collaborators = users.by_type('collaborator')
          managers = users.by_type('manager')
          maintainers = users.by_type('maintainer')
          professionals = users.by_type('professional')
          stockists = users.by_type('stockist')
          sub_workers = users.by_type('sub_worker')
          landlords = users.by_type('landlord')
          tenants = users.by_type('tenant')
          end_users = users.by_type('user')
          json_response({
                            agencies: agencies,
                            collaborators: collaborators,
                            managers: managers,
                            maintainers: maintainers,
                            professionals: professionals,
                            stockists: stockists,
                            sub_workers: sub_workers,
                            end_users: end_users,
                            landlords: landlords,
                            tenants: tenants
                        }, include)
        end
      end

      def create
        user = User.create!(register_params)
        UserMailer.register_user(register_params).deliver
        json_response({user: user})
      end
      def profile
        render :show
      end

      private

      def register_params
        params.require(:user).permit(
            :user_type, :first_name, :last_name, :picture, :business_name, :address, :home_number, :zip_code, :city,
            :province, :cod_fisc, :p_lva, :mobile, :phone, :pec, :cuu, :specialization, :building, :count_building_to_manage,
            :category_id,
            :email,
            :password,
        )
      end

      def include
        {:category => {:only => :name}}
      end
      def user
        @user ||= user_id.present? ? User.find(user_id) : current_user
      end

      def user_id
        params[:id]
      end

    end
  end
end
