# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create({name: 'Eric', email: 'eric@example.com', password: 'secret', avatar_image: 'www.example.com', is_content_creator: true})
user2 = User.create({name: 'Rayesh', email: 'rayesh@example.com', password: 'chicken', avatar_image: 'www.something.com', is_content_creator: false})

video1 = Video.create({video_url: 'www.example.com', name: "Something", thumbnail: 'Something Cool', description: 'first seed', url_id: 'secret', user_id: user1.id})
video2 = Video.create({video_url: 'www.example.com', name: "Something", thumbnail: 'Cool', description: 'second seed', url_id: 'something'})

comment1 = Comment.create({message: 'Damn this so epic', timestamp_in_seconds: 45, tag: 'Epic', video_id: video1.id, user_id: user2.id})
comment1 = Comment.create({message: 'SPICY!!!!!', timestamp_in_seconds: 69, tag: 'Action', video_id: video2.id, user_id: user1.id})

puts 'Seed Files created'