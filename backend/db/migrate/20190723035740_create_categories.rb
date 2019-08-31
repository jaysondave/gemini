class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|

      t.string :name, null: false, unique: true, default: ""
      t.boolean :active, null: false, default: true
      t.timestamps
    end
  end
end
