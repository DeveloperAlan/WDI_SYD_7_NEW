require 'rails_helper'

RSpec.describe Post, :type => :model do
  if 'counts the number of comments' do 
    post = Post.create(title: 'Welcome to my blog', content: 'Lorem ipsum')
    post.comments.create(content: "Lorem ipsum")
    post.comments.create(content: "loream ipsum")
    expect.comments 
end
