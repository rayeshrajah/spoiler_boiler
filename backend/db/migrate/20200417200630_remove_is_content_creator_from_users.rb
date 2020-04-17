class RemoveIsContentCreatorFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :is_content_creator
  end
end
