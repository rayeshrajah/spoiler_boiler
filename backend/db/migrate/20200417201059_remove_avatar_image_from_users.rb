class RemoveAvatarImageFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :avatar_image, :string
  end
end
