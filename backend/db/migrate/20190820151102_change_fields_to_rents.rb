class ChangeFieldsToRents < ActiveRecord::Migration[5.1]
  def change
    remove_column :rents, :registered
    rename_column :rents, :ISTAL_update_date, :ISTAT_update_date
  end
end
