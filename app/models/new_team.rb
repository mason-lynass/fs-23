class NewTeam < ApplicationRecord
  belongs_to :user
  belongs_to :r1, class_name: 'Rikishi'
  belongs_to :r2, class_name: 'Rikishi'
  belongs_to :r3, class_name: 'Rikishi'
  belongs_to :r4, class_name: 'Rikishi'
  belongs_to :r5, class_name: 'Rikishi'
  belongs_to :r6, class_name: 'Rikishi'
  belongs_to :r7, class_name: 'Rikishi'
end
