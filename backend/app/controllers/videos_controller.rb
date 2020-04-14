class VideosController < ApplicationController
    def index
        @videos = Video.all
        render json: @videos
    end
    def new
        video = Video.new
    end

    def create
        video = Video.new(video_params)
        video.save
    end
    
    private 
    def video_params 
        params.require(:video).permit(:name, :video_url)
    end
end
