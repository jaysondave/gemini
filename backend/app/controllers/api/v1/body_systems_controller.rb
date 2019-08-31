module Api
  module V1
    class BodySystemsController < Api::V1::ApiController
      helper_method :system
      def show
        json_response({system: system})
      end

      def index
        body_id = params[:body_id]
        systems = BodySystem.filter_by_body_id(body_id).sort_by_id_asc
        json_response({systems: systems}, include_params)
      end

      def create
        system = BodySystem.create!(system_params)
        json_response({system: system})
      end

      def update
        system.update!(system_params)
        json_response({ system: @system })
      end

      def destroy
        system.destroy
        json_response({delete: "success"})
      end

      private
      def system_params
        params.require(:body).permit(
            :body_id,
            :component,
            :brand,
            :system_model,
            :description,
            :attachment
        )
      end

      def system
        @system = BodySystem.find(system_id)
      end

      def system_id
        params[:id]
      end

      def include_params
        {
            body: {:only => :name}
        }
      end
    end
  end
end