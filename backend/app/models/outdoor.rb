class Outdoor < ApplicationRecord
  belongs_to :component
  belongs_to :sub_component
  belongs_to :building

  scope :filter_by_building_id, -> (building_id) { where(building_id: building_id) }

  mount_uploader :attachment, OutdoorAttachmentUploader
end
