module Api
  module V1
    class BuildingsController < Api::V1::ApiController
      helper_method :building

      def show
        json_response({building: building})
      end

      def index
        buildings = Building.all.sort_by_id_asc
        json_response({buildings: buildings}, include_param)
      end

      def create
        param = building_params.merge!({building_code: code})
        building = Building.create!(param)
        json_response({building: building})
      end
      def update
        building.update!(building_params)
        json_response({ building: @building })
      end
      def destroy
        building.destroy
        json_response({delete: "success"})
      end

      private
      def building
        @building = Building.find(building_id)
      end

      def building_params
        params.require(:building).permit(
            :building_type_id,
            :name,
            :address,
            :zip_code,
            :city,
            :province,
            :cod_fisc
        )
      end
      def building_id
        params[:id]
      end

      def include_param
        {:building_type => {:only => :name}, :bodies => {:only => [:id, :name]}}
      end

      def code
        gen_random_string(7)
      end
    end
  end
end
