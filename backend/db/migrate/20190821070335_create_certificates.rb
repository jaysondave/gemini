class CreateCertificates < ActiveRecord::Migration[5.1]
  def change
    create_table :certificates do |t|
      t.string :reg_date
      t.string :reg_number
      t.string :storage_code
      t.string :note
      t.string :expiry_date
      t.string :expiry_notice_date
      t.string :attachment

      t.references :body, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :certificate_type, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :compliance, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.timestamps
    end
  end
end
