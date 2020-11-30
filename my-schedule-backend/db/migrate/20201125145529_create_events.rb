class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :duration
      t.references :schedule, null: false, foreign_key: true

      t.timestamps
    end
  end
end
