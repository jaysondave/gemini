class AddBuildingCodeBodyCodeToBuildingTableBodyTable < ActiveRecord::Migration[5.1]
  def change
    add_column :buildings, :building_code, :string, unique: true
    add_column :bodies, :body_code, :string, unique: true
  end
end
