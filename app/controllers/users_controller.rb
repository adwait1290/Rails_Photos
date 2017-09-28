class UsersController < ApplicationController
	def register
		
	end

	def create_user
		@user = User.create(user_params)
		puts params[:user][:password]
		if @user.save
			session[:user_id] = @user.id
			redirect_to users_show_path
		else
			flash[:user_errors] = @user.errors.full_messages
			redirect_to users_register_path
		end
	end

	def login
		@message = flash[:message]
		@error = flash[:login_error]
	end
	def show
		if session[:user_id]
			@user = User.find(params[:id])
			@photos = @user.photos
		else
			redirect_to session_path
		end
	end
	private 
	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :city, :state, :password, :age)
	end
end
