class Rent < ApplicationRecord
  belongs_to :user
  belongs_to :body
  belongs_to :landlord, :class_name => "User"
  belongs_to :tenant, :class_name => "User"
  belongs_to :contract_type
  belongs_to :registration_tax_type
  belongs_to :payment_frequency

  scope :filter_by_body_id, -> (body_id) { where(body_id: body_id) }
end
