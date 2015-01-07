class TodosController < ApplicationController
  before_action :find_todo, only: [:show, :edit, :update, :destroy]
  def index
    @todo = Todo.all
  end

  def show 
  end

  def new 
    @todo = Todo.new
  end

  def create
    @todo = Todo.create(todo_params)
    redirect_to @todo
  end

  def edit
  end

  def update
    @todo.update(todo_params)
    redirect_to @todo
  end

  def destroy
    @todo.destroy
    redirect_to root_path
  end
  
  private 
  def todo_params
    params.require(:todo).permit(:text, :notes, :completed)
  end

  def find_todo
    @todo = Todo.find(params[:id])
  end
end
