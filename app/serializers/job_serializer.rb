class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_title, :company, :job_description, :company_url, :date, :status, :point_of_contact, :job_reference, :user_id, :tech_stack, :created_at, :updated_at
  has_one :checklist
  belongs_to :user
end
