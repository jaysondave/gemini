module Api
  module V1
    class TargetsController < Api::V1::ApiController
      helper_method :target

      def show
        json_response({ target: target })
      end
      def index
        targets = Target.all.sort_by_id_asc
        json_response({ targets: targets })
      end

      private
      def target
        @target = Target.find(target_id)
      end
      def target_id
        params[:id]
      end
    end
  end
end