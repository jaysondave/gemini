module Api
  module V1
    class InsurancesController < Api::V1::ApiController
      helper_method :insurance

      def show
        json_response({insurance: insurance})
      end

      def index
        body_id = params[:body_id]
        insurances = Insurance.filter_by_body_id(body_id).sort_by_id_asc
        json_response({insurances: insurances}, include_param)
      end

      def create
        insurance = Insurance.create!(insurance_params)
        json_response({insurance: insurance})
      end
      def update
        insurance.update!(insurance_params)
        json_response({ insurance: @insurance })
      end
      def destroy
        insurance.destroy
        json_response({delete: "success"})
      end

      private
      def insurance
        @insurance = Insurance.find(insurance_id)
      end

      def insurance_params
        params.require(:body).permit(
            :body_id,
            :agency_id,
            :contractor_id,
            :payment_frequency_id,
            :company,
            :policy_branch,
            :policy_number,
            :stipulation_date,
            :expiration_date,
            :warning_date,
            :note,
            :attachment
        )
      end
      def insurance_id
        params[:id]
      end
      def include_param
        {agency: {user: {}},
         contractor: {user: {}},
         payment_frequency: {:only => :name},
        }
      end
    end
  end
end