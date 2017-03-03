class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :task
      t.integer :checklist_id
      t.timestamps null: false
    end
  end
end
