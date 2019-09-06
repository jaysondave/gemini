# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190906082641) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bodies", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "address"
    t.string "zip_code"
    t.string "city"
    t.string "province"
    t.string "cod_fisc"
    t.bigint "body_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "body_code"
    t.bigint "building_id"
    t.index ["body_type_id"], name: "index_bodies_on_body_type_id"
    t.index ["building_id"], name: "index_bodies_on_building_id"
  end

  create_table "body_systems", force: :cascade do |t|
    t.string "component"
    t.string "brand"
    t.string "system_model"
    t.string "description"
    t.string "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "body_id", null: false
    t.index ["body_id"], name: "index_body_systems_on_body_id"
  end

  create_table "body_types", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "building_types", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buildings", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "address"
    t.string "zip_code"
    t.string "city"
    t.string "province"
    t.string "cod_fisc"
    t.bigint "building_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "building_code"
    t.index ["building_type_id"], name: "index_buildings_on_building_type_id"
  end

  create_table "cadastral_kinds", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cadastrals", force: :cascade do |t|
    t.string "cadastral_type"
    t.string "province"
    t.string "section_register"
    t.string "fg"
    t.string "sub"
    t.string "category"
    t.string "census_area"
    t.string "consistancy"
    t.string "reg_date"
    t.string "address"
    t.string "data_from"
    t.string "heading"
    t.string "note"
    t.string "city"
    t.string "area_mq"
    t.string "name"
    t.string "part"
    t.string "sub_part"
    t.string "cadastral_class"
    t.string "micro_zone"
    t.string "income"
    t.string "agricultural_income"
    t.string "dominicale_income"
    t.string "deduction"
    t.string "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "body_id", null: false
    t.bigint "compliance_id", null: false
    t.string "part_fg"
    t.integer "kind_id"
    t.index ["body_id"], name: "index_cadastrals_on_body_id"
    t.index ["compliance_id"], name: "index_cadastrals_on_compliance_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category_type", default: "", null: false
  end

  create_table "certificate_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "certificates", force: :cascade do |t|
    t.string "reg_date"
    t.string "reg_number"
    t.string "storage_code"
    t.string "note"
    t.string "expiry_date"
    t.string "expiry_notice_date"
    t.string "attachment"
    t.bigint "body_id", null: false
    t.bigint "certificate_type_id", null: false
    t.bigint "compliance_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_certificates_on_body_id"
    t.index ["certificate_type_id"], name: "index_certificates_on_certificate_type_id"
    t.index ["compliance_id"], name: "index_certificates_on_compliance_id"
  end

  create_table "compliances", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "components", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contract_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "document_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", force: :cascade do |t|
    t.string "reg_date"
    t.string "reg_number"
    t.string "storage_code"
    t.string "note"
    t.string "attachment"
    t.bigint "body_id", null: false
    t.bigint "document_type_id", null: false
    t.bigint "compliance_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_documents_on_body_id"
    t.index ["compliance_id"], name: "index_documents_on_compliance_id"
    t.index ["document_type_id"], name: "index_documents_on_document_type_id"
  end

  create_table "floors", force: :cascade do |t|
    t.string "name"
    t.string "attachment"
    t.bigint "target_id", null: false
    t.bigint "body_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_floors_on_body_id"
    t.index ["target_id"], name: "index_floors_on_target_id"
  end

  create_table "insurances", force: :cascade do |t|
    t.integer "agency_id"
    t.integer "contractor_id"
    t.string "company"
    t.string "policy_branch"
    t.string "policy_number"
    t.string "stipulation_date"
    t.string "expiration_date"
    t.string "warning_date"
    t.string "note"
    t.string "attachment"
    t.bigint "body_id", null: false
    t.bigint "payment_frequency_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_insurances_on_body_id"
    t.index ["payment_frequency_id"], name: "index_insurances_on_payment_frequency_id"
  end

  create_table "maintenance_components", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "maintenance_group_id", null: false
    t.index ["maintenance_group_id"], name: "index_maintenance_components_on_maintenance_group_id"
  end

  create_table "maintenance_groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maintenance_operations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "maintenance_component_id", null: false
    t.index ["maintenance_component_id"], name: "index_maintenance_operations_on_maintenance_component_id"
  end

  create_table "outdoors", force: :cascade do |t|
    t.string "condition"
    t.string "note"
    t.string "attachment"
    t.bigint "component_id", null: false
    t.bigint "sub_component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "building_id"
    t.string "name", default: "", null: false
    t.index ["building_id"], name: "index_outdoors_on_building_id"
    t.index ["component_id"], name: "index_outdoors_on_component_id"
    t.index ["sub_component_id"], name: "index_outdoors_on_sub_component_id"
  end

  create_table "payment_frequencies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "registration_tax_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rents", force: :cascade do |t|
    t.string "fg"
    t.string "fg_part"
    t.string "sub"
    t.string "category"
    t.string "rent_class"
    t.string "contract_description"
    t.string "reg_date"
    t.string "reg_number"
    t.string "rental_fee"
    t.string "storage_code"
    t.string "note"
    t.string "expiry_date"
    t.string "expiry_notice_date"
    t.string "ISTAT_update_date"
    t.string "end_date"
    t.bigint "contract_type_id", null: false
    t.bigint "registration_tax_type_id", null: false
    t.bigint "payment_frequency_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "landlord_id"
    t.integer "tenant_id"
    t.bigint "body_id"
    t.string "registration_tax", default: "", null: false
    t.string "rent_model", default: "", null: false
    t.index ["body_id"], name: "index_rents_on_body_id"
    t.index ["contract_type_id"], name: "index_rents_on_contract_type_id"
    t.index ["payment_frequency_id"], name: "index_rents_on_payment_frequency_id"
    t.index ["registration_tax_type_id"], name: "index_rents_on_registration_tax_type_id"
  end

  create_table "sub_components", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.boolean "active", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "targets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "user_type", default: ""
    t.string "first_name", default: ""
    t.string "last_name", default: ""
    t.string "picture", default: ""
    t.string "business_name", default: ""
    t.string "address", default: ""
    t.string "home_number", default: ""
    t.string "zip_code", default: ""
    t.string "city", default: ""
    t.string "province", default: ""
    t.string "cod_fisc", default: ""
    t.string "p_lva", default: ""
    t.string "mobile", default: ""
    t.string "phone", default: ""
    t.string "pec", default: ""
    t.string "cuu", default: ""
    t.string "specialization", default: ""
    t.string "building", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.json "tokens"
    t.bigint "category_id"
    t.integer "count_building_to_manage"
    t.index ["category_id"], name: "index_users_on_category_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "bodies", "body_types"
  add_foreign_key "bodies", "buildings"
  add_foreign_key "body_systems", "bodies"
  add_foreign_key "buildings", "building_types"
  add_foreign_key "cadastrals", "bodies"
  add_foreign_key "cadastrals", "compliances"
  add_foreign_key "certificates", "bodies"
  add_foreign_key "certificates", "certificate_types"
  add_foreign_key "certificates", "compliances"
  add_foreign_key "documents", "bodies"
  add_foreign_key "documents", "compliances"
  add_foreign_key "documents", "document_types"
  add_foreign_key "floors", "bodies"
  add_foreign_key "floors", "targets"
  add_foreign_key "insurances", "bodies"
  add_foreign_key "insurances", "payment_frequencies"
  add_foreign_key "maintenance_components", "maintenance_groups"
  add_foreign_key "maintenance_operations", "maintenance_components"
  add_foreign_key "outdoors", "buildings"
  add_foreign_key "outdoors", "components"
  add_foreign_key "outdoors", "sub_components"
  add_foreign_key "rents", "bodies"
  add_foreign_key "rents", "contract_types"
  add_foreign_key "rents", "payment_frequencies"
  add_foreign_key "rents", "registration_tax_types"
  add_foreign_key "users", "categories"
end
