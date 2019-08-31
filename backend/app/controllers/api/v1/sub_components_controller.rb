module Api
  module V1
    class SubComponentsController < Api::V1::ApiController
      helper_method :sub_component

      def show
        json_response({ sub_component: sub_component })
      end

      def index
        sub_components = SubComponent.all.sort_by_id_asc
        json_response({ sub_components: sub_components })
      end

      def create
        sub_component = SubComponent.create!(sub_component_params)
        json_response({ sub_component: sub_component })
      end

      def update
        sub_component.update!(sub_component_params)
        json_response({ component: @sub_component })
      end

      def destroy
        sub_component.destroy
        json_response({ delete: 'success' })
      end

      private

      def sub_component_params
        params.require(:sub_component).permit(:name, :active)
      end
      def sub_component
        @sub_component = SubComponent.find(sub_component_id)
      end

      def sub_component_id
        params[:id]
      end
    end
  end
end

