module Api
  module V1
    class PaymentFrequenciesController < Api::V1::ApiController
      helper_method :payment_frequency

      def show
        json_response({ payment_frequency: payment_frequency })
      end
      def index
        payment_frequencies = PaymentFrequency.all.sort_by_id_asc
        json_response({ payment_frequencies: payment_frequencies })
      end

      private
      def payment_frequency
        @payment_frequency = PaymentFrequency.find(payment_frequency_id)
      end
      def payment_frequency_id
        params[:id]
      end
    end
  end
end