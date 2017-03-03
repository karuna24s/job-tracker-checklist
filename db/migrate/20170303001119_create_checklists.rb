class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.integer :job_id
      t.timestamps null: false
    end
  end
end
