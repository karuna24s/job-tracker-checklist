class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.string :company
      t.string :job_description
      t.string :company_url
      t.date :date
      t.integer :status
      t.string :point_of_contact
      t.string :job_reference
      t.string :tech_stack
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
