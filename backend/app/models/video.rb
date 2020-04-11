class Video < ApplicationRecord
    validates :video_url, presence :true
    validates :name, presence :true
    validates :url_id, prensence :true
end
