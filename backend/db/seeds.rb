nocategory = Category.create!(name: "nocategory", active: false) unless Category.find_by(name: 'nocategory')

User.create!(email: 'admin@geminismart.net', password: 'admin123', user_type: 'admin', category_id: nocategory.id) unless User.find_by(email: 'admin@gmail.com')

#Seed Targets
%w(OFFICES RESIDENTIAL COMMERCIAL SCHOOL ASYLUM WAREHOUSE SURGERIES SHOPS).each do |target|
  Target.create(name: target) unless Target.find_by(name: target)
end

#Seed Contract Types
["Loan of use", "Service Contract", "Contract", "Rent"].each do |contract_type|
  ContractType.create(name: contract_type) unless ContractType.find_by(name: contract_type)
end

#Seed Registration Tax Type
["Annual", "Entire period", "Verbal contract",].each do |reg_tax_type|
  RegistrationTaxType.create(name: reg_tax_type) unless RegistrationTaxType.find_by(name: reg_tax_type)
end

#Seed Registration Tax Type
["Free", "Monthly", "Quarterly", "Annual", "Two years", "Three years", "Four years", "Five years"].each do |payment_frequency|
  PaymentFrequency.create(name: payment_frequency) unless PaymentFrequency.find_by(name: payment_frequency)
end

#Seed Compliance
["Compliant", "To be tested", "Not up to standard", "Not certified"].each do |compliance|
  Compliance.create(name: compliance) unless Compliance.find_by(name: compliance)
end
