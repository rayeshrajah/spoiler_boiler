class Comment < ApplicationRecord
    validates :message, presence: true
    validates :timestamp_in_seconds, presence: true
    validates :video_id, presence: true
    validates :tag, presence: true, length: { within: 3..9 }
end
