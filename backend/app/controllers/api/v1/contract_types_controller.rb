module Api
  module V1
    class ContractTypesController < Api::V1::ApiController
      helper_method :contract_type

      def show
        json_response({ contract_type: contract_type })
      end
      def index
        contract_types = ContractType.all.sort_by_id_asc
        json_response({ contract_types: contract_types })
      end

      private
      def contract_type
        @contract_type = ContractType.find(contract_type_id)
      end
      def contract_type_id
        params[:id]
      end
    end
  end
end