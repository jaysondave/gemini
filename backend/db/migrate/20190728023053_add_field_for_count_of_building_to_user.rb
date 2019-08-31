class AddFieldForCountOfBuildingToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :count_building_to_manage, :integer, null: true
  end
end
