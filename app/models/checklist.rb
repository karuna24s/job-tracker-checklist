class Checklist < ApplicationRecord
  belongs_to :job
  has_many :items
end
