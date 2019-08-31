module Api
  module V1
    class BuildingTypesController < Api::V1::ApiController
      helper_method :building_type

      def show
        json_response({ building_type: building_type })
      end

      def index
        building_types = BuildingType.all.sort_by_id_asc
        json_response({ building_types: building_types })
      end

      def create
        building_type = BuildingType.create!(building_type_params)
        json_response({ building_type: building_type })
      end

      def update
        building_type.update!(building_type_params)
        json_response({ building_type: @building_type })
      end

      def destroy
        building_type.destroy
        json_response({ delete: 'success' })
      end

      private

      def building_type_params
        params.require(:building_type).permit(:name, :active)
      end
      def building_type
        @building_type = BuildingType.find(building_type_id)
      end

      def building_type_id
        params[:id]
      end
    end
  end
end
