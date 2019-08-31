class ChangeReferranceToRents < ActiveRecord::Migration[5.1]
  def change
    add_column :rents, :landlord_id, :integer
    add_column :rents, :tenant_id, :integer
    add_reference :rents, :body, {index: true, foreign_key: true}
  end
end
