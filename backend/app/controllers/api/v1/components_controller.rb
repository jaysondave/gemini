module Api
  module V1
    class ComponentsController < Api::V1::ApiController
      helper_method :component

      def show
        json_response({ component: component })
      end

      def index
        components = Component.all.sort_by_id_asc
        json_response({ components: components })
      end

      def create
        component = Component.create!(component_params)
        json_response({ component: component })
      end

      def update
        component.update!(component_params)
        json_response({ component: @component })
      end

      def destroy
        component.destroy
        json_response({ delete: 'success' })
      end

      private

      def component_params
        params.require(:component).permit(:name, :active)
      end
      def component
        @component = Component.find(component_id)
      end

      def component_id
        params[:id]
      end
    end
  end
end

