class PaymentFrequency < ApplicationRecord
  has_many :rents
  has_many :insurances
end
