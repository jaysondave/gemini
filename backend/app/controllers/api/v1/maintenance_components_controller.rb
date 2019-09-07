module Api
  module V1
    class MaintenanceComponentsController < Api::V1::ApiController
      helper_method :maintenance_component

      def show
        json_response({ maintenance_component: maintenance_component })
      end

      def index
        maintenance_components = MaintenanceComponent.all.sort_by_id_asc
        json_response({ maintenance_components: maintenance_components })
      end

      def create
        maintenance_component = MaintenanceComponent.create!(maintenance_component_params)
        json_response({ maintenance_component: maintenance_component })
      end

      def update
        maintenance_component.update!(maintenance_component_params)
        json_response({ maintenance_component: @maintenance_component })
      end

      def destroy
        maintenance_component.destroy
        json_response({ delete: 'success' })
      end

      private

      def maintenance_component_params
        params.require(:maintenance_component).permit(:name, :maintenance_group_id)
      end
      def maintenance_component
        @maintenance_component = MaintenanceComponent.find(maintenance_component_id)
      end

      def maintenance_component_id
        params[:id]
      end
    end
  end
end

