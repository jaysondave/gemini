module Api
  module V1
    class CompliancesController < Api::V1::ApiController
      helper_method :compliance

      def show
        json_response({ compliance: compliance })
      end
      def index
        compliances = Compliance.all.sort_by_id_asc
        json_response({ compliances: compliances })
      end

      def create
        compliance = Compliance.create!(compliance_params)
        json_response({compliance: compliance})
      end

      def update
        compliance.update!(compliance_params)
        json_response({ compliance: @compliance })
      end

      def destroy
        compliance.destroy
        json_response({delete: "success"})
      end

      private
      def compliance
        @compliance = Compliance.find(compliance_id)
      end
      def compliance_params
        params.require(:compliance).permit(
            :name
        )
      end
      def compliance_id
        params[:id]
      end
    end
  end
end