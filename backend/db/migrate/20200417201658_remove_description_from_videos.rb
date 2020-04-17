class RemoveDescriptionFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :description, :text
  end
end
