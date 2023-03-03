class User < ApplicationRecord

    has_many :teams

    has_secure_password

    validates :username, uniqueness: true, presence: true
    validate :no_bad_words, :no_spaces

    private

    BAD_WORDS = %w(nigg chink cunt bitch shit cock penis vagina pussy dick balls fuck nazi skinhead kike faggot rape jew)

    def no_spaces
        if username.include?(" ")
            errors.add(:username, "no spaces please")
        end
    end

    def no_bad_words
        justLetters = username.gsub(/[^a-zA-Z]/, '')
        lowerName = justLetters.downcase
        if BAD_WORDS.any? { |word| lowerName.include?(word)}
            errors.add(:username, "please stop")
        end
    end

end
