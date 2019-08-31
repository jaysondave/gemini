class CreateBodySystems < ActiveRecord::Migration[5.1]
  def change
    create_table :body_systems do |t|
      t.string :component
      t.string :brand
      t.string :system_model
      t.string :description
      t.string :attachment
      t.timestamps

      t.references :body, null: false, index: true, foreign_key: true, on_delete: :cascade
    end
  end
end
