class AddCategoryReferenceToUser < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :category, {index: true, foreign_key: true}
  end
end
