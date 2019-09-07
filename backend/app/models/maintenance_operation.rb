class MaintenanceOperation < ApplicationRecord
  belongs_to :maintenance_component
  has_many :maintenance
end
