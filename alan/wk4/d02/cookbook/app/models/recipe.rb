# == Schema Information
#
# Table name: recipes
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  course       :string(255)
#  cooktime     :string(255)
#  servingsize  :integer
#  instructions :text
#  image        :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#  book_id      :integer
#

class Recipe < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :book

  has_many :ingredients_recipes 
  has_many :ingredients, through: :ingredients_recipes
end
