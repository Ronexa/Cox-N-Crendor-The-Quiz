const questions = [
    {
        question: "Who said this quote: 'Wow, you certainly don't look fat in those jeans'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'If you want a woman to like you just go up to her and be like: hey you almost dont look fat in those jeans'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x2.mp3"
    },
    {
        question: "Who said this quote: 'Idiots dont eat treebark well unless they deepfry it that might be delicious'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x3.mp3"
    },
    {
        question: "Who said this quote: 'Your death is really boring'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x4.mp3"
    },
    {
        question: "Who said this quote: 'Imagination is for nerds'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x5.mp3"
    },
    {
        question: "Who said this quote: 'Why would this communist just take a dump all over an american treat'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x6.mp3"
    },
    {
        question: "Who said this quote: 'Some people have goals to climb mount everest some have goals to move up the job ladder my goal is to go to pink berry its not going to be easy tho but i think i can do it'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 1",
        audio: "sounds/episode1x7.mp3"
    },
    {
        question: "Who said this quote: 'I think one day we'll just hit a point where we'll get so professional that our level of professinalism will be equal to someone just starting out in professional radio'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x1.mp3"
    },
    {
        question: "Who said this quote: 'Welcome to the Grammar Cast my name is Horatio Bottomlip'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x2.mp3"
    },
    {
        question: "Who said this quote: 'So Jann hows that botched liposuction going'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x3.mp3"
    },
    {
        question: "Who said this quote: 'As about as good as your nosejob you whore'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x4.mp3"
    },
    {
        question: "Who said this quote: 'I dont understand how those whores became so famous'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x5.mp3"
    },
    {
        question: "Who said this quote: 'Look at the ass of the black haired one ooooh im gonna get it'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x6.mp3"
    },
    {
        question: "Who said this quote: 'You havent been funny for 40 years'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x7.mp3"
    },
    {
        question: "Who said this quote: 'Go for a day put on a smile do your thing let uncle Mark rub upon you if thats what hes gotta do let him get drunk, get drunk with uncle Mark who cares? the kids wont care they wont remember it give them some brandy theyll forget it '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode2x8.mp3"
    },
    {
        question: "Who said this quote: 'In the post-apocalypse the buttefly cheese would be a delicacy '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x1.mp3"
    },
    {
        question: "Who said this quote: 'Glaciers are growing and its all Obamas fault '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x2.mp3"
    },
    {
        question: "Who said this quote: 'No wonder Obama cares because hes a Kenyan '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x3.mp3"
    },
    {
        question: "Who said this quote: 'Welcome to our racist podcast'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x4.mp3"
    },
    {
        question: "Who said this quote: 'Dont you undestand if we use more than one square of toiletpaper the world will die '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x5.mp3"
    },
    {
        question: "Who said this quote: 'I aint just sugared I pre-sugared '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 3",
        audio: "sounds/episode3x6.mp3"
    },
    {
        question: "Who said this quote: 'I will punch a mother of three in the face to get one of those '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 4",
        audio: "sounds/episode4x1.mp3"
    },
    {
        question: "Who said this quote: 'Its just bad news youre just not getting older youre getting dumber '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 4",
        audio: "sounds/episode4x2.mp3"
    },
    {
        question: "Who said this quote: 'Rich entrepreneurs like Mark Cuban, if you want to invest in our candle we will gladly accept  '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x1.mp3"
    },
    {
        question: "Who said this quote: 'You know what, im not a fan of great deals '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x2.mp3"
    },
    {
        question: "Who said this quote: 'Listen, were not here for toys and were not here to make you happy '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x3.mp3"
    },
    {
        question: "Who said this quote: 'At some point in your life you get to the point where youre so beaten down in your life, you know what just kill me. it explains why men die much earlier than women. cos eventually youre 'just take me, take me lord' '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x4.mp3"
    },
    {
        question: "Who said this quote: 'These scientists should call their dear frend Darwin and ask him whats up, cos thats what that is'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x5.mp3"
    },
    {
        question: "Who said this quote: 'Theres a lot of people who propably have ginormous brains who are just idiots'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x6.mp3"
    },
    {
        question: "Who said this quote: 'If anything McDonalds is making you smarter'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x7.mp3"
    },
    {
        question: "Who said this quote: 'We can go into the surprising causes of erectile dysfunction if you want '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 5",
        audio: "sounds/episode5x8.mp3"
    },
    {
        question: "Who said this quote: 'I wish all lips were made of honey'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 6",
        audio: "sounds/episode6x1.mp3"
    },
    {
        question: "Who said this quote: 'Honeys antiviral aint no HIV up in here '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 6",
        audio: "sounds/episode6x2.mp3"
    },
    {
        question: "Who said this quote: 'Im gonna wear one across my nose so it looks like im always been in a fight, and women be like 'damn he can protect me' little do they know in any fight i will leave them there ill be like 'TAKE THE WOMAN''?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 6",
        audio: "sounds/episode6x3.mp3"
    },
    {
        question: "Who said this quote: 'Kim Jong-il is dead so he could technically have gone to a glue factory '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x1.mp3"
    },
    {
        question: "Who said this quote: 'Ive always wanted to depress people with my life '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x2.mp3"
    },
    {
        question: "Who said this quote: 'The only science i accept is the kind where its like good science like 'yeah in order to like get laid do this' good job scientist youve done it  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x3.mp3"
    },
    {
        question: "Who said this quote: 'Im gettin to Gran Torino levels of just like bitter and angry like i just wanna sit on my porch and do the gun finger thing to people who walk by'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x4.mp3"
    },
    {
        question: "Who said this quote: 'So if anything im curing myself of diseases everyday, i wake up get a nice glass of water that is instat disease curefication'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x5.mp3"
    },
    {
        question: "Who said this quote: 'The Yahoo level of smart person is propably someone who is not very smart '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 7",
        audio: "sounds/episode7x6.mp3"
    },
    {
        question: "Who said this quote: 'What kind of assholes writes these articles? this is what happens when youre english major and you have nothing better to do than work for Yahoo'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 8",
        audio: "sounds/episode8x1.mp3"
    },
    {
        question: "Who said this quote: 'Just cos a woman is on her period doesnt mean shes like 'ive gotta find the most immune man possible'  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 8",
        audio: "sounds/episode8x2.mp3"
    },
    {
        question: "Who said this quote: 'I just look up things that favor my life and i read them and feel happy'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 8",
        audio: "sounds/episode8x3.mp3"
    },
    {
        question: "Who said this quote: 'If you get stabbed while youre holding a gun you are bad at crime '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 9",
        audio: "sounds/episode9x1.mp3"
    },
    {
        question: "Who said this quote: 'I now understand what it must feel like to have been a black kid in the 90s when the white kids start to stealing all your cool slang  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 9",
        audio: "sounds/episode9x2.mp3"
    },
    {
        question: "Who said this quote: 'We're gonna value add some leverage to your viral video it is what it is '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 9",
        audio: "sounds/episode9x3.mp3"
    },
    {
        question: "Who said this quote: 'Ladies you stink when youre stressed '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x1.mp3"
    },
    {
        question: "Who said this quote: 'If you work out youre relieving and the sweat is what you are expelling, right? and so if youre stressing the sweat is the exact same thing like getting the stress out of you its oiling you up for a day of no stress '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x2.mp3"
    },
    {
        question: "Who said this quote: 'Stress is a natural lubricant'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x3.mp3"
    },
    {
        question: "Who said this quote: 'Mega Deathstorm the 4th coming in on thursday tune in to see all the destruction '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x4.mp3"
    },
    {
        question: "Who said this quote: 'If ignorance was power this country would be self sustaining '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x5.mp3"
    },
    {
        question: "Who said this quote: 'I dont know the deets all i know is thats what i heard and i heard what i heard '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x6.mp3"
    },
    {
        question: "Who said this quote: 'It started out i was joyous and filled with love and now this guy ruined it this guy single handedly ruined it for me '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 10",
        audio: "sounds/episode10x7.mp3"
    },
    {
        question: "Who said this quote: 'The only racism we have in America is the passive aggressive kind '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x1.mp3"
    },
    {
        question: "Who said this quote: 'We're racist but we dont talk about it'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x2.mp3"
    },
    {
        question: "Who said this quote: 'Can you Tokyo Drift across healthy curves '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x3.mp3"
    },
    {
        question: "Who said this quote: 'Im gonna make a diet book call Tokyo Drifting to healthy curves '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x4.mp3"
    },
    {
        question: "Who said this quote: 'Science your mission: destroy the sun, then everyone would be really thin '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x5.mp3"
    },
    {
        question: "Who said this quote: 'Youre just like 'Hey you better not touch that red button' and youre like 'I wanna touch the red button' '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x6.mp3"
    },
    {
        question: "Who said this quote: 'Thats what you need to do to your kids: mess with their minds, any good parent messes with their childs mind '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 11",
        audio: "sounds/episode11x7.mp3"
    },
    {
        question: "Who said this quote: 'Rather than the Macy's Thanksgiving Day Parade having a big fat santa in a red outfit just parade 13 homeless guys down the road each of them older and crazier than the next '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x1.mp3"
    },
    {
        question: "Who said this quote: 'Youre like Santa Claus youre like our Santa Claus youre also like Sinterklaas and that you keep young boys in black face around and youre a Yule Lad cos youre disheveled and maybe homeless '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x2.mp3"
    },
    {
        question: "Who said this quote: 'Ben Roethlisberger is like 'ummm my penis just falls out of my pants when im around ladies i dunno why' '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x3.mp3"
    },
    {
        question: "Who said this quote: 'If a woman ever says to you 'I dont care' or 'It doesnt matter' or 'Im ok with it' buy her flowers '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x4.mp3"
    },
    {
        question: "Who said this quote: 'Look im just saying: parents get your kid a prostitue, is what im saying  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x5.mp3"
    },
    {
        question: "Who said this quote: 'God youre such a failure, let me hire you another prostitute '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x6.mp3"
    },
    {
        question: "Who said this quote: 'I cheated sometimes and i turned out fine '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 12",
        audio: "sounds/episode12x7.mp3"
    },
    {
        question: "Who said this quote: 'My time certainly has a giant penis '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 13",
        audio: "sounds/episode13x1.mp3"
    },
    {
        question: "Who said this quote: 'I feel im like the Yin and Yang of humanity '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 13",
        audio: "sounds/episode13x2.mp3"
    },
    {
        question: "Who said this quote: 'I dont want to make friends anyway because you made the Vita and it sucks '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 13",
        audio: "sounds/episode13x3.mp3"
    },
    {
        question: "Who said this quote: 'Thats not bad, thats not a bad deal they can be an asshole to me for 25,5 '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 14",
        audio: "sounds/episode14x1.mp3"
    },
    {
        question: "Who said this quote: 'Jeff would call us 'Chubby boner' '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 14",
        audio: "sounds/episode14x2.mp3"
    },
    {
        question: "Who said this quote: 'I had sex with over 44 men Jerry '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 14",
        audio: "sounds/episode14x3.mp3"
    },
    {
        question: "Who said this quote: 'Dead people dont need refrigerators get it from grandma  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 14",
        audio: "sounds/episode14x4.mp3"
    },
    {
        question: "Who said this quote: 'We can clone some cows and feed it to people just not tell them theyre cloned cows no one cares  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x1.mp3"
    },
    {
        question: "Who said this quote: 'I want our first space adventure: when humans go out in space and we introduce us to the other species we say 'we're humans, we make it worse'  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x2.mp3"
    },
    {
        question: "Who said this quote: 'Tip number 1: silently stare at the lady, gentlemen, theyll love it '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x3.mp3"
    },
    {
        question: "Who said this quote: 'Im gonna go to a bar tomorrow night and just stare at women when they walk in '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x4.mp3"
    },
    {
        question: "Who said this quote: 'They propably dont want you to be like overwhelmed with body hair like a 40 year old Italian man '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x5.mp3"
    },
    {
        question: "Who said this quote: 'Our entire audience is spaghetti eating 40 year old italian men who love cloned hamburger meat '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x6.mp3"
    },
    {
        question: "Who said this quote: 'Independent parties and all the other parties are like the Cleveland Browns and the Kansas City Chiefs  '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 15",
        audio: "sounds/episode15x7.mp3"
    },
    {
        question: "Who said this quote: 'Well well well if it isnt the asians '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 16",
        audio: "sounds/episode16x1.mp3"
    },
    {
        question: "Who said this quote: 'Dental hygine and murder thats me '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 16",
        audio: "sounds/episode16x2.mp3"
    },
    {
        question: "Who said this quote: 'They thought beign a kindergarten teacher was a little like too hands off '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 16",
        audio: "sounds/episode16x3.mp3"
    },
    {
        question: "Who said this quote: 'Gandalf isnt real '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 17",
        audio: "sounds/episode17x1.mp3"
    },
    {
        question: "Who said this quote: 'I used to be delicious now im played out '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 17",
        audio: "sounds/episode17x2.mp3"
    },
    {
        question: "Who said this quote: 'You know whos fault this is? Obama. We dont even have real turkeys in America anymore '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 17",
        audio: "sounds/episode17x3.mp3"
    },
    {
        question: "Who said this quote: 'Why dont you regain your sense of wonder douchebags '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x1.mp3"
    },
    {
        question: "Who said this quote: 'We should design a surgical procedure in order to transform Andy Serkis into Gollum permanently '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x2.mp3"
    },
    {
        question: "Who said this quote: 'Did you know that only stupid people claim to be abducted by aliens because the aliens keep the smart ones '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x3.mp3"
    },
    {
        question: "Who said this quote: 'George i done went out in the fields looking for Bigfoot, then i got abducted by the aliens '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x4.mp3"
    },
    {
        question: "Who said this quote: 'Its like Bigfeet are the alien dogs  '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x5.mp3"
    },
    {
        question: "Who said this quote: 'Now that all these soccer moms are dressing up like S&M hoes now i have to do something even more kinky, im gonna dress up like a soccer mom  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x6.mp3"
    },
    {
        question: "Who said this quote: 'And if you do it youve chosen to do it and if you dont do it its because youve chosen not to do it  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x7.mp3"
    },
    {
        question: "Who said this quote: 'I have a very close relationship with my Ninja Turtles '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 18",
        audio: "sounds/episode18x8.mp3"
    },
    {
        question: "Who said this quote: 'You are a dream killer '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 19",
        audio: "sounds/episode19x1.mp3"
    },
    {
        question: "Who said this quote: 'Barack Obama i bet in his name it spells robot somewhere without a T '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 19",
        audio: "sounds/episode19x2.mp3"
    },
    {
        question: "Who said this quote: 'Pretty much was like: hey what if we like got some crappy meat and like diseased chickens and kinda just like smashed it all into something like fatty salty deepfried thing '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 19",
        audio: "sounds/episode19x3.mp3"
    },
    {
        question: "Who said this quote: 'Nothing makes me more hungry than hearing the words: stainless steel, cryogenics and flash freezing when talking about a meat by-product  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 19",
        audio: "sounds/episode19x4.mp3"
    },
    {
        question: "Who said this quote: 'I taught my kid how to stich pig skins so that when we're down there they know how to survive  '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x1.mp3"
    },
    {
        question: "Who said this quote: 'Im not crazy enough to think about monkey outbreaks thats stupid '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x2.mp3"
    },
    {
        question: "Who said this quote: 'To be or not to be is the question we ask ourselves daily yet, do we signify ourselves the way we think? that is the true question '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x3.mp3"
    },
    {
        question: "Who said this quote: 'Look im not seeing anyone leave it alone grandma '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x4.mp3"
    },
    {
        question: "Who said this quote: 'I am happy you old bird now get in the kitchen and make me cookies goddamnit '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x5.mp3"
    },
    {
        question: "Who said this quote: 'Parents job is to be in your face constantly, drive you crazy and make you want to leave the house so they can get the house back that they had to give you for 18 years '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x6.mp3"
    },
    {
        question: "Who said this quote: 'Your parents arent always right, you stupid idiots '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x7.mp3"
    },
    {
        question: "Who said this quote: 'I know which part of me is at 18....... inches '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 20",
        audio: "sounds/episode20x8.mp3"
    },
    {
        question: "Who said this quote: 'You just have to be abusive with vegetables and thats how you solve all of lifes problems '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x1.mp3"
    },
    {
        question: "Who said this quote: 'We like to beg ooh we like to beg ooh we like to beg cos we got on one leg, that dont make sense, how about our knees? we are very very eager to please '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x2.mp3"
    },
    {
        question: "Who said this quote: 'Are they trying to tell us that the only way to stop the Mayan Robots is to squeeze boobs  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x3.mp3"
    },

    {
        question: "Who said this quote: 'Mother Natures gonna not even know what happened, she'll be like: 'Whos been squeezing so many brests?' and when we stand proudly and say WE HAVE! she'll know, she was defeated'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x4.mp3"
    },
    {
        question: "Who said this quote: 'In her honor i will gladly rub the breasts of many women listening to Informer '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x5.mp3"
    },
    {
        question: "Who said this quote: 'No wonder it sounds like fapping cos technically its like brain fapping '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x6.mp3"
    },
    {
        question: "Who said this quote: 'Hows that strawberrysack going '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 21",
        audio: "sounds/episode21x7.mp3"
    },
    {
        question: "Who said this quote: 'Oh no I didnt squeeze enough boobs! '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 22",
        audio: "sounds/episode22x1.mp3"
    },
    {
        question: "Who said this quote: 'Because crazy people will always continue to be crazy thats the thing  '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 22",
        audio: "sounds/episode22x2.mp3"
    },
    {
        question: "Who said this quote: 'I dont care if you belive or not because im 15 years old and im gonna have a baby '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 22",
        audio: "sounds/episode22x3.mp3"
    },
    {
        question: "Who said this quote: 'Once you realise that your goal going throught the illusive forest, through this dark forest of mysterie you found comfort in knowing that what you want out of life is womens holes '?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 22",
        audio: "sounds/episode22x4.mp3"
    },
    {
        question: "Who said this quote: 'Ok everyone, remember to breathe because breathing is going to help you live ok? beathing is going to help you live '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 22",
        audio: "sounds/episode22x5.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },
    {
        question: "Who said this quote: 'kysymys '?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2",
        audio: "sounds/episode1x1.mp3"
    },











    // Add more questions here
];

export default questions;