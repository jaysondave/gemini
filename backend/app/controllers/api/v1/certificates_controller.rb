module Api
  module V1
    class CertificatesController < Api::V1::ApiController
      helper_method :certificate

      def show
        json_response({certificate: certificate})
      end

      def index
        body_id = params[:body_id]
        certificates = Certificate.filter_by_body_id(body_id).sort_by_id_asc
        json_response({certificates: certificates}, include_params)
      end

      def create
        certificate = Certificate.create!(certificate_params)
        json_response({certificate: certificate})
      end

      def update
        certificate.update!(certificate_params)
        json_response({certificate: @certificate})
      end

      def destroy
        certificate.destroy
        json_response({delete: "success"})
      end

      private

      def certificate_params
        params.require(:body).permit(
            :body_id,
            :certificate_type_id,
            :compliance_id,
            :reg_date,
            :reg_number,
            :storage_code,
            :note,
            :attachment,
            :expiry_date,
            :expiry_notice_date
        )
      end

      def certificate
        @certificate = Certificate.find(certificate_id)
      end

      def certificate_id
        params[:id]
      end

      def include_params
        {
            body: {:only => :name},
            certificate_type: {:only => :name},
            compliance: {:only => :name},
        }
      end
    end
  end
end