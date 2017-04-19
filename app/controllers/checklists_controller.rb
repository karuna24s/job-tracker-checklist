class ChecklistsController < ApplicationController

  def index
    # binding.pry
    @checklists = Checklist.where(job_id: params[:id])
    if @checklists
      render json: @checklists, status: 200
    end
  end

  def show
    # binding.pry
    @checklist = Checklist.find(params[:id])
    render json: @checklist
  end

  def create
    # binding.pry
    @checklist = Checklist.new(checklist_params)
    @checklist.job_id = params[:id]
    if @checklist.save
      render json: { success: @checklist, status: "success"}
    else
      render json: { errors: @checklist.errors.full_messages,
                     status: "error" }
    end
  end

  private

  def checklist_params
    params.require(:checklist).permit(:job_id)
  end

end
