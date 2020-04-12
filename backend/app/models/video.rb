class Video < ApplicationRecord
    validates :video_url, presence: true
    validates :name, presence: true
end
