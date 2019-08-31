module Api
  module V1
    class BodyTypesController < Api::V1::ApiController
      helper_method :body_type

      def show
        json_response({ body_type: body_type })
      end

      def index
        body_types = BodyType.all.sort_by_id_asc
        json_response({ body_types: body_types })
      end

      def create
        body_type = BodyType.create!(body_type_params)
        json_response({ body_type: body_type })
      end

      def update
        body_type.update!(body_type_params)
        json_response({ body_type: @body_type })
      end

      def destroy
        body_type.destroy
        json_response({ delete: 'success' })
      end

      private

      def body_type_params
        params.require(:body_type).permit(:name, :active)
      end
      def body_type
        @body_type = BodyType.find(body_type_id)
      end

      def body_type_id
        params[:id]
      end
    end
  end
end
