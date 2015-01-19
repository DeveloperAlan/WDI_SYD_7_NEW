class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :name
      t.text :description
      t.text :logo_url

      t.timestamps null: false
    end
  end
end
