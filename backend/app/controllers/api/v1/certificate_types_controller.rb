module Api
  module V1
    class CertificateTypesController < Api::V1::ApiController
      helper_method :certificate_type

      def show
        json_response({ certificate_type: certificate_type })
      end

      def index
        certificate_types = CertificateType.all.sort_by_id_asc
        json_response({ certificate_types: certificate_types })
      end

      def create
        certificate_type = CertificateType.create!(certificate_type_params)
        json_response({certificate_type: certificate_type})
      end

      def update
        certificate_type.update!(certificate_type_params)
        json_response({ certificate_type: @certificate_type })
      end

      def destroy
        certificate_type.destroy
        json_response({delete: "success"})
      end

      private
      def certificate_type
        @certificate_type = CertificateType.find(certificate_type_id)
      end
      def certificate_type_params
        params.require(:certificate_type).permit(
            :name
        )
      end
      def certificate_type_id
        params[:id]
      end
    end
  end
end