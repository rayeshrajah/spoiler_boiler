class VideosController < ApplicationController
    def index
        @videos = Video.all
        render json: @videos
    end
end
