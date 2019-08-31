class CreateRegistrationTaxTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :registration_tax_types do |t|
      t.string :name
      t.timestamps
    end
  end
end
