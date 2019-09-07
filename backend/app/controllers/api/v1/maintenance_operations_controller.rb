module Api
  module V1
    class MaintenanceOperationsController < Api::V1::ApiController
      helper_method :maintenance_operation

      def show
        json_response({ maintenance_operation: maintenance_operation })
      end

      def index
        maintenance_operations = MaintenanceOperation.all.sort_by_id_asc
        json_response({ maintenance_operations: maintenance_operations })
      end

      def create
        maintenance_operation = MaintenanceOperation.create!(maintenance_operation_params)
        json_response({ maintenance_operation: maintenance_operation })
      end

      def update
        maintenance_operation.update!(maintenance_operation_params)
        json_response({ maintenance_operation: @maintenance_operation })
      end

      def destroy
        maintenance_operation.destroy
        json_response({ delete: 'success' })
      end

      private

      def maintenance_operation_params
        params.require(:maintenance_operation).permit(:name, :maintenance_component_id)
      end
      def maintenance_operation
        @maintenance_operation = MaintenanceOperation.find(maintenance_operation_id)
      end

      def maintenance_operation_id
        params[:id]
      end
    end
  end
end

