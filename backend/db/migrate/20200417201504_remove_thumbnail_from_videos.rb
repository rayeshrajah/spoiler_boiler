class RemoveThumbnailFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :thumbnail, :string
  end
end
