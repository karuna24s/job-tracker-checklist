class ItemSerializer < ActiveModel::Serializer
  attributes :id, :checklist_id, :task
  belongs_to :checklist
end
