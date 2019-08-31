module Api
  module V1
    class CadastralKindsController < Api::V1::ApiController
      helper_method :cadastral_kind

      def show
        json_response({ cadastral_kind: cadastral_kind })
      end

      def index
        cadastral_kinds = CadastralKind.all.sort_by_id_asc
        json_response({ cadastral_kinds: cadastral_kinds })
      end

      def create
        cadastral_kind = CadastralKind.create!(cadastral_kind_params)
        json_response({cadastral_kind: cadastral_kind})
      end

      def update
        cadastral_kind.update!(cadastral_kind_params)
        json_response({ cadastral_kind: @cadastral_kind })
      end

      def destroy
        cadastral_kind.destroy
        json_response({delete: "success"})
      end

      private
      def cadastral_kind
        @cadastral_kind = CadastralKind.find(cadastral_kind_id)
      end
      def cadastral_kind_params
        params.require(:cadastral_kind).permit(
            :name
        )
      end
      def cadastral_kind_id
        params[:id]
      end
    end
  end
end