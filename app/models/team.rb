class Team < ApplicationRecord
    belongs_to :user

    validates :r1, :r2, :r3, :r4, :r5, :r6, :r7, length: { minimum: 3 }
end
