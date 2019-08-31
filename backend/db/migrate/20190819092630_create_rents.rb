class CreateRents < ActiveRecord::Migration[5.1]
  def change
    create_table :rents do |t|

      t.string :fg
      t.string :fg_part
      t.string :sub
      t.string :category
      t.string :rent_class
      t.string :contract_description
      t.string :reg_date
      t.string :reg_number
      t.string :rental_fee
      t.string :storage_code
      t.boolean :registered, default: false
      t.string :note
      t.string :expiry_date
      t.string :expiry_notice_date
      t.string :ISTAL_update_date
      t.string :end_date
      t.references :contract_type, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :registration_tax_type, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :payment_frequency, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.timestamps
    end
  end
end
