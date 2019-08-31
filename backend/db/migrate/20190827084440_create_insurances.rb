class CreateInsurances < ActiveRecord::Migration[5.1]
  def change
    create_table :insurances do |t|
      t.integer :agency_id
      t.integer :contractor_id
      t.string :company
      t.string :policy_branch
      t.string :policy_number
      t.string :stipulation_date
      t.string :expiration_date
      t.string :warning_date
      t.string :note
      t.string :attachment

      t.references :body, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :payment_frequency, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.timestamps
    end
  end
end
