module Api
  module V1
    class OutdoorsController < Api::V1::ApiController
      helper_method :outdoor

      def show
        json_response({outdoor: outdoor})
      end

      def index
        building_id = params[:building_id]
        outdoors = Outdoor.filter_by_building_id(building_id).sort_by_id_asc
        json_response({outdoors: outdoors}, include_param)
      end

      def create
        outdoor = Outdoor.create!(outdoor_params)
        json_response({outdoor: outdoor})
      end
      def update
        outdoor.update!(outdoor_params)
        json_response({ outdoor: @outdoor })
      end
      def destroy
        outdoor.destroy
        json_response({delete: "success"})
      end

      private
      def outdoor
        @outdoor = Outdoor.find(outdoor_id)
      end

      def outdoor_params
        params.require(:body).permit(
            :building_id,
            :component_id,
            :sub_component_id,
            :name,
            :note,
            :condition,
            :attachment
        )
      end
      def outdoor_id
        params[:id]
      end
      def include_param
        {:component => {:only => :name}, :sub_component => {:only => :name}}
      end
    end
  end
end

