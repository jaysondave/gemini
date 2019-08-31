class CreatePaymentFrequencies < ActiveRecord::Migration[5.1]
  def change
    create_table :payment_frequencies do |t|
      t.string :name
      t.timestamps
    end
  end
end
