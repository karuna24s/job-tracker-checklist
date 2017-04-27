class Job < ApplicationRecord
  has_one :checklist
  belongs_to :user

  after_create_commit :add_checklist


  private

  def add_checklist
    self.create_checklist!
  end


end
