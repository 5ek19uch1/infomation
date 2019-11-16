class PostsController < ApplicationController
  def index

  end

  def show

  end

  def new
    
  end

  def create
    @post = Post.new
    @post.save
    redirect_to("/posts/new")
  end
end
