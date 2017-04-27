class ChecklistsController < ApplicationController

  def show
    @checklist = Checklist.find_by({job_id: params[:job_id]})
    render json: @checklist
  end

end
