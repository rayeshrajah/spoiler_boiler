class RemoveUrlIdFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :url_id, :string
  end
end
