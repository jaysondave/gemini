module Api
  module V1
    class CadastralsController < Api::V1::ApiController
      helper_method :cadastral

      def show
        json_response({cadastral: cadastral})
      end

      def index
        body_id = params[:body_id]
        cadastrals = Cadastral.filter_by_body_id(body_id).sort_by_id_asc
        json_response({cadastrals: cadastrals}, include_params)
      end

      def create
        cadastral = Cadastral.create!(cadastral_params)
        json_response({cadastral: cadastral})
      end

      def update
        cadastral.update!(cadastral_params)
        json_response({cadastral: @cadastral})
      end

      def destroy
        cadastral.destroy
        json_response({delete: "success"})
      end

      private

      def cadastral_params
        params.require(:body).permit(
            :body_id,
            :kind_id,
            :compliance_id,
            :cadastral_type,
            :province,
            :section_register,
            :fg,
            :part_fg,
            :sub,
            :sub_part,
            :category,
            :census_area,
            :consistancy,
            :reg_date,
            :address,
            :data_from,
            :heading,
            :note,
            :city,
            :area_mq,
            :part,
            :name,
            :cadastral_class,
            :micro_zone,
            :income,
            :agricultural_income,
            :dominicale_income,
            :deduction,
            :attachment
        )
      end

      def cadastral
        @cadastral = Cadastral.find(cadastral_id)
      end

      def cadastral_id
        params[:id]
      end

      def include_params
        {
            body: {:only => :name},
            kind: {cadastral_kind: {}},
            compliance: {:only => :name},
        }
      end
    end
  end
end