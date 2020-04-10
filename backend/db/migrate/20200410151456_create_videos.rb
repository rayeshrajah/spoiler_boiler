class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :video_url
      t.string :name
      t.string :thumbnail
      t.text :description
      t.string :url_id

      t.timestamps
    end
  end
end
