module Api
  module V1
    class RegistrationTaxTypesController < Api::V1::ApiController
      helper_method :registration_tax_type

      def show
        json_response({ registration_tax_type: registration_tax_type })
      end
      def index
        registration_tax_types = RegistrationTaxType.all.sort_by_id_asc
        json_response({ registration_tax_types: registration_tax_types })
      end

      private
      def registration_tax_type
        @registration_tax_type = RegistrationTaxType.find(registration_tax_type_id)
      end
      def registration_tax_type_id
        params[:id]
      end
    end
  end
end