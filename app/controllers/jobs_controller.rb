class JobsController < ApplicationController
  before_action :get_job, only: [:show, :update]

  def index
    @jobs = Job.where(user: current_user)
    if @jobs
      render json: @jobs, status: 200
    else
      render json: {errors: @jobs.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    if @job
      render json: @job, status: 200
    else
      render json:'', status: 404
    end
  end

  def create
    @job = Job.new(job_params)
    @job.user = current_user
    if @job.save
      render json: @job, status: 200
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job, status: 200
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @job = Job.find_by(id: params[:id], user: current_user)
    @job.destroy
  end

  private

  def get_job
    @job = Job.find_by(id: params[:id], user: current_user)
  end

  def job_params
    params.require(:job).permit(:job_title, :company, :job_description, :company_url, :date, :status,
     :point_of_contact, :job_reference, :user_id, :tech_stack)
  end

end
