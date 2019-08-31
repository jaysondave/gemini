class Compliance < ApplicationRecord
  has_many :documents
  has_many :certificates
  has_many :cadastrals
end
