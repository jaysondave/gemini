class Cadastral < ApplicationRecord
  belongs_to :body
  belongs_to :compliance
  belongs_to :kind, :class_name => "CadastralKind"

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
  mount_uploader :attachment, CadastralAttachmentUploader
end
