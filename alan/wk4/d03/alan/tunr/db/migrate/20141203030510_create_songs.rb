class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :year
      t.string :genre
      t.integer :duration

      t.timestamps
    end
  end
end
