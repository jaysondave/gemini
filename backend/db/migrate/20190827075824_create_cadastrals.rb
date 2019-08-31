class CreateCadastrals < ActiveRecord::Migration[5.1]
  def change
    create_table :cadastrals do |t|
      t.string :cadastral_type
      t.string :province
      t.string :section_register
      t.string :fg
      t.string :sub
      t.string :category
      t.string :census_area
      t.string :consistancy
      t.string :reg_date
      t.string :address
      t.string :data_from
      t.string :heading
      t.string :note
      t.string :city
      t.string :area_mq
      t.string :name
      t.string :part
      t.string :sub_part
      t.string :cadastral_class
      t.string :micro_zone
      t.string :income
      t.string :agricultural_income
      t.string :dominicale_income
      t.string :deduction
      t.string :attachment

      t.timestamps

      t.references :body, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :cadastral_kind, null: false, index: true, foreign_key: true, on_delete: :cascade
      t.references :compliance, null: false, index: true, foreign_key: true, on_delete: :cascade
    end
  end
end
