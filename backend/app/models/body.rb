class Body < ApplicationRecord
  belongs_to :body_type
  belongs_to :building
  has_many :floors
  has_many :rents
  has_many :body_systems
  has_many :documents
  has_many :certificates
  has_many :cadastrals
  has_many :insurances
  has_many :maintenances, :class_name => "Maintenance", :foreign_key => "body_id"
  scope :filter_by_building_id, -> (building_id) { where(building_id: building_id) }
end
