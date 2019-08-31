class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  scope :sort_by_id_asc, -> { order(id: :asc) }
end
