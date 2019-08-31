class AddNameFieldToOutdoor < ActiveRecord::Migration[5.1]
  def change
    add_column :outdoors, :name, :string, null: false, default: ""
  end
end
