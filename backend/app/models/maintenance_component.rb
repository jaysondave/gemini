class MaintenanceComponent < ApplicationRecord
  belongs_to :mainteance_group
  has_many :mainteance_operations
  has_many :maintenance
end
