class CreateCadastralKinds < ActiveRecord::Migration[5.1]
  def change
    create_table :cadastral_kinds do |t|
      t.string :name
      t.timestamps
    end
  end
end
