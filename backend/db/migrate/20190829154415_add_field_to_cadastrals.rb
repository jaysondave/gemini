class AddFieldToCadastrals < ActiveRecord::Migration[5.1]
  def change
    add_column :cadastrals, :part_fg, :string
  end
end
