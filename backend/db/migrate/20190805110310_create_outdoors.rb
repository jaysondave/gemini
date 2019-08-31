class CreateOutdoors < ActiveRecord::Migration[5.1]
  def change
    create_table :outdoors do |t|
      t.string :condition
      t.string :note
      t.string :attachment
      t.references :component, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :sub_component, null: false, index: true, foreign_key: true, on_delete: :cascade

      t.timestamps
    end
  end
end
