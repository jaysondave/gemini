class CreateCompliances < ActiveRecord::Migration[5.1]
  def change
    create_table :compliances do |t|
      t.string :name
      t.timestamps
    end
  end
end
