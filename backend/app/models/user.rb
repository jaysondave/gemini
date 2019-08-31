class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User


  validates :uid, uniqueness: { scope: :provider }

  before_validation :init_uid

  belongs_to :category
  has_many :primary_rents, :class_name => "Rent", :foreign_key => "landlord_id"
  has_many :secondary_rents, :class_name => "Rent", :foreign_key => "tenant_id"

  has_many :primary_insurances, :class_name => "Insurance", :foreign_key => "agency_id"
  has_many :secondary_insurances, :class_name => "Insurance", :foreign_key => "contractor_id"

  scope :by_type, ->(user_type) { where(user_type: user_type) }

  private

  def uses_email?
    provider == 'email' || email.present?
  end

  def init_uid
    self.uid = email if uid.blank? && provider == 'email'
  end

end
