class ChecklistsController < ApplicationController

  def show
    # binding.pry
    @checklist = Checklist.find_by({job_id: params[:job_id]})
    render json: @checklist
  end


  # private
  #
  # def checklist_params
  #   params.require(:checklist).permit(:job_id)
  # end

end
