# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create({name: 'Eric', email: 'eric@example.com', password: 'secret', avatar_image: 'www.example.com', is_content_creator: true})
user2 = User.create({name: 'Rayesh', email: 'rayesh@example.com', password: 'chicken', avatar_image: 'www.something.com', is_content_creator: false})

video1 = Video.create({video_url: 'https://www.youtube.com/watch?v=QTATI7MXwII', name: "Demon Slayer Kimetsu no Yaiba『Water Breathing』| OST Volume 2", thumbnail: 'https://www.placecage.com/c/200/300', description: 'first seed', url_id: 'secret', user_id: user1.id})
video2 = Video.create({video_url: 'https://www.youtube.com/watch?v=n8ok5xT5FsM', name: "Demon Slayer: Kimetsu no Yaiba Movie OST - Set Your Heart Ablaze ~Demon Extermination~", thumbnail: 'https://www.placecage.com/c/200/300', description: 'second seed', url_id: 'something'})
video3 = Video.create({video_url: 'https://www.youtube.com/watch?v=ab8_fefO3vY', name: "The Ninth One | My Hero Academia", thumbnail: 'https://www.placecage.com/c/200/300', description: 'third seed', url_id: 'secret', user_id: user1.id})
video4 = Video.create({video_url: 'https://www.youtube.com/watch?v=wlE7KOUXYQY', name: "PLUS ULTRA PROMINENCE BURN! | My Hero Academia", thumbnail: 'https://www.placecage.com/c/200/300', description: 'forth seed', url_id: 'something'})
video5 = Video.create({video_url: 'https://www.youtube.com/watch?v=CDW2ReQZOQU', name: "UNITED STATES OF SMASH! | My Hero Academia", thumbnail: 'https://www.placecage.com/c/200/300', description: 'fifth seed', url_id: 'secret', user_id: user1.id})
video6 = Video.create({video_url: 'https://www.youtube.com/watch?v=wpOhT35YtWg&t=3s', name: "Deku vs Todoroki | My Hero Academia", thumbnail: 'https://www.placecage.com/c/200/300', description: 'sixth seed', url_id: 'something'})
video7 = Video.create({video_url: 'https://www.youtube.com/watch?v=ce6dhqGWdrA', name: "Demon Slayer | Sleeping Zenitsu Attack", thumbnail: 'https://www.placecage.com/c/200/300', description: 'seventh seed', url_id: 'secret', user_id: user1.id})
video8 = Video.create({video_url: 'https://www.youtube.com/watch?v=G8mBQsWJlFQ', name: "Demon Slayer- Zenitsu VS spider [60 FPS]", thumbnail: 'https://www.placecage.com/c/200/300', description: 'eigth seed', url_id: 'something'})
video9 = Video.create({video_url: 'https://www.youtube.com/watch?v=cgeRb19cfi4', name: "Infinite 100% | My Hero Academia", thumbnail: 'https://www.placecage.com/c/200/300', description: 'ningth seed', url_id: 'secret', user_id: user1.id})
video10 = Video.create({video_url: 'https://www.youtube.com/watch?v=yVfcsREsUYM', name: "Save Finral! | Black Clover", thumbnail: 'https://www.placecage.com/c/200/300', description: 'tenth seed', url_id: 'something'})

comment1 = Comment.create({message: 'Damn this so epic', timestamp_in_seconds: 45, tag: 'Epic', video_id: video1.id, user_id: user2.id})
comment2 = Comment.create({message: 'SPICY!!!!!', timestamp_in_seconds: 30, tag: 'Action', video_id: video1.id, user_id: user1.id})
comment3 = Comment.create({message: 'EPIC!!!', timestamp_in_seconds: 12, tag: 'Epic', video_id: video2.id, user_id: user2.id})
comment4 = Comment.create({message: 'CRAZY!!!!!!', timestamp_in_seconds: 20, tag: 'Action', video_id: video3.id, user_id: user1.id})
comment5 = Comment.create({message: 'THATS JUST INSANE!!', timestamp_in_seconds: 30, tag: 'Epic', video_id: video4.id, user_id: user2.id})
comment6 = Comment.create({message: 'OMG OMG DID YOU SEE THAT??!?!?', timestamp_in_seconds: 20, tag: 'Action', video_id: video5.id, user_id: user1.id})
comment7 = Comment.create({message: 'OH WOW LOOK AT THAT DAMN', timestamp_in_seconds: 15, tag: 'Epic', video_id: video4.id, user_id: user2.id})
comment8 = Comment.create({message: 'THATS JUST NASTY', timestamp_in_seconds: 49, tag: 'Action', video_id: video2.id, user_id: user1.id})
comment9 = Comment.create({message: 'what am i even watching??!?!', timestamp_in_seconds: 10, tag: 'Epic', video_id: video9.id, user_id: user2.id})
comment10 = Comment.create({message: 'HELOO???!@#$WEFSD', timestamp_in_seconds: 20, tag: 'Action', video_id: video2.id, user_id: user1.id})
comment11 = Comment.create({message: 'HE BEAT HIM YEAAAAA SON ', timestamp_in_seconds: 30, tag: 'Epic', video_id: video1.id, user_id: user2.id})
comment12 = Comment.create({message: 'COOOOOOOOOOOLIO', timestamp_in_seconds: 40, tag: 'Action', video_id: video2.id, user_id: user1.id})

puts 'Seed Files created'