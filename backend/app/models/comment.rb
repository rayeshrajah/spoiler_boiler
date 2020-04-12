class Comment < ApplicationRecord
    validates :message, presence: true
    validates :timestamp_in_seconds, presence: true
end
