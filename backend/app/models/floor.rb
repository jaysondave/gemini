class Floor < ApplicationRecord
  belongs_to :target
  belongs_to :body

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
  mount_uploader :attachment, FloorAttachmentUploader
end
