class AddVideoToComments < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :video, foreign_key: true
  end
end
