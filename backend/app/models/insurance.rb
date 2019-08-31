class Insurance < ApplicationRecord
  belongs_to :user
  belongs_to :agency, :class_name => "User"
  belongs_to :contractor, :class_name => "User"
  belongs_to :payment_frequency
  belongs_to :body

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
  mount_uploader :attachment, InsuranceAttachmentUploader
end
