module Api
  module V1
    class DocumentTypesController < Api::V1::ApiController
      helper_method :document_type

      def show
        json_response({ document_type: document_type })
      end
      def index
        document_types = DocumentType.all.sort_by_id_asc
        json_response({ document_types: document_types })
      end

      def create
        document_type = DocumentType.create!(document_type_params)
        json_response({document_type: document_type})
      end

      def update
        document_type.update!(document_type_params)
        json_response({ document_type: @document_type })
      end

      def destroy
        document_type.destroy
        json_response({delete: "success"})
      end

      private
      def document_type
        @document_type = DocumentType.find(document_type_id)
      end
      def document_type_params
        params.require(:document_type).permit(
            :name
        )
      end
      def document_type_id
        params[:id]
      end
    end
  end
end