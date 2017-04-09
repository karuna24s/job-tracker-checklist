class ChecklistsController < ApplicationController

  def index
    @checklists = Checklist.where(job_id: params[:job_id])
    if @checklists
      render json: @checklists, status: 201
    end
  end

  def show
    @checklist = Checklist.find(params[:id])
    render json: @checklist
  end

  def create
    @checklist = Checklist.new(checklist_params)
    @checklist.job_id = params[:id]
    if @checklist.save
      render json: { success: @checklist, status: "success"}
    else
      render json: { errors: @checklist.errors.full_messages,
                     status: "error" }
    end
  end

  def update
    @checklist = Checklist.find(params[:id])
    if @checklist.save(checklist_params)
      render json: { success: @checklist, status: "success"}
    else
      render json: { errors: @checklist.errors.full_messages,
                    status: "error" }
    end
  end

  def destroy
    @checklist = Checklist.find(params[:id])
    @checklist.destroy
  end

  private

  def checklist_params
    params.require(:checklist).permit(:job_id)
  end

end
