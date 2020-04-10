class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :avatar_image
      t.boolean :is_content_creator
      t.timestamps
    end
  end
end
