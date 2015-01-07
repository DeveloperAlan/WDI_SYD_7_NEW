class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text
      t.string :notes
      t.boolean :completed

      t.timestamps
    end
  end
end
