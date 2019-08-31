class Certificate < ApplicationRecord
  belongs_to :certificate_type
  belongs_to :body
  belongs_to :compliance

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
  mount_uploader :attachment, CertificateAttachmentUploader
end
