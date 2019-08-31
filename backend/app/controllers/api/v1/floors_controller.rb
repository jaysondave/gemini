module Api
  module V1
    class FloorsController < Api::V1::ApiController
      helper_method :floor

      def show
        json_response({floor: floor})
      end

      def index
        body_id = params[:body_id]
        floors = Floor.filter_by_body_id(body_id).sort_by_id_asc
        json_response({floors: floors}, include_param)
      end

      def create
        floor = Floor.create!(floor_params)
        json_response({floor: floor})
      end
      def update
        floor.update!(floor_params)
        json_response({ floor: @floor })
      end
      def destroy
        floor.destroy
        json_response({delete: "success"})
      end

      private
      def floor
        @floor = Floor.find(floor_id)
      end

      def floor_params
        params.require(:body).permit(
            :body_id,
            :target_id,
            :name,
            :attachment
        )
      end
      def floor_id
        params[:id]
      end
      def include_param
        {:target => {:only => :name}}
      end
    end
  end
end

