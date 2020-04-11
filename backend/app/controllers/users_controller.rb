class UsersController < ApplicationController
    def index
       @users = User.all
       render json: {status: "sucess", message: "loaded users", data: @users}, status: :ok
    end
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: {status: "sucess", message: "created users", data: @user}, status: :ok   
        else
            render json: {status: "error", message: "Did not create user", data: @user.errors}, status: :unprocessable_entity   
        end
    end
    
    private 
    def user_params 
        params.permit(:name, :email, :password)
    end
end
