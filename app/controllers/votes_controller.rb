class VotesController < ApplicationController
  def create
    @job = Job.find(params[:id])
    @job.vote_count += 1
    if @job.save
      render json: @job, status: 200
    else
      render json: {errors: @job.errors.full_messages}, status: :unprocessable_entity
    end
  end
end
