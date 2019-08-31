class RenameFieldToCadastrals < ActiveRecord::Migration[5.1]
  def change
    rename_column :cadastrals, :cadastal_kind_id, :kind_id
  end
end
