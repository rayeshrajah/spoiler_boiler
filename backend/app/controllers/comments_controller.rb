class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def new
        comment = Comment.new
    end

    def create
        comment = Comment.new(comment_params)
        comment.save
    end
    
    private 
    def comment_params 
        params.require(:comment).permit(:message, :timestamp_in_seconds, :video_id)
    end
end
