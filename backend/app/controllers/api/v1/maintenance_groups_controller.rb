module Api
  module V1
    class MaintenanceGroupsController < Api::V1::ApiController
      helper_method :maintenance_group

      def show
        json_response({ maintenance_group: maintenance_group })
      end

      def index
        maintenance_groups = MaintenanceGroup.all.sort_by_id_asc
        json_response({ maintenance_groups: maintenance_groups })
      end

      def create
        maintenance_group = MaintenanceGroup.create!(maintenance_group_params)
        json_response({ maintenance_group: maintenance_group })
      end

      def update
        maintenance_group.update!(maintenance_group_params)
        json_response({ maintenance_group: @maintenance_group })
      end

      def destroy
        maintenance_group.destroy
        json_response({ delete: 'success' })
      end

      private

      def maintenance_group_params
        params.require(:maintenance_group).permit(:name)
      end
      def maintenance_group
        @maintenance_group = MaintenanceGroup.find(maintenance_group_id)
      end

      def maintenance_group_id
        params[:id]
      end
    end
  end
end

