class CreateMaintenanceOperations < ActiveRecord::Migration[5.1]
  def change
    create_table :maintenance_operations do |t|
      t.string :name
      t.timestamps

      t.references :maintenance_component, null: false, index: true, foreign_key: true, on_delete: :cascade
    end
  end
end
