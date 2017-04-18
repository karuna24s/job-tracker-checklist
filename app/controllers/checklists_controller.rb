class ChecklistsController < ApplicationController
  # before_action :get_checklist, only: [:show]

  def index
    # binding.pry
    @checklists = Checklist.where(job_id: params[:id])
    if @checklists
      render json: @checklists, status: 200
    end
  end

  def show
    @checklist = Checklist.find(params[:id])
    render json: @checklist
    # if @checklist
    #   render json: @checklist, status: 201
    # else
    #   render json:'', status: 404
    # end
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

  # def update
  #   if @checklist.update(checklist_params)
  #     render json: @checklist, status: 201
  #   else
  #     render json: {errors: @checklist.errors.full_messages}, status: :unprocessable_entity
  #   end
  # end

  def destroy
    @checklist = Checklist.find_by(id: params[:id])
    @checklist.destroy
  end

  private

  # def get_checklist
  #   @checklist = Checklist.find_by(id: params[:id])
  # end

  def checklist_params
    params.require(:checklist).permit(:job_id)
  end

end
