class ChangeReferenceToCadastrals < ActiveRecord::Migration[5.1]
  def change
    remove_reference :cadastrals, :cadastral_kind
    add_column :cadastrals, :cadastal_kind_id, :integer
  end
end
