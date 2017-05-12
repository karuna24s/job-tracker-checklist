class AddVoteCountToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :vote_count, :integer, :default => 0
  end
end
