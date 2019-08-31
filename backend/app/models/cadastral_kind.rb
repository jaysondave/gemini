class CadastralKind < ApplicationRecord
  has_many :cadastrals, :class_name => "Cadastral", :foreign_key => "kind_id"
end
