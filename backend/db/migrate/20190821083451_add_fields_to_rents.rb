class AddFieldsToRents < ActiveRecord::Migration[5.1]
  def change
    add_column :rents, :registration_tax,:string, null: false, default: ""
    add_column :rents, :rent_model,:string, null: false, default: ""
  end
end
