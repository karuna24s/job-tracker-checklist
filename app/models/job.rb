class Job < ApplicationRecord
  has_one :checklist
  belongs_to :user
end
