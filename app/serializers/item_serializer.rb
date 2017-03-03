class ItemSerializer < ActiveModel::Serializer
  attributes :id, :task
  belongs_to :checklist
end
