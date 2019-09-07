module Api
  module V1
    class MaintenancesController < Api::V1::ApiController
      helper_method :maintenance

      def show
        json_response({maintenance: maintenance})
      end

      def index
        maintenances = Maintenance.all.sort_by_id_asc
        json_response({maintenances: maintenances})
      end

      def create
        maintenance = Maintenance.create!(maintenance_params)
        json_response({maintenance: maintenance})
      end
      def update
        maintenance.update!(maintenance_params)
        json_response({ maintenance: @maintenance })
      end
      def destroy
        maintenance.destroy
        json_response({delete: "success"})
      end

      private
      def maintenance
        @maintenance = Maintenance.find(maintenance_id)
      end

      def maintenance_params
        params.require(:body).permit(
            :title,
            :reporter_id,
            :admin_id,
            :building_id,
            :body_id,
            :priority,
            :category,
            :due_date,
            :workers,
            :reporting_date,
            :maintenance_group_id,
            :maintenance_component_id,
            :maintenance_operation_id,
            :status,
            :assigned,
            :description,
            :attachment
        )
      end
      def maintenance_id
        params[:id]
      end
      def include_param
        {:component => {:only => :name}, :sub_component => {:only => :name}}
      end

      end
  end
end