class CreateBodies < ActiveRecord::Migration[5.1]
  def change
    create_table :bodies do |t|
      t.string  :name, null: false, unique: true, default: ""
      t.string  :address
      t.string  :zip_code
      t.string  :city
      t.string  :province
      t.string  :cod_fisc
      t.references :body_type, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.timestamps
    end
  end
end
