# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create({name: 'Eric', email: 'eric@example.com', password: 'secret'})
user2 = User.create({name: 'Rayesh', email: 'rayesh@example.com', password: 'chicken'})
user3 = User.create({name: 'Demo', email: 'demo@example.com', password: 'demo'})

video1 = Video.create({video_url: 'https://www.youtube.com/watch?v=QTATI7MXwII', name: "Demon Slayer Kimetsu no Yaiba『Water Breathing』| OST Volume 2", user_id: user1.id})
video2 = Video.create({video_url: 'https://www.youtube.com/watch?v=n8ok5xT5FsM', name: "Demon Slayer: Kimetsu no Yaiba Movie OST - Set Your Heart Ablaze ~Demon Extermination~"})
video3 = Video.create({video_url: 'https://www.youtube.com/watch?v=ab8_fefO3vY', name: "The Ninth One | My Hero Academia", user_id: user1.id})
video4 = Video.create({video_url: 'https://www.youtube.com/watch?v=wlE7KOUXYQY', name: "PLUS ULTRA PROMINENCE BURN! | My Hero Academia"})
video5 = Video.create({video_url: 'https://www.youtube.com/watch?v=CDW2ReQZOQU', name: "United States Of Smash! | My Hero Academia", user_id: user1.id})
video6 = Video.create({video_url: 'https://www.youtube.com/watch?v=wpOhT35YtWg&t=3s', name: "Deku vs Todoroki | My Hero Academia"})
video7 = Video.create({video_url: 'https://www.youtube.com/watch?v=ce6dhqGWdrA', name: "Demon Slayer | Sleeping Zenitsu Attack", user_id: user1.id})
video8 = Video.create({video_url: 'https://www.youtube.com/watch?v=G8mBQsWJlFQ', name: "Demon Slayer | Zenitsu Thunder Clap [60 FPS]"})
video9 = Video.create({video_url: 'https://www.youtube.com/watch?v=cgeRb19cfi4', name: "Infinite 100% | My Hero Academia", user_id: user1.id})
video10 = Video.create({video_url: 'https://www.youtube.com/watch?v=yVfcsREsUYM', name: "Save Finral! | Black Clover"})
video11 = Video.create({video_url: 'https://www.youtube.com/watch?v=cLa-kRQ6d8c', name: "Farfalla"})

comment1 = Comment.create({message: 'Damn this so Epic!!!!!!!!!!', timestamp_in_seconds: 45, tag: 'epic', video_id: video1.id, user_id: user2.id})
comment2 = Comment.create({message: 'SPICY!!!!!', timestamp_in_seconds: 30, tag: 'action', video_id: video1.id, user_id: user1.id})
comment3 = Comment.create({message: 'Epic!!!', timestamp_in_seconds: 12, tag: 'epic', video_id: video2.id, user_id: user2.id})
comment4 = Comment.create({message: 'CRAZY!!!!!!', timestamp_in_seconds: 20, tag: 'action', video_id: video3.id, user_id: user1.id})
comment5 = Comment.create({message: 'THATS JUST INSANE!!', timestamp_in_seconds: 30, tag: 'epic', video_id: video4.id, user_id: user2.id})
comment6 = Comment.create({message: 'OMG OMG DID YOU SEE THAT??!?!?', timestamp_in_seconds: 20, tag: 'action', video_id: video5.id, user_id: user1.id})
comment7 = Comment.create({message: 'OH WOW LOOK AT THAT DAMN', timestamp_in_seconds: 15, tag: 'epic', video_id: video4.id, user_id: user2.id})
comment8 = Comment.create({message: 'THATS JUST NASTY', timestamp_in_seconds: 49, tag: 'action', video_id: video2.id, user_id: user1.id})
comment9 = Comment.create({message: 'what am i even watching??!?!', timestamp_in_seconds: 10, tag: 'epic', video_id: video9.id, user_id: user2.id})
comment10 = Comment.create({message: 'HELOO???!@#$WEFSD', timestamp_in_seconds: 20, tag: 'action', video_id: video2.id, user_id: user1.id})
comment11 = Comment.create({message: 'HE BEAT HIM YEAAAAA SON ', timestamp_in_seconds: 30, tag: 'epic', video_id: video1.id, user_id: user2.id})
comment12 = Comment.create({message: 'COOOOOOOOOOOLIO', timestamp_in_seconds: 40, tag: 'action', video_id: video2.id, user_id: user1.id})

# for demo
comment13 = Comment.create({message: 'A butterfly!', timestamp_in_seconds: 5, tag: 'cute', video_id: video11.id, user_id: user1.id})
comment14 = Comment.create({message: "Everyone loves cats", timestamp_in_seconds: 18, tag: 'cat', video_id: video11.id, user_id: user1.id})
comment15 = Comment.create({message: "aww so playful", timestamp_in_seconds: 18, tag: 'cat', video_id: video11.id, user_id: user1.id})
comment16 = Comment.create({message: "Watch out!", timestamp_in_seconds: 35, tag: 'danger', video_id: video11.id, user_id: user3.id})
comment17 = Comment.create({message: "Fly away butterfly!", timestamp_in_seconds: 35, tag: 'danger', video_id: video11.id, user_id: user2.id})
comment18 = Comment.create({message: "Bad kitty :(", timestamp_in_seconds: 38, tag: 'evil', video_id: video11.id, user_id: user3.id})
comment19 = Comment.create({message: "I'm Batman", timestamp_in_seconds: 48, tag: 'batman', video_id: video11.id, user_id: user2.id})
comment20 = Comment.create({message: "WOW so scary", timestamp_in_seconds: 55, tag: 'scary', video_id: video11.id, user_id: user3.id})
comment21 = Comment.create({message: 'Thats a small looking furball', timestamp_in_seconds: 60, tag: 'small', video_id: video11.id, user_id: user1.id})
comment22 = Comment.create({message: 'oh no he caught the butterfly', timestamp_in_seconds: 66, tag: 'vicious', video_id: video11.id, user_id: user2.id})
comment23 = Comment.create({message: 'dam that vicious cat can\'t leave that butterfly alone', timestamp_in_seconds: 66, tag: 'vicious', video_id: video11.id, user_id: user1.id})
comment24 = Comment.create({message: 'he can\'t have that, butterfly too slick', timestamp_in_seconds: 68, tag: 'slick', video_id: video11.id, user_id: user2.id})
comment25 = Comment.create({message: 'hahahaha, oh no he didn\'t LOL', timestamp_in_seconds: 68, tag: 'comedy', video_id: video11.id, user_id: user1.id})
comment26 = Comment.create({message: 'The butterfly did a nice cross over, that it made the cat fall over the table', timestamp_in_seconds: 75, tag: 'slick', video_id: video11.id, user_id: user1.id})
comment27 = Comment.create({message: 'The butterfly prevails!!!!!!', timestamp_in_seconds: 80, tag: 'cute', video_id: video11.id, user_id: user1.id})
comment28 = Comment.create({message: 'cat so close in catching that butterfly', timestamp_in_seconds: 85, tag: 'close', video_id: video11.id})
comment29 = Comment.create({message: 'tired of catching that butterfly i feel ya', timestamp_in_seconds: 93, tag: 'tired', video_id: video11.id})
comment30 = Comment.create({message: 'The animation is on point the lighting, the cat chase simple but well done', timestamp_in_seconds: 105, tag: 'good', video_id: video11.id})

puts 'Seed Files created'