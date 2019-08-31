class CreateFloors < ActiveRecord::Migration[5.1]
  def change
    create_table :floors do |t|
      t.string :name
      t.string :attachment
      t.references :target, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :body, null: false, index: true, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
