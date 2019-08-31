class AddCategoryTypeToCategory < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :category_type, :string, null: false, default: ""
  end
end
