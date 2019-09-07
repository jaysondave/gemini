class MaintenanceGroup < ApplicationRecord
  has_many :mainteance_components
  has_many :maintenance
end
