module Api
  module V1
    class DocumentsController < Api::V1::ApiController
      helper_method :document

      def show
        json_response({document: document})
      end

      def index
        body_id = params[:body_id]
        documents = Document.filter_by_body_id(body_id).sort_by_id_asc
        json_response({documents: documents}, include_params)
      end

      def create
        document = Document.create!(document_params)
        json_response({document: document})
      end

      def update
        document.update!(document_params)
        json_response({document: @document})
      end

      def destroy
        document.destroy
        json_response({delete: "success"})
      end

      private

      def document_params
        params.require(:body).permit(
            :body_id,
            :document_type_id,
            :compliance_id,
            :reg_date,
            :reg_number,
            :storage_code,
            :note,
            :attachment
        )
      end

      def document
        @document = Document.find(document_id)
      end

      def document_id
        params[:id]
      end

      def include_params
        {
            body: {:only => :name},
            document_type: {:only => :name},
            compliance: {:only => :name},
        }
      end
    end
  end
end