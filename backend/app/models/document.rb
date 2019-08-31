class Document < ApplicationRecord
  belongs_to :body
  belongs_to :document_type
  belongs_to :compliance

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
  mount_uploader :attachment, DocumentAttachmentUploader
end
