class User < ApplicationRecord
    has_many :teams

    has_secure_password

    validates :username, uniqueness: true, presence: true
end
