class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end

  def new 
    @ingredidnet = Ingredient.new
  end
end
