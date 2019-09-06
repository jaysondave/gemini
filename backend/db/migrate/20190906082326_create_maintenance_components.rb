class CreateMaintenanceComponents < ActiveRecord::Migration[5.1]
  def change
    create_table :maintenance_components do |t|
      t.string :name
      t.timestamps

      t.references :maintenance_group, null: false, index: true, foreign_key: true, on_delete: :cascade
    end
  end
end
