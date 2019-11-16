class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :main_title
      t.text :sub_title
      t.integer :genre_id
      t.text :content

      t.timestamps
    end
  end
end