class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :message
      t.integer :timestamp_in_seconds
      t.string :tag

      t.timestamps
    end
  end
end
