class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :job_id
  has_many :items
  belongs_to :job
end
