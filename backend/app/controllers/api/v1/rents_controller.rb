module Api
  module V1
    class RentsController < Api::V1::ApiController
      helper_method :rent

      def show
        json_response({rent: rent})
      end

      def index
        body_id = params[:body_id]
        rents = Rent.filter_by_body_id(body_id).sort_by_id_asc
        json_response({rents: rents}, include_param)
      end

      def create
        rent = Rent.create!(rent_params)
        json_response({rent: rent})
      end
      def update
        rent.update!(rent_params)
        json_response({ rent: @rent })
      end
      def destroy
        rent.destroy
        json_response({delete: "success"})
      end

      private
      def rent
        @rent = Rent.find(rent_id)
      end

      def rent_params
        params.require(:rent).permit(
            :body_id,
            :landlord_id,
            :tenant_id,
            :fg,
            :fg_part,
            :sub,
            :category,
            :rent_class,
            :contract_description,
            :reg_date,
            :reg_number,
            :rent_model,
            :registration_tax,
            :rental_fee,
            :storage_code,
            :note,
            :expiry_date,
            :expiry_notice_date,
            :ISTAT_update_date,
            :end_date,
            :payment_frequency_id,
            :contract_type_id,
            :registration_tax_type_id
        )
      end
      def rent_id
        params[:id]
      end
      def include_param
        {landlord: {user: {}},
         tenant: {user: {}},
         contract_type: {:only => :name},
         registration_tax_type: {:only => :name},
         payment_frequency: {:only => :name},
        }
      end
    end
  end
end